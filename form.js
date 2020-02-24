// validation form  
const Inputs =document.querySelectorAll('input');

const pattern = {
    telephone: /^\d{11}$/ , //any digit 
    username : /^[a-z\d]{5,12}$/ ,
    password : /^[\w@-]{8,20}$/ ,
    slug :  /^[a-z\d-]{8,20}$/, //name of page 
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        //             yourname @ domain   .  com      
    
}
// validition test 
function validation (fild , regEx) {
    if(regEx.test(fild.value)) {
        fild.className = 'valid'
    }
    else {
      fild.className = 'Invalid'
    }
}

Inputs.forEach( InputValue => {
    InputValue.addEventListener('keyup', e =>{
        // fild , regEx 
        validation(e.target, pattern[e.target.attributes.name.value])

    })

})