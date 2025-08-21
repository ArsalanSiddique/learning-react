import styled from 'styled-components';
import { Button } from 'react-bootstrap';

// const Heading = styled.h1`
// color:red;
// font-size:24px;
// border: 1px solid black;
// border-radius:2px solid black;
// `;

const Heading = styled.h1({
    color: 'red',
    fontSize: '24px',
    border: '1px solid black',
    borderRadius: '2px solid black',
    padding: '10px',
    margin: '10px',
});

function Home() {

    return (
        <div>
            <Button variant='danger' size='sm' > Hello </Button>
            <Heading>This is test heading</Heading>
        </div>
    );

}


export default Home;