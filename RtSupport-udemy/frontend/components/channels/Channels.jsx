import React, {Component} from 'react';

class Channel extends Component{
    onClick(e){
        e.preventDefault();
        const {setChannel, channels} = this.props;
        setChannel(channels);
    }
    render(){
        const {channels, activeChannel} = this.props;
        const active = channels === activeChannel ? 'active' : '';
        return(
            <li className={active}>
                <a onClick={this.onClick.bind(this)}>
                    {channels.name}
                </a>
            </li>
        )
    }
}

Channel.propTypes ={
    channels: React.PropTypes.object.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropsType.object.isRequired
}

export default Channel