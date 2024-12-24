import { AddSign } from "../assets/AddSign";
import { DeleteSign } from "../assets/DeleteSign"

// Reusable Input Field Component
function InputField({ label, name, id, value, type = "text", onChange }) {
    return (
        <div className="sub-card-form">
            <label htmlFor={id}>
                {label}
            </label>
            <input 
                type={type} 
                name={name} 
                id={id} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
}

// Reusable Textarea Component
function TextareaField({ label, name, id, value, onChange }) {
    return (
        <div className="sub-card-form">
            <label htmlFor={id}>
                {label}
            </label>
            <textarea 
                name={name} 
                id={id} 
                value={value} 
                onChange={onChange}>
            </textarea>
        </div>
    );
}

// Main SubForm Component
function SubForm({ data, type, onInputChange, onFormAddition, onFormDeletion }) {
    const renderProfile = () => (
        <div className="profile-sub-form sub-form">
            <h2>
                <span className="sub-form-heading">Profile</span>
            </h2>
            {Object.entries(data.profile).map(([key, value]) => {
                const id = `profile-${key}`;
                const label = key.charAt(0).toUpperCase() + key.slice(1);
                return key === "about" ? (
                    <TextareaField 
                        key={key} 
                        label={label} 
                        name={key} 
                        id={id} 
                        value={value} 
                        onChange={(e) => onInputChange(e, "profile")} 
                    />
                ) : (
                    <InputField 
                        key={key} 
                        label={label} 
                        name={key} 
                        id={id} 
                        value={value} 
                        onChange={(e) => onInputChange(e, "profile")} 
                    />
                );
            })}
        </div>
    );

    const renderCards = (section, cardData, fields, nestedFields = null) => (
        <div className={`${section}-sub-form sub-form`}>
            <h2>
                <span className="sub-form-heading">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <button onClick={()=> onFormAddition(section)}>
                    <AddSign />
                </button>
            </h2>
            {cardData.map((item, index) => (
                <div key={item.id} className={`${section}-sub-card sub-card`}>
                    <h3>
                        <span className="sub-card-heading">
                            {item[fields.heading]}
                        </span>
                        <button onClick={() => onFormDeletion(section, index)}>
                            <DeleteSign />
                        </button>
                    </h3>
                    {fields.fields.map(({ name, label }) => (
                        <InputField
                            key={name}
                            label={label}
                            name={name}
                            id={`${section}-${name}-${index}`}
                            value={item[name]}
                            onChange={(e) => onInputChange(e, section, index)}
                        />
                    ))}
                    {nestedFields && (
                        <div className={`${section}-keypoints-form sub-card-keypoints`}>
                            <div className="keypoints-heading">
                                <span>{nestedFields.heading}</span>
                                <button onClick={() => onFormAddition(section, index)}>
                                    <AddSign />
                                </button>
                            </div>
                            <div className="keypoints-input-list">
                                {item[nestedFields.name].map((subItem, subIndex) => (
                                    <div key={subItem.id} className="keypoint-input">
                                        <InputField
                                            name={`${section}-${index}-keypoint-${subIndex}`}
                                            value={subItem.text}
                                            onChange={(e) => onInputChange(e, section, index, subIndex)}
                                        />
                                        <button onClick={() => onFormDeletion(section, index, subIndex)}>
                                            <DeleteSign />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    switch (type) {
        case "profile":
            return renderProfile();
        case "education":
            return renderCards("education", data.education, {
                heading: "school",
                fields: [
                    { name: "school", label: "School"},
                    { name: "degree", label: "Degree" },
                    { name: "startYear", label: "Start Year" },
                    { name: "endYear", label: "End Year" },
                    { name: "location", label: "Location" },
                    { name: "marks", label: "Marks" },
                ],
            });
        case "experience":
            return renderCards(
                "experience",
                data.experience,
                {
                    heading: "company",
                    fields: [
                        { name: "jobTitle", label: "Job Title" },
                        { name: "company", label: "Company" },
                        { name: "startDate", label: "Start Date" },
                        { name: "endDate", label: "End Date" },
                    ],
                },
                { name: "keypoints", heading: "Keypoints" }
            );
        case "projects":
            return renderCards(
                "projects",
                data.projects,
                {
                    heading: "name",
                    fields: [
                        { name: "name", label: "Name" },
                        { name: "techStack", label: "Tech Stack" },
                    ],
                },
                { name: "keypoints", heading: "Keypoints" }
            );
        case "skills":
            return renderCards("skills", data.skills, {
                heading: "name",
                fields: [{ name: "name", label: "Skill" }],
            });
        case "aboutme":
            return renderCards("aboutMe", data.aboutMe, {
                heading: "title",
                fields: [
                    { name: "title", label: "Title" },
                    { name: "description", label: "Description" },
                ],
            });
        default:
            return null;
    }
}

export default SubForm;