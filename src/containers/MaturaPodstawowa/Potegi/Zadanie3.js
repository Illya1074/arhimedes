
import React from 'react'
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'
import Wzor from '../../Material/Twierdzenia/Potegi/PotegiDzialania'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2019'} zadanie={'2'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczba naturalna 
                </div> 

                <FormulaProblem val={'n = 2^{14} \\cdot 5^{15}'}/>

                <div className='study-problem-content'>
                    w zapisie dziesiętnym ma: 
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A) 14 \\space cyfr'}/>
                    <FormulaProblem val={'B) 15 \\space cyfr'}/>
                    <FormulaProblem val={'C) 16 \\space cyfr'}/>
                    <FormulaProblem val={'D) 30 \\space cyfr'}/>
                </div>

            </div>

            <div className='study-line' />

            <Wzor/>

            <div className='study-line' />

            <Formula val={'n = 2^{14} \\cdot 5^{15} ='}/>
            <Formula val={'n = 2^{14} \\cdot 5^{14} \\cdot 5 = '}/>
            <Formula val={'n = 10^{14} \\cdot 5'}/>

            <div className='study-content'>
                Odpowiednio będziemy mieli liczbę z piątką na początku oraz 14 zer. Wsumie 15 cyfr.
            </div>

            <Formula val={'Odp: B)'}/>


            <div className='study-line' />

            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








