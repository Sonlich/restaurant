import './styles.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useSelector } from 'react-redux'

export default function Basket() {
  const dishes = useSelector((state) => state.dishes)
  let priceBasket = 0
  let countBasket = 0
  return (
    <div className="basket">
      <div className="info">
        <div>
          {dishes
            .filter((list) => list.count > 0)
            .forEach((list) => {
              priceBasket += list.count * list.price
              return priceBasket
            })}
          {priceBasket}₴
        </div>
        <div>|</div>
        <div className="count">
          <div classname="icon-basket">
            <ShoppingBasketIcon />
          </div>
          <div className="number-count">
            {' '}
            {dishes
              .filter((list) => list.count > 0)
              .forEach((list) => {
                countBasket += list.count
                return countBasket
              })}
            {countBasket}{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
