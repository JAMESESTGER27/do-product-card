# Do-Product-card

Este es un paquete de pruebas de descrpligegue de npm

```
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "do-product-cart";
```


```
<ProductCard
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage/>
            <ProductTitle />
            <ProductButtons  />
          </>
        )}
      </ProductCard>
```      