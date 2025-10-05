import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51SEo4KIkqzg9LmuHKJhWF98tQhXRMzh1jy26wvKVM6IWfJ76c1hCq3NzkWnIXAzaqjEWbtcVvNergcGHFHXSKVhA00cJcZWuhQ'
);

export const bookTour = async tourId => {
  try {
    // 1. Get checkout session from API
    const session = await axios({
      method: 'GET',
      url: `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    });
    console.log(session);

    // 2. Create checkout form + charge credit card
    window.location.href = session.data.session.url;
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id
    // });
  } catch (error) {
    console.error(error);
    showAlert('error', error);
  }
};
