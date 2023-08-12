import { useState } from "react";
import { Users } from "./users";

const App = () => {
  const [query, setQeury] = useState("");
  // console.log(
  //   Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  // );
  return (
    <div className="app">
      <input
        type="text"
        placeholder="search..."
        className="search"
        value={query}
        onChange={(e) => setQeury(e.target.value)}
      />
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLocaleLowerCase().includes(query)
        ).map((user) => (
          <li className="listItem" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
