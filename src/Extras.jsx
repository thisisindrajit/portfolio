import React from 'react';
import Article from './Article'
import Linkcard from './Linkcard'

const Extras = () => {
    return(
        <div id="extras">
            <div id="articlebox">
                When bored🥱, I pour out my thoughts in the form of articles📰. Check out few of my articles here!
                <div id="articlegrid">
                <Article title="Hard Times and Positive Thoughts"
                content="The past few months have been hard for everybody, 
                with the pandemic taking its toll on us. Staying at home is not easy right? 
                We miss our friends, colleagues etc. and our daily routine has drastically changed. 
                From reaching school or office in the nick of time to waking up at our own leisure time,
                our routine has been altered to such an extent that it shall be very tough to go back to our normal routine.
                Work from Home has become the new normal. Video calls have become the way to interact with people.This is definitely a hard time for us.But 
                have you ever thought about the positive side of this? Back when things were normal, we were tired of our daily routine of just working all day 
                and we desperately wanted a break. What if this was the break that you expected for? What if this was god’s way of telling us to stop running
                and get a break?"
                url="https://indrajitmusic.wordpress.com/2020/06/25/hard-times-and-positive-thoughts/" />

                <Article title="How I want to inspire people through my story of how I started producing music"
                content="I started making music when I was around 15. This passion of mine, which started just as a hobby, 
                has given me experiences (both good and bad) and I have learnt a lot through this journey (and I am still learning). 
                Initially when I started producing music, I felt intimidated and hopeless almost every time. But there was this incessant 
                pricking in my heart to do something extraordinary which gave me hope and energy. At first, I was so bad in making music 
                that sometimes I felt that I would never succeed in becoming at least a novice, let alone becoming a professional."
                url="https://indrajitmusic.wordpress.com/2019/01/22/how-i-want-to-inspire-people-through-my-story-of-how-i-started-producing-music/" />
                </div>
            </div>
            
            <div id="right">
            <div id="quotebox">
            “Knowing is not enough, we must apply. Willing is not enough, we must do.” 
            <span id="quoteby">Bruce Lee</span>
            </div>

            <div id="extraslinks">
                <div id="titleholder">Links to my extras</div>
                <Linkcard name="Blog" src="./wordpress.png" url="https://indrajitmusic.wordpress.com/"/>
                <Linkcard name="Articles" src="./Medium.png" url="https://medium.com/@indrajitvijayakumar" />
                <Linkcard name="Songs" src="./youtube.png" url="https://www.youtube.com/channel/UCvd_7o_qpO2VC6HPn7Huh_w?view_as=subscriber"/>
                
            </div>
            </div>
        </div>
    )
}

export default Extras;