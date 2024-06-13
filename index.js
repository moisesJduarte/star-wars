document.getElementById('loadCharacter').addEventListener('click', loadCharacter);

async function loadCharacter() {
    const randomNumber = Math.ceil(Math.random() * 83); // Generate a random number between 1 and 83
    try {
        const response = await fetch(`https://swapi.dev/api/people/${randomNumber}/`);
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const character = await response.json();
        displayCharacter(character);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayCharacter(character) {
    const container = document.getElementById('characterContainer');
    container.innerHTML = ''; // Clear previous content

    const characterCard = document.createElement('div');
    characterCard.classList.add('character-card');

    const characterName = document.createElement('h2');
    characterName.textContent = character.name;

    const characterHeight = document.createElement('p');
    characterHeight.textContent = `Height: ${character.height} cm`;

    const characterMass = document.createElement('p');
    characterMass.textContent = `Mass: ${character.mass} kg`;

    const characterGender = document.createElement('p');
    characterGender.textContent = `Gender: ${character.gender}`;

    characterCard.appendChild(characterName);
    characterCard.appendChild(characterHeight);
    characterCard.appendChild(characterMass);
    characterCard.appendChild(characterGender);

    container.appendChild(characterCard);
}
