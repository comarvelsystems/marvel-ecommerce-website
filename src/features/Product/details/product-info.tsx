/* eslint-disable react/jsx-no-literals */

"use client";

import { FC, Fragment } from "react";
import { useTranslations } from "next-intl";

interface Props {
  productInfoList: { name: string; value: string }[];
}

const ProductInfo: FC<Props> = ({ productInfoList }) => {
  const t = useTranslations("product");

  return (
    <div className='product-identifier text-md divide-divide divide-x text-muted-foreground/90'>
      {productInfoList?.map(({ name, value }) => (
        <Fragment key={`${name}`}>
          {value && (
            <span>
              {t(name as any)}: {value}
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ProductInfo;
