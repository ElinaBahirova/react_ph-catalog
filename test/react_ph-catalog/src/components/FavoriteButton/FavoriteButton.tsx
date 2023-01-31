import { Product } from '../../types/Product';

type Props = {
  product: Product
};

export const FavoriteButton: React.FC<Props> = ({ product }) => {
  return (
    <button className="like-button">
    </button>
  )
};
