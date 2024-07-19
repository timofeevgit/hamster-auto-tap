// * Клик каждую секунду. Более простая версия кликера. Фокус на странице не нужен, можно оставить и уйти. Энергия не дойдет до 0.
const button = document.querySelector(".user-tap-button");
function click() {
  button.dispatchEvent(new PointerEvent('pointerup'))
}

setInterval(click, 1000);