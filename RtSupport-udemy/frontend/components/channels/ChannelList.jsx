import React, {Component} from 'react';
import Channel from './Channels';

class ChannelList extends Component{
    render(){
        return(
            <ul>
                {
                    this.props.channels.map( chan =>{
                        return <Channels 
                            channels={chan}
                            key = {chan.id}
                            {...this.props}
                        />
                    })
                }
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropsType.object.isRequired
}

export default ChannelList