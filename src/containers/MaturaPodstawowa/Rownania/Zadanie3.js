
import React from 'react'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'
import Wzory from '../../Material/Wzory/Liczby/WzorySrkoconegoMnozenia'

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

                <div className='study-problem-line'></div>

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A) \\space prawdziwa \\space dla \\space x = - \\sqrt{2}'}/>
                    <FormulaProblem val={'B) \\space prawdziwa \\space dla \\space x =  \\sqrt{2}'}/>
                    <FormulaProblem val={'C) \\space prawdziwa \\space dla \\space x =  -1'}/>
                    <FormulaProblem val={'D) \\space falszywa \\space dla \\space każdej \\space liczby \\space x'}/>
                </div>

            </div>

            <div className='study-line' />

            <Wzory/>

            <div className='study-line' />

            <div className='study-content'>
                Jedna z najprostszych metod z której możemy skorzystać to będzie metoda podstawiania. Podstawimy wartości z podpunktu A), B), C) 
                i jeśli nic nie będzie pasować to poprawną odpowiedzią będzie D).
            </div>

            <Formula val={'L = P'}/>

            <div className='study-content'>
                Lewa strona musi równać się prawej.
            </div>

            <Formula val={'L = (x \\sqrt{2} - 2)^2 = (x \\sqrt{2})^2 + 2 \\cdot (-2) \\cdot x \\sqrt{2} + 4'}/>
            <Formula val={'P = (2 + \\sqrt{2})^2 = 4 + 4 \\sqrt{2} + 2 = 6 + 4 \\sqrt{2}'}/>

            <div className='study-content'>
                Czyli bierzemy lewą stronę z x i przyrównumjemy do prawej.
            </div>

            <Formula val={'A) L= (- \\sqrt{2} \\cdot \\sqrt{2})^2  + 2 \\cdot (-2) \\cdot (- \\sqrt{2} \\cdot \\sqrt{2}) + 4 = '}/>
            <Formula val={'= 4 + 8 + 4 = 16 \\neq P'}/>

            <Formula val={'B) L= (\\sqrt{2} \\cdot \\sqrt{2})^2 + 2 \\cdot (-2) \\cdot (\\sqrt{2} \\cdot \\sqrt{2}) + 4 = '}/>
            <Formula val={'= 4 - 8 + 4 = 0 \\neq P'}/>

            <Formula val={'C) L= (-1 \\cdot \\sqrt{2})^2 + 2 \\cdot (-2) \\cdot (-1 \\cdot \\sqrt{2}) + 4 = '}/>
            <Formula val={'= 2 + 4 \\sqrt{2} + 4 = 6 + 4\\sqrt{2} = P'}/>

            <Formula val={'P = (2 + \\sqrt{2})^2 = 4 + 4 \\sqrt{2} + 2 = 6 + 4 \\sqrt{2}'}/>


            <div className='study-content'>
                Pasuje odpowiedź C).
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








