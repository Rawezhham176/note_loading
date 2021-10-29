const NewsItem = ({news}) => {
    return <div>
        <h2 style={{color: "white"}}>{news.title}</h2>
        <h3 style={{color: "white"}}>{news.text}</h3>
    </div>
}

export default NewsItem