// --------------------------------------- our service container (tabs)
const ourServiceLink = document.querySelectorAll('.our_services_navigation_link');
const ourServiceBottomBlock = document.querySelectorAll('.our_services_bottom_block_menu');

ourServiceLink.forEach((el, i) =>
    el.addEventListener('click', function () {
        for (let j = 0; j < ourServiceLink.length; j++) {
            ourServiceLink[j].classList.remove('activated');
            ourServiceBottomBlock[j].classList.remove('activated');
        }
        ourServiceLink[i].classList.add('activated');
        ourServiceBottomBlock[i].classList.add('activated');
    }));

// --------------------------------------- our amazing work container (gallery)
// <----------------------- top tabs ----------------------->

const allBtn = document.querySelector('.all_btn');
const graphicDesignBtn = document.querySelector('.graphic_design_btn');
const graphicDesignPics = document.querySelectorAll('.graphic_design');
const webDesignBtn = document.querySelector('.web_design_btn');
const webDesignPics = document.querySelectorAll('.web_design');
const landingPageBtn = document.querySelector('.landing_page_btn');
const landingPagePics = document.querySelectorAll('.landing_page');
const wordPressBtn = document.querySelector('.wordpress_btn');
const wordPressPics = document.querySelectorAll('.wordpress');
const buttonGallery = document.querySelector('.button_gallery');
const loader = document.querySelector('.loader');
const galleryButtons = document.querySelectorAll('.our_amazing_work_navigation_link');
let ourAmazingWorkGallery = document.querySelectorAll('.our_amazing_work_gallery_img');
let ourAmazingWorkGalleryArray = [...ourAmazingWorkGallery];
let hoverImg = document.querySelectorAll('.our_amazing_work_image_hover');

function sortArray() {
    ourAmazingWorkGalleryArray = [...ourAmazingWorkGallery];
    ourAmazingWorkGalleryArray.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 12; i++) {
        ourAmazingWorkGalleryArray[i].classList.add('activated');
    }
}

sortArray();

galleryButtons.forEach(el => el.addEventListener('click', clickedBtn));

function clickedBtn(event) {
    ourAmazingWorkGallery.forEach(el => el.classList.remove('activated'));
    buttonGallery.classList.add('activated');
    galleryButtons.forEach(el => el.classList.remove('activated'));

    switch (event.currentTarget) {
        case allBtn:
            ourAmazingWorkGalleryArray = [...ourAmazingWorkGallery];
            sortArray();
            allBtn.classList.add('activated');
            buttonGallery.classList.remove('activated');
            break;
        case graphicDesignBtn:
            graphicDesignPics.forEach(el => el.classList.add('activated'));
            graphicDesignBtn.classList.add('activated');
            break;
        case webDesignBtn:
            webDesignPics.forEach(el => el.classList.add('activated'));
            webDesignBtn.classList.add('activated');
            break;
        case landingPageBtn:
            landingPagePics.forEach(el => el.classList.add('activated'));
            landingPageBtn.classList.add('activated');
            break;
        case wordPressBtn:
            wordPressPics.forEach(el => el.classList.add('activated'));
            wordPressBtn.classList.add('activated');
            break;
    }
}

// <----------------------- our amazing work gallery hover ----------------------->

let imageHoverContainer = document.querySelectorAll('.our_amazing_work_cover');
imageHoverContainer.forEach((el, i) => {
    el.addEventListener('mouseover', () => hoverImg[i].classList.add('activated'));
    el.addEventListener('mouseout', () => hoverImg[i].classList.remove('activated'));
});

// <----------------------- "load more" button ----------------------->

buttonGallery.addEventListener('click', pictureAdderShifted);

