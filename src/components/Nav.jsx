import Button from "./Button";
import { EditSign } from "../assets/EditSign";
import { CustomizeSign } from "../assets/CustomizeSign";
import { FillEgSign } from "../assets/FillEgSign";
import { ResetSign } from "../assets/ResetSign";

function Nav({title, onEditBtnClick, onCustomizeBtnClick,onClearBtnClick, onFillBtnClick}) {
    return(
        <>
        
        <h1 className="logo">{title}</h1>
        <nav>
            <Button 
                text="Edit" 
                title="Edit CV"
                className="nav-btn edit-btn" 
                handleClick={onEditBtnClick}
                addSign={EditSign}
            />
            <Button 
                text="Customize"
                title="Customize"   
                className="nav-btn customize-btn" 
                handleClick={onCustomizeBtnClick}
                addSign={CustomizeSign}
            />
            <Button 
                text="Fill Example"
                title="Fill Demo Data" 
                className="nav-btn fill-eg-btn" 
                handleClick={onFillBtnClick}
                addSign={FillEgSign}
            />
            <Button 
                text="Clear" 
                title="Clear Data"
                className="nav-btn clear-btn" 
                handleClick={onClearBtnClick}
                addSign={ResetSign}
            />
        </nav>
        </>
    );
}

export default Nav;