import React from "react";
import s from '../Button/Button.module.css'

export const Button = ({text}) => {
    return (
        <button className={s.btn}>
            <div className={s.line}></div>
            {text}
        </button>
    )
}