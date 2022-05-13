const Email = ({ click }) => {
    return (
    <div onClick={click} className="attribute">
        <span id="email" role="img" aria-labelledby="email">
            📧
        </span>
    </div>
    )
}

export default Email;