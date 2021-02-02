import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import './FunkcjaKwadratowa.css'

const WzoryVieta = () => {
    return (
        <div>
            
            <h1 className='study-title'>Wzory&nbsp;Vieta</h1>
            
            <div className='study-line' />
            
           
            <div className='study-formula'>
                <BlockMath
                    math={'gdy \\space \\space ax^2 + bx + c = 0 \\space \\space ma \\space \\space pierwiastki \\space \\space x_1 \\space i \\space x_2 \\space \\space (\\Delta \\geqslant 0)'}
                    errorColor={'#cc0000'}
                />
    
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x_1 + x_2 = - \\frac {b}{a} \\space \\space oraz \\space \\space x_1 \\cdot x_2 = \\frac {c}{a}'}
                    errorColor={'#cc0000'}
                />
    
            </div>

        </div>
    )
}

export default WzoryVieta
