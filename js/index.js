
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


