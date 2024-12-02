/* eslint-disable react/jsx-no-literals */

"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";
import useProductStore from "../store/use-product-store";

const ProductInfo = () => {
  const t = useTranslations("product");
  const model = useProductStore(state => state.product.model);
  const sku = useProductStore(state => state.product.sku);
  const brand = useProductStore(state => state.product.manufacturer_name);

  const productInfoList = [
    { name: "model", value: model },
    { name: "sku", value: sku },
    { name: "brand", value: brand },
  ];

  const isValue = productInfoList.some(info => info.value);

  return (
    <>
      {isValue && (
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
      )}
    </>
  );
};

export default ProductInfo;
