import React from 'react'
import classNames from 'classnames';
// import Image from 'next/image'
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './styles.module.scss'


const UserFeedBack: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={classNames('container', styles.feedbackContainer)}>
        <div className={styles.feedbackContainerCard}>
          <div className={styles.left}>
            <h1> We'd love to <br /> hear from you</h1>
            <h4>Answer all the questions, it'll help us to grow </h4>
            <img src="/feeback.svg" alt="feed" height={450} width={450} />
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
                label="name"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item name={['user', 'email']} label="email" rules={[{ type: 'email' }]}>
                <Input />
              </Form.Item>

              <Form.Item name={['user', 'email']} label="current year if already a student" rules={[{ type: 'email' }]}>
                <Input />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>are you a ssv graduate?(completed 6 years of training)</Checkbox>
              </Form.Item>
              <Form.Item name={['user', 'introduction']} label="tell us about your experience">
                <Input.TextArea style={{ height: 150 }} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  submit feedback
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div >

  );
}
export default UserFeedBack