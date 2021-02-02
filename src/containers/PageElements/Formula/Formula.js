import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Formula = ({val}) => {
    return (
        <div className='study-formula'>
            <BlockMath
                math={val}
                errorColor={'#cc0000'}
                display = {'inline'}
            />                    
        </div>
    )
}

export default Formula
