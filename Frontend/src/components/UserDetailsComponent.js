import React, { useState } from 'react';

export function UserDetailsComponent(selectRankFrom, dropdownOptionFromState, selectRankTo, dropdownOptionToState, currentRankPoints, selectedRegionState, game) {
    const [firstNameInputState, setFirstNameInputState] = useState("")
    const [lastNameInputState, setLastNameInputState] = useState("")
    const [emailInputState, setEmailInputState] = useState("")

    async function handleOnClick(selectRankFrom, dropDownFrom, selectRankTo, dropDownTo, firstName, lastName, email, currentRankPoints, selectedRegionState) {
        if (selectRankFrom && dropDownFrom && selectRankTo && dropDownTo && firstName && lastName && email && currentRankPoints && selectedRegionState) {
            let payload = {
                CurrentRank: selectRankFrom,
                CurrentRankLevel: dropDownFrom,
                CurrentRankPoints: currentRankPoints,
                OrderedRank: selectRankTo,
                OrderedRankLevel: dropDownTo,
                SelectedRegion: selectedRegionState,
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
        } else {
            alert("Missing Data! Please check if you gave us everything!")
        }

        
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

    const summaryComponent = (
        <div className="summary-component">
            <p>First Name: {firstNameInputState}</p>
            <p>Last Name: {lastNameInputState}</p>
            <p>Contact Email: {emailInputState}</p>
            <p>Current Rank: {selectRankFrom} {dropdownOptionFromState} {currentRankPoints}</p>
            <p>Desired Rank: {selectRankTo} {dropdownOptionToState}</p>
            <p>Region: {selectedRegionState}</p>

            <button id="submit-btn" className="btn btn-light" onClick={() => handleOnClick(
                selectRankFrom,
                dropdownOptionFromState,
                selectRankTo,
                dropdownOptionToState,
                firstNameInputState,
                lastNameInputState,
                emailInputState,
                currentRankPoints,
                selectedRegionState)}>Submit</button>
        </div>
    )
    

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
        </div>
        
    )

    return (
        <div className="col input-details-container">
            {inputFrom}
            {summaryComponent}
        </div>
    )
    
    

}


