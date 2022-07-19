import { Image } from "react-bootstrap";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Image
        src="/imgs/shop.jpg"
        style={{ objectFit: "cover", width: "100%" }}
      />
    </>
  );
}
