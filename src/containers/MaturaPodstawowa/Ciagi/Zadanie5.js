
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Formula from '../../PageElements/Formula/Formula' 
import FormulaProblem from '../../PageElements/Formula/FormulaProblem'
import Wzor from '../../Material/Wzory/Liczby/WzorySrkoconegoMnozenia'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2016'} zadanie={'30'} punkty={'2'} />
                
                <div className='study-problem-content'>
                    Ciąg
                </div> 

                <FormulaProblem val={'(a_n)'}/>

                <div className='study-problem-content'>
                    jest określony wzorem
                </div>

                <FormulaProblem val={'a_n = 2n^2 + 2n \\space \\space n \\geqslant 1'}/>

                <div className='study-problem-content'>
                    Wykaż, że suma każdych dwóch kolejnych wyrazów tego ciągu jest kwadratem liczby naturalnej. 
                </div>


            </div>

            <div className='study-line' />

            <Wzor/>

            <div className='study-line' />

            <div className='study-content'>
                To zsumujemy dwa kolejne ciągi
            </div>

            <Formula val={'a_{n} + a_{n+1} = (2n^2 + 2n) + (2(n+1)^2 + 2(n+1)) = '}/>

            <Formula val={'= 2n^2 + 2n + (2(n^2 + 2n + 2) + 2n+2) = '}/>

            <Formula val={'= 2n^2 + 2n + 2n^2 + 4n + 2 + 2n + 2 ='}/>

            <Formula val={'= 4n^2 + 8n + 4'}/>

            <div className='study-content'>
                Trzeba udowodnić że wynik będzie kwadratem liczby naturalnej. Skorzystamy ze wzorów skroconego mnożenia(z kwadratu sumy).
            </div>

            <Formula val={' 4n^2 + 8n + 4 = (2n + 2)^2'}/>

            <Formula val={' \\sqrt{(2n + 2)^2} = 2n + 2'}/>



            <div className='study-content'>
                Wykazaliśmy że suma dwóch kolejnych wyrazów ciągu jest kwadratem liczby naturalnej
            </div>


            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Ciagi/Zadanie1'} previos={'/containers/MaturaPodstawowa/Ciagi/Zadanie4'} />


        </div>
    )
}

export default Zadanie








