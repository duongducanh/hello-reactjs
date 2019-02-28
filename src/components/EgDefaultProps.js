import React from 'react';

class UserInfo extends React.Component {
	render() {
		return (
			<div>
				<p>Nane: {this.props.name}</p>
				<p>Email: {this.props.email}</p>
			</div>
		)
	}
}

UserInfo.defaultProps = {
	name: "anh",
	email: "anh@gmail.com"
}

export default UserInfo;