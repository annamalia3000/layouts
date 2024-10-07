import { IconSwitch } from "../IconSwitch/IconSwitch";
import { CardsView } from "../CardsView/CardsView";
import { ListView } from "../ListView/ListView";

import classes from './store.module.css';
import { useState } from "react";

const products = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

export const Store: React.FC = () => {
    const [ view, setVeiw ] = useState<'list' | 'card'>('card');

    const handleSwitch = () => {
        setVeiw(view === 'card' ? 'list' : 'card');
    };

  return (
    <div className={classes['store']}>
        <IconSwitch 
          icon={view === 'list' ? 'view_module' : 'view_list'}
          onSwitch={handleSwitch}
        />
        {view === 'list' ? (
          <ListView items={products} />
        ) : (
        <CardsView cards={products} />
        )}
    </div>
  )
}
