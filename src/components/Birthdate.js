const BirthDate = ({click}) => {
    return (
    <div onClick={click} className="attribute">
        <span id="birthdate" role="img" aria-labelledby="confetti">
            🎉
        </span>
    </div>
    )
}

export default BirthDate;