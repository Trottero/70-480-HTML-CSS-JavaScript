var globalVar = 'global';
window.onload = function() {
  var localVar = 'local';
  document.getElementById('div1').onclick = function() {
    var insideDivVar = 'div';
  };
};
