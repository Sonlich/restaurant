import './styles.css'
import { useDispatch } from 'react-redux'
import { dishesActions } from '../../store/actions/dishes'

export default function DishCard({ id, name, price, count, type }) {
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
    console.log('id', id)
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
    console.log('id', id)
  }

  return (
    <div className="dish-card">
      <img
        src="https://picsum.photos/280/280"
        alt="dish"
        className="dish-img"
      />
      <div className="dish-name">{name}</div>
      <div>
        <span>{price}₴</span>
      </div>

      <div className="count-field">
        <div>
          <button
            className="add-dish"
            onClick={
              count > 0 ? () => DeleteDish(id, count, name, price, type) : ''
            }
          >
            –
          </button>
        </div>

        <div className="count-menu">{count}</div>
        <div>
          <button
            className="add-dish"
            onClick={
              count < 20 ? () => AddDish(id, count, name, price, type) : ''
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
