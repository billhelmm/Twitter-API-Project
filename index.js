var user = {
  user1: {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    verified: true, 
    tweetCount: 13600, 
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    //url's were broken bc I was trying to create a a relative file path to a file outside the twitter-board-api directory structure.
    //after moving the assets folder within the twitter-board-api directory structure, the file paths now works.
    avatarURL: '/your-turn-dynamic-twitter/assets/elonmusk.jpg',
    coverPhotoURL: '/your-turn-dynamic-twitter/assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20',
            image:''
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12',
            image: '<img class="feed-tweet-image" src="your-turn-dynamic-twitter/assets/starship.jpg">' //do I really need this?
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51',
            image: ''
        }
    ]
  },
  user2: {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    verified: true,
    tweetCount: 4000,
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: '/your-turn-dynamic-twitter/assets/billgates.jpg',
    coverPhotoURL: '/your-turn-dynamic-twitter/assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20',
            image:''
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12',
            image:''
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51',
            image:''
        }
    ]
  }
}

// work with a query string using the URLsearchParams object
const urlParams = new URLSearchParams(location.search)

// create variable to store query value paired with key/name 'user'
let userObj = urlParams.get("user")

// if verified, show special icon
let badge=''; 
if (user[userObj].verified === true) {
  badge= "☑️"
}

// format tweetCount
let tweetCount= user[userObj].tweetCount
if (user[userObj].tweetCount > 999) {
  formattedTweetCount = tweetCount/1000 + 'K Tweets'
}

// add header
var header = document.getElementById('header')
header.innerHTML = `
<button class="back-arrow"> ← </button>
<div class="header-text">
  <h3 class="header-title">${user[userObj].displayName} ${badge}</h3>
  <p class="header-subtitle">${formattedTweetCount}</>
</div>
`

// add coverphoto
var coverPhoto = document.getElementById('cover-photo')
coverPhoto.innerHTML = `
<img class="cover-photo" src= "${user[userObj].coverPhotoURL}">
`

// format followerCount
var followerCount = user[userObj].followerCount
if (user[userObj].followerCount > 999999) {
  formattedFollowerCount = followerCount/1000000 + 'M'
}

// add details
var details = document.getElementById('details')
details.innerHTML = `
  <div class="details-left">
    <img class="main-user-photo" src="${user[userObj].avatarURL}">
    <h3 class="details-display-name">${user[userObj].displayName}${badge}</h3>
    <p class="details-user-name">${user[userObj].userName}</p>
    <p class="details-join-date"> 📆 Joined ${user[userObj].joinedDate} </p>
    <span> 
      <p class="details-bold">${user[userObj].followingCount}</p> Following  
      <p class="details-bold">${formattedFollowerCount}</p> Followers</span>
  </div>
  <div class="details-right">
    <button class="follow-button">Following</button>
  </div>
`

// add feed tabs
var tweets = document.getElementById('tweets-container')
let feedTabs = document.createElement('div')
feedTabs.classList.add('feed-tabs')
feedTabs.innerHTML = `
  <div class="feed-tab"> Tweets </div>
  <div class="feed-tab"> Tweets & replies </div>
  <div class="feed-tab"> Media </div>
  <div class="feed-tab"> Likes </div>
`


var tweetString = ''
user[userObj].tweets.forEach( function(tweet, index) {  
  // format timestamp
  dateFormat = tweet.timestamp.slice(0,9)
  tweetString+= `      
    <div class="tweets-content">
      <div class="feed-left">
        <img class="feed-profile-photo" src=${user[userObj].avatarURL}> 
      </div>
      <div class="feed-center"> 
        <h5 class="feed-header">
          ${user[userObj].displayName}${badge} 
          <span class="feed-username">${user[userObj].userName} • ${dateFormat}</span>
        </h5>
        <p class="feed-tweet">${tweet.text}</p>
        <div class="feed-image">
          ${tweet.image}
        </div>
        <div class="feed-center-bottom">
          <button class="feed-icons"> 💬 </button>
          <button class="feed-icons"> ❤️ </button>
          <button class="feed-icons"> 🔁 </button>
          <button class="feed-icons"> 📤 </button>
        </div>
      </div>
      <div class="feed-right">
        <button class="feed-right-button"> ... </button>
      </div>
    </div>
      
  `
  tweets.innerHTML = feedTabs.outerHTML + tweetString
  // note 'tweets.innerHTML+=' would give you iterations of 1, 1 2, 1 2 3, duplicating values. 
})
