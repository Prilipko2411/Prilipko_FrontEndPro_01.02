const apiUrl = "https://swapi.dev/api/people/";
let characters = [];


async function fetchCharacters(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    characters = characters.concat(data.results);

    if (data.next) {
      await fetchCharacters(data.next);
    } else {
      displayCharacters();
    }
  } catch (error) {
    console.log("Произошла ошибка при получении данных:", error);
  }
}

function displayCharacters() {
  const filteredCharacters = characters.map((character) => {
    const { name, mass, height, gender, films } = character;
    return { name, mass, height, gender, films };
  }).filter((character) => character.films.length > 3);

  filteredCharacters.forEach((character) => {
    console.log("Имя:", character.name);
    console.log("Масса:", character.mass);
    console.log("Рост:", character.height);
    console.log("Пол:", character.gender);
    console.log("Фильмы:", character.films);
    console.log("--------------------------------------");
  });
}

fetchCharacters(apiUrl);

// очень много копипаста, нереально долго сидела над этим всем; не знаю gнасколько правильно(((