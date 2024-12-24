function Button({text, title, className, handleClick, addSign}) {
    return (
        <>
        <button className={className} onClick={handleClick} title={title}>
            {!addSign && text}
            {addSign && addSign()}
        </button>
        </>
    );
}

export default Button;