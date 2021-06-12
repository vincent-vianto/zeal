import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { ClassService } from "../../services/ClassService";
import { Link } from "react-router-dom";
import "../../styles/classList.css";

const ClassList = ({ match }) => {
  const { path } = match;
  const [data, setData] = useState();

  useEffect(() => {
    ClassService.getAllClass()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteClass = (id) => {
    ClassService.deleteClass(id)
      .then((res) => setData(data.filter((data) => data.id !== id)))
      .catch((err) => console.log(err));
  };

  return (
    <Container className="py-4">
      <h1 className="text-center" id="pageHeaderTitle">
        Class
      </h1>
      <Link
        to={`${path}/add`}
        class="btn btn-outline-primary btn-lg btn-block my-3"
      >
        Add Class
      </Link>
      {data &&
        data.map((items) => (
          <div className="classCard">
            <img
              className="classCard-img"
              src={`http://localhost:4000/${items.image}`}
              alt="Image Title"
            />
            <div className="classCard-text">
              <h1 className="classCard-title">{items.title}</h1>
              <div className="classCard-subtitle small">{items.subtitle}</div>
              <div className="classCard-bar" />
              <div className="classCard-preview-txt">
                <ul>
                  <li>Harga : {items.harga}</li>
                  <li>Kuota : {items.kuota}</li>
                  <li>Sertifikat : {items.sertifikat}</li>
                  <li>link : {items.link}</li>
                  <li>Mentor : {items.namaMentor}</li>
                </ul>
              </div>
              <ul className="classCard-tagbox">
                <li className="tag-item">Desain</li>
                <li className="tag-item">IT</li>
                <li className="tag-item">Manajemen</li>
              </ul>
              <div className="classCard-buttonbox">
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => deleteClass(items.id)}
                >
                  delete
                </Button>
                <Link
                  to={`${path}/edit/${items.id}`}
                  className="btn btn-primary"
                >
                  edit
                </Link>
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
};

export default ClassList;
