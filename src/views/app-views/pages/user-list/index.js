import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import utils from 'utils';
import userService from "../../../../services/UserService";
import AvatarStatus from 'components/shared-components/AvatarStatus';
import {Link} from "react-router-dom";

export class UserList extends Component {

	state = {
		isUsersLoaded: false,
		users: [],
		userProfileVisible: false,
		selectedUser: null
	}

	componentDidMount() {
		userService.getUserList()
			.then(result=>{
				this.setState({
					users: result,
					isUsersLoaded: true
				})
			})
			.catch(e=>{
				console.error(e)
			});
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};

	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { users, userProfileVisible, selectedUser } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<Link to={`setting/${record.id}`}  >
							<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
						</Link>
					</div>
				),
				sorter: {
					compare: (a,b) => utils.compareStrings(a.name,b.name)
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				sorter: {
					compare: (a,b) => utils.compareStrings(a.phone,b.phone)
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: (_, record) => (
					<div>
						{record.name}
					</div>
				),
				sorter: {
					compare: (a,b) => utils.compareStrings(a.name,b.name),
				}
			},
			{
				title: 'Website',
				dataIndex: 'website',
				sorter: {
					compare: (a,b) => utils.compareStrings(a.website,b.website),
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			this.state.isUsersLoaded &&
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
			</Card>
		)
	}
}

export default UserList
