import "./twitter.css"

// eslint-disable-next-line react/prop-types
function Twitter({userName,name,}) {
   const imgSrc = `https://unavatar.io/${userName}`
    return(
       <article className="twitter-followCard">
        <header className="twitter-followCard-header">
        <img src={imgSrc} className="twitter-followCard-avatar" alt="foto" />
        <div className="twitter-followCard-info">
            <strong className="">{name}</strong>
            <span className="twitter-followCard-infoUserName">@{userName}</span>
        </div>
        </header>
        <aside>
            <button className="twitter-followCard-button">seguir</button>
        </aside>
       </article>
    )
    
}
export default Twitter