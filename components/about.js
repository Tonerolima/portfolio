import Button from "./common/button";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="bg-white" id="about">
      <div id="sphere1" className="sphere d-none d-lg-block" />
      <div id="sphere2" className="sphere d-none d-lg-block" />
      <div id="sphere3" className="sphere d-none d-lg-block" />
      <div className="container d-flex justify-content-end align-items-center h-100">
        <div className="w-50" id="aboutMe">
          <h2 className="mb-5">About Me</h2>
          <p>
            I am a self-taught freelance Web Developer with experience
            developing fullstack applications with the latest technologies.
            These include RESTful APIs, beautiful Static and Dynamic Web Apps,
            Single Page Apps etc.
          </p>
          <p>
            I recently started a community (alongside other fantastic devs) on
            Slack, focused on mentoring beginner developers gain the required
            skills needed in today's tech world. This was done partly due to my
            love for teaching and also to give back to the community that helped
            make me the developer I am today. We currently support over 80
            learners, most of them in Nigeria and some from several other
            time-zones.
          </p>
          <Link to="contact" smooth={true} duration={1000}>
            <Button text="Hire Me" classes="mt-4 text-white" />
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          * {
            font-family: poppins;
          }

          section {
            height: 650px;
            position: relative;
          }

          #sphere1 {
            left: 0;
            z-index: 2;
            background: url("https://res.cloudinary.com/tonerolima/image/upload/v1546914046/JPEG_20180423_132222.jpg");
            background-repeat: no-repeat;
            background-size: cover;
          }

          #sphere2 {
            left: 10px;
            z-index: 1;
            background-color: #f9899c;
          }

          #sphere3 {
            left: 20px;
            background-color: #feb7a6;
          }

          .sphere {
            position: absolute;
            bottom: 50px;
            width: 30%;
            height: 80%;
            border-radius: 20% 75% 75% 20% / 10% 57% 42% 10%;
          }

          @media (max-width: 992px) {
            #aboutMe.w-50 {
              width: 100% !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
