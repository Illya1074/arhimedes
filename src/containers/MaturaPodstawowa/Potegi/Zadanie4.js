
import React from 'react'
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import Wzor from '../../Material/Twierdzenia/Potegi/PotegiDzialania'
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2018'} zadanie={'3'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Dane są liczby
                </div> 

                <FormulaProblem val={'a = 3,6 \\cdot 10^{-12}'}/>

                <div className='study-problem-content'>
                    oraz
                </div>

                <FormulaProblem val={'b = 2,4 \\cdot 10^{-20}'}/>

                <div className='study-problem-content'>
                    wtedy iloraz a i b jest równy:
                </div>


                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)8,64 \\cdot 10^{-32}'}/>
                    <FormulaProblem val={'B)1,5 \\cdot 10^{-8}'}/>
                    <FormulaProblem val={'C)1,5 \\cdot 10^{8}'}/>
                    <FormulaProblem val={'D)8,64 \\cdot 10^{32}'}/>
                </div>

            </div>

            <div className='study-line' />

            <Wzor/>

            <div className='study-line' />

            <div className='study-content'>
            </div>

            <Formula val={'\\frac{3,6 \\cdot 10^{-12}}{2,4 \\cdot 10^{-20}} = '}/>

            <Formula val={'= 1,5 \\cdot 10^{-12-(-20)} ='}/>

            <Formula val={'= 1,5 \\cdot 10^ 8 '}/>

            <Formula val={'Odp: C)'}/>


            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Potegi/Zadanie5'} previos={'/containers/MaturaPodstawowa/Potegi/Zadanie3'}/>


        </div>
    )
}

export default Zadanie








