
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Twierdzenie from '../../Material/Twierdzenia/Logarytmy/Logarytm'
import Twierdzenie2 from '../../Material/Twierdzenia/Potegi/PierwiastkiDzialania'
import Twierdzenie3 from '../../Material/Twierdzenia/Potegi/PotegiDzialania'


const Zadanie = () => {
    return (
        <div>
            
            
            
            <div className='study-problem'>
                
                <Intro rok={'2016'} zadanie={'2'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Ile wynosi liczba
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'log_{\\sqrt{2}}(2 \\sqrt{2})'}
                        errorColor={'#cc0000'}
                    />
                </div>
            </div>

            <div className='study-line' />

            <Twierdzenie/>

            <Twierdzenie2/>

            <Twierdzenie3/>

            <div className='study-line' />

            <div className='study-formula'>
                <BlockMath
                    math={'log_{\\sqrt{2}}(2 \\sqrt{2}) = log_{\\sqrt{2}}(2 \\cdot 2^{\\frac{1}{2}}) = log_{\\sqrt{2}}(2^{1 + \\frac{1}{2}})='}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'= log_{\\sqrt{2}}2^{\\frac{3}{2}}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Teraz naszą liczbę logarytmowaną, czyli
            </div>


            <div className='study-formula'>
                <BlockMath
                    math={'2^{\\frac{3}{2}}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                musimy doprowadzić do postaci żeby w podstawie miała pierwiastek z dwóch
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\sqrt{2}^x'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                i żeby nam wyszlo takie coś
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'log_{\\sqrt{2}} \\sqrt{2}^x'}
                    errorColor={'#cc0000'}
                />
            </div>

        

            <div className='study-formula'>
                <BlockMath
                    math={'2^{\\frac{3}{2}} = (2^{\\frac{1}{2}})^{2 \\cdot \\frac{3}{2}} = (\\sqrt{2})^{\\frac{6}{2}} = \\sqrt{2}^{3} '}
                    errorColor={'#cc0000'}
                />
            </div>


            <div className='study-content'>
                Zostało tylko podstawić wszystko
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'2^{\\frac{3}{2}} = \\sqrt{2}^{3}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'log_{\\sqrt{2}}2^{\\frac{3}{2}} = log_{\\sqrt{2}}\\sqrt{2}^{3} = 3'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'Odp: 3'}
                    errorColor={'#cc0000'}
                />
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Logarytmy/Zadanie2'} previos={'/containers/MaturaPodstawowa/Logarytmy/Zadanie3'}/>

        </div>
    )
}

export default Zadanie








