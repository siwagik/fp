'use client'
import Link from 'next/link'
import './page.css'
import { Jost } from 'next/font/google'
const jost = Jost({ subsets: ['latin'] })

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useEffect, useState, useRef, useHtmlProps } from "react";


export default function Home() {

  const navRef = useRef(false)
  const [isMenuOpen, setMenuOpen ] = useState(false)
 
  const handleClick = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('active');
      setMenuOpen(!isMenuOpen);
    }
  };
  
  const divRef = useRef(null);
  const handleButtonClick = () => {
    if (divRef.current) {
      const elementOffset = divRef.current.offsetTop;

      // Прокручиваем к элементу
      window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      });
    }
  };

  const copy = useRef(false)
  const handleCopy = () => {
    const textToCopy = copy.current.textContent
    navigator.clipboard.writeText(textToCopy)
  }
  

  return (
    <div className='app'>
      <div className="container">
        <div className="header">
          <header>
            <h1 className="logo">FantasticPower</h1>
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`} ref={navRef}>
              <Link href="/" className="link ">Главная</Link>
              <Link href="/rules" className="link ">Правила</Link>
              <Link href="https://google.com/" className="link " target='_blank'>Форум</Link>
              <Link href="https://google.com/" className="link " target='_blank'>Донат</Link>
              <button className="burger" onClick={handleClick}>
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                    fill="white"
                    className="close-menu menu-icon"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="white"
                    className="open-menu menu-icon"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                  </svg>
                )}
              </button>
            </nav>
          </header>
        </div>
        <div className="main">
            <div className="left">
              <div className="left_information">
                <h1>Сеть увлекательных<br/>игровых серверов</h1>
                <p className="friend">Новые приключения ждут тебя и твоих друзей.<br/>Окунись в новый мир Minecraft вместе с <span className="fp">FantasticPower</span></p>
                <div className="buttonOnline">
                  <div className="button" onClick={handleButtonClick}>
                      <p>Начать игру</p>
                      <img src="/play.png"/>
                  </div>
                </div>
              </div>
            </div>
          <div className="right">
            <img src="/character.png"/>
          </div>
        </div>
      </div>
      <div className="how_to_start" ref={divRef}>
        <div className="hts_container">
          <h1 className="hts_h1">Как начать игру?</h1>
          <div className="cards">
              <Swiper
                modules={[Navigation]}
                spaceBetween={48}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide className="card1">
                  <div className="card_content">
                    <h1 className="cardh1">Шаг 1</h1>
                    <p className="cardp">Для начала игры на нашем проекте, вам нужно скачать игру Minecraft, вы можете сделать это бесплатно на сайте TLaucnher</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card2">
                  <div className="card_content">
                    <h1 className="cardh1">Шаг 2</h1>
                    <p className="cardp">Что-бы играть на нашем проекте, вам нужно скачать любую версию в диапозоне: 1.16 - 1.19</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card3">
                  <div className="card_content">
                    <h1 className="cardh1">Шаг 3</h1>
                    <p className="cardp">Нужно добавить наш IP в список серверов, и сможете приступить к игре :3</p>
                    <div className="cardButton">
                      <div className="Button" ref={copy} onClick={handleCopy}>
                        <p className="cardButtonP">https://google.com/</p>
                        <img src="/copy.png"/>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
          </div>
        </div>
        <div className="separator"></div>
        <footer>
          <div className="fantasticpower">
            <p>FantasticPower не связан с Mojang. Все средства идут на развитие проекта</p>
          </div>
          <div className="social">
            <a href="https://google.com/" className="vk" target="_blank">
              <img src="/vk.png"/>
            </a>
            <a href="https://google.com/" className="discord" target="_blank">
              <img src="/discord.png"/>
            </a>
          </div>
        </footer>
      </div>
    </div>
    
  )
}
