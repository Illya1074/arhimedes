import React, {useState, useEffect} from 'react'
import './Navbar.css';
import { useHistory } from "react-router-dom";
import {
    Link
  } from "react-router-dom";


const MyNavbar = () => {

    const [menuState, setMenuState] = useState(true)
    const history = useHistory();


    const clickFun = () => {
        setMenuState(!menuState)
    }

  
    
    const buttonClick = (link) =>{
        window.scrollTo(0, 0)
        history.push(link)
        
    }

    return (
        <>  
            <div className='css-trick'>
                <div className='css-trick-2'>
                </div>
            </div>
            <div className='navbar'>
                <div className='navbar-logo'>
                    <div className='navbar-logo-III'>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                    <b>Arhimedes</b>
                </div>
                <div className='navbar-menu'>
                    <div onClick={() => buttonClick('/')} className='navbar-menu-element'>
                        Główna
                    </div>
                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Liczby/Zadanie1')} className='navbar-menu-element'>
                        Praktyka
                    </div>
                    <div onClick={() => buttonClick('/onas')} className='navbar-menu-element'>
                        O nas
                    </div>
                    <div onClick={() => buttonClick('/kontakt')} className='navbar-menu-element'>
                        Kontakt
                    </div>
                </div>
                <div className='navbar-burger' onClick={clickFun}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>

            <div className={menuState ? 'response-menu active' : 'response-menu'} onClick={clickFun}>
                <div className='response-menu-my_menu'>
                    <div onClick={() => buttonClick('/')} className='response-menu-my_menu-element'>
                        Główna
                    </div>
                    
                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Liczby/Zadanie1')} className='response-menu-my_menu-element'>
                        Praktyka
                    </div>
                
                    <div onClick={() => buttonClick('/kontakt')} className='response-menu-my_menu-element'>
                        Kontakt
                    </div>
                
                    <div onClick={() => buttonClick('/onas')} className='response-menu-my_menu-element'>
                        O nas
                    </div>
                    
                </div>
                
                <div className='response-menu-line'></div>

                <div className='response-menu-my_menu'>
                    
                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Liczby/Zadanie1')} className='response-menu-my_menu-element'>
                        Liczby
                    </div>

                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Funkcje/Zadanie1')} className='response-menu-my_menu-element'>
                        Funkcja
                    </div>

                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Logarytmy/Zadanie1')} className='response-menu-my_menu-element'>
                        Logarytmy
                    </div>

                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Nierownosci/Zadanie1')} className='response-menu-my_menu-element'>
                        Nierówności
                    </div>

                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Trygomymetria/Zadanie1')} className='response-menu-my_menu-element'>
                        Trygonymetria
                    </div>

                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Potegi/Zadanie1')} className='response-menu-my_menu-element'>
                        Potęgi
                    </div>

                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Procenty/Zadanie1')} className='response-menu-my_menu-element'>
                        Procenty
                    </div>

                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Rownania/Zadanie1')} className='response-menu-my_menu-element'>
                        Równania
                    </div>

                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Ciagi/Zadanie1')} className='response-menu-my_menu-element'>
                        Ciągi
                    </div>

                    <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Wielomiany/Zadanie1')} className='response-menu-my_menu-element'>
                        Wielomiany
                    </div>
                    

                    
                </div>
               
            </div>
            
        </>
    )
}

export default MyNavbar
