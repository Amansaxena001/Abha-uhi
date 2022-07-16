import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { Button, Form, Modal, Upload } from 'antd';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { useDispatch, batch } from 'react-redux';
import { RcFile, UploadFile } from 'antd/lib/upload/interface';
import { specialityToSymptomMapping, symptomMapping } from './helper';
import styles from './styles.module.scss';
import { resetProgress, updateProgress } from '../../actions';

const AddSymptoms = () => {
    const [form] = Form.useForm();
    const [symp, setSymp] = useState('Head');
    const [d, setd] = useState(false);
    const [savedSymp, setSavedSymp] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [selectedCat, setSelectedCat] = useState([symp]);

    const dispatch = useDispatch();
    const speciality = 'GP';
    const handleSelection = data => {
        form.setFieldsValue({ symptom: data });
        batch(() => {
            setSymp(data);
            if (!selectedCat.includes(data)) {
                setSelectedCat(prev => [...prev, data]);
            }
        });
    };
    const saveSymptoms = () => {
        setSavedSymp(form.getFieldValue('options'));
    };

    const removeSavedSymp = useCallback(curr => {
        setSavedSymp(prev => prev.filter(_curr => _curr !== curr));
    }, []);

    const getBase64 = (file: RcFile): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewVisible(true);
    };

    const closePreview = () => {
        setPreviewVisible(false);
    };
    return (
        <div className={classNames('container', styles.innerContainer)}>
            <h1>Add your symptoms</h1>
            <span>Add as many symptoms as you can for better Clinic Experience</span>
            <Form onFinish={e => console.log(e)} style={{ width: '100%' }} form={form} name="patient-data" initialValues={{ symptom: symp }}>
                <div className={styles.suggestions}>
                    {specialityToSymptomMapping[speciality].map(curr => (
                        <div>
                            {!curr.custom ? (
                                <div className={styles.items}>
                                    <Button
                                        block
                                        onClick={() => handleSelection(curr.speciality)}
                                        shape="circle"
                                        className={classNames(styles.btn, selectedCat.includes(curr.speciality) ? styles.selectedEmoji : styles.deselected)}
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
                                        className={classNames(styles.btn, selectedCat.includes(curr.speciality) ? styles.selectedEmoji : styles.deselected)}
                                    >
                                        <curr.icon style={{ color: '#4ED8E9', fontSize: '70px' }} />
                                        <h4>{curr.speciality}</h4>
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.symptoms}>
                    {!!symp.length && !savedSymp.length && (
                        <div className={styles.header}>
                            <h3>Select your symptoms for {symp}</h3>
                            {form.getFieldValue('options')?.length ? (
                                <Button onClick={saveSymptoms}>save</Button>
                            ) : (
                                <Button
                                    style={{ color: 'red' }}
                                    onClick={() => {
                                        setSymp('');
                                        setSelectedCat([]);
                                    }}
                                >
                                    cancel
                                </Button>
                            )}
                        </div>
                    )}
                    {!!savedSymp.length && (
                        <div className={styles.savedSymptoms}>
                            <h3>Selected Symptoms</h3>
                            {savedSymp.map(curr => (
                                <Button onClick={() => removeSavedSymp(curr)}>
                                    {curr}
                                    <CloseOutlined />
                                </Button>
                            ))}
                        </div>
                    )}
                    {!savedSymp.length && (
                        <Form.Item name="options" initialValue={[]} rules={[{ type: 'array' }]}>
                            {symptomMapping[symp]?.map(curr => (
                                <Button
                                    onClick={() => {
                                        if (form.getFieldValue('options')?.includes(curr)) {
                                            form.setFieldsValue({ options: form.getFieldValue('options')?.filter(_curr => _curr !== curr) });
                                            dispatch(updateProgress(-20));
                                        } else {
                                            form.setFieldsValue({ options: [...(form.getFieldValue('options') || []), curr] });
                                            dispatch(updateProgress(20));
                                        }

                                        setd(!d);
                                    }}
                                    className={form.getFieldValue('options')?.includes(curr) ? styles.selectedOption : styles.option}
                                >
                                    <span>{curr}</span>
                                </Button>
                            ))}
                        </Form.Item>
                    )}
                </div>
                {/* <Button htmlType="submit">s</Button> */}
                <div>
                    <Form.Item name="upload" valuePropName="fileList">
                        <div className={styles.upload}>
                            <Upload beforeUpload={e => console.log(e)} accept="application/pdf, image/*" onPreview={handlePreview} listType="picture-card">
                                <UploadOutlined style={{ color: '#4ED8E9', fontSize: 20 }} />
                                <span className={styles.text}>
                                    Upload documents <br /> & prescription
                                </span>
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={closePreview}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                            ;
                        </div>
                    </Form.Item>
                </div>

                <Form.Item hidden name="symptom" initialValue={symp} />
            </Form>
        </div>
    );
};

export default AddSymptoms;
