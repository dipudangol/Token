import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as buttonActions from '../../actions/buttonActions';
import FirstButton from  "./FirstButton";

  let is=0;
class ElementPage extends React.Component{
  constructor(props, context) {
  super(props, context);
  }



  render(){
    const {buttons} = this.props;
    debugger;
    return (
      <div>
        <div className="col-md-8">
          {buttons.map(button=>
          <FirstButton key={button.identifier} button = {button} />
          )}
        </div> 
         <div className="col-md-4 advert">
            <p align="center">This is used for advertising.
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzcAfn5iMmg-lsgzHEfvGb6MmuXNuKUu5DDQA6K5BPzUI1AVq"} className="img-responsive"/>-
            </p>
          </div>
      </div>


    );
  }
}

ElementPage.propTypes = { 
  buttons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    buttons: state.buttons
  }; 
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(buttonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementPage);
