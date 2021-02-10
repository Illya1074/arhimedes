
import React from 'react'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2018'} zadanie={'27'} punkty={'2'} />
                
                <div className='study-problem-content'>
                    Rozwiąż równanie 
                </div> 

                <FormulaProblem val={'(x^3 + 125)(x^2 - 64) = 0'}/>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Przyrównujemy części równania do zera
            </div>

            <div className='flex-row-arround'>
                <div>
                    <Formula val={'x^3 + 125 = 0'}/>
                    <Formula val={'x^3 = -125'}/>
                    <Formula val={'x = -5'}/>
                </div>
               
                <div>
                    <Formula val={'(x^2 - 64) = 0'}/>
                    <Formula val={'x^2 = 64'}/>
                    <Formula val={'x = 8'}/>
                    <Formula val={'x = -8'}/>
                </div>
            </div>

            <div className='study-line' />

            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








