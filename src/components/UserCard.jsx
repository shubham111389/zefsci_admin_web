import React from "react";;
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";


const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  

  

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={user.photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
      
      </div>
    </div>
  );
};
export default UserCard;