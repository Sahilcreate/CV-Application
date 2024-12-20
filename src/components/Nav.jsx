import Button from "./Button";

function Nav({title, onClearBtnClick, onFillBtnClick}) {
    return(
        <>
        <nav>
            <h1>{title}</h1>
            <Button 
                text="Edit" 
                className="nav-btn edit-btn" 
                handleClick={"hi"}
            />
            <Button 
                text="Customize"   
                className="nav-btn customize-btn" 
                handleClick={"hi"}
            />
            <Button 
                text="Fill Example" 
                className="nav-btn fill-eg-btn" 
                handleClick={onFillBtnClick}
            />
            <Button 
                text="Clear" 
                className="nav-btn clear-btn" 
                handleClick={onClearBtnClick}
            />
        </nav>
        </>
    );
}

export default Nav;