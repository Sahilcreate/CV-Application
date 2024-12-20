import '../styles/Preview.css'
import { Fragment } from 'react';
import List from './List';
import Section from './Section';

function Preview({data}) {
    const userProfile = data.profile;
    const userEducation = data.education;
    const userExperience = data.experience;
    const userProjects = data.projects;
    const userSkills = data.skills;
    const userAboutMe = data.aboutMe;

    return (
        <Fragment>
           <div className="preview-section">
                <div className="preview-profile preview-subsection">
                    <div className="profile-name profile-subsection">
                        {userProfile.firstName + " " + userProfile.lastName}
                    </div>
                    <div className="profile-contact-info profile-subsection">
                        <div className="contact-info-email contact-info-subsection">
                            {userProfile.email}
                        </div>
                        <div className="contact-info-phone contact-info-subsection">
                            {userProfile.phone}
                        </div>
                        <div className="contact-info-address contact-info-subsection">
                            {userProfile.address}
                        </div>
                    </div>
                    <div className="profile-about profile-subsection">
                        {userProfile.about}
                    </div>
                </div>

                <Section 
                    title="Education"
                    data={userEducation}
                    renderItem={(element) => {
                        return (
                            <div className="education-subsection" key={element.id}>
                                <div className="education-year-and-location">
                                    <div className="education-year">
                                        {element.startYear + " - " + element.endYear}
                                    </div>
                                    <div className="education-location">
                                        {element.location}
                                    </div>
                                </div>
                                <div className="education-school-and-degree">
                                    <div className="education-school">
                                        {element.school}
                                    </div>
                                    <div className="education-degree">
                                        {element.degree}
                                    </div>
                                </div>
                                <div className="education-marks">
                                    {element.marks}
                                </div>
                            </div>
                        )
                    }}
                />

                <Section 
                    title="Experience"
                    data={userExperience}
                    renderItem={(element) => {
                        return(
                            <div className="experience-subsection" key={element.id}>
                                <div className="experience-company">
                                    {element.company}
                                </div>
                                <div className="experience-jobtitle-and-time">
                                    <div className="experience-jobtitle">
                                        {element.jobTitle}
                                    </div>
                                    <div className="experience-time">
                                        {element.startDate + " - " + element.endDate}
                                    </div>
                                </div>
                                <div className="experience-keypoints">
                                    <List className="experience-keypoints" listArray={element.keypoints}/>
                                </div>
                            </div>
                        )
                    }}
                />

                <Section 
                    title="Projects"
                    data={userProjects}
                    renderItem={(element) => {
                        return (
                            <div className="project-subsection" key={element.id}>
                                <div className="project-name">
                                            {element.name}
                                        </div>
                                        <div className="project-keypoints">
                                            <List className="project-keypoints" listArray={element.keypoints}/>
                                        </div>
                                        <div className="project-tech-stack">
                                            {element.techStack}
                                        </div>
                            </div>
                        )
                    }}
                />

                <Section 
                    title="Skills"
                    data={userSkills}
                    renderItem={(element) => {
                        return (
                            <span className="skill-span" key={element.id}>
                                {element.name}
                            </span>
                        )
                    }}
                />
                
                <Section 
                    title="AboutMe"
                    data={userAboutMe}
                    renderItem={(element) => {
                        return (
                            <div className="aboutme-subsection" key={element.id}>
                                <div className="aboutme-title">
                                    {element.title}
                                </div>
                                <div className="aboutme-description">
                                    {element.description}
                                </div>
                            </div>
                        )
                    }}
                />
            </div>
        </Fragment>
    );
}

export default Preview;