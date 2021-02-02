import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Delta = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
             

            <div className='study-alert-formula'>
                <BlockMath
                    math={'\\Delta = b^2 - 4 \\cdot a \\cdot c'}
                    errorColor={'#cc0000'}
                />
            </div>
            

            <div className='study-alert-formula'>
                <BlockMath
                    math={'x_1 = \\frac{-b - \\sqrt \\Delta}{2a}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'x_2 = \\frac{-b + \\sqrt \\Delta}{2a}'}
                    errorColor={'#cc0000'}
                />
            </div>

            
        </div>
    )
}

export default Delta
