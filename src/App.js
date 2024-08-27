import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar.js";
import Form from "./components/Form.js";
import Meme from "./components/Meme.js";

function App() {

  const [allMemes, setAllMemes] = React.useState([{}]);

  React.useEffect(() => {
    async function getmeme(){
      const res = await fetch("https://api.imgflip.com/get_memes");
      const mememe = await res.json();
      setAllMemes(mememe.data.memes);
    }

    getmeme();

  },[0])

  const [formData, setFormData] = React.useState({
    toptext: "",
    bottomtext: "",
    imgURL: "./memeimg.png"
  });

console.log("app")

  function handleChange(event){
    const {name, value} = event.target;
    setFormData(prevForm => {
      return({
        ...prevForm,
        [name] : value
      });
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    setFormData({
      toptext: "",
      bottomtext: "",
      imgURL : allMemes[Math.floor(Math.random()*100)].url
    })
  }

  return (
    <>
    <Navbar />
    <Form {...formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
    <Meme {...formData}/>
    </>
  );
}

export default App;
