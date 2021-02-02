
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import Wspolrzedne from '../../Material/Twierdzenia/Funkcja/Wspolrzedne'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'

const Zadanie = () => {
    return (
        <div>
            
            
            
            <div className='study-problem'>
                
                <Intro rok={'2015'} zadanie={'9'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Na wykresie funkcji liniowej określonej wzorem
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'f(x)=(m-1)x+3'}

                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    leży punkt
                </div>

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'S = (5,-2)'}

                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    zatem ile wynosi m???
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Naszą funkcję możemy zapisać trochę innaczej. Zamiast f(x) niech będzie y.
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'y=(m-1)x+3'}

                    errorColor={'#cc0000'}
                />
            </div>

            <Wspolrzedne/>

            <div className='study-content'>
                Wiemy że punkt S = (5, -2) leży na wykresie funkcji f(x). Więc możemy podstawić współrzędne punktu do wzoru.
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'-2=(m-1)5+3'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                rozwiązujemy równanko
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-2=(m-1)5+3'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-5=(m-1)5'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-1= m-1'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'0 = m'}

                    errorColor={'#cc0000'}
                />
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Funkcje/Zadanie2'} previos={'/containers/MaturaPodstawowa/Funkcje/Zadanie5'}/>

        </div>
    )
}

export default Zadanie








