import React from 'react';

const Header = () => {
  return (
      <div className="row nav" id="rows">
        <div className="col-md-3">
          <img src={'http://www.everestbankltd.com/application/themes/ntech/images/logo.png'} className="img-responsive img-logo"/>
          </div>
        <div className="col-md-8">

          <h2 align="center"><b>Namaste</b></h2>
          <h3 align="center">Please Select an option</h3> 
        </div>
        <div className="col-md-1">
        </div>
      </div>


  );
};

export default Header;
