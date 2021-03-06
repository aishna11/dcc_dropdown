# AUTO GENERATED FILE - DO NOT EDIT

export ''_dccdropdown

"""
    ''_dccdropdown(;kwargs...)

A DccDropdown component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): className of the dropdown element
- `clearable` (Bool; optional): Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.
- `closeMenuOnSelect` (Bool; optional): Whether or not the dropdown is "clearable", that is, whether or
not a small "x" appears on the right of the dropdown that removes
the selected value.
- `disabled` (Bool; optional): If true, this dropdown is disabled and the selection cannot be changed.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `multi` (Bool; optional): If true, the user can select multiple values
- `optionHeight` (Real; optional): height of each option. Can be increased when label lengths would wrap around
- `options` (optional): An array of options {label: [string|number], value: [string|number]},
an optional disabled field can be used for each option. options has the following type: Array of String | Real | Bools | Dict | Array of lists containing elements 'label', 'value', 'disabled', 'title'.
Those elements have the following types:
  - `label` (String | Real; required): The option's label
  - `value` (String | Real | Bool; required): The value of the option. This value
corresponds to the items specified in the
`value` property.
  - `disabled` (Bool; optional): If true, this option is disabled and cannot be selected.
  - `title` (String; optional): The HTML 'title' attribute for the option. Allows for
information on hover. For more information on this attribute,
see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/titles
- `persisted_props` (Array of a value equal to: 'value's; optional): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- `persistence` (Bool | String | Real; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- `persistence_type` (a value equal to: 'local', 'session', 'memory'; optional): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.
- `placeholder` (String; optional): The grey, default text shown when no option is selected
- `search_value` (String; optional): The value typed in the DropDown for searching.
- `searchable` (Bool; optional): Whether to enable the searching feature or not
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `value` (String | Real | Bool | Array of String | Real | Bools; optional): The value of the input. If `multi` is false (the default)
then value is just a string that corresponds to the values
provided in the `options` property. If `multi` is true, then
multiple values can be selected at once, and `value` is an
array of items with values corresponding to those in the
`options` prop.
"""
function ''_dccdropdown(; kwargs...)
        available_props = Symbol[:id, :className, :clearable, :closeMenuOnSelect, :disabled, :loading_state, :multi, :optionHeight, :options, :persisted_props, :persistence, :persistence_type, :placeholder, :search_value, :searchable, :style, :value]
        wild_props = Symbol[]
        return Component("''_dccdropdown", "DccDropdown", "dcc_dropdown", available_props, wild_props; kwargs...)
end

