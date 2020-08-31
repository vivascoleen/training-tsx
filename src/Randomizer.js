import React from 'react'

class Randomizer extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            employeeId : '0000',
        };
    }

    
    componentDidMount(){
        this.timerID = setInterval(
            () => this.GetRandomNumber(),
            1000
        );
    }


    min = 1000;
    max = 8000;

    GetRandomNumber(){
        this.setState({
            employeeId: Math.floor(this.min+ (Math.random() * (this.max  - this.min))),
        });
    }

    render(){
        return (
            <div>
                <h1>Employee Id: {this.state.employeeId}</h1>
            </div>
        )
    }
}

export default Randomizer;