window.onload = () => {
    document.getElementById('inputRange').addEventListener('change', setTextDiv);
    document.getElementById('inputTxt').addEventListener('change', setTextDiv);

    document.getElementById('inputTxt').addEventListener('keydown', () => {
        if (window.event.ctrlKey) {
            console.log('Control key was pressed!');               
        }

        if (window.event.shiftKey) {
            console.log('Shift key was pressed!');
        }

        if (window.event.ctrlKey && String.fromCharCode(window.event.keyCode) === 'C') {
            console.log('Copied!');
        }
    });

    document.getElementById('inputTxt').focus();

    document.getElementById('inputTxt').addEventListener('dblclick', () => {
        alert('double clicked!!');
    });

}

function setTextDiv() {
    document.getElementById('inputRangeAmot').innerText = this.value;
}
