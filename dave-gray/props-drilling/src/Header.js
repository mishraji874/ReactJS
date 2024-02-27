import React from 'react'

function Header({ title }) {
    // const headerStyle = {
    //     backgroundColor: "royalblue",
    //     color: "#fff"
    // };

    return (
        // <header style={headerStyle}>
        //     <h1>Groceries List</h1>
        // </header>
    
        <header>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
