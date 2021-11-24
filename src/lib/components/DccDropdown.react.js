import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { DccDropdown as RealComponent } from '../LazyLoader';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DccDropdown extends Component {
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props}/>
            </React.Suspense>
        );
    }
}

DccDropdown.defaultProps = {
    clearable: true,
    disabled: false,
    multi: false,
    searchable: true,
    optionHeight: 35,
    persisted_props: ['value'],
    persistence_type: 'local',
};

DccDropdown.propTypes = {
    /**
     * An array of options {label: [string|number], value: [string|number]},
     * an optional disabled field can be used for each option
     */
     options: PropTypes.oneOfType([
        /**
         * Array of options where the label and the value are the same thing - [string|number|bool]
         */
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.bool,
            ])
        ),
        /**
         * Simpler `options` representation in dictionary format. The order is not guaranteed.
         * {`value1`: `label1`, `value2`: `label2`, ... }
         * which is equal to
         * [{label: `label1`, value: `value1`}, {label: `label2`, value: `value2`}, ...]
         */
        PropTypes.object,
        /**
         * An array of options {label: [string|number], value: [string|number]},
         * an optional disabled field can be used for each option
         */
        PropTypes.arrayOf(
            PropTypes.exact({
                /**
                 * The option's label
                 */
                label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                    .isRequired,

                /**
                 * The value of the option. This value
                 * corresponds to the items specified in the
                 * `value` property.
                 */
                value: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                    PropTypes.bool,
                ]).isRequired,

                /**
                 * If true, this option is disabled and cannot be selected.
                 */
                disabled: PropTypes.bool,

                /**
                 * The HTML 'title' attribute for the option. Allows for
                 * information on hover. For more information on this attribute,
                 * see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title
                 */
                title: PropTypes.string,
            })
        ),
    ]),

    /**
     * The value of the input. If `multi` is false (the default)
     * then value is just a string that corresponds to the values
     * provided in the `options` property. If `multi` is true, then
     * multiple values can be selected at once, and `value` is an
     * array of items with values corresponding to those in the
     * `options` prop.
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.bool,
            ])
        ),
    ]),

    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * height of each option. Can be increased when label lengths would wrap around
     */
    optionHeight: PropTypes.number,

    /**
     * className of the dropdown element
     */
    className: PropTypes.string,

    /**
     * Whether or not the dropdown is "clearable", that is, whether or
     * not a small "x" appears on the right of the dropdown that removes
     * the selected value.
     */
    clearable: PropTypes.bool,

    /**
     * If true, this dropdown is disabled and the selection cannot be changed.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the user can select multiple values
     */
    multi: PropTypes.bool,

    /**
     * The grey, default text shown when no option is selected
     */
    placeholder: PropTypes.string,

    /**
     * Whether to enable the searching feature or not
     */
    searchable: PropTypes.bool,

    /**
     * The value typed in the DropDown for searching.
     */
    search_value: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the input changes
     */
    setProps: PropTypes.func,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),

    /**
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, a `value` that the user has
     * changed while using the app will keep that change, as long as
     * the new `value` also matches what was given originally.
     * Used in conjunction with `persistence_type`.
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),
};


export const defaultProps = DccDropdown.defaultProps;
export const propTypes = DccDropdown.propTypes;