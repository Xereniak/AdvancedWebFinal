var pageImg = [
    "image__title",
    "image__zaikuon-arrives00",
    "image__zaikuon-arrives01"
];
var pageCount = 2;
var transitionSpeed = 1000;
var textArray = [
    "",
    "Zaiku poo",
    "dooooooooooo",
    "Help someone trapped me inside this visual novel text adventure game"
]
var buttons = [
    `<div id="start-button" class="start-button site-container--button centered">An ominous presence decends...</div><div id="volume-control" class="volume-control site-container--button top-left">V</div><div id="chapter-select" class="chapter-select site-container--button bottom-left">Chapter Select</div><div id="gallery" class="gallery site-container--button bottom-right">Gallery</div>`,
    `<div id="text-window" class="text-window bottom-center"><p id="text"></p></div><div id="skip-button" class="skip-button site-container--button bottom-right">-></div>`
];
var pageButtons;
buttonCheck();
function buttonCheck() {
    if (pageCount == 0) {
        pageButtons = 0
    } else if (pageCount > 0 < 5) {
        pageButtons = 1
    };
};
var imgCount;
imgCheck(0);
function imgCheck(a) {
    pageCount += a;
    if (pageCount == 0) {
        imgCount = 0
    } else if (pageCount > 0 && pageCount < 4) {
        imgCount = 1
    } else {
        imgCount = 2
    }
    pageCount -= a
    return imgCount
}
function eventListeners() {
    if (pageButtons == 0) {
        $('#start-button').on("click", function() {
            nextPage();
        });
        $('#volume-control').on("click", function() {});
        $('#chapter-select').on("click", function() {});
        $('#gallery').on("click", function() {});
    } else if (pageButtons == 1) {
        
    };
};

drawPage();
function drawPage() {
    buttonCheck(); //updates array key for buttons
    $("#site-container").html(`<div id="background-image__base" class="background-image background-image__base ${pageImg[imgCheck(0)]}"></div><div id="background-image__phase" class="background-image background-image__phase ${pageImg[imgCheck(1)]}"></div>${buttons[pageButtons]}`); //overwrites the DOM with the transitional images and buttons
    if (pageCount > 0) {
        $('#skip-button').on("click", nextPageFast);
    }; //checks if there's a page with skip-button, then attaches the event listener for fast browsing
    $('#text').html(textArray[pageCount]); //adds text to the window
    console.log(pageCount)
    if (pageCount > 15 && pageCount < 19) {
        $('#text').addClass('text-window__invert')
    }; //Update later to check for page if (black background) {invert color} 
    console.log(textArray[pageCount])
    eventListeners();
}
function nextPage() {
    pageCount += 1;
    transitionSpeed = 1000;
    drawPage()
}
function nextPageFast() {
    pageCount += 1;
    transitionSpeed = 50;
    drawPage()
}