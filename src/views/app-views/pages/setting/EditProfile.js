import React, {Component} from 'react';
import {Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import UserService from "services/UserService";
import Loading from "../../../../components/shared-components/Loading";
import redirect from "react-router-dom/es/Redirect";
import {Redirect} from "react-router-dom";

export class EditProfile extends Component {

    avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

    state = {
        user: {},
        isUserLoaded: false,
        redirect: false
    }

    componentDidMount() {
        UserService.getUserById(this.props.userId)
            .then(result => {
                this.setState({
                        user: {
                            avatarUrl: '/img/avatars/thumb-6.jpg',
                            ...result
                        },
                        isUserLoaded: true,
                    }
                )
            })
            .catch(error => {
                console.error(error)
            });

    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    render() {
        const onFinish = values => {
            const key = 'updatable';
            message.loading({content: 'Updating...', key});
            setTimeout(() => {
                this.setState({
                    user: {
                        ...values,
                    avatarUrl: avatarUrl},
                })
            message.success({content: 'Done!', key})
                .then(r => this.setState({redirect: true})
            );
            }, 1000);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const onUploadAavater = info => {
            const key = 'updatable';
            if (info.file.status === 'uploading') {
                message.loading({content: 'Uploading...', key, duration: 1000});
                return;
            }
            if (info.file.status === 'done') {
                this.getBase64(info.file.originFileObj, imageUrl =>
                    this.setState({
                        avatarUrl: imageUrl,
                    }),
                );
                message.success({content: 'Uploaded!', key, duration: 1.5});
            }
        };

        const onRemoveAvater = () => {
            this.setState((prev)=>{
                return({
                    user: {
                        ...prev.user,
                        avatarUrl: ''
                    }
                })
            })
        }

        const {name, email, username, phone, website, address, avatarUrl} = this.state.user;

        if (this.state.redirect) {
            return <Redirect to='/app/general/user-list'/>;
        }
        if (this.state.isUserLoaded)
            return (
                <><Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                    <Avatar size={90} src={avatarUrl} icon={<UserOutlined/>}/>
                    <div className="ml-md-3 mt-md-0 mt-3">
                        <Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
                            <Button type="primary">Change Avatar</Button>
                        </Upload>
                        <Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
                    </div>
                </Flex>
                    <div className="mt-4">
                        <Form
                            name="basicInformation"
                            layout="vertical"
                            initialValues={
                                {
                                    'name': name,
                                    'email': email,
                                    'username': username,
                                    'phoneNumber': phone,
                                    'website': website,
                                    'address': `${address.street}, ${address.suite}`,
                                    'city': address.city,
                                    'postcode': address.zipcode
                                }
                            }
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={16}>
                                    <Row gutter={ROW_GUTTER}>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item
                                                label="Name"
                                                name="name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your name!',
                                                    },
                                                ]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item
                                                label="Username"
                                                name="username"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your username!'
                                                    },
                                                ]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item
                                                label="Email"
                                                name="email"
                                                rules={[{
                                                    required: true,
                                                    type: 'email',
                                                    message: 'Please enter a valid email!'
                                                }]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item
                                                label="Date of Birth"
                                                name="dateOfBirth"
                                            >
                                                <DatePicker className="w-100"/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item
                                                label="Phone Number"
                                                name="phoneNumber"
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item
                                                label="Website"
                                                name="website"
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={24}>
                                            <Form.Item
                                                label="Address"
                                                name="address"
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item
                                                label="City"
                                                name="city"
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item
                                                label="Post code"
                                                name="postcode"
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Button type="primary" htmlType="submit">
                                        Save Change
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </>
            )
        else return <Loading cover={"content"}/>
    }
}

export default EditProfile
