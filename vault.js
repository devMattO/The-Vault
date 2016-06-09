'use strict';
module.exports = function() {

var storeKey;

  function setValue( key, value){
    value = key;
    storeKey = value;
  }

  function getValue( key ){
    if (key === undefined) {
      return null;
    }else{
      return storeKey;
    }

  }

};