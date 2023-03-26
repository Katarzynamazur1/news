import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import { API_KEY } from "../../helpers/api";
import Article from "../Article/Article";
export interface ArticleObj {
  title: string;
  url: string;
  urlToImage: string;
}

const HomePage = () => {
  const [articles, setArticles] = useState<ArticleObj[] | []>([]);
  // 1. useEffect to hook który służy do podpinania się pod konkretny moment cyklu życia komponentu.
  // 2. Cykl życia komponentu:
  // a) zamontowanie (wyświetlenie)
  // b) zmiana jakiejś wartości (moment w którym coś w komponencie się zmienia, np. przychodzi jakiś nowy props lub aktualizuje się stan)
  // c) odmontowanie (komponent znika z ekranu)
  // 3. useEffect przyjmuje 2 argumenty
  // a) funkcja wykonująca się w zadeklarowanym momencie cyklu życia komponentu
  // b) lista dependencji (argument opcjonalny)
  // - brak listy dependencji = UE będzie strzelało cały czas jak zwykła funkcja
  // - lista dependencji pusta = UE będzie strzelało tylko przy pierwszym zamontowaniu
  // - zapełniona lista dependecji = UE będzie strzelało kiedy zmieni się wartość któregoś z elementów listy dependecji
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear(); // 2023
    const month = today.getMonth() + 1; // 1
    const day = today.getDate(); //29

    // W parametrze from ustaw date, tak żeby miesiąc i dzień miały przed dopisane 0 jeżeli są mniejsze od 10.
    // Może nie działać przez strefy czasowe
    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from=${year}-${
          month < 10 ? `0${month}` : month
        }-${day < 10 ? `0${day}` : day}&apiKey=${API_KEY}`
      )
      .then((data) => {
        setArticles(data.data.articles);
      });
  }, []);

  const names = [
    {
      firstName: "John",
      lastName: "Smith",
    },
    {
      firstName: "Anna",
      lastName: "Smith",
    },
  ];

  //   <p>John Smith</p>
  //   <p>Anna Smith</p>
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontSize: "2rem", mt: ".8rem" }}
      >
        Today's hottest news
      </Typography>
      {/* RENDEROWANIE WARUNKOWE TYP I */}
      {/* CONDITIONAL RENDERING */}
      {/* RENDEROWANIE W PĘTLI */}
      {/* {names.map((el) => {
        return (
          <h2>
            {el.firstName} {el.lastName}
          </h2>
        );
      })} */}
      {articles.length !== 0 &&
        articles.map((el, i) => {
          return <Article article={el} key={i} />;
        })}
    </>
  );
};

export default HomePage;

// const [clicked, setClicked] = useState(false);
/* <button onClick={() => setClicked(!clicked)}>Click</button>
{clicked && <h1>TO POCHODZI Z RENDEROWANIA WARUNKOWEGO</h1>} */