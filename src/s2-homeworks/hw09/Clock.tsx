import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    console.log(`меняется ${date}`)
    const [status, setsStatus] = useState<boolean>(false)

    const start = () => {
        console.log(666)
        setsStatus(true)

        const id = +setInterval(() => {
            setDate(new Date(restoreState('hw9-date', Date.now())))
        }, 1000)

        setTimerId(id)

        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        setsStatus(false)
        if (timerId) {
            clearInterval(timerId)
            setTimerId(undefined)
        }
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    }

    const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => { // пишут студенты // показать дату если наведена мышка
        if (e.currentTarget) {
            setShow(true)
        }
    }
    const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => { // пишут студенты // спрятать дату если мышка не наведена
        if (e.relatedTarget) {
            setShow(false)
        }
    }

    let formatterTime = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
    const stringTime = formatterTime.format(date)// часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01)
    // пишут студенты
    let formatterDateMonth = new Intl.DateTimeFormat("en", {
        month: "long"
    });
    const stringDate = formatterDateMonth.format(date) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты
    // 01.02.0123/01.02.-123/01.02.12345 не рассматриваем


    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    let formatterDate = new Intl.DateTimeFormat("en", {
        weekday: "long",
    });
    const stringDay = formatterDate.format(date) || <br/>  // пишут студенты '888date->day'
    let formatterMonth = new Intl.DateTimeFormat("ru")
    const stringMonth = formatterMonth.format(date) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={status} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!status} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
