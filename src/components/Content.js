const Content = ({name}) => {
    return (
        <div id="content">
            <span id="smalltext">My name is</span>
            <span id="bigtext">{name}</span>
        </div>
    )
}

export default Content;