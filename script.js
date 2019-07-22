const url = "https://dii-test.s3.amazonaws.com/players.json"

//Stores all api data from fetch
let data;
//Stores all states
let stateList = [];
//Stores all ages
let ageRange = [];

function getData() {
    fetch(url)
        .then(response => {
            //Converts the data into JSON
            return response.json();
        })
        .then(response => {
            data = response;
            return data;
        })
        .then(data => {
            //To render the total number of players
            let numPlayers = 0;

            data.forEach(player => {
                numPlayers++;

                renderPlayer(player);

                //Get all state values into array
                if (stateList.indexOf(player.state) === -1) {
                    stateList.push(player.state);
                }
                //Get all age values into array
                if (ageRange.indexOf(player.age) === -1) {
                    ageRange.push(player.age);
                }
            });
            
            document.getElementById('total-display').textContent = numPlayers > 1 ? `Total: ${numPlayers} players` : `Total: ${numPlayers} player`;
        
            appendStates();
            setMinMaxAge();
            applyColor();
        })
        .catch(error => {
            console.log(error)
        })
}
getData();


function renderPlayer(player) {
    let playerDiv = document.createElement('div');
    playerDiv.setAttribute('class', 'player');
    playerDiv.setAttribute('id', player.name);

    let nameSpan = document.createElement('span');
    nameSpan.textContent = player.name;
    nameSpan.setAttribute('class', 'name');

    let ageSpan = document.createElement('span');
    ageSpan.textContent = player.age;
    ageSpan.setAttribute('class', 'age');

    let stateSpan = document.createElement('span');
    stateSpan.textContent = player.state;
    stateSpan.setAttribute('class', 'state');

    let genderSpan = document.createElement('span');
    genderSpan.textContent = player.gender;
    genderSpan.setAttribute('class', 'gender');

    let statusSpan = document.createElement('span');
    statusSpan.setAttribute('class', 'status');
    statusSpan.textContent = player.status;

    playerDiv.appendChild(nameSpan);
    playerDiv.appendChild(ageSpan);
    playerDiv.appendChild(stateSpan);
    playerDiv.appendChild(genderSpan);
    playerDiv.appendChild(statusSpan);
    document.getElementById('players-wrapper').appendChild(playerDiv);
}

function appendStates() {
    //Each state is appended as a select element to the dropdown
    let statesDropdown = document.getElementById('states-dropdown');
    stateList.sort().forEach(state => {
        let stateSelect = document.createElement('option');
        stateSelect.textContent = state;
        statesDropdown.appendChild(stateSelect);
    })
}

function setMinMaxAge() {
    //For each select element in the dropdown
    let minAge = Math.min(...ageRange);
    let maxAge = Math.max(...ageRange);
    minInput.setAttribute('min', minAge);
    minInput.setAttribute('max', maxAge);
    maxInput.setAttribute('min', minAge);
    maxInput.setAttribute('max', maxAge);
    minInput.value = minAge;
    maxInput.value = maxAge;

    //Default filter values
    filterValues.minAgeValue = minAge;
    filterValues.maxAgeValue = maxAge;
}

//Runs when filtering to clear previous search
function clearList() {
    let players = document.querySelectorAll('.player');
    if (players.length > 0) {
        players.forEach(player => {
            player.remove();
        })
    }
}



//Keeps track of what values to use for filtering
const filterValues = {
    minAgeValue: 0,
    maxAgeValue: 100,
    genderValue: ['male', 'female'],
    statusValue: ['active', 'inactive'],
    stateValue: stateList,
}

//Multiple criteria filtering
function filterData() {
    clearList();
    let numPlayers = 0;
    
    data.forEach(player => {
        if (player.age >= filterValues.minAgeValue && player.age <= filterValues.maxAgeValue &&
            filterValues.genderValue.indexOf(player.gender.toLowerCase()) != -1 &&
            filterValues.stateValue.indexOf(player.state.toUpperCase()) != -1 &&
            filterValues.statusValue.indexOf(player.status.toLowerCase()) != -1) {

            numPlayers++;
            
            renderPlayer(player);
        }
    })
    
    document.getElementById('total-display').textContent = numPlayers > 1 ? `Total: ${numPlayers} players` : `Total: ${numPlayers} player`;
    applyColor();
}

function applyFilter(category, value) {
    filterValues[category] = value;
    filterData();
}


///***Event Listeners for filters***///
let minInput = document.getElementById('min-age-input');
let maxInput = document.getElementById('max-age-input');
minInput.addEventListener('change', (event) => {
    let minAge = parseInt(event.target.value)
    applyFilter('minAgeValue', minAge);
})
maxInput.addEventListener('change', (event) => {
    let maxAge = parseInt(event.target.value)
    applyFilter('maxAgeValue', maxAge);
})

