import React from 'react';
import './Sidebar.css';
import { useHistory } from "react-router-dom";

const Sidebar = () => {

    const history = useHistory();    
    
    const buttonClick = (link) =>{
        history.push(link)
        window.scrollTo(0, 0)
    }

    return (
        <div className='sidebar'>
            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Liczby/Zadanie1')} className='sidebar-list-element'>
                Liczby
            </div>

            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Funkcje/Zadanie1')} className='sidebar-list-element'>
                Funkcja
            </div>

            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Logarytmy/Zadanie1')} className='sidebar-list-element'>
                Logarytmy
            </div>

            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Nierownosci/Zadanie1')} className='sidebar-list-element'>
                Nierówności
            </div>

            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Trygomymetria/Zadanie1')} className='sidebar-list-element'>
                Trygonymetria
            </div>

            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Potegi/Zadanie1')} className='sidebar-list-element'>
                Potęgi
            </div>

            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Procenty/Zadanie1')} className='sidebar-list-element'>
                Procenty
            </div>

            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Ciagi/Zadanie1')} className='sidebar-list-element'>
                Ciągi
            </div>

            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Rownania/Zadanie1')} className='sidebar-list-element'>
                Równania
            </div>

            <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Wielomiany/Zadanie1')} className='sidebar-list-element'>
                Wielomiany
            </div>                        
        </div>
    )
}

export default Sidebar
