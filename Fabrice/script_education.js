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
    }

    if (matchingCounter === 6) {
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