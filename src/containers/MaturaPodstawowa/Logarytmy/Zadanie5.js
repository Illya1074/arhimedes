
import React from 'react'
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'
import Wzor from '../../Material/Twierdzenia/Potegi/PierwiastkiDzialania'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2019'} zadanie={'1'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczba
                </div> 

                <FormulaProblem val={'log_{\\sqrt{2}} 2'}/>

                <div className='study-problem-content'>
                    jest równa:
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)2'}/>
                    <FormulaProblem val={'B)4'}/>
                    <FormulaProblem val={'C) \\sqrt{2}'}/>
                    <FormulaProblem val={'D) \\frac{1}{2}'}/>
                </div>

            </div>

            <div className='study-line' />

            <Wzor/>

            <div className='study-content'>
                Do jakiej potęgi musimy podnieść pierwiastek z dwóch żeby otrzymać dwa.
            </div>

            <Formula val={'(\\sqrt 2)^x = 2'}/>

            <Formula val={'(2^{\\frac{1}{2}})^x = 2'}/>

            <Formula val={'2^{x \\cdot {\\frac{1}{2}}} = 2^1'}/>

            <Formula val={'x \\cdot {\\frac{1}{2}} = 1'}/>

            <Formula val={'x = 1 : {\\frac{1}{2}}'}/>

            <Formula val={'x = 1 \\cdot {\\frac{2}{1}}'}/>

            <Formula val={'x = 2'}/>

            <Formula val={'Odp: A)'}/>

            
            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Logarytmy/Zadanie1'} previos={'/containers/MaturaPodstawowa/Logarytmy/Zadanie4'}/>

        </div>
    )
}

export default Zadanie








