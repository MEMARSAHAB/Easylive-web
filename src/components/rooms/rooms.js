import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getRooms} from '../../actions/rooms'
import './rooms.css';
import { Button } from "@material-ui/core";
import SearchResult from "./room/room";

function SearchPage() {

    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(getRooms());
    }, []);

    const isloading = useSelector(state => state.rooms.loading);
    const rooms = useSelector(state => state.rooms.rooms.data);
    const error = useSelector(state => state.rooms.error);
    console.log(rooms);
    console.log(error);
    console.log(isloading);

    if(isloading){
        return(
            <p>Loading...</p>
        )
    }
    if(!rooms){
        return(
            <p>error</p>
        ) 
    }

    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            {rooms.map((room) => (

                <SearchResult room={room}/>
            ))}
        </div>
    )
}

export default SearchPage;