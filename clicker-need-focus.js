// * Фнукция кликер - делает клики при полной энергии и останавливается, когда энергия доходит до 0. Необходим фокус на странице браузера, иначе функция отработает только раз.
const button = document.querySelector(".user-tap-button");
let reachedZeroEnergy = false;
function tick() {
  try {
    const energy = document.querySelector(".user-tap-energy > p");
    if (energy) {
      const energyStr = energy.innerText;
      const currEnergy = Number(energyStr.split("/")[0]);
      const maxEnergy = Number(energyStr.split("/")[1]);

      if (!reachedZeroEnergy) {
        button.dispatchEvent(new PointerEvent("pointerup"));
        button.dispatchEvent(new PointerEvent("pointerup"));
        button.dispatchEvent(new PointerEvent("pointerup"));
        button.dispatchEvent(new PointerEvent("pointerup"));
      }
      if (currEnergy <= 10) {
        reachedZeroEnergy = true;
      }
      if (currEnergy >= maxEnergy - 10) {
        reachedZeroEnergy = false;
      }
    }
  } catch (e) {
    console.log(e);
  }
  setTimeout(tick, 100 * Math.random() + 50);
}
tick();


