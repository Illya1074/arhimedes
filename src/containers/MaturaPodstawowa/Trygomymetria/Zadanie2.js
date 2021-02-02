
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Wzory from '../../Material/Wzory/Trygonymetria/WzoryTrygometryczneTgCtg'

const Zadanie = () => {
    return (
        <div>
            
            
            
            <div className='study-problem'>
                
                <Intro rok={'2015'} zadanie={'15'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Jeżeli
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'0^{\\degree} < \\alpha < 90^{\\degree} '}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    oraz
                </div>

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'tg \\alpha = 2sin \\alpha'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    to ile wynosi 
                </div>

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'cos \\alpha ?'}
                        errorColor={'#cc0000'}
                    />
                </div>

            </div>

            <div className='study-line' />

            <Wzory/>

            <div className='study-line'/>

            <div className='study-content'>
                Mamy odnaleść cosinusa, odpowiednio skorzystamy z powyższych wzorów, zamienimy tanges na iloraz sinusa oraz cosinusa.
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'tg \\alpha = \\frac{sin \\alpha}{cos \\alpha}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'tg \\alpha = 2sin \\alpha'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\frac{sin \\alpha}{cos \\alpha} = 2sin \\alpha'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                No i rozwiązujemy równanie
            </div>


            <div className='study-formula'>
                <BlockMath
                    math={'sin \\alpha = 2sin \\alpha cos \\alpha'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\frac {sin \\alpha}{sin \\alpha} = 2 cos \\alpha'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'1 = 2 cos \\alpha'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\frac{1}{2} = cos \\alpha'}
                    errorColor={'#cc0000'}
                />
            </div>


            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Trygomymetria/Zadanie1'} previos={'/containers/MaturaPodstawowa/Trygomymetria/Zadanie1'}/>


        </div>
    )
}

export default Zadanie








