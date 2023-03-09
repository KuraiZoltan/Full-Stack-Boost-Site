import React, { useState } from "react"
import { UserDetailsComponent } from "./UserDetailsComponent"

let selectRankFrom = ""
let selectRankTo = ""


export function Valorant() {
    const [dropdownOptionFromState, setDropdownOptionFromState] = useState("")
    const [dropdownOptionToState, setDropdownOptionToState] = useState("")
    const [currentRRInputState, setcurrentRRInputState] = useState("")
    const [selectedRegionState, setSelectedRegionState] = useState("")

    function getSelectRankFrom(rank) {
        selectRankFrom = rank
    }

    function getSelectRankTo(rank) {
        selectRankTo = rank
    }

    const handleCurrentLpInputOnChange = event => {
        setcurrentRRInputState(event.target.value)
    }

    const rankSelectFromBlock = (
        <div className="col select-from-buttons">
            <h2>Select your region!</h2>
            <select className="form-select" onChange={(e) => { let selectedRegion = e.target.value; setSelectedRegionState(selectedRegion) }}>
                <option value="0">Nothing selected</option>
                <option value="Europe West">Europe West</option>
                <option value="Europe Nordic & East">Europe Nordic & East</option>
            </select>
            <h2 className="rank-form-title">Select your current rank here!</h2>
            <button className="rank-button" onClick={() => getSelectRankFrom("Iron")}><img src="https://boostroyal.com/assets/images/divisions/valorant/ironiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankFrom("Bronze")}><img src="https://boostroyal.com/assets/images/divisions/valorant/bronzeiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankFrom("Silver")}><img src="https://boostroyal.com/assets/images/divisions/valorant/silveriii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankFrom("Gold")}><img src="https://boostroyal.com/assets/images/divisions/valorant/goldiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankFrom("Platinum")}><img src="https://boostroyal.com/assets/images/divisions/valorant/platinumiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankFrom("Diamond")}><img src="https://boostroyal.com/assets/images/divisions/valorant/diamondiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankFrom("Ascendant")}><img src="https://boostroyal.com/assets/images/divisions/valorant/ascendantiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankFrom("Immortal")}><img src="https://boostroyal.com/assets/images/divisions/valorant/immortaliii.png"></img></button>
            <div>
                <select className="form-select" onChange={(e) => { let selectedRank = e.target.value; setDropdownOptionFromState(selectedRank) }}>
                    <option value="0">Nothing selected</option>
                    <option value="3">III</option>
                    <option value="2">II</option>
                    <option value="1">I</option>
                </select>
            </div>
            <label>
                Current RR:
                <input type="text" onChange={handleCurrentLpInputOnChange} />
            </label>
        </div>

    )
    const rankSelectToBlock = (
        <div className="col select-to-buttons">
            <h2 className="rank-form-title">Select your desired rank here!</h2>
            <button className="rank-button" onClick={() => getSelectRankTo("Iron")}><img src="https://boostroyal.com/assets/images/divisions/valorant/ironiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankTo("Bronze")}><img src="https://boostroyal.com/assets/images/divisions/valorant/bronzeiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankTo("Silver")}><img src="https://boostroyal.com/assets/images/divisions/valorant/silveriii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankTo("Gold")}><img src="https://boostroyal.com/assets/images/divisions/valorant/goldiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankTo("Platinum")}><img src="https://boostroyal.com/assets/images/divisions/valorant/platinumiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankTo("Diamond")}><img src="https://boostroyal.com/assets/images/divisions/valorant/diamondiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankTo("Ascendant")}><img src="https://boostroyal.com/assets/images/divisions/valorant/ascendantiii.png"></img></button>
            <button className="rank-button" onClick={() => getSelectRankTo("Immortal")}><img src="https://boostroyal.com/assets/images/divisions/valorant/immortaliii.png"></img></button>
            <div>
                <select className="form-select" onChange={(e) => { let selectedRank = e.target.value; setDropdownOptionToState(selectedRank) }}>
                    <option value="0">Nothing selected</option>
                    <option value="3">III</option>
                    <option value="2">II</option>
                    <option value="1">I</option>
                </select>
            </div>
        </div>

    )

    const rankSelectionBlock = (
        <div className="row rank-selection-block">
            {rankSelectFromBlock}
            {rankSelectToBlock}
        </div>
    )

    if (dropdownOptionFromState && dropdownOptionToState && selectRankFrom && selectRankTo, currentRRInputState, selectedRegionState) {
        return (
            <div className="home-page-content">
                <div className="title-content">
                    <h1>Boost your rank with Me!</h1>
                </div>

                <div className="order-details">
                    {rankSelectionBlock}
                    {UserDetailsComponent(dropdownOptionFromState && dropdownOptionToState && selectRankFrom && selectRankTo && currentRRInputState && selectedRegionState)}
                </div>
            </div>
        )
    } else {
        return (
            <div className="home-page-content">
                <div className="title-content">
                    <h1>Boost your rank with Me!</h1>
                </div>
                <div className="order-details">
                    {rankSelectionBlock}
                    {UserDetailsComponent()}
                </div>
            </div>
        )
    }
}