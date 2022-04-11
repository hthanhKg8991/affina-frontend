import React from 'react'
import MaskedInput from 'react-input-mask';

const CommonMaskInput = (props) => {

    const handleChange = (ev) => {
        this.setState({
            value: ev.target.value,
        });
    }

    const handleClear = () => {
        this.setState({
            value: '',
        });
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
