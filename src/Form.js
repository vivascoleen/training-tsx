import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            Name : '',
            LastName: '',
            Age: 0
        };
    }

    
    render(){
        let persons = [
            {Name : "Malcom", LastName: "Reynolds"},
            {Name : "Kaylee", LastName: "Frye"},
            {Name : "Jayne", LastName: "Cobb"}
          ];
          
        const listPerson = persons.map((person) => 
            <li>{person.Name}</li>
        );
        return (
            <div>
                <h1>Employee Name: {this.state.Name}</h1>
            </div>
        )
    }
}

export default Form;