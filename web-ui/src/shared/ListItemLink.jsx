import { IconExternalLink } from "@tabler/icons-react";

const ListItemLink = ({ to, text }) => {
  return (
    <li style={{ width: "fit-content" }}>
      <a href={to} target="_blank" rel="noreferrer">
        {text} <IconExternalLink size={"1rem"} />
      </a>
    </li>
  );
};

export default ListItemLink;
