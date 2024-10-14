import Heading from "@/components/Heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CheckoutPaymentItem from "./CheckoutPaymentItem";
import CheckoutPaymentMethod from "./CheckoutPaymentMethod";

const CheckoutPayment = () => {
  return (
    <div className='space-y-4'>
      <Heading as='h2' className='text-xl'>
        Payment
      </Heading>
      <Card className='p-0 shadow-none'>
        <CardHeader className='px-4 py-0'>
          <ul className='grid grid-cols-3'>
            <CheckoutPaymentItem
              icon='CreditCard'
              title='Credit Card'
              label='credit'
            />
            <CheckoutPaymentItem
              icon='Landmark'
              title='Bank Transfer'
              label='bank'
            />
            <CheckoutPaymentItem
              icon='HandCoins'
              title='Cash on Delivery'
              label='cash'
            />
          </ul>
        </CardHeader>
        <CardContent className='py-4 md:py-7'>
          <CheckoutPaymentMethod />
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPayment;
