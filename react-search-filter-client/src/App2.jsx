import { useState } from "react";
import { Users } from "./users";
const App = () => {
  const [query, setQeury] = useState("");
  const keys = ["first_name", "last_name", "email", "gender"];
  const search = (data) => {
    return data.filter(
      (item) => keys.some((key) => item[key].toLowerCase().includes(query))
      // item.first_name.toLowerCase().includes(query) ||
      // item.last_name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)
    );
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="search..."
        className="search"
        value={query}
        onChange={(e) => setQeury(e.target.value)}
      />
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
          {search(Users).map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
