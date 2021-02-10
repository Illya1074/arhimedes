
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
                
                <Intro rok={'2018'} zadanie={'27'} punkty={'2'} />
                
                <div className='study-problem-content'>
                    Rozwiąż nierówność
                </div> 

                <FormulaProblem val={'3x^2 - 16x + 16 > 0'}/>

            </div>

            <div className='study-line' />

            <Formula val={'3x^2 - 16x + 16 > 0'}/>

            <div className='study-content'>
                Obliczamy deltę
            </div>

            <Formula val={'\\Delta = (-16)^2 - 4 \\cdot 3 \\cdot 16 = 256 - 192 = 64 '}/>
            <Formula val={'\\sqrt \\Delta = 8 '}/>
            <Formula val={'x_1 = \\frac{16 - 8}{6} = \\frac{4}{3}'}/>
            <Formula val={'x_2 = \\frac{16 + 8}{6} = 4'}/> 

            <div className='study-content'>
                Nasz wspólczynik <i>a</i> jest równy 3, czyli jest dodatni, a to oznacza ze parabola będzie skierowna do góry.
            </div>          

            <Formula val={'Odp: x \\in (- \\infty , \\frac{4}{3}) \\cup (4, \\infty) '}/>

            <div className='study-line' />

            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








