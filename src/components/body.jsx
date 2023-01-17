import { useEffect, useState } from "react";
import "./body.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import SearchAppBar from './searchBar'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Body = () => {
  const [Data, setData] = useState([]);
  async function fetchDataHandler() {
    const respose = await fetch(
      "https://hn.algolia.com/api/v1/search?tags=front_page"
    );
    const data = await respose.json();
    const trasformData = data.hits.map((items) => {
      return {
        id: items.story_id,
        title: items.title,
        url: items.url,
        points: items.points,
        author: items.author,
        date: new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(items.created_at_i),
        num_comments: items.num_comments,
      };
    });
    setData(trasformData);
    const timestamp = Date.now();
  }

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <>
    <SearchAppBar products={Data}/>
      <div className="container ">
        {Data.map((items) => (
          <>
            <Box className="box mt-3" sx={{ width: "100%" }}>
              <Stack spacing={2}>
                <Item >
                  <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                    <p className="title fs-5">{items.title}</p>
                    <p className="title ms-2 Story_link">({items.url})</p>
                  </div>
                  <div className="d-flex subtitle">
                    <p>{items.points} points |</p>
                    <p>&nbsp;{items.author} |</p>
                    <p>&nbsp;{items.date} |</p>
                    <p>&nbsp;{items.num_comments} comments</p>
                  </div>
                </Item>
              </Stack>
            </Box>
          </>
        ))}
      </div>
    </>
  );
};

export default Body;
