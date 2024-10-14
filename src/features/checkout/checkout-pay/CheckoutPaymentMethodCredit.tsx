import Heading from "@/components/Heading";
// import CheckoutPaymentMethodCreditSavedCardsForm from "./CheckoutPaymentMethodCreditSavedCardsForm";
import CheckoutPaymentMethodAddCreditForm from "./CheckoutPaymentMethodAddCreditForm";

const CheckoutPaymentMethodCredit = () => {
  return (
    <div>
      <Heading as='h6'>Saved cards</Heading>
      {/* <CheckoutPaymentMethodCreditSavedCardsForm /> */}
      <CheckoutPaymentMethodAddCreditForm />
    </div>
  );
};

export default CheckoutPaymentMethodCredit;
