
const scrollbtn = document.querySelector('.scrol_btn')

window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    scrollbtn.style.display = 'block';
  }
  else{
    scrollbtn.style.display = 'none';
  }

})
scrollbtn.addEventListener('click' , () => {
  window.scroll({
    top: 0,
    behavior: "smooth"

  })

})

// --============--SCROll BTN END--============--

$(document).ready(function(){
  new Mmenu(document.querySelector('#mobile_items'));

  document.addEventListener('click', function (evnt) {
      var anchor = evnt.target.closest('a[href^="#/"]');
      if (anchor) {
          alert("Thank you for clicking, but that's a demo link.");
          evnt.preventDefault();
      }
  });
});


// --=====================--Mmenu END--======================--

$(document).ready(function(){
  $('.inner_slide_sec').slick({
      infinite: true,
      cssEase: 'linear',
      // autoplay: 600,      
      arrows:true,    
      dots:true,
      cssEase: 'linear',
      prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  
    })
  });

// // --=====================--SLIDER SECTION END--====================--

// var typed3 = new Typed('.typing', {
//   strings: ['Specialized Hospital for Treatment of Mental Health & Drug Dependence','Specialized Hospital for Treatment of Mental Health & Drug Dependence','Specialized Hospital for Treatment of Mental Health & Drug Dependence',],
//   typeSpeed: 70,
//   backSpeed: 20,
//   loop: true,

// });

// // --================--SMART TYPING --==============--

//         jQuery(function(){
//           jQuery("a.bla-1").YouTubePopUp();
//           jQuery("a.bla-2").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
//         });


// // --=========================--VIDEOS POPUP--====================--
$(document).ready(function(){
	$('.profeesional_slick').slick({
		arrows: true,
		autoplay:false,
		autoplaySpeed:600,
		slidesToShow: 3,
		centerMode: false,
		slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		  responsive: [

        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
		  
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
		
	});


});


// // --========================--MAIN SLIDER END--=======================--


// $('.seervices_Slick').slick({
//     centerMode: true,
//     centerPadding: '90px',
//     slidesToShow: 3,
//     arrows: false,
//     dots: false,
//     infinite: true,
//     autoplay: false,
//     autoplaySpeed: 1000,
//     speed: 1000,
//     rows: 0,
//     responsive: [
//       {
//         breakpoint: 1600,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '70px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 1400,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '60px',
//           slidesToShow: 2
//         }
//       },
      
//         {
//             breakpoint: 1100,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '50px',
//               slidesToShow: 2
//             }
//           },
//           {
//             breakpoint: 992,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 1
//             }
//           },
//           {
//             breakpoint: 750,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 1
//             }
//           },
//       {
//         breakpoint: 559,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '30px',
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '15px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });


// // --========================--SERVICES END--=====================--

// $(document).ready(function(){
// 	$('.hfacilities_Slick').slick({
// 		arrows: true,
// 		autoplay: false,
//     dots: false,
// 		speed:800,
// 		slidesToShow: 6,
// 		centerMode: false,
// 		slidesToScroll: 3,
//     prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
//     nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
// 		  responsive: [

//         {
//           breakpoint: 1900,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 2,
//             infinite: true,
//           }
//         }, 
//         {
//           breakpoint: 1500,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 2,
//             infinite: true,
//           }
//         }, 
//         {
//           breakpoint: 1300,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//           }
//         }, 
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
    
//   ]
		
// 	});

// });

// // --=========================--OuR FACILITIES END--====================--

// $('.certificat_Slick').slick({
//   centerMode: true,
//   centerPadding: '155px',
//   slidesToShow: 3,
//   autoplay: true,
//   autoplaySpeed: 1000,
//   speed: 1000,
//   arrows: false,
//   dots: false,
//   responsive: [
//       {
//           breakpoint: 1100,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: '100px',
//             slidesToShow: 3
//           }
//         },
//         {
//           breakpoint: 992,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: '40px',
//             slidesToShow: 3
//           }
//         },
//         {
//           breakpoint: 750,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: '40px',
//             slidesToShow: 1
//           }
//         },
//     {
//       breakpoint: 559,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

// // --==================--CERTOFICATE END--============--

// $(document).ready(function(){
// 	$('.partners_slick').slick({
// 		arrows: false,
// 		autoplay:false,
//     dots: false,
// 		autoplaySpeed:600,
// 		slidesToShow: 3,
// 		centerMode: false,
// 		slidesToScroll: 1,
//     // prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
//     // nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
// 		  responsive: [
		  
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
    
//   ]
		
// 	});


// });


// // --======================--PARTNERS END--====================--

// $(document).ready(function(){
// 	$('.profeesional_slick').slick({
// 		arrows: true,
// 		autoplay:false,
// 		autoplaySpeed:600,
// 		slidesToShow: 3,
// 		centerMode: false,
// 		slidesToScroll: 1,
//     prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
//     nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
// 		  responsive: [

//         {
//           breakpoint: 1300,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             infinite: true,
//           }
//         },
		  
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
    
//   ]
		
// 	});


// });

// // --===================--PROFFESSINAL SEC END--=====================--

// $(document).ready(function(){
// 	$('.about_testimonial').slick({
// 		arrows: true,
// 		autoplay: false,
// 		autoplaySpeed:600,
// 		slidesToShow: 1,
// 		centerMode: false,
// 		slidesToScroll: 1,
//     prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
//     nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
// 		  responsive: [
		  
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
    
//   ]
		
// 	});


// });


// // --========================--TESTIMONIAL END--=======================--

// $('.onPage ul li a').click(function(){
//   // applying again smooth scroll on menu items click
//   $('html').css("scrollBehavior", "smooth");
// });

// // --===================--END--===================--


// $('.recover_slick').slick({
//   dots: false,
//   arrows: true,
//   infinite: true,
//   autoplay: false,
//   autoplaySpeed: 1000,
//   speed: 1000,
//   fade: false,
//   cssEase: 'linear',
//   adaptiveHeight: true,
//   prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
//   nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  
// });

// // --=============================--RECOVER END--===================--

// new WOW().init();

// // --===================--wow js--===========--

// $(document).ready(function(){
// 	$('.hrecent_blogSlick').slick({
// 		arrows: false,
// 		autoplay:false,
//     dots: true,
// 		speed:1050,
// 		slidesToShow: 3,
// 		centerMode: false,
// 		slidesToScroll: 2,
// 		  responsive: [
//         {
//           breakpoint: 1300,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true,
//           }
//         }, 
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true,
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         dots: true,
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//       }
//     }
    
//   ]
		
// 	});

// });
// // --=======================--END--======================--


// // $(document).ready(function(){
// //   function appntinput(x) {
// //     x.style.background = "#5c5c5c";
// //     x.style.color = "#fff";
// //     x.style.border = "1px solid #d3f1f1";
// //   }

// // });






















