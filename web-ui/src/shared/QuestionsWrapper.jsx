import { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

const QuestionsWrapper = ({ questions, storageKey, timeout }) => {
  const selectAllKey = `${storageKey}_all`;
  const [selectAll, setSelectAll] = useState(() => {
    const storedSelectAll = localStorage.getItem(selectAllKey);
    return storedSelectAll ? JSON.parse(storedSelectAll) : false;
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopy = () => {
    setOpenSnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const popup = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const handleGlobalChange = (index, checked) => {};

  const toggleSelectAll = () => {
    const newSelectAllStatus = !selectAll;
    setSelectAll(newSelectAllStatus);
    localStorage.setItem(selectAllKey, newSelectAllStatus);
    questions.forEach((_, index) => {
      localStorage.setItem(`${storageKey}_${index}`, newSelectAllStatus);
    });
  };

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleClose}
        action={popup}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Copied to clipboard!
        </Alert>
      </Snackbar>
      <span>
        <Button onClick={toggleSelectAll}>
          {selectAll ? "Unselect All" : "Select All"}
        </Button>
      </span>
      <div className="questions-wrapper">
        {questions.map((qa, index) => (
          <QuestionAnswer
            key={index}
            question={qa.question}
            answer={qa.answer}
            index={index}
            storageKey={storageKey}
            handleGlobalChange={handleGlobalChange}
            isGloballyChecked={selectAll}
            timeout={timeout}
            handleCopy={handleCopy}
          />
        ))}
      </div>
    </>
  );
};

export default QuestionsWrapper;
