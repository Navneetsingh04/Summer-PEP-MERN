import React from "react";

const List = () => {
  const task = [
    { title: "Lern React", time: 5 },
    { title: "Revise JS", time: 3 },
    { title: "Have Lunch", time: 0.5 },
  ];
  return (
    <div>
      <ul>
        {task.map((task) => {
            return (
                <li>{task.title} - <b> {task.time}</b></li>
            )
        })}
      </ul>
    </div>
  );
};

export default List;
