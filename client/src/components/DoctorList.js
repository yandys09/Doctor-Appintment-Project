import React from "react";
import { useNavigate} from 'react-router-dom'

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="card m-2" style={{cursor: 'pointer'}} onClick={() => navigate(`/book-appointment/${doctor._id}`)}>
        <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization</b>&nbsp;
            {doctor.specialization}
          </p>
          <p>
            <b>Experience</b>&nbsp;
            {doctor.experience}
          </p>
          <p>
            <b>FeesPerCunsaltation</b>&nbsp;
            {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings</b>&nbsp;
            {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
