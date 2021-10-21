import React from 'react';

import './message.css';
import {CometChatConversationListScreen } from "../../CometChat";
import { AuthContext } from '../../context/authcontext';


export const  Message = () => {
  
  const {logout} = React.useContext(AuthContext)
    
  return(

    <div className="chatsview">
        <CometChatConversationListScreen />
    </div> 
    
  )

}