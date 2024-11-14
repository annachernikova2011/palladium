import React from "react"; //@ts-ignore 
import s from '../Examples/Examples.module.css' //@ts-ignore 
import img1 from '../assets/img/Image-1.png' //@ts-ignore 
import img2 from '../assets/img/Image-2.png' //@ts-ignore 
import img3 from '../assets/img/Image-3.png' //@ts-ignore 
import img4 from '../assets/img/Image-4.png'
import { Button } from "../Button/Button.tsx";


export const Examples = () => {
    return (
        <div className={s.container}>
            <div className={s.container_text}>
                <div className={s.line}></div>
                <p>Примеры
                    <span className={s.outlineText}> выполненных </span>
                    работ
                </p>
            </div>
            <div className={s.photo_container}>
                <div className={s.img1}>
                    <p>Новостройка</p>
                    <img src={img1} className={s.img} alt="" />
                    <div className={s.overlay}></div>
                </div>
                <div className={s.img2}>
                    <p>Вторичка</p>
                    <img src={img3} className={s.img} alt="" />
                    <div className={s.overlay}></div>
                </div>
                <div className={s.img3}>
                    <p>Вторичка</p>
                    <img src={img4} className={s.img} alt="" />
                    <div className={s.overlay}></div>
                </div>
                <div className={s.img4}>
                    <p>Новостройка</p>
                    <img src={img2} alt="" />
                    <div className={s.overlay}></div>
                </div>
            </div>
            <Button text='Все проекты' />
        </div>
    )
}