const charactersButtonsDiv = document.querySelector('#characters-buttons');
const charactersDiv = document.querySelector('#characters');
const API_KEY = 'WVhsJQJWD74sFtgKBR0iwCYlMlVQs78H';
// const URL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=PU9MVKA0tF1Zuu50yJAY3mumUmTGZxy1&limit=10";
const spongebobCharacters = ['Spongebob', 'Patrick Star', 'Squidward', 'Mr Krabs', 
                            'Plankton', 'Sandy Cheeks', 'Larry the lobster', 
                            'Mermaid Man', 'Barnacle Boy'];

const getGIFs = async (character) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${character}&api_key=${API_KEY}&limit=10`;
    const response = await fetch(URL);
    const characterGIFs = await response.json();
    return characterGIFs;
}

const addCharacterGIFs = async (character) => {
    const characterGIFs = await getGIFs(character);
    // characterGIFs.data.forEach(item => console.log(item))
    characterGIFs.data.forEach(item => {
        charactersDiv.innerHTML += `
                                    <div class="gif-item">
                                        <p>${item.rating}</p>
                                        <img 
                                            src="${item.images.fixed_height_still.url}"
                                            class="character-image"
                                            data-still="${item.images.fixed_height_still.url}"
                                            data-animte="${item.images.fixed_height.url}"
                                            data-state="still"
                                        >
                                    </div>
        `
    })
    
}

const getButtonValue = (characterID) => {
    const character = document.querySelector(`#${characterID}`).innerHTML;
    addCharacterGIFs(character);
}



spongebobCharacters.forEach(character => {
    let characterID = character.split(' ').join('-').toLowerCase();

    charactersButtonsDiv.innerHTML += `<button id="${characterID}" onclick="getButtonValue('${characterID}')">${character}</button>`
})
