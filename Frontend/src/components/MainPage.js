

export function Main() {
    return (
        <div>
            <div className="title-content">
                <h1>Boost your rank with Me!</h1>
            </div>
            <div className="row main-page-content">
                <div className="col about-me-shorts">
                    <div>
                        <h2>Previous achivements</h2>
                        <div className="achivements-textbox">
                            some random text goes here
                            with line breaks to be able
                            to test this block
                        </div>

                        <h2>What do I offer?</h2>
                        <div className="achivements-textbox">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div className="col game-select">
                    <h3>Select the game you play</h3>
                    <a href="/league-of-legends" className="game-option">
                        <button className="select-game-btn">League of Legends</button>
                    </a>
                    <a href="/valorant" className="game-option">
                        <button className="select-game-btn">Valorant</button>
                    </a>
                </div>
                
            </div>
            
        </div>
    )
}