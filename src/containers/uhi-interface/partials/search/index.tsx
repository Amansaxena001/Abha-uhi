import { AutoComplete, Input, message, SelectProps, Spin } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { fetchSearchSuggestions } from '../../api';
import { saveOptions, updateProgress } from '../../actions';

const SearchSymptoms = () => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const progess = useSelector(state => state?.uhi?.progress);

    const fetchInitialOptions = async () => {
        const res = await fetchSearchSuggestions('Fever');
        if (res.data) {
            setOptions(
                res.data?.map(curr => {
                    return {
                        value: curr
                    };
                })
            );
        }
    };

    useEffect(() => {
        fetchInitialOptions();
    }, []);

    const onSelect = (_value: string) => {
        if (progess / 20 >= 6) {
            message.error('Only 6 symptoms can be selected at a time');
            return;
        }

        setValue(_value);
        dispatch(saveOptions(_value));
        dispatch(updateProgress(20));
    };

    const handleSearch = async e => {
        try {
            if (e.length > 2) {
                setLoading(true);
                const res = await fetchSearchSuggestions(e);
                setOptions(
                    res.data?.map(curr => {
                        return {
                            value: curr
                        };
                    })
                );
            }
        } catch (error) {
            setOptions([]);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className={classNames('container', styles.inner)}>
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{ width: '100%', margin: '20px 0' }}
                options={options}
                value={value}
                onSearch={debounce(handleSearch, 300)}
                onChange={e => setValue(e)}
                onSelect={onSelect}
                notFoundContent={
                    loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Spin />
                        </div>
                    ) : (
                        'No matches found'
                    )
                }
            >
                <Input.Search size="large" placeholder="Search symptoms" enterButton value={value} />
            </AutoComplete>
        </div>
    );
};

export default SearchSymptoms;
