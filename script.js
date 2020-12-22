// Dummy data for recommended videos and comments

var videos = [
        {
            "title": "Cats and Invisible Wall Compilation",
            "channel": "Munchkin",
            "info": "17M views • 8 months ago",
            "thumbnail": "https://img.youtube.com/vi/EJS4hYNngto/maxresdefault.jpg"
        },
        {
            "title": "Cute and Funny Cat Videos to Keep You Smiling! 🐱",
            "channel": "Rufus",
            "info": "16.8M views • 8 months ago",
            "thumbnail": "https://img.youtube.com/vi/tpiyEe_CqB4/maxresdefault.jpg"
        },
        {
            "title": "TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!",
            "channel": "Academind",
            "info": "462,610 views • Jan 21, 2020",
            "thumbnail": "https://img.youtube.com/vi/BwuLxPH8IDs/maxresdefault.jpg"
        },
        {
            "title": "Introduction to React",
            "channel": "Le Wagon",
            "info": "51,738 views • Oct 26, 2017",
            "thumbnail": "https://img.youtube.com/vi/_ZTT9kw3PIE/0.jpg"
        },
        {
            "title": "Cats and Domino",
            "channel": "Cat Navi Desk",
            "info": "35,172,414 views • Mar 14, 2020",
            "thumbnail": "https://img.youtube.com/vi/7Nn7NZI_LN4/maxresdefault.jpg"
        },
        {
            "title": "Why am I not at the Olympics?",
            "channel": "CatPussic",
            "info": "25,068,492 views • May 18, 2018",
            "thumbnail": "https://img.youtube.com/vi/Mfi0NMtfUzI/maxresdefault.jpg"
        },
        {
            "title": "Funny Cats Compilation (Most popular) Part 2",
            "channel": "NoCat NoLife",
            "info": "4.6M . 4 years ago",
            "thumbnail": "https://img.youtube.com/vi/NsUWXo8M7UA/maxresdefault.jpg"
        },
        {
            "title": "Waiter! Bring me food!",
            "channel": "CatPussic",
            "info": "33,443,085 views • Jun 30, 2017",
            "thumbnail": "https://img.youtube.com/vi/k0QhnMJnJE0/maxresdefault.jpg"
        }
    ];

var comments = [
    {
        "thumbnail":"https://yt3.ggpht.com/ytc/AAUvwnhoNAFrF8hYj0zCYCfCXsarW81jgX-c0rCH_vyymQ=s48-c-k-c0xffffffff-no-rj-mo",
        "name":"Ray Mak",
        "comment": "I miss this meme a lot. It's back in my recommendation.",
    },
    {
        "thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaaU1bFocDOx3Q8zh35970WbOSDN-n-x_Whg&usqp=CAU",
        "name":"Steam Pw",
        "comment": "When the world needed him the most, he returned.",
    },
    {
        "thumbnail":"https://yt3.ggpht.com/ytc/AAUvwni3woc15AzPA4Ti4LqTMQV7XnfcMOl0JT-oGCbK=s48-c-k-c0xffffffff-no-rj-mo",
        "name":"Triplet",
        "comment": "This is literally one of the ancient fragments of the internet.",
    },
]


// gettind elements from DOM

const content = document.getElementById("content");
const showMore = document.getElementById("show-more");
const subscribe = document.getElementById("subscribe-btn");
const recommendation = document.getElementById("recommendations");
const commentSection = document.getElementById("comment-section");

// show more text function

showMore.state = "false";
showMore.onclick = function(){

    if(showMore.state=="false"){
        content.style.height = "auto";
        showMore.state = "true";
        showMore.innerHTML = "SHOW LESS";
    }
    else{
        content.style.height = "120px";
        showMore.state = "false";
        showMore.innerHTML = "SHOW MORE";
    }
}

// subscribe button function

subscribe.state = "false";
subscribe.onclick = function()
{
    if(subscribe.state=="false"){
        subscribe.style.backgroundColor="grey";
        subscribe.innerHTML = "SUBSCRIBED";
        subscribe.state="true"
    }
    else{
        subscribe.style.backgroundColor="#cc0000";
        subscribe.innerHTML = "SUBSCRIBE";
        subscribe.state = "false";
    }
}

//Render recommended videos

for(var i=0; i<videos.length; i++)
{
    var card = document.createElement('div');
    card.classList.add('card');

    var cardImage = document.createElement('img');
    cardImage.classList.add('cardImage');
    cardImage.src = videos[i].thumbnail;
    card.appendChild(cardImage);

    var cardInfo = document.createElement('div');
    cardInfo.classList.add('cardInfo');
    card.appendChild(cardInfo);

    var cardTitle = document.createElement('div');
    cardTitle.innerHTML = videos[i].title;
    cardTitle.classList.add('cardTitle');
    cardInfo.appendChild(cardTitle);

    var channel = document.createElement('div');
    channel.innerHTML = videos[i].channel;
    channel.classList.add('channel-name');
    cardInfo.appendChild(channel);

    var info = document.createElement('div');
    info.innerHTML = videos[i].info;
    info.classList.add('moreInfo');
    cardInfo.appendChild(info);

    recommendation.appendChild(card);

    if(i==0){
        var hr = document.createElement('div');
        hr.classList.add('hr-line');
        hr.classList.add('right-hr');
        recommendation.appendChild(hr);
    }
}

//render comments section

for(var i=0; i<comments.length; i++)
{  
    var commentCard = document.createElement('div');
    commentCard.classList.add('commentCard');

    var img = document.createElement('img');
    img.classList.add('commentImage');
    img.src = comments[i].thumbnail;

    var commentText = document.createElement('div');
    commentText.classList.add('commentText');

    var Name = document.createElement('div');
    Name.innerHTML = comments[i].name;
    commentText.appendChild(Name);
    Name.style.fontSize = "0.8rem";
    Name.style.fontWeight = "900";
    Name.style.paddingBottom = "5px";

    var comment = document.createElement('div');
    comment.innerHTML = comments[i].comment;
    commentText.appendChild(comment);

    var actions = document.createElement('div');
    actions.classList.add('actions');

    var likes = document.createElement('div');
    likes.innerHTML = '<i class="fas fa-thumbs-up"></i> 96K';
    actions.appendChild(likes);

    var dislikes = document.createElement('div');
    dislikes.innerHTML = '<i class="fas fa-thumbs-down"></i>';
    actions.appendChild(dislikes);
    commentCard.appendChild(img);
    commentText.appendChild(actions);
    commentCard.appendChild(commentText);
    
    commentSection.appendChild(commentCard);
}