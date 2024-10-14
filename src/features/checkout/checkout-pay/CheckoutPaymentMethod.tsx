"use client";

import CheckoutPaymentMethodCredit from "./CheckoutPaymentMethodCredit";
import usePaymentMethodStore from "./usePaymentMethodStore";

const CheckoutPaymentMethod = () => {
  const { method } = usePaymentMethodStore();

  return <>{method === "credit" && <CheckoutPaymentMethodCredit />}</>;
};

export default CheckoutPaymentMethod;
