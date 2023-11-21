import React, { useState, useEffect} from 'react';
import './Chat.css';


import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import db from '../firebase';

import { useParams } from 'react-router-dom'

const Chat = () => {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    console.log(roomId);
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId])


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = e => {
        e.preventDefault();
        setInput('');
    }
    console.log(sendMessage);

  return (
    <div className='chat'>
        <div className='chat__header'>
            <Avatar src={`https://api.dicebear.com/7.x/pixel-art/svg?${seed}.svg`} />
            <div className='chat__headerInfo'>
                <h3>{roomName}</h3>
                <p>Last seen at...</p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <IconButton>
                    <AttachFile />
                </IconButton>

                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className='chat__body'>
            <p className={`chat__message ${true && 'chat__receiver'}`}>
                <span className='chat__name'>TWD</span>
                Hope youre good
                <span className='chat__timestamp'>
                    {new Date().toLocaleDateString()}
                </span>
            </p>
            <p className='chat__message'>
                <span className='chat__name'>Nelson</span>
                Hello TWD
                <span className='chat__timestamp'>
                    {new Date().toLocaleDateString()}
                </span>
            </p>
        </div>
        <div className='chat__footer'>
            <InsertEmoticon />
            <form>
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder='Type a message'
                    type="text"
                />
                <button type='submit'>Send a message</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default Chat;