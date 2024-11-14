import React from "react"; //@ts-ignore
import s from '../Contacts/Contacts.module.css'
import { Button } from "../Button/Button.tsx";

export const Contacts = () => {
    return (
        <div className={s.container}>
            <div className={s.container_text}>
                <div className={s.line}></div>
                <p>Связаться
                    <span className={s.outlineText}> с нами </span>
                </p>
            </div>

            <div className={s.description_container}>
                <div className={s.contacts_container}>
                    <div>
                        <p className={s.text}>Офис</p>
                        <span className={s.description}>Москва, ул. Уличная, д. 1, оф. 1</span>
                    </div>
                    <div>
                        <p className={s.text}>E-mail</p>
                        <span className={s.description}>company@company.ru</span>
                    </div>
                    <div>
                        <p className={s.text}>Режим работы</p>
                        <span className={s.description}>Пн-Вт: 1000 — 1900; Сб-Вс: 1000 — 1500</span>
                    </div>
                    <div>
                        <p className={s.text}>Телефон</p>
                        <span className={s.description}>8 (800) 900-00-00</span>
                    </div>
                </div>

                <div className={s.questions_container}>
                    <p className={s.text}>Остались вопросы?</p>
                    <form>
                        <div className={s.input_wrapper}>
                            <label className={s.label} htmlFor="">Ваше имя</label>
                            <input type="text" placeholder="Иван Иванов" />
                        </div>
                        <div className={s.input_wrapper}>
                            <label className={s.label} htmlFor="">Телефон / E-mail</label>
                            <input type="text" placeholder="example@example.com" />
                        </div>
                        <div className={s.input_wrapper}>
                            <label className={s.label} htmlFor="">Ваше сообщение</label>
                            <input type="text" placeholder="Текст обращения" />
                        </div>
                    </form>
                    <Button text='Получить консультацию'/>
                </div>
            </div>
        </div>
    )
}