const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');

// current phrase being dragged
let selectedId;

// target phrase
let dropTargetId;

// counter for correct phrases
let matchingCounter = 0;

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

    if (matchingCounter === 3) {
        endMessage.style.display = 'block';
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
            return dropTarget === 'c' ? true : false;
        default:
            return false;
    }
}

function checkForMatch2(selected, dropTarget) {
    switch (selected) {
        case 'b':
            return dropTarget === 'e1' ? true : false;

        case 'a':
            return dropTarget === 'e2' ? true : false;

        case 'c':
            return dropTarget === 'e3' ? true : false;
        default:
            return false;
    }
}

function playAgain() {
    matchingCounter = 0;
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