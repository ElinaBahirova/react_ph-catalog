import { FC, useMemo } from "react";
import { Banner } from "../../components/Banner";
import { ProductSlider } from "../../components/ProductSlider";
import { Product } from "../../types/Product";

interface Props {
  products: Product[];
}

export const HomePage: FC<Props> = ({ products }) => {
  const hottestPrices = useMemo(() => {
    return [...products.filter(product => product.discount > 0)]
      .sort((product1, product2) => {
      return product2.price * (product2.discount / 100) - product1.price * (product1.discount / 100);
    })
  }, [ products ]);

  return (
    <main className="home">
      <div className="container">
        <Banner />
        <section className="home__hot-prices">
          <ProductSlider products={hottestPrices} title={'Hot prices'} />
        </section>
      </div>
    </main>
  )
}