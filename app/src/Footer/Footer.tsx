import React from "react"; //@ts-ignore
import s from '../Footer/Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.line}></div>
            <div className={s.text_container}>
                <p className={s.text}>
                    <span className={s.text_bold}>© 2020 Company. </span>
                    Соглашение об обработке персональных данных и политика конфиденциальности</p>
                <p className={s.text}>Сделано в <span className={s.text_bold}>Palladiumlab</span> </p>
            </div>
        </div>
    )
}