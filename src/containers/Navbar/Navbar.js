import React, {useState, useEffect} from 'react'
import './Navbar.css';
import { useHistory } from "react-router-dom";
import {
    Link
  } from "react-router-dom";
import Icon1 from './IconComponents/IconComponent1'
import Icon2 from './IconComponents/IconComponent2'
import Icon3 from './IconComponents/IconComponent3'
import Icon4 from './IconComponents/IconComponent4'
import Icon5 from './IconComponents/IconComponent5'
import Icon6 from './IconComponents/IconComponent6'
import Icon7 from './IconComponents/IconComponent7'
import Icon8 from './IconComponents/IconComponent8'
import Icon9 from './IconComponents/IconComponent9'

import HomeIcon from './IconComponents/HomeIcon'
import InfoIcon from './IconComponents/InfoIcon'

import ContactIcon from './IconComponents/ContactIcon'

import SchoolIcon from './IconComponents/SchoolIcon'



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
            {/* <div className='css-trick'>
                <div className='css-trick-2'>
                </div>
            </div> */}
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
                    <div onClick={() => buttonClick('/korepetycje')} className='navbar-menu-element'>
                        E-Korepetycje
                    </div>
                    <div onClick={() => buttonClick('/onas')} className='navbar-menu-element'>
                        O nas
                    </div>
                    <div onClick={() => buttonClick('/kontakt')} className='navbar-menu-element'>
                        Kontakt
                    </div>
                    <div className='navbar-menu-element active'>
                        v2.1.3
                    </div>
                </div>
                <div className='navbar-burger' onClick={clickFun}>
                    <div className='navbar-burger-elements-first'/>
                    <div className='navbar-burger-elements-middle'/>
                    <div className='navbar-burger-elements-last'/>
                </div>
            </div>

            <div className={menuState ? 'response-menu active' : 'response-menu'} onClick={clickFun}>
                <div className='response-menu-my_menu'>

                    <div className='response-menu-my_menu-flex'>
                        <HomeIcon fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>

                        <div onClick={() => buttonClick('/')} className='response-menu-my_menu-element'>
                            Główna
                        </div>
                    </div>

                    <div className='response-menu-my_menu-flex'>
                        <SchoolIcon fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>
                        <div onClick={() => buttonClick('/korepetycje')} className='response-menu-my_menu-element'>
                            E-Korepetycje
                        </div>
                    </div>                   

                    <div className='response-menu-my_menu-flex'>
                        <ContactIcon fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>
                        <div onClick={() => buttonClick('/kontakt')} className='response-menu-my_menu-element'>
                            Kontakt
                        </div>
                    </div>

                    <div className='response-menu-my_menu-flex'>
                        <InfoIcon fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>
                        <div onClick={() => buttonClick('/onas')} className='response-menu-my_menu-element'>
                            O nas
                        </div>
                    </div>
                    
                </div>
                
                <div className='response-menu-line'></div>

                <div className='response-menu-my_menu'>

                    <div className='response-menu-my_menu-flex'>
                        <Icon4 fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>
                        <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Liczby/Zadanie1')} className='response-menu-my_menu-element'>
                            Liczby
                        </div>
                    </div>
                    
                    <div className='response-menu-my_menu-flex'>
                        <Icon2 fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>

                        <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Funkcje/Zadanie1')} className='response-menu-my_menu-element'>
                            Funkcja
                        </div>
                    </div>

                    <div className='response-menu-my_menu-flex'>
                        <Icon7 fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>

                        <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Logarytmy/Zadanie1')} className='response-menu-my_menu-element'>
                            Logarytmy
                        </div>
                    </div>

                    <div className='response-menu-my_menu-flex'>
                        <Icon6 fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>

                        <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Nierownosci/Zadanie1')} className='response-menu-my_menu-element'>
                            Nierówności
                        </div>
                    </div>

                    <div className='response-menu-my_menu-flex'>
                        <Icon1 fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>

                        <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Trygomymetria/Zadanie1')} className='response-menu-my_menu-element'>
                            Trygonymetria
                        </div>
                    </div>
                
                    <div className='response-menu-my_menu-flex'>
                        <Icon9 fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>

                        <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Potegi/Zadanie1')} className='response-menu-my_menu-element'>
                            Potęgi
                        </div>
                    </div>

                    <div className='response-menu-my_menu-flex'>
                        <Icon8 fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>

                        <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Procenty/Zadanie1')} className='response-menu-my_menu-element'>
                            Procenty
                        </div>
                    </div>

                    <div className='response-menu-my_menu-flex'>
                        <Icon3 fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>

                        <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Rownania/Zadanie1')} className='response-menu-my_menu-element'>
                            Równania
                        </div>
                    </div>

                    <div className='response-menu-my_menu-flex'>
                        <Icon5 fill="#f2f2f2" height='30px' width="30px" className="respons-sidebar-icon"/>

                        <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Ciagi/Zadanie1')} className='response-menu-my_menu-element'>
                            Ciągi
                        </div>
                    </div>
       
                </div>
               
            </div>
            
        </>
    )
}

export default MyNavbar
