const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const stepsEl = document.querySelectorAll(".step");

const progressBarEl = document.querySelector(".progress-bar-front");

let currentChecked = 0;

nextBtn.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsEl.length) {
    currentChecked = stepsEl.length;
  }

  updateStepProgress();
});

prevBtn.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

const updateStepProgress = () => {
  stepsEl.forEach((step, index) => {
    if (index < currentChecked) {
      step.classList.add("checked");
      step.innerHTML = `<i class="fa-solid fa-check"></i> <small>${
        index === 0
          ? "Start"
          : index === stepsEl.length - 1
          ? "Finish"
          : "Step " + (index + 1)
      }</small>`;
    } else {
      step.classList.remove("checked");
      step.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressBarEl.style.width = `${
    ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100
  }%`;

  if (currentChecked === 1) {
    prevBtn.disabled = true;
  } else if (currentChecked === stepsEl.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};
