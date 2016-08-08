import React, {PropTypes} from 'react';
import $ from 'jquery';

class FirstButton extends React.Component{
  constructor(props, context) {
    super(props, context);
  }


  clickedEvent(data){
    event.preventDefault();
    console.log(data);
    
    /*var datas = data.identifier;*/
    var datas={"service":data.identifier};

     return new Promise((resolve, reject) => {
      $.post("http://192.168.5.120:8080/dispenser/RTS-NP/RealTimes/dispenser/button", (datas) => {
        resolve(Object.assign({}, datas));
      });
    });
  }

  render(){
    const {button}=this.props;
    return (
          <div className="ButtonStyle">
            <button type="button" className="btn btn-primary btn-lg btn-block"onClick={()=>this.clickedEvent(button)}> {button.name} </button><br/> 	   
        </div>  
    );
  }
}

FirstButton.propTypes={
	button:PropTypes.object.isRequired
};

export default FirstButton;