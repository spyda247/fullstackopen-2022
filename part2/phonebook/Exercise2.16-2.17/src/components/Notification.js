const Notification = ({ message, success }) => {
   
    if( message === null || success === null) {
        return null
    }
   return (success) 
   ? ( <div className="success">{message}</div> ) 
   : ( <div className="error">{message}</div> );  
}

export default Notification