import React from "react";
import SocialProfile from './components/Social-profile';
import Statistics from './components/Statistics'
import FriendList from './components/Friend-list'
import TransactionHistory from './components/TransactionHistory'
import user from './json/user.json'
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json'
import transactions from './json/transactions.json'



const App = () => {
  return (<div>
    <h1>Homework 1</h1>
    <SocialProfile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
        

    <Statistics title="Upload stats"
      stats={statisticalData}
    />;
    
   
    <FriendList friends={friends} />

    <TransactionHistory transactions={transactions} />;
 
  </div>
  )
}
  

export default App