import './styles.css'
import React, { useState } from 'react'
import MainHeader from '../../components/header'
import DishCard from '../../components/card'
import Footer from '../../components/footer'
import { dishCards } from '../../components/dishArray'
import { useSelector } from 'react-redux'

export default function MenuPage() {
  const [typeDish, setTypeDish] = useState('all-dishes')

  const onTypeDishAll = () => {
    setTypeDish('all-dishes')
  }

  const onTypeDishSoup = () => {
    setTypeDish('soup')
  }

  const onTypeDishMain = () => {
    setTypeDish('main-dish')
  }

  const onTypeDishSalads = () => {
    setTypeDish('salad')
  }

  const onTypeDishDesserts = () => {
    setTypeDish('desserts')
  }

  const onTypeDishDrinks = () => {
    setTypeDish('drinks')
  }

  const dishes = useSelector((state) => state.dishes)
  console.log(typeDish)
  return (
    <div>
      <MainHeader />
      <div className="menu">
        <div className="category">
          <div className="circle-1" />
          <button className="category-button" onClick={onTypeDishAll}>
            Всё меню
          </button>
          <button className="category-button" onClick={onTypeDishSoup}>
            Супы
          </button>
          <button className="category-button" onClick={onTypeDishMain}>
            Основное
          </button>
          <button className="category-button" onClick={onTypeDishSalads}>
            Салаты
          </button>
          <button className="category-button" onClick={onTypeDishDesserts}>
            Десерты
          </button>
          <button className="category-button" onClick={onTypeDishDrinks}>
            Напитки
          </button>
          <div className="circle-2" />
        </div>
        <div className="list-dishes">
          <div className="dishes-menu">
            {dishes.map((dish, index) =>
              typeDish == 'all-dishes' ? (
                <>
                  <DishCard
                    id={dish.id}
                    name={dish.name}
                    price={dish.price}
                    type={dish.type}
                    count={dish.count}
                    index={index}
                    key={index}
                  />
                </>
              ) : typeDish == 'soup' && dish.type == 'soup' ? (
                <>
                  <DishCard
                    id={dish.id}
                    name={dish.name}
                    price={dish.price}
                    count={dish.count}
                    type={dish.type}
                    index={index}
                    key={index}
                  />
                </>
              ) : typeDish == 'main-dish' && dish.type == 'main-dish' ? (
                <>
                  <DishCard
                    id={dish.id}
                    name={dish.name}
                    price={dish.price}
                    count={dish.count}
                    type={dish.type}
                    index={index}
                    key={index}
                  />
                </>
              ) : typeDish == 'salad' && dish.type == 'salad' ? (
                <>
                  <DishCard
                    id={dish.id}
                    name={dish.name}
                    price={dish.price}
                    count={dish.count}
                    type={dish.type}
                    index={index}
                    key={index}
                  />
                </>
              ) : typeDish == 'desserts' && dish.type == 'desserts' ? (
                <>
                  <DishCard
                    id={dish.id}
                    name={dish.name}
                    price={dish.price}
                    count={dish.count}
                    type={dish.type}
                    index={index}
                    key={index}
                  />
                </>
              ) : typeDish == 'drinks' && dish.type == 'drinks' ? (
                <>
                  <DishCard
                    id={dish.id}
                    name={dish.name}
                    price={dish.price}
                    count={dish.count}
                    type={dish.type}
                    index={index}
                    key={index}
                  />
                </>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
