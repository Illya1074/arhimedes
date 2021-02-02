
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
                
                <Intro rok={'2019'} zadanie={'2'} punkty={'1'} />
                
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








