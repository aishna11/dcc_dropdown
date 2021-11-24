import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isNil, pluck, omit, type} from 'ramda';
import {defaultProps, propTypes} from '../components/DccDropdown.react';
import Select from 'react-virtualized-select';
// import Select from 'react-select';
// import AsyncSelect from "react-select/async";
import createFilterOptions from 'react-select-fast-filter-options';
import '../components/css/react-virtualized-select@3.1.0.css';
import '../components/css/react-virtualized@9.9.0.css';
import '../components/css/Dropdown.css';

import {sanitizeOptions} from '../optionTypes';


const REGEX = /\s+/;
const TOKENIZER = {
    tokenize(text) {
        return text.split(REGEX).filter(
            // Filter empty tokens
            text => text
        );
    },
};

const DELIMITER = ',';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DccDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterOptions: createFilterOptions({
                options: sanitizeOptions(props.options),
                tokenizer: TOKENIZER,
            }),
        };
        // this.dosomething = this.dosomething.bind(this);
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.options !== this.props.options) {
            this.setState({
                filterOptions: createFilterOptions({
                    options: sanitizeOptions(newProps.options),
                    tokenizer: TOKENIZER,
                }),
            });
        }
    }

    // dosomething(){
    //     console.log("in dosomething")
    // }
    
    render() {
        const {
            id,
            clearable,
            multi,
            options,
            setProps,
            style,
            loading_state,
            value,
        } = this.props;
        const {filterOptions} = this.state;
        let selectedValue;
        if (type(value) === 'Array') {
            selectedValue = value.join(DELIMITER);
        } else {
            selectedValue = value;
        }
 
        return (
            <div
                id={id}
                className="dash-dropdown"
                style={style}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                <Select
                    filterOptions={filterOptions}
                    options={sanitizeOptions(options)}
                    value={selectedValue}
                    closeOnSelect={false}
                    blurInputOnSelect={false}
                    onChange={selectedOption => {
                        if (multi) {
                            let value;
                            if (isNil(selectedOption)) {
                                value = [];
                            } else {
                                value = pluck('value', selectedOption);
                            }
                            setProps({value});
                        } else {
                            let value;
                            if (isNil(selectedOption)) {
                                value = null;
                            } else {
                                value = selectedOption.value;
                            }
                            setProps({value});
                        };
                    }}
                    onInputChange={search_value => setProps({search_value})}
                    backspaceRemoves={clearable}
                    deleteRemoves={clearable}
                    inputProps={{autoComplete: 'off'}}
                    {...omit(['setProps', 'value', 'options'], this.props)}
                />
            </div>
        );
    }
}


DccDropdown.defaultProps = defaultProps;
DccDropdown.propTypes = propTypes;