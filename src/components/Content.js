const Content = ({type, value}) => {
    return (
        <div id="content">
            <span id="smalltext">My {type} is</span>
            <span id="bigtext">{value}</span>
        </div>
    )
}

export default Content;