# AUTO GENERATED FILE - DO NOT EDIT

''DccDropdown <- function(id=NULL, className=NULL, clearable=NULL, closeMenuOnSelect=NULL, disabled=NULL, loading_state=NULL, multi=NULL, optionHeight=NULL, options=NULL, persisted_props=NULL, persistence=NULL, persistence_type=NULL, placeholder=NULL, search_value=NULL, searchable=NULL, style=NULL, value=NULL) {
    
    props <- list(id=id, className=className, clearable=clearable, closeMenuOnSelect=closeMenuOnSelect, disabled=disabled, loading_state=loading_state, multi=multi, optionHeight=optionHeight, options=options, persisted_props=persisted_props, persistence=persistence, persistence_type=persistence_type, placeholder=placeholder, search_value=search_value, searchable=searchable, style=style, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DccDropdown',
        namespace = 'dcc_dropdown',
        propNames = c('id', 'className', 'clearable', 'closeMenuOnSelect', 'disabled', 'loading_state', 'multi', 'optionHeight', 'options', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'search_value', 'searchable', 'style', 'value'),
        package = 'dccDropdown'
        )

    structure(component, class = c('dash_component', 'list'))
}
