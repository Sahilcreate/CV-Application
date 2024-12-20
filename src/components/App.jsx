import { useState } from 'react'
import Nav from './Nav';
// import Button from './Button';
import '../styles/App.css'
import { exampleData } from './data';
import { emptyData } from './emptyData';
import Preview from './Preview';

function App() {
  const [userData, setUserData] = useState(exampleData);

  const handleClearBtnClick = () => {
    setUserData(emptyData)
  }

  const handleFillBtnClick = () => {
    setUserData(exampleData)
  }

  return (
    <>
    <Nav 
      title="CV Builder" 
      onClearBtnClick={handleClearBtnClick}
      onFillBtnClick={handleFillBtnClick}
    />
    <main>
      <section></section>
      <Preview data={userData} />
    </main>
    </>
  );
}

export default App
