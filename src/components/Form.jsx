import { useState } from "react";
import Button from "./Button";
import SubForm from "./SubForm";

function Form({data, activeForm, onInputChange, onFormAddition, onFormDeletion}) {
    const [subActiveForm, setSubActiveForm] = useState('profile');

    const handleSubFormClick = (subForm) => {
        setSubActiveForm(subForm);
    }

    if (activeForm === 'edit-form') {
        return (
            <div className="edit-sub-form">
                <div className="sub-form-btn-section">
                    <Button 
                        text="Profile"
                        title="Edit Profile"
                        className="sub-form-btn profile-btn"
                        handleClick={() => handleSubFormClick('profile')}
                    />
                    <Button 
                        text="Education"
                        title="Edit Education"
                        className="sub-form-btn education-btn"
                        handleClick={() => handleSubFormClick('education')}
                    />
                    <Button 
                        text="Experience"
                        title="Edit Experience"
                        className="sub-form-btn experience-btn"
                        handleClick={() => handleSubFormClick('experience')}
                    />
                    <Button 
                        text="Projects"
                        title="Edit Projects"
                        className="sub-form-btn projects-btn"
                        handleClick={() => handleSubFormClick('projects')}
                    />
                    <Button 
                        text="Skills"
                        title="Edit Skills"
                        className="sub-form-btn skills-btn"
                        handleClick={() => handleSubFormClick('skills')}
                    />
                    <Button 
                        text="About Me"
                        title="Edit About Me"
                        className="sub-form-btn aboutme-btn"
                        handleClick={() => handleSubFormClick('aboutme')}
                    />
                </div>
                <div className="sub-form-section">
                    <SubForm 
                        data={data} 
                        type={subActiveForm} 
                        onInputChange={onInputChange}
                        onFormAddition={onFormAddition}
                        onFormDeletion={onFormDeletion}
                    />
                </div>
                

            </div>
        )
    } else if ( activeForm === 'customize-form') {
        const changeFont = (fontFamily) => {
                const previewSection = document.querySelector(".preview-section");
                previewSection.style.fontFamily = fontFamily
            }
        
        
        return (
            <div className="customize-sub-form">
                <h2>
                    Fonts
                </h2>
                <div className="font-btn-section">
                    <Button 
                        text="MonoSpace"
                        className="sub-form-btn font-btn monospace-font-btn"
                        handleClick={() => changeFont('monospace')}
                    />
                    <Button 
                        text="Helvetica"
                        className="sub-form-btn font-btn helvetica-font-btn"
                        handleClick={() => changeFont('Helvetica')}
                    />
                    <Button 
                        text="Times New Roman"
                        className="sub-form-btn font-btn times-new-roman-font-btn"
                        handleClick={() => changeFont('Times New Roman')}
                    />
                </div>
            </div>
        )
    }
}

export default Form;