
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

                <Intro rok={'2015'} zadanie={'3'} punkty={'1'} />

                <div className='study-problem-content'>
                    Oblicz iloczyn <i>abc</i>:
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'a=- \\frac{1}{27}, \\space b=log_\\frac{1}{4}64, \\space c=log_\\frac{1}{3}27'}
                        errorColor={'#cc0000'}
                    />
                </div>
            </div>

            

            <div className='study-line' />


            <div className='study-content'>
                Mamy obliczyć iloczyn, czyli trza po prostu wszystko pomnożyć
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'a \\cdot b \\cdot c = - \\frac{1}{27} \\cdot log_\\frac{1}{4}64 \\cdot log_\\frac{1}{3}27 '}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <div className='study-content'>
                Doprowadźmy te logarytmy to ladniejszych postaci
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'b = log_\\frac{1}{4}64 = log_\\frac{1}{4} (\\frac{1}{64})^{-1} = log_\\frac{1}{4} ((\\frac{1}{4})^3)^{-1} ='}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'= log_\\frac{1}{4} (\\frac{1}{4})^{3 \\cdot (-1)} = log_\\frac{1}{4} (\\frac{1}{4})^{-3} = -3'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'c = log_\\frac{1}{3}27 = log_\\frac{1}{3} (\\frac{1}{27})^{-1} = log_\\frac{1}{3} ((\\frac{1}{3})^3)^{-1} ='}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'= log_\\frac{1}{3} (\\frac{1}{3})^{3 \\cdot (-1)} = log_\\frac{1}{3} (\\frac{1}{3})^{-3} = -3'}

                    errorColor={'#cc0000'}
                />
            </div>

            

            <div className='study-content'>
                Nooo teraz to już wygląda lepiej 😊😊😊 zostało tylko wszystko pomnożyć
            </div> 

            
            <div className='study-formula'>
                <BlockMath
                    math={'-\\frac{1}{27} \\cdot (-3) \\cdot (-3) = -\\frac{1 \\cdot (-3) \\cdot (-3)}{27} = - \\frac{9}{27} = - \\frac{1}{3}'}

                    errorColor={'#cc0000'}
                />
            </div>
           
            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Liczby/Zadanie4'} previos={'/containers/MaturaPodstawowa/Liczby/Zadanie2'}/>

        </div>
    )
}

export default Zadanie2








