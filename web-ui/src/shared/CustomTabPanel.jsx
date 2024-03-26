function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  console.log(props);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        display: index === value ? "flex" : "none",
        flexDirection: "column",
        gap: "10px",
        paddingTop: "20px",
      }}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

export default CustomTabPanel;

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
