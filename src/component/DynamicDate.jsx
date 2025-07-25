import { useNavigate } from "react-router-dom";

const DynamicDate = () => {
  const navigate = useNavigate();
  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'short' }); // e.g. "Thu"
  const dayNumber = today.getDate(); // e.g. 9

  return (
    <div onClick={() => navigate("/screen3")}  style={{
      // backg'round:"red",
      zIndex: "1000",
      
      position: 'absolute',
      cursor: "pointer",
      top: '20px',
      right: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'right',
      color:"#fff"
    }}>
      {dayName}<br />
      <p  style={{ fontWeight: "bold", paddingLeft: "10px", margin: 0 ,cursor:"pointer"}}>{dayNumber}</p>
    </div>
  );
};

export default DynamicDate;
