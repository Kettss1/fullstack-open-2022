import './Message.css';

export const Notification = ({ message, isError }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={`message ${isError}`}>
        {message}
      </div>
    )
}