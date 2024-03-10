import { Link } from "react-router-dom";

const Button = ({ title, to, color }) => {
  return (
    <Link to={to}>
      <button className="header-button sub">{title}</button>
    </Link>
  );
};
const SubHeader = (subheaders) => {
  return (
    <div className="flex sub-header between" style={{ gap: "5px" }}>
      {subheaders.subheaders.map((subheader, index) => (
        <Button title={subheader.title} to={subheader.to} />
      ))}
    </div>
  );
};

export default SubHeader;
