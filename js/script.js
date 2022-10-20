
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


// swiper

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


// dropdown header

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
})

const btns = document.querySelectorAll(".btn-bottom");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });
});

// search

document.querySelector(".nav-search").addEventListener("click", function () {
  document.querySelector(".nav-form").classList.add("form__active");
  this.classList.add("active");
})

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".nav-form");
  if (!target.closest(".header__search") || target.closest(".search-close")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".nav-search").classList.remove("active")
  }
})

//select gallery

document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices section__choices',
    },
  });

});


// swiper gallery

var swiper = new Swiper(".gallery-swiper", {

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
      loop: true,
    },

    993: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      loop: true,
    },

    1201: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
      loop: true,
    },

    1476: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
      loop: true,
    },

    1781: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      loop: true,
    }
  },

  pagination: {
    el: ".gallery-swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// fancybox

$('.gallery-slide1').click(function(){
	$.fancybox.open({
		src: '#modal1',
		type: 'inline'
	});
});

$('.gallery-slide2').click(function(){
	$.fancybox.open({
		src: '#modal2',
		type: 'inline'
	});
});

$('.gallery-slide3').click(function(){
	$.fancybox.open({
		src: '#modal3',
		type: 'inline'
	});
});

$('.gallery-slide4').click(function(){
	$.fancybox.open({
		src: '#modal4',
		type: 'inline'
	});
});

$('.gallery-slide5').click(function(){
	$.fancybox.open({
		src: '#modal5',
		type: 'inline'
	});
});

$('.gallery-slide6').click(function(){
	$.fancybox.open({
		src: '#modal6',
		type: 'inline'
	});
});


// accordion

new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  openOnInit: [0],
});

// tabs

let tabsBtn = document.querySelectorAll('.tabs-btn');
let tabsItem = document.querySelectorAll('.tabs-content');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-btn--active') });
    e.currentTarget.classList.add('tabs-btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content--active');
  });
});


/* events swiper */

var swiper = new Swiper(".events__swiper", {
  // loopFillGroupWithBlank: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      loop: true,
    },

    993: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
      loop: true,
    },

    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      loop: true,
    }
  },

  pagination: {
    el: ".events-swiper-pagination",
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".events-swiper-button-next",
    //prevEl: ".events-swiper-button-prev",
  },
});


//tooltip

tippy('#tooltip-1', {
  delay: 400,
  theme: 'tooltheme',
  trigger: 'click',
  content: 'Пример современных тенденций — современная методология разработки',
});

tippy('#tooltip-2', {
  delay: 400,
  theme: 'tooltheme',
  trigger: 'click',
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('#tooltip-3', {
  delay: 400,
  theme: 'tooltheme',
  trigger: 'click',
  content: 'В стремлении повысить качество',
});

// let tippyBtn = document.querySelectorAll('.tooltip');

// tippyBtn.forEach(function (element) {
//   element.addEventListener('click', function (e) {
//     const path = e.currentTarget.dataset.path;

//     tippyBtn.forEach(function (btn) { btn.classList.remove('tooltip-btn--active') });
//     e.currentTarget.classList.add('tooltip-btn--active');

//   });
// });


//projects swiper

var swiper = new Swiper(".projects__swiper", {

  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      loop: true,
    },

    993: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
      loop: true,
    },

    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      loop: true,
    }

  },
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".projects-swiper-button-next",
    prevEl: ".projects-swiper-button-prev",
  },
});

//form

let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.form', {
  colorWrong: '#d11616',
  rules: {
    name: {
      required: true
    },

    phone: {
      required: true,
      function: (name, value) => {
        const ph = phone.inputmask.unmaskedvalue();
        return Number(ph) && ph.length === 10;
      }
    },
  },
  messages: {
    name: "Вы не ввели имя",
    phone: {
      required: "Недопустимый формат",
      function: "Недопустимый формат"
    }
  },

  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
});

//map

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.613],
    zoom: 14,
    controls: []
  });


  myMap.controls

    .add('zoomControl', {
      float: 'none',
      size: 'small',
      position: {
        top: 270,
        right: 15
      }
    })

    .add('geolocationControl', {
      float: 'none',
      position: {
        top: 360,
        right: 15
      }
    });

    var myMap2 = new ymaps.Map("map2", {
      center: [55.76, 37.5975],
      zoom: 14,
      controls: []
    });

    var myMap3 = new ymaps.Map("map3", {
      center: [55.7585, 37.616],
      zoom: 14,
      controls: []
    });

  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  myMap2.behaviors.disable(['scrollZoom']);
  myMap3.behaviors.disable(['scrollZoom']);

  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.758468, 37.601088] // координаты точки
    }
  });

  var myGeoObject2 = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.758468, 37.601088] // координаты точки
    }
  });

  var myGeoObject3 = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.758468, 37.601088] // координаты точки
    }
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [123, -42]
  });

  var myPlacemark2 = new ymaps.Placemark([55.762672, 37.600522], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-45, 45]
  });

  var myPlacemark3 = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [165, -10]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
  myMap2.geoObjects.add(myPlacemark2);
  myMap3.geoObjects.add(myPlacemark3);
}


// burger
document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
  document.querySelector(".header__login").classList.add("active");
})
document.querySelector(".nav-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
  document.querySelector(".header__login").classList.remove("active");
})


document.querySelector(".burger-320").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
  document.querySelector(".header__login").classList.add("active");
})
document.querySelector(".nav-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
  document.querySelector(".header__login").classList.remove("active");
})


// form send

document.querySelector(".btn-form").addEventListener("click", function() {
  console.log('Отправлено');
});

