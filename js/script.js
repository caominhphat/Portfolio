$(document).ready(function () {
  window.location.hash = "#home";
  $("header li").click(function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(this).siblings("header li.active").removeClass("active");
  });
  $("#back-to-top").click(function (e) {
    e.preventDefault();
    index = 0;
    var home = document.getElementById("home");
    home.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      window.location.hash = "#home";
    }, 500);

    li.forEach((el, index) => {
      if (el.className.includes("active")) {
        el.classList.remove("active");
      }
      if (el.children[0].innerHTML == "HOME") {
        el.classList.add("active");
      }
    });
    $("li>a").css("color", "white");
    $("li div").css("background-color", "white");
  });
  var count = 0;
  // Đoạn lệnh này dùng để làm ẩn và hiện menu hoặc nut bakctotop
  // $(window).scroll(function (event) {
  //   /* Act on the event */

  //   count += 1000;
  //   // return the position of scroll bar compared to top of viewport
  //   var windowTop = $(this).scrollTop();
  //   $("header").css({ position: "fixed", top: "2vh" });

  //   if (windowTop >= $("#about").offset().top - 1) {
  //     $("li>a").css("color", "#425e82");
  //     $("li div").css("background-color", "#425e82");
  //   } else {
  //     $("li>a").css("color", "white");
  //     $("li div").css("background-color", "white");
  //   }

  //   var li = $("ul.nav-bar li");
  //   var section = $("section");
  //   // if(windowTop >= $("#home").offset().top && windowTop < $("#about").offset().top - 1){
  //   //   $("#about").animate({scrollTop: $("#about").offset().top}, 1000, updateHashTag(hashTag));
  //   // }

  //   // if(windowTop >= 0 && windowTop < 969){
  //   //   $("html").animate({scrollTop: $("#about").offset().top}, 1000);
  //   // }
  //   // if(windowTop >= 969 && windowTop < (969+969) && currentWindowTop > windowTop){
  //   //   $("html").animate({scrollTop: $("#language").offset().top}, 1000);
  //   // }

  //   // $("html").animate({scrollTop: count}, 1000,function(){
  //   //   $("html").stop()
  //   // } );

  //   toggleBackToTop();
  // });

  $("#toggle").click(function (e) {
    e.preventDefault();
    $("nav").slideToggle();
  });

  $("header li a").click(function (event) {
    event.preventDefault();

    var sections = document.querySelectorAll("section");
    sections.forEach((section, i) => {
      if (this.innerHTML.toLowerCase() == section.getAttribute("id")) {
        index = i;
        console.log(i);
        section.scrollIntoView({ behavior: "smooth" });
        const hashTag = this.getAttribute("href");
        setTimeout(function () {
          updateHashTag(hashTag);
        }, animationDuration / 2);

        if (section.getAttribute("id") != "home") {
          $("li>a").css("color", "#425e82");
          $("li div").css("background-color", "#425e82");
        } else {
          $("li>a").css("color", "white");
          $("li div").css("background-color", "white");
        }
        if(this.innerHTML.toLowerCase() == 'project'){
          circle.forEach((el) => {
            console.log(el)
            el.style.animation = "animate 2s linear forwards";
          });
          countNumber();
        }else{
          setTimeout(() => {
            circle.forEach((el) => {
              el.style.removeProperty("animation");
            });
          }, 500);
        }
      }
    });
  });

  $(".language .slick-prev").html('<i class="fas fa-chevron-left"></i>');
  $(".language .slick-next").html('<i class="fas fa-chevron-right"></i>');

  const sections = document.querySelectorAll("section");
  const li = document.querySelectorAll(".nav-item");
  const circle = document.querySelectorAll("circle");
  let index = 0;
  let lastTime = 0;
  const animationDuration = 1000;

  document.addEventListener("wheel", (event) => {
    var delta = event.wheelDelta;
    const currentTime = new Date().getTime();
    if (currentTime - lastTime < animationDuration) {
      e.preventDefault();
      return;
    }
    if (delta < 0) {
      if (index > 3) return;
      index++;
      sections.forEach((section, i) => {
        if (i == index) {
          section.scrollIntoView({ behavior: "smooth" });
          if (i != 0) {
            $("li>a").css("color", "#425e82");
            $("li div").css("background-color", "#425e82");
          }

          li.forEach((el, j) => {
            if (el.className.includes("active")) {
              el.classList.remove("active");
            }
            if (
              el.children[0].innerHTML.toLowerCase() ==
              section.getAttribute("id")
            ) {
              el.classList.add("active");
              setTimeout(function () {
                updateHashTag(el.children[0].getAttribute("href"));
              }, animationDuration / 2);
            }
          });

          if (i == 3) {
            circle.forEach((el) => {
              el.style.animation = "animate 2s linear forwards";
            });
            countNumber();
          } else {
            setTimeout(() => {
              circle.forEach((el) => {
                el.style.removeProperty("animation");
              });
            }, 500);
          }
        }
      });
    } else {
      if (index < 1) return;
      index--;
      sections.forEach((section, i) => {
        if (i == index) {
          section.scrollIntoView({ behavior: "smooth" });
          if (i == 0) {
            $("li>a").css("color", "white");
            $("li div").css("background-color", "white");
          }
          li.forEach((el, j) => {
            if (el.className.includes("active")) {
              el.classList.remove("active");
            }
            if (
              el.children[0].innerHTML.toLowerCase() ==
              section.getAttribute("id")
            ) {
              el.classList.add("active");

              setTimeout(function () {
                updateHashTag(el.children[0].getAttribute("href"));
              }, animationDuration / 2);
            }
          });

          if (i == 3) {
            circle.forEach((el) => {
              el.style.animation = "animate 2s linear forwards";
            });
            countNumber();
          } else {
            setTimeout(() => {
              circle.forEach((el) => {
                el.style.removeProperty("animation");
              });
            }, 500);
          }
        }
      });
    }
    lastTime = currentTime;
  });
  setInterval(() => {
    toggleBackToTop();
  }, 200);
});
function updateHashTag(hashTag) {
  window.location.hash = hashTag;
}
function toggleBackToTop() {
  const backTop = document.getElementById("back-to-top");
  if (window.location.hash == "#home") {
    backTop.style.transform = "scale(0)";
    backTop.style.transition = "transform 0.5s ease-in";
  } else {
    backTop.style.transform = "scale(1)";
    backTop.style.opacity = "0.8";
  }
}
function countNumber() {
  const number = document.getElementsByClassName("number");

  let counter = 0;
  setInterval(() => {
    if (counter == 60) {
      clearInterval();
    } else {
      counter += 1;
      for (let i = 0; i < number.length; i++) {
        number[i].innerHTML = counter + "%";
      }
    }
  }, 2000 / 60);
}
