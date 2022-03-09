import React, { useEffect, useState } from "react";
import CardNews from "./components/CardNews";
import Loader from "./components/Loader";

import Title from "./components/Title";

import { getNews } from "./helpers/newsFetch";

const App = () => {
  const [news, setNews] = useState({
    loading: true,
    datos: [],
  });

  const [category, setCategory] = useState("general");

  const handlerCategory = (e) => {
    const optionCategory = e.target.value;
    setCategory(optionCategory);
  };

  useEffect(() => {
    getNews(category).then((respuesta) => {
      setNews({
        loading: false,
        datos: respuesta,
      });
    });
  }, [category]);

  return (
    <>
      <Title />

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className=" mb-3">
              <label className="form-label">
                <strong>Buscar por categorias:</strong>
              </label>
              <select
                className="form-select shadow rounded-pill"
                id="inputGroupSelect01"
                onClick={handlerCategory}
              >
                <option id="general" value="general">
                  General...
                </option>
                <option id="Deportes" value="sports">
                  Deportes
                </option>
                <option id="Economia" value="business">
                  Economia
                </option>
                <option id="Tecnologias" value="technology">
                  Tecnologias
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <h1 className="text-center">Ultimas noticias</h1>
          </div>
        </div>
        {news.loading ? (
          <Loader />
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {news.datos.map((note, index) => (
              <CardNews note={note} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
