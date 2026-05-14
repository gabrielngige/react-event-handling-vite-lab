// Code PasswordInput Component Here

function PasswordInput (){
    return(
        <>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                onChange={() => console.log("Entering password...")}
            />
        </>
    )
}

export default PasswordInput;