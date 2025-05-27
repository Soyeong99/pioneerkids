$(function () {


  $(".m_gnb_wrap").hide();
  
  $(".ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });
  
  $(".mgnb_close").click(function () {
    $(".m_gnb_wrap").fadeOut();
  });

  // edu_pr content
  // $(".content ul li:nth-child(1)").addClass("active");
  // $(".content ul li").mouseenter(function () {
  //   $(this).addClass("active").siblings().removeClass("active");
  // });

const items = document.querySelectorAll('.content_list li');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(el => {
      el.classList.remove('active');
      el.style.backgroundImage = ''; // ✅ 원래 CSS 배경으로 복원
    });

    item.classList.add('active');
    item.style.backgroundImage = 'none'; // ✅ 배경 이미지만 제거 (색상은 유지됨)
  });
});

  //review_area
const top_slide = new Swiper(".top_slide", {
  loop: true,
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 12,

  autoplay: {
    delay: 1500,
    disableOnIneraction: false,
  },

breakpoints: {  
  1000: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  400: {
  slidesPerView: 2,
  spaceBetween: 8,
},
}
});

const btm_slide = new Swiper(".btm_slide", {

  loop: true,
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 8,

  autoplay: {
    delay: 1500,
    disableOnIneraction: false,
  },

breakpoints: {  
  1000: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  400: {
    slidesPerView: 2,
    spaceBetween: 8,
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

class ScrollImageController {
  constructor() {
    this.images = document.querySelectorAll('.floating_img');
    this.tree = document.querySelector('.center_tree');
    this.heroSection = document.querySelector('#hero');
    this.heroText = document.querySelector('.hero_txt_area');
    this.newText = document.querySelector('.new_text_area');
    this.floatingBox = document.querySelector('.floating_img_box');

    if (!this.images.length || !this.tree || !this.heroSection || !this.heroText || !this.newText) {
      console.error('필요한 요소를 찾을 수 없습니다.');
      return;
    }

    this.imageData = [];
    this.maxActiveHeight = this.heroSection.offsetHeight - window.innerHeight;
    this.init();
  }

  init() {
    setTimeout(() => {
      this.calculateInitialPositions();
      this.bindEvents();
      this.update();
    }, 100);
  }

  calculateInitialPositions() {
    this.imageData = [];
    this.images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      this.imageData.push({
        element: img,
        startX: rect.left + rect.width / 2 + window.scrollX,
        startY: rect.top + rect.height / 2 + window.scrollY
      });
    });
  }

  bindEvents() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.update();
          ticking = false;
        });
        ticking = true;
      }
    });

    window.addEventListener('resize', () => {
      this.calculateInitialPositions();
      this.maxActiveHeight = this.heroSection.offsetHeight - window.innerHeight;
    });
  }

  update() {
    const scrollY = window.scrollY;
    const rawProgress = Math.min(Math.max(scrollY / this.maxActiveHeight, 0), 1);
    const scrollProgress = rawProgress * 0.25;

    // 히어로 섹션을 벗어나면 초기 상태로 복구
    if (scrollY > this.maxActiveHeight + 50) {
      this.floatingBox.style.opacity = "0";
      this.tree.style.opacity = "0";
      this.heroText.style.opacity = "0";
      this.newText.style.opacity = "0";
      return;
    } else {
      this.floatingBox.style.opacity = "1";
      this.tree.style.opacity = "1";
      this.heroText.style.opacity = "1";
    }

    const treeScale = 0.5 + (scrollProgress * 1.2);
    this.tree.style.transform = `translateX(-50%) scale(${treeScale})`;

    const treeRect = this.tree.getBoundingClientRect();
    const treeCenterX = treeRect.left + treeRect.width / 2;
    const treeCenterY = treeRect.top + treeRect.height / 2;

    this.imageData.forEach((data) => {
      const deltaX = treeCenterX - (data.startX - window.scrollX);
      const deltaY = treeCenterY - (data.startY - window.scrollY);
      const easeProgress = this.easeInOutQuad(scrollProgress);

      const currentX = deltaX * easeProgress;
      const currentY = deltaY * easeProgress;
      const rotation = scrollProgress * 180;
      const opacity = 1 - scrollProgress * 0.3;
      const scale = 1 - scrollProgress * 0.3;

      data.element.style.transform = `
        translate(${currentX}px, ${currentY}px)
        rotate(${rotation}deg)
        scale(${Math.max(scale, 0.4)})
      `;
      data.element.style.opacity = Math.max(opacity, 0.4);
    });

    const textScale = 1 - (scrollProgress * 0.2);
    const textOpacity = 1 - (scrollProgress * 0.3);
    this.heroText.style.transform = `translate(-50%, -50%) scale(${Math.max(textScale, 0.6)})`;
    this.heroText.style.opacity = Math.max(textOpacity, 0.6);

    const newTextStart = 0.6;
    const newTextEnd = 0.85;
    const newTextProgress = Math.max((rawProgress - newTextStart) / (newTextEnd - newTextStart), 0);
    const newTextOpacity = Math.min(newTextProgress, 1);
    const newTextScale = 0.3 + (newTextProgress * 0.7);

    this.newText.style.opacity = newTextOpacity;
    this.newText.style.transform = `translate(-50%, -50%) scale(${newTextScale})`;
  }

  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let loadedImages = 0;
  const allImages = document.querySelectorAll('img');

  const startController = () => {
    new ScrollImageController();
  };

  const checkAllLoaded = () => {
    loadedImages++;
    if (loadedImages >= allImages.length) {
      setTimeout(startController, 300);
    }
  };

  if (allImages.length === 0) {
    setTimeout(startController, 100);
  } else {
    allImages.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener('load', checkAllLoaded);
        img.addEventListener('error', checkAllLoaded);
      }
    });
  }
});


});