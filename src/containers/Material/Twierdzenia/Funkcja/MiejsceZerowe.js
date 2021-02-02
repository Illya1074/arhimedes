import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const MiejscZerowe = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
            
            Miejsce zerowe funkcji, to argument (x) dla którego funkcja przyjmuje wartość (y) zero. Taki x zapisujemy w ten sposób... 
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'x_0'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            Czyli miejsce zerowe to
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'f(x_0)=0'}
                    errorColor={'#cc0000'}
                />
            </div>
        </div>
    )
}

export default MiejscZerowe
