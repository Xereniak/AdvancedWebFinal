var pageImg = [
    "image__title",
    "image__zaikuon-arrives00",
    "image__zaikuon-arrives01",
    "image__zaikuon-arrives02",
    "image__lightship",
    "image__despair00",
    "image__despair01",
    "image__despair02",
    "image__despair03",
    "image__despair04",
    "image__despair05",
    "image__despair06",
    "image__despair07",
    "image__mythologydown00",
    "image__mythologydown01"
];
pageImg[-1] = "blackscreen";
pageImg[-2] = "whitescreen";
var pageCount = 0;
var transitionSpeed = 1000;
var speakerArray = [""];
//Start of speakerArray assignment
speakerArray[6] = "Zaikuon";
speakerArray[8] = "Aialize";
speakerArray[9] = "Zaikuon";
speakerArray[11] = "Aialize";
speakerArray[12] = "Zaikuon";
speakerArray[13] = "Aialize";
speakerArray[15] = "???";
speakerArray[18] = "???";
speakerArray[21] = "Miko Lua";
speakerArray[23] = "Satou Pendragon";
speakerArray[25] = "Zaikuon";
speakerArray[27] = "Satou Pendragon";
speakerArray[28] = "Miko Lua";
speakerArray[29] = "Satou Pendragon";
speakerArray[30] = "Miko Lua";
speakerArray[31] = "Satou Pendragon";
speakerArray[36] = "Zaikuon";
//End of speakerArray assignment
var textArray = [
    "",
    "God Zaikuon stepped down onto the ground at the base of the World Tree.",
    "...",
    "An intense aura of yellow divinity clothed his form, giving an impression of majesty suitable to the title of 'God'.",
    "But Gods do not step into the mortal realm on mere whim. Dwelling there in flesh requires divinity as fuel, a precious commodity to these beings who protect the world against Outsiders",
    "God Zaikuon was here for someone.",
    '"High Elf Aialize-sama of Boruenan Forest World Tree. "',
    "High Elf Aialize was caught unaware by the sudden appearance of a god. She had been taking a liesurely walk with Miko Lua, daydreaming as she went.",
    '"G-god Zaikuon! To what do I owe this honor...?"',
    '"Perform the duty of your creation and relinquish to me the Memory Bank."',
    'Aialize hesitated. Both she and Zaikuon understood the immense strain that accessing the Memory Bank would place upon them.',
    '"Is there something in the history you would like to know about? I could simply tell you if you--"',
    '"You insolent mongrel!! I am a God, and I have given you a command to carry out! Do it!"',
    '"I-I don\'t mean to defy your will, Zaikuon-sama. I only wish to help you avoid the pain of--"',
    'God Zaikuon smacked Aialize across the face and she fell to the ground. Miko Lua gave a yelp of surprise, and Zaikuon pressed his foot against Aialize\'s face, rubbing it in the dirt.',
    '"Aze-san!"',
    'A young boy, seemingly in his late teens suddenly appeared in the air above this commotion.',
    'The boy\'s expression turned menacing as he saw Aialize on the ground.',
    '"--What are you doing!"',
    'Faster than the boy\'s mouth was his foot, as he accelerated his body far beyond the capacity of an ordinary human boy and kicked the delinquent god square in the face.',
    'God Zaikuon disappeared over the horizon.',
    '"Sa-Satou-san--what have you done..."',
    'As Satou lifted the teary eyed Aialize-sama and hugged her, Miko Lua looked at Satou with a pale face.',
    '"Have I done something wrong?"',
    'Suddenly, a powerful presence returned.',
    '"You mongrel! Know your place!"',
    'God Zaikuon came rushing back, swinging as if to strike down Aialize-sama. Satou produced a clone with ninjutsu to protect her before delivering another swift kick to Zaikuon\'s chest.',
    '"--Nothing less to expect from a god. Quite sturdy this guy."',
    '"Sa-Satou-san, were you aware who you were up against?"',
    '"No, I only noticed right before the second kick."',
    '"Before the second kick--you mean you knew when you kicked him the second time?"',
    '"The sole of my shoes is fitting for someone who was going to harm Aze-san."',
    '---',
    '--',
    '-',
    'A massive shadow appeared over the World Tree.',
    '"Fuhahahaha! Let me to teach you what it means to have an abundance of divinity!"',
    'A massive sci-fi looking vessel stands in the sky. It looks completely out of place here in a fantasy world, but it seems gods get to break these sorts of rules when they feel like it.',
    'In response, Satou pulls a Dimensional Boat from his Inventory and climbs inside.',


]
var buttons = [
    `<div id="start-button" class="start-button site-container--button centered">An ominous presence decends...</div><div id="volume-control" class="volume-control site-container--button top-left"></div><div id="chapter-select" class="chapter-select site-container--button bottom-left"></div><div id="gallery" class="gallery site-container--button bottom-right"></div><div id="credits" class="credits site-container--button top-right">Imaginary Fears: Credits</div>`,
    `<div id="volume-control" class="volume-control site-container--button top-left"></div><div id="text-window" class="text-window bottom-center"><p id="text"></p></div><div id="skip-button" class="skip-button site-container--button bottom-right"></div><div id="speaker-badge" class="speaker-badge site-container--button"></div>`,
    `<div class="text-window site-container-button bottom-center"><p>This website is a rewritten version of events from <a href="https://www.sousetsuka.com/2019/06/death-march-kara-hajimaru-isekai_24.html">Death March into the Parallel World Rhapsody Volume 17 Chapter 21.</a> The original work was written by Hiro Ainana.<br><hr>All other assets within the site are created as originals by the site author.</p></div>`
];
var pageButtons;
buttonCheck();

