import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { Button, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { specialityToSymptomMapping, symptomMapping } from './helper';
import styles from './styles.module.scss';

const AddSymptoms = () => {
    const [form] = Form.useForm();
    const [symp, setSymp] = useState('');
    const [d, setd] = useState(false);
    const speciality = 'GP';

    const handleSelection = data => {
        form.setFieldsValue({ symptom: data });
        setSymp(data);
        form.setFieldsValue({ options: [] });
    };

    const isSelectedSympton = useCallback(
        (curr: string) => {
            const selectedSymptoms: string[] = form.getFieldValue('options');
            if (selectedSymptoms?.includes(curr)) {
                return true;
            }
            return false;
        },
        [form.setFieldsValue('options')]
    );

    return (
        <div className={classNames('container', styles.innerContainer)}>
            <h1>Add your symptoms</h1>
            <span>Add as many symptoms as you can for better Clinic Experience</span>
            <Form onFinish={e => console.log(e)} style={{ width: '100%' }} form={form} name="patient-data">
                <div className={styles.suggestions}>
                    {specialityToSymptomMapping[speciality].map(curr => (
                        <div>
                            {!curr.custom ? (
                                <div className={styles.items}>
                                    <Button
                                        block
                                        onClick={() => handleSelection(curr.speciality)}
                                        shape="circle"
                                        className={classNames(styles.btn, curr.speciality === symp ? styles.selectedEmoji : styles.deselected)}
                                    >
                                        <div className={styles.btnContent}>
                                            <Image src={curr.icon as any} height={70} width={70} />
                                            <h4>{curr.speciality}</h4>
                                        </div>
                                    </Button>
                                </div>
                            ) : (
                                <div className={styles.items}>
                                    <Button
                                        onClick={() => handleSelection(curr.speciality)}
                                        shape="circle"
                                        className={classNames(styles.btn, curr.speciality === symp ? styles.selectedEmoji : styles.deselected)}
                                    >
                                        <curr.icon style={{ color: '#4ED8E9', fontSize: '70px', marginBottom: 5 }} />
                                        <h4>{curr.speciality}</h4>
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.symptoms}>
                    <h3>Select your symptoms for {form.getFieldValue('symptom')}</h3>
                    <Form.Item shouldUpdate name="options" initialValue={[]} rules={[{ type: 'array' }]}>
                        {symptomMapping[symp]?.map(curr => (
                            <Button
                                onClick={() => {
                                    if (form.getFieldValue('options')?.includes(curr)) {
                                        form.setFieldsValue({ options: form.getFieldValue('options')?.filter(_curr => _curr !== curr) });
                                    } else {
                                        form.setFieldsValue({ options: [...(form.getFieldValue('options') || []), curr] });
                                    }
                                    setd(!d);
                                }}
                                className={isSelectedSympton(curr) ? styles.selectedOption : styles.option}
                            >
                                <span>{curr}</span>
                            </Button>
                        ))}
                    </Form.Item>
                </div>
                {/* <Button htmlType="submit">s</Button> */}
                <div>
                    <Form.Item name="upload" valuePropName="fileList">
                        <div className={styles.upload}>
                            <Upload name="logo" listType="picture-card">
                                <UploadOutlined style={{ color: '#4ED8E9', fontSize: 20 }} />
                                <span className={styles.text}>
                                    Upload documents <br /> & prescription
                                </span>
                            </Upload>
                        </div>
                    </Form.Item>
                </div>

                <Form.Item hidden name="symptom" />
            </Form>
        </div>
    );
};

export default AddSymptoms;
