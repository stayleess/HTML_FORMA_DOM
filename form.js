$(document).ready(function () {
  let login = $("#btn_login");

  // form animation:
  let tl = gsap.timeline();
  const animacija = gsap.from("#form", {
    opacity: 0,
    duration: 1,
    yPercent: "-100",
    ease: "back",
  });

  login.on("click", function (e) {
    e.preventDefault();
    let username = $("#inputUsername").val();
    let password = $("#inputPassword").val();

    let user = "new_user";
    let rightPass = "123456789";

    // on focus hide marks and checks:
    $("input[data='username']").focus(() => {
      $("#check_user").hide();
      $("#wrong_user").hide();
    });
    $("input[data='password']").focus(() => {
      $("#check_pass").hide();
      $("#wrong_pass").hide();
    });

    //USERNAME CHECK VALIDATION
    if (username === user) {
      $("input[data='username']").css("border", "2px solid green");
      $("#user #check_user").show();
    } else if (username === "") {
      $("input[data='username']").css("border", "2px solid red");
      $("#greske_user").css("color", "red");
      $("#user #wrong_user").show();
      $("#greske_user").html("please, enter username");

      gsap.from("#greske_user", {
        xPercent: "-100",
        duration: 1,
        opacity: 0,
        rotation: "720",
        ease: "bounce",
      });
    } else if (username !== user) {
      $("#greske_user").html("please, enter valid username");
      gsap.from("#greske_user", {
        xPercent: "-100",
        duration: 1,
        opacity: 0,
        rotation: "720",
        ease: "bounce",
      });
      $("#greske_user").css("color", "red");
      $("input[data='username']").css("border", "2px solid red");
      $("#user #wrong_user").show();
    }

    //PASSWORD CHECK VALIDATION
    if (password === rightPass) {
      $("input[data='password']").css("border", "2px solid green");
      $("#pass #check_pass").show();
    } else if (password == "") {
      $("#greske_pass").html("please, enter passsword");
      $("#greske_pass").css("color", "red");
      $("input[data='password']").css("border", "2px solid red");
      $("#pass #wrong_pass").show();

      gsap.from("#greske_pass", {
        xPercent: "-100",
        duration: 1,
        opacity: 0,
        rotation: "720",
        ease: "bounce",
        delay: 0.5,
      });
    } else if (password !== rightPass) {
      $("#greske_pass").html("please, enter valid password");
      gsap.from("#greske_pass", {
        xPercent: "-100",
        duration: 1,
        opacity: 0,
        rotation: "720",
        ease: "bounce",
        delay: 0.5,
      });
      $("#greske_pass").css("color", "red");
      $("input[data='password']").css("border", "2px solid red");
      $("#pass #wrong_pass").show();
    }
    //SUCCESS VALIDATION:
    if (username == user && password == rightPass) {
      $("#prikazi").html("Successuful");
      gsap.from("#prikazi", {
        yPercent: "-100",
        duration: 1,
        delay: 1.5,
        opacity: 0,
        rotation: "720",
        ease: "back",
      });
      $("#greske_user").hide();
      $("#greske_pass").hide();
    } else {
      $("#prikazi").html("Please correct input(s)");
      gsap.from("#prikazi", {
        yPercent: "-100",
        duration: 1,
        delay: 1.5,
        opacity: 0,
        rotation: "720",
        ease: "back",
      });
    }
  });
});
