import { ShopCard } from '../ShopCard/ShopCard';

import classes from './cardsView.module.css';

type CardsViewProps = {
    cards: Array<{
      name: string;
      price: string;
      color: string;
      img: string;
    }>;
  };

export const CardsView: React.FC<CardsViewProps> = ({ cards }) => {
  return (
    <div className={classes['cards-view']}>
        {cards.map((card, index) => (
            <ShopCard key={index} {...card} />
        ))}
    </div>
  )
}
