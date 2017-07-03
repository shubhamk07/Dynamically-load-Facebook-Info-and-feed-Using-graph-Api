$(function() {
    $("#loaderDiv").hide();

    $("#button").on("click", function GetInfo() {

        var token = $("#input").val();
        if (token == '') {
            alert("Enter a token first !");
        } else {
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
                }, //end of success function.. 
                error: function() {
                    alert("There was some error in completing your request!.Your token might be expired or your Internet connection is unstable. Try using an updated token.");

                },

                timeout: 6000,
                beforeSend: function() {
                    $("#loaderDiv").show();
                },
                complete: function() {
                    $("#loaderDiv").hide();
                }

            }); //end of ajax 
        }
    }); //end of #button click event handler function

    $("#myDetails").on("click", function() {
        var myToken = 'EAACEdEose0cBAJBjrAZAtzZA65x4Jpc71S3oemRBJihrcG1aex4cN5y89lxiZAqqGQdw364RsSnaYPCHiRabJ9aCZAE8XY6c3uqziHFwMX26PZCWW82zsEWJccpDToI0ZBWZCtUbh5hazHTlrRpX8tD1kM488MafJIdopUNYpm53dbnt0QCwtZAQcbp7wqIXCvMZD';
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
            }, //end of success function... 
            error: function() {
                alert("There was some error in completing your request!.Your token might be expired or your Internet connection is unstable. Try using an updated token.");
            },

            timeout: 6000,
            beforeSend: function() {
                $("#loaderDiv").show();
            },
            complete: function() {
                $("#loaderDiv").hide();
            }
        }); //end of ajax
    }); //end of my details button click handler...
    $(".load").on("click", function() {
        var myToken = 'EAACEdEose0cBAJBjrAZAtzZA65x4Jpc71S3oemRBJihrcG1aex4cN5y89lxiZAqqGQdw364RsSnaYPCHiRabJ9aCZAE8XY6c3uqziHFwMX26PZCWW82zsEWJccpDToI0ZBWZCtUbh5hazHTlrRpX8tD1kM488MafJIdopUNYpm53dbnt0QCwtZAQcbp7wqIXCvMZD';
        $.ajax('https://graph.facebook.com/me/feed?access_token=' + myToken, {
            success: function(response) {
                var post = response.data;
                for (var i in post) {
                    if (post[i].message != 'undefined') {
                        $(".feedpost").append("<li>" + post[i].message + "<br>" + "<br>" + post[i].story + "</br>" + "<br>" + post[i].caption + "</br>" + "<br>" + "<a target='blank' href=" + post[i].link + ">Go to facebook Link</a></br></li>" + "<img src= " + post[i].picture + ">");

                    }
                }
            }, //end of success function...
            error: function() {
                alert("There was some error in completing your request!.Your token might be expired or your Internet connection is unstable. Try using an updated token.");

            },

            timeout: 6000,
            beforeSend: function() {
                $("#loaderDiv").show();
            },
            complete: function() {
                $("#loaderDiv").hide();
            }

        }); //end of ajax
    }); //end of load button click handler...

    $("#userFeed").on("click", function() {

        var token = $("#input").val();
        if (token == '') {
            alert("Enter a token first !");
        } else {
            $.ajax('https://graph.facebook.com/me/feed?access_token=' + token, {
                success: function(response) {
                    var post = response.data;
                    for (var i in post) {
                        if (post[i].message != 'undefined') {
                            $(".feedpost").append("<li>" + post[i].message + "<br>" + "<br>" + post[i].story + "</br>" + "<br>" + post[i].caption + "</br>" + "<br>" + "<a target='blank' href=" + post[i].link + ">Go to facebook Link</a></br></li>" + "<img src= " + post[i].picture + ">");

                        }
                    }
                }, //end of success function...
                error: function() {
                    alert("There was some error in completing your request!.Your token might be expired or your Internet connection is unstable. Try using an updated token.");

                },

                timeout: 6000,
                beforeSend: function() {
                    $("#loaderDiv").show();
                },
                complete: function() {
                    $("#loaderDiv").hide();
                }


            }); //end of ajax
        }
    }); //end of userfeed button click handler...
}); //end of program