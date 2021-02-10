import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Wzor = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'log_a b + log_a c = log_a a \\cdot c'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'log_a b - log_a c = log_a \\frac{b}{c}'}
                    errorColor={'#cc0000'}
                />
            </div>
            
        </div>
    )
}

export default Wzor
