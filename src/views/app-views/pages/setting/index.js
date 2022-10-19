import React, { Component,Suspense } from 'react'
import { UserOutlined, LockOutlined, CreditCardOutlined, BellOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import Loading from "../../../../components/shared-components/Loading";

const SettingOption = ({ match, location }) => {
	return (
		<Menu
			defaultSelectedKeys={`${match.url}/edit-profile`}
			mode="inline"
			selectedKeys={[location.pathname]}
		>
			<Menu.Item key={`${match.url}/edit-profile`}>
				<UserOutlined />
				<span>Edit Profile</span>
				<Link to={`${match.url}/edit-profile`}/>
			</Menu.Item>
		</Menu>
	);
};

const SettingContent = ({ match }) => {
	return (
			<Switch>
				<Redirect exact from={`${match.url}`} to={`${match.url}/edit-profile`} />
				<Route path={`${match.url}/edit-profile`} render={()=>{
					return <EditProfile userId = {match.params.userId}/>}}
				/>
			</Switch>
	)
}

export class Setting extends Component {
	render() {
		return (
			<InnerAppLayout
				sideContentWidth={320}
				sideContent={<SettingOption {...this.props}/>}
				mainContent={<SettingContent {...this.props}/>}
			/>
		);
	}
}

export default Setting