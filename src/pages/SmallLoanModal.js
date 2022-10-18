import React from "react";
import "../modal.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { green } from "@material-ui/core/colors";

export default class SmallLoanModal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
    };
    reject = e => {
    e.preventDefault();
    this.props.displayRejectLoanAlert();
    }
    accept = e => {
        e.preventDefault();
        this.props.displaySmallLoanAcceptAlert();
        }    
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
    <MuiThemeProvider>
      <AppBar title = "Congratulations you have been approved for a $500 loan!" style={{ backgroundColor: "#50C878" }}/>
      <br/>
      <br/>
      <br/>
        <RaisedButton label="Accept!" color="success" primary={true} onClick={this.accept} backgroundColor="#50C878" style={{marginRight: 20}} />
        <RaisedButton label="Decline" primary={true} onClick={this.reject} backgroundColor="#D22B2B" style={{marginRight: 20}}/>
        <RaisedButton label="Back" primary={true} onClick={this.back}/>    
    </MuiThemeProvider>
    );
  }
}
