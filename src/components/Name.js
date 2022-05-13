const Name = ({click}) => {
    return (
    <div onClick={click} className="attribute">
        <span id="name" role="img" aria-labelledby="face">
            😀
        </span>
    </div>
    )
}

export default Name;