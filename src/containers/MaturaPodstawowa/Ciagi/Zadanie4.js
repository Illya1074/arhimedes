
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
                
                <Intro rok={'2016'} zadanie={'15'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Ciąg  
                </div> 

                <FormulaProblem val={'(x, 2x + 3, 4x+3)'}/>

                <div className='study-problem-content'>
                    jest geometryczny. Pierwszy wyraz tego ciągu jest równy:  
                </div>

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)-4'}/>
                    <FormulaProblem val={'B)1'}/>
                    <FormulaProblem val={'C)0'}/>
                    <FormulaProblem val={'D)-1'}/>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Naszym pierwszym wyrazem ciągu jest x, czyli musimy znaleść x.
            </div>


            <div className='flex-row-arround'>
                <div>
                    <Formula val={'a_1 \\cdot q = a_2'}/>
                    <Formula val={'x \\cdot q = 2x+3'}/>
                    <Formula val={'q = \\frac{2x+3}{x}'}/>
                </div>
                <div>
                    <Formula val={'a_3 \\cdot q = a_3'}/>
                    <Formula val={'(2x+3) \\cdot q = 4x+3'}/>
                    <Formula val={'q = \\frac{4x+3}{2x+3}'}/>
                </div>
            </div>

            <Formula val={'\\frac{2x+3}{x} = \\frac{4x+3}{2x+3}'}/>

            <Formula val={'(2x+3)(2x+3) = (4x+3)x'}/>

            <Formula val={'4x^2 + 12x + 9 = 4x^2 +3x'}/>

            <Formula val={'4x^2 - 4x^2 + 12x - 3x = -9'}/>

            <Formula val={'9x = -9'}/>

            <Formula val={'x = -1'}/>

            <Formula val={'Odp: D)'}/>


            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Ciagi/Zadanie5'} previos={'/containers/MaturaPodstawowa/Ciagi/Zadanie3'} />


        </div>
    )
}

export default Zadanie








