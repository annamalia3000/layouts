import { ShopItem } from '../ShopItem/ShopItem';

import classes from './listView.module.css';

type ListViewProps = {
    items: Array<{
      name: string;
      price: string;
      color: string;
      img: string;
    }>;
  };

export const ListView: React.FC<ListViewProps> = ({ items }) => {
  return (
    <div className={classes['list-view']}>
        {items.map((item, index) => (
            <ShopItem key={index} {...item} />
        ))}
    </div>
  )
}
