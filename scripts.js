// Variables
const companyBtn = document.querySelector('#companyBtn'),
daModal = document.querySelector('#daModal'),
close = document.querySelector('.close'),
companyModalContent = document.querySelector('#companyModalContent'),
productModal = document.querySelector('#productModal'),
productBtn = document.querySelector('#productBtn'),
closeProduct = document.querySelector('.close-product'),
locationModal = document.querySelector('#locationModal'),
locationBtn = document.querySelector('#locationBtn'),
closeLocation = document.querySelector('.closeLocation'),
storyBtn = document.querySelector('#storyBtn'),
storyModal = document.querySelector('#storyModal'),
closeStory = document.querySelector('.closeStory')



// Our Company Modal Logic
companyBtn.onclick = function() {
    daModal.style.display = 'block';
};

close.onclick = function() {
    daModal.style.display = 'none';
};

daModal.onclick = function() {
        daModal.style.display = 'none';
};

// Our Product Modal Logic
productBtn.onclick = function() {
    productModal.style.display = 'block';
};

closeProduct.onclick = function() {
    productModal.style.display = 'none';
};

productModal.onclick = function() {
    productModal.style.display = 'none';
};

//Our Location Modal Logic
locationBtn.onclick = function() {
    locationModal.style.display = 'block';
};

closeLocation.onclick = function() {
    locationModal.style.display = 'none';
};

locationModal.onclick = function() {
    locationModal.style.display = 'none';
};

// Our Story Modal Logic
storyBtn.onclick = function() {
    storyModal.style.display = 'block';
};

closeStory.onclick = function() {
    storyModal.style.display = 'none';
};

storyModal.onclick = function() {
    storyModal.style.display = 'none';
};

















