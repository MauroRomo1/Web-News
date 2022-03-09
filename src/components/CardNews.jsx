import React from "react";

const CardNews = ({ note, index }) => {
  return (
    <div className="col" key={index}>
      <div className="card h-100 shadow border border-primary mb-5 bg-body rounded">
        <img
          src={note.urlToImage}
          className="card-img-top img-fluid"
          alt="imagen de la noticia"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{note.title} </h5>
          <span className="badge rounded-pill bg-primary my-2">
            {note.source.name}
          </span>

          <p className="card-text text-center">{note.description}</p>
        </div>
        <div className="mb-3 text-center">
          <a href={note.url} className="btn btn-primary" target="_blank">
            Ver la noticia completa
          </a>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">Publicado el: {note.publishedAt}</small>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
