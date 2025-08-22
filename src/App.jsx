import Counter from "./Counter";
import User from './User';
import Clan from './Clan';
import Wrapper from "./Wrapper";
import Form from './Form';
import Skills from './Skills';
import Laptop from "./Laptop";
import Mobile from "./Mobile";
import Students from "./Students";
import Dropdown from "./Dropdown";
import Time from "./Time";
import College from "./College";
import Home from "./Home";
import Profile from "./Profile";
import Todo from "./Todo";
import Address from "./Address";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Contactform from "./Contactform";
import Register from "./Register";
import Boss from "./Boss";
import { SubjectData } from "./ContextData";
import { ThemeData } from "./ContextTheme";
import { useContext, useState } from "react";
import Notes from "./Notes";
import Fromvalidation from "./Fromvalidation";

function App() {

  // function sum(a, b) {
  //   return a + b;
  // }

  // function test() {
  //   alert("Button clicked!");
  // }

  // const userDetails = {
  //   "name": "Arsalan",
  //   "age": 25,
  //   "email": "arsalan@test.com",
  // }

  // const ftuit = (apple) => {
  //   alert(apple);
  // }

  // const testing = () => {
  //   alert("Called");
  // }

  // let userObject = {
  //   name: "Arsalan",
  //   email: "arsalan@test.com",
  //   age: 28
  // }

  // const mobileData = [
  //   {
  //     id: "1",
  //     name: "Tecno",
  //     price: 25000
  //   },
  //   {
  //     id: "2",
  //     name: "Infinix",
  //     price: 35000
  //   },
  //   {
  //     id: "3",
  //     name: "Samsung",
  //     price: 45000
  //   },
  //   {
  //     id: "4",
  //     name: "Apple",
  //     price: 95000
  //   },
  // ];


  const [sub, setSub] = useState('English')
  const [theme, setTheme] = useState('default')


  function changeTheme() {
    console.log(theme);
    if (theme === 'default') {
      setTheme('dark');
      return;
    }

    setTheme('default');
    return;
  }

  return (
    <div>

      <ThemeData.Provider value={theme}>
        <Container fluid>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>


              <button onClick={changeTheme}> Day/Night </button>

              {/* <Todo /> */}

              {/* <Contactform /> */}

              {/* <Register /> */}

              {/* <SubjectData.Provider value={sub}>
              <p>This is app.jsx</p>
              <select value={sub} onChange={(event) => { setSub(event.target.value) }}>
                <option value="">Select</option>
                <option value="Math">Math</option>
                <option value="Urdu">Urdu</option>
                <option value="English">English</option>
                <option value="History">History</option>
              </select>

              <button onClick={() => { setSub("") }} className="btn btn-sm btn-primary">Clear</button>
              <Boss />
            </SubjectData.Provider> */}


              {/* <Notes /> */}


              <Fromvalidation />





            </Col>
          </Row>
        </Container>
      </ThemeData.Provider>
    </div >
  );
}

export function Footer() {
  return (
    <div className="m-3">
      <p>© 2025 My App. All rights reserved.</p>
    </div>
  );
}

export default App;