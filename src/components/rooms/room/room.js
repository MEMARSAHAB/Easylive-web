import React from 'react';

import './room.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({room}) {
    return (
        <div className='searchResult'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU" alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{room.location.formattedAddress}</p>
                    <h3>{room.property_name}</h3>
                    <p>____</p>
                    <p>{room.disc}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>4.5</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{room.rent}</h2>
                        <p>{room.rent}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult