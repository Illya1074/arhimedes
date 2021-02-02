import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const PotegaOWykladnikuWymiernym = () => {
    const x = 100; 
    return (
        <div>
            
            <h1 className='study-title'>Potęga&nbsp;o&nbsp;wykładniku&nbsp;wymiernym</h1>
            
            {/* <div className='study-content'>Moją radą będzie to że poniższe twierdzenie trzeba po prostu zapamietać. Oczywiście są dowody tego czemu tak, ale 
            na etapie szkól podstawowych i średnich to nie jest potrzebne.</div> */}

            
            <div className='study-formula'>
                <BlockMath
                    math={`\a^{\\frac 1 n} = \\sqrt[n]{${x}}  \\space\\space dla \\space a \\geqslant 0 , \\space n \\in \N , \\space n > 1`}
                    errorColor={'#cc0000'}
                />
            
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'\a^{\\frac m n} = (\\sqrt[n]{a})^m  \\space\\space dla \\space a > 0 , \\space n \\in \N , \\space n > 1, \\space m \\in \C'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            
            
                
            
        </div>
    )
}

export default PotegaOWykladnikuWymiernym
