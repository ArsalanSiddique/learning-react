import { useState } from "react";
import ClanList from "./ClanList";

function Clan() {

    const [card, useCard] = useState({
        border: "1px solid grey",
        margin: "10px",
        borderRadius: "5px",
        width: '250px'
    })

    const list = {
        listStyle: 'none',
        padding: '0px 10px',
        margin: '5px 5px',
    }

    const clans = [
        {
            name: "Immortals",
            member: "47",
            leader: "Umair",
            orign: "Pakistan"
        },

        {
            name: "SpicyCat",
            member: "40",
            leader: "Bumblebee",
            orign: "Canada"
        },

        {
            name: "Clashers",
            member: "30",
            leader: "Jhon",
            orign: "Italy"
        },
    ];

    const [layout, setLayout] = useState('block');

    function changeTheme(color, backgroundColor) {
        useCard({ ...card, color: color, backgroundColor: backgroundColor })
    }

    function changeLayout(layout) {
        setLayout(layout);
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <button onClick={() => { changeTheme('white', 'grey') }}> Dark Theme </button> &nbsp;
                <button onClick={() => { changeTheme('black', 'whiteSmoke') }}> Light Theme </button> &nbsp;
                <button onClick={() => { changeLayout('flex') }}> Change Layout </button> &nbsp;
                <button onClick={() => { changeLayout('block') }}> Reset Layout </button>
            </div>

            <ClanList clans={clans} cardStyle={card} listStyle={list} layoutStyle={layout} />
        </div>
    );

}


export default Clan;