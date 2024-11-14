import React from "react" //@ts-ignore 
import s from '../MainPage/MainPage.module.css' //@ts-ignore 
import mapIcon from '../assets/img/Map.svg' //@ts-ignore 
import phone from '../assets/img/Phone.svg' //@ts-ignore 
import logo from '../assets/img/Logo.svg'
import { Button } from "../Button/Button.tsx" //@ts-ignore 
import photo from '../assets/img/Image.png'

export const MainPage = () => {

    return (
        <>
                <div className={s.header_container}>
                    <div className={`${s.icon} ${s.iconRight}`}>
                        <img src={mapIcon} alt="map-icon.svg" />
                    </div>
                    <div className={s.container_title}>
                        <div className={s.text}>
                            <p>Главная</p>
                            <p>О компании</p>
                            <p>Услуги</p>
                        </div>
                        <img src={logo} alt="logo.svg" />
                        <div className={s.text}>
                            <p>Цены</p>
                            <p>Портфолио</p>
                            <p>Контакты</p>
                        </div>
                    </div>
                    <div className={`${s.icon} ${s.iconLeft}`}>
                        <img src={phone} alt="phone.svg" />
                    </div>
                </div>
          
            <div className={s.title_container}>
                <div className={s.title}>
                    <p>Ремонт<span className={s.outlineText}> и </span>дизайн</p>
                    <p>в Москве и Московской области</p>
                </div>
                <Button text='Оставить заявку' />
            </div>
            <div className={s.photo_container}>
                <img src={photo} alt="photo.img" />
                <div className={s.text_container}>
                    <div>Услуги по ремонту</div>
                    <div>Виды работ</div>
                    <div>Дизайн интерьера</div>
                    <div>Ремонт помещений</div>
                </div>
            </div>
        </>

    )
}