function pictureAdderShifted() {
    loader.classList.add('activated');
    buttonGallery.classList.add('activated');
    graphicDesignBtn.classList.remove('activated');
    const loadingMainGallery = setTimeout(function () {
        buttonGallery.classList.remove('activated');
        loader.classList.remove('activated');
        ourAmazingWorkGalleryArray = ourAmazingWorkGalleryArray.splice(12, ourAmazingWorkGalleryArray.length - 1);

        if (ourAmazingWorkGalleryArray.length > 11) {
            for (let i = 0; i < 12; i++) {
                ourAmazingWorkGalleryArray[i].classList.add('activated');
            }
        }
        if (ourAmazingWorkGalleryArray.length === 24) {
            buttonGallery.classList.add('activated');
        }
    }, 2000);
}

// --------------------------------------- breaking news (hover)
const breakingNewsEvent = document.querySelectorAll('.breaking_news_event');
const breakingNewsDateBox = document.querySelectorAll('.breaking_news_date_box');
const breakingNewsInnerDivText = document.querySelectorAll('.breaking_news_inner_div_text');

breakingNewsEvent.forEach((el, i) => {
    el.addEventListener('mouseover', () => {
        breakingNewsDateBox[i].classList.add('activated');
        breakingNewsInnerDivText[i].classList.add('activated');
    });
    el.addEventListener('mouseout', () => {
        breakingNewsDateBox[i].classList.remove('activated');
        breakingNewsInnerDivText[i].classList.remove('activated');
    })
});

// --------------------------------------- what people say about the hum (carousel)
const feedbackMainContainer = document.querySelector('.feedback_container');
const commentsContainer = document.querySelectorAll('.comments_container');
const avatarsArray = ["images/feedback/1.jpg", "images/feedback/2.jpg", "images/feedback/3.jpg", "images/feedback/4.jpg"];

const carouselMainContainer = document.createElement('div');
carouselMainContainer.classList.add('carousel_main_container');
feedbackMainContainer.append(carouselMainContainer);

const carouselControlContainer = document.createElement('div');
carouselControlContainer.classList.add('carousel_control_container');
carouselMainContainer.append(carouselControlContainer);

const previousImgBtn = document.createElement('p');
previousImgBtn.classList.add('move_button');
previousImgBtn.innerText = "<";
carouselControlContainer.append(previousImgBtn);

const nextImgBtn = document.createElement('p');
nextImgBtn.classList.add('move_button');
nextImgBtn.innerText = ">";
carouselControlContainer.append(nextImgBtn);

const newArrayListImage = [];

let imgCounter = 0;

let avatarBigImage = document.createElement('img');
avatarBigImage.classList.add('avatar_big_img');
avatarBigImage.src = avatarsArray[imgCounter];
carouselControlContainer.before(avatarBigImage);

avatarsArray.forEach(el => imgCreating(el));

function imgCreating(el) {
    let avatarSmallImg = document.createElement('img');
    avatarSmallImg.classList.add('avatar_image');
    avatarSmallImg.src = el;
    nextImgBtn.before(avatarSmallImg);
    newArrayListImage.push(avatarSmallImg);
}

newArrayListImage[imgCounter].classList.add('activated');

nextImgBtn.addEventListener('click', () => {
    if (imgCounter >= newArrayListImage.length - 1) {
        imgCounter = 0;
        newArrayListImage.forEach(el => el.classList.remove('activated'));
        commentsContainer.forEach(el => el.classList.remove('activated'));
        newArrayListImage[imgCounter].classList.add('activated');
        commentsContainer[imgCounter].classList.add('activated');
    } else {
        imgCounter++;
        newArrayListImage.forEach(el => el.classList.remove('activated'));
        commentsContainer.forEach(el => el.classList.remove('activated'));
        newArrayListImage[imgCounter].classList.add('activated');
        commentsContainer[imgCounter].classList.add('activated');
    }
    avatarImg(imgCounter);
});

previousImgBtn.addEventListener('click', () => {
    if (imgCounter <= 0) {
        imgCounter = newArrayListImage.length - 1;
        newArrayListImage.forEach(el => el.classList.remove('activated'));
        commentsContainer.forEach(el => el.classList.remove('activated'));
        newArrayListImage[imgCounter].classList.add('activated');
        commentsContainer[imgCounter].classList.add('activated');
    } else {
        imgCounter--;
        newArrayListImage.forEach(el => el.classList.remove('activated'));
        commentsContainer.forEach(el => el.classList.remove('activated'));
        newArrayListImage[imgCounter].classList.add('activated');
        commentsContainer[imgCounter].classList.add('activated');
    }
    avatarImg(imgCounter);
});

