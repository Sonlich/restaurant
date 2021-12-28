import './styles.css'
import React from 'react'
import MainHeader from '../../components/header'
import BasketCard from '../../components/cardBasket'
import Footer from '../../components/footer'
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { dishesActions } from '../../store/actions/dishes'
import CreateCard from '../../components/userInfoField'

export default function BasketPage() {
  const dishes = useSelector((state) => state.dishes)
  const dispatch = useDispatch()
  let allPrice = 0
  let allCount = 0

  const DeleteAllDish = () => {
    dispatch(dishesActions.deleteAllDish({}))
  }

  return (
    <div>
      <MainHeader />
      {dishes
        .filter((list) => list.count > 0)
        .forEach((list) => {
          allCount += list.count
          return allCount
        })}
      {allCount > 0 ? (
        <div className="main-basket">
          <div className="busket-name">
            <h2>Корзина</h2>
            <div className="but-del-all">
              <button className="delete-all" onClick={() => DeleteAllDish()}>
                <div className="icon-basket">
                  <DeleteIcon />
                </div>
                <div>Очистить корзину</div>
              </button>
            </div>
          </div>
          <div className="basket-cards">
            {dishes
              .filter((list) => list.count > 0)
              .map((list) => (
                <BasketCard
                  id={list.id}
                  name={list.name}
                  price={list.price}
                  count={list.count}
                  type={list.type}
                />
              ))}
          </div>
          <div className="div-payment">
            <div></div>
            <div className="payment">
              <span>
                Сумма заказа:{' '}
                <span className="price">
                  {dishes
                    .filter((list) => list.count > 0)
                    .forEach((list) => {
                      allPrice += list.price * list.count
                      console.log('ssss', allPrice)
                      return allPrice
                    })}
                  {allPrice}₴
                </span>
              </span>
              <CreateCard />
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-basket">
          <h1>Ваша корзина пустая</h1>
        </div>
      )}

      <div className="footer-basket">
        <Footer />
      </div>
    </div>
  )
}
