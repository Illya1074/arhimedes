import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const WzorySkroconegoMnozenia = () => {
    return (
        <div>
            
            <h1 className='study-title'>Wzory&nbsp;skróconego&nbsp;mnożenia</h1>
            
            {/* <div className='study-content'>Moją radą będzie to że poniższe twierdzenie trzeba po prostu zapamietać. Oczywiście są dowody tego czemu tak, ale 
            na etapie szkól podstawowych i średnich to nie jest potrzebne.</div> */}

            <div className='study-formula'>
                <BlockMath
                    math={'(a+b)^2= a^2 + 2ab+ b^2'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'(a-b)^2= a^2 - 2ab+ b^2'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'(a+b)^3= a^3 + 3a^{2}b + 3ab^{2} + b^3'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'(a-b)^3= a^3 - 3a^{2}b + 3ab^{2} - b^3'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'a^2 - b^2 = (a-b)(a+b)'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'a^3 + b^3 = (a+b)(a^2 - ab + b^2)'}
                    errorColor={'#cc0000'}
                />
    
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'a^3 - b^3 = (a-b)(a^2 + ab + b^2)'}
                    errorColor={'#cc0000'}
                />
    
            </div> 
        </div>
    )
}

export default WzorySkroconegoMnozenia
