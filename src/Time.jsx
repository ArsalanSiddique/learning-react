import { useEffect, useState } from "react";

function Time({color}) {

    console.log(color);
    const [time, setTime] = useState(0);

    useEffect(
        () => {
            setInterval(
                () => {
                    setTime(new Date().toLocaleTimeString());
                },
                1000
            )
        },
        []
    );

    return (
        <div style={{
            "color": color,
            "backgroundColor": "black",
            "width": "85px",
            "margin": "20px",
            "padding": "10px",
            "borderRadius": "5px"
        }}>
            {time}
        </div>
    );

}

export default Time;