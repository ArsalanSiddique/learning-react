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
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

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

  return (
    <div>

      <Container fluid style={{ height: '100vh' }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Todo />
          </Col>
        </Row>
      </Container>

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