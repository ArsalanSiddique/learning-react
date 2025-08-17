import Card from './Card';

const Students = () => {


    const students = [
        {
            "id": 1,
            "name": "Arsalan Ahmed",
            "email": "arsalan@test.com",
            "age": "35"
        },
        {
            "id": 2,
            "name": "Arsalan Ahmed",
            "email": "arsalan@test.com",
            "age": "35"
        },
        {
            "id": 3,
            "name": "Arsalan Ahmed",
            "email": "arsalan@test.com",
            "age": "35"
        },
        {
            "id": 4,
            "name": "Arsalan Ahmed",
            "email": "arsalan@test.com",
            "age": "35"
        },
        {
            "id": 5,
            "name": "Arsalan Ahmed",
            "email": "arsalan@test.com",
            "age": "35"
        }
    ];

    return (
        <div>
            {
                students.map((student) => (
                    <div key={student.id}>
                        <Card data={student}/>
                    </div>
                ))
            }
        </div>
    );

}

export default Students;