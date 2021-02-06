
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
                
                <Intro rok={'2016'} zadanie={'14'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Czternasty wyraz ciągu arytmetycznego jest równy 
                </div> 

                <FormulaProblem val={'8'}/>

                <div className='study-problem-content'>
                    a różnica tego ciągu jest równa
                </div> 

                <FormulaProblem val={'- \\frac{3}{2}'}/>

                <div className='study-problem-content'>
                    siódmy wyraz tego ciągu jest równy: 
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)\\frac{37}{2}'}/>
                    <FormulaProblem val={'B)- \\frac{37}{2}'}/>
                    <FormulaProblem val={'C)- \\frac{5}{2}'}/>
                    <FormulaProblem val={'D)\\frac{5}{2}'}/>
                </div>

            </div>

            <div className='study-line' />

            <Wzor/>

            <div className='study-line' />

            <div className='study-content'>
                Obliczmy nasze <i>a1</i>
            </div>

            <Formula val={'8 = a_1 + (14 - 1) \\cdot ( - \\frac{3}{2})'}/>
            
            <Formula val={'8 = a_1 + (13) \\cdot ( - \\frac{3}{2})'}/>

            <Formula val={'8 = a_1 +  (- \\frac{39}{2})'}/>

            <Formula val={'8 = a_1 - \\frac{39}{2}'}/>

            <Formula val={'8 + \\frac{39}{2} = a_1 '}/>

            <Formula val={'\\frac{16}{2} + \\frac{39}{2} = a_1 '}/>

            <Formula val={'\\frac{55}{2} = a_1 '}/>

            <div className='study-content'>
                I zostało tylko ze wzoru obliczyć nasze <i>a7</i>
            </div>

            <Formula val={'a_7 = \\frac{55}{2} + (7 - 1) \\cdot ( - \\frac{3}{2})'}/>

            <Formula val={'a_7 = \\frac{55}{2} + (6) \\cdot ( - \\frac{3}{2})'}/>

            <Formula val={'a_7 = \\frac{55}{2} + ( - \\frac{18}{2})'}/>

            <Formula val={'a_7 = \\frac{37}{2}'}/>

            <Formula val={'Odp: A)'}/>


            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Ciagi/Zadanie4'} previos={'/containers/MaturaPodstawowa/Ciagi/Zadanie2'} />


        </div>
    )
}

export default Zadanie








