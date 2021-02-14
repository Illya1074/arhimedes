
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
                
                <Intro rok={'2016'} zadanie={'3'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczby <i>a</i> i <i>c</i> są dodatnie. Liczba <i>b</i> stanowi 48% liczby <i>a</i> oraz 32% liczby <i>c</i>. Ile wynosi <i>c</i>??? 
                </div> 

            </div>

            <div className='study-line' />

            <div className='flex-row-arround'>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'\\frac{a}{100} = \\frac{b}{48}'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'a \\cdot 48 = b \\cdot 100'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'\\frac{a \\cdot 48}{100} = b'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={' a \\cdot 0,48 = b'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
                <div>
                <div className='study-formula'>
                        <BlockMath
                            math={'\\frac{c}{100} = \\frac{b}{32}'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'c \\cdot 32 = b \\cdot 100'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'\\frac{c \\cdot 32}{100} = b'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={' c \\cdot 0,32 = b'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'a \\cdot 0,48 = c \\cdot 0,32'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\frac{a \\cdot 0,48}{0,32} \\cdot \\frac{100}{100} = c '}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\frac{a \\cdot 48}{32} / \\frac{16}{16} = c '}
                    errorColor={'#cc0000'}
                />
            </div>
            
            <div className='study-formula'>
                <BlockMath
                    math={'\\frac{a \\cdot 3}{2} = c '}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'a \\cdot 1,5 = c '}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'Odp: a \\cdot 1,5'}
                    errorColor={'#cc0000'}
                />
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Procenty/Zadanie2'} previos={'/containers/MaturaPodstawowa/Procenty/Zadanie5'}/>

        </div>
    )
}

export default Zadanie








