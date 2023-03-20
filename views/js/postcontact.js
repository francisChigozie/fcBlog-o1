const form = document.querySelector('.form'),
      user = document.querySelector('#name'),
      subject = document.querySelector('#subject'),
      email = document.querySelector('#email'),
      phone = document.querySelector('#phone'),
      text = document.querySelector('#text');
      

// listen for submit
form.addEventListener('submit', function(e) {
   
    // Set time out
    setTimeout(getDataForm, .5000)
    
    e.preventDefault();

})

// Collect Data Inputs from the form
 function getDataForm() {
     // get the values from the inputs
    const userValue = user.value.trim();
    const subjectValue = subject.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const textValue = text.value.trim();


   if(userValue === '') {
       showError('Please enter your name')
   }else if(subjectValue === '') {
       showError('Please enter the subject')
   }else if(emailValue === '') {
       showError('Please enter email')
   }else if(!isEmail(emailValue)) {
    showError(email, 'Enter a valid email')
}
   else if(phoneValue === '') {
       showError('Please enter your phone number')
   }else if(textValue === '') {
       showError('Please enter your message')
   }else{
                      sendFormData();
                     // postForm()

                    // showsuccess message
                    successMsg('Thanks ! Your message is sent and I write you back soon.');

                 setInterval(() => {
                       window.location = '/dist/contact.html';
                    },12000)

   }
}

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
}

// showError
function showError(error) {
    // hide the h1 element
     document.querySelector('.lead').style.display = 'none';

     // create a div
     const errorDiv = document.createElement('div')

     // get elements
      const card = document.querySelector('.card')
      const heading = document.querySelector('.lead')

      //Add class
      errorDiv.className = 'alert alert-danger';

      // Create text node and append to div
      errorDiv.appendChild(document.createTextNode(error))

      // Insert error above heading
      card.insertBefore(errorDiv, heading)

      //Clear error after 3 seconds
      setTimeout(clearError, 3000)

}

// Clear error
function clearError() {
    document.querySelector('.alert').remove()

    // show h1 element 
     document.querySelector('.lead').style.display = 'block';

    clrScreen();
}

// show success message
function successMsg(error) {
// hide the h1 element
     document.querySelector('.lead').style.display = 'none';

      // create a div
     const errorDiv = document.createElement('div')

     // get elements
      const card = document.querySelector('.card')
      const heading = document.querySelector('.lead')

      //Add class
      errorDiv.className = 'alert alert-success';

      // Create text node and append to div
      errorDiv.appendChild(document.createTextNode(error))

      // Insert error above heading
      card.insertBefore(errorDiv, heading)

      //Clear error after 3 seconds
      setTimeout(clearError, 9000)
}

// post with axios
    async function postForm(){
                    // GEt input data
                  var data = new FormData(form)
                    
                    await axios.post("https://digitalexhibition.herokuapp.com/contact", {

                                user: data.get('user'),
                                subject: data.get('subject'),
                                email: data.get('email'),
                                phone: data.get('phone'),
                                text: data.get('text')
                        })
                    .then((res) => {
                        console.log(res)
                    })
                    .then((data) => {
                        console.log(data)
                    })

    }
         

async function   sendFormData (){
                    // send data message
                    var data = new FormData(form)
                    
                    // get the values from the inputs
                    const userValue = user.value.trim();
                    const subjectValue = subject.value.trim();
                    const emailValue = email.value.trim();
                    const phoneValue = phone.value.trim();
                    const textValue = text.value.trim();

           // send data message
                   

                   await fetch("https://digitalexhibition.herokuapp.com/contact", {
                    method: "POST",
                    headers:{
                         'Content-Type': 'application/json'
                    },
                    mode: 'no-cors',
                    body: JSON.stringify({
                         user: userValue,
                         subject: subjectValue,
                         email: emailValue,
                         phone: phoneValue,
                         text: textValue
                    })
                    .then((response) => {
                        response.json()
                        console.log(response)
                    })
                    .then((data) => {
                        console.log(data)
                         
                    })
        })

            function clrScreen(){
                // get the values from the inputs
                // get the values from the inputs
                        const userValue = user.value;
                        const subjectValue = subject.value;
                        const emailValue = email.value;
                        const phoneValue = phone.value;
                        const textValue = text.value;

                if (userValue !== '' && subjectValue !== '' &&
                    emailValue !== '' && phoneValue !== '' && textValue !== ''){

                        setInterval(() => {
                            // window.location = 'contact.html';
                        }, 3000);
                    }
                
            }

        function validateEmail(emailValue,error) {

            const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/;
            const email = emailValue;
            if(!re.test(email.value)){}
            
        }

}