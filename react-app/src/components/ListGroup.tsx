import { MouseEvent } from "react";

function ListGroup() {
  //list of places
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>

      {getMessage()}

      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
