const Address = {}
      , callbacks = [];
let curValue
    , fireCallbacks;


document.addEventListener('DOMContentLoaded', function(event) {
  curValue = window.location.pathname.substr(1);
  fireCallbacks();
});

window.addEventListener('popstate', function(event) {
  let value = document.location.pathname.substr(1);
  console.log('value: ' + value);
  if (value !== curValue) {
    curValue = value;
    fireCallbacks();
  }
});

fireCallbacks = function() {
  for (let i = 0 ; i < callbacks.length ; i++ ) {
    let ref = callbacks[i];
    ref(curValue);
  }
}

Address.set = function(value) {
  if (value !== curValue) {
    curValue = value;
    history.pushState(null, null, value);
    fireCallbacks();
  }
}

Address.get = function() {
  return curValue;
}

Address.bind = function(callback) {
  if (typeof foo === 'function') {
    callbacks.push(callback);
  }
}



module.exports = Address;