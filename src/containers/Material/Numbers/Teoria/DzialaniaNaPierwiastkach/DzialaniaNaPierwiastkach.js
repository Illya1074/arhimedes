import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const DzialanieNaPierwiastkach = () => {
    return (
        <div>
            
            <h1 className='study-title'>Działania&nbsp;na&nbsp;pierwiastkach</h1>
            
            {/* <div className='study-content'>Moją radą będzie to że poniższe twierdzenie trzeba po prostu zapamietać. Oczywiście są dowody tego czemu tak, ale 
            na etapie szkól podstawowych i średnich to nie jest potrzebne.</div> */}

            <div className='study-formula'>
                <BlockMath
                    math={' \\sqrt {a \\cdot b} = \\sqrt {a} \\cdot \\sqrt {b}  \\space \\space dla \\space a, b \\geqslant 0'}
                    errorColor={'#cc0000'}
                />
    
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\sqrt {\\frac a b} = \\frac {\\sqrt a}{\\sqrt b}  \\space \\space dla \\space a \\geqslant 0, b > 0'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'\\sqrt[3]{a \\cdot b} = \\sqrt[3]{a} \\cdot \\sqrt[3]{b} \\space\\space dla \\space a,b \\in \R'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'\\sqrt [3]{\\frac a b} = \\frac {\\sqrt[3] a}{\\sqrt[3] b}  \\space \\space dla \\space a \\in \R, b \\ne 0'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            
            
                
            
        </div>
    )
}

export default DzialanieNaPierwiastkach
