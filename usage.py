import dcc_dropdown
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dcc_dropdown.DccDropdown(
        id='input',
        # value='my-value',
        # label='my-label',
        multi=True,
        closeMenuOnSelect=False,
        options=[
            {'label': 'New York City', 'value': 'NYC'},
            {'label': 'Montreal', 'value': 'MTL'},
            {'label': 'San Francisco', 'value': 'SF'}
        ]
    ),
    html.Br(),
    html.Div(id='output'),
    dcc_dropdown.DccDropdown(
        id='input5',
        # value='my-value',
        # label='my-label',
        multi=True,
        closeMenuOnSelect=False,
        options=[
            {'label': 'New York City', 'value': 'NYC'},
            {'label': 'Montreal', 'value': 'MTL'},
            {'label': 'San Francisco', 'value': 'SF'},
            {'label': 'San dsjbks', 'value': 'S7F'},
            {'label': 'tgt Francisco', 'value': 'S8F'},
        ]
    ),
    html.Br(),
    html.Div(id='op'),
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)

@app.callback(Output('op', 'children'), [Input('input5', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
