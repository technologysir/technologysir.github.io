// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyACCvrdPYu3NhvM8dDzG6M7yzn8Hx_LBxc",
    authDomain: "my-mc-3bb4b.firebaseapp.com",
    databaseURL: "https://my-mc-3bb4b-default-rtdb.firebaseio.com",
    projectId: "my-mc-3bb4b",
    storageBucket: "my-mc-3bb4b.appspot.com",
    messagingSenderId: "952522541113",
    appId: "1:952522541113:web:82d8b31c527a986b36e5e8",
    measurementId: "G-GPE3WYZBS2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  //Defind holder hint
  const holder = document.getElementById('holder')
  var fullscreen_alert = document.getElementById("fullscreen_alert");
  var closebtn = document.getElementsByClassName("close")[0];
  function holdAlert(alert) {
    holder.style = 'display : block;'
    holder.innerText = alert
  }
  // Set up our register function
  function register () {
    //PreHolder
    holder.style = 'display : none;'
    // Get all our input fields
    email = document.getElementById('email').value
    password = (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
    full_name = document.getElementById('full_name').value
    age = document.getElementById('age').value
    ProjectName = document.getElementById('ProjectName').value
    Organization = document.getElementById('Organization').value
    SchooleLevel = document.getElementById('SchooleLevel').value
    Wilaya = document.getElementById('Wilaya').value
    PhoneNumber = document.getElementById('PhoneNumber').value
    PrjPro = document.getElementById('PrjPro').value
    ProjectName = document.getElementById('ProjectName').value
    ProjectCatgory = document.getElementById('ProjectCatgory').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      email = 'NOEMAIL'+Date.now().toString()+'@NOEMAIL.com'
    }
    if (validate_field(full_name) == false || validate_field(ProjectName) == false || validate_field(ProjectCatgory) == false || validate_field(age) == false || validate_field(Organization) == false || validate_field(SchooleLevel) == false || validate_field(PrjPro) == false || validate_field(PhoneNumber) == false || validate_field(Wilaya) == false) {
      holdAlert('!أكمل تعبئة البيانات')
      return
    }
    if (validate_field(full_name) == false) {
      email = 'NOEMAIL'+Date.now().toString()+'@NOEMAIL.com'
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
      // Add this user to Firebase Database
      var database_ref = database.ref()
      // Create User data
      var user_data = {
        email : email,
        hexId: password,
        PhoneNumber : PhoneNumber,
        Age: age,
        SchooleLevel:SchooleLevel,
        Organization:Organization,
        Wilaya:Wilaya,
        UsedProgram : PrjPro,
        full_name : full_name,
        ProjectName : ProjectName,
        ProjectCatgory : ProjectCatgory,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
      fullscreen_alert.style.display = "block";
      console.log('User Created!!')
      setTimeout(function () {
        window.open("../","_self")
      }, 3000);
      
      // DOne
      
    })
    .catch(function(error) {
      // Firebase will use this to console.log of its errors
      var error_code = error.code
      var error_message = error.message
      holdAlert(error_message)
    })
  }
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }
closebtn.onclick = function() {
  fullscreen_alert.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == fullscreen_alert) {
    fullscreen_alert.style.display = "none";
  }
}
function incsym(txt) {
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (format.test(txt) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}
