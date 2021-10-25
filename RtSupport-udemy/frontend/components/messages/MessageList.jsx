import React, {Component} from 'react';
import Messages from './Messages';

class MessageList extends Component{
    render(){
        return(
            <ul>
                {
                    this.props.messages.map(message =>{
                        return (
                            <Messages 
                                key = {message.id}
                                message={message}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired
}

export default MessageList