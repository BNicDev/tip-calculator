let form = document.querySelector("form");

let bill = form.addEventListener('submit', e =>{
    e.preventDefault();
    let amount = form.querySelector('input').value;
    let bill = amount * 0.10;
    alert(`The appropriate tip is: ${bill}`)
})