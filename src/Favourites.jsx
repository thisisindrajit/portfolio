import React from 'react';
import FavItem from './FavItem';

const Favourites = () =>{
    return(
    <div id="fav">
        <div className="favsection">
            <span className="favtitle">🎧Favourite Songs</span>
            <FavItem title="❤️ Ilaya Nila" 
            desc="Ilaiyaraaja, SPB"
            colour="#76D7C4"/>

            <FavItem title="❤️ Varaha Nadikkarai Oram" 
            desc="A.R.Rahman, Shankar Mahadevan"
            colour="#76D7C4"/>

            <FavItem title="❤️ Elangathu Veesuthey" 
            desc="Ilaiyaraaja, Shreya Goshal"
            colour="#76D7C4"/>

            
            <FavItem title="❤️ Yaarumilla" 
            desc="A.R.Rahman, Swetha Mohan"
            colour="#76D7C4"/>

        </div>

        <div className="favsection colorchange">
            <span className="favtitle" style={{color:"#2E4053",borderBottom:"1px solid #76D7C4"}}>📚Favourite Books</span>
        </div>

        <div className="favsection colorchange">
            <span className="favtitle" style={{color:"#2E4053",borderBottom:"1px solid #76D7C4"}}>🎞️Favourite Movies</span>
        </div>

        <div className="favsection">
            <span className="favtitle">🌟Inspirations</span>
        </div>

    </div>);
}

export default Favourites;