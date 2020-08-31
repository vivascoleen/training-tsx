import React from 'react'

class Anagram extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            firstWord :'',
            secondWord : '',
            isAnagram : true
        };
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

     CheckIfAnagram = (e) =>{
        e.preventDefault();
        
        var firstWordState = this.state.firstWord.split('').sort().join(''), 
            secondWordState = this.state.secondWord.split('').sort().join('');
        
        if(firstWordState.length !== secondWordState.length){
            this.state.isAnagram = false;
        }
        else{
            this.state.isAnagram = (firstWordState === secondWordState) ? true : false;
        }
    
        this.setState(() => ({
            isAnagram : this.state.isAnagram
        }));


    

    }

    render(){
        return (
            <div>
               <label>First word:</label><input type = "text" name = "firstWord" value = {this.state.firstWord} onChange = {this.handleChange}></input>
               <label>Second Word:</label><input  type = "text" name = "secondWord" value = {this.state.secondWord} onChange = {this.handleChange}></input>
               <button onClick={(e) => this.CheckIfAnagram(e)}>Check if Anagram:</button>
               <label> {this.state.isAnagram ? 'Anagram' : 'Not an anagram'}  </label>
            </div>
        );
    }
}

export default Anagram;