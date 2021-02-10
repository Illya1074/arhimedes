
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2018'} zadanie={'5'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Zbiorem wszystkich rozwiązań nierówności
                </div> 

                <FormulaProblem val={'\\frac{1-2x}{2} > \\frac{1}{3}'}/>
 
                <div className='study-problem-content'>
                    jest przedział
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)(- \\infty, \\frac{1}{6})'}/>
                    <FormulaProblem val={'B)(- \\infty, \\frac{2}{3})'}/>
                    <FormulaProblem val={'C)(\\frac{1}{6}, + \\infty)'}/>
                    <FormulaProblem val={'D)(\\frac{2}{3}, + \\infty)'}/>
                </div>

            </div>

            <div className='study-line' />

            <Formula val={'\\frac{1-2x}{2} > \\frac{1}{3}'}/>
            <Formula val={'3 - 6x > 2 '}/>
            <Formula val={' - 6x > -1 '}/>
            <Formula val={'x < \\frac{1}{6} '}/>
            <Formula val={'Odp: A) '}/>


            <div className='study-line' />

            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








