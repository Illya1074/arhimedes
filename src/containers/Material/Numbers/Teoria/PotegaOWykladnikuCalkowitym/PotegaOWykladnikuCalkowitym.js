import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const PotegaOWykladnikuCalkowitym = () => {
    return (
        <div>
            
            <h1 className='study-title'>Potęga&nbsp;o&nbsp;wykładniku&nbsp;całkowitym</h1>
            
            {/* <div className='study-content'>Moją radą będzie to że poniższe twierdzenie trzeba po prostu zapamietać. Oczywiście są dowody tego czemu tak, ale 
            na etapie szkól podstawowych i średnich to nie jest potrzebne.</div> */}

            <div className='study-formula'>
                <BlockMath
                    math={'\a^{0} = 1 \\space\\space dla \\space a \\ne 0'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'\a^{-1} = \\frac {1}{a} \\space\\space dla \\space a \\ne 0'}
                    errorColor={'#cc0000'}
                />
            
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'\a^{-n} = \\frac {1}{a^n} \\space\\space dla \\space a \\ne 0  \\space\\space dla \\space n \\in \N'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            
            
                
            
        </div>
    )
}

export default PotegaOWykladnikuCalkowitym
