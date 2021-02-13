import React from 'react'
import './Home.css'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';


const Home = () => {
    return (
        <div className="home">
            <h1 className="home-title">Arhimedes</h1>
            
            <div className='home-flex'>
                <div className="home-content">
                    Już niedługo matura, warto zacząć przygotowania do egzaminów. Matura z matematyki 
                    jest obowiązkowa więc warto udzielić trochę czasu na ćwiczenia zadań matematycznych
                    typu co będą na maturze. Jeśli chcesz napisać matematykę z podstawy powyżej 67%
                    to nasza strona będzie dobrym wyborem oraz z pewnością gwarantuje sukces.
                </div>

                <div className='home-logo'>
                    <div/>
                    <div/>
                    <div/>
                </div>

            </div>

            <div className='study-line' />

            <h1 className="home-title-little">Zadania</h1>


            <div className='home-flex active'>
                
                <div className='home-img one'>
                </div>

                <div className="home-content">
                    Wszystko co jest potrzebne to tylko praktyla oraz liczenie.
                    Na naszej stronie odnajdziesz maturalne zadania z ubiegłych 
                    lat co zapewni rozumieniu poziomu egzaminu oraz kształtuje
                    umiejętność rozwiązywania tego typu zadań.

                </div>

            </div>

            <div className='study-line' />

            <h1 className="home-title-little">Rozwiązania</h1>

            
            <div className='home-flex'>

                <div className="home-content">
                    Oczywiście jeśli nie jesteś w stanie rozwiązać jakieś zadanie
                    wyjaśnimy w najbardziej szczegółowy oraz zrozumiały sposób.  
                </div>

                <div className='home-img two'>
                </div>

            </div>
            
            {/* <div className="my-block">
                <BlockMath
                    math={'\\sqrt{\\smash[b]{y}}\\left(x^{\\smash{2}}\\right)+\\color{#631b6b}{34}{\\pi=\\frac c d}\\cdot e^\\frac c d'}
                    errorColor={'#cc0000'}
                />
            </div> */}

            
        </div>
    )
}

export default Home
