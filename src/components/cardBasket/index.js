import './styles.css'
import { useDispatch } from 'react-redux'
import { dishesActions } from '../../store/actions/dishes'

export default function BasketCard({ id, name, price, count, type }) {
  const dispatch = useDispatch()

  const AddDish = (id, count, name, price, type) => {
    dispatch(
      dishesActions.addDish({
        id: id,
        name: name,
        price: price,
        count: count,
        type: type
      })
    )
  }

  const DeleteDish = (id, count, name, price, type) => {
    dispatch(
      dishesActions.deleteDish({
        id: id,
        name: name,
        price: price,
        count: count,
        type: type
      })
    )
  }

  const DeleteThisTypeDish = (id) => {
    dispatch(
      dishesActions.deleteThisTypeDish({
        id: id
      })
    )
  }
  return (
    <div className="main-div-basket">
      <div className="line-basket" />
      <div className="basket-card">
        <div className="name-img-dish">
          <img
            src="https://picsum.photos/80/80"
            alt="dish"
            className="img-dish"
          />
          <span>{name}</span>
        </div>
        <div className="div-count-dish">
          <div className="count-dish">
            <button
              className="add-del-buttons"
              onClick={
                count > 1 ? () => DeleteDish(id, count, name, price, type) : ''
              }
            >
              –
            </button>
            <div className="count-basket">{count}</div>
            <button
              className="add-del-buttons"
              onClick={
                count < 20 ? () => AddDish(id, count, name, price, type) : ''
              }
            >
              +
            </button>
          </div>
          <div className="del-pr">
            <div className="price-basket">{price * count}₴</div>

            <button
              className="delete-dish-basket"
              onClick={() => DeleteThisTypeDish(id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
