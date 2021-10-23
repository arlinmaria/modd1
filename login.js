function validation () { 
    status = 1 ; 
    var a = localStorage.getItem("count");
    console.log(typeof(a));

    count = parseInt( a) ; 
    console.log(count);
    if ( count < 3 ) { 
    
    actual_username = localStorage.getItem ( "username" ) ;
    
     actual_password = localStorage.getItem ( "password" ) ; 
    
     username = document.getElementById ( "username" ) ; 
    password = document.getElementById ( "password" ) ;
     login = document.getElementById ( "login" ) ; 
     username_error = document.getElementById ( "username_error" ) ;
    
     password_error = document.getElementById ( "password_error" ) ;
     if ( username.value=="") 
     { 
     status =0;
      username.style.bordercolor = " #FF0000" ;
       username_error.style.display= " block" 
      username_error.style.color = " #FF0000" ;
       username_error.innerHTML = "Please enter your username" ;
      } 
     else {
          if ( username.value == actual_username ) { 
              username.style.bordercolor= " #ced4da ";
               username_error.style.display = " none ";
              }
               else {
                    status = 0 ;
                     username.style.borderColor = " # FF0000 " ;
                      username_error.style.display =" block ";
                      username_error.style.color =" # FF0000 " ; 
                      username_error.innerHTML = "Username entered is not correct" ;
                      }}
                      if ( password.value == " " )
                      { 
                          status = 0 ;
                           password.style.borderColor = " # FF0000 " ; 
                           password_error.style.display = " block ";
                            password_error.style.color = " # FF0000 " ;
                             password_error.innerHTML = " Please enter your password " ; 
                            }
                             else {
                                  if ( password.value == actual_password ) 
                                  {
                                       password.style.borderColor = " # ced4da ";
                                        password_error.style.display = " none " ;
                                    } 
                                    else {
                                     password.style.borderColor = " # FF0000 " ; 
                                    password_error.style.display = " block ";
                                    password_error.style.color = "#FF0000"
                                    password_error.innerHTML = "Password entered is not correct"
                                    status = 0;
                                    }
                                }
                    if ( status == 0 )
                    
                    { 
                        localStorage.setItem ( " count " , count + 1 ) ;
                         console.log ( count ) 
                         return false ;
                         } 
                          if ( status == 1 ) 
                          {
                               return true ;
                             }}
                              else {
                                   alert ( " Too many unsuccessful attempts " ) ;
                                    return false ;
                                 } }