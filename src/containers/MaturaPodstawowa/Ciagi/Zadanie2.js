
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
                
                <Intro rok={'2017'} zadanie={'13'} punkty={'1'} />
                
                <div className='study-problem-content'>
                Dany jest trójwyrazowy ciąg geometryczny (24, 6, a - 1). Stąd wynika, że:
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A) \\frac{5}{2}'}/>
                    <FormulaProblem val={'B) \\frac{2}{5}'}/>
                    <FormulaProblem val={'C) \\frac{3}{2}'}/>
                    <FormulaProblem val={'D) \\frac{2}{3}'}/>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Najpierw przydało by się obliczyć nasze q (czyli iloraz).
            </div>

            <Formula val={'a_1 \\cdot q = a_2'} />

            <Formula val={'24 \\cdot q = 6'} />

            <Formula val={'q = \\frac{6}{24}'} />

            <Formula val={'q = \\frac{1}{4}'} />

            <div className='study-content'>
                No i obliczamy nasze a.
            </div>

            <Formula val={'6 \\cdot q = a - 1'} />

            <Formula val={'6 \\cdot \\frac{1}{4} = a - 1'} />

            <Formula val={'\\frac{6}{4} = a - 1'} />

            <Formula val={'\\frac{3}{2} + 1 = a'} />

            <Formula val={'\\frac{3}{2} + \\frac{2}{2} = a'} />

            <Formula val={'\\frac{5}{2} = a'} />

            <Formula val={'Odp: A)'} />


            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Ciagi/Zadanie3'} previos={'/containers/MaturaPodstawowa/Ciagi/Zadanie1'} />


        </div>
    )
}

export default Zadanie








