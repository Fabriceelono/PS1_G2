const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');
const gameOverMessage = document.querySelector('.game-over-message');
const section=document.getElementById('titleSection');

// current phrase being dragged
let selectedId;

// target phrase
let dropTargetId;

// counter for correct phrases
let matchingCounter = 0;
//count fail trias
let failCounter = 0;

addEventListeners();

function dragStart() {
    selectedId = this.id;
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(ev) {
    ev.preventDefault();
}

function dragDrop() {
    dropTargetId = this.id;

    if (checkForMatch(selectedId, dropTargetId)) {
        document.getElementById(selectedId).style.display = 'none';
        document.getElementById(dropTargetId).style.display = 'none';
        matchingCounter++;
    } else if (checkForMatch2(selectedId, dropTargetId)) {
        document.getElementById(selectedId).style.display = 'none';
        document.getElementById(dropTargetId).style.display = 'none';
        matchingCounter++;
    }else {
        // If the answer is incorrect, show a notification
        showNotification();
    }

    if (matchingCounter === 6 && failCounter > 0) {
        endMessage.style.display = 'block';
        gameOverMessage.textContent = `Game Over. Failed tries: ${failCounter} matched:${matchingCounter}`;
        gameOverMessage.style.color='white';
        gameOverMessage.style.fontSize='25px';
        gameOverMessage.style.textAlign='center';
        gameOverMessage.style.backgroundColor='#50C2F6';
        gameOverMessage.style.fontFamily='Russo One';
        section.style.display='none'
        gameOverMessage.style.top='135px';
        gameOverMessage.style.width='25%';
        gameOverMessage.style.position='fixed';
        gameOverMessage.style.padding='35px';
    }
    if (matchingCounter===6 && failCounter===0){
        endMessage.style.display = 'block';
        gameOverMessage.style.display='block';
        gameOverMessage.textContent = `You are excellent in this Field with ${failCounter} failed tries`;
        gameOverMessage.style.color='white';
        gameOverMessage.style.fontSize='25px';
        gameOverMessage.style.textAlign='center';
        gameOverMessage.style.backgroundColor='#50C2F6';
        gameOverMessage.style.fontFamily='Russo One';
        section.style.display='none'
        gameOverMessage.style.top='135px';
        gameOverMessage.style.width='25%';
        gameOverMessage.style.position='fixed';
        gameOverMessage.style.padding='35px';
    }

    this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
    switch (selected) {
        case 'e1':
            return dropTarget === 'b' ? true : false;

        case 'e2':
            return dropTarget === 'a' ? true : false;

        case 'e3':
            return dropTarget === 'f' ? true : false;

        case 'e4':
            return dropTarget === 'e' ? true : false;

        case 'e5':
            return dropTarget === 'd' ? true : false;
        case 'e6':
            return dropTarget === 'c' ? true : false;

        default:
            return false;
    }
}

function checkForMatch2(selected, dropTarget) {
    switch (selected) {
        case 'e':
            return dropTarget === 'e4' ? true : false;

        case 'b':
            return dropTarget === 'e1' ? true : false;

        case 'a':
            return dropTarget === 'e2' ? true : false;

        case 'c':
            return dropTarget === 'e6' ? true : false;

        case 'd':
            return dropTarget === 'e5' ? true : false;
        case 'f':
            return dropTarget === 'e3' ? true : false;
        default:
            return false;
    }
}

function playAgain() {
    matchingCounter = 0;
    failCounter = 0;
    section.style.display='none'
    gameOverMessage.style.display='none';
    endMessage.style.display = 'none';
    draggableListItems.forEach(item => {
        document.getElementById(item.id).style.display = 'block';
    })
}

function addEventListeners() {
    draggableListItems.forEach (item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
    })
}
// New function to display a notification when an incorrect answer is dropped
function showNotification() {
    const notification = document.createElement('div');
    notification.textContent = 'Incorrect answer. Please try again.';
    notification.classList.add('notification');
    notification.style.backgroundColor = 'red';
    notification.style.color = 'white';
    notification.style.position = 'fixed';
    notification.style.top = '0';
    notification.style.width = '100%';
    notification.style.padding = '32px';
    notification.style.textAlign = 'center';
    notification.style.opacity = '0'; // start with 0 opacity
    document.body.appendChild(notification);
    failCounter++;

    // Add a transition effect
    setTimeout(() => {
        notification.style.opacity = '1'; // gradually increase opacity
        notification.style.transition = 'opacity 0.5s ease-in-out'; // add transition effect
    }, 100);
    setTimeout(() => {
        notification.style.opacity = 0;
        notification.style.pointerEvents = 'none';
    }, 2000);

}