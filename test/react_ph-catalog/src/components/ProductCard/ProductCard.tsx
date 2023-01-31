import React from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { Product } from '../../types/Product';
import { AddButton } from '../AddButton';
import { FavoriteButton } from '../FavoriteButton';

type Props = {
  product: Product
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const newPrice = (100 - product.discount) / 100 * product.price;
  const linkClickHandler = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Link
        className="card__link"
        to={`/${product.type}s/${product.id}`}
        onClick={linkClickHandler}
      >
        <img
          className="card__image"
          src={product.imageUrl}
          alt={product.name}
        />
      </Link>
      <h3 className="card__title">{product.name}</h3>
      <div className="card__price">
        {newPrice !== product.price && (
          <p className="card__newPrice">
            $
            {newPrice}
          </p>
        )}
        <p className={classNames({
          card__oldPrice: newPrice !== product.price,
          card__newPrice: newPrice === product.price,
        })}
        >
          $
          {product.price}
        </p>
      </div>
      <div className="card__line" />
      <div className="card__characteristic">
        <p className="card__name">Screen</p>
        <p className="card__value">{product.screen}</p>
      </div>
      <div className="card__characteristic">
        <p className="card__name">Capacity</p>
        <p className="card__value">{product.capacity}</p>
      </div>
      <div className="card__characteristic">
        <p className="card__name">RAM</p>
        <p className="card__value">{product.ram}</p>
      </div>
      <div className="card__button">
        <AddButton product={product} />
        <FavoriteButton product={product} />
      </div>
    </>
  );
};
