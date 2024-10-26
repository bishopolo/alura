const $ = (element: string) => document.querySelector(element);
const $$ = (element: string) => document.querySelectorAll(element);
const buttons = $$(".btn");
const textTime = $("#time") as HTMLParagraphElement;
const btnStartTimer = $(".btnStart");
const input = $(".input") as HTMLInputElement;
const sectionFreeTimer = $(".freeTimer") as HTMLElement;
const form = $(".form") as HTMLFormElement;
const html = $("html") as HTMLHtmlElement;
const img = $(".img") as HTMLImageElement;
const title = $(".title") as HTMLParagraphElement;
const figure = $(".figure") as HTMLElement;
const shapes = $(".shapes") as HTMLDivElement;

let timeInSeconds = 5 * 60;
let intervalId = 0;
// console.log(button);
const data: Record<string, object> = {
  easy: {
    text: `Optimiza tu productividad, <strong>sumérgete en lo que importa.</strong>`,
    img: "https://raw.githubusercontent.com/alura-es-cursos/2049-FokusCurso/refs/heads/aula5/imagenes/enfoque.png",
  },
  medium: {
    text: `¿Qué tal tomar un respiro?<strong> ¡Haz una pausa corta!</strong>`,
    img: "https://raw.githubusercontent.com/alura-es-cursos/2049-FokusCurso/refs/heads/aula5/imagenes/descanso-largo.png",
  },
  hard: {
    text: `Hora de volver a la superficie <strong> Haz una pausa larga.</strong>`,
    img: "https://raw.githubusercontent.com/alura-es-cursos/2049-FokusCurso/refs/heads/aula5/imagenes/descanso-corto.png",
  },
  free: {
    text: "!Ahora tú tienes el control,<strong> decide cuando terminas!<strong>",
  },
};

document.addEventListener("click", (e) => {
  const self = e.target as Element;
  if (self.matches(".btn")) {
    sectionFreeTimer.style.display = "none";
    shapes.style.display = "none";
    figure.style.display = "block";
    buttons.forEach((btn) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    });

    // to stop the timer when change among buttons
    removeInterval();
    btnStartTimer!.textContent = "start";

    if (self.matches("#easy")) {
      setClassName(self, "active");
      let time = getDataAtribute(self as HTMLElement, "minutes");
      timeInSeconds = +time! * 60;
      showTime();
      // console.log(typeof timeInSeconds);
      html.setAttribute("data-focus", "easy");
      title.innerHTML = data.easy.text;
      img.src = data.easy.img;
    }

    if (self.matches("#medium")) {
      setClassName(self, "active");
      let time = getDataAtribute(self as HTMLElement, "minutes");
      timeInSeconds = +time! * 60;
      // console.log(time);
      showTime();
      html.setAttribute("data-focus", "medium");
      title.innerHTML = data.medium.text;
      img.src = data.medium.img;
    }
    if (self.matches("#hard")) {
      setClassName(self, "active");
      let time = getDataAtribute(self as HTMLElement, "minutes");
      timeInSeconds = +time! * 60;
      showTime();
      // console.log(time);
      html.setAttribute("data-focus", "hard");
      title.innerHTML = data.hard.text;
      img.src = data.hard.img;
    }

    if (self.matches("#free")) {
      setClassName(self, "active");
      let time = getDataAtribute(self as HTMLElement, "minutes");
      timeInSeconds = +time! * 0;
      showTime();
      sectionFreeTimer.style.display = "flex";
      title.innerHTML = data.free.text;
      figure.style.display = "none";
      shapes.style.display = "grid";
    }
  }

  if (self.matches(".btnStart")) {
    if (timeInSeconds === 0) {
      let currentElement = $(".active") as HTMLButtonElement;
      let time = getDataAtribute(currentElement, "minutes");
      timeInSeconds = +time! * 60;
      self.textContent = "pause";
    }

    if (!intervalId) {
      self.textContent = "pause";
      intervalId = setInterval(interval, 1000);
    } else {
      removeInterval();
      self.textContent = "start";
    }
  }

  if (self.matches(".btnRestart")) {
    let currentElement = $(".active") as HTMLButtonElement;
    let time = getDataAtribute(currentElement, "minutes");
    timeInSeconds = +time! * 60;
    const btnStart = $(".btnStart")!;
    removeInterval();
    btnStart.textContent = "start";
    showTime();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = input.value;

  if (!value || value.length > 2 || +value > 59) {
    alert("the timer only accept values betwen 1 and 59");
  } else {
    $("#free")!.classList.add("active");
    let currentElement = $(".active") as HTMLButtonElement;
    let minutesInput = input.value;
    currentElement.setAttribute("data-minutes", minutesInput);
    let time = getDataAtribute($("#free") as HTMLButtonElement, "minutes");
    timeInSeconds = +time! * 60;
    form.reset();
    showTime();
  }
});

function setClassName(element: Element, className: string) {
  element.classList.add(className);
}

function getDataAtribute(element: HTMLElement, value: string) {
  return element.dataset[value];
}

function interval() {
  if (timeInSeconds > 0) {
    timeInSeconds -= 1;
    showTime();
  } else {
    removeInterval();
    btnStartTimer!.textContent = "restart";
    return;
  }
}

function showTime() {
  let date = new Date(timeInSeconds * 1000);
  let time = date.toLocaleTimeString("es-ES", {
    minute: "2-digit",
    second: "2-digit",
  });

  textTime.textContent = time;
}

function removeInterval() {
  clearInterval(intervalId);
  intervalId = 0;
}

showTime();
