import { Product } from '../../types/Product';

type Props = {
  product: Product
};

export const AddButton: React.FC<Props> = ({ product }) => {
  return (
    <button className="add-to-cart-button">
      Add to cart
    </button>
  )
};
