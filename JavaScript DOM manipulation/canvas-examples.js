window.onload = function () {
    var container = document.getElementById('drawingContainer');
    var ctxt = container.getContext("2d");

    console.log(ctxt);

    ctxt.beginPath();
    ctxt.moveTo(10, 10);
    // ctxt.lineTo(x, y);
    ctxt.lineTo(225, 350);
    ctxt.lineTo(100, 10);
    ctxt.lineTo(590, 390);

    ctxt.lineWidth = 5;
    ctxt.strokeStyle = 'green';
    ctxt.lineCap = 'round';

    ctxt.stroke();

    // Second canvas
    var arcContainer = document.getElementById('arc');
    var secondCtxt = arcContainer.getContext("2d");

    secondCtxt.beginPath();
    secondCtxt.arc(150, 100, 75, 0, 2 * Math.PI, false);
    secondCtxt.lineWidth = 10;
    secondCtxt.strokeStyle = 'blue';
    secondCtxt.stroke();

    secondCtxt.beginPath();
    secondCtxt.arc(450, 100, 75, 1.5 * Math.PI, 2 * Math.PI, false);
    secondCtxt.lineWidth = 10;
    secondCtxt.strokeStyle = 'red';
    secondCtxt.stroke();

    secondCtxt.beginPath();
    secondCtxt.arc(150, 300, 75, 1 * Math.PI, 1.5 * Math.PI, false);
    secondCtxt.lineWidth = 10;
    secondCtxt.strokeStyle = 'yellow';
    secondCtxt.stroke();

    secondCtxt.beginPath();
    secondCtxt.arc(450, 300, 75, .5 * Math.PI, 1 * Math.PI, false);
    secondCtxt.lineWidth = 10;
    secondCtxt.strokeStyle = 'green';
    secondCtxt.stroke();

    // Third canvas
    var quadraticArcContainer = document.getElementById('quadraticArc');
    var quadraticArcCtxt = quadraticArcContainer.getContext("2d");

    quadraticArcCtxt.beginPath();
    quadraticArcCtxt.moveTo(10, 380);
    quadraticArcCtxt.quadraticCurveTo(300, -250, 580, 380);
    quadraticArcCtxt.lineWidth = 10;
    quadraticArcCtxt.strokeStyle = '#f00';
    quadraticArcCtxt.stroke();

    // Fourth canvas
    var bezierArcContainer = document.getElementById('bezierArc');
    var bezierArcCtxt = bezierArcContainer.getContext("2d");

    bezierArcCtxt.beginPath();
    bezierArcCtxt.moveTo(125, 20);
    bezierArcCtxt.bezierCurveTo(0, 200, 300, 300, 50, 400);
    bezierArcCtxt.lineWidth = 10;
    bezierArcCtxt.strokeStyle = 'orange'
    bezierArcCtxt.stroke();

    // Fifth canvas
    var pathContainer = document.getElementById('path');
    var pathCtxt = pathContainer.getContext('2d');

    pathCtxt.beginPath();
    pathCtxt.arc(300, 200, 75, 1.75 * Math.PI, 1.25 * Math.PI, false);
    pathCtxt.lineTo(150, 125);
    pathCtxt.quadraticCurveTo(300, 0, 450, 125);
    pathCtxt.lineTo(353, 144);
    pathCtxt.strokeStyle = "purple";
    pathCtxt.lineCap = "round";
    pathCtxt.lineWidth = 10;
    pathCtxt.stroke();

    // Sixth canvas
    var rectContainer = document.getElementById('rect');
    var rectCtxt = rectContainer.getContext("2d");

    rectCtxt.beginPath();
    var x, y;
    x = 150;
    y = 75;
    // Center the rect
    rectCtxt.rect(300 - (x / 2), 200 - (y / 2), x, y);
    rectCtxt.stroke();

    // Seventh canvas
    var fillContainer = document.getElementById('fill');
    var fillCtxt = fillContainer.getContext("2d");

    fillCtxt.beginPath();
    fillCtxt.rect(300, 50, 150, 75);
    fillCtxt.fillStyle = 'red';
    fillCtxt.fill();
    fillCtxt.stroke();

    fillCtxt.beginPath();
    fillCtxt.rect(300, 125, 150, 75);
    fillCtxt.fillStyle = 'white';
    fillCtxt.fill();
    fillCtxt.stroke();

    fillCtxt.beginPath();
    fillCtxt.rect(300, 200, 150, 75);
    fillCtxt.fillStyle = 'blue';
    fillCtxt.fill();
    fillCtxt.stroke();

    // Eightieth canvas
    var gradientContainer = document.getElementById('gradient');
    var gradientCtxt = gradientContainer.getContext("2d");

    gradientCtxt.lineWidth = 3;
    gradientCtxt.rect(150, 150, 200, 125);
    var gradient = gradientCtxt.createLinearGradient(150, 150, 200, 125);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(0.5, "gray");
    gradient.addColorStop(1, "white");
    gradientCtxt.fillStyle = gradient;
    gradientCtxt.fill();
    gradientCtxt.stroke();

    // Ninetieth canvas
    var radialGradientContainer = document.getElementById('radialGradient');
    var radialGradientCtxt = radialGradientContainer.getContext("2d");

    radialGradientCtxt.lineWidth = 3;
    radialGradientCtxt.rect(150, 150, 250, 175);
    var gradient = radialGradientCtxt.createRadialGradient(200, 200, 5, 250, 250, 100);
    gradient.addColorStop(0, "Red");
    gradient.addColorStop(.5, "Orange");
    gradient.addColorStop(1, "Blue");
    radialGradientCtxt.fillStyle = gradient;
    radialGradientCtxt.fill();
    radialGradientCtxt.stroke();

    // Tenth canvas
    var fillPatternContainer = document.getElementById('fillPattern');
    var fillPatternCtxt = fillPatternContainer.getContext("2d");

    fillPatternCtxt.lineWidth = 3;
    fillPatternCtxt.rect(150, 150, 200, 125);
    var img = new Image();
    img.src = "canvas-example.jpg";
    img.onload = function () {
        var pat = fillPatternCtxt.createPattern(img, "repeat");
        fillPatternCtxt.fillStyle = pat;
        fillPatternCtxt.fill();
        fillPatternCtxt.stroke();
    }

    // Eleventh canvas
    var pictureContainer = document.getElementById('picture');
    var pictureCtxt = pictureContainer.getContext("2d");
    
    var img = new Image();
    img.src = 'canvas-example.jpg';
    img.onload = () => {
        pictureCtxt.drawImage(img, 0, 0, img.width * 0.5, img.height * 0.5);
        pictureCtxt.stroke();
    }

    // Twelveth canvas
    var textContainer = document.getElementById('text');
    var textCtxt = textContainer.getContext("2d");

    textCtxt.strokeText("Text with a default font", 100, 100);
    textCtxt.font = "24px arial";
    textCtxt.strokeText("Text with an altered fontsize", 100, 125);
    textCtxt.fillStyle = 'red';
    textCtxt.fillText("Text with an altered fontcolor", 100, 150);

    textCtxt.font = "24px arial";
    textCtxt.textAlign = 'center';
    textCtxt.fillStyle = 'red';
    textCtxt.fill();
    textCtxt.fillText("Text is centered",
                      textContainer.width / 2,
                      textContainer.height / 2);
}