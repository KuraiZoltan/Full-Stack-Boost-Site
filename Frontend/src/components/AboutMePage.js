
export function AboutMePage() {
    const descriptionComponent = (
        <div className="description-component">
            <h2>Hi! My name is X</h2>
            <p>
                asdasdrwe giuwreu jqioewra {'\n'}
                q gertiu ghrqeiuog her q gerg {'\n'}
                gerq ihuybqoer hgq rge ger fd {'\n'}
                siudfhya uihnf eaw rtew {'\n'}
            </p>
            <a href="/">Home</a>
        </div>
        )

    return (
        <html>
            <h1>About Me</h1>
            <div>
                {descriptionComponent}
            </div>
        </html>
        )
}