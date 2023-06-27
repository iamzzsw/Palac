var mapOptions;

function mapDefault() {
  let objMap = $('.map-default');

  if (objMap.length) {
    function initYandexMap() {
      ymaps.ready(function () {
        $.each(objMap, function () {
          let id = $(this).attr('id'),
              mapLat = $(this).data('lat'),
              mapLng = $(this).data('lng'),
              mapMarker = $(this).data('marker'),
              mapZoom = $(this).data('zoom');

          mapOptions = new ymaps.Map( id, {
            center: [mapLat, mapLng],
            zoom: mapZoom,
            controls: [],
            autoFitToViewport: 'always'
          }),

            myPlacemark = new ymaps.Placemark(mapOptions.getCenter(), {
              hintContent: null
            }, {
              iconLayout: 'default#image',
              iconImageHref: mapMarker,
              iconImageSize: [44, 66],
              iconImageOffset: [-22, -72]
            });

          mapOptions.geoObjects.add(myPlacemark);
          mapOptions.behaviors.disable('scrollZoom');
        });
      });
    }

    initYandexMap();
  }
}

function mapPrimary() {
  var objMap = $('.map-primary');

  if (objMap.length) {
    var mapZoom = offices.mapZoom;

    function initYandexMap() {
      var mapIDs = ['map', 'map-mobile'];

      mapIDs.forEach((mapId) => {
        ymaps.ready(function () {

          if (mapId.length) {
            mapOptions = new ymaps.Map(mapId, {
              center: [offices.mapCenter[0], offices.mapCenter[1]],
              zoom: mapZoom,
              controls: ['zoomControl'],
              autoFitToViewport: 'always'
            }),

              offices.list.map(function (item) {

                myplacemark = new ymaps.Placemark([item.coordinates[0], item.coordinates[1]], {
                  hintContent: null
                }, {
                  iconLayout: 'default#image',
                  iconImageHref: item.marker,
                  iconImageSize: [44, 66],
                  iconImageOffset: [-22, -72]
                });

                mapOptions.geoObjects.add(myplacemark);
              });

            mapOptions.behaviors.disable('scrollZoom');

            // mapOptions.setBounds(mapOptions.geoObjects.getBounds(),{checkZoomRange:true, zoomMargin: [100, 0, 100, 0]}).then(function(){
            //   if(mapOptions.getZoom() > 5) mapOptions.setZoom(14);
            // });
          }

        });

      });

    }

    initYandexMap();
  }

  $('#popup-map').on('shown.bs.modal', function () {
    mapOptions.container.fitToViewport();
  });
}

function sliderDefault() {
  var slider = $('.js_slider-default');

  if (slider.length) {
    slider.flickity({
      watchCSS: true,
      adaptiveHeight: true,
      prevNextButtons: false,
      pageDots: true,
    });
  }
}

function sliderPrimary() {
  var slider = $('.js_slider-primary');

  if (slider.length) {
    slider.flickity({
      watchCSS: true,
      adaptiveHeight: false,
      prevNextButtons: false,
      pageDots: false,
      freeScroll: true,
      contain: true,
    });
  }
}

function sliderCenter() {
  var slider = $('.js_slider-center');

  if (slider.length) {
    let $sliderParent = slider.closest('.slider-wrapper'),
      nextSlide = $sliderParent.find('.js_slide-next'),
      prevSlide = $sliderParent.find('.js_slide-prev'),
      item_length = slider.find('.slider-center__item').length - 1;

    slider.slick({
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: false,
      infinite: true,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            centerMode: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            centerMode: false
          }
        }
      ]
    });

    nextSlide.on('click', function () {
      slider.slick('slickNext');
    });

    prevSlide.on('click', function () {
      slider.slick('slickPrev');
    });

  }
}

function burgerMenu() {
  var burger = $('.js_burger'),
    house = $('html');

  burger.on('click', function () {
    var btn = $(this);
    if (btn.hasClass('active')) {
      btn.removeClass('active');
      house.removeClass('open-panel');
    } else {
      btn.addClass('active');
      house.addClass('open-panel');
    }
    return false;
  });
}

