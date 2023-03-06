import React, { useState } from "react"
import { UserDetailsComponent } from "./UserDetailsComponent"

let selectRankFrom = ""
let selectRankTo = ""


export function Home() {
    const [dropdownOptionFromState, setDropdownOptionFromState] = useState("")
    const [dropdownOptionToState, setDropdownOptionToState] = useState("")

    function getSelectRankFrom(rank) {
        selectRankFrom = rank
    }

    function getSelectRankTo(rank) {
        selectRankTo = rank
    }
    
    const rankSelectFromBlock = (
        <div className="select-from-buttons">
            <button onClick={() => getSelectRankFrom("Iron")}><img src="https://boostroyal.no/assets/images/divisions/lol/iron.png"></img></button>
            <button onClick={() => getSelectRankFrom("Bronze")}><img src="https://boostroyal.no/assets/images/divisions/lol/bronze.png"></img></button>
            <button onClick={() => getSelectRankFrom("Silver")}><img src="https://boostroyal.no/assets/images/divisions/lol/silver.png"></img></button>
            <button onClick={() => getSelectRankFrom("Gold")}><img src="https://boostroyal.no/assets/images/divisions/lol/gold.png"></img></button>
            <button onClick={() => getSelectRankFrom("Platinum")}><img src="https://boostroyal.no/assets/images/divisions/lol/platinum.png"></img></button>
            <button onClick={() => getSelectRankFrom("Diamond")}><img src="https://boostroyal.no/assets/images/divisions/lol/diamond.png"></img></button>
            <button onClick={() => getSelectRankFrom("Master")}><img src="https://boostroyal.no/assets/images/divisions/lol/master.png"></img></button>
            <button onClick={() => getSelectRankFrom("Grandmaster")}><img src="https://boostroyal.no/assets/images/divisions/lol/grandmaster.png"></img></button>
            <button onClick={() => getSelectRankFrom("Challenger")}><img src="https://boostroyal.no/assets/images/divisions/lol/challenger.png"></img></button>
            <div>
                <select onChange={(e) => { let selectedRank = e.target.value; setDropdownOptionFromState(selectedRank) }}>
                    <option value="0">Nothing selected</option>
                    <option value="4">IV</option>
                    <option value="3">III</option>
                    <option value="2">II</option>
                    <option value="1">I</option>
                </select>
            </div>
        </div>
        
    )
    const rankSelectToBlock = (
        <div className="select-to-buttons">
            <button onClick={() => getSelectRankTo("Iron")}><img src="https://boostroyal.no/assets/images/divisions/lol/iron.png"></img></button>
            <button onClick={() => getSelectRankTo("Bronze")}><img src="https://boostroyal.no/assets/images/divisions/lol/bronze.png"></img></button>
            <button onClick={() => getSelectRankTo("Silver")}><img src="https://boostroyal.no/assets/images/divisions/lol/silver.png"></img></button>
            <button onClick={() => getSelectRankTo("Gold")}><img src="https://boostroyal.no/assets/images/divisions/lol/gold.png"></img></button>
            <button onClick={() => getSelectRankTo("Platinum")}><img src="https://boostroyal.no/assets/images/divisions/lol/platinum.png"></img></button>
            <button onClick={() => getSelectRankTo("Diamond")}><img src="https://boostroyal.no/assets/images/divisions/lol/diamond.png"></img></button>
            <button onClick={() => getSelectRankTo("Master")}><img src="https://boostroyal.no/assets/images/divisions/lol/master.png"></img></button>
            <button onClick={() => getSelectRankTo("Grandmaster")}><img src="https://boostroyal.no/assets/images/divisions/lol/grandmaster.png"></img></button>
            <button onClick={() => getSelectRankTo("Challenger")}><img src="https://boostroyal.no/assets/images/divisions/lol/challenger.png"></img></button>
            <div>
                <select onChange={(e) => { let selectedRank = e.target.value; setDropdownOptionToState(selectedRank) }}>
                    <option value="0">Nothing selected</option>
                    <option value="4">IV</option>
                    <option value="3">III</option>
                    <option value="2">II</option>
                    <option value="1">I</option>
                </select>
            </div>
        </div>
        
    )

    const rankSelectionBlock = (
        <div className="rank-selection-block">
            {rankSelectFromBlock}
            {rankSelectToBlock}
        </div>
        )

    if (dropdownOptionFromState && dropdownOptionToState && selectRankFrom && selectRankTo) {
        return (
            <div className="home-page-content">
                <div className="title-content">
                    <h1>Boost your rank with Me!</h1>
                </div>

                <div className="order-details">
                    {rankSelectionBlock}
                    <div className="selectionResultBlock">
                        <p>From {selectRankFrom} {dropdownOptionFromState} To {selectRankTo} {dropdownOptionToState}</p>
                    </div>
                    {UserDetailsComponent(selectRankFrom, dropdownOptionFromState, selectRankTo, dropdownOptionToState)}
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