import "./style/messages.css"
import image from "./assets/abstract-user-flat-4.svg"
import ContainerMessages from "./ContainerMessages"
import { BsEmojiSmile, BsPaperclip, BsMic} from "react-icons/bs";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import firebase from 'firebase/compat/app'

const Messages = () => {
  const [input, setInput] = useState('')
  const {groupId} = useParams()
  const [groupName, setGroupName] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    if(groupId){
      db.collection("groops").doc(groupId).onSnapshot((snapshot) =>(
        setGroupName(snapshot.data().name)
      ))
      db.collection('groops')
        .doc(groupId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map((doc) =>
          doc.data()
          ))
        )
    }

  },[groupId])

  const handleMessage = (e)=>{
    e.preventDefault()
    setInput(e.target.value)

    db.collection('groops')
    .doc(groupId)
    .collection('messages')
    .add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <main className='Messages'>
      <div className="personStatusContainer">
        <img src={image} alt="userPhoto" width="45px" height="45px"/>
        <div className="personName">
            <p>{groupName}</p>
            <p>{groupId}</p>
        </div>
      </div>
      <ContainerMessages messages={messages}/>
      <div className="FormContainer">
        <div className="svg">
          <BsEmojiSmile />
        </div>
        <div className="svg">
          <BsPaperclip />
        </div>
        <form onSubmit={handleMessage}>
          <label htmlFor='sendMessage'>Type a message</label>
          <input
            type="text"
            id='sendMessage'
            placeholder='Type a message...'
            value={input}
            onChange={(e)=> setInput(e.target.value)}
          />
      </form>
      <div className="svg">
          <BsMic />
        </div>
      </div>
    </main>
  )
}

export default Messages
