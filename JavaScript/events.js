window.addEventListener('load', onloadHandler, false);
window.addEventListener('load', onloadHandler2, false);
window.addEventListener('load', onloadHandler3, false);

function onloadHandler() {
  alert('hello event 1.');
}
function onloadHandler2() {
  alert('hello event 2.');
}
function onloadHandler3() {
  alert('hello event 3.');
}

window.addEventListener(
  'load',
  function() {
    document
      .getElementById('outer')
      .addEventListener('click', outerDivClick, false);
  },
  false
);

