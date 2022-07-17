import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { Button, Form, message, Modal, Spin, Upload } from 'antd';
import { CheckCircleFilled, CloseOutlined, LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { useDispatch, batch, useSelector } from 'react-redux';
import { RcFile, UploadFile } from 'antd/lib/upload/interface';
import { specialityToSymptomMapping, symptomMapping } from './helper';
import styles from './styles.module.scss';
import { finalData, remOptions, resetProgress, updateProgress } from '../../actions';
import { savePatientDetails } from '../../api';

const AddSymptoms = () => {
    const [form] = Form.useForm();
    const [symp, setSymp] = useState('Head');
    const [d, setd] = useState(false);
    const [savedSymp, setSavedSymp] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [selectedCat, setSelectedCat] = useState([symp]);
    const canInteract = useSelector<any>(state => state?.uhi?.apptDetails?.emr?.symptoms?.length > 0);
    const options = useSelector<any>(state => state?.uhi?.options || []);
    const progess = useSelector<any>(state => state?.uhi?.progress);
    const apptDetails = useSelector<any>(state => state?.uhi?.apptDetails);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

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
        setSymp('');
    };

    const removeSavedSymp = useCallback(curr => {
        setSavedSymp(prev => prev.filter(_curr => _curr !== curr));
        dispatch(remOptions(curr));
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

    const anySympSelectedFromCategory = useCallback(() => {
        return form.getFieldValue('category')?.includes(symp) && !form.getFieldValue('options')?.includes(...symptomMapping[symp]);
    }, [symp, options]);

    const finalSymp = useMemo(() => {
        return [...savedSymp, ...options];
    }, [symp, options]);

    const onFinish = async e => {
        try {
            setLoading(true);
            const res = await savePatientDetails({ emr: apptDetails?.emr?.emrId, symptoms: [...finalSymp] });
            if (res) {
                message.success('Successfully submitted details !');
            }
        } catch (error) {
            message.error('Error submitting details');
        } finally {
            setDone(true);
            setLoading(false);
        }
    };
    return (
        <div className={classNames('container', styles.innerContainer)}>
            <h1>Add your symptoms</h1>
            <span>Add as many symptoms as you can for better Clinic Experience</span>
            <Form onFinish={onFinish} style={{ width: '100%' }} form={form} name="patient-data" initialValues={{ symptom: symp }}>
                <div className={styles.suggestions}>
                    {specialityToSymptomMapping[speciality].map(curr => (
                        <div>
                            {!curr.custom ? (
                                <div className={styles.items}>
                                    {!!form.getFieldValue('category')?.includes(curr.speciality) && curr.speciality !== symp && (
                                        <CheckCircleFilled className={styles.tick} />
                                    )}
                                    <Button
                                        disabled={canInteract as boolean}
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
                                    {!!form.getFieldValue('category')?.includes(curr.speciality) && curr.speciality !== symp && (
                                        <CheckCircleFilled className={styles.tick} />
                                    )}

                                    <Button
                                        disabled={canInteract as boolean}
                                        onClick={() => handleSelection(curr.speciality)}
                                        shape="circle"
                                        className={classNames(styles.btn, curr.speciality === symp ? styles.selectedEmoji : styles.deselected)}
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
                    {!!symp.length && (
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
                                        dispatch(resetProgress(0));
                                    }}
                                >
                                    cancel
                                </Button>
                            )}
                        </div>
                    )}
                    {!canInteract && (
                        <div>
                            <Form.Item name="options" initialValue={[]} rules={[{ type: 'array' }]}>
                                {symptomMapping[symp]?.map(curr => (
                                    <Button
                                        onClick={() => {
                                            if (form.getFieldValue('options')?.includes(curr)) {
                                                form.setFieldsValue({ options: form.getFieldValue('options')?.filter(_curr => _curr !== curr) });
                                                dispatch(updateProgress(-20));
                                                if (anySympSelectedFromCategory()) {
                                                    form.setFieldsValue({ category: form.getFieldValue('category')?.filter(_curr => _curr !== symp) });
                                                }
                                            } else {
                                                if (progess / 20 >= 6) {
                                                    message.error('Only 6 symptoms can be selected at a time');
                                                    return;
                                                }
                                                form.setFieldsValue({ options: [...(form.getFieldValue('options') || []), curr] });
                                                if (!form.getFieldValue('category')?.includes(symp)) {
                                                    form.setFieldsValue({ category: [...(form.getFieldValue('category') || []), symp] });
                                                }
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
                            {!!finalSymp.length && (
                                <div className={styles.savedSymptoms}>
                                    <h3>Selected Symptoms</h3>
                                    {finalSymp.map(curr => (
                                        <Button onClick={() => removeSavedSymp(curr)}>
                                            {curr}
                                            <CloseOutlined />
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {/* <Button htmlType="submit">s</Button> */}
                <div>
                    <Form.Item name="upload" valuePropName="fileList">
                        <div className={styles.upload}>
                            <h3>Upload Documents & Prescriptions</h3>
                            <br />
                            <Upload beforeUpload={e => console.log(e)} onPreview={handlePreview} listType="picture-card">
                                <UploadOutlined style={{ color: '#4ED8E9', fontSize: 20 }} />
                                <span className={styles.text}>Upload</span>
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={closePreview}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                    </Form.Item>
                </div>
                <Form.Item hidden name="symptom" initialValue={symp} />
                <Form.Item hidden name="category" />
                {!done && (
                    <div className={styles.submit2}>
                        <Button htmlType="submit" type="text">
                            Submit {loading && <Spin indicator={<LoadingOutlined style={{ fontSize: 30, marginLeft: 20, color: 'blue' }} />} />}
                        </Button>
                    </div>
                )}
            </Form>
        </div>
    );
};

export default AddSymptoms;
