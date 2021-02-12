
import React from 'react'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'
import './MyCss.css'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2018'} zadanie={'14'} punkty={'1'} />
                
                <div className='study-pic-custom a545'>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Obliczmy kąt alfa. Najprościej będzie oobliczyć najpierw sinus kąta alfa, a potem odczytać wartość z tablicy wartości trygonometrycznych. 
            </div>

            <Formula val={'sin \\alpha = \\frac{3}{8}'}/>
            <Formula val={'sin \\alpha = 0,375'}/>

            <div className='study-content'>
                Możemy odzczytać że sinus ma przybliżoną wartosć do 0,375 dla 22 stopni. 
            </div>

            <Formula val={'21 \\degree < 22 \\degree < 24 \\degree'}/>
            <Formula val={'Odp: C)'}/>



            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








