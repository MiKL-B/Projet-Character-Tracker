import { useEffect, useState } from "react";

const TestHook = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("account");
      const data = await response.json();
      setAccounts(data);
    };

    fetchData();
  }, []);

  const Rend = () => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.username}</td>
              <td>{account.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Test From DB</h1>
      <Rend />
    </div>
  );
};

export default TestHook;
