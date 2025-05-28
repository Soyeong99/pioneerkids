$(function () {


// mobile_menu
  $(".m_gnb_wrap").hide();
  
  $(".ham_menu").click(function () {
    $(".m_gnb_wrap").fadeIn();
  });
  
  $(".mgnb_close").click(function () {
    $(".m_gnb_wrap").fadeOut();
  });
  
  $(".m_gnb_wrap").click(function(e) {
    if (e.target === this) {
      $(".m_gnb_wrap").fadeOut();
    }
  });


  //review_area
  const top_slide = new Swiper(".top_slide", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 3,

    autoplay: {
      delay: 1500,
      disableOnIneraction: false,
    },

    breakpoints: {
      1000: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 3,
      },
    }
  });

  const btm_slide = new Swiper(".btm_slide", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 3,

    autoplay: {
      delay: 1500,
      disableOnIneraction: false,
    },

    breakpoints: {
      1000: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 3,
      },
    }
  });

  // // teacher_info_con
  // const teacher_info_con = new Swiper(".teacher_info_con", {

  //   loop: true,
  //   speed: 1000,
  //   slidesPerView: 3, 
  //   spaceBetween: 12,

  //   autoplay: {
  //   delay: 3000,
  //   disableOnIneraction: false,
  //   }
  // });

  // DOM이 완전히 로드된 후 실행
  // document.addEventListener('DOMContentLoaded', function() {
  //   const teacherInfoCon = document.querySelector('.teacher_info_con');

  //   if (teacherInfoCon) {
  //     const slideItems = teacherInfoCon.querySelectorAll('.swiper-slide');
  //     const slideCount = slideItems.length;

  //     let swiperInstance = null;

  //     function initSwiper() {
  //       // 이미 Swiper가 초기화된 경우 destroy
  //       if (swiperInstance) {
  //         swiperInstance.destroy(true, true);
  //         swiperInstance = null;
  //       }

  //       const windowWidth = window.innerWidth;

  //       // 980px 이하에서만 Swiper 활성화
  //       if (windowWidth <= 980) {
  //         teacherInfoCon.classList.remove('static-list');

  //         swiperInstance = new Swiper(".teacher_info_con", {
  //           loop: true,
  //           speed: 1000,
  //           spaceBetween: 12,

  //           autoplay: {
  //             delay: 3000,
  //             disableOnInteraction: false,
  //           },

  //           // 반응형 설정
  //           breakpoints: {
  //             0: {
  //               slidesPerView: 1,
  //               spaceBetween: 10
  //             },
  //             381: {
  //               slidesPerView: 2,
  //               spaceBetween: 12
  //             },
  //             681: {
  //               slidesPerView: 3,
  //               spaceBetween: 12
  //             }
  //           }
  //         });
  //       } else {
  //         // 980px 초과시 일반 리스트로 표시
  //         teacherInfoCon.classList.add('static-list');
  //       }
  //     }

  //     // 초기 실행
  //     initSwiper();

  //     // 리사이즈 이벤트 리스너 (throttle 적용)
  //     let resizeTimeout;
  //     window.addEventListener('resize', function() {
  //       clearTimeout(resizeTimeout);
  //       resizeTimeout = setTimeout(function() {
  //         initSwiper();
  //       }, 150);
  //     });
  //   }
  // });

  // 선생 리스트 갯수 체크해서 data-count 속성 추가
const teacherSlides = document.querySelectorAll('#teacher .swiper-slide');
const teacherWrapper = document.querySelector('.teacher_info_con');

if (teacherSlides.length > 5) {
  teacherWrapper.setAttribute('data-count', '5plus');
}

// Swiper 초기화
new Swiper("#teacherSlide", {
  loop: false,
  speed: 600,
  spaceBetween: 12,
  slidesPerView: 3,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 2.2,
      spaceBetween: 12
    },
    1200: {
      slidesPerView: 3.2,
      spaceBetween: 12
    }
  }
});


});