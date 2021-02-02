import React from 'react'
import './Intro.css'

const Intro = (props) => {
    return (
        <div className='intro'>
            <div className='intro-elements'>Zadanko {props.zadanie}</div>
            <div className='intro-elements'>Maturka {props.rok} roku</div>
            <div className='intro-elements'>Punkciki (0-{props.punkty})</div>
        </div>
    )
}

export default Intro
