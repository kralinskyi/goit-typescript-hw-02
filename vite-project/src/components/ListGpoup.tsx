import { useState } from "react";

//
function ListGroup() {
  let items = ["kyiv", "odessa", "uzyn", "lviv"];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-list"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
