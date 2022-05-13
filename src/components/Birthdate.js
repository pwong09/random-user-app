const BirthDate = ({click}) => {
    return (
    <div onClick={click} className="attribute">
        <span id="birthday" role="img" aria-labelledby="confetti">
            🎉
        </span>
    </div>
    )
}

export default BirthDate;