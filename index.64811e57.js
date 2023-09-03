const t=document.getElementById("switch");document.getElementById("content"),t.addEventListener("change",// Функция для переключения темы
function(){// Проверяем текущую тему
let t=document.body.classList.contains("dark")?"dark":"light";"light"===t?(document.body.classList.remove("light"),document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),document.body.classList.add("light"),localStorage.setItem("theme","light"));// Переключаем тему для header
let e=document.querySelector("header");e&&(e.classList.toggle("light","dark"===t),e.classList.toggle("dark","light"===t))});// Проверяем localStorage при загрузке страницы и устанавливаем тему
const e=localStorage.getItem("theme");if(e){document.body.classList.add(e),"dark"===e&&(t.checked=!0);// Устанавливаем тему для header при загрузке страницы
let d=document.querySelector("header");d&&(d.classList.toggle("light","light"===e),d.classList.toggle("dark","dark"===e))}//# sourceMappingURL=index.64811e57.js.map

//# sourceMappingURL=index.64811e57.js.map
