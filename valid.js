
$(document).ready(function() {
   
   $("#register-form").validate({


      rules : {
         cin: {
            required: true , 
            digits : true , 
            max : 8
         },

         password : "required"  , 
         password2 : {
            required : true ,
            equalTo : "#password"
         }
      }, 

      messages: {
        
        cin : {
         required : "enter valid Cin  "
        }
        }


});
   


   $("#login-form").hide() ; 
   $("#register-form").hide() ;
   $("#login").click(function() {
     $("#login-form").hide() ;
      $("#login-form").show(1000) ;
      $(window).scrollTop(-5000);
   })

   $("#signup").click(function() {

      $("#register-form").hide() ;
      $("#register-form").show(1000) ;
       
       

   })
   
   });