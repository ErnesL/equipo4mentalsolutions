import React from "react";
import styles from "./Card.module.css";
//Para las tarjetas, se debe de pasar el objeto 'user' el cual contiene los atributos de name,age,gender,image,bio
//Esto es en realidad para los doctores
//Despues se utiliza en la App la funcion:
//{users.map((user, idx) => (<Card Key={user.id} user = {user} />))}
//Para poder recorrer la BDE (users) que tiene la informacion de los usuarios y extraer la info pertinente

function Card({ user }) {
  const { name, age, gender, image, bio } = user;

  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.infoContainer}>
          <h1 className={styles.name}>{name}</h1>
          <div>
            <div />
            <p>
              {age}años - {gender}
            </p>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.subtitleInfo}>{bio}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
