import React, {Component} from 'react';
import fecha from 'fecha';

class Messages extends Component{
    render(){
        let {message} = this.props;
        let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD');
        return(
            <li className="message">
                <div className="author">
                    <strong>{messages.name}</strong>
                    <i className='timestamp'>{createdAt}</i>
                </div>
                <div className="body">{message.body}</div>
            </li>
        )
    }
}

Messages.PropTypes = {
    messages: React.PropTypes.object.isRequired,
}

export default Messages;