function scrollHeader() {
  var header = $('.layout-header');

  if (header.length) {

    function detectScroll() {
      if ($(this).scrollTop() > 0) {
        header.addClass("layout-header__compact");
      } else {
        header.removeClass("layout-header__compact");
      }
    }

    detectScroll();

    $(window).scroll(function () {
      detectScroll();
    });
  }
}

function selectDefault() {
  var select = $('.js_select-default');

  if (select.length) {
    let light = null,
      white = null;
    if (select.hasClass('light')) {
      light = true
    } else if (select.hasClass('white')) {
      white = true
    }
    select.select2({
      minimumResultsForSearch: -1,
      width: '100%',
      allowClear: false,
      dropdownCssClass: light ? 'select-dropdown__light' : (white ? 'select-dropdown__white' : 'select-dropdown__default')
    });
  }
}

function selectPrimary() {
  let select = $('.js_select-primary');

  if (select.length) {
    select.select2({
      minimumResultsForSearch: -1,
      width: '100%',
      allowClear: false,

      dropdownCssClass: 'select-dropdown__primary'
    });
  }

  select.on('select2:open', function (e) {
    let $selectDropdown = $('.select2-dropdown');

    $selectDropdown.hide();

    setTimeout(function () {
      $selectDropdown.slideDown(300);
    }, 10);
  }).on('select2:closing', function (e) {
    e.preventDefault();

    let $selectDropdown = $('.select2-dropdown');

    $selectDropdown.show();

    setTimeout(function () {
      $selectDropdown.slideUp(300, function () {
        select.select2('destroy');
        selectPrimary();
      });
    }, 10);
  });
}

function interfaceAnimation() {

  ScrollReveal().reveal(
    '.section-unique, \
    .section-equipment, \
    .section-blog, \
    .section-advantages .section-head,\
    .section-package .section-head',
    {
      delay: 100,
      duration: 1000,
      interval: 80,
      reset: false,
      mobile: true,
    }
  );

  ScrollReveal().reveal(
    '.section-company .grid-item, \
    .section-advantages .grid-item',
    {
      interval: 200,
      duration: 1500,
      origin: 'bottom',
      opacity: 0,
      reset: false,
      mobile: true,
    }
  );

}

function toggleMap() {
  let body = $('body'),
    button = $('.js_toggle-map'),
    container = $('.section-contacts__map');

  if (button && container) {
    let buttonHideText = button.data('hide'),
      buttonShowText = button.data('show');

    if (document.body.clientWidth > 767) {
      body.removeClass('ov-h');

      button.off('click').on('click', function () {
        container.toggleClass('hidden');
        body.removeClass('ov-h');

        if (button.text() === buttonHideText) {
          button.text(buttonShowText)
        } else {
          button.text(buttonHideText)
        }

        mapOptions.container.fitToViewport();

        return false;
      });
    } else {
      if (buttonShowText) {
        button.text(buttonShowText);
      }

      button.off('click').on('click', function () {
        let container = $('.section-contacts__map');

        if (container) {
          let btnClose = $('.map-close');

          container.addClass('active');
          body.addClass('ov-h');

          if (btnClose) {
            btnClose.on('click', function () {
              container.removeClass('active');
              body.removeClass('ov-h');
            });
          }
        }
      });
    }
  }
}

function showFilter() {
  let filterButton = document.querySelectorAll('.js_filter-show');

  if (filterButton) {
    filterButton.forEach(function (item) {
      item.onclick = function (e) {
        let filterItem = e.target.closest('.js_filter');

        if (filterItem) {
          filterItem.classList.toggle('show');
        }
      }
    });
  }
}

function openSidebar() {
  let btn = document.querySelectorAll('.js_open-sidebar'),
    body = document.querySelector('body');

  if (btn) {
    btn.forEach(function (item) {
      item.onclick = function () {
        body.classList.add('open-sidebar');
      }
    });
  }

  if (document.body.clientWidth >= 1024) {
    body.classList.remove('open-sidebar');
  }
}

