const filmUrl = "https://swapi.dev/api/films/1/";
const starshipUrl = "https://swapi.dev/api/starships/9/";

async function makeRequest(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
}

async function getFilms() {
  try {
    const filmResponse = await makeRequest(filmUrl);
    const films = filmResponse.results;

    const planetRequests = [];

    for (let film of films) {
      const planets = film.planets;
      for (let planetUrl of planets) {
        planetRequests.push(makeRequest(planetUrl));
      }
    }

    const planetResponses = await Promise.all(planetRequests);

    for (let response of planetResponses) {
      console.log(response.name);
    }

  } catch (error) {

    const starshipResponse = await makeRequest(starshipUrl);
    console.log(`"${starshipResponse.name}" все уничтожил`);
  }
}

getFilms();