
module DccDropdown
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/''_dccdropdown.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dcc_dropdown",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-DccDropdown.js",
    external_url = "https://unpkg.com/dcc_dropdown@0.0.1/dcc_dropdown/async-DccDropdown.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-DccDropdown.js.map",
    external_url = "https://unpkg.com/dcc_dropdown@0.0.1/dcc_dropdown/async-DccDropdown.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dcc_dropdown.min.js",
    external_url = "https://unpkg.com/dcc_dropdown@0.0.1/dcc_dropdown/dcc_dropdown.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dcc_dropdown.min.js.map",
    external_url = "https://unpkg.com/dcc_dropdown@0.0.1/dcc_dropdown/dcc_dropdown.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
