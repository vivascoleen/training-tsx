import React from 'react'

class Age extends React.Component{
  
    render() {

        return  <h1>Hello, You are a {checkStage(this.props.age)}</h1>

        const checkStage = (age) => {
            parseInt(age)
            var stage = "";
            switch(true){
                case age >= 1 && age <=3: 
                    stage = "Toddler";
                    break;
                case age >=3 && age <= 5:
                    stage = "Preschool";
                    break;
                case age >=5 && age <= 12:
                    stage = "GradeSchooler";
                    break;
                case age >= 12 && age <= 18:
                    stage = "Teenager";
                    break;
                case age >= 18 && age <= 21:
                    stage = "Young Adult";
                    break;
                default:
                    stage = "Baby";
                    break;
            }

            return stage;
        }
    }
}

export default Age;