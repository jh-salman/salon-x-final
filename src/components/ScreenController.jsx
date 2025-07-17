import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Screen0 from "../CopyScreen/Screen0";
import Screen1 from "../CopyScreen/Screen1";
import Screen2 from "../CopyScreen/Screen2";
import Screen3 from "../CopyScreen/Screen3";
import Screen4 from "../CopyScreen/Screen4";
import Screen5 from "../CopyScreen/Screen5";

const ScreenController = () => {
  const { currentScreen, setCurrentScreen } = useContext(AppContext);
  const [showInitial, setShowInitial] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timer finished, going to screen1");
      setShowInitial(false);
      setCurrentScreen("screen1");
    }, 2000);
    return () => clearTimeout(timer);
  }, [setCurrentScreen]);

  const itemStyle = {
    borderRadius: "24px",
    border: "none",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "20px",
    fontWeight: "bold",
    width: "392px",
    height: "851px",
    backgroundColor: "black",
    overflow: "hidden",
    position: "relative",
  };

  const screenWrapper = {
    background: "linear-gradient(180deg, #FF18EC 7.8%, #5333F1 52.06%, #00E7F9 99.27%)",
    width: "393px",
    height: "852px",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px",
  };

  const renderScreen = () => {
    console.log("Rendering screen:", showInitial ? "screen0" : currentScreen);
    if (showInitial) return <Screen0 />;
    if (currentScreen === "screen1") return <Screen1 />;
    if (currentScreen === "screen2") return <Screen2 />;
    if (currentScreen === "screen3") return <Screen3 />;
    if (currentScreen === "screen4") return <Screen4 />;
    if (currentScreen === "screen5") return <Screen5 />;
    return <div>Not Found</div>;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width:"100%",
        padding:"10px",
        backgroundColor: "#121212",
        position: "relative",
      }}
    >
      <div style={screenWrapper}>
        <div style={itemStyle}>
          {renderScreen()}
        </div>
      </div>
    </div>
  );
};

export default ScreenController;