import React from "react";
import "./ActivityCard.css";
import { useDispatch } from 'react-redux'
import { deleteActivity } from "../../store/reducer/thunk";

const ActivityCard = ({ name, dificulty, duration, temporada, id }) => {
  const dispatch = useDispatch()
  return (
    <div className="activity">
      <div className="activity__delete" onClick={()=> dispatch(deleteActivity(id))}><p>X</p></div>
      <div className="activity__container">
        <h3>
          Activity Name: <span >{name}</span>
        </h3>
        <h3>
          Dificulty: <span>{dificulty}</span>
        </h3>
        <h3>
          Duration: <span>{duration}</span>
        </h3>
        <h3>
          Season: <span>{temporada}</span>
        </h3>
      </div>
    </div>
  );
};

export { ActivityCard };
