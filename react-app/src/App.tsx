import Button from "./components/Button";

let btnTxt = "My Button";
let color: string = "secondary";

let printMessage = () => {
  console.log("You clicked a button!");
};

function App() {
  return <Button btnTxt={btnTxt} onHandleClick={printMessage} color={color} />;
}

export default App;
