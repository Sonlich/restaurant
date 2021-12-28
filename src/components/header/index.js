import './styles.css'
import icon from './icon.png'
import Basket from '../basket'
import { Link } from 'react-router-dom'

export default function MainHeader() {
  return (
    <div>
      <header>
        <div className="name">
          <img src={icon} alt="logo" className="logo" />
          <div className="rest-name">Portofivner </div>
        </div>
        <div className="pages">
          <div className="page">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Главная
            </Link>
          </div>

          <div className="page">
            {' '}
            <Link to="/menu" style={{ textDecoration: 'none', color: 'black' }}>
              Меню
            </Link>
          </div>
          <div className="page">
            {' '}
            <Link
              to="/information"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Информация
            </Link>
          </div>
          <div className="page">
            {' '}
            <Link
              to="/contacts"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Контакты
            </Link>
          </div>
        </div>
        <Link to="/basket" style={{ textDecoration: 'none' }}>
          <Basket />
        </Link>
      </header>
    </div>
  )
}
