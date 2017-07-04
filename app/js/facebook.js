$(function() {
    $("#loaderDiv").hide();
    //get facebook token from user and display their facebook info
    $("#fbInfoButton").on("click", function() {

         var token = $(".fbInfo").val();
            if(token == ''){
               alert("Enter a token first !");
               }
        else{
            $.ajax('https://graph.facebook.com/me?access_token=' + token, {


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
        
        }//end of else
    }); //end of #fbInfoButton click event handler function
    
    
    //show my facebook details only if my token hasn't expired yet
    $("#myDetails").on("click", function() {
        var myToken = 'EAACEdEose0cBADLjDnGe7rZBp1ZBeB3LlJLI4o8d1XMNfhz1VLFRTtJx4fs6Spu0eMfvSfhxL3LchZAZAjZAkZAE0Bt8ZCjzTGZCipCdlc9iZC1PAb7Bu4gx41F0TQ9BIZAQsRCBBRZAadX9jWzp4ADHV2GBkeOUvjNXlzLPCjOj5MMs04xQIAJmbZCqzxFUwQ2j7D4ZD';
        
        $.ajax('https://graph.facebook.com/me?access_token=' + myToken, {

            success: function(response) {

                $("#email").append(response.email);
                $("#name").append(response.name);
                $("#birthDate").append(response.birthday);
                $("#bio").append(response.bio);
                $("#hometown").append(response.hometown.name);
                $("#relationshipStatus").append(response.relationship_status);
                $("#gender").append(response.gender);
                $("#facebookId").append('<a target="blank" href="https://facebook.com/' + response.id + '">https://www.facebook.com/' + response.id + '</a>');
                $("#myDetails").addClass("myDetails");//
                $("#fbInfoButton").addClass("myDetails");//disable both buttons if data came back successfully
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
    }); //end of my details button click handler...

    //for showing my  newsfeed only if my token hasn't expired yet ... 
    $(".load").on("click", function() {
        var myToken = 'EAACEdEose0cBAN1CwwYZCq2tDZAyYGJ2dwDEZAxlgAbKpbJZAjxv2oSnC1oGt6vsT355MKe1FI2VB1YXJbrBWppg7F8uTLBd5UWqiLCJOMesBgsDt4RQ3B56gRthcMvDPSuZASypvD3Qp3X83Nhu3O1hzU6Cpu9OqtBKU2tZCWibDEN2111HOCYJBzCRZAMnL0ZD';
        $.ajax('https://graph.facebook.com/me/feed?access_token=' + myToken, {
            success: function(response) {
                var post = response.data;
                for (var i in post) 
                    if(post != 'undefined'){
                     
                        $(".feedpost").append("<li>"+post[i].created_time+"<br><br>" + post[i].message + "<br>" + "<br>" + post[i].story + "</br>" + "<br>" + post[i].caption + "<br>" + "<br><img src = "+ post[i].picture+ "> <br><a target='blank' href=" + post[i].link + "><br>Go to facebook Link</a><br>" + "</li>");

                    }
                 $(".load",).addClass("myDetails");
                 $("#userFeed",).addClass("myDetails");//disable both buttons if data came back successfully

            },//end of success function...
            
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
    }); //end of load button click handler...

    //for getting news feed of user entered access token
    $("#userFeed").on("click", function() {

        var token = $("#input").val();
        if (token == '') {
            alert("Enter a token first !");//in case user doesn't enter any token
        } else {
            $.ajax('https://graph.facebook.com/me/feed?access_token=' + token, {
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
        }//end of else
    }); //end of userfeed button click handler...
}); //end of program
