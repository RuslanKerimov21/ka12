$(document).ready(function(){
  // ОТкрытие блока подсказок
  $('#open, #hexagon-close').on('click', function (event){
    $('.hexagon-block').toggleClass('hexagon-active');
  });
});
// Открытие бургера меню и состояние кнопки
(function(){
  var burger = document.querySelector('.moblie-button'),
      header = document.querySelector('.header-bottom');
  
  burger.onclick = function() {
      header.classList.toggle('visible');
      burger.classList.toggle('visible');
  }
}());
// Скролл хедера
(function(){
  const $body = $("body");
  const $header = $(".header");
  const $navCollapse = $(".menu");
  const scrollClass = "scroll";
  $(window).on("scroll", () => {
    if (this.matchMedia("(min-width: 992px)").matches) {
      const scrollY = $(this).scrollTop();
      scrollY > 0
        ? $body.addClass(scrollClass)
        : $body.removeClass(scrollClass);
    } else {
      $body.removeClass(scrollClass);
    }
  });
  $(".header .header-list-li-link").on("click", function(e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(href).offset().top - 71
    }, 600);
  });
}());
// Скролл табов
(function(){
  const $body = $("body");
  const $header = $(".advantage-inner");
  const $navCollapse = $(".advantage-tab");
  const scrollClass = "scroll";
  $(window).on("scroll", () => {
    if (this.matchMedia("(min-width: 992px)").matches) {
      const scrollY = $(this).scrollTop();
      scrollY > 0
        ? $body.addClass(scrollClass)
        : $body.removeClass(scrollClass);
    } else {
      $body.removeClass(scrollClass);
    }
  });
  $(".advantage-inner .tab-link").on("click", function(e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(href).offset().top - 71
    }, 600);
  });
}());
(function(){
  $('.tabgroup > div').hide();
  $('.tabgroup > div:first-of-type').show();
  $('.tabs a').click(function(e){
    e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show(); 
  })
}());
    