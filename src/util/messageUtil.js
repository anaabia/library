import React from 'react'
import { FormattedMessage } from 'react-intl';

export const MessageH2 = (props, className) => {
    return (
        <FormattedMessage id={props.id}>
            {(message) => <h2 className={props.className}>{message}</h2>}
        </FormattedMessage>
    );
};

export const MessageOptions = (props) => {
    return (
        <FormattedMessage id={props.id}>
            {(message) => <option value={props.id} disabled={props.disabled} >{message}</option>}
        </FormattedMessage>
    );
};

export const MessageInput = (props) => {
    return (
        <FormattedMessage id={props.id}>
            {(message) => <input type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder ? message : ""} />}
        </FormattedMessage>)
    ;
};