import React, { useState } from 'react';

export function Registration() {
    const [firstNameInputState, setFirstNameInputState] = useState("")
    const [lastNameInputState, setLastNameInputState] = useState("")
    const [usernameInputState, setUsernameInputState] = useState("")
    const [passwordInputState, setPasswordInputState] = useState("")
    const [confirmPasswordInputState, setConfirmPasswordInputState] = useState("")
    const [emailInputState, setEmailInputState] = useState("")

    async function registrateUser(firstName, lastName, username, password, confirmPassword, email) {
        if (passwordInputState !== confirmPasswordInputState) {
            alert("Password not matching!")
        } else {
            let payload = {
                FirstName: firstName,
                LastName: lastName,
                Username: username,
                Password: password,
                PasswordConfirmation: confirmPassword,
                Email: email,
            }
            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }
            console.log(payload)
            await fetch('https://localhost:7196/User/registrate', requestOptions)
        }
    }

    const registrationForm = (
        <div className="container input-block">
            <form className="registration-input">
                <label>
                    First name
                    <input type="text" name="username" onChange={event => { setFirstNameInputState(event.target.value) }} />
                </label>
                <label>
                    Last name
                    <input type="text" name="username" onChange={event => { setLastNameInputState(event.target.value) }} />
                </label>
                <label>
                    Username
                    <input type="text" name="username" onChange={event => { setUsernameInputState(event.target.value) }} />
                </label>
                <label>
                    Email
                    <input type="email" name="email" onChange={event => { setEmailInputState(event.target.value) }} />
                </label>
                <label>
                    Password
                    <input type="text" name="username" onChange={event => { setPasswordInputState(event.target.value) }} />
                </label>
                <label>
                    Password Confirmation
                    <input type="text" name="username" onChange={event => { setConfirmPasswordInputState(event.target.value) }} />
                </label>
            </form>
            <button className="btn btn-light" onClick={() => registrateUser(firstNameInputState, lastNameInputState, usernameInputState, passwordInputState, confirmPasswordInputState, emailInputState)}>Sign up</button>
        </div>
        
    )
    return (
        <div className="registration-component">
            {registrationForm}
        </div>
    )
}