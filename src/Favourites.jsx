import React from 'react';
import FavItem from './FavItem';

const Favourites = () =>{
    return(
    <div id="fav">
        <div className="favsection">
            <span className="favtitle">🎧 Favourite Songs</span>
            <FavItem 
            heart="❤️"
            title="Ilaya Nila" 
            desc="Ilaiyaraaja, SPB"
            colour="#76D7C4"/>

            <FavItem 
            heart="❤️"
            title="Varaha Nadikkarai Oram" 
            desc="A.R.Rahman, Shankar Mahadevan"
            colour="#76D7C4"/>

            <FavItem 
            heart="❤️"
            title="Elangathu Veesuthey" 
            desc="Ilaiyaraaja, Shreya Goshal"
            colour="#76D7C4"/>

            
            <FavItem 
            heart="❤️"
            title="Yaarumilla" 
            desc="A.R.Rahman, Swetha Mohan"
            colour="#76D7C4"/>

        </div>

        <div className="favsection colorchange">
            <span className="favtitle" style={{color:"#2E4053",borderBottom:"1px solid #76D7C4"}}>📚 Favourite Books</span>

            <FavItem 
            heart="💜"
            title="The Murder of Roger Ackroyd" 
            desc="Agatha Christie"
            colour="#76D7C4"/>

            <FavItem 
            heart="💜"
            title="The Hunger Games" 
            desc="Suzanne Collins"
            colour="#76D7C4"/>

            <FavItem 
            heart="💜"
            title="Extraordinary Origins of Everyday Things" 
            desc="Charles Panati"
            colour="#76D7C4"/>

            <FavItem
            heart="💜"
            title="The ABC Murders" 
            desc="Agatha Christie"
            colour="#76D7C4"/>
        </div>

        <div className="favsection colorchange">
            <span className="favtitle" style={{color:"#2E4053",borderBottom:"1px solid #76D7C4"}}>🎞️ Favourite Movies</span>
            
            <FavItem 
            heart="🖤"
            title="The Shawshank Redemption" 
            desc="Directed by Frank Darabont"
            colour="#76D7C4"/>

            <FavItem 
            heart="🖤"
            title="Schindler's List" 
            desc="Directed by Steven Spielberg"
            colour="#76D7C4"/>

            <FavItem 
            heart="🖤"
            title="Shutter Island" 
            desc="Directed by Martin Scorsese"
            colour="#76D7C4"/>

            <FavItem 
            heart="🖤"
            title="Forrest Gump" 
            desc="Directed by Robert Zemeckis"
            colour="#76D7C4"/>


        </div>

        <div className="favsection">
            <span className="favtitle">🌟 Inspirations</span>

            <FavItem 
            heart="💛"
            title="Dr A.P.J. Abdul Kalam" 
            desc="Missile Man of India"
            colour="#76D7C4"/>

            <FavItem 
            heart="💛"
            title="Steve Jobs" 
            desc="Co-founder of Apple"
            colour="#76D7C4"/>

            <FavItem 
            heart="💛"
            title="Bill Gates" 
            desc="Co-founder of Microsoft"
            colour="#76D7C4"/>

            <FavItem 
            heart="💛"
            title="Elon Musk" 
            desc="Founder of SpaceX, Tesla, PayPal, Neuralink and what not"
            colour="#76D7C4"/>

        </div>

    </div>);
}

export default Favourites;