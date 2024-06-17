let length;
let width;
function calculareArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = 'the area of the rectangle is: ${area}';
}