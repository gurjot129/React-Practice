import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  let btnTxt = "My Button";
  let color = "primary";
  let [showAlert, setShowAlert] = useState(false);

  let OnBtnClick = () => {
    console.log("You clicked a button!");
    setShowAlert(true);
  };

  let OnAlertClick = () => {
    console.log("You clicked the alert close button!");
    setShowAlert(false);
  };

  return (
    <>
      {showAlert === true ? <Alert OnClick={OnAlertClick} /> : null}
      <Button btnTxt={btnTxt} OnClick={OnBtnClick} color={color} />
    </>
  );
}

export default App;
