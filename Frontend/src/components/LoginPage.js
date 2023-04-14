import React, { useState } from 'react';

export function Login() {
    const [usernameInputState, setUsernameInputState] = useState("")
    const [passwordInputState, setPasswordInputState] = useState("")

    async function login(username, password) {
        let payload = {
            Username: username,
            Password: password
        }
        let token = await fetch('https://localhost:7196/User/loginUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(res => {
                sessionStorage.setItem("jwtKey", res["access_token"])
                sessionStorage.setItem("tokenExpiresAt", res["expiresAt"])
                sessionStorage.setItem("userName", usernameInputState)
            })
    }

    const loginForm = (
        <div>
            <form>
                <label>
                    Username
                    <input type="text" name="username" onChange={event => { setUsernameInputState(event.target.value) }} />
                </label>
                <label>
                    Password
                    <input type="text" name="username" onChange={event => { setPasswordInputState(event.target.value) }} />
                </label>
            </form>
            <button className="btn btn-light" onClick={() => login(usernameInputState, passwordInputState)}>Sign in</button>
        </div>
    )

    return (
        <div className="login-component">
            { loginForm }
        </div>
    )
}