
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
                
                <Intro rok={'2019'} zadanie={'3'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    W pewnym banku prowizja od udzielanych kredytów hipotecznych przez cały styczeń była równa 4%. Na początku lutego ten bank obniżył wysokość prowizji od wszystkich kredytów o 1 punkt procentowy. Oznacza to, że prowizja od kredytów hipotecznych w tym banku zmniejszyła się o: 
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)1 \\%'}/>
                    <FormulaProblem val={'B)25 \\%'}/>
                    <FormulaProblem val={'C)33 \\%'}/>
                    <FormulaProblem val={'D)75 \\%'}/>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Prowizja wynosiła 4% i została zmniejszona o 1 punkt procentowy. Czyli obliczamy jaki procent 1 stanowi od 4.
            </div>

            <Formula val={'\\frac{4}{100} = \\frac{1}{x}'}/>
            <Formula val={'4x = 100'}/>
            <Formula val={'x = 25%'}/>
            <Formula val={'Odp: B)'}/>

            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Procenty/Zadanie5'} previos={'/containers/MaturaPodstawowa/Procenty/Zadanie3'}/>


        </div>
    )
}

export default Zadanie








