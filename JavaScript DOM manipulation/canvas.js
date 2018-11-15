window.onload = function() {
    const container = document.getElementById('presentation-canvas');
    const ctxt = container.getContext("2d");

    ctxt.beginPath();
    ctxt.moveTo(275, 150);
    ctxt.lineTo(275, 150);
    ctxt.lineTo(275, 350);
    ctxt.lineTo(275, 150);
    ctxt.lineTo(550, 350);
    ctxt.lineTo(550, 150);

    // ctxt.lineWidth = 5;
    // ctxt.strokeStyle = 'red';
    // ctxt.lineCap = 'round';

    ctxt.stroke();
}