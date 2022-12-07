import "./style/messages.css"

const ContainerMessages = ({messages}) => {
  return (
    <div className="ContainerMessages">
      {messages.map((message)=>(
        <div className="div">
        <div className="message message2">
          <h2>{message.message}</h2>
          <p>{new Date(message.timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      ))}
      
    </div>
  )
}

export default ContainerMessages
