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
  const [info, setInfo] = useState({});
  const [toggle, setToggle] = useState(true);

  const makeApiCall = async () => {
    const url = 'https://randomuser.me/api/';
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results[0].name.first);
    let date = new Date(data.results[0].dob.date);
    date = date.toDateString().slice(4,10);
    setUser({
      name: `${data.results[0].name.first} ${data.results[0].name.last}`,
      email: data.results[0].email,
      birthday: date,
      city: `${data.results[0].location.city}, ${data.results[0].location.state}`,
      phone: data.results[0].phone,
      imageUrl: data.results[0].picture.large
    })
    setInfo({
      type: "name",
      value: `${data.results[0].name.first} ${data.results[0].name.last}`
    })
  };

  useEffect(() => {makeApiCall()}, []);
  useEffect(() => {makeApiCall()}, [toggle]);

  const handleClick = (e) => {
    // console.log(e.target.id)
    if (e.target.id === 'email') {
        setInfo({
          type: e.target.id,
          value: user.email
        })
    } else if (e.target.id === 'birthday') {
      setInfo({
        type: e.target.id,
        value: user.birthday
      })
    } else if (e.target.id === 'city') {
      setInfo({
        type: e.target.id,
        value: user.city
      })
    } else if (e.target.id === 'phone') {
      setInfo({
        type: e.target.id,
        value: user.phone
      })
    } else if (e.target.id === 'name') {
      setInfo({
        type: e.target.id,
        value: user.name
      })
    }
  };

  const styles = {
    backgroundImage: user.imageUrl ? `url(${user.imageUrl})` : ''
  };

  return (
    <>
    <button onClick={() => setToggle(!toggle)}>
      Pull Another Random User
    </button>
    <div id="container">
      <Photo styles={styles}/>
      <Content type={info.type} value={info.value} />
      <Name click={handleClick} />
      <Email click={handleClick} />
      <BirthDate click={handleClick} />
      <City click={handleClick} />
      <Phone click={handleClick} />
    </div>
    </>
  );
}
