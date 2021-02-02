import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import './Zadania.css'

const ProstapodlosKierunkowa = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'sin \\alpha =  \\frac{y}{r}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'cos   \\alpha =  \\frac{x}{r}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'tg \\alpha = \\frac{y}{x}, \\space gdy \\space x \\neq 0'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            <div className='study-alert-formula'>
                <BlockMath
                    math={'r = \\sqrt{x^2 + y^2} > 0'}
                    errorColor={'#cc0000'}
                />
            </div>

            {/* <div className='study-pic g8u'>
            </div> */}

        </div>
    )
}

export default ProstapodlosKierunkowa
