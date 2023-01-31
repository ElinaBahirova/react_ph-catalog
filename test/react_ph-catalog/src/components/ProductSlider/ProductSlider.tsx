import { FC, useState } from "react";
import { Product } from "../../types/Product";
import { ProductCard } from "../ProductCard";


interface Props {
  products: Product[];
  title: string;
}
export const ProductSlider: FC<Props> = ({ products, title }) => {
  const [firstElem, setFirstElem] = useState(0);

  const moveRightHandler = () => {
    let value = firstElem + 4;

    if (value < 0) {
      value = 0;
    }

    setFirstElem(value);
  };

  const moveLeftHandler = () => {
    let value = firstElem - 4;

    if (value < 4) {
      value = 0;
    }

    setFirstElem(value);
  };

  return (
    <div className="slider">
      <div className="slider__top">
        <h2 className="slider__title">
          {title}
        </h2>
        <div className="slider__buttons">
          <button
            type="button"
            className="slider__button--left slider__button"
            disabled={firstElem < 4}
            onClick={moveLeftHandler}
          />
          <button
            type="button"
            className="slider__button--right slider__button"
            disabled={firstElem > products.length - 5}
            onClick={moveRightHandler}
          />
        </div>
      </div>
      <div className="slider__content">
        {products.slice(firstElem, firstElem + 4).map((product) => {
          return (
            <div className="slider__card card" key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
