import { useEffect, useState } from "react";
const App = () => {
  const [query, setQeury] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:5000/?q=${query}`);
      const resData = await res.json();
      setData(resData);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);
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
          {data.map((item) => (
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
