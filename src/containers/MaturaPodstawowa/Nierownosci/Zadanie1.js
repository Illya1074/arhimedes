
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
                <Intro rok={'2016'} zadanie={'5'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Jedną z liczb, które spełniają nierówność
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'-x^5 + x^3 - x < -2'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    jest???
                </div> 

                <div className='flex-row-arround'>
                    <div>A. 1</div>
                    <div>B. -1</div>
                    <div>C. 2</div>
                    <div>D. -2</div>
                </div>

                <div className='study-problem-content'>
                    
                </div>
            </div>

            <div className='study-line' />

            <div className='study-content'>
                Tutaj po prostu sobie podstawiamy wartości po kolei i sprawdzamy czy odpowiedź jest mniejsza od -2 czy nie
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'1. -1^5 + 1^3 + 1 = -1 + 1 - 1 = -1'}
                    errorColor={'#cc0000'}
                />
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'2. -(-1^5) + 1^3 - 1 = 1 - 1 + 1 = 1'}
                    errorColor={'#cc0000'}
                />
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'3.-2^5 + 2^3 - 2 = -32 + 8 - 2 = -26'}
                    errorColor={'#cc0000'}
                />
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'4. -(-2^5) + 2^3 - 2 = 32 + -8 + 2 = 26'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Czyli odpowiedzią będzie C bo -26 jest mniejsze od -2. 
            </div>

            {/* <NextPreviosButtons/> */}

        </div>
    )
}

export default Zadanie








