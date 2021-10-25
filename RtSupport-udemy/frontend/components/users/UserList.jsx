import React, {Component} from 'react';
import User from './Users';

class UserList extends Component{
    render(){
        return(
            <ul>
                {
                    this.props.users.map( usr =>
                        {
                            return <Users 
                                users = {usr}
                                key = {usr.id}
                            />
                        }
                    )
                }
            </ul>
        )
    }
}

UserList.propTypes = {
    users: React.PropTypes.object.isRequired,
}

export default UserList