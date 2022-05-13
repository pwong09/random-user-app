import React, {useState, useEffect} from 'react';
import './styles.css';

export default function App() {
  const [user, setUser] = useState({})

  const makeApiCall = async () => {
    const url = 'https://randomuser.me/api/';
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results[0].name.first);
    let date = new Date(data.results[0].dob.date);
    date = date.toDateString().slice(4,15);
    setUser({
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      email: data.results[0].email,
      birthDate: date,
      city: data.results[0].location.city,
      phone: data.results[0].phone,
      imageUrl: data.results[0].picture.large
    })
    // console.log(user);
  };

  useEffect(() => {makeApiCall()}, []);

  const handleClick = () => {};

  const styles = {
    backgroundImage: `url(${user.imageUrl})`
  };

  return (
    <div id="container">
      <div style={styles} id="photo"></div>
      <div id="content">
        <span id="smalltext">My name is</span>
        <span id="bigtext">{user.firstName}</span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="name" role="img" aria-labelledby="face">
          😀
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="email" role="img" aria-labelledby="email">
          📧
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="birthdate" role="img" aria-labelledby="confetti">
          🎉
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="city" role="img" aria-labelledby="city">
          🌆
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="phone" role="img" aria-labelledby="tele">
          📞
        </span>
      </div>
    </div>
  );
}
