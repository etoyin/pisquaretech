
$(document).ready(function(){


  ////////////////////////////////////////////Submit form/////////////////////////////////////////

  var email = $('#email'),
      fname = $('#fname'),
      lname = $('#lname'),
      message = $('#message'),
      phone = $('#phone'),
      country = $('#country'),
      company = $('#company'),
      loader = $(".loader"),
      submit = $("#submit");
      
  submit.on('click', function(e) {
    // loader.css("display", "block");
    // $("#navBar").removeClass("fixed-top");
    e.preventDefault();
    if(validate()) {

      var formData = new FormData();
      formData.append("fname", fname.val());
      formData.append("lname", lname.val());
      formData.append("phone", phone.val());
      formData.append("message", message.val());
      formData.append("country", country.val());
      formData.append("company", company.val());
      formData.append("email", email.val());
      console.log(formData);

      fetch('post2email.php', {
          method: 'POST',
          body: formData
      })
      .then((res) => res.json())
      .then((res) => console.log(res))
    }
  });
  
  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(!regex.test(email.val())) {
      email.css('border-color', 'red');
      valid = false;
    }
    if($.trim(fname.val()) === "") {
      fname.css('border-color', 'red');
      valid = false;
    }
    if($.trim(phone.val()) === "") {
      phone.css('border-color', 'red');
      valid = false;
    }
    if($.trim(email.val()) === "") {
      email.css('border-color', 'red');
      valid = false;
    }
    if($.trim(message.val()) === "") {
      message.css('border-color', 'red');
      valid = false;
    }
    
    return valid;
  }







  /*-------------------------------------------------------------------------------------------*/





  let height, width;

  $(window).on('resize', function(){
    height = $(window).height();
    width = $(window).width();
    //var win = $(this); //this = window
    if (width <= 820 && height > width) {
      $(".carouselImg1").attr("src", "images/b4m.jpg");
      $(".carouselImg2").attr("src", "images/b2m.jpg");
      $(".carouselImg3").attr("src", "images/b3m.jpg");
      // var k = $(".carouselImg").attr("src");
      // alert(k + width + " "+ height);
    }
    else{
      $(".carouselImg1").attr("src", "images/b1.jpg");
      $(".carouselImg2").attr("src", "images/b2.jpg");
      $(".carouselImg3").attr("src", "images/b3.jpg");
    }
  });

  $("#navBar").mouseenter(function(){
    $(this).addClass("navbar-light")
    $(this).removeClass("navbar-dark")
  });

  $("#navBar").mouseleave(function(){
    $(this).removeClass("navbar-light")
    $(this).addClass("navbar-dark")
  });
  
  if($(window).scrollTop()){
    $("#navBar").addClass("lightBg")
    $("#navBar").addClass("navbar-light")
    $("#navBar").removeClass("navbar-dark")
  }
  else{
    $("#navBar").removeClass("lightBg")
    $("#navBar").removeClass("navbar-light")
    $("#navBar").addClass("navbar-dark")
  }
  $(window).scroll(function() {
    // alert("jjjj");
    if($(window).scrollTop()){
      $("#navBar").addClass("lightBg")
      $("#navBar").addClass("navbar-light")
      $("#navBar").removeClass("navbar-dark")
    }
    else{
      $("#navBar").removeClass("lightBg")
      $("#navBar").removeClass("navbar-light")
      $("#navBar").addClass("navbar-dark")
    }
  });
  $(".flexible").find(".p1").each(function(){
    $(this).mouseenter(function(){
      $(this).find("img").addClass("zoomImg");
      $(this).find("button").css("display", "block")
    }).mouseleave(function(){
      $(this).find("img").removeClass("zoomImg");
      $(this).find("button").css("display", "none")
    })
  })
  // let bg = ["url(images/b1.jpg)", "url(images/b2.jpg)", "url(images/b3.jpg)"];
  // let i = 0;

  // function nextBackground() {
  //   $(".home").css('background-image', bg[i = ++i % bg.length]);

  //   setTimeout(nextBackground, 5000);
  // }
  // setTimeout(nextBackground, 5000);
  // $(".home").css('background-image', bg[0]);

  //$('.slider').slider();

})