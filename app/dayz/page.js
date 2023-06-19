'use client'

import Link from 'next/link'
import './dayz.css'
import '../page.css'

import { Jost } from 'next/font/google'
const jost = Jost({ subsets: ['latin'] })

import { useEffect, useState, useRef, useHtmlProps } from "react";

export default function DayZ() {
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

    return(
        <div className="app">
            <div className="header">
                <header>
                    <h1 className="logo">FantasticPower</h1>
                    <nav className={`nav ${isMenuOpen ? 'active' : ''}`} ref={navRef}>
                    <Link href="/" className="link ">Главная</Link>
                    <Link href="/rules" className="link ">Правила</Link>
                    <Link href="https://fantasticpower.ru/" className="link ">Форум</Link>
                    <Link href="/" className="link ">Донат</Link>
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
                            fill="#7B68EE"
                            className="open-menu menu-icon"
                        >
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                        )}
                    </button>
                    </nav>
                </header>
            </div>
            <div className='main-dayz'>
                <div className='dayz-rules'>
                    <h1>Правила DayZ</h1>
                        <p>1. Действия в игре<br/>Нарушение правил сервера может быть наказуемо: Предупреждением, баном на сервере на определённый срок или изьятием игровых предметов или валюты</p> 
                        <p>1.1. Обман при обмене предметов<br/>Запрещено обманывать игроков во время обменов при присутствии модератора. В том числе:Запрещено вводить в заблуждение неясными формулировками условий.Запрещено убивать Модератора, проводящего обмен, до тех пор, пока он не покинет место проведения обмена.<br/><span className="mark">Наказание</span>— бан и/или конфискация украденных предметов</p> 
                        <p>1.2. Помеха обмену<br/>Запрещено мешать проведению обмена и/или воровать игровые предметы, которые участвуют непосредственно в этом обмене.<br/><span className='mark'>Наказание</span> — бан и/или конфискация украденных предметов</p>
                        <p>1.3. Телепортация<br/>Запрещено наносить другому игроку какой-либо ущерб при телепортации:Запрещено телепортировать игроков в стены или другие места, в которых нанесения урона от удушья неизбежно.Игрок обязан телепортировать другого игрока на сейвзону, если он подтвердил, что находится на её территории.<br/><span className='mark'>Наказание</span> — бан</p>
                        <p>2. Запрещенный скин<br/>Запрещены скины, повторяющие внутриигровую броню или одежду, содержащие изображения сексуального характера, наркотиков, нацистской символики, личной информации других пользователей, оскорбления.<br/><span className='mark'>Наказание</span> — бан </p>
                        <p>3. Оскорбления в чате <br/>Запрещено оскорблять родственников либо самого игрока в чате.<br/><span className="mark">Наказание</span> — мут на 2 часа</p>
                </div>            
            </div>
        </div>
    )
}