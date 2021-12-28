import './styles.css'
import React from 'react'
import SocialNetworks from '../../components/socialNetworks'
import Footer from '../../components/footer'
import MainHeader from '../../components/header'

export default function ContactsPage() {
  return (
    <div>
      <MainHeader />
      <div className="inform">
        <div>
          <h2>Киев, улица Шевченка, 89</h2>
          <div>
            09900118890
            <br />
            0507023755
          </div>
          <br />
          <div>Работаем с 10:00 до 22:30</div>
          <br />
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.4269761837345!2d30.429238616054086!3d50.39587977946798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c96b6a7c89c7%3A0x2b89fad402861c52!2z0YPQuy4g0KjQtdCy0YfQtdC90LrQviwgODksINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1638139494472!5m2!1sru!2sua"
            title="GoogleMap"
            style={{
              width: '50%',
              height: '450px',
              border: '0',
              allowFullScreen: '',
              loading: 'lazy'
            }}
          ></iframe>
        </div>
      </div>
      <div className="footer-cont">
        <Footer />
      </div>
    </div>
  )
}
