const card = document.querySelector('#warehouse');
const cardTest = document.querySelector('#warehouse-test');

const canvas = document.querySelector('#cardTemplate');

const h3 = canvas.content.querySelector('h3');
const img = canvas.content.querySelector('img');
const onclick = canvas.content.querySelector('section');

const l = document.querySelector('#informationStorageLocation');

const description = document.querySelector('#descriptionWindows');

const openModalWindow = description.content.querySelector('#openModalWindow');
const closeModalWindow= description.content.querySelector('#closeModalWindow');
const imgDescription = description.content.querySelector('#img');
const h3Description = description.content.querySelector('#h3');
const spanDescriptionPos = description.content.querySelector('#spanDescriptionPos');
const supportCloseModalDescription = description.content.querySelector('#supportCloseModal');
const loremPos = description.content.querySelector('#loremPos');

const spanDescription = document.querySelector('#spanDescription');

const spanDescriptionB = spanDescription.content.querySelector('b');
const spanDescriptionSpan = spanDescription.content.querySelector('span');

const button = document.querySelector('#button');

const buttonLink = button.content.querySelector('#link');
const buttonButton = button.content.querySelector('#button');

let copyCard = canvas.content.cloneNode(true);
let copyLocation = description.content.cloneNode(true);
let copyButton = button.content.cloneNode(true);
let copySpanDescription = spanDescription.content.cloneNode(true);
let idOpenModal = 0;
let classOpenModal = 0;
let pos = true;

function openModal(id) {
    document.getElementsByClassName(`modal-${id}`)[0].classList.add('active');
    document.getElementsByClassName("body")[0].classList.add('open__window');
}
function closeModal(id) {
    document.getElementsByClassName(`modal-${id}`)[0].classList.remove('active');
    document.getElementsByClassName("body")[0].classList.remove('open__window');
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

clickboard.onclick = () => {
    navigator.clipboard.writeText('ultanzastudio@gmail.com');
    successMessage.classList.add('active_copy');
    setTimeout(() => {
        successMessage.classList.remove('active_copy');
    }, 2000);
}
