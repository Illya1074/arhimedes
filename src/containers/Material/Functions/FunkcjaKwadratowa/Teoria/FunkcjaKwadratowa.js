import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import './FunkcjaKwadratowa.css'

const FunkcjaKwadratowa = () => {
    return (
        <div>
            
            <h1 className='study-title'>Funkcja&nbsp;Kwadratowa</h1>
            
            <div className='study-line' />
            
            <div className='study-content'>
                <b>Funkcja kwadratowa</b> (Trójmian kwadratowy) jest określona wzorem:
            </div>
            
            <div className='study-formula'>
                <BlockMath
                    math={'f(x)=ax^2 + bx + c \\space \\space dla \\space x \\in \R'}
                    errorColor={'#cc0000'}
                />
    
            </div>

            <div className='study-line' />

            <div className='study-content'>
                Wykres funkcji jest nazywany <b>parabolą</b>:
            </div>

            <div className='study-pic a5f5'>
            </div>
            
            <div className='study-line' />
            
            <div className='study-content'>
                W zależności od współczynika <i>a</i> ramiona paraboli będą skierowani albo do góry (dla {'>'} 0) albo na dół (dla {'<'} 0).
            </div> 
            
            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\space a < 0'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-pic a435'>
            </div>

            <div className='study-line' />

            <div className='study-content'>
                <b>Miejsca zerowe funkcji kwadratowej</b>:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\Delta > 0'}
                    errorColor={'#cc0000'}
                />
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}'}
                    errorColor={'#cc0000'}
                /> 
            </div>

            <div className='study-line' />

            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\Delta = 0'}
                    errorColor={'#cc0000'}
                />
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'x_0 = \\frac{-b}{2a}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\Delta < 0 \\space \\space nie \\space \\space ma \\space \\space miejsc \\space \\space zerowych'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <div className='study-content'>
                Postać <b>ogólna</b>:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(x) = ax^2 + bx + c, \\space a \\ne 0'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <div className='study-content'>
                Postać <b>kanoniczna</b>:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'y = a(x-p)^2 + q, \\space a \\ne 0'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <div className='study-content'>
                (p, q)  to są <b>wspólrzędne</b> wierzchołka paraboli:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'p = - \\frac {b}{2a} \\space \\space i \\space \\space q = - \\frac {\\Delta} {4a}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <div className='study-content'>
                Postać <b>iloczynowa</b>:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\space \\Delta > 0, \\space \\space to \\space \\space f(x)=a(x-x_1)(x-x_2)'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'gdzie \\space \\space x_1 \\space \\space i \\space \\space x_2 \\space \\space to \\space \\space miejsca \\space \\space zerowe'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />
            
            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\space \\Delta = 0, \\space \\space to \\space \\space f(x)=a(x-x_0)^2'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'gdzie \\space \\space x_0 \\space \\space to \\space \\space miejsca \\space \\space zerowe'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />
            
            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\space \\Delta < 0, \\space \\space to \\space \\space nie \\space \\space istnieje \\space \\space postać \\space \\space iloczynowa'}
                    errorColor={'#cc0000'}
                />
            </div>


        </div>
    )
}

export default FunkcjaKwadratowa
