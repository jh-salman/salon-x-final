const DynamicDate = () => {
  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'short' }); // e.g. "Thu"
  const dayNumber = today.getDate(); // e.g. 9

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '15px',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'right',
      color:"#fff"
    }}>
      {dayName}<br />
      <p style={{ fontWeight: "bold", paddingLeft: "10px", margin: 0 }}>{dayNumber}</p>
    </div>
  );
};

export default DynamicDate;
