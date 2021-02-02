
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2015'} zadanie={'3'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Ile rozwąziań ma równanie: 
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'\\frac{x-1}{x+1}=x-1'}

                        errorColor={'#cc0000'}
                    />
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                No żeby dać odpowiedź na to pytanie trzeba chyba rozwiązać to równanie  
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\frac{x-1}{x+1}=x-1'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x-1 = (x-1)(x+1) '}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x-1 = x^2 - 1'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-x^2 + x - 1 + 1 = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-x^2 + x = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\Delta = 1^2 - 4 \\cdot (-1) \\cdot 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\Delta = 1'}

                    errorColor={'#cc0000'}
                />
            </div>



            <div className='study-formula'>
                <BlockMath
                    math={'x_1 = \\frac{-1 + 1}{-2} = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x_2 = \\frac{-1 - 1}{-2} = 1'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Czyli mamy dwa rozwiązania 
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x = 0 \\lor x = 1'}

                    errorColor={'#cc0000'}
                />
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Liczby/Zadanie1'} previos={'/containers/MaturaPodstawowa/Liczby/Zadanie5'}/>

        </div>
    )
}

export default Zadanie








