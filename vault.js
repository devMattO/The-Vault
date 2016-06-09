'use strict';
module.exports = function() {

var storeKey = {};

  function _setValue( theKey, theValue ){
    //console.log(theKey, theValue);
    storeKey[theKey] = theValue;
    //console.log(storeKey);
  }

  function _getValue( theKey ){
    if (theKey === undefined || storeKey[theKey] === undefined) {
      return null;
    }else{
      console.log('hello', storeKey[theKey]);
      return storeKey[theKey];
    }

  }
return {
  setValue: _setValue,
  getValue: _getValue
};
};