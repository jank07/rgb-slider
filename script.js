let Output = document.querySelector('.Output');
let redInput = document.querySelector('#redValue');
let greenInput = document.querySelector('#greenValue');
let blueInput = document.querySelector('#blueValue');
function changeBackgroundColor() {
    let redValue = document.querySelector('#redValue').value;
    let greenValue = document.querySelector('#greenValue').value;
    let blueValue = document.querySelector('#blueValue').value;

    document.body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue +')'
    Output.innerHTML = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue +')'
}

redInput.addEventListener('input', changeBackgroundColor);
greenInput.addEventListener('input', changeBackgroundColor);
blueInput.addEventListener('input', changeBackgroundColor);