# OPPORTUNITY BOARD

## Requirements

For development, you will only need Node.js installed on your environement.
Please Make sure your backend is running at port `3000`

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Files Structure
                                # Documentation files
    ├── src                     # Source files      
    ├── tools                   # Tools and utilities
    ├── LICENSE
    └── README.md
    
    ├── src
        ├── assests             
    │   ├── components          # Reusable components
            ├── ui              # UI (Button, dropdown menu, Text) everything related to ui that can be reusable
    │   ├── cypress             # Test files (alternatively `spec` or `tests`)
            ├── e2e             # End 2 End Tests files
            ├── integrations    # Integrations tests
        ├── models              # db models elements
        ├── pages               # Pages folder containing the main page of the project
        ├── reducers            # Reducer elements              # Unit tests
    └── ...
