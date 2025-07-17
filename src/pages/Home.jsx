import Screen1 from "../screens/Screen1"
import Screen2 from "../screens/Screen2"
import Screen3 from "../screens/Screen3"
import Screen4 from "../screens/Screen4"


function Home() {
  const itemStyle = {
    borderRadius: "24px",
    border: "none",
    // borderImageSource: "linear-gradient(180deg, #FF18EC 7.8%, #5333F1 52.06%, #00E7F9 99.27%)",
    // borderImageSlice: 1,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold",
    width: "392px",
    height: "851px",
    backgroundColor:"black",
    overflow:"hidden"
  }

  const screenWrapper ={
    background: "linear-gradient(180deg, #FF18EC 7.8%, #5333F1 52.06%, #00E7F9 99.27%)",
     width: "393px",
    height: "852px",
    borderRadius:"24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:"2px"
  }
  return (
    <div style={{
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f3f4f6",
      margin: "0"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "393px 393px 393px",
        gridTemplateRows: "852px 852px 852px",
        gap: "8px"
      }}>
        <div style={screenWrapper}>
          <div style={itemStyle}>
          <Screen1  />
        </div>
        </div>
        <div style={screenWrapper}>
          <div style={itemStyle}>
          <Screen2  />
        </div>
        </div>
        <div style={screenWrapper}>
          <div style={itemStyle}>
          <Screen3  />
        </div>
        </div>
        <div style={screenWrapper}>
          <div style={itemStyle}>
          <Screen4  />
        </div>
        </div>
        <div style={screenWrapper}>
          <div style={itemStyle}>
          {/* <Screen1  /> */}
        </div>
        </div>
        <div style={screenWrapper}>
          <div style={itemStyle}>
          {/* <Screen1  /> */}
        </div>
        </div>
        <div style={screenWrapper}>
          <div style={itemStyle}>
          {/* <Screen1  /> */}
        </div>
        </div>
        <div style={screenWrapper}>
          <div style={itemStyle}>
          {/* <Screen1  /> */}
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
