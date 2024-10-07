import classes from './shopCard.module.css';

type ShopCardProps = {
  name: string,
  price: string
  color: string,
  img: string
}

export const ShopCard: React.FC<ShopCardProps> = ({ name, price, color, img }) => {
  return (
    <div className={classes['shopcart']}>
        <div className={classes['shopcart-header']}>
          <h2 className={classes['shopcart-name']}>{name}</h2>
          <p className={classes['shopcart-color']}>{color}</p>
        </div>
        <img className={classes['shopcart-img']} src={img} alt={name}/>
        <div className={classes['shopcart-footer']}>
          <p className={classes['shopcart-price']}>{`$${price}`}</p>
          <button className={classes['shopcart-button']}>Add to card</button>
        </div>
    </div>
  )
}
