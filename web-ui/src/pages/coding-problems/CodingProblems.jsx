import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
} from "@mui/material";

const customTagColors = {
  objectOrientedColor: { backgroundColor: "#7986cb", color: "#fff" },
  gameColor: { backgroundColor: "#e57373", color: "#fff" },
};

const tagsInfo = [
  { label: "object-oriented", color: "objectOrientedColor" },
  { label: "game", color: "gameColor" },
];

const problems = [
  {
    id: 1,
    title: "Implement a Chess Game",
    to: "chess",
    tags: ["object-oriented", "game"],
  },
];

const CodingProblems = () => {
  const [filter, setFilter] = useState("");

  const filteredProblems = problems.filter(
    (problem) => filter === "" || problem.tags.includes(filter)
  );

  return (
    <div>
      <TextField
        select
        label="Filter by Tag"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
      >
        <MenuItem value="">All</MenuItem>
        {tagsInfo.map((tag, index) => (
          <MenuItem key={index} value={tag.label}>
            {tag.label}
          </MenuItem>
        ))}
      </TextField>

      <List>
        {filteredProblems.map((problem) => (
          <ListItem
            key={problem.id}
            button
            component="a"
            href={`coding-problems/${problem.to}`}
            secondaryAction={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                {problem.tags.map((tagLabel, index) => {
                  const tagInfo = tagsInfo.find((t) => t.label === tagLabel);
                  const customColorStyle = customTagColors[tagInfo.color]; // Retrieve custom color style

                  return (
                    <Chip
                      key={index}
                      label={tagLabel}
                      size="small"
                      sx={{ ...customColorStyle }} // Apply custom color style
                    />
                  );
                })}
              </Box>
            }
          >
            <ListItemText primary={problem.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CodingProblems;
