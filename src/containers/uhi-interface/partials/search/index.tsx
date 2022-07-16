import { AutoComplete, Input, SelectProps } from 'antd';
import React, { useState } from 'react';

const SearchSymptoms = () => {
    // const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const [value, setValue] = useState('');

    const onSelect = value => {
        setValue(value);
    };

    const title = data => <span>{data}</span>;
    const options = [
        {
            value: 'Fever',
            title: 's'
        },
        {
            value: 'Cough'
        },
        {
            value: 'Rash'
        }
    ];
    return (
        <div className="container">
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{ width: '100%', margin: '20px 0' }}
                options={options}
                value={value}
                // onChange={e => setValue(e)}
                onSelect={onSelect}
            >
                <Input.Search size="large" placeholder="input here" enterButton value={value} />
            </AutoComplete>
        </div>
    );
};

export default SearchSymptoms;
