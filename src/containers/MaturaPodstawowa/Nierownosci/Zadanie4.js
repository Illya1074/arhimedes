
import React from 'react'
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2018'} zadanie={'26'} punkty={'2'} />
                
                <div className='study-problem-content'>
                    Rozwiąż nierówność
                </div> 

                <FormulaProblem val={'2x^2 - 3x > 5'}/>

            </div>

            <div className='study-line' />


            <Formula val={'2x^2 - 3x > 5'}/>
            <Formula val={'2x^2 - 3x - 5 > 0'}/>
            <Formula val={'\\Delta = (-3)^2 + 4 \\cdot 2 \\cdot 5 = 49'}/>
            <Formula val={'\\sqrt \\Delta = 7'}/>
            <Formula val={'x_1 = \\frac{3 - 7}{4} = -1'}/>
            <Formula val={'x_2 = \\frac{3 + 7}{4} = 2 \\frac{1}{2}'}/>

            <div className='study-content'>
                Nasz wspólczynik <i>a</i> jest równy 2, czyli jest dodatni, a to oznacza ze parabola będzie skierowna do góry.
            </div>

            <Formula val={'Odp: x \\in (- \\infty , -1) \\cup (2 \\frac{1}{2}, \\infty) '}/>

            <div className='study-line' />

            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








