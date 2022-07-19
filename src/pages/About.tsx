import { Image } from "react-bootstrap";

export function About() {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-around"
        style={{ height: "80vh" }}
      >
        <h1>About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit non
          fuga voluptas maiores doloribus neque tenetur ipsam provident, iusto
          architecto a sed sapiente, reprehenderit incidunt tempore doloremque
          blanditiis reiciendis voluptatum? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Consequatur distinctio nihil facere
          perferendis. Sapiente cumque modi, illum labore suscipit, velit
          molestiae distinctio deleniti error libero necessitatibus dignissimos,
          unde fuga dicta.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, a.
          Pariatur, doloremque mollitia. Accusantium debitis, repellendus
          sapiente temporibus magnam placeat voluptates molestiae eum sunt in et
          aliquam soluta quo ab? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi fugit dolorum officiis ratione, perferendis
          debitis sit at commodi, voluptate corporis laboriosam veritatis!
          Numquam facilis, et ullam quo reprehenderit dolorem similique!
        </p>
        <Image
          src="/imgs/lights.jpg"
          height="300px"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
