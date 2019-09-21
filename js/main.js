(function () {
  'use strict';

  function menuView() {
    const toggle = document.querySelector(`.page-header__toggle`);
    const wrapper = document.querySelector(`.page-header__wrapper`);
    const container = document.querySelector(`.page-header__container`);
    const nav = document.querySelector(`.page-header__nav`);
    const phone = document.querySelector(`.page-header__phone`);

    toggle.onclick = () => {
      if (toggle.classList.contains(`page-header__toggle--opened`)) {
        toggle.blur();
        toggle.classList.remove(`page-header__toggle--opened`);
        wrapper.classList.remove(`page-header__wrapper--opened`);
        container.classList.remove(`page-header__container--opened`);
        nav.classList.add(`page-header__nav--hide`);
        phone.classList.add(`page-header__phone--hide`);
        document.body.style.overflow = ``;
      } else {
        toggle.blur();
        toggle.classList.add(`page-header__toggle--opened`);
        wrapper.classList.add(`page-header__wrapper--opened`);
        container.classList.add(`page-header__container--opened`);
        nav.classList.remove(`page-header__nav--hide`);
        phone.classList.remove(`page-header__phone--hide`);
        document.body.style.overflow = `hidden`;
      }
    };
  }

  function mapView() {
    ymaps.ready(() => {
      const myMap = new ymaps.Map(`map`, {
        center: [57.65844623, 39.84603316],
        zoom: 16
      });

      const myPlacemark = new ymaps.Placemark([57.657124, 39.845861], {}, {
        iconLayout: `default#image`,
        iconImageHref: `img/placemarker.svg`,
        iconImageSize: [25, 38],
        iconImageOffset: [-12, -38]
      });
      myMap.geoObjects.add(myPlacemark);

      window.onresize = () => {
        if (document.documentElement.clientWidth >= 750) {
          myMap.setCenter([57.65691518, 39.84079996]);
        } else {
          myMap.setCenter([57.65844623, 39.84603316]);
        }
      };
    });
  }

  menuView();
  mapView();

}());

//# sourceMappingURL=main.js.map
