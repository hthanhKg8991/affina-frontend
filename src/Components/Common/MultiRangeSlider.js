import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { formatPrepaidAmount, numFormatter } from "../../Common/Helper";
import "./multiRangeSlider.scss";

const MultiRangeSlider = ({ step, min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }


        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);


    const handleSetMinValue = (event) => {
        let value = event.target.value;
        if (value > 0 && value >= min && value < max) {
            setMinVal(value)
        } else {
            setMinVal('')
        }
    }
    const handleSetMaxValue = (event) => {
        let value = event.target.value;
        console.log('value, max>>>', value, max);
        if (value <= max) {
            setMaxVal(value)
        } else {
            setMaxVal('')
        }
    }

    return (
        <div className="position-relative wrapper-slider">
            <div className="position-relative d-flex justify-content-between">
                <label className="label-range min">min</label>
                <label className="label-range max">max</label>
            </div>
            <div className="range-container">
                <input
                    type="range"
                    min={min}
                    max={max}
                    // defaultValue={minVal}
                    value={minVal}
                    ref={minValRef}
                    step={step}
                    onChange={(event) => {
                        const value = Math.min(+event.target.value, maxVal - 1);
                        // const value = Math.min(+event.target.value, '');
                        setMinVal(value);
                        event.target.value = value.toString();
                    }}
                    className={classnames("thumb thumb--zindex-3", {
                        "thumb--zindex-5": minVal > max - 100
                    })}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    // defaultValue={maxVal}
                    value={maxVal}
                    ref={maxValRef}
                    step={step}
                    onChange={(event) => {
                        const value = Math.max(+event.target.value, '');
                        // console.log('vent.target.value', Number(event.target.value));
                        setMaxVal(value);
                        event.target.value = value.toString();
                    }}
                    className="thumb thumb--zindex-4"
                />
                <div className="slider">
                    <div className="slider__track" />
                    <div ref={range} className="slider__range" />
                    <div className="slider__left-value">{min}</div>
                    <div className="slider__right-value">{numFormatter(max)}</div>
                </div>

            </div>
            <div className="form-input">
                <div className="wrap-input-range">
                    <input type="text" min={min} value={formatPrepaidAmount(minVal)} readOnly
                        // onChange={(event) => handleSetMinValue(event)}
                    />
                    <span className="hyphen">-</span>
                    <input type="text" max={max} value={formatPrepaidAmount(maxVal)} readOnly
                        // onChange={(event) => handleSetMaxValue(event)}
                    />
                </div>
                <span className="text-currency">(VNĐ)</span>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};
MultiRangeSlider.defaultProps = {
    step: 1,
    min: 0,
    max: 5000000,
    onChange: () => { },
};

export default MultiRangeSlider;
