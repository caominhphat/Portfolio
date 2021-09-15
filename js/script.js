$(document).ready(function () {
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

    // Đoạn lệnh này dùng để làm ẩn và hiện menu hoặc nut bakctotop
    $(window).scroll(function(event) {
        /* Act on the event */
        // return the position of scroll bar compared to top of viewport
        var windowTop = $(this).scrollTop();  
        $('header').css({'position': 'fixed','top': '2vh'});     
        // $("#about").offset().top -> tinh khg cach tu top cua section about toi top cua viewport
        // if (windowTop >= $("#about").offset().top - 1) {
        //     $("header nav").addClass('fixed-top');
        //     $("header").addClass('dummy-menu-padding-top');
        // }
        // else {
        //     $("header nav").removeClass('fixed-top');
        //     $("header").removeClass('dummy-menu-padding-top');
        // }
        toggleBackToTop();
    });

    $("#toggle").click(function (e) { 
        e.preventDefault();
        $('nav').slideToggle();
    });

    // $("header li a").click(function(event) {
    //     /* Act on the event */
    //     //Ngăn chặn không cho chạy đến vùng có id tương với hash tag của thẻ a
    //     event.preventDefault();
    //     var hashTag = this.hash;//javascript
    //     var targetObj = $(hashTag);
    //     var targetTop = $(targetObj).offset().top;
    
    //     var currentWindowTop = $(window).scrollTop();
    //     var distance = Math.abs(currentWindowTop - targetTop);
    //     var v = 2; //2px/ms
    //     var time = distance / v;
    
    //     //callback function là gì?
    //     //Là hàm được truyền vào như là đối số của hàm được gọi (hàm chính)
    //     //Hàm callback (hàm phụ) sẽ được gọi khi hàm chính chạy xong 
    
    //     // Hàm vô danh hay được gọi là anonymous function hay clouser function
    //     // Bài này updateHashTag là callback function
    //     $("html").animate({scrollTop: targetTop}, time, updateHashTag(hashTag));
    
    // });

});
// function updateHashTag(hashTag) {
// 	window.location.hash = hashTag;
// }
function toggleBackToTop() {
	windowTop = $(window).scrollTop(); 
	if (windowTop == 0) {
		//Ẩn nút back-to-top
		$(".back-to-top").fadeOut();
	}
	else {
		//Hiện ra nút back-to-top
		$(".back-to-top").fadeIn();
	}
}