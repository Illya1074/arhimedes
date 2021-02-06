
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
                
                <Intro rok={''} zadanie={''} punkty={''} />
                
                <div className='study-problem-content'>
                    
                </div> 

                <FormulaProblem val={''}/>

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)'}/>
                    <FormulaProblem val={'B)'}/>
                    <FormulaProblem val={'C)'}/>
                    <FormulaProblem val={'D)'}/>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
            </div>

            <Formula/>


            <div className='flex-row-arround'>
                <div>

                </div>
                <div>
                    
                </div>
            </div>

            <div className='study-line' />

            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








