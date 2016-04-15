import React from 'react';

import {Page, Toolbar, Button, BackButton, AlertDialog} from 'react-onsenui';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleClick() {
    this.setState({
      isOpen: true
    });
  }

  handleCancel() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">
            Alert dialog
          </div>
        </Toolbar>

        <p style={{textAlign: 'center', paddingTop: '10px'}}>
          <Button onClick={this.handleClick.bind(this)}>Show dialog</Button>
        </p>

        <AlertDialog isOpen={this.state.isOpen} onCancel={this.handleCancel.bind(this)} isCancelable={false} >
          <div className="alert-dialog-title">Warning!</div>
          <div className="alert-dialog-content">
            An error has occurred!
          </div>
          <div className="alert-dialog-footer">
            <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
              Cancel
            </Button>
            <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
              Ok
            </Button>
          </div>
        </AlertDialog>
      </Page>
    );
  }
}
