import "./twitter.css"
function Twitter() {
    return(
       <article className="twitter-followCard">
        <header className="twitter-followCard-header">
        <img src="https://unavatar.io/midudev" className="twitter-followCard-avatar" alt="foto" />
        <div className="twitter-followCard-info">
            <strong className="">Nombre</strong>
            <span className="twitter-followCard-infoUserName">@usuario</span>
        </div>
        </header>
        <aside>
            <button className="twitter-followCard-button">seguir</button>
        </aside>
       </article>
    )
    
}
export default Twitter