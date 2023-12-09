import React from 'react';

const TrainingCard = ({ date, month, trainingPoints }) => {
  return (
    <div className="card-body pt-0">
      <div className="widget-49">
        <div className="widget-49-title-wrapper">
          <div className="widget-49-date-success">
            <span className="widget-49-date-day">{date}</span>
            <span className="widget-49-date-month">{month}</span>
          </div>
        </div>
        <ol className="widget-49-meeting-points">
          {trainingPoints.map((point, index) => (
            <li className="widget-49-meeting-item" key={index}>
              <span>{point}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TrainingCard;
