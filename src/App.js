import React, {useState, useEffect} from 'react';
import './styles.css';
import Photo from "./components/Photo.js";
import Content from "./components/Content.js";
import Name from "./components/Name.js";
import Email from "./components/Email.js";
import BirthDate from "./components/Birthdate.js";
import City from "./components/City.js";
import Phone from "./components/Phone.js";

export default function App() {
  const [user, setUser] = useState({});
  const [toggle, setToggle] = useState(true);

  const makeApiCall = async () => {
    const url = 'https://randomuser.me/api/';
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results[0].name.first);
    let date = new Date(data.results[0].dob.date);
    date = date.toDateString().slice(4,15);
    setUser({
      name: `${data.results[0].name.first} ${data.results[0].name.last}`,
      email: data.results[0].email,
      birthDate: date,
      city: `${data.results[0].location.city}, ${data.results[0].location.state}`,
      phone: data.results[0].phone,
      imageUrl: data.results[0].picture.large
    })
  };

  useEffect(() => {makeApiCall()}, []);
  useEffect(() => {makeApiCall()}, [toggle]);

  const handleClick = (e) => {
    const smallText = document.getElementById('smalltext');
    const bigText = document.getElementById('bigtext');
    // console.log(e.target.id)
    if (e.target.id === 'email') {
      return (
        smallText.innerText = 'My email is',
        bigText.innerText = user.email
      )
    } else if (e.target.id === 'birthdate') {
      return (
        smallText.innerText = 'My birthday is',
        bigText.innerText = user.birthDate
      )
    } else if (e.target.id === 'city') {
      return (
        smallText.innerText = 'I live in',
        bigText.innerText = user.city
      )
    } else if (e.target.id === 'phone') {
      return (
        smallText.innerText = 'My phone number is',
        bigText.innerText = user.phone
      )
    } else if (e.target.id === 'name') {
      return (
        smallText.innerText = 'My name is',
        bigText.innerText = user.name
      )
    }
  };

  const styles = {
    backgroundImage: `url(${user.imageUrl})`
  };

  return (
    <>
    <button onClick={() => setToggle(!toggle)}>
      Pull Another Random User
    </button>
    <div id="container">
      <Photo styles={styles}/>
      <Content name={user.name} />
      <Name click={handleClick} />
      <Email click={handleClick} />
      <BirthDate click={handleClick} />
      <City click={handleClick} />
      <Phone click={handleClick} />
    </div>
    </>
  );
}
