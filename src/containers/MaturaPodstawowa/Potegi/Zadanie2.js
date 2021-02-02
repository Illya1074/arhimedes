
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Twiedzenia from '../../Material/Twierdzenia/Potegi/PotegiDzialania'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2017'} zadanie={'1'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczba
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'5^8 \\cdot 4^{-4}'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    jest rowna:
                </div>

                <div className='flex-row-arround'>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'A) (\\frac{5}{2})^8'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'B) \\frac{5}{2}'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'C) 10^8'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'D) 10'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>

            </div>

            <div className='study-line' />

            <Twiedzenia/>

            <div className='study-line' />


            <div className='study-formula'>
                <BlockMath
                    math={'5^8 \\cdot 4^{-4} = 5^{2 \\cdot 4} \\cdot \\bigg( \\frac{1}{4} \\bigg)^4 = (5^2)^4 \\cdot \\bigg( \\frac{1}{4} \\bigg)^4 = (25)^4 \\cdot \\bigg( \\frac{1}{4} \\bigg)^4  ='}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'= \\bigg( \\frac{25}{4} \\bigg)^4 = \\bigg(  \\frac{5^2}{2^2} \\bigg)^4 = \\bigg( \\bigg( \\frac{5}{2} \\bigg)^2 \\bigg)^4 = \\bigg( \\frac{5}{2} \\bigg)^{2 \\cdot 4} = \\bigg( \\frac{5}{2} \\bigg)^{8}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'Odp: A)'}
                    errorColor={'#cc0000'}
                />
            </div>


            <div className='flex-row-arround'>
                <div>

                </div>
                <div>
                    
                </div>
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Potegi/Zadanie1'} previos={'/containers/MaturaPodstawowa/Potegi/Zadanie1'}/>


        </div>
    )
}

export default Zadanie








