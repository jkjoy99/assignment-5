document.getElementById('btn-Triangle').addEventListener('click', function(){
    const triangleElement = document.getElementById('Triangle').innerText;
    const triangleInfutfild1 = document.getElementById('Triangle-input-b');
    const newTriangleInfutfild1 = triangleInfutfild1.value;
    const triangleInfutfild2 = document.getElementById('Triangle-input-h');
    const newTriangleInfutfild2 = triangleInfutfild2.value;
    const triangleInfutTotal = 0.5 * newTriangleInfutfild1 * newTriangleInfutfild2;
    const container = document.getElementById('table-container');
    const tr =document.createElement('tr');
    tr.innerHTML = `
        <td>${1.}</td>
        <td>${triangleElement}</td>
        <td>${'Total'}</td>
        <td>${triangleInfutTotal}</td>
    `;
    container.appendChild(tr);
    triangleInfutfild1.value = '';
    triangleInfutfild2.value = '';
    
})