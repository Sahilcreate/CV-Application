function Button({text, className, handleClick}) {
    return (
        <>
        <button className={className} onClick={handleClick}>
            {text}
        </button>
        </>
    );
}

export default Button;