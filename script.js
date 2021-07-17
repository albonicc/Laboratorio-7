const charactersDiv = document.querySelector('#characters');
const API_KEY = 'WVhsJQJWD74sFtgKBR0iwCYlMlVQs78H';
// const URL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=PU9MVKA0tF1Zuu50yJAY3mumUmTGZxy1&limit=10";
const spongebobCharacters = ['Spongebob', 'Patrick Star', 'Squidward', 'Mr Krabs',         'Plankton', 'Sandy Cheeks', 'Larry the lobster', 'Mermaid Man', 'Barnacle Boy'];

const getGIFs = async (character) => {
    let URL = `https://api.giphy.com/v1/gifs/search?q=${character}&api_key=${API_KEY}&limit=10`;

    response = await fetch(URL);
    console.log(response);
}

const getButtonValue = (characterID) => {
    const character = document.querySelector(`#${characterID}`).innerHTML;

    alert(character)
}



spongebobCharacters.forEach(character => {
    let characterID = character.split(' ').join('-').toLowerCase();

    charactersDiv.innerHTML += `<button id="${characterID}" onclick="getButtonValue('${characterID}')">${character}</button>`
})
