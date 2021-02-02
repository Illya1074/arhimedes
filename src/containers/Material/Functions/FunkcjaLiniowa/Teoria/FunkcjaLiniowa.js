import React from 'react'
import './FunkcjaLioniowa.css'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const FunkcjaLioniowa = () => {
    return (
        <div>
            <h1 className='study-title'>Funkcja&nbsp;Liniowa</h1>
            <div className='study-content'>
                Funkcja liniowa, jak wskazuje sama nazwa to funkcja która przyjmuje postać linii.
                Wzór funkcji liniowej:
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'f(x)=ax+b'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            <div className='study-pic d4h5'>
            </div>
            <div className='study-content'>

                We wzorze f(x) = ax + b, a nazywamy <b>Wspólczynikiem Kierunkowej Prostej</b>, b nazywamy <b>Wyrazem Wolnym</b>.
            </div>
            <div className='study-content'>

                Funkcja liniowa ma tylko jedno miejsce zerowe:
            </div>
            
            <div className='study-pic a1h5'>
            </div>
            <div className='study-content'>
                -Funkcja jest rosnąca:
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\space a > 0  \\space \\space np.  \\space \\space f(x) = 5 \\cdot x + 4'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            <div className='study-content'>
                -Funkcja jest malejąca:
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\space a < 0  \\space \\space np.  \\space \\space f(x) = -3 \\cdot x + 2'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            <div className='study-content'>
                -Funkcja jest stała:
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space \\space a = 0  \\space \\space np.  \\space \\space f(x) = 0 \\cdot x + 4'}
                    errorColor={'#cc0000'}
                />
    
            </div>
        </div>
    )
}

export default FunkcjaLioniowa
