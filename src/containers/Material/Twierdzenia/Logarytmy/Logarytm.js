import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Wyjasnienie = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
            
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'log_a b = x \\space \\space gdy \\space \\space a^x = b'}
                    errorColor={'#cc0000'}
                />
            </div>
           
            
            
        </div>
    )
}

export default Wyjasnienie
