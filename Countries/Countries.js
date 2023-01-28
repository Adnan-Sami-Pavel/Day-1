const countries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => allCountries(data));
};

const allCountries = (countriesArray) => {
  console.log(countriesArray[0]);
  const country = countriesArray.map((country) => countryName(country));
  const printCountry = document.getElementById("countries");
  printCountry.innerHTML = country.join(" ");
};

const countryName = (name) => {
  return `
    <div class="country">
        <img src="${name.flags.png}" >
        <h2>${name.name.common}</h2>
        <h3>${name.capital}</h3>
        <h3>${name.continents}</h3>
    </div>
    `;
};

countries();
