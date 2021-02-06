import React from 'react'
import './NextPreviosButtons.css'
import {
    useHistory
  } from "react-router-dom";



const NextPreviosButtons = ({next, previos}) => {

    const history = useHistory();

    const buttonClick = (link) =>{
        window.scrollTo(0, 0)
        history.push(link)
    }

    return (
        <div className='study-next-prevois-buttons'>
            
            <div onClick={() => buttonClick(previos)} className='study-next-prevois-buttons-button'>
                Poprzednie zadanie
            </div>
        
            <div onClick={() => buttonClick(next)} className='study-next-prevois-buttons-button'>
                Następne zadanie
            </div>
            
        </div>
    )
}

export default NextPreviosButtons
