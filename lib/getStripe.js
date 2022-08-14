import { loadStripe } from "@stripe/stripe-js";

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51IRfcQDbrst2vrWuTKLjpsB4rLAIsF8Vvh7Vn7kydkOgh2eMszX1bPwTc1srirEJHtQX7pWA1wx6NSAesuq5QJE200Yn3oI71E')
  }
  return stripePromise
}
export default getStripe