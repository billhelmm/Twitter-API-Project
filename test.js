`
      <div class="feed">
        <div class="feed-left">
            <img class="feed-profile-photo" src=${user[userObj].avatarURL}> 
        </div>
        <div class="feed-center"> 
            <h5 class="feed-header">${user[userObj].displayName}${badge} ${user[userObj].userName} ${tweet.timestamp}</h5>
            <p class="feed-tweet">${tweet.text}</p>
        </div>
        <div class="feed-image">
            ${tweet.image}
        </div>
        <div class="feed-center-bottom">
            <button class="feed-icons"> 💬 </button>
            <button class="feed-icons"> ❤️ </button>
            <button class="feed-icons"> 🔁 </button>
            <button class="feed-icons"> 📤 </button>

            <input type="image" class="feed-icons" src="your-turn-dynamic-twitter/assets/comment icon.png"/>
            <input type="image" class="feed-icons" src="#"/>
            <input type="image" class="feed-icons" src="#"/>
            <input type="image" class="feed-icons" src="#"/>

            
        </div>
        <div class="feed-right">
            <button class="feed-right-button"> ... </button>
        </div>
      </div>
`

/* 
styles

.feed{
    display:flex;
}
*/