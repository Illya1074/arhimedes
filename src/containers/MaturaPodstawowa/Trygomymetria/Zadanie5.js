
import React from 'react'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'


const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2019'} zadanie={'13'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Sinus kąta ostrego α jest równy
                </div> 

                <FormulaProblem val={'\\frac{4}{5}'}/>

                <div className='study-problem-content'>
                    wtedy: 
                </div> 

                <div className='flex-row-arround'>
                    <FormulaProblem val={'A)cos \\alpha = \\frac{5}{4}'}/>
                    <FormulaProblem val={'B)cos \\alpha = \\frac{1}{5}'}/>
                    <FormulaProblem val={'C)cos \\alpha = \\frac{9}{25}'}/>
                    <FormulaProblem val={'D)cos \\alpha = \\frac{3}{5}'}/>
                </div>

            </div>

            <div className='study-line' />

            <Formula val={'sin \\alpha = \\frac{4}{5} = 0,8'}/>

            <div className='study-content'>
                W tablicach wartości funkcji trygonometrycznych sprawdzamy ile wynosi alfa.
            </div>


            <div className='study-content'>
                Dla wartości 0,8 sinus ma być kąta 54 stopni.
            </div>


            <div className='study-content'>
                Sprawdzamy ile wynosi kosinus 54 stopni i widzimy że w przybliżeniu będzie około 0,6.
                Na kalkulatorze dzieląc licznik przez mianownik możemy sprowadzić ułamki do postaci dziesiętnej
                i możemy sprawdzić ktory wynik pasuje.
            </div>


            <Formula val={'A)\\frac{5}{4} = 1,25'}/>
            <Formula val={'B)\\frac{1}{5} = 0,2'}/>
            <Formula val={'C)\\frac{9}{25} = 0,36'}/>
            <Formula val={'D)\\frac{3}{5} = 0,6'}/>
            
            <Formula val={'Odp: D)'}/>


            <div className='study-line' />

            <NextPreviosButtons/>

        </div>
    )
}

export default Zadanie








