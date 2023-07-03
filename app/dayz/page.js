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
                    <h1 className='dayz-h1'>Правила серверов</h1>
                        <h1 className='dayz-h1'>1. Действия в игре</h1>
                            <p className='dayz-p'>1.1. Запрещено использование читов или другого вредоносного ПО.<br/><span className='mark'>Наказание</span> — Бан 30+ дней.</p>
                            <p className='dayz-p'>1.2. Запрещено использование "вредительских" читов, которые мешают играть другим игрокам на нашем проекте.<br/><span className='mark'>Наказание</span> — Бан-IP.</p>
                            <p className='dayz-p'>1.3. Запрещено использование посторонних модификаций, скриптов которые не разрешены на сервере.<br/><span className='mark'>Наказание</span> — Бан 30+ Дней</p>
                            <p className='dayz-p'>1.4. Запрещено использование различных ботов для заработка игровой валюты.<br/><span className='mark'>Наказание</span> — Бан 30 Дней</p>
                            <p className='dayz-p'>1.5. Запрещено использовать различные дыры проекта || Багоюз.<br/><span className='mark'>Наказание</span> — Бан 15+ дней.</p>
                            <p className='dayz-p'>1.6. Запрещен багоюз с предметами и игровой валютой, так же его распространение.<br/><span className='mark'>Наказание</span> — Бан-IP Навсегда</p>
                            <p className='dayz-p'>1.7. Запрещено использование множества аккаунтов на нашем проекте.<br/><span className='mark'>Наказание</span> — Бан 30 дней. (Либо навсегда)</p>
                            <p className='dayz-p'>1.8. Запрещён обман игрока при обмене, либо его развод.<br/><span className='mark'>Наказание</span> — Бан и/или конфискация украденных предметов</p>
                            <p className='dayz-p'>1.9. Запрещена помеха обмену между игрокам.<br/><span className='mark'>Наказание</span> — Бан и/или конфискация украденных предметов</p>
                            <p className='dayz-p'>1.10. Запрещён взлом аккаунтов других игроков на нашем проекте.<br/><span className='mark'>Наказание</span> — Бан-IP Навсегда</p>
                            <p className='dayz-p'>1.11. Запрещено наносить урон другому игроку во время телепортации (5 секунд).<br/><span className='mark'>Наказание</span> — Бан на 7 дней</p>
                            <p className='dayz-p'>1.12. Запрещено вымогать предметы или другие игровые ценности сервера, проекта.<br/><span className='mark'>Наказание</span> — Бан 30 дней</p>
                            <p className='dayz-p'>1.13. Запрещено подставлять / намеренно сливать игроков/администрацию.<br/><span className='mark'>Наказание</span> — Бан Навсегда</p>
                            <p className='dayz-p'>1.14. Запрещено распространение модификаций или скриптов запрещенных на наших серверах</p>
                            <p className='dayz-p'>1.15.Запрещено использование бота, ахк, биндера и т.д. для рекламы (автореклама, когда игрок отходит от ПК).<br/><span className='mark'>Наказание</span> — Бан 5 дней.</p>
                            <p className='dayz-p'>1.16. Запрещено донатить другому игроку с целью получения через него чего-либо.<br/><span className='mark'>Наказание</span> — Бан Навсегда.</p>
                            <p className='dayz-p'>1.17. Запрещено использование запрещенного скина.<br/><span className='mark'>Наказание</span> — Бан навсегда</p>
                        <h1 className='dayz-h1'>2. Нарушение правил чата</h1>
                            <p className='dayz-p'>2.1. Запрещено оскорбление / упоминание родных.<br/><span className='mark'>Наказание</span> — Мут 120 минут</p>
                            <p className='dayz-p'>2.2. Запрещено оскорбление администрации.<br/><span className='mark'>Наказание</span> — Мут 200+ минут / Бан 5+ дней.</p>
                            <p className='dayz-p'>2.3. Запрещён оффтоп в /report.<br/><span className='mark'>Наказание</span> — Мут 60+ минут.</p>
                            <p className='dayz-p'>2.4. Запрещены ложные жалобы в /report.<br/><span className='mark'>Наказание</span> — Мут 100+ минут.</p>
                            <p className='dayz-p'>2.5. Запрещён мат в Глобальный чат.<br/><span className='mark'>Наказание</span> — Мут 30+ минут.</p>
                            <p className='dayz-p'>2.6. Запрещёно оскорблять в Глобальный чат.<br/><span className='mark'>Наказание</span> — Мут 60+ минут.</p>
                            <p className='dayz-p'>2.7. Запрещено использование транслита.<br/><span className='mark'>Наказание</span> — Мут 30+ минут.</p>
                            <p className='dayz-p'>2.8. Запрещено использование капса в чате.<br/><span className='mark'>Наказание</span> — Мут 30+ минут.</p>
                            <p className='dayz-p'>2.9. Запрещён обман администрации при переписке либо еще чего.<br/><span className='mark'>Наказание</span> — Мут 300 минут / Бан 15+ дней.</p>
                            <p className='dayz-p'>2.10. Запрещён флуд в чат.<br/><span className='mark'>Наказание</span> — Мут 30+ минут.</p>
                            <p className='dayz-p'>2.11.Запрещена реклама сторонних ресурсов.<br/><span className='mark'>Наказание</span> — Мут 300 минут / Бан 30+ дней / Бан-IP.</p>
                            <p className='dayz-p'>2.12. Запрещено злоупотребление символами Unicode и т.п.<br/><span className='mark'>Наказание</span> — Мут 60+ минут.</p>
                            <p className='dayz-p'>2.13. Оскорблении нации / обсуждение политики.<br/><span className='mark'>Наказание</span> — Мут 120+ минут.</p>
                            <p className='dayz-p'>2.14. Оскорбление сервера / Проекта.<br/><span className='mark'>Наказание</span> — Мут 200+ минут / Бан 5+ дней.</p>
                            <p className='dayz-p'>2.15. Запрещены оскорбления игроков.<br/><span className='mark'>Наказание</span> — Мут 60+ минут.</p>
                            <p className='dayz-p'>2.16. Запрещено неадекватное поведение в чате.<br/><span className='mark'>Наказание</span> — Мут 60+ минут.</p>
                            <p className='dayz-p'>2.17. Запрещена провокация администрации/игрока на конфликт.<br/><span className='mark'>Наказание</span> — Мут 60+ минут.</p>
                            <p className='dayz-p'>2.18. Запрещён организованный флуд (отправка сообщений от разных лиц, но с одним контекстом).<br/><span className='mark'>Наказание</span> — Мут 40-300 минут всем участникам флуда.</p>
                            <p className='dayz-p'>2.19. Запрещена просьба выдачи определённого предмета или каких нибудь возможностей Администрацией.<br/><span className='mark'>Наказание</span> — Мут 60+ минут</p>
                            <p className='dayz-p'>2.20. Запрещён розжиг межнациональной розни.<br/><span className='mark'>Наказание</span> — Мут 100+ минут.</p>
                            <p className='dayz-p'>2.21. Запрещено использование в чате "лесенки" (Пример: ПоШлИ к НаМ в КлАн).<br/><span className='mark'>Наказание</span> — Мут 60+ минут.</p>
                            <p className='dayz-p'>2.22. Запрещён завуалированный мат/оскорбления.<br/><span className='mark'>Наказание</span> — Мут 30-120 минут.</p>
                            <p className='dayz-p'>2.23. Запрещено выставлять себя в роли администратора.<br/><span className='mark'>Наказание</span> — Мут 60-120 минут.</p>
                            <p className='dayz-p'>2.24. Запрещено использование АУЕ жаргона.<br/><span className='mark'>Наказание</span> — Мут 60 минут</p>
                            <p className='dayz-p'>2.25. Запрещено использование цветовых сообщений в любом чате.<br/><span className='mark'>Наказание</span> — 1 раз Мут 5 минут, второй раз и более Мут 120 минут.</p>
                        <h1 className='dayz-h1'>3. Сервер/Клан</h1>
                            <p className='dayz-p'>3.1. При заполненном сервере администратор вправе вас кикнуть, если вы стоите АФК долгое время</p>
                            <p className='dayz-p'>3.2. Если владелец клана получает блокировку на Навсегда - клан подлежит удалению (на усмотрение главной администрации).</p>
                </div>            
            </div>
        </div>
    )
}