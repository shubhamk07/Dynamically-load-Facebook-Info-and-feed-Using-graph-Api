$(function() {

    $("#loaderDiv").hide();
    //get facebook token from user and display their facebook info

    $("#fbInfoButton").on("click", function getToken () {

         var token = $(".fbInfo").val();
            if(token == ''){
               alert("Enter a token first !");
               }
                else {
                    fbInfo(token);
    }

           });//end of fbInfoButton click event handler
    $("#myDetails").on("click", function getToken () {

         var token = 'EAACEdEose0cBADLjDnGe7rZBp1ZBeB3LlJLI4o8d1XMNfhz1VLFRTtJx4fs6Spu0eMfvSfhxL3LchZAZAjZAkZAE0Bt8ZCjzTGZCipCdlc9iZC1PAb7Bu4gx41F0TQ9BIZAQsRCBBRZAadX9jWzp4ADHV2GBkeOUvjNXlzLPCjOj5MMs04xQIAJmbZCqzxFUwQ2j7D4ZD';
            
                    fbInfo(token);
           }); //end of myDetails click event handler

   
    function fbInfo (fbtoken){

            
            $.ajax('https://graph.facebook.com/me?access_token=' + fbtoken, {
                


                success: function(response) {

                    $("#email").append(response.email);
                    $("#name").append(response.name);
                    $("#birthDate").append(response.birthday);
                    $("#bio").append(response.bio);
                    $("#hometown").append(response.hometown.name);
                    $("#relationshipStatus").append(response.relationship_status);
                    $("#gender").append(response.gender);
                    $("#facebookId").append('<a target="blank" href="https://facebook.com/' + response.id + '">https://www.facebook.com/' + response.id + '</a>');
                    $("#fbInfoButton").addClass("myDetails");
                    $("#myDetails").addClass("myDetails");
                }, //end of success function.. 
                error: function() {
                    alert("There was some error in completing your request! Your token might be expired or your Internet connection is unstable. Try using an updated token.");

                },

                timeout: 7000,
                beforeSend: function() {
                    $("#loaderDiv").show();
                },
                complete: function() {
                    $("#loaderDiv").hide();
                }

            }); //end of ajax 
    
} //end of function fbInfo

        
        

    //for getting news feed of user entered access token
    $("#userFeed").on("click", function() {

        var token = $("#input").val();
        if (token == '') {
            alert("Enter a token first !");//in case user doesn't enter any token
        } else {

                feed(token);

        }
    }); // end of userfeed click event handler

    $("#feed").on("click", function() {

        var token = 'EAACEdEose0cBADLjDnGe7rZBp1ZBeB3LlJLI4o8d1XMNfhz1VLFRTtJx4fs6Spu0eMfvSfhxL3LchZAZAjZAkZAE0Bt8ZCjzTGZCipCdlc9iZC1PAb7Bu4gx41F0TQ9BIZAQsRCBBRZAadX9jWzp4ADHV2GBkeOUvjNXlzLPCjOj5MMs04xQIAJmbZCqzxFUwQ2j7D4ZD'
                feed(token);

        
    }); // end of feed click event handler
            

    function feed (anotherToken){

        $.ajax('https://graph.facebook.com/me/feed?access_token=' + anotherToken, {
                success: function(response) {
                    var post = response.data;
                    for (var i in post) {
                        if (post[i].message != 'undefined') {
                            $(".feedpost").append("<li>"+post[i].created_time+"<br><br>" + post[i].message + "<br>" + "<br>" + post[i].story + "</br>" + "<br>" + post[i].caption + "</br>" + "<br>" + "<a target='blank' href=" + post[i].link + ">Go to facebook Link</a></br>" + "<img src= " + post[i].picture + ">"+"</li>");

                        }//end of if
                    }//end of for
                     $("#userFeed").addClass("myDetails");
                    $(".load",).addClass("myDetails");//disable both buttons if data came back successfully
                }, //end of success function...
                error: function() {
                    alert("There was some error in completing your request! Your token might be expired or your Internet connection is unstable. Try using an updated token.");

                },

                timeout: 7000,
                beforeSend: function() {
                    $("#loaderDiv").show();
                },
                complete: function() {
                    $("#loaderDiv").hide();
                }


            }); //end of ajax
    } //end of function feed.
  
    }); //end of program
