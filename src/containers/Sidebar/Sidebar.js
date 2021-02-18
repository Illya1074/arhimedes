import React from 'react';
import './Sidebar.css';
import { useHistory } from "react-router-dom";
import Icon1 from './IconComponents/IconComponent1'
import Icon2 from './IconComponents/IconComponent2'
import Icon3 from './IconComponents/IconComponent3'
import Icon4 from './IconComponents/IconComponent4'
import Icon5 from './IconComponents/IconComponent5'
import Icon6 from './IconComponents/IconComponent6'
import Icon7 from './IconComponents/IconComponent7'
import Icon8 from './IconComponents/IconComponent8'
import Icon9 from './IconComponents/IconComponent9'


const Sidebar = () => {

    const history = useHistory();    
    
    const buttonClick = (link) =>{
        history.push(link)
        window.scrollTo(0, 0)
    }

    return (
        <div className='sidebar'>
                <div className='sidebar-flex' onClick={() => buttonClick('/containers/MaturaPodstawowa/Liczby/Zadanie1')}>
                    <Icon4 fill="#f2f2f2" height='30px' width="30px" className="sidebar-icon"/>

                    <div  className='sidebar-list-element'>
                        Liczby
                    </div>
                </div>
                
                <div className='sidebar-flex' onClick={() => buttonClick('/containers/MaturaPodstawowa/Funkcje/Zadanie1')} >
                    <Icon2 fill="#f2f2f2" height='30px' width="30px" className="sidebar-icon"/>

                    <div className='sidebar-list-element'>
                        Funkcja
                    </div>
                </div>

                <div className='sidebar-flex' onClick={() => buttonClick('/containers/MaturaPodstawowa/Logarytmy/Zadanie1')} >
                    <Icon7 fill="#f2f2f2" height='30px' width="30px" className="sidebar-icon"/>

                    <div className='sidebar-list-element'>
                        Logarytmy
                    </div>
                </div>

                <div className='sidebar-flex' onClick={() => buttonClick('/containers/MaturaPodstawowa/Nierownosci/Zadanie1')}>
                    <Icon6 fill="#f2f2f2" height='30px' width="30px" className="sidebar-icon"/>

                    <div className='sidebar-list-element'>
                        Nierówności
                    </div>
                </div>
            
                <div className='sidebar-flex' onClick={() => buttonClick('/containers/MaturaPodstawowa/Trygomymetria/Zadanie1')}>
                    <Icon1 fill="#f2f2f2" height='30px' width="30px" className="sidebar-icon"/>

                    <div className='sidebar-list-element'>
                        Trygonymetria
                    </div>
                </div>                

                <div className='sidebar-flex' onClick={() => buttonClick('/containers/MaturaPodstawowa/Potegi/Zadanie1')}>
                    <Icon9 fill="#f2f2f2" height='30px' width="30px" className="sidebar-icon"/>

                    <div className='sidebar-list-element'>
                        Potęgi
                    </div>
                </div>

                <div className='sidebar-flex' onClick={() => buttonClick('/containers/MaturaPodstawowa/Procenty/Zadanie1')}>
                    <Icon8 fill="#f2f2f2" height='30px' width="30px" className="sidebar-icon"/>

                    <div className='sidebar-list-element'>
                        Procenty
                    </div>
                </div>

                <div className='sidebar-flex' onClick={() => buttonClick('/containers/MaturaPodstawowa/Ciagi/Zadanie1')}>
                    <Icon3 fill="#f2f2f2" height='30px' width="30px" className="sidebar-icon"/>

                    <div className='sidebar-list-element'>
                        Ciągi
                    </div>
                </div>
            
                <div className='sidebar-flex' onClick={() => buttonClick('/containers/MaturaPodstawowa/Rownania/Zadanie1')}>
                    <Icon5 fill="#f2f2f2" height='30px' width="30px" className="sidebar-icon"/>


                    <div className='sidebar-list-element'>
                        Równania
                    </div>
                    
                </div>
            {/* <div onClick={() => buttonClick('/containers/MaturaPodstawowa/Wielomiany/Zadanie1')} className='sidebar-list-element'>
                Wielomiany
            </div>                         */}
        </div>
    )
}

export default Sidebar
