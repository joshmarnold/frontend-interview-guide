const DataModel = () => {
  return (
    <div>
      <p>
        For any data that’s being used, it’s important to understand its shape
        or what/were it is
      </p>
      <p>I see there being two types of problems to anticipate:</p>
      <ul>
        <li>
          <strong>Probs that involve a DB</strong>
          <ul>
            <li>What tables are there?</li>
            <li>What columns are in each table?</li>
            <li>What are the relationships between tables?</li>
          </ul>
        </li>
        <li>
          <strong>Probs that involve react components</strong>
          <ul>
            <li>What state or props are in the component?</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DataModel;
