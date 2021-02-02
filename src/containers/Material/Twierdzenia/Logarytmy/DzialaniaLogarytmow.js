import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Wyjasnienie = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'\\space \\space dla \\space \\space a \\neq 1, a > 0, x > 0, y > 0'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'log_a (x \\cdot y) = log_a{x} + log_a {y} '}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'log_a  \\frac{x}{y} = log_a{x} - log_a {y} '}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'\\space \\space dla \\space \\space a \\neq 1, a > 0, x > 0'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'log_a x^y = y \\cdot log_a x'}
                    errorColor={'#cc0000'}
                />
            </div>
           
            
            
        </div>
    )
}

export default Wyjasnienie
