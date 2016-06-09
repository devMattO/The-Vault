'use strict';
module.exports = function() {

  var storeKey = {};

  function _setValue( theKey, theValue ){
    storeKey[theKey] = theValue;
  }

  function _getValue( theKey ){
    if( theKey === undefined || storeKey[theKey] === undefined) {
      return null;
    }else{
      return storeKey[theKey];
    }
  }
  return {
    setValue: _setValue,
    getValue: _getValue
};
};