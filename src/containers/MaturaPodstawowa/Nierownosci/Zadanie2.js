
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
                
                <Intro rok={'2017'} zadanie={'6'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Do zbioru rozwiązań nierówności      
                </div> 

                <FormulaProblem val={'(x^4 + 1)(2 - x) > 0'}/>

                <div className='study-problem-content'>
                    nie należy liczba:       
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A) -3'}/>
                    <FormulaProblem val={'B) -1'}/>
                    <FormulaProblem val={'C) 1'}/>
                    <FormulaProblem val={'D) 3'}/>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Rozwiążmy nierówność na początek.
            </div>

            <Formula val={'(x^4 + 1)(2 - x) > 0'}/>

            <div className='study-content'>
                Skoro wiemy że liczba 
            </div>

            <Formula val={'(x^4 + 1)'}/>

            <div className='study-content'>
                na pewno jest dodatnia, możemy obustronie ją podzielić 
            </div>

            <Formula val={'(x^4 + 1)(2 - x) > 0 \\space \\space \\space /:(x^4 + 1)'}/>
            <Formula val={'(2 - x) > 0 '}/>
            <Formula val={' - x > -2 '}/>
            <Formula val={' x < 2 '}/>

            <div className='study-content'>
                No i widzimy że nierówność nie spełnia liczba 3, więc odpowiedzią będzie D) 
            </div>


            <div className='flex-row-arround'>
                <div>

                </div>
                <div>
                    
                </div>
            </div>

            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Nierownosci/Zadanie3'} previos={'/containers/MaturaPodstawowa/Nierownosci/Zadanie1'}/>


        </div>
    )
}

export default Zadanie








