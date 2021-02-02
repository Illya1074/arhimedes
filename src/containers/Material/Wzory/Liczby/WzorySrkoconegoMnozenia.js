import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Wzor = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
             
        

            <div className='study-alert-formula'>
                <BlockMath
                    math={'(a + b)^2 = a^2 + 2ab + b^2'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'(a-b)^2 = a^2 - 2ab + b^2'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'a^2-b^2 = (a+b)(a-b)'}
                    errorColor={'#cc0000'}
                />
            </div>

            
        </div>
    )
}

export default Wzor
