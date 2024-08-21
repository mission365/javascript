const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const comments = document.querySelector('#comment')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}<span>`;

        if(bmi<18.6) comments.innerHTML = "Under Weight";
        else if(bmi>18.5 && bmi<24.9){
            comments.innerHTML = "Normal Range";
        }
        else  comments.innerHTML = "Overweight";
    }

    
})