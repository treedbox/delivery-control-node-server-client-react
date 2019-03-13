import React from "react";
import "./style.css";

const Timeline = ({ timeline, statuses }) => (
  <div className="timeline-items">
    {timeline.map(e => {
      const time = statuses.find(x => x.id === e.id);
      return (
        <div key={e.id} className="timeline-item">
          <div className={"status " + time.type}>{time.name}</div>
          <div className="time">{e.timestamp}</div>
        </div>
      );
    })}
  </div>
);

export default Timeline;
