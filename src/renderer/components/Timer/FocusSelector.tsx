import React, { FunctionComponent, useState, useEffect } from 'react';
import { Select } from 'antd';
import { ProjectActionTypes } from '../Project/action';
import { TimerActionTypes as TimerActions } from './action';
import { RootState } from '../../reducers';
const { Option } = Select;

interface Props extends ProjectActionTypes, TimerActions, RootState {}
export const FocusSelector: FunctionComponent<Props> = (props: Props) => {
    const onChange = (value?: string) => {
        props.setProject(value);
    };

    const options = Object.values(props.project.projectList).map(v => (
        <Option key={v.name} value={v.name}>
            {v.name}
        </Option>
    ));

    useEffect(() => {
        if (options.length === 0) {
            props.fetchAll();
        }
    }, []);

    return (
        <Select
            value={props.timer.project}
            style={{
                minWidth: 300,
                width: '100%'
            }}
            placeholder="Choose Your Focus"
            onChange={onChange}
        >
            {options}
        </Select>
    );
};
