import React, { useState } from 'react';

export function UserDetailsComponent(selectRankFrom, dropdownOptionFromState, selectRankTo, dropdownOptionToState) {
    const [firstNameInputState, setFirstNameInputState] = useState("")
    const [lastNameInputState, setLastNameInputState] = useState("")
    const [emailInputState, setEmailInputState] = useState("")

    async function handleOnClick(selectRankFrom, dropDownFrom, selectRankTo, dropDownTo, firstName, lastName, email) {
        let payload = {
            CurrentRank: selectRankFrom,
            CurrentRankLevel: dropDownFrom,
            OrderedRank: selectRankTo,
            OrderedRankLevel: dropDownTo,
            FirstName: firstName,
            LastName: lastName,
            Email: email
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
        console.log(payload)
        await fetch(`https://localhost:7196/api/Email`, requestOptions)
    }

    const handleFirstNameOnChange = event => {
        setFirstNameInputState(event.target.value)
    }

    const handleLastNameOnChange = event => {
        setLastNameInputState(event.target.value)
    }

    const handleEmailOnChange = event => {
        setEmailInputState(event.target.value)
    }

    const firstNameComponent = (
        <label>
            First Name:
            <input type="text" name="firstName" onChange={handleFirstNameOnChange} required />
        </label>
    )

    const lastNameComponent = (
        <label>
            Last Name:
            <input type="text" name="lastName" onChange={handleLastNameOnChange} required />
        </label>
    )

    const emailComponent = (
        <label>
            Email:
            <input type="email" name="email" onChange={handleEmailOnChange} required />
        </label>
    )

    const inputFrom = (
        <div>
            <form className="input-block">
                {firstNameComponent}
                {lastNameComponent}
                {emailComponent}
            </form>
            <button id="submit-btn" onClick={() => handleOnClick(
                selectRankFrom,
                dropdownOptionFromState,
                selectRankTo,
                dropdownOptionToState,
                firstNameInputState,
                lastNameInputState,
                emailInputState)}>Submit</button>
        </div>
        
        )
    return (
        <div className="input-details-container">
            {inputFrom}
        </div>
        )
}

