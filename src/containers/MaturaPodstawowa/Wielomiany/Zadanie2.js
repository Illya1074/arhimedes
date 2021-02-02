
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
                
                <Intro rok={'2015'} zadanie={'6'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Ile jest równa suma wszystkich pierwiastków rownania: 
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'(x+3)(x+7)(x-11)=0'}

                        errorColor={'#cc0000'}
                    />
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Żeby iloczyn tych liczb wynosił 0, trzeba po kolei przyrównać mnożniki do zera:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'1) \\space x + 3 = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\space x = -3'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'(-3+3)(3+7)(3-11)=0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'0 \\cdot 10 \\cdot(-8)=0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'2) \\space x + 7 = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\space x = -7'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'(-7+3)(-7+7)(-7-11)=0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-4 \\cdot 0 \\cdot (-18)=0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'3) \\space x - 11 = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x = 11'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'(11+3)(11+7)(11-11)=0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'14 \\cdot 18 \\cdot 0=0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Pierwiastkami tego równania będą:
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'-3, \\space -7, \\space 11'}

                    errorColor={'#cc0000'}
                />
            </div>
            
            <div className='study-content'>
                Zostało tylko obliczyć sumę tych pierwiastków (rozwiązań równania)
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-3+(-7)+11 = 1'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'Odp: 1'}

                    errorColor={'#cc0000'}
                />
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Wielomiany/Zadanie1'} previos={'/containers/MaturaPodstawowa/Wielomiany/Zadanie1'}/>

        </div>
    )
}

export default Zadanie








