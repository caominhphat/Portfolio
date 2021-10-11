$(document).ready(function () {

  $('header li').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active');
    $(this).siblings('header li.active').removeClass('active');
    
  });
    $(".back-to-top").click(function(event) {
        /* Act on the event */
        // đơn vị thời gian là ms
        // button back to top so với top
        //Lấy top của button back to top
        //offset() là vị trí của phần tử so với document
        //position() là vị trí của phần tử so với cha trực tiếp 
        var distance = $(this).offset().top;
        var v = 2; //2px/ms
        var time = distance / v;
        $("html").animate({scrollTop: 0}, time);
    });
    var count = 0
    // Đoạn lệnh này dùng để làm ẩn và hiện menu hoặc nut bakctotop
    $(window).scroll(function(event) {
        /* Act on the event */
        
      count += 1000
        // return the position of scroll bar compared to top of viewport
        var windowTop = $(this).scrollTop();  
        $('header').css({'position': 'fixed','top': '2vh'});     
        
	    if (windowTop >= $("#about").offset().top - 1) {
		    $('li>a').css('color','#425e82')
        $('li div').css('background-color',"#425e82")
    	}
      else{
        $('li>a').css('color','white')
        $('li div').css('background-color',"white")
      }

      var li = $('ul.nav-bar li')
      var section = $('section')
      // if(windowTop >= $("#home").offset().top && windowTop < $("#about").offset().top - 1){
      //   $("#about").animate({scrollTop: $("#about").offset().top}, 1000, updateHashTag(hashTag));
      // }

      // if(windowTop >= 0 && windowTop < 969){
      //   $("html").animate({scrollTop: $("#about").offset().top}, 1000);
      // }
      // if(windowTop >= 969 && windowTop < (969+969) && currentWindowTop > windowTop){
      //   $("html").animate({scrollTop: $("#language").offset().top}, 1000);
      // }
      
      // $("html").animate({scrollTop: count}, 1000,function(){
      //   $("html").stop()
      // } );
   
      
    
      

        toggleBackToTop();
    });

    $("#toggle").click(function (e) { 
        e.preventDefault();
        $('nav').slideToggle();
    });

    $("header li a").click(function(event) {
        /* Act on the event */
        //Ngăn chặn không cho chạy đến vùng có id tương với hash tag của thẻ a
        // event.preventDefault();
        var hashTag = this.hash;//javascript
      
        
        var targetObj = $(hashTag);
        
        var targetTop = $(targetObj).offset().top;
    
        var currentWindowTop = $(window).scrollTop();
        var distance = Math.abs(currentWindowTop - targetTop);
       
        var v = 1; //2px/ms
        var time = distance / v;
    
        // callback function là gì?
        // Là hàm được truyền vào như là đối số của hàm được gọi (hàm chính)
        // Hàm callback (hàm phụ) sẽ được gọi khi hàm chính chạy xong 
    
        // Hàm vô danh hay được gọi là anonymous function hay clouser function
        // Bài này updateHashTag là callback function
        $("html").animate({scrollTop: targetTop}, 1000, function () { updateHashTag(hashTag) });
    
    });
    let number = document.getElementsByClassName('number');
    
    let counter = 0;
    setInterval(()=>{
      if(counter == 60){
        clearInterval();
      }else{
       counter+=1;
       for(let i = 0; i< number.length;i++){
        number[i].innerHTML = counter +"%";
       }   
      }
      
    },2000/60)

    $('.language .slick-prev').html('<i class="fas fa-chevron-left"></i>');
    $('.language .slick-next').html('<i class="fas fa-chevron-right"></i>');
   
 
});
function updateHashTag(hashTag) {
	window.location.hash = hashTag;
}
function toggleBackToTop() {
	windowTop = $(window).scrollTop(); 
	if (windowTop < 10) {
		//Ẩn nút back-to-top
		$(".back-to-top").fadeOut();
	}
	else {
		//Hiện ra nút back-to-top
		$(".back-to-top").fadeIn();
	}
}

// window.addEventListener("scroll",myFunction)
// function myFunction() {
//   var testDiv = document.getElementById("about");
//   alert(testDiv.offsetTop);
// }

// alert($("#about").offset().top)
// alert(window.innerHeight)

const about = document.querySelector('#anim');
observer = new IntersectionObserver((entries)=>{
  console.log(entries);
  if(entries[0].intersectionRatio > 0){
    entries[0].target.style.animation = `anim1 2s forwards ease-out`
  }else{
    entries[0].target.style.animation = `none`
  }
})
observer.observe(about);