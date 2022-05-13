const City = ({click}) => {
    return (
    <div onClick={click} className="attribute">
        <span id="city" role="img" aria-labelledby="city">
            🌆
        </span>
    </div>
    )
}

export default City;