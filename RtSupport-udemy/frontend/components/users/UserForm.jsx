import React, {Component} from 'react';

class UserForm extends Component{
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.user;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = "";
    }
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Add User"
                        type="text"
                        ref="user" 
                    />
                </div>
            </form>
        )
    }
}

UserFrom.propTypes = {
    setUserName: React.PropTypes.func.isRequired
}

export default UserForm