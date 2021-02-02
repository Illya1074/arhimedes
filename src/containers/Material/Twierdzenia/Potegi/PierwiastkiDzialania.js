import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Wyjasnienie = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
            
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'\\sqrt{a} = a^{\\frac{1}{2}}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'\\sqrt{a}^3 = a^{\\frac{3}{2}}'}
                    errorColor={'#cc0000'}
                />
            </div>

            
            
        </div>
    )
}

export default Wyjasnienie
