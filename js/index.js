
let serial = 0;

function displayData (name, totle) {
    const container = document.getElementById('table-container');
    const tr =document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${name}</td>
        <td>${'Total'}</td>
        <td>${totle}</td>
    `;
    container.appendChild(tr);
   
}


//----------------
//  triangle card

document.getElementById('btn-Triangle').addEventListener('click', function(){
    serial += 1;
    const triangleElement = document.getElementById('Triangle').innerText;
    const triangleInfutfild1 = document.getElementById('Triangle-input-b');
    const newTriangleInfutfild1 = triangleInfutfild1.value;
    const triangleInfutfild2 = document.getElementById('Triangle-input-h');
    const newTriangleInfutfild2 = triangleInfutfild2.value;
    if (
        newTriangleInfutfild1 == "" ||
        newTriangleInfutfild2 == "" ||
        newTriangleInfutfild1 <= 0 ||
        newTriangleInfutfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const triangleInfutTotal = 0.5 * newTriangleInfutfild1 * newTriangleInfutfild2;
    triangleInfutfild1.value = '';
    triangleInfutfild2.value = ''; 
    displayData(triangleElement, triangleInfutTotal)
    
});

// ---------------
// rectangle card

document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial += 1;
    const rectangleElement = document.getElementById('rectangle').innerText;
    const rectangleInputfild1 =document.getElementById('rectangle-input-w');
    const newRectangleInfutfild1 = rectangleInputfild1.value;
    const rectangleInputfild2 =document.getElementById('rectangle-input-i');
    const newRectangleInfutfild2 =rectangleInputfild2.value;
    if (
        newRectangleInfutfild1 == "" ||
        newRectangleInfutfild2 == "" ||
        newRectangleInfutfild1 <= 0 ||
        newRectangleInfutfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const rectangleTotle = newRectangleInfutfild1 * newRectangleInfutfild2;
    rectangleInputfild1.value = '';
    rectangleInputfild2.value = '';

    displayData(rectangleElement, rectangleTotle);
});

// ----------------------
// Parallelogram card

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    serial += 1;
    const parallelogramElement = document.getElementById('parallelogram').innerText;
    const parallelogramInputfild1 =document.getElementById('parallelogram-input-b');
    const newParallelogramInfutfild1 = parallelogramInputfild1.value;
    const parallelogramInputfild2 =document.getElementById('parallelogram-input-h');
    const newParallelogramInfutfild2 =parallelogramInputfild2.value;
    if (
        newParallelogramInfutfild1 == "" ||
        newParallelogramInfutfild2 == "" ||
        newParallelogramInfutfild1 <= 0 ||
        newParallelogramInfutfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const parallelogramTotle = newParallelogramInfutfild1 * newParallelogramInfutfild2;
    parallelogramInputfild1.value = '';
    parallelogramInputfild2.value = '';

    displayData(parallelogramElement, parallelogramTotle);
});

//------------
// Rhombus 
document.getElementById('btn-rhombus').addEventListener('click', function(){
    serial += 1;
    const rhombusElement = document.getElementById('rhombus').innerText;
    const rhombusInfutfild1 = document.getElementById('rhombus-input-d1');
    const newRhombusInfutfild1 = rhombusInfutfild1.value;
    const rhombusInfutfild2 = document.getElementById('rhombus-inputid2');
    const newRhombusInfutfild2 = rhombusInfutfild2.value;
    if (
        newRhombusInfutfild1 == "" ||
        newRhombusInfutfild2 == "" ||
        newRhombusInfutfild1 <= 0 ||
        newRhombusInfutfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const rhombusInfutTotal = 0.5 * newRhombusInfutfild1 * newRhombusInfutfild2;
    rhombusInfutfild1.value = '';
    rhombusInfutfild2.value = ''; 
    displayData(rhombusElement, rhombusInfutTotal);
});

// ------------------
// Pentagon

document.getElementById('btn-pentagon').addEventListener('click', function(){
    serial += 1;
    const pentagonElement = document.getElementById('pentagon').innerText;
    const pentagonInfutfild1 = document.getElementById('pentagon-input-p');
    const newPentagonInfutfild1 = pentagonInfutfild1.value;
    const pentagonInfutfild2 = document.getElementById('pentagon-input-b');
    const newPentagonInfutfild2 = pentagonInfutfild2.value;
    if (
        newPentagonInfutfild1 == "" ||
        newPentagonInfutfild2 == "" ||
        newPentagonInfutfild1 <= 0 ||
        newPentagonInfutfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const pentagonInfutTotal = 0.5 * newPentagonInfutfild1 * newPentagonInfutfild2;
    pentagonInfutfild1.value = '';
    pentagonInfutfild2.value = ''; 
    displayData(pentagonElement, pentagonInfutTotal);
});

// ----------------
// Ellipse

document.getElementById('btn-ellipse').addEventListener('click', function(){
    serial += 1;
    const ellipseElement = document.getElementById('ellipse').innerText;
    const ellipseInfutfild1 = document.getElementById('ellipse-input-a');
    const newEllipseInfutfild1 = ellipseInfutfild1.value;
    const ellipseInfutfild2 = document.getElementById('ellipse-input-b');
    const newEllipseInfutfild2 = ellipseInfutfild2.value;
    if (
        newEllipseInfutfild1 == "" ||
        newEllipseInfutfild2 == "" ||
        newEllipseInfutfild1 <= 0 ||
        newEllipseInfutfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const ellipseInfutTotal = 0.3 * newEllipseInfutfild1 * newEllipseInfutfild2;
    ellipseInfutfild1.value = '';
    ellipseInfutfild2.value = ''; 
    displayData(ellipseElement, ellipseInfutTotal);
});
