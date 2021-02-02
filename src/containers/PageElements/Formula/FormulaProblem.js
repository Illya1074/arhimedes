import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const FormulaProblem = ({val}) => {
    return (
        <div className='study-problem-formula'>
            <BlockMath
                math={val}

                errorColor={'#cc0000'}
            />
        </div>
    )
}

export default FormulaProblem
