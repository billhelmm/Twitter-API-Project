var users = {
    user1: {
      userName: '@elonmusk',
      displayName: 'Elon Musk',
      verified: true,
      tweetCount: 13600,
      followStatus: true, 
      joinedDate: 'June 2009',
      followingCount: 103,
      followerCount: 47900000,
      //url's were broken bc I was trying to create a a relative file path to a file outside the twitter-board-api directory structure.
      //after moving the assets folder within the twitter-board-api directory structure, the file paths now work.
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
              image: '<img class="feed-tweet-image" src="your-turn-dynamic-twitter/assets/starship.jpg">'
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
      followStatus: true, 
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

//create header
var header = document.getElementById("timeline-header")
header.innerHTML = `
<h1 class="timeline-header">Timeline</h1>
`
  
//create a forloop that posts all tweets
var timeline = document.getElementById("timeline")
timelineString=''
for (const user in users) {
    users[user].tweets.forEach(function(tweet){
        timelineString+=`
        <div class="tweets-content">
          <div class="feed-left">
            <img class="feed-profile-photo" src=${users[user].avatarURL}> 
          </div>
          <div class="feed-center"> 
            <h5 class="feed-header">
              ${users[user].displayName} 
              <span class="feed-username">${users[user].userName} • ${tweet.timestamp}</span>
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
    })
 timeline.innerHTML = timelineString   
}

//sorts, to a point
//couldn't figure out how to sort with new Date() 
var list = document.querySelector('#timeline');

var arr = [...list.children]
arr.sort((a,b)=>a.innerText>b.innerText?1:-1)
arr.forEach(node=>list.appendChild(node));
