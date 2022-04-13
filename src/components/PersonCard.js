import React, { useState } from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, initAge, hairColor} = props;
    const [age, setAge] = useState(initAge);
    return (
        <div className="Person">
            <h2>{lastName}, {firstName}</h2>
            <div>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={(e) => setAge(age + 1)}>Increase Age</button>
            </div>
        </div>
    )
    
}

export default PersonCard;
