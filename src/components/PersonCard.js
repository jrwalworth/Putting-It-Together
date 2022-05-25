import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }
    }
    
    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div className="Person">
                <h2>{lastName}, {firstName}</h2>
                <div>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={() => this.setState({age: this.state.age + 1})}>Increase Age By 1yr</button>
                </div>
            </div>
        )
    }
}


export default PersonCard;
