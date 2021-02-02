
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'

const Wielomiany = () => {
    return (
        <div>
            
            <h1 className='study-title'>Wielomiany</h1>
            
            <div className='study-line' />
            
            <div className='study-content'>
                Wyrażenie postaci
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'w(x)=a_n x^n + a_{n-1} x^{n-1} +...+a_1 x + a_0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                gdzie:
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'\\space a_n \\ne 0, n \\in \N'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                nazywamy <b>wielomianem</b> stopnia n.
            </div> 

            <div className='study-line' />

            <div className='study-content'>
                Liczby
            </div> 
            
            <div className='study-formula'>
                <BlockMath
                    math={'a_n, a_{n-1}, a_{n-2},a_{n-3}... a_1, a_0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                nazywane <b>współczynikami wielomianu</b>.
            </div> 

            <div className='study-line' />

            <div className='study-content'>
                Liczba <i>a</i> jest <b>pierwiastkiem</b> wielomianu jeśli w(a) = 0.
            </div>

            <div className='study-line' />


            <div className='study-content'>
            <b>Twierdzenie o reszcie</b>
            <br/>
            <br/>
                Jeśli liczba <i>r </i> jest resztą z dzielenia wielomianu <i>w</i> przez dwumian <i>x - a</i>, to <i>r=w(a)</i> 
            </div>

            <div className='study-line' />

            <div className='study-content'>
            <b>Twierdzenie Bezouta</b>
            <br/>
            <br/>
                Liczba <i>a</i> jest pierwiastkiem wielomianu <i>w</i> wtedy i tylko wtedy, gdy wielomian <i>w</i> jest podzielny przez dwumian <i>x - a</i> 
            </div>

            <div className='study-line' />

            <div className='study-content'>
                <b>Twierdzenie o pierwiastkach calkowitych</b>
                <br/>
                <br/>
                Jeżeli wielomian 
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'w(x)=a_n x^n + a_{n-1} x^{n-1} +...+a_1 x + a_0 \\space \\space (a_n \\ne 0)'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                o współczynnikach calkowitych ma pierwiastek całkowoity, to jest on dzielnikiem wyrazu wolnego a0. 
            </div>

        </div>
    )
}

export default Wielomiany
