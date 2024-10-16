"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "./ui/badge";
import {
  Visa,
  MasterCard,
  Mada,
  Tabby,
  Tamara,
  ApplePay,
} from "@/assets/images";

interface Props {
  id?: string;
  type: string;
  number: string;
  isDefault: boolean;
  index?: number;
}

const PaymentCard: React.FC<Props> = ({ id, type, number, isDefault }) => {
  const cardNumber = number.slice(0, 4);

  return (
    <div className='relative overflow-hidden'>
      <Card className='p-0 shadow-none'>
        <CardContent className='px-4 py-4 md:py-7'>
          <div className='flex w-full flex-wrap items-center justify-between gap-5 sm:flex-nowrap'>
            <div className='flex flex-1 flex-shrink-0 items-center gap-5'>
              <div className='flex items-center gap-1.5'>
                <PaymentImage type={type} />
                <p className='font-semibold'>{cardNumber}</p>
                <span className='relative top-0.5 text-lg font-bold'>***</span>
              </div>
            </div>

            <div className='flex w-full items-center justify-between gap-1.5 border-t border-border/40 pt-2 sm:w-auto sm:justify-normal sm:gap-3 sm:border-none sm:pt-0'>
              <Button
                variant='ghost'
                size='sm'
                className='gap-x-1 text-muted-foreground'
              >
                <Trash2 size={18} />
                Delete
              </Button>
              {isDefault && <Badge>Default</Badge>}
              {!isDefault && (
                <div className='flex items-center space-x-2'>
                  <Label
                    htmlFor={`set-default-${type}`}
                    className='font-normal'
                  >
                    Set as default
                  </Label>
                  <Switch id={`set-default-${type}`} />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const PaymentImage = ({ type }: { type: string }) => {
  return (
    <>
      {type === "visa" && (
        <Image src={Visa} width={50} height={66} alt={type} />
      )}
      {type === "mastercard" && (
        <Image src={MasterCard} width={50} height={66} alt={type} />
      )}
      {type === "mada" && (
        <Image src={Mada} width={50} height={66} alt={type} />
      )}
      {type === "tabby" && (
        <Image src={Tabby} width={50} height={66} alt={type} />
      )}
      {type === "tamara" && (
        <Image src={Tamara} width={50} height={66} alt={type} />
      )}
      {type === "applepay" && (
        <Image src={ApplePay} width={50} height={66} alt={type} />
      )}
    </>
  );
};

export default PaymentCard;
