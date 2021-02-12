
import React from 'react'
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'
import Wzor from '../../Material/Wzory/Logarytmy/DzialaniaNaLogarytmach'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2017'} zadanie={'1'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczba
                </div> 

                <FormulaProblem val={'2log_3 6 - log_3 4'}/>

                <div className='study-problem-content'>
                    jest równa
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)4'}/>
                    <FormulaProblem val={'B)2'}/>
                    <FormulaProblem val={'C)2 log_3 2'}/>
                    <FormulaProblem val={'D)log_3 8'}/>
                </div>

            </div>

            <div className='study-line' />

            <Wzor/> 

            <div className='study-line' />

            <Formula val={'log_3 36 - log_3 4 = log_3 \\frac{36}{4} = log_3 9 = 2'}/>

            <Formula val={'Odp: B)'}/>


            {/* <div className='flex-row-arround'>
                <div>

                </div>
                <div>
                    
                </div>
            </div> */}

            <div className='study-line' />

            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








