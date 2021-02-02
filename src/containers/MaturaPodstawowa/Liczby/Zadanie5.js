
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'

const Zadanie2 = () => {
    return (
        <div>
         
            <div className='study-problem'>
                
                <Intro rok={'2015'} zadanie={'4'} punkty={'1'} />
                                
                <div className='study-problem-content'>
                    Oblicz równanie:
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'\\frac{m}{5- \\sqrt{5}} = \\frac{5+\\sqrt{5}}{5}'}

                        errorColor={'#cc0000'}
                    />
                </div>

            </div>

            <div className='study-line' />

            <div className='study-formula'>
                <BlockMath
                    math={'\\frac{m}{5- \\sqrt{5}} = \\frac{5+\\sqrt{5}}{5}'}

                    errorColor={'#cc0000'}
                />
            </div>
            
            <div className='study-formula'>
                <BlockMath
                    math={'5m = (5 - \\sqrt{5})(5 + \\sqrt{5})'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'5m = 25 - 5'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'5m = 20'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'m = \\frac{20}{5}'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'m = 4'}

                    errorColor={'#cc0000'}
                />
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Liczby/Zadanie6'} previos={'/containers/MaturaPodstawowa/Liczby/Zadanie4'}/>

        </div>
    )
}

export default Zadanie2








