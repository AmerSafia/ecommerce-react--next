import { loadStripe } from "@stripe/stripe-js";

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51LWGkyK9TzZgBj8omiF7oJ6nW8Vxd1mcCnTUs3YL66PqYIGs2s6eKYz4I9c2h7cZbb1bzjJHxpxTDy3lopUMJxlZ002gJuihn1')
  }
  return stripePromise
}
export default getStripe