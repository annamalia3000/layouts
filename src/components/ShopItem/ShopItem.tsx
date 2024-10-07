import classes from './shopItem.module.css';

type ShopItemProps = {
  name: string,
  price: string
  color: string,
  img: string
}

export const ShopItem: React.FC<ShopItemProps> = ({ name, price, color, img }) => {
  return (
    <div className={classes['shopitem']}>
      <img className={classes['shopitem-img']} src={img} alt={name} />
        <h2 className={classes['shopitem-name']}>{name}</h2>
        <h3 className={classes['shopitem-color']}>{color}</h3>
        <h3 className={classes['shopitem-price']}>{`$${price}`}</h3>
        <button className={classes['shopitem-button']}>Add to card</button>
    </div>
  )
}
