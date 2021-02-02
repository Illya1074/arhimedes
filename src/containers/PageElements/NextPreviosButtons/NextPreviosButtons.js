import React from 'react'
import './NextPreviosButtons.css'
import {
    Link
  } from "react-router-dom";


const NextPreviosButtons = ({next, previos}) => {
    return (
        <div className='study-next-prevois-buttons'>
            
            <Link to={previos}>
                <div className='study-next-prevois-buttons-button'>
                    Poprzednie zadanie
                </div>
            </Link>
            
            <Link to={next}>
                <div className='study-next-prevois-buttons-button'>
                    Następne zadanie
                </div>
            </Link>
           
        </div>
    )
}

export default NextPreviosButtons
