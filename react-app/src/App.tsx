import ListGroup from "./components/ListGroup";

function App() {
  //list of cities
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleItemSelection = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleItemSelection}
      />
    </div>
  );
}

export default App;
