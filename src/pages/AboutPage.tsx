import React from "react";

const About = () => {
  return (
    <>
      <section className="about" style={{ marginTop: "60px" }}>
        {/* <div className="heading">
          <h2> Welcome to MADE</h2>
        </div> */}
        <div className="image">
          <img
            style={{ borderRadius: "20px", marginLeft: "10px" }}
            src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/f8b3fad261b56b6acd4b59b9ace4a77b.jpg?compress=1&resize=768x576&vertical=top"
            alt=""
          />
        </div>

        <div className="content">
          <h3>See the naturegreen's team’s setups</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
            sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae
            reprehenderit tempore eligendi, eum quibusdam perferendis dicta,
            incidunt dolores nemo ex.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam
            sapiente commodi hic.
          </p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
      </section>

      <section className="gallery">
        <div className="box-container">
          <div className="box">
            <img
              src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/f8b3fad261b56b6acd4b59b9ace4a77b.jpg?compress=1&resize=768x576&vertical=top"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/f8b3fad261b56b6acd4b59b9ace4a77b.jpg?compress=1&resize=768x576&vertical=top"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/f8b3fad261b56b6acd4b59b9ace4a77b.jpg?compress=1&resize=768x576&vertical=top"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/f8b3fad261b56b6acd4b59b9ace4a77b.jpg?compress=1&resize=768x576&vertical=top"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/f8b3fad261b56b6acd4b59b9ace4a77b.jpg?compress=1&resize=768x576&vertical=top"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>

          <div className="box">
            <img
              src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/f8b3fad261b56b6acd4b59b9ace4a77b.jpg?compress=1&resize=768x576&vertical=top"
              alt=""
            />
            <div className="icons">
              <a href="#" className="fas fa-eye"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share-alt"></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
