import React from 'react'
// import './FunkcjaKwadratowa.css'
import WartoscBezwzgledna from '../../Material/Numbers/Teoria/WartoscBezwzgledna/WartoscBezwzgledna'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem' 


const Wielomiany = () => {
    return (
        <div>
            
            <div className='study-problem'>
                <Intro rok={'2015'} zadanie={'1'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczba

                </div>

                <FormulaProblem val={'\\space | \\sqrt{1681} - 45| + \\sqrt{1681} \\space'} />
                {/* <div className='study-problem-formula'>
                    <BlockMath
                        math={'\\space | \\sqrt{1681} - 45| + \\sqrt{1681} \\space'}
                        errorColor={'#cc0000'}
                        display = {'inline'}
                    />                    
                </div>
             */}
                <div className='study-problem-content'>
                    jest równa???

                </div>

            </div>
            
            

            <div className='study-line' />

            <WartoscBezwzgledna/>

            <div className='study-line' />
            
            <Formula val={'\\sqrt{1681} = 41'} />
            <Formula val={'41 - 45 = -4'} />

            <div className='study-content'>
                -4 jest mniejsze od 0, odpowiednio w wartości bezwzględnej zmieniamy znak na przeciwny.
                
            </div> 

            <Formula val={'|-4| = 4'} />

            <Formula val={'4 + \\sqrt{1681} = 4 + 41 = 45'} />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Liczby/Zadanie2'} previos={'/containers/MaturaPodstawowa/Liczby/Zadanie6'}/>

        </div>
    )
}

export default Wielomiany








