import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const ProstapodlosKierunkowa = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
             
             Żeby dwie proste były prsotapadłe sobie muszą spelnić warunek

            <div className='study-alert-formula'>
                <BlockMath
                    math={'a_1 \\cdot a_2 = -1'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            gdzie 

            <div className='study-alert-formula'>
                <BlockMath
                    math={'a_1 \\space \\space i \\space \\space a_2'}
                    errorColor={'#cc0000'}
                />
            </div>

            to współczyniki kierunkowe tych prostych.
            
        </div>
    )
}

export default ProstapodlosKierunkowa
