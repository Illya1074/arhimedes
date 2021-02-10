
import React from 'react'
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'
import Wzor from '../../Material/Twierdzenia/Potegi/PotegiDzialania'
import Wzor2 from '../../Material/Twierdzenia/Potegi/PierwiastkiDzialania'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2018'} zadanie={'2'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczba
                </div> 

                <FormulaProblem val={'\\sqrt[3]{\\frac{7}{3}} \\cdot \\sqrt[3]{\\frac{81}{56}}'}/>

                <div className='study-problem-content'>
                    jest równa:
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)\\frac{\\sqrt{3}}{2}'}/>
                    <FormulaProblem val={'B)\\frac{3}{2 \\sqrt[3]{21}}'}/>
                    <FormulaProblem val={'C)\\frac{3}{2}'}/>
                    <FormulaProblem val={'D)\\frac{9}{4}'}/>
                </div>

            </div>

            <div className='study-line' />

            <Wzor/>

            <Wzor2/>

            <div className='study-line' />


            <Formula val={'\\sqrt[3]{\\frac{7}{3}} \\cdot \\sqrt[3]{\\frac{81}{56}} ='}/>

            <Formula val={'= (\\frac{7}{3})^{\\frac{1}{3}} \\cdot (\\frac{81}{56})^{\\frac{1}{3}} ='}/>

            <Formula val={'= (\\frac{7}{3} \\cdot \\frac{81}{56})^{\\frac{1}{3}} = '}/>

            <Formula val={'= (\\frac{81}{3} \\cdot \\frac{7}{56})^{\\frac{1}{3}} ='}/>

            <Formula val={'= (27 \\cdot \\frac{1}{8})^{\\frac{1}{3}} ='}/>

            <Formula val={'=  (\\frac{27}{8})^{\\frac{1}{3}} = \\frac{3}{2}'}/>

            <Formula val={'Odp: C)'}/>


            <div className='study-line' />

            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








