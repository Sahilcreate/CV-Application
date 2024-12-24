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


// function SubForm({data, type, onInputChange}) {
//     if(type === 'profile') {
//         return (
//             <div className="profile-sub-form sub-form">
//                 <h2>
//                     <span className="sub-form-heading">Profile</span>
//                 </h2>
//                 {
//                     Object.entries(data.profile).map(([key, value]) => {
//                         return (
//                             <div key={key} className={`profile-${key}-form`}>
//                                 <label htmlFor={key}>
//                                     {key.charAt(0).toUpperCase() + key.slice(1)}
//                                 </label>
//                                 {key === 'about' ? (
//                                     <textarea 
//                                         name={key} 
//                                         id={key}
//                                         value={value}
//                                         onChange={(event) => onInputChange(event, 'profile')}
//                                     />
//                                 ) : (
//                                     <input 
//                                         type="text" 
//                                         name={key}
//                                         id={key}
//                                         value={value}
//                                         onChange={(event) => onInputChange(event, 'profile')}
//                                     />
//                                 )}
//                             </div>
                            
//                         )
//                     })
//                 }
//             </div>
//         )
//     } else if (type === 'education') {
//         return (
//             <div className="education-sub-form sub-form">
//                 <h2>
//                     <span className="sub-form-heading">Education</span>
//                     <button>
//                         <AddSign />
//                     </button>
//                 </h2>
                
//                 {
//                     data.education.map((eduObj, index) => {
//                         return (
//                             <div key={eduObj.id} className="education-sub-card sub-card">
//                                 <h3>
//                                     <span className="sub-card-heading">
//                                         {eduObj.school}
//                                     </span>
//                                     <button>
//                                         <DeleteSign />
//                                     </button>
//                                 </h3>

//                                 {
//                                     Object.entries(eduObj).map(([key, value]) => {
//                                         if(key !== 'id') {
//                                             return (
//                                                 <>
//                                                     <div className={`education-${key}-form sub-card-form`}>
//                                                         <label htmlFor={`${key}-${index}`}>
//                                                             {key.charAt(0).toUpperCase() + key.slice(1)}
//                                                         </label>
//                                                         <input 
//                                                             type="text" 
//                                                             name={key}
//                                                             id={`${key}-${index}`}
//                                                             value={value}
//                                                             onChange={(event) => onInputChange(event, 'education', index)}
//                                                         />
//                                                     </div>
//                                                 </>
//                                             )
//                                         }
//                                     })
//                                 }
//                             </div>
//                         )
//                     })
//                 }
//             </div>
            
//         )
//     } else if (type === 'experience') {
//         return (
//             <div className="experience-sub-form sub-form">
//                 <h2>
//                     <span className="sub-form-heading">Experience</span>
//                     <button>
//                         <AddSign />
//                     </button>
//                 </h2>

//                 {
//                     data.experience.map((expObj, index) => {
//                         return (
//                             <div key={expObj.id} className="experience-sub-card sub-card">
//                                 <h3>
//                                     <span className="sub-card-heading">
//                                         {expObj.company}
//                                     </span>
//                                     <button>
//                                         <DeleteSign />
//                                     </button>
//                                 </h3>
//                                 <div className="experience-job-title-form sub-card-form">
//                                     <label htmlFor={`job-title-${index}`}>
//                                         Job Title
//                                     </label>
//                                     <input 
//                                         type="text" 
//                                         name="jobTitle"
//                                         id={`job-title-${index}`}
//                                         value={expObj.jobTitle}
//                                         onChange={(event) => onInputChange(event, 'experience', index)}
//                                     />
//                                 </div>
//                                 <div className="experience-company-form sub-card-form">
//                                     <label htmlFor={`company-${index}`}>
//                                         Company
//                                     </label>
//                                     <input 
//                                         type="text" 
//                                         name="company"
//                                         id={`company-${index}`}
//                                         value={expObj.company}
//                                         onChange={(event) => onInputChange(event, 'experience', index)}
//                                     />
//                                 </div>
//                                 <div className="experience-start-date-form sub-card-form">
//                                     <label htmlFor={`start-date-${index}`}>
//                                         Start Date
//                                     </label>
//                                     <input 
//                                         type="text" 
//                                         name="startDate"
//                                         id={`start-date-${index}`}
//                                         value={expObj.startDate}
//                                         onChange={(event) => onInputChange(event, 'experience', index)}
//                                     />
//                                 </div>
//                                 <div className="experience-end-date-form sub-card-form">
//                                     <label htmlFor={`end-date-${index}`}>
//                                         End Date
//                                     </label>
//                                     <input 
//                                         type="text" 
//                                         name="endDate"
//                                         id={`end-date-${index}`}
//                                         value={expObj.endDate}
//                                         onChange={(event) => onInputChange(event, 'experience', index)}
//                                     />
//                                 </div>
//                                 <div className="experience-keypoints-form sub-card-keypoints">
//                                     <div className="keypoints-heading">
//                                         <span>Keypoints</span>
//                                         <button>
//                                             <AddSign />
//                                         </button>
//                                     </div>
//                                     <div className="keypoints-input-list">
//                                         {expObj.keypoints.map((keyObj, subIndex) => {
//                                             return (
//                                                 <div key={keyObj.id} className="keypoint-input">
//                                                     <input 
//                                                         type="text" 
//                                                         name={`experience-${index}-keypoint-${subIndex}`}
//                                                         value={keyObj.text}
//                                                         onChange={(event) => onInputChange(event, 'experience', index, subIndex)} 
//                                                     />
//                                                     <button>
//                                                         <DeleteSign />
//                                                     </button>
//                                                 </div>
//                                             )
//                                         })}
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         )

