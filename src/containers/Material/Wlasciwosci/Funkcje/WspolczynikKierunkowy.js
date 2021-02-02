import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const ProstapodlosKierunkowa = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
             
             Współczynik kierunkowej prostej to jest to co jest przed naszym x w funkcji liniowej

            <div className='study-alert-formula'>
                <BlockMath
                    math={'f(x) = a \\cdot x + b'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            gdzie <i>a</i>  to współczynik kierunkowy tej prostej.
            
        </div>
    )
}

export default ProstapodlosKierunkowa
