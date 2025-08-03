import { useState } from "react";

function Skills() {

    const [skills, setSkills] = useState([]);
    const [gender, setGender] = useState('female');
    const [city, setCity] = useState('Islamabad');

    const storeSkills = (event) => {

        if (event.target.checked) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills([...skills.filter((item) => item != event.target.value)]);
        }

    }

    return (
        <div>

            <h1>Form</h1>

            <input type="checkbox" value={"php"} id="php" onChange={storeSkills} />
            <label htmlFor="php">PHP</label> <br /><br />

            <input type="checkbox" value={"react"} id="react" onChange={storeSkills} />
            <label htmlFor="react">React</label> <br /><br />

            <input type="checkbox" value={"node"} id="node" onChange={storeSkills} />
            <label htmlFor="node">Node</label> <br /><br />

            <input type="checkbox" value={"java"} id="java" onChange={storeSkills} />
            <label htmlFor="java">Java</label> <br /><br />


            <h2>Select Gender</h2>

            <input type="radio" value={'male'} onChange={(event) => setGender(event.target.value)} name="gender" id="male" checked={gender == 'male'} />
            <label htmlFor="male">Male</label>

            <input type="radio" value={'female'} onChange={(event) => setGender(event.target.value)} name="gender" id="female" checked={gender == 'female'} />
            <label htmlFor="female">Femal</label>


            <h2>Select City</h2>
            <select name="city" id="city" onChange={(event) => setCity(event.target.value)} defaultValue={city}>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Hyderabad">Hyderabad</option>
            </select>


            <h2>
                {skills.toString()}
            </h2>
            <h2>
                Selected Gender: {gender}
            </h2>
            <h2>
                Selected City: {city}
            </h2>
        </div>
    );

}

export default Skills;