import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Wzor = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
             
            Wzór na n-ty wyraz ciągu

            <div className='study-alert-formula'>
                <BlockMath
                    math={'a_n = a_1 + (n - 1) \\cdot r'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            
        </div>
    )
}

export default Wzor