function buttonCheck() {
    if (pageCount == 0) {
        pageButtons = 0
    } else if (pageCount > 0 && pageCount < 5000) {
        pageButtons = 1
    } else if (pageCount == 5000) {
        pageButtons = 2
    }
};
var imgCount;
imgCheck(0);

function imgCheck(a) {
    pageCount += a;
    if (pageCount == 0) {
        imgCount = 0
    } else if (pageCount == 1) {
        imgCount = -2
    } else if (pageCount == 2 || pageCount == 3) {
        imgCount = 1
    } else if (pageCount < 5) {
        imgCount = 2
    } else if (pageCount < 20) {
        imgCount = 3
    } else if (pageCount < 24) {
        imgCount = 1
    } else if (pageCount < 27) {
        imgCount = 3
    } else if (pageCount < 32) {
        imgCount = 1
    } else if (pageCount < 35) {
        imgCount = -2
    } else if (pageCount < 40) {
        imgCount = 4
    }
    pageCount -= a
    return imgCount
}

function eventListeners() {
    if (pageButtons == 0) {
        $('#start-button').on("click", function () {
            nextPage();
        });
        $('#volume-control').on("click", function () {});
        $('#chapter-select').on("click", function () {});
        $('#gallery').on("click", function () {});
        $('#credits').on("click", function () {
            pageCount = 4999;
            nextPage();
        })
    } else if (pageButtons == 1) {
        $('#text-window').on("click", function () {
            nextPage();
        })
    };
};

function init() {
    if (pageCount == 0) {
        $("#site-container").html(`<div id="background-image__base" class="background-image background-image__base ${pageImg[-1]}"></div><div id="background-image__phase" class="background-image background-image__phase ${pageImg[0]}"></div>${buttons[pageButtons]}`);

        $('#background-image__phase').fadeIn(transitionSpeed, function () {
            document.getElementById('background-image__base').className = `background-image background-image__base ${pageImg[0]}`;

        });


        eventListeners();
    } else {
        drawPage()
    }
} //initializing command
init();

function drawPage() {
    buttonCheck(); //updates array key for buttons
    $("#site-container").html(`<div id="background-image__base" class="background-image background-image__base ${pageImg[imgCheck(-1)]}"></div><div id="background-image__phase" class="background-image background-image__phase ${pageImg[imgCheck(0)]}"></div>${buttons[pageButtons]}`); //overwrites the DOM with the transitional images and buttons
    if (pageCount > 0) {
        $('#skip-button').on("click", nextPageFast);
    }; //checks if there's a page with skip-button, then attaches the event listener for fast browsing
    $('#speaker-badge').html(speakerArray[pageCount]);
    if (speakerArray[pageCount] == undefined) {
        $('#speaker-badge').addClass('invisible');
    }

    $('#text').html(textArray[pageCount]); //adds text to the window
    $('#text').textillate({
        in: {
            effect: 'fadeIn',
            delay: transitionSpeed / 150
        }
    });
    $('#speaker-badge').textillate({
        in: {
            effect: 'fadeIn',
            delay: 20
        }
    });
    console.log(pageCount)
    if (2 === 'pineapples') {
        $('#text').addClass('text-window__invert')
    }; //Update later to check for page if (black background) {invert color} 

    $('#background-image__phase').fadeIn(transitionSpeed, function () {
        document.getElementById('background-image__base').className = `background-image background-image__base ${pageImg[imgCheck(0)]}`;

    });
    //transitional page effect
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
console.log(imgCheck(0))
