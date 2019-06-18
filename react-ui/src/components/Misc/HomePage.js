import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import koshienBanner from '../img/misc/koshienBanner.png'

const HomePage = () => {
  return (
    <div>
      <div style={{'textAlign': 'center'}}>
        <Header as='h2'>Welcome to sendou.ink!<Header sub>Competitive Splatoon Hub</Header></Header>
      </div>
      <div style={{'paddingTop': '20px'}}>
        <b><Link to='/maps'>Maplists</Link></b> - Generate a maplist to use when scrimming. 
        You can choose the map pool to be used including monthly ranked maps or an upcoming event.
        Any maps you don't feel like you need to practice can be excluded from the pool.
      </div>
      <div style={{'paddingTop': '15px'}}>
        <b><Link to='/rotation'>Rotation</Link></b> - View upcoming Splatoon 2 rotations up to 24 hours in advance.
         Have some maps you'd rather not play in ranked? You can set those as unfavored maps (log in not required). 
         If a rotation contains your unfavored maps you can easily tell at a glance.
      </div>
      <div style={{'paddingTop': '15px'}}>
        <b><Link to='/xleaderboard'>Leaderboards</Link></b> - Browse through X Rank Top 500 Leaderboards. 
        There is a leaderboard for each weapon class where players are ranked by the average of their top four powers.
      </div>
      <div style={{'paddingTop': '15px'}}>
        <b><Link to='/xsearch'>Top 500 Search</Link></b> - Search through X Rank Top 500 results. 
        You can choose any weapon to find out the top performing players with it. 
        Another way is to search for a player name if you are curious how a specific player has performed in the past.
      </div>
      <div style={{'paddingTop': '15px'}}>
        <b><Link to='/links'>Links</Link></b> - Discover useful resources related to competitive Splatoon.
      </div>
      <div style={{'paddingTop': '15px'}}>
        If you <b>login</b> you can add gear builds on your user page. As a reference you can take a look at 
        my <Link to='u/79237403620945920'>page.</Link>
      </div>
      <div style={{'paddingTop': '10px'}}>
        <Image rounded src={koshienBanner} size='huge' centered/>
      </div>
    </div>
  )
}

export default HomePage