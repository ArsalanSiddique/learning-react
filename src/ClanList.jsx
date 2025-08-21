function ClanList({ clans, cardStyle, listStyle, layoutStyle }) {

    return (
        <div>
            <div style={{ display: layoutStyle }}>
                {
                    clans.map((clan, index) => (
                        <div key={index} style={cardStyle}>
                            <ul style={listStyle}>
                                <li>Name: {clan.name}</li>
                                <li>Leader: {clan.leader}</li>
                                <li>Orign: {clan.origin}</li>
                                <li>Members: {clan.member}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );

}

export default ClanList;