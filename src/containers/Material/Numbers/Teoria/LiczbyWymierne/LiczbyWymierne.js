import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const LiczbyWymierne = () => {
    return (
        <div>
            <h1 className='study-title'>Liczby&nbsp;Wymierne</h1>
            <div className='study-content'>
                Liczba wymierna to taka jaką mozna zapisać w postaci ułamka, i licznik ma być liczbą całkowitą oraz mianownik ma być liczbą całkowitą
                oprócz zera(no bo na zero nie można dzielić haaallllloooo!!!😆😆😆)
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'\\frac {liczba \\space calkowita}{liczba \\space calkowita \\space oprócz \\space zera}'}
                    errorColor={'#cc0000'}
                />
            </div>
            
        </div>
    )
}

export default LiczbyWymierne
