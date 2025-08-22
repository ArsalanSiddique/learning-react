import { useState } from "react";

function useToggle(defaultValue) {

    const [value, setValue] = useState(defaultValue)

    function toggle(val) {

        if (typeof val != 'boolean') {
            // setValue(!value);        // by code step by step
            setValue(prev => !prev);    // by chatGPT
        } else {
            setValue(val);
        }

    }

    return [value, toggle];
}

export default useToggle;