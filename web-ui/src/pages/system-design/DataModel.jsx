const DataModel = () => {
  return (
    <div>
      <p>
        For any data that’s being used, it’s important to understand its shape
        or what/were it is
      </p>
      <p>I see there being two types to anticipate:</p>
      <ul>
        <li>
          <strong>DB Schema:</strong>
          <ul>
            <li>What tables are there?</li>
            <li>What columns are in each table?</li>
            <li>What are the relationships between tables?</li>
          </ul>
        </li>
        <li>
          <strong>Component Design:</strong>
          <ul>
            <li>What state or props are in the component?</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DataModel;
