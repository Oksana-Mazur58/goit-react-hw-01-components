import React from "react";
import SocialProfile from './components/Social-profile';
import Statistics from './components/Statistics'
import FriendList from './components/Friend-list'
import user from './json/user.json'
import statisticalData from './json/statistical-data.json';
import friends from './components/Friend-list'


const App = () => ( <div>
        <h1>Homework 1</h1>
        <SocialProfile
          name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
        

        <Statistics title="Upload stats" stats={statisticalData} />;
    <Statistics stats={statisticalData} />;
    
    <ul class="friend-list">
  <FriendList friends={friends}/>
   </ul>

    </div>
)

export default App