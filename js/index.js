
let serial = 0;
let converterdTotal;

function displayData (name, totle,) {
    const container = document.getElementById('table-container');
    const tr =document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${name}</td>
        <td>${totle}</td>
        
        <td class="">
           <button class="btn btn-primary relative" id="convert-btn">Covert to m<span class="absolute top-1 right-1" >2</span></button> 
        </td>
    `;
    container.appendChild(tr);
   
}


// document.querySelectorAll('.convert-btn').addEventListener('click', function(){
   
// })

// heder section 

document.getElementById('btn-blog').addEventListener('click',function(){
  window.location.href = "question.html"
})

//----------------
//  triangle card

document.getElementById('btn-Triangle').addEventListener('click', function(){
    serial += 1;
    const triangleElement = document.getElementById('Triangle').innerText;
    const triangleInputfild1 = document.getElementById('Triangle-input-b');
    const newTriangleInputfild1 = triangleInputfild1.value;
    const triangleInputfild2 = document.getElementById('Triangle-input-h');
    const newTriangleInputfild2 = triangleInputfild2.value;
    if (
        newTriangleInputfild1 == "" ||
        newTriangleInputfild2 == "" ||
        newTriangleInputfild1 <= 0 ||
        newTriangleInputfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const triangleInputTotal = 0.5 * newTriangleInputfild1 * newTriangleInputfild2;
    triangleInputfild1.value = '';
    triangleInputfild2.value = ''; 
    displayData(triangleElement, triangleInputTotal,)

      document.getElementById('convert-btn').addEventListener('click', function(){
      const CovertBtn = triangleInputTotal * 2;
      displayData(triangleInputTotal,CovertBtn)
    })
    
});

// ---------------
// rectangle card

document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial += 1;
    const rectangleElement = document.getElementById('rectangle').innerText;
    const rectangleInputfild1 =document.getElementById('rectangle-input-w');
    const newRectangleInputfild1 = rectangleInputfild1.value;
    const rectangleInputfild2 =document.getElementById('rectangle-input-i');
    const newRectangleInputfild2 =rectangleInputfild2.value;
    if (
        newRectangleInputfild1 == "" ||
        newRectangleInputfild2 == "" ||
        newRectangleInputfild1 <= 0 ||
        newRectangleInputfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const rectangleTotle = newRectangleInputfild1 * newRectangleInputfild2;
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
    const newParallelogramInputfild1 = parallelogramInputfild1.value;
    const parallelogramInputfild2 =document.getElementById('parallelogram-input-h');
    const newParallelogramInputfild2 =parallelogramInputfild2.value;
    if (
        newParallelogramInputfild1 == "" ||
        newParallelogramInputfild2 == "" ||
        newParallelogramInputfild1 <= 0 ||
        newParallelogramInputfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const parallelogramTotle = newParallelogramInputfild1 * newParallelogramInputfild2;
    parallelogramInputfild1.value = '';
    parallelogramInputfild2.value = '';

    displayData(parallelogramElement, parallelogramTotle);

   
});

//------------
// Rhombus 
document.getElementById('btn-rhombus').addEventListener('click', function(){
    serial += 1;
    const rhombusElement = document.getElementById('rhombus').innerText;
    const rhombusInputfild1 = document.getElementById('rhombus-input-d1');
    const newRhombusInputfild1 = rhombusInputfild1.value;
    const rhombusInputfild2 = document.getElementById('rhombus-inputid2');
    const newRhombusInputfild2 = rhombusInputfild2.value;
    if (
        newRhombusInputfild1 == "" ||
        newRhombusInputfild2 == "" ||
        newRhombusInputfild1 <= 0 ||
        newRhombusInputfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const rhombusInputTotal = 0.5 * newRhombusInputfild1 * newRhombusInputfild2;
    rhombusInputfild1.value = '';
    rhombusInputfild2.value = ''; 
    displayData(rhombusElement, rhombusInputTotal);

});

// ------------------
// Pentagon

document.getElementById('btn-pentagon').addEventListener('click', function(){
    serial += 1;
    const pentagonElement = document.getElementById('pentagon').innerText;
    const pentagonInputfild1 = document.getElementById('pentagon-input-p');
    const newPentagonInputfild1 = pentagonInputfild1.value;
    const pentagonInputfild2 = document.getElementById('pentagon-input-b');
    const newPentagonInputfild2 = pentagonInputfild2.value;
    if (
        newPentagonInputfild1 == "" ||
        newPentagonInputfild2 == "" ||
        newPentagonInputfild1 <= 0 ||
        newPentagonInputfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const pentagonInputTotal = 0.5 * newPentagonInputfild1 * newPentagonInputfild2;
    pentagonInputfild1.value = '';
    pentagonInputfild2.value = ''; 
    displayData(pentagonElement, pentagonInputTotal);

    
});

// ----------------
// Ellipse

document.getElementById('btn-ellipse').addEventListener('click', function(){
    serial += 1;
    const ellipseElement = document.getElementById('ellipse').innerText;
    const ellipseInputfild1 = document.getElementById('ellipse-input-a');
    const newEllipseInputfild1 = ellipseInputfild1.value;
    const ellipseInputfild2 = document.getElementById('ellipse-input-b');
    const newEllipseInputfild2 = ellipseInputfild2.value;
    if (
        newEllipseInputfild1 == "" ||
        newEllipseInputfild2 == "" ||
        newEllipseInputfild1 <= 0 ||
        newEllipseInputfild2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const ellipseInputTotal = 0.3 * newEllipseInputfild1 * newEllipseInputfild2;
    ellipseInputfild1.value = '';
    ellipseInputfild2.value = ''; 
    displayData(ellipseElement, ellipseInputTotal);

});

// btn


