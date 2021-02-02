
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Wzory from '../../Material/Wzory/Funkcja/Delta'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2016'} zadanie={'28'} punkty={'2'} />
                
                <div className='study-problem-content'>
                    Rozwiąż równanie
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'(4-x)(x^2 + 2x - 15) = 0'}
                        errorColor={'#cc0000'}
                    />
                </div>
            </div>

            <div className='study-line' />

            <Wzory/>

            <div className='study-line' />

            <div className='study-content'>
                Przyrównujemy te dwie części rownania do zera, dla tego żeby rownanie zostalo spelnione jedna z tych części musi równać się zero.
            </div>

            <div className='flex-row-arround'>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'(x^2 + 2x - 15) = 0'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'No \\space \\space bo \\space \\space (4-x) \\cdot 0 = 0 '}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'x^2 + 2x - 15 = 0'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'\\Delta = 4 + 60 = 64'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'x_1 = \\frac{-2 - \\sqrt{64}}{2} = -5'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'x_2 = \\frac{-2 + \\sqrt{64}}{2} = 3'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'(4-x) = 0 '}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'No \\space \\space bo \\space \\space 0 \\cdot (x^2 + 2x - 15) = 0 '}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'4-x = 0 '}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={' -x = -4 / \\cdot (-1)'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'x = 4'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'Odp: x = 4 \\lor x = 3 \\lor x = -5'}
                    errorColor={'#cc0000'}
                />
            </div>


            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Rownania/Zadanie1'} previos={'/containers/MaturaPodstawowa/Rownania/Zadanie1'}/>

        </div>
    )
}

export default Zadanie