//     } else if (type === 'projects') {
//         return (
//             <div className="projects-sub-form sub-form">
//                 <h2>
//                     <span className="sub-form-heading">Projects</span>
//                     <button>
//                         <AddSign />
//                     </button>
//                 </h2>

//                 {
//                     data.projects.map((projObj, index) => {
//                         return (
//                             <div key={projObj.id} className="projects-sub-card sub-card">
//                                 <h3>
//                                     <span className="sub-card-heading">
//                                         {projObj.name}
//                                     </span>
//                                     <button>
//                                         <DeleteSign />
//                                     </button>
//                                 </h3>
//                                 <div className="projects-name-form sub-card-form">
//                                     <label htmlFor={`project-name-${index}`}>
//                                         Name
//                                     </label>
//                                     <input 
//                                         type="text" 
//                                         name="name"
//                                         id={`project-name-${index}`}
//                                         value={projObj.name}
//                                         onChange={(event) => onInputChange(event, 'projects', index)}
//                                     />
//                                 </div>
//                                 <div className="projects-keypoints-form sub-card-keypoints">
//                                     <div className="keypoints-heading">
//                                         <span>Keypoints</span>
//                                         <button>
//                                             <AddSign />
//                                         </button>
//                                     </div>
//                                     <div className="keypoints-input-list">
//                                         {projObj.keypoints.map((keyObj, subIndex) => {
//                                             return (
//                                                 <div key={keyObj.id} className="keypoint-input">
//                                                     <input 
//                                                         type="text" 
//                                                         name={`project-${index}-keypoint-${subIndex}`}
//                                                         value={keyObj.text}
//                                                         onChange={(event) => onInputChange(event, 'projects', index, subIndex)} 
//                                                     />
//                                                     <button>
//                                                         <DeleteSign />
//                                                     </button>
//                                                 </div>
//                                             )
//                                         })}
//                                     </div>
//                                 </div>
//                                 <div className="projects-tech-stack-form sub-card-form">
//                                     <label htmlFor={`project-tech-stack-${index}`}>
//                                         Tech Stack
//                                     </label>
//                                     <input 
//                                         type="text" 
//                                         name="techStack"
//                                         id={`project-tech-stack-${index}`}
//                                         value={projObj.techStack}
//                                         onChange={(event) => onInputChange(event, 'projects', index)}
//                                     />
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     } else if (type === 'skills') {
//         return (
//             <div className="skills-sub-form sub-form">
//                 <h2>
//                     <span className="sub-form-heading">Skills</span>
//                     <button>
//                         <AddSign />
//                     </button>
//                 </h2>

//                 {
//                 data.skills.map((skillObj, index) => {
//                     return (
//                         <div key={skillObj.id} className="skill-input">
//                             <input 
//                                 type="text"
//                                 name={`name`}
//                                 value={skillObj.name}
//                                 onChange={(event) => onInputChange(event, 'skills', index)} 
//                             />
//                             <button>
//                                 <DeleteSign />
//                             </button>
//                         </div>
//                     )
//                 })
//             }
//             </div>
            
//         )
//     } else if (type === 'aboutme') {
//         return (
//             <div className="skills-sub-form sub-form">
//                 <h2>
//                     <span className="sub-form-heading">Skills</span>
//                     <button>
//                         <AddSign />
//                     </button>
//                 </h2>

//                 {
//                     data.aboutMe.map((abtObj, index) => {
//                         return (
//                             <div key={abtObj.id} className="aboutme-sub-card sub-card">
//                             <h3>
//                                 <span className="sub-card-heading">
//                                     {abtObj.title}
//                                 </span>
//                                 <button>
//                                     <DeleteSign />
//                                 </button>
//                             </h3>
//                             <div className="aboutme-title-form sub-card-form">
//                                 <label htmlFor={`aboutme-title-${index}`}>
//                                     Title
//                                 </label>
//                                 <input 
//                                     type="text" 
//                                     name="title"
//                                     id={`aboutme-title-${index}`}
//                                     value={abtObj.title}
//                                     onChange={(event) => onInputChange(event, 'aboutMe', index)}
//                                 />
//                             </div>
//                             <div className="aboutme-description-form sub-card-form">
//                                 <label htmlFor={`aboutme-description-${index}`}>
//                                     Desciption
//                                 </label>
//                                 <input 
//                                     type="text" 
//                                     name="description"
//                                     id={`aboutme-description-${index}`}
//                                     value={abtObj.description}
//                                     onChange={(event) => onInputChange(event, 'aboutMe', index)}
//                                 />
//                             </div>
//                         </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }

// export default SubForm;