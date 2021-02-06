
import React from 'react'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2017'} zadanie={'14'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Jeżeli
                </div> 

                <FormulaProblem val={'m = sin50 \\degree'}/>

                <div className='study-problem-content'>
                    wtedy:
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A) m = sin40 \\degree'}/>
                    <FormulaProblem val={'B) m = cos40 \\degree'}/>
                    <FormulaProblem val={'C) m = cos50 \\degree'}/>
                    <FormulaProblem val={'D) m = tg50 \\degree'}/>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Można skorzystać ze wzory redukcyjnego.
            </div>

            <Formula val={'sin(90 \\degree - \\alpha) = cos \\alpha'}/>

            <div className='study-content'>
                Czyli
            </div>

            <Formula val={'sin50 \\degree = sin(90 \\degree - 40 \\degree) = cos40 \\degree'}/>


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








