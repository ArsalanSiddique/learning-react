import Manager from "./Manager";

function Boss() {
    return (
        <div style={{ backgroundColor: "red", padding: 10 }}>
            This is boss component

            <Manager />

        </div>
    );
}

export default Boss;