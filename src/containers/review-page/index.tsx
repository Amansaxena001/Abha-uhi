import React from 'react'
import classNames from 'classnames';
// import Image from 'next/image'
import { Form, Input, Checkbox, InputNumber } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import PrimaryButton from '@app/src/components/primary-button';
import styles from './styles.module.scss'


const UserFeedBack: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={classNames('container', styles.feedbackContainer)}>
        <div className={styles.feedbackContainerCard}>
          <div className={styles.left}>
            <h1> We'd love to <br /> hear from you</h1>
            <h4>Answer all the questions, it'll help us to grow </h4>
            <img src="/feeback.svg" alt="feed" />
          </div>
          <div className={styles.right}>
            <h1>
              How satisfied are you with sharda sangeet
              vidhyalaya ?
            </h1>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please enter your email !' }, {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },]}
              >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" />
              </Form.Item>

              <Form.Item name="input-number" noStyle rules={[{ message: 'choose year from range 1-6' }, { type: 'number', min: 1, max: 6, message: 'ss' }]}>
                <InputNumber min={1} max={6} type="number" placeholder="current year if already a student" />
              </Form.Item>

              <Form.Item name="ssv_graduate" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox defaultChecked={false}>are you a <strong>SSV</strong> graduate?(completed 6 years of training)</Checkbox>
              </Form.Item>
              <Form.Item name="review_content" >
                <Input.TextArea autoSize={false} placeholder="tell us about your experience at SSV"
                  className={styles.textArea} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <PrimaryButton type="primary" htmlType="submit" className={styles.submitBtn} >
                  submit feedback
                </PrimaryButton>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div >

  );
}
export default UserFeedBack