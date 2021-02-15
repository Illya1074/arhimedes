
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Twierdzenie from '../../Material/Twierdzenia/Potegi/PotegiDzialania'

const Zadanie = () => {
    return (
        <div>
        
            <div className='study-problem'>
                
                <Intro rok={'2016'} zadanie={'1'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Ile jest równy iloraz 
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'\\frac{a^{-2,6}}{a^{1,3}}'}
                        errorColor={'#cc0000'}
                    />
                </div>
            </div>

            <div className='study-line' />

            <Twierdzenie/>

            <div className='study-line' />

            <div className='study-formula'>
                <BlockMath
                    math={'\\frac{a^{-2,6}}{a^{1,3}} = a^{-2,6 - 1,3} = a^{-3,9}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'Odp: \\space  a^{-3,9}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Potegi/Zadanie2'} previos={'/containers/MaturaPodstawowa/Potegi/Zadanie5'}/>


        </div>
    )
}

export default Zadanie