function closeSidebar() {
  let btn = document.querySelectorAll('.js_sidebar-close'),
    body = document.querySelector('body'),
    pageSidebar = document.querySelector('.js_sidebar'),
    btnOpen = document.querySelector('.js_open-sidebar');

  if (pageSidebar) {
    if (btn) {
      btn.forEach(function (item) {
        item.onclick = function () {
          body.classList.remove('open-sidebar');
        }
      });
    }

    window.onclick = function (e) {
      if (!e.target.closest('.page-sidebar') && !e.target.contains(pageSidebar) && !e.target.contains(btnOpen)) {
        body.classList.remove('open-sidebar');
      }
    };
  }
}

function parallaxBoxs() {
  var obj = $('.rellax');

  if (obj.length) {
    new Rellax('.rellax', {
      speed: 2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
}

function toggleShowBlockForm() {
  let formItems = document.querySelectorAll('.js_form-item');

  if (formItems) {
    formItems.forEach(function (item) {
      let toggleStatus = item.querySelector('.switch'),
        formCell = item.querySelector('.js_form-cell');

      if (toggleStatus) {
        if (toggleStatus.checked) {
          formCell.classList.add('active');
        } else {
          formCell.classList.remove('active');
        }
      }
    });
  }
}

function counter() {
  let counterBlocks = document.querySelectorAll('.js_counter');

  if (counterBlocks) {
    counterBlocks.forEach(function (item) {
      let counter = item.querySelector('.counter-control'),
        minus = item.querySelector('.js_minus'),
        plus = item.querySelector('.js_plus');

      if (counter) {
        let valueCounter = counter.value;

        minus.onclick = function (e) {
          e.preventDefault();

          counter.value = --valueCounter;
        }

        plus.onclick = function (e) {
          e.preventDefault();

          counter.value = ++valueCounter;
        }
      }
    });
  }
}

function showBlock() {
  let btnShow = document.querySelector('.js_btn-show');

  if (btnShow) {
    let block = document.querySelector('.js_block-hidden');

    if (block) {
      btnShow.onclick = function (e) {
        e.target.classList.toggle('active');
        block.classList.toggle('active');
      }
    }
  }
}

function textareaSize() {
  let textAreas = document.querySelectorAll('textarea');

  if (textAreas) {
    textAreas.forEach(function (textarea) {
      let block = textarea.closest('.textarea-block');

      textarea.addEventListener("scroll", function (e) {
        block.classList.add('scroll');

        if (textarea.scrollTop === 0) {
          block.classList.remove('scroll');
        }
      });
    });
  }
}

function hiddenButtonAside() {
  let endBlock = document.querySelector('.js_end');

  if (endBlock) {
    let coordTop = endBlock.getBoundingClientRect().top,
      asideButton = document.querySelector('.js_aside-block');

    if (asideButton) {
      if ((window.pageYOffset) >= (coordTop + window.pageYOffset - 400)) {
        asideButton.classList.remove('show');
        asideButton.classList.add('hide');
      } else {
        asideButton.classList.remove('hide');
        asideButton.classList.add('show');
      }
    }
  }
}

function toggleMapBasket() {
  var button = $('.js_toggle-map-basket');

  if (button) {
    button.on('click', function () {
      var container = $('.map-container');

      if (container) {
        container.toggleClass('hidden');
      }
      mapOptions.container.fitToViewport();

      return false;

    });
  }
}

function toggleTableBody() {
  let btnsToggle = document.querySelectorAll('.js_table');

  if (btnsToggle) {
    btnsToggle.forEach(function (button) {
      button.onclick = function (e) {
        let table = e.target.closest('table'),
          tbody = table.querySelector('tbody');

        tbody.classList.toggle('active');
        e.target.closest('tr').classList.toggle('active');
      }
    });
  }
}

window.onscroll = function () {
  hiddenButtonAside();
}

window.onchange = function () {
  toggleShowBlockForm();
  hiddenButtonAside();
}

function scrollSpy() {
  var link = $('.js_scrollspy .menu-primary__link');

  if (!link.length) {
    link = $('.js_scrollspy .nav-list__link');
  }

  link.on('click', function (e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top - 80
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });

  $(window).on('scroll', function () {
    scrNav();
  });

  if (window.location.hash) {
    $(window).on('load', function () {
      $('html, body').animate({scrollTop: $(window.location.hash).offset().top - 80}, 600);
      return false;
    });
  }

  function scrNav() {
    var sTop = $(window).scrollTop(),
      blockScroll = $('.js_scrollspy .anchor-default');

    blockScroll.each(function () {
      var id = $(this).attr('id'),
        offset = $(this).offset().top;

      if (sTop >= offset - 150) {
        $('.js_scrollspy .anchor-default').removeClass('current');
        link.removeClass('active');
        $('.js_scrollspy').find('[href="#' + id + '"]').addClass('active');
        $(this).addClass('current');
      }
    });
  }

  scrNav();
}

function dropdownDefault() {
  var link = $('.js_dropdown-default');

  link.on('click', function () {
    var item = $(this);

    if (item.hasClass('open')) {
      item.removeClass('open');
    } else {
      item.addClass('open');
    }

    return false;
  });

  $(document).on('click', function (e) {
    if ($('.dropdown-default').length && !$(e.target).closest('.dropdown-default').length) {
      link.removeClass('open');
    }
  });
}

function togglePassword() {
  let btnPasswordShow = document.querySelectorAll('.js_toggle-password');

  if (btnPasswordShow) {
    btnPasswordShow.forEach(function (item) {
      item.onclick = function (e) {
        let eyeClose = item.querySelector('.icon-eye-close'),
          eyeOpen = item.querySelector('.icon-eye-open'),
          parent = item.closest('.form-password'),
          inputPassword = parent.querySelector('.form-control');
        eyeClose.classList.toggle('hidden');
        eyeOpen.classList.toggle('hidden');

        if (inputPassword.getAttribute('type') == 'password') {
          inputPassword.setAttribute('type', 'text');
        } else {
          inputPassword.setAttribute('type', 'password');
        }
      }
    })
  }
}

function accordionDefault() {

  $('.accordion-default__head').on('click', function (e) {
    e.preventDefault();

    var $this = $(this).closest('.accordion-default__item');

    if ($this.hasClass('open')) {
      $this.removeClass('open');
      $this.find('.accordion-default__body').stop(true).slideUp(350);
    } else {
      $this.addClass('open');
      $this.find('.accordion-default__body').stop(true).slideDown(350);
    }
  });
}

function dropdownLinks() {
  $('.dropdown-links__body').on('click', function () {
    var item = $(this).closest('.dropdown-links');

    if (item.hasClass('open')) {
      item.removeClass('open');
    } else {
      item.addClass('open');
    }

    $(document).on('click', function (e) {
      if ($('.dropdown-links').length && !$(e.target).closest('.dropdown-links').length) {
        $('.dropdown-links').removeClass('open');
      }
    });

  });
}

function buttonAddToCart() {
  var container = $('.js_btn-add');


  if (container.length) {
    var btn = $('.js_btn-add .btn');

    btn.on('click', function () {

      var currentBtn = $(this),
        btnWrap = currentBtn.closest('.btn-add'),
        allButtons = btnWrap.find('.btn'),
        btnDefault = btnWrap.find('.btn-add__default'),
        btnPrimary = btnWrap.find('.btn-add__primary');

      if (currentBtn.is('.active, .btn-add__default')) {
        allButtons.removeClass('active');
        btnPrimary.addClass('active');
      }

      if (currentBtn.is('.active, .btn-add__primary')) {
        allButtons.removeClass('active');
        btnDefault.addClass('active');
      }

      return false;
    });
  }
}

function dynamicScrollSpy() {
  var obj = $('.js_dynamic-scrollspy');

  if (obj.length) {
    var menu = $('.menu-primary');

    $(".page-content h2").each(function (i) {
      var item = $(this);

      item.attr('id', 'anchor-' + i).attr('class', 'page-content__title');

      menu.append('<li class="menu-primary__item"><a href="#anchor-' + i + '" class="menu-primary__link">' + $(this).text() + '</a></li>');
    });


    var link = $('.js_dynamic-scrollspy .menu-primary__link');

    link.on('click', function (e) {
      var target = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 600);
      $(this).addClass('active');
      e.preventDefault();
    });

    $(window).on('scroll', function () {
      scrNav();
    });

    function scrNav() {
      var sTop = $(window).scrollTop();
      $('.js_dynamic-scrollspy h2').each(function () {
        var id = $(this).attr('id'),
          offset = $(this).offset().top;
        if (sTop >= offset - 150) {
          $('.js_dynamic-scrollspy h2').removeClass('current');
          link.removeClass('active');
          $('.js_dynamic-scrollspy').find('[href="#' + id + '"]').addClass('active');
          $(this).addClass('current');
        }
      });
    }

    scrNav();
  }
}

function textareaResize() {
  let textarea = document.querySelectorAll('.js_textarea');//РАСТЯГИВАЕМ_textarea

  for (let i = 0; i < textarea.length; i++) {

    textarea[i].setAttribute('style', 'height:' + (textarea[i].scrollHeight) + 'px;overflow-y:hidden;');

    textarea[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {

    this.style.height = 'auto';

    this.style.height = (this.scrollHeight) + 'px';//////console.log(this.scrollHeight);

  }
}

function filterPanel() {
  let accordion = document.querySelector('.js_filter');

  if (accordion) {
    let filterPanel = document.querySelector('.js_filter-panel');

    if (filterPanel) {
      let filters = accordion.querySelectorAll('.checkbox__control:checked').length,
        endSection = document.querySelector('.js_section'),
        coordTopEndSection = endSection.getBoundingClientRect().top,
        heightSection = endSection.offsetHeight;

      if (filters > 0) {
        filterPanel.classList.add('active');
      } else {
        filterPanel.classList.remove('active');
      }

      if (window.pageYOffset >= (coordTopEndSection + window.pageYOffset - heightSection)) {
        filterPanel.classList.remove('active');
      }
    }
  }
}

function showControl() {
  let linksControl = document.querySelectorAll('.js_show');

  if (linksControl) {
    linksControl.forEach(function (link) {
      link.onclick = function (e) {
        let parent = e.target.closest('.form-primary__inner'),
          control = parent.querySelector('.form-control');

        if (control) {
          control.classList.toggle('hidden');
          control.classList.toggle('show');
        }
      }
    });
  }
}

window.onchange = () => {
  filterPanel();
  toggleMap();
  toggleShowBlockForm();
}

window.onresize = () => {
  toggleMap();
  openSidebar();
}

window.onscroll = () => {
  filterPanel();
}

$(document).ready(function () {
  mapDefault();
  mapPrimary();

  burgerMenu();

  sliderDefault();
  sliderPrimary();
  sliderCenter();

  scrollHeader();

  selectDefault();

  interfaceAnimation();

  toggleMap();

  showFilter();
  openSidebar();
  closeSidebar();

  parallaxBoxs();
  selectPrimary();

  toggleShowBlockForm();

  counter();
  showBlock();

  textareaSize();
  hiddenButtonAside();

  toggleMapBasket();
  toggleTableBody();

  scrollSpy();
  dynamicScrollSpy();
  dropdownDefault();
  togglePassword();
  accordionDefault();
  dropdownLinks();
  buttonAddToCart();
  textareaResize();

  filterPanel();

  showControl();


  // temp
  $('.js_example-send').on('click', function () {
    $(this).closest('.section-feedback').find('.message-block').addClass('message-block_show');
    return false;
  });
});
