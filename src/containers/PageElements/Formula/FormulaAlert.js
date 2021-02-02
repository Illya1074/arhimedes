import React from 'react'

const FormulaAlert = ({val}) => {
    return (
        <div className='study-alert-formula'>
            <BlockMath
                math={val}
                errorColor={'#cc0000'}
            />
        </div>
    )
}

export default FormulaAlert
