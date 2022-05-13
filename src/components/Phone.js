const Phone = ({click}) => {
    return (
    <div onClick={click} className="attribute">
        <span id="phone" role="img" aria-labelledby="tele">
            📞
        </span>
    </div>
    )
}

export default Phone;