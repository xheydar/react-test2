import RangeSlider from 'react-bootstrap-range-slider'
import { useState } from 'react'

import '../../node_modules/react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';


export default function Slider( props )
{
    let min_value = parseInt(props.range.min_value);
    let max_value = parseInt(props.range.max_value);

    const [ value, setValue ] = useState(0);

    return (
        <RangeSlider 
            value={value}
            onChange={ e => setValue( e.target.value ) }
            min={min_value}
            max={max_value}

        />
    )

}
