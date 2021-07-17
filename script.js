const charactersButtonsDiv = document.querySelector('#characters-buttons');
const charactersDiv = document.querySelector('#characters');
const addButton = document.querySelector('#add-character');
const API_KEY = 'WVhsJQJWD74sFtgKBR0iwCYlMlVQs78H';
const spongebobCharacters = ['Spongebob Squarepants', 'Patrick Star', 'Squidward', 'Mr Krabs', 
                            'Plankton', 'Sandy Cheeks', 'Larry the lobster', 
                            'Mermaid Man', 'Barnacle Boy'];

const addCharacterButton = () => {
    const character = document.querySelector('#character-input').value;
    let characterID = character.split(' ').join('-').toLowerCase();
    charactersButtonsDiv.innerHTML += `<button id="${characterID}" onclick="getButtonValue('${characterID}')">${character}</button>`
}
 
const getGIFs = async (character) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${character}&api_key=${API_KEY}&limit=10`;
    const response = await fetch(URL);
    const characterGIFs = await response.json();
    return characterGIFs;
}

const changeDataState = (element) => {
    if (element.getAttribute('data-state') === 'still') {
        element.setAttribute('data-state', 'animate')
        element.setAttribute('src', element.getAttribute('data-animate'))  
    } else {
        element.setAttribute('data-state', 'still')
        element.setAttribute('src', element.getAttribute('data-still'))   
    }
}

const addCharacterGIFs = async (character) => {
    const characterGIFs = await getGIFs(character);
    // characterGIFs.data.forEach(item => console.log(item))
    characterGIFs.data.forEach(item => {
        charactersDiv.innerHTML += `
                                    <div class="gif-item">
                                        <p>Rating: ${item.rating}</p>
                                        <img 
                                            src="${item.images.fixed_height_still.url}"
                                            class="character-image"
                                            data-still="${item.images.fixed_height_still.url}"
                                            data-animate="${item.images.fixed_height.url}"
                                            data-state="still"
                                            onclick="changeDataState(this)"
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

    charactersButtonsDiv.innerHTML += `<button id="${characterID}" onclick="getButtonValue('${characterID}')">${character}</button>`;
})
