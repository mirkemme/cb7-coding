const root = document.querySelector("#root");
const wrapperEl = document.createElement("div");
const titleEl = document.createElement("h1");
const textEl = document.createElement("p");
const inputEl = document.createElement("input");
const btnEl = document.createElement("button");
const weatherRes = document.createElement("h3");

wrapperEl.className = "wrapper";
titleEl.textContent = "Weather";
titleEl.className = "title";
textEl.textContent = "Inserisci una città";
textEl.className = "textEl";
inputEl.type = "search";
inputEl.className = "inputSearch";
btnEl.textContent = "Cerca";
btnEl.type = "submit";

wrapperEl.append(textEl, inputEl, btnEl, weatherRes);
root.append(titleEl, wrapperEl);

const getWeatherData = async (city = null) => {
    const res = await fetch(`https://goweather.herokuapp.com/weather/${city}`,)
    const data = await res.json();

    return data;
}

inputEl.addEventListener("change", (event) => {
    weatherRes.textContent = "";
    getWeatherData(event.target.value)
        .then((content) => {
            weatherRes.textContent = content.description;
            wrapperEl.appendChild(weatherRes);
        })
})