//Needed to use 'change' for dropdowns because 'click' does not work on Chrome
document.getElementById('states-dropdown').addEventListener('change', (event) => {
    let stateName = event.target.value;
    //For when 'All' is selected
    if (!stateName) {
        stateName = stateList;
    }
    applyFilter('stateValue', stateName);
})

document.getElementById('gender-dropdown').addEventListener('change', (event) => {
    let gender = event.target.value;
    switch (gender) {
        case 'M':
            gender = ['male'];
            break;
        case 'F':
            gender = ['female'];
            break;
        default:
            gender = ['male', 'female'];
    }
    applyFilter('genderValue', gender);
})

document.getElementById('status-dropdown').addEventListener('change', (event) => {
    let status = event.target.value;
    switch (status) {
        case 'A':
            status = ['active'];
            break;
        case 'I':
            status = ['inactive'];
            break;
        default:
            status = ['active', 'inactive'];
    }
    applyFilter('statusValue', status);
})


///***Functions for buttons***///
function clearFilters() {
    let selectElements = document.getElementsByTagName('select');
    for (let i = 0; i < selectElements.length; i++) {
        selectElements[i].selectedIndex = 0;
    }
    //Set to default values
    minInput.value = Math.min(...ageRange);
    maxInput.value = Math.max(...ageRange);
    filterValues.minAgeValue = Math.min(...ageRange);
    filterValues.maxAgeValue = Math.max(...ageRange);
    filterValues.genderValue = ['male', 'female'];
    filterValues.statusValue = ['active', 'inactive'];
    filterValues.stateValue = stateList;
    filterData();
}
document.getElementById('clear-button').addEventListener('click', () => {
    clearFilters();
})

function editInfo() {
    //Prevent user from filtering while editing
    document.getElementById('filters-wrapper').style.pointerEvents = 'none';
    document.getElementById("save-btn").style.pointerEvents = "auto";
    document.getElementById("save-btn").style.filter = 'brightness(100%)';

    document.getElementById("edit-btn").style.display = "none";
    document.getElementById("cancel-btn").style.display = "inline-block";

    //Select all spans and make editable
    let spanList = document.querySelectorAll('span');
    spanList.forEach(span => {
        span.setAttribute("contenteditable", true);
        span.classList.add("border");

    })
}

function cancelEdits() {
    document.getElementById('filters-wrapper').style.pointerEvents = 'auto';
    document.getElementById("save-btn").style.pointerEvents = "none";
    document.getElementById("save-btn").style.filter = 'brightness(80%)';

    document.getElementById("edit-btn").style.display = "inline-block";
    document.getElementById("cancel-btn").style.display = "none";

    //Remove editing on spans
    let spanList = document.querySelectorAll('span');
    spanList.forEach(span => {
        span.setAttribute("contenteditable", false);
        span.classList.remove("border");
    })
    //To reset any edits
    filterData();
}

function saveEdits() {
    let spanList = document.querySelectorAll('span');

    spanList.forEach(span => {
        span.setAttribute("contenteditable", false);
        span.classList.remove("border");
    })

    let playerDivs = document.querySelectorAll('.player');

    playerDivs.forEach(div => {
        data.forEach(playerObj => {
            if (div.id === playerObj.name) {

                //Get the spans of the plaer and update the matching property in playerObj
                let childSpans = div.getElementsByTagName('span');

                for (let i = 0; i < childSpans.length; i++) {
                    let criteria = childSpans[i].getAttribute('class');
                    
                    for (let property in playerObj) {
                        //Matches each span with correct property in playerObj, only updates if edited
                        if (playerObj.hasOwnProperty(property) && criteria === property &&
                            playerObj[property] != childSpans[i].textContent) {
                            
                            playerObj[property] = childSpans[i].textContent;
                        }
                    }
                }
            }
        })
    })
    document.getElementById("save-btn").style.pointerEvents = "none";
    document.getElementById("save-btn").style.filter = 'brightness(80%)';
    document.getElementById("cancel-btn").style.display = "none";
    document.getElementById("edit-btn").style.display = "inline-block";
    
    //Re-enable filters since editing is done
    document.getElementById('filters-wrapper').style.pointerEvents = 'auto';
}

document.getElementById('edit-btn').addEventListener('click', () => {
    editInfo();
})
document.getElementById('cancel-btn').addEventListener('click', () => {
    cancelEdits();
})
document.getElementById('save-btn').addEventListener('click', () => {
    saveEdits();
})


//Colors each player div based on even/odd index
function applyColor() {
    let playerDivs = document.querySelectorAll('.player')
    playerDivs.forEach((div, index) => {
        if (index % 2 === 0) {
            div.classList.add('even-player');
        } else {
            div.classList.add('odd-player');
        }
    })
}