function avatarImg(imgCounter) {
    avatarBigImage.remove();
    avatarBigImage = document.createElement('img');
    avatarBigImage.classList.add('avatar_big_img');
    avatarBigImage.src = avatarsArray[imgCounter];
    carouselControlContainer.before(avatarBigImage);
}

newArrayListImage.forEach((el, i) => el.addEventListener('click', () => {
    newArrayListImage.forEach(el => el.classList.remove('activated'));
    commentsContainer.forEach(el => el.classList.remove('activated'));
    newArrayListImage[i].classList.add('activated');
    commentsContainer[i].classList.add('activated');
    addAvatarBigImgByClick(i);
}));

function addAvatarBigImgByClick(i) {
    avatarBigImage.remove();
    avatarBigImage = document.createElement('img');
    avatarBigImage.classList.add('avatar_big_img');
    avatarBigImage.src = avatarsArray[i];
    carouselControlContainer.before(avatarBigImage);
    imgCounter = i;
    return imgCounter;
}

// --------------------------------------- gallery of best images (Masonry image adder)

const addButton = document.querySelector('.button_gallery.bottom_container');
const bottomLoader = document.querySelector('.loader_bottom');
const galleryOfBestImagesAdditionalImages = document.querySelectorAll('.gallery_of_best_images_image.additional');
let galleryOfBestImagesAdditionalImagesArray = [...galleryOfBestImagesAdditionalImages];

addButton.addEventListener('click', bestGalleryOnClickImgAdder);

function bestGalleryOnClickImgAdder() {
    bottomLoader.classList.add('activated');
    addButton.classList.add('activated');
    let loadingBestGallery = setTimeout(() => {
        for (let i = 0; i < 6; i++) {
            galleryOfBestImagesAdditionalImagesArray[i].classList.add('activated');
        }
        galleryOfBestImagesAdditionalImagesArray = galleryOfBestImagesAdditionalImagesArray.splice(6, galleryOfBestImagesAdditionalImagesArray.length - 1);
        bottomLoader.classList.remove('activated');
        addButton.classList.remove('activated');
        if (galleryOfBestImagesAdditionalImagesArray.length < 5) {
            bottomLoader.classList.remove('activated');
            addButton.classList.add('activated');
        }
        masonryWithImagesLoaded();
    }, 2000);
}

// <----------------------- our amazing work gallery hover ----------------------->
const ourAmazingGalleryImagesHover = document.querySelectorAll('.gallery_of_best_images_image_hover');
const ourAmazingGalleryImages = document.querySelectorAll('.gallery_of_best_images_image');
ourAmazingGalleryImages.forEach((el, i) => {
    el.addEventListener('mouseover', () => ourAmazingGalleryImagesHover[i].classList.add('activated'));
    el.addEventListener('mouseout', () => ourAmazingGalleryImagesHover[i].classList.remove('activated'));
});


// --------------------------------------- masonry plugin

function masonryStarter() {
    let elem = document.querySelector('.gallery_of_best_images_container');
    let msnry = new Masonry(elem, {
        // options
        itemSelector: '.gallery_of_best_images_image',
        columnWidth: 15,
        gutter: 17
    })
}

function masonryWithImagesLoaded() {
    imagesLoaded(document.querySelector('.gallery_of_best_images_container'), () => masonryStarter());
}

masonryWithImagesLoaded();

// --------------------------------------- button up
const upButton = document.querySelector('.button_up');
upButton.hidden = (pageYOffset === 0);

window.addEventListener('scroll', () =>
    upButton.hidden = (pageYOffset < document.documentElement.clientHeight));

upButton.addEventListener('click', () => {
    window.scrollTo(pageXOffset, 0)
});
