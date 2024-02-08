import './App.css';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [addItem,setaddItem]=useState([]);

  const addNote =(note)=>{
    setaddItem((prevData)=>{
      return [...prevData,note]
    })
  };

  const onDelete = (id) =>{
    setaddItem((olddata) =>
      olddata.filter((currdata,indx)=>{
        return indx !==id
      })
    )
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote}/>
      {addItem.map((val,index)=>{
        return <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
      />
      })}
      <Footer />
    </>
  );
}

export default App;
