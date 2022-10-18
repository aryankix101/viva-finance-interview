import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import App from '../App';

export class PersonalInformation extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return(
            <MuiThemeProvider>
                <AppBar title = "Enter Personal Information"/>
                <TextField hintText = "Enter first name" floatingLabelText="First Name" onChange={handleChange('name')} defaultValue={values.name}/>
                <br/>
                <TextField hintText = "Enter last name" floatingLabelText="Last Name" onChange={handleChange('surname')} defaultValue={values.surname}/>
                <br/>
                <TextField hintText = "Enter Date of Birth" floatingLabelText="Date of Birth (DD-MM-YYYY)" onChange={handleChange('birthday')} defaultValue={values.birthday}/>
                <br/>
                <TextField hintText = "Enter SSN" floatingLabelText="SSN" onChange={handleChange('ssn')} defaultValue={values.ssn}/>
                <br/>
                <RaisedButton label="Continue" primary={true} onClick={this.continue}/>
            </MuiThemeProvider>
            
        )
    }
}
export default PersonalInformation;