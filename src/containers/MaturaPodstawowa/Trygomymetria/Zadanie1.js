
import React,{useEffect} from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import './MyCss.css'
import Twierdzenie from '../../Material/Wzory/Trygonymetria/TrygometryczneDefinicje'

const Zadanie = () => {
    
    return (
        <div>            
            <div className='study-problem'>
                
                <Intro rok={'2015'} zadanie={'14'} punkty={'1'} />
                
                <div className='study-pic-custom jhk7'>
                </div> 
                
            </div>
            
            <div className='study-line' />
            
            <div className='study-content'>
                Skoro mamy punkt
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'P = (-4, 5)'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'tg \\alpha = \\frac{y}{x}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <Twierdzenie/>

            <div className='study-line' />

            

            <div className='study-content'>
                podstawiamy wspołrzędne
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'tg \\alpha = \\frac{5}{-4} = - \\frac{5}{4}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Trygomymetria/Zadanie2'} previos={'/containers/MaturaPodstawowa/Trygomymetria/Zadanie5'}/>

        </div>
    )
}

export default Zadanie








