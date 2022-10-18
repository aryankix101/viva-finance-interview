import React, { Component } from 'react';
import EmploymentInformation from './EmploymentInformation';
import PersonalInformation from './PersonalInformation';
import SmallLoanModal from './SmallLoanModal';
import LargeLoanModal from './LargeLoanModal';

export class Form extends Component {
    state = {
        step: 1,
        name: "",
        surname: "",
        birthday: "",
        ssn: "",
        employerName: "",
        salary: "",
        workStatus: ""
    };
    
    nextStep = () => {
        if(this.state.step===1 && (this.state.name==="" || this.state.surname==="" || this.state.birthday==="" || this.state.ssn==="")) {
            alert("Please fill all inputs!");
            return;
        }
        var bday=this.state.birthday.split("-");
        bday=this.state.birthday.split("-");
        var bday_in_milliseconds = new Date(parseInt(bday[2], 10), parseInt(bday[1], 10) - 1 , parseInt(bday[0]), 10).getTime(); 
        if(isNaN(bday_in_milliseconds)===true || parseInt(bday[0])>31 || parseInt(bday[0])<1 || parseInt(bday[1])>12 || parseInt(bday[1]<1)) {
            alert("Invalid Date.");
            return;
        }
        var now = new Date().getTime();
        if (now - bday_in_milliseconds < 567648000000) {
            alert("Too young!");
            return;
        }
        if (now - bday_in_milliseconds >= 3944619000000) {
            alert("Too old!");
            return;
        }
        let isnum = /^\d+$/.test(this.state.ssn);
        let goneThroughNumError = false;
        if(!isnum) {
            alert("SSN should only contain numbers");
            goneThroughNumError = true;
            return;
        }
        if(!goneThroughNumError && this.state.ssn.length!==9) {
            alert("SSN has to be 9 digits!");
            return;
        }
        let checker = false;
        let goneThrough = false;
        for (var i = 1; i < this.state.ssn.length; i++) {
            goneThrough = true;
            if((this.state.ssn[i]!=='1' || this.state.ssn[0]!=='1')) {
                    checker = true;
                    break;
            }
            if (this.state.ssn[i]===this.state.ssn[0] && this.state.ssn[0]==='1') {
                    checker = false;
            }
            
        }
        if(!checker && goneThrough) {
            alert("SSN contains all 1's which is invalid");
            return;
        }
        
        const { step } = this.state;
        this.setState({
            step: step + 1
          });
        
      };
    
      // Go back to prev step
      prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
        console.log(this.state.step);
      };
      prevSteps = () => {
        const { step } = this.state;
        this.setState({
          step: step - 2
        });
      };

      determineModal = () => {
        const { step } = this.state;
        if (this.state.step===2) {
            
            if((this.state.employerName==="" || this.state.salary==="" || this.state.workStatus==="")) {
                alert("Please fill all inputs!");
                return;
            }
            let isnum = /^\d+$/.test(this.state.salary);
            console.log();
            if(!isnum) {
                alert("Salary should only contain numerical digits");
                return;
            }
            if(isnum) {
                console.log("here");
                if(parseInt(this.state.salary)<1000) {
                    alert("Sorry, your salary isn't eligible");
                    return;
                }
            }
            }
        if (this.state.workStatus==="Part-time" || parseInt(this.state.salary)<15000) {
            this.setState({
                step: step + 1
              });
        }
        else {
            this.setState({
                step: step + 2
              });
        }
      }
    displaySmallLoanAcceptAlert = () => {
        alert("Your funds are on the way! The loan term is 5 months.");
        return;
     }
    displayLargeLoanAcceptAlert = () => {
        alert("Your funds are on the way! The loan term is 24 months.");
        return;
    }
    displayRejectLoanAlert = () => {
        alert("Sorry to hear that");
        return;
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };
    render() {
        const { step } = this.state;
        const {name,
        surname,
        birthday,
        ssn,
        employerName,
        salary,
        workStatus} = this.state;
        const values = {name,
            surname,
            birthday,
            ssn,
            employerName,
            salary,
            workStatus} 
        switch(step) {
            case 1:
                return (
                    <PersonalInformation
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                );
            case 2:
                return (
                    <EmploymentInformation
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    determineModal = {this.determineModal}
                    handleChange = {this.handleChange}
                    values = {values}/>
                )
            case 3:
                return (
                    <SmallLoanModal show={true}
                    displaySmallLoanAcceptAlert = {this.displaySmallLoanAcceptAlert}
                    displayRejectLoanAlert = {this.displayRejectLoanAlert}
                    prevStep = {this.prevStep}/>
                )
            case 4:
                return (
                    <LargeLoanModal show={true}
                    displayLargeLoanAcceptAlert = {this.displayLargeLoanAcceptAlert}
                    displayRejectLoanAlert = {this.displayRejectLoanAlert}
                    prevSteps = {this.prevSteps}/>
                )
        }
    }
}

export default Form;
