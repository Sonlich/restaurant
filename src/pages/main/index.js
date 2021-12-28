import './styles.css'
import React from 'react'
import MainHeader from '../../components/header'
import MainFooter from '../../components/mainFooter'
import food from './food.png'
import SocialNetworks from '../../components/socialNetworks'

export default function MainPage() {
  return (
    <div>
      <div className="header">
        <MainHeader />
      </div>
      <div className="gray-line"></div>
      <div className="circle"></div>
      <div className="all-info">
        <div className="food-img">
          <img src={food} alt="food" />
        </div>
        <div className="main-information">
          <div className="about-us">О нас</div>
          <div className="tagline">
            Portofivner - место встречи всех шедевров кухни
          </div>
          <div className="orange-line"></div>
          <div className="description">
            <p>
              Вкус, который уже давно стал классикой. Выбери чем ты будешь
              наслаждаться именно сегодня.{' '}
            </p>
            <p>
              Мы используем исключительно качественные продукты, наши повара -
              это профессионалы своего дела, которые делают не просто еду, а
              само исскуство. Наша доставка - самая быстрая по городу, а курьеры
              очень приветливые.
            </p>
          </div>
        </div>
        <SocialNetworks className="social-networks" />
      </div>
      <MainFooter />
    </div>
  )
}
