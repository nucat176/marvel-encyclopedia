export const fetchCharacter = (id, success, error) => {
  $.ajax({
    type: "GET",
    url: `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=6eb0cc95d26564f272ab91b35d67b7b8`,
    success,
    error
  });
};

export const searchCharacter = (query, success, error) => {
  $.ajax({
    type: "GET",
    url: `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=6eb0cc95d26564f272ab91b35d67b7b8`,
    success,
    error
  });
}
