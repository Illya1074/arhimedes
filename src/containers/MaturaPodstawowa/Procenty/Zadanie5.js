
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
                
                <Intro rok={'2020'} zadanie={'6'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Na początku miesiąca komputer kosztował 3500zł. W drugiej dekadzie tego miesiąca cenę komputera obniżono o 10%, a w trzeciej dekadzie cena tego komputera została jeszcze raz obniżona, tym razem o 15%. Innych zmian ceny tego komputera w tym miesiącu już nie było. Cena komputera na koniec miesiąca była równa: 
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A) \\space 3272,50 \\space zl'}/>
                    <FormulaProblem val={'B) \\space 2625 \\space zl'}/>
                    <FormulaProblem val={'C) \\space 2677,50 \\space zl'}/>
                    <FormulaProblem val={'D) \\space 2800 \\space zl'}/>
                </div>

            </div>

            <div className='study-line' />

            <Formula val={'3500 - 3500 \\cdot 0,1 = 3150'}/>
            <Formula val={'3150 - 3150 \\cdot 0,15 = 2677,5'}/>
            <Formula val={'Odp: C)'}/>

            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Procenty/Zadanie1'} previos={'/containers/MaturaPodstawowa/Procenty/Zadanie4'}/>

        </div>
    )
}

export default Zadanie








