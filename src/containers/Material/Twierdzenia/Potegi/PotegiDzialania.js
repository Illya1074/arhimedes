import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Wyjasnienie = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
            
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'a^x \\cdot a^y = a^{x+y}'}
                    errorColor={'#cc0000'}
                />
            </div>


            <div className='study-alert-formula'>
                <BlockMath
                    math={'\\frac{a^x}{a^y} = a^{x-y}'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'(a^x)^y = a^{x \\cdot y}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'a^x \\cdot b^x = (ab)^{x}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'\\frac{a^x}{a^y} = (\\frac{a}{b})^x'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            
        </div>
    )
}

export default Wyjasnienie
