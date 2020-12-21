// Dummy data for videos and comments

var video = [
        {
            "title": "Cats and Invisible Wall Compilation",
            "uploader": "Munchkin",
            "views": "17M views • 8 months ago",
            "thumbnail": "https://i.ytimg.com/an_webp/EJS4hYNngto/mqdefault_6s.webp?du=3000&sqp=CKCOg_8F&rs=AOn4CLBWbHKr8fNNranuHxgUCPBTZ679cw"
        },
        {
            "title": "Cute and Funny Cat Videos to Keep You Smiling! 🐱",
            "uploader": "Rufus",
            "views": "16.8M views • 8 months ago",
            "thumbnail": "https://i.ytimg.com/an_webp/tpiyEe_CqB4/mqdefault_6s.webp?du=3000&sqp=CPyFg_8F&rs=AOn4CLCMAWkK9ycrzPyaSPWcsk2wS8xjcQ"
        },
        {
            "title": "TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!",
            "uploader": "Academind",
            "views": "462,610 views • Jan 21, 2020",
            "thumbnail": "https://img.youtube.com/vi/BwuLxPH8IDs/maxresdefault.jpg"
        },
        {
            "title": "Introduction to React",
            "uploader": "Le Wagon",
            "views": "51,738 views • Oct 26, 2017",
            "thumbnail": "https://img.youtube.com/vi/_ZTT9kw3PIE/0.jpg"
        },
        {
            "title": "Cats and Domino",
            "uploader": "Cat Navi Desk",
            "views": "35,172,414 views • Mar 14, 2020",
            "thumbnail": "https://img.youtube.com/vi/7Nn7NZI_LN4/maxresdefault.jpg"
        },
        {
            "title": "Why am I not at the Olympics?",
            "uploader": "CatPussic",
            "views": "25,068,492 views • May 18, 2018",
            "thumbnail": "https://img.youtube.com/vi/Mfi0NMtfUzI/maxresdefault.jpg"
        },
        {
            "title": "Funny Cats Compilation (Most popular) Part 2",
            "uploader": "NoCat NoLife",
            "views": "4.6M . 4 years ago",
            "thumbnail": "https://i.ytimg.com/an_webp/NsUWXo8M7UA/mqdefault_6s.webp?du=3000&sqp=CMCZg_8F&rs=AOn4CLD53f12LuVm2zd-jL5-3xBtkH3j0w"
        },
        {
            "title": "Waiter! Bring me food!",
            "uploader": "CatPussic",
            "views": "33,443,085 views • Jun 30, 2017",
            "thumbnail": "https://img.youtube.com/vi/k0QhnMJnJE0/maxresdefault.jpg"
        }
    ];

var comments = [
    {
        "image":"https://yt3.ggpht.com/ytc/AAUvwnhoNAFrF8hYj0zCYCfCXsarW81jgX-c0rCH_vyymQ=s48-c-k-c0xffffffff-no-rj-mo",
        "name":"Ray Mak",
        "comment": "I miss this meme a lot. It's back in my recommendation.",
    },
    {
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaaU1bFocDOx3Q8zh35970WbOSDN-n-x_Whg&usqp=CAU",
        "name":"Steam Pw",
        "comment": "When the world needed him the most, he returned.",
    },
    {
        "image":"https://yt3.ggpht.com/ytc/AAUvwni3woc15AzPA4Ti4LqTMQV7XnfcMOl0JT-oGCbK=s48-c-k-c0xffffffff-no-rj-mo",
        "name":"Triplet",
        "comment": "This is literally one of the ancient fragments of the internet.",
    },
]


// fetching required elements form HTML doc

const content = document.getElementById("content");
const showMore = document.getElementById("show-more");
const subs = document.getElementById("subscribe-btn");
const aside = document.getElementById("videolist");
const comSec = document.getElementById("comment-section");

showMore.state = "show";
showMore.onclick = function(){

    if(showMore.state=="show"){
        content.style.height = "auto";
        showMore.state = "hide";
        showMore.innerHTML = "SHOW LESS";
    }
    else{
        content.style.height = "120px";
        showMore.state = "show";
        showMore.innerHTML = "SHOW MORE";
    }
}

subs.state = "subbed";
subs.onclick = function(){

    if(subs.state=="subbed"){
        subs.style.backgroundColor="grey";
        subs.innerHTML = "SUBSCRIBED";
        subs.state="notSubbed"
    }
    else{
        subs.style.backgroundColor="#cc0000";
        subs.innerHTML = "SUBSCRIBE";
        subs.state = "subbed";
    }
}

//render list of video cards in the aside section 

for(var i=0; i<video.length; i++){
    var card = document.createElement('div');
    card.classList.add('card');

    var cardImage = document.createElement('img');
    cardImage.classList.add('cardImg');
    cardImage.src = video[i].thumbnail;
    card.appendChild(cardImage);

    var cardInfo = document.createElement('div');
    cardInfo.classList.add('cardInfo');
    card.appendChild(cardInfo);

    var cardMenu = document.createElement('div');
    cardMenu.classList.add('cardMenu');
    card.appendChild(cardMenu);
    
    var cardTitle = document.createElement('div');
    cardTitle.innerHTML = video[i].title;
    cardTitle.classList.add('cardTitle');
    cardInfo.appendChild(cardTitle);

    var uploader = document.createElement('div');
    uploader.innerHTML = video[i].uploader;
    uploader.classList.add('uploader');
    cardInfo.appendChild(uploader);

    var views = document.createElement('div');
    views.innerHTML = video[i].views;
    views.classList.add('views');
    cardInfo.appendChild(views);

    aside.appendChild(card);

    if(i==0){
        var hr = document.createElement('div');
        hr.classList.add('hr-line');
        aside.appendChild(hr);
    }

}

//render comments

for(var i=0; i<comments.length; i++){
    console.log(comments[i]);
    
    var commentCard = document.createElement('div');
    commentCard.classList.add('commentCard');

    var img = document.createElement('img');
    img.classList.add('commentImg');
    img.src = comments[i].image;

    var commentInfo = document.createElement('div');
    commentInfo.classList.add('commentInfo');

    var commenterName = document.createElement('div');
    commenterName.innerHTML = comments[i].name;
    commentInfo.appendChild(commenterName);
    commenterName.style.fontSize = "1rem";
    commenterName.style.fontWeight = "900";
    commenterName.style.paddingBottom = "5px";

    var comment = document.createElement('div');
    comment.innerHTML = comments[i].comment;
    commentInfo.appendChild(comment);

    var actions = document.createElement('div');
    actions.classList.add('actions');

    var like = document.createElement('div');
    like.innerHTML = '<i class="fas fa-thumbs-up"></i> 96K';
    actions.appendChild(like);

    var dislike = document.createElement('div');
    dislike.innerHTML = '<i class="fas fa-thumbs-down"></i>';
    actions.appendChild(dislike);

    commentInfo.appendChild(actions);
    commentCard.appendChild(img);
    commentCard.appendChild(commentInfo);
    
    comSec.appendChild(commentCard);
}