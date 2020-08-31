import React from 'react'

class Anagram extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            firstWord = '',
            secondWord = '',
            isAnagram = true
        };
    }

    

     CheckIfAnagram = () =>{
        
        if(firstWord.length != secondWord.length){
            isAnagram = false;
        }
        
        var n1 = firstWord.length;
        firstWord = sort(firstWord);
        secondWord = sort(secondWord);

        for (var i = 0; i < firstWord.length; i++) 
        {
            if (firstWord[i] != secondWord[i]) 
            isAnagram = false; 
        }

    }

    render(){
        // let isWordAnagram = this.isAnagram;
        return (
            // <div>
            //    <label>First Word:</label><input value = {this.state.firstWord}></input>
            //    <label>Second Word:</label><input value = {this.state.secondWord}></input>
            //    <button onClick={CheckIfAnagram}>Click to check if Anagram:</button>
            // </div>

            // <div>
            //     <label>
            //     isWordAnagram 
            //      ? Anagram
            //      : Not an anagram
            //      </label>
            // </div>
        );
    }
}

export default Anagram;