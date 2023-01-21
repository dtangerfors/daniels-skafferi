import React from "react";
import { Alarm, User } from 'iconoir-react'

const convertTime = (time) => {
   let minutes = time.toString();

   if (time > 60) minutes = '60+'

   return `${minutes} min`
}

const CookingInfo = ({ time, servings }) => {

   let cookingTime = time;

  return (
    <div>
      <span className="text-gray-500 text-xs pr-3 leading-none" title={`Det här recepetet är för ${servings} personer`}>
        <span className="inline-block text-primary align-baseline">
          <User />
        </span>{" "}
        {servings}
      </span>
      <span className="text-gray-500 text-xs leading-none">
        <span className="inline-block text-primary align-baseline" title={`Receptet tar ${time} minuter att tillaga`}>
          <Alarm />
        </span>{" "}
        {convertTime(time)}
      </span>
    </div>
  );
};

export default CookingInfo
