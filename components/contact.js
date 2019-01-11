import Form from "./contact-form";

const Section = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h1 className="mb-5 text-center">Contact me</h1>
        <div className="row justify-content-center">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Section;
