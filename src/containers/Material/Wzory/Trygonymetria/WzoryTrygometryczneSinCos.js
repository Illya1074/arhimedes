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
                    math={'sin \\alpha = \\frac{sin \\alpha}{cos \\alpha}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'ctg \\alpha = \\frac{cos \\alpha}{sin \\alpha}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-alert-formula'>
                <BlockMath
                    math={'tg \\alpha \\cdot ctg \\alpha = 1'}
                    errorColor={'#cc0000'}
                />
            </div>

        </div>
    )
}

export default ProstapodlosKierunkowa
