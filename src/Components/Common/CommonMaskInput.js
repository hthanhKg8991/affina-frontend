import React, { useState } from 'react'
import MaskedInput from 'react-input-mask';

const CommonMaskInput = (props) => {
    const[value, setValue] = useState('')
    const handleChange = (ev) => {
        setValue(ev.target.value)
        // this.setState({
        //     value: ev.target.value,
        // });
    }

    const handleClear = () => {
        setValue('')
        // this.setState({
        //     value: '',
        // });
    }
    return (
        <div>
            <MaskedInput
                mask={[/\d/, /\d/]}
                onChange={handleChange}
            />

            <button
                type="text"
                onClick={handleClear}
            >
                Clear
            </button>
        </div>
    )
}

export default CommonMaskInput
