import React from 'react'
import './Home.css'
import 'katex/dist/katex.min.css';


const Home = () => {
    return (
        <div className="home">

            <div className="home-intro">
                <div className="home-intro-title">
                    <q>Nie przejmuj się, jeżeli masz problemy z matematyką. Zapewniam Cię, że ja mam jeszcze większe.</q>
                </div>
                <div className="home-intro-autor">
                    <i>-&nbsp;Albert&nbsp;Einstein</i>
                </div>
            </div>

            <div className="home-section">
                <div className="home-section-flex">
                    <div className="home-section-nummber_info">
                        <div className="home-section-nummber_info-number">
                            100+
                        </div>
                        <div className="home-section-nummber_info-text">
                            Zadań&nbsp;maturalnych
                        </div>
                    </div>
                    <div className="home-section-nummber_info">
                        <div className="home-section-nummber_info-number">
                            72%+
                        </div>
                        <div className="home-section-nummber_info-text">
                            Wynik&nbsp;na&nbsp;maturze
                        </div>
                    </div>
                    <div className="home-section-nummber_info">
                        <div className="home-section-nummber_info-number">
                            100+
                        </div>
                        <div className="home-section-nummber_info-text">
                            Rozwiązań
                        </div>
                    </div>
                </div>    
            </div>

            <div className="home-section">
                <div className="home-section-flex content-section">
                    <div className="home-section-content-flex">
                        <div className="home-section-content-title">
                            Czemu my???
                        </div>
                        <div className="home-section-content-text">
                            Jeśli chcesz napisać matematykę z&nbsp;podstawy powyżej 72%
                        to nasza strona będzie dobrym wyborem oraz z&nbsp;pewnością gwarantuje sukces. 
                        </div>
                    </div>
                    <div className="home-section-content-flex">
                        <div className="home-section-content-title">
                            Zadania
                        </div>
                        <div className="home-section-content-text">
                        Wszystko co jest potrzebne to tylko praktyka oraz liczenie.
                        Na naszej stronie odnajdziesz maturalne zadania z&nbsp;ubiegłych 
                        lat co zapewni rozumieniu poziomu egzaminu.  
                        </div>
                    </div>
                    <div className="home-section-content-flex">
                        <div className="home-section-content-title">
                            Rozwiązania
                        </div>
                        <div className="home-section-content-text">
                            Oczywiście jeśli nie jesteś w stanie rozwiązać jakieś zadanie wyjaśnimy w najbardziej szczegółowy oraz zrozumiały sposób.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home
