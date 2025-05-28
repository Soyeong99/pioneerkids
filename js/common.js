$(document).ready(function() {
  
  // 모바일 메뉴 jQuery 수정된 코드
  // 초기에 모바일 메뉴 숨기기
  $(".m_gnb_wrap").hide();
  
  // 햄버거 메뉴 클릭 시 메뉴 열기
  $(".ham_menu").click(function () {
    $(".m_gnb_wrap").fadeIn();
  });
  
  // 닫기 버튼 클릭 시 메뉴 닫기
  $(".mgnb_close").click(function () {
    $(".m_gnb_wrap").fadeOut();
  });
  
  // 메뉴 배경 클릭 시 메뉴 닫기 (선택사항)
  $(".m_gnb_wrap").click(function(e) {
    if (e.target === this) {
      $(".m_gnb_wrap").fadeOut();
    }
  });
});