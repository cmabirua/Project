import React, { useEffect } from "react";
import Styles from "./About.module.css";
import Animation1 from "./Animation/Animation1/Animation";
import Animation2 from "./Animation/Animation2/Animation";
import Animation3 from "./Animation/Animation3/Animation";
import Animation4 from "./Animation/Animation4/Animation";
import Animation5 from "./Animation/Animation5/Animation";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      delay: 500,
    });
  });
  return (
    <div>
      <div className={`${Styles.details}`}>
        <div data-aos="fade-up">
          <img src="https://media-exp1.licdn.com/dms/image/C5103AQHc3IbVjCCVog/profile-displayphoto-shrink_800_800/0/1558431490248?e=1632960000&v=beta&t=oIpYtUFsHeXHYE7MASaPLTgJktmR5nP0BcGGqSvy-1I" />
          <br></br>
          <h1>Zeeshan Hashmi</h1>
          <h3>Computer Science and Engineering</h3>
          {/* <h5>Founder</h5> */}
        </div>
        <div>
          <Animation1 />
        </div>
      </div>
      <div className={`${Styles.details}`}>
        <div data-aos="fade-right">
          <Animation2 />
        </div>
        <div data-aos="fade-left">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQE4qxrNQDpVFg/profile-displayphoto-shrink_200_200/0/1593547717594?e=1632960000&v=beta&t=1egYAosGR4zqK8feNmfYbsTvf_CUr18KlLEJ_Hdrx90" />

          <br></br>
          <h1>Seema Horo</h1>
          <h3>Computer Science and Engineering</h3>
          {/* <h5>Co-Founder</h5> */}
        </div>
      </div>
      <div className={`${Styles.details}`}>
        <div data-aos="fade-up-right">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQElA4Z2CrOGGA/profile-displayphoto-shrink_200_200/0/1589261232369?e=1632960000&v=beta&t=2WKIpYCZNBRWczJGs3qHBg28WWWvAPzJgKXboXVm3Cc" />
          <br></br>
          <h1>Jasprit Kaur</h1>
          <h3>Computer Science and Engineering</h3>
          {/* <h5>Co-Founder</h5> */}
        </div>
        <div data-aos="fade-up-left">
          <Animation3 />
        </div>
      </div>
      <div className={`${Styles.details}`}>
        <div data-aos="zoom-in">
          <Animation4 />
        </div>
        <div data-aos="zoom-in-up">
          <img src="https://raw.githubusercontent.com/cmabirua/Project/master/src/Assets/0-02-03-c43ed41ac2c955889cc018654c0a03a10101b25ff6cb8ef5d0e94e11213db53e_1c6da3e8d9411a.jpg" />
          <br></br>
          <h1>Sahid Anasri</h1>
          <h3>Computer Science and Engineering</h3>
          {/* <h5>Co-Founder</h5> */}
        </div>
      </div>
      <div className={`${Styles.details}`}>
        <div data-aos="zoom-out">
          <img src="https://raw.githubusercontent.com/cmabirua/Project/master/src/Assets/0-02-03-e27ca102197ddbfcd17b323fdf65d4f5cd6c2ae6089bfdcf1c38ee58b4483e8f_1c6da3e8d8d7b4.jpg" />
          <br></br>
          <h1>Adib Akhtar</h1>
          <h3>Computer Science and Engineering</h3>
          {/* <h5>Co-Founder</h5> */}
        </div>
        <div data-aos="zoom-out-up">
          <Animation5 />
        </div>
      </div>
      An open source community helping the carrer growth by providing the dsalgo
      in syllabus oriented manner<br></br> Made with ❤️ for Recians
    </div>
  );
}

export default About;
