import Counter from "./Counter";
import User from './User';
import Wrapper from "./Wrapper";
import Form from './Form';
import Skills from './Skills';
import Laptop from "./Laptop";
import Mobile from "./Mobile";

function App() {

  function sum(a, b) {
    return a + b;
  }

  function test() {
    alert("Button clicked!");
  }

  const userDetails = {
    "name": "Arsalan",
    "age": 25,
    "email": "arsalan@test.com",
  }

  const ftuit = (apple) => {
    alert(apple);
  }

  const testing = () => {
    alert("Called");
  }

  let userObject = {
    name: "Arsalan",
    email: "arsalan@test.com",
    age: 28
  }

  const mobileData = [
    {
      id: "1",
      name: "Tecno",
      price: 25000
    },
    {
      id: "2",
      name: "Infinix",
      price: 35000
    },
    {
      id: "3",
      name: "Samsung",
      price: 45000
    },
    {
      id: "4",
      name: "Apple",
      price: 95000
    },
  ];

  return (
    <div>

      {/* <Counter />

      <h1>SUM: {sum(1, 2)}</h1>
      <h2>{userDetails.name} -- {userDetails.email}</h2>
      <h1>Hello, World!</h1>
      <button onClick={test}>Add</button>
      <button onClick={() => ftuit("Apple")}>Apple</button>

      <button onClick={testing}>Testing</button> */}

      {/* <Wrapper>
        <User user={userObject} />
      </Wrapper>

      <Wrapper color="green">
        <h1>Hello Brother</h1>
      </Wrapper> */}

      {/* <Wrapper>
        <Form />
      </Wrapper> */}


      {
        mobileData.map((item) => (
          <div key={item.id}>
            <Mobile data={item} />
          </div>
        ))
      }

      <Laptop />

      <Wrapper color="white">
        <Skills />
      </Wrapper>


    </div>
  );
}

export function Footer() {
  return (
    <div>
      <p>© 2025 My Blog. All rights reserved.</p>
    </div>
  );
}

export default App;