import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const WartoscBezwzgledna = () => {
    return (
        <div className='study-alert'>
            <h1 className='study-alert-title'>Ważne&nbsp;info!!!</h1>
            
            <div className="flex-row-arround">
                
                <div className='study-formula-little'>
                    <BlockMath
                        math={'\\land \\space to \\space znaczy \\space "i"'}

                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-formula-little'>
                    <BlockMath
                        math={'\\lor \\space to \\space znaczy \\space "lub"'}

                        errorColor={'#cc0000'}
                    />
                </div>
                
            </div>
            
            
        </div>
    )
}

export default WartoscBezwzgledna
