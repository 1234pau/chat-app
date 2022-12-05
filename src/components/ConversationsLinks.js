import "./style/conversation.css"
import { BsPlusLg, BsThreeDots} from "react-icons/bs";
import SearchBar from "./SearchBar";
import { useState } from "react";
import image from "./assets/abstract-user-flat-4.svg"
import { useEffect } from "react";
import db from "../firebase";
import { Link } from "react-router-dom";

const ConversationsLinks = () => {
  const [search, setSearch] = useState('')
  const [groups, setGroups] = useState([])

  const handleCreateChat = ()=>{
    const room = prompt("Add the name of the room")
    if(room){
      db.collection('groops').add({
        name: room
    })
    }
    
  }
  

  useEffect(()=>{
    db.collection('groops').onSnapshot(snapshot =>(
      setGroups(snapshot.docs.map(doc=>({
        id: doc.id,
        data: doc.data()
      })))
    ))

  },[])

  return (
    <main className="ConversationsLinks">
      <div className="logoWhatsApp">
        <img src="https://img.icons8.com/color/48/null/whatsapp--v1.png" alt="logo whatsapp" width="25px" height="25px"/>
        <span>WhatsApp</span>
      </div>
      <div className="titleAndAddChatContainer">
        <h1>Conversations</h1>
            <div className="addChatContainer">
                <div onClick={handleCreateChat}>
                    <BsPlusLg />
                </div>
                <div>
                    <BsThreeDots />
                </div>
            </div>
      </div>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <div className="LinksForChat">
        {groups.map((group)=>(
        <Link to={`app/${group.id}`} key={group.id} id={group.id}>
          <div className="personStatusContainerLink">
            <div className="image">
              <img src={image} alt="userPhoto" width="50px" height="50px"/>
            </div>
            <div className="personNameInfo">
                <p>{group.data.name}</p>
                <p>{group.id}</p>
            </div>
          </div>
        </Link>
        ))}
        
      </div>
      
    </main>
  )
}

export default ConversationsLinks
