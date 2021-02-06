
import React from 'react'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2017'} zadanie={'8'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Równanie
                </div> 

                <FormulaProblem val={'x(x^2 - 4)(x^2 + 4)=0'}/>

                <div className='study-problem-content'>
                    z niewiadomą x:
                </div> 

                <div className='flex-row-arround'>
                    <div className='study-problem-content'>A) nie ma rozwiązań w zbiorze liczb rzeczywistych</div>
                    <div className='study-problem-content'>B) ma dokładnie dwa rozwiązania w zbiorze liczb rzeczywistych</div>
                    <div className='study-problem-content'>C) ma dokładnie trzy rozwiązania w zbiorze liczb rzeczywistych</div>
                    <div className='study-problem-content'>D) ma dokładnie pięć rozwiązań w zbiorze liczb rzeczywistych</div>
                </div>

                <div className='study-problem-content'>
                </div> 

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Spróbujmy odnaleść wszystkie pierwiastki tego równania.
            </div>

            <Formula val={'x(x^2 - 4)(x^2 + 4)=0'}/>

            <Formula val={'x = 0'}/>

            <div className='study-line' />

            <Formula val={'(x^2 - 4) = 0'}/>

            <Formula val={'x^2 = 4'}/>

            <Formula val={'x = 2 \\space \\space \\lor \\space \\space x = -2'}/>

            <div className='study-line' />

            <Formula val={'(x^2 + 4) = 0'}/>

            <Formula val={'x^2 \\neq -4'}/>

            <div className='study-content'>
                Czyli pierwiastkami równania będą 0, 2, -2. Odpowiednio prawidłową odpowiedzią będzie C), bo mamy trzy pierwiastki.
            </div>


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








