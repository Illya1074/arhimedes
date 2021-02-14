
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
                
                <Intro rok={'2018'} zadanie={'4'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Cena roweru po obniżce o 15% była równa 850 zł. Przed obniżką ten rower kosztował: 
                </div> 


                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)865,00 zl'}/>
                    <FormulaProblem val={'B)850,00 zl'}/>
                    <FormulaProblem val={'C)1000,00 zl'}/>
                    <FormulaProblem val={'D)977,50 zl'}/>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Przyjmijmy że x to nasza cena roweru przed obniżką. Czyli x - 0,15x = 0,85x
            </div>

            <Formula val={'0,85x = 850'}/>
            <Formula val={'x = 850 : 0,85'}/>
            <Formula val={'x = 1000 zl'}/>
            <Formula val={'Odp: C)'}/>

            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Procenty/Zadanie2'} previos={'/containers/MaturaPodstawowa/Procenty/Zadanie4'}/>

        </div>
    )
}

export default Zadanie








