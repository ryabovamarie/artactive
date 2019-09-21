export default function menuView() {
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
