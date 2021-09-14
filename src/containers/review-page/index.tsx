import React, { useState } from 'react';
import classNames from 'classnames';
// import Image from 'next/image'
import { Form, Input, Checkbox, InputNumber, Rate, Upload, Button, message } from 'antd';
import { UserOutlined, MailOutlined, UploadOutlined } from '@ant-design/icons';
import PrimaryButton from '@app/src/components/primary-button';
import styles from './styles.module.scss';
import { useFeeback } from './hooks';
import { uploadImage } from './api';

const UserFeedBack: React.FC = () => {
    const [form] = Form.useForm();
    const [rating, setRating] = useState(0);
    const { mutate, isLoading } = useFeeback();
    const [uploadLimit, setUploadimit] = useState<number>(0);

    const customIcons = {
        1: (
            <img
                className={rating === 1 ? styles.selectedEmoji : styles.emoji}
                src="https://img.icons8.com/external-justicon-lineal-color-justicon/40/000000/external-emoji-emoji-justicon-lineal-color-justicon-14.png"
                alt="angry"
            />
        ),
        2: (
            <img
                className={rating === 2 ? styles.selectedEmoji : styles.emoji}
                src="https://img.icons8.com/external-justicon-lineal-color-justicon/40/000000/external-emoji-emoji-justicon-lineal-color-justicon-8.png"
                alt="not-happy"
            />
        ),
        3: (
            <img
                className={rating === 3 ? styles.selectedEmoji : styles.emoji}
                src="https://img.icons8.com/external-justicon-lineal-color-justicon/40/000000/external-emoji-emoji-justicon-lineal-color-justicon-3.png"
                alt="ok"
            />
        ),
        4: (
            <img
                className={rating === 4 ? styles.selectedEmoji : styles.emoji}
                src="https://img.icons8.com/external-justicon-lineal-color-justicon/40/000000/external-emoji-emoji-justicon-lineal-color-justicon-13.png"
                alt="happy"
            />
        ),
        5: (
            <img
                className={rating === 5 ? styles.selectedEmoji : styles.emoji}
                src="https://img.icons8.com/external-justicon-lineal-color-justicon/40/000000/external-emoji-emoji-justicon-lineal-color-justicon-9.png"
                alt="excellent"
            />
        )
    };

    const props = {
        beforeUpload: file => {
            if (uploadLimit >= 3) {
                message.error('You have exceeded upload limit');
                return Upload.LIST_IGNORE;
            }
            if (file.type !== 'image/png') {
                // message.error(`${file.name} is not a png file`);
            }
            if (file.type !== ('image/png' || 'image/jpg' || 'image/jpeg')) {
                message.error('Please upload image of format png, jpg, jpeg');
                return Upload.LIST_IGNORE;
            }
            if (file.size > 5 * 1024 * 1024) {
                message.error('File size is too big, max-size is 5mb');
            }
        },
        onChange: info => {
            if (info?.fileList?.[0]?.status === 'done') {
                setUploadimit(uploadLimit + 1);
            }
        },

        customRequest: async (file): Promise<void> => {
            const data = new FormData();
            data.append('image', file.file);
            try {
                const res = await uploadImage(data);
                if (res?.success === true && res?.message?.length > 0) {
                    message.success(res?.message);
                    form.setFieldsValue({ profile_avatar: res?.image_url });
                }
                file?.onSuccess(true);
            } catch (error) {
                message.error(error);
            }
        }
    };
    return (
        <div className={styles.container}>
            <div className={classNames('container', styles.feedbackContainer)}>
                <div className={styles.feedbackContainerCard}>
                    <div className={styles.left}>
                        <h1>
                            {' '}
                            We'd love to <br /> hear from you
                        </h1>
                        <h4>Answer all the questions, it'll help us to grow </h4>
                        <img src="/feeback.svg" alt="feed" />
                    </div>
                    <div className={styles.right}>
                        <h1>How satisfied are you with sharda sangeet vidhyalaya ?</h1>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={v => mutate({ ...v })}
                            // onFinish={e => console.log(e)}
                            // onFinishFailed={onFinishFailed}
                            form={form}
                            autoComplete="off"
                        >
                            <Form.Item name="star_rating">
                                <Rate
                                    defaultValue={undefined}
                                    character={({ index }) => customIcons[index + 1]}
                                    onChange={e => {
                                        form.setFieldsValue({ star_rating: e });
                                        setRating(e === 0 ? undefined : e);
                                    }}
                                />
                            </Form.Item>
                            <div style={{ display: 'flex', marginBottom: 20 }}>
                                <Form.Item name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
                                    <Input prefix={<UserOutlined type="bo" className="site-form-item-icon" />} placeholder="name" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    // style={{ flexBasis: '100%' }}
                                    rules={[
                                        { required: true, message: 'Please enter your email !' },
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!'
                                        }
                                    ]}
                                >
                                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" />
                                </Form.Item>
                            </div>

                            <Form.Item name="student_year_count" noStyle>
                                <InputNumber min={1} max={6} type="number" placeholder="current year if already a student" />
                            </Form.Item>

                            <Form.Item name="ssv_graduate" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox defaultChecked={false}>
                                    are you a <strong>SSV</strong> graduate?(completed 6 years of training)
                                </Checkbox>
                            </Form.Item>
                            <Form.Item name="review_content" rules={[{ required: true, message: 'Please write a short review' }]}>
                                <Input.TextArea autoSize={false} placeholder="tell us about your experience at SSV" className={styles.textArea} />
                            </Form.Item>
                            <Upload maxCount={1} className={styles.upload} {...props}>
                                <Button icon={<UploadOutlined />}>Upload Photo </Button>
                            </Upload>
                            <Form.Item hidden name="profile_avatar" />
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <PrimaryButton loading={isLoading} type="primary" htmlType="submit" className={styles.submitBtn}>
                                    submit feedback
                                </PrimaryButton>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserFeedBack;
