import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const DzialanieNaPotegach = () => {
    return (
        <div>
            
            <h1 className='study-title'>Działania&nbsp;na&nbsp;potęgach</h1>
            
            {/* <div className='study-content'>Moją radą będzie to że poniższe twierdzenie trzeba po prostu zapamietać. Oczywiście są dowody tego czemu tak, ale 
            na etapie szkól podstawowych i średnich to nie jest potrzebne.</div> */}

            <div className='study-formula'>
                <BlockMath
                    math={'dla \\space dowolnych \\space liczb \\space a, b > 0 \\space  x,y \\in \R'}
                    errorColor={'#cc0000'}
                />
    
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\a^{x}\\cdot \a^{y} = \a^{x+y}'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'\\frac {\a^{x}}{\a^{y}} = \a^{x-y}'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'(a^x)^y = \a^{x \\cdot y}'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'a^x \\cdot b^x = (ab)^x'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'\\frac {\a^{x}}{\a^{x}} =  (\\frac {a}{b})^x'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            
            
                
            
        </div>
    )
}

export default DzialanieNaPotegach
