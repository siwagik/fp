import Link from "next/link";
import './page.css'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='app'>
      <div className="container">
        <div className="header">
          <header>
            <h1 className="logo">FantasticPower</h1>
            <nav>
              <Link href="/" className="link ">Главная</Link>
              <Link href="/rules" className="link ">Правила</Link>
              <Link href="/resource-pack" className="link ">Ресурс-пак</Link>
              <Link href="https://fantasticpower.ru/" className="link ">Форум</Link>
            </nav>
          </header>
        </div>
        <div className="main">
            <div className="left">
              <div className="left_information">
                <h1>Сеть увлекательных<br/>игровых серверов</h1>
                <p className="friend">Новые приключения ждут тебя и твоих друзей.<br/>Окунись в новый мир Minecraft вместе с <span className="fp">FantasticPower</span></p>
                <div className="buttonOnline">
                  <div className="button">
                      <p>Начать игру</p>
                      <img src="/play.png"/>
                  </div>
                  <div className="online">
                    <div className="circle"></div>
                    <h2>Сейчас в игре: <span>1200</span></h2>
                  </div>
                </div>
              </div>
              <div className="scroll">
                <img src="/arrow.png"/>
                <p>Прокрутите вниз</p>
              </div>
            </div>
          <div className="right">
            <img src="/character.png"/>
          </div>
        </div>
      </div>
      <div className="how_to_start">
        <div className="hts_container">
          <h1 className="hts_h1">Как начать игру?</h1>
          <div className="cards">
            <div className="card1 card">
              <div className="card_content">
                <h1 className="cardh1">Шаг 1</h1>
                <p className="cardp">Для начала игры на нашем проекте, вам нужно скачать игру Minecraft, вы можете сделать это бесплатно на сайте TLaucnher</p> 
              </div>
            </div>
            <div className="card2 card">
              <div className="card_content">
                <h1 className="cardh1">Шаг 2</h1>
                <p className="cardp">Что-бы играть на нашем проекте, вам нужно скачать любую версию в диапозоне: 1.16 - 1.19</p>
              </div>
            </div>
            <div className="card3 card">
              <div className="card_content">
                <h1 className="cardh1">Шаг 3</h1>
                <p className="cardp">Нужно добавить наш IP в список серверов, и сможете приступить к игре :3</p>
                <div className="cardButton">
                  <div className="Button">
                    <p className="cardButtonP">fantasticpower.ru</p>
                    <img src="/copy.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <footer>
        <div className="fantasticpower">
          <p>FantasticPower не связан с Mojang. Все средства идут на<br/>развитие проекта</p>
        </div>
        <div className="social">
          <a href="https://vk.com/fantasticpowerik" className="vk" target="_blank">
            <img src="/vk.png"/>
          </a>
          <a href="https://discord.com/invite/8Tu6Wzyqbu" className="discord" target="_blank">
            <img src="/discord.png"/>
          </a>
        </div>
      </footer>
      </div>
    </div>
  )
}
