import { useState } from 'react'
import Nav from './Nav';
import '../styles/App.css'
import { exampleData } from './data';
import { emptyData } from './emptyData';
import Preview from './Preview';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [userData, setUserData] = useState(exampleData);
  const [activeForm, setActiveForm] = useState('edit-form');

  const handleClearBtnClick = () => {
    setUserData(emptyData)
  }

  const handleFillBtnClick = () => {
    setUserData(exampleData)
  }

  const handleEditBtnClick = () => {
    setActiveForm('edit-form')
  }

  const handleCustomizeBtnClick = () => {
    setActiveForm('customize-form')
  }

  const handleFormAddition = (section, index = null) => {
    setUserData((prevData) => {
      if (index !== null) {
        return {
          ...prevData,
          [section]: [
            ...prevData[section].map((item, idx) => {
              if (idx === index) {
                return {
                  ...item,
                  keypoints: [
                    ...item.keypoints,
                    {
                      id: uuidv4(),
                      text: "Sample keypoints text"
                    }
                  ]
                }
              } else {
                return item;
              }
            })
          ]
        }
      } else {
        return {
          ...prevData,
          [section] : [
            ...prevData[section],
            {
              id: uuidv4(),
              ...(section === 'education' && {school: "example school", degree: "abc", startYear: "xxxx", endYear: "xxxx", location: "xyz", marks: "100%"}),
              ...(section === 'experience' && {jobTitle: "boogler", company: "boogle", startDate: "month year", endDate: "month year", keypoints: []}),
              ...(section === 'projects' && {name: "CV Application", keypoints: [], techStack: "JS, React, CSS, Netlify"}),
              ...(section === 'skills' && {name: "React"}),
              ...(section === 'aboutMe' && {title: "Adventure", description: "Paragliding"})
            }
          ]
        }
      }
    })
  }

  const handleFormDeletion = (section, index, subIndex = null) => {
    setUserData((prevData) => {
      if (subIndex !== null) {
        return {
          ...prevData,
          [section] : [
            ...prevData[section].map((item, idx) => {
              if (idx === index) {
                return {
                  ...item,
                  keypoints: item.keypoints.filter((_,subIdx) => subIdx !== subIndex)
                }
              } else {
                return item;
              }
            })
          ]
        }
      } else {
        return {
          ...prevData,
          [section] : prevData[section].filter((_, idx) => idx !== index)
        }
      }
    })
  }

  const handleInputChange = (event, section, index = null, subIndex = null) => {
    const {name, value} = event.target;
    setUserData((prevData) => {
      if (subIndex !== null) {
        return {
          ...prevData,
          [section]: prevData[section].map((item, idx) => {
            if (idx === index) {
              return {
                ...item,
                keypoints : item.keypoints.map((subItem, subIdx) => {
                  if (subIdx === subIndex) {
                    return {
                      ...subItem,
                      text: value
                    }
                  } else {
                    return subItem;
                  }
                })
              }
            } else {
              return item
            }
          })
        }
      } else if (index !== null) {
        return {
          ...prevData,
          [section]: prevData[section].map((item, idx) => 
            idx === index ? {...item, [name]: value}: item
          )
        }
      } else {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [name]: value
          }
        }
      }
    })


  }

  return (
    <>
    <header>
      <Nav 
        title="CV" 
        onCustomizeBtnClick={handleCustomizeBtnClick}
        onEditBtnClick={handleEditBtnClick}
        onClearBtnClick={handleClearBtnClick}
        onFillBtnClick={handleFillBtnClick}
      />
    </header>
    <main>
      <Form 
        data={userData} 
        activeForm={activeForm} 
        onInputChange={handleInputChange} 
        onFormAddition={handleFormAddition}
        onFormDeletion={handleFormDeletion}
      />
      <Preview data={userData} />
    </main>
    <footer>
      <span>made by <a href="https://github.com/Sahilcreate/CV-Application" target='_blank'>Sahil</a> © 2024</span>
    </footer>
    </>
  );
}

export default App
