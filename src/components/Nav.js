import React from "react";

const navStyle = {
    textAlign: "center",
    fontSize: "30px"
};

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1" style={navStyle}> Employee Directory</span>
            <span className="navbar-text">Use the search bar to narrow your results.</span>
        </nav>
    );
}

export default Nav;