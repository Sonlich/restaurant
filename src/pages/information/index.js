import './styles.css'
import React from 'react'
import MainHeader from '../../components/header'
import SocialNetworks from '../../components/socialNetworks'
import Footer from '../../components/footer'
import soup from './soup.png'

export default function InformationPage() {
  return (
    <div>
      <MainHeader />
      <div className="all-information">
        <div className="column-info">
          <div className="information-delivery">
            <div className="delivery">Доставка</div>
            <div className="orange-line"></div>
            <div className="delivery-description">
              Бесплатная доставка совершаеться при заказе сумма которого выше
              250 гривен. Если же сумма - ниже, то стоимость доставки равна 50
              гривнам. Доставка совершается исключительно в пределах города.
            </div>
          </div>
          <div className="information-discount">
            <div className="discount">Скидка имениннику</div>
            <div className="orange-line"></div>
            <div className="discount-description">
              При предьявлении паспорта в течении 7 дней (в день рождение, а так
              же 3 дня до и после него) имениннику предоставляется скидка 10%.
              Не действует на товары по акции.
            </div>
          </div>
        </div>
        <div className="information-stock">
          <div className="stock">Акции</div>
          <div className="orange-line"></div>
          <div className="stock-description">
            <p>
              Каждую пятницу с 11:00 до 13:00 действует скидка на супы в размере
              15%.
            </p>
            <p>
              Отметьте нас в соцсетях или напишите отзыв в Google maps -
              гарантировано получите любой напиток при следующем заказе -
              бесплатно! (Акция не действует на алкогольные напитки)
            </p>
          </div>
          <img src={soup} alt="soup" className="soup-img" />
        </div>{' '}
        <SocialNetworks />
      </div>
      <div className="footer-information">
        <Footer />
      </div>
    </div>
  )
}
