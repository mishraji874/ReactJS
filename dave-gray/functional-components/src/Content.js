import React from 'react'

function Content() {
    const handleNameChange = () => {
        const names = ["bob", "kevin", "dave"];
        const int = Math.floor(Math.random * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log("You clicked it!!");
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it!</button>
            <button onClick={() => handleClick2('Dave')}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
    );
}

export default Content