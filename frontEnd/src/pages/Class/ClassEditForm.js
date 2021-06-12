import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { ClassService } from "../../services/ClassService";

const ClassEditForm = ({ history }) => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    ClassService.getByIdClass(id)
      .then((res) => {
        const fields = [
          "imageName",
          "title",
          "subtitle",
          "sertifikat",
          "link",
          "namaMentor",
          "kuota",
          "harga",
        ];
        fields.forEach((field) => setValue(field, res.data[field]));
      })
      .catch((err) => console.log(err));
  }, []);

  const form = useRef();

  const onSubmit = () => {
    const formData = new FormData(form.current);
    ClassService.updateClass(id, formData).then((res) => {
      console.log(res);
      history.push("..");
    });
  };

  return (
    <Container className="mt-5">
      <Card className="p-5">
        <Card.Title>Update Class</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)} ref={form}>
            <Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  {...register("title", { required: "Required" })}
                  isInvalid={errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Subtitle</Form.Label>
                <Form.Control
                  type="text"
                  {...register("subtitle", { required: "Required" })}
                  isInvalid={errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.subtitle?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Sertifikat</Form.Label>
                <Form.Control
                  type="text"
                  {...register("sertifikat", { required: "Required" })}
                  isInvalid={errors.sertifikat}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.sertifikat?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  {...register("link", { required: "Required" })}
                  isInvalid={errors.link}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.link?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Nama Mentor</Form.Label>
                <Form.Control
                  type="text"
                  {...register("namaMentor", { required: "Required" })}
                  isInvalid={errors.namaMentor}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.namaMentor?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  type="number"
                  {...register("harga", { required: "Required" })}
                  isInvalid={errors.harga}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.harga?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Kuota</Form.Label>
                <Form.Control
                  type="number"
                  {...register("kuota", { required: "Required" })}
                  isInvalid={errors.kuota}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.kuota?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Image Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("imageName", { required: "Required" })}
                  isInvalid={errors.imageName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.ImageName?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                {...register("image")}
                isInvalid={errors.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors.image?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ClassEditForm;
