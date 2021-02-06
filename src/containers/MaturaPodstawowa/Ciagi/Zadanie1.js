
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'
import Wzor from '../../Material/Wzory/Ciagi/CiagArytmytyczny'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2017'} zadanie={'12'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    W ciągu arytmetycznym określonym dla
                </div> 

                <FormulaProblem val={'n \\geqslant 1'}/>

                <div className='study-problem-content'>
                    dane są
                </div>

                <FormulaProblem val={'a_1 = 5 \\space \\space a_2 = 11'}/>

                <div className='study-problem-content'>
                    wtedy:
                </div>

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)a_{14} = 71'}/>
                    <FormulaProblem val={'B)a_{12} = 71'}/>
                    <FormulaProblem val={'C)a_{11} = 71'}/>
                    <FormulaProblem val={'D)a_{10} = 71'}/>
                </div>

            </div>

            <div className='study-line' />

            <Wzor/>

            <div className='study-line' />

            <div className='study-content'>
                Najpierw obliczmy nasze r (różnicę).
            </div>

            <Formula val={'a_2 - a_1 = 6'}/>

            <div className='study-content'>
                Teraz musimy odnaleść nasze n.
            </div>

            <Formula val={'5 + (n-1) \\cdot 6 = 71'}/>
            <Formula val={'5 + 6n - 6 = 71'}/>
            <Formula val={'6n - 1 = 71'}/>
            <Formula val={'6n = 71 + 1'}/>
            <Formula val={'6n = 72'}/>
            <Formula val={'n = 12'}/>

            <Formula val={'Odp: B)'}/>
        
            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Ciagi/Zadanie2'} previos={'/containers/MaturaPodstawowa/Ciagi/Zadanie5'} />

        </div>
    )
}

export default Zadanie








