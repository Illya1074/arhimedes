
import React from 'react'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2017'} zadanie={'5'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Równość
                </div> 

                <FormulaProblem val={'(x \\sqrt{2} - 2)^2 = (2 + \\sqrt{2})^2'}/>

                <div className='study-problem-content'>
                    jest: 
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A) \\space prawdziwa \\space dla \\space x = - \\sqrt{2}'}/>
                    <FormulaProblem val={'B) \\space prawdziwa \\space dla \\space x =  \\sqrt{2}'}/>
                    <FormulaProblem val={'C) \\space prawdziwa \\space dla \\space x =  -1'}/>
                    <FormulaProblem val={'D) \\space fałszywa \\space dla \\space każdej \\space liczby \\space x'}/>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
            </div>

            <Formula val={''}/>

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








