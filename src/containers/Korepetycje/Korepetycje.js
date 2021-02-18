import React from 'react'
import './Korepetycje.css'
import Icon from './SchoolIcon'

const Korepetycje = () => {
    return (
        <div className='korepetycje'>
            <div className="korepetycje-flex">
                
                <Icon fill="#111" height='55px' width="55px" className="korepetycje-icon"/>
                
                <div className="korepytecje-title">
                    EKorepetycje 
                </div>

            </div>

            {/* <div className="korepytecje-content">
                <div>Koszt: 35zl/h</div>
                <div>Korepetytor: Illia Sheremetov</div>
                <div>Telefon: +48-537-203-991</div>
                <div>Mail: arhimedes.project@gmail.com</div>                
            </div> */}


            {/* <div className="korepytecje-title-mail">
                Mail: arhimedes.project@gmail.com 
                <br/>
                <br/>
                Telefon: +48-537-203-991
                 
            </div> */}


            <div className="snip1214">
                <div className="plan">
                    <h3 className="plan-title">
                    Starter
                    </h3>
                    <div className="plan-cost"><span className="plan-price">35zł</span><span className="plan-type">/1 Godzina</span></div>
                    <ul className="plan-features">
                    <li><i className="ion-checkmark"> </i>Zrozumiałe wyjaśnienie</li>
                    <li><i className="ion-checkmark"> </i>Indywidualne podejście</li>
                    <li><i className="ion-checkmark"> </i>Luźna atmosfera</li>
                    <li><i className="ion-checkmark"> </i>Eksperymentalne metody nauczania</li>
                    <li><i className="ion-checkmark"> </i>Nauczanie zdalne</li>
                    <li><i className="ion-checkmark"> </i>Gwarancja sukcesu</li>
                    <li><i className="ion-checkmark"> </i>Gwarantuję zwrócić pieniądzę jeśli nie pomogę</li>
                    </ul>
                    <div className="plan-select"><a href="https://www.instagram.com/__arhimedes__/">Napisz do mnie</a></div>
                </div>
                <div className="plan">
                    <h3 className="plan-title">
                    Basic
                    </h3>
                    <div className="plan-cost"><span className="plan-price">50zł</span><span className="plan-type">/ 1.5 Godziny</span></div>
                    <ul className="plan-features">
                    <li><i className="ion-checkmark"> </i>Zrozumiałe wyjaśnienie</li>
                    <li><i className="ion-checkmark"> </i>Indywidualne podejście</li>
                    <li><i className="ion-checkmark"> </i>Luźna atmosfera</li>
                    <li><i className="ion-checkmark"> </i>Eksperymentalne metody nauczania</li>
                    <li><i className="ion-checkmark"> </i>Nauczanie zdalne</li>
                    <li><i className="ion-checkmark"> </i>Gwarancja sukcesu</li>
                    <li><i className="ion-checkmark"> </i>Gwarantuję zwrócić pieniądzę jeśli nie pomogę</li>
                    </ul>
                    <div className="plan-select"><a href="https://www.instagram.com/__arhimedes__/">Napisz do mnie</a></div>
                </div>
                <div className="plan featured">
                    <h3 className="plan-title">
                    Professional
                    </h3>
                    <div className="plan-cost"><span className="plan-price">70zł</span><span className="plan-type">/ 2 Godziny</span></div>
                    <ul className="plan-features">
                    <li><i className="ion-checkmark"> </i>Zrozumiałe wyjaśnienie</li>
                    <li><i className="ion-checkmark"> </i>Indywidualne podejście</li>
                    <li><i className="ion-checkmark"> </i>Luźna atmosfera</li>
                    <li><i className="ion-checkmark"> </i>Eksperymentalne metody nauczania</li>
                    <li><i className="ion-checkmark"> </i>Nauczanie zdalne</li>
                    <li><i className="ion-checkmark"> </i>Gwarancja sukcesu</li>
                    <li><i className="ion-checkmark"> </i>Gwarantuję zwrócić pieniądzę jeśli nie pomogę</li>
                    </ul>
                    <div className="plan-select"><a href="https://www.instagram.com/__arhimedes__/">Napisz do mnie</a></div>
                </div>
            
            </div>

            


            
        </div>
    )
}

export default Korepetycje
