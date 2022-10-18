import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import App from '../App';
import { blue } from '@material-ui/core/colors';
import SmallLoanModal from './SmallLoanModal';
import LargeLoanModal from './LargeLoanModal';

export class PersonalInformation extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    final = e => {
        e.preventDefault();
        this.props.determineModal();
    }
    render() {
        const {values, handleChange} = this.props;
        return(
            <MuiThemeProvider>
                <>
                    <AppBar title = "Enter Employment Information"/>
                    <TextField hintText = "Enter employer name" floatingLabelText="Employer Name" onChange={handleChange('employerName')} defaultValue={values.employerName}/>
                    <br/>
                    <TextField hintText = "Enter gross salary" floatingLabelText="Gross Salary" onChange={handleChange('salary')} defaultValue={values.salary}/>
                    <br/>
                    <br/>
                    <select onChange={handleChange('workStatus')} defaultValue={values.workStatus} style={{width:200, padding:4}}>
                        <option value=''>Select your Work Status</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                    </select>
                    <br/>
                    <br/>
                    <br/>
                </>
                <RaisedButton label="Back" primary={true} onClick={this.back} style={{marginRight: 20}}/>
                <RaisedButton label="Next" primary={true} onClick={this.final}/>
                <br/>
            </MuiThemeProvider>
            
        )
    }
}
export default PersonalInformation;