import HeroImage from "../images/hero.png";

export default function Hero() {
  return (
    <section className="px-2 py-12">
      <img src={HeroImage} alt="" className="mx-auto w-full max-w-md mb-5" />
      <h1 className="text-5xl font-bold mb-3">
        Online Experiance
      </h1>
      <p className="text-lg leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur quasi temporibus aspernatur nobis, quod optio quia iure earum.
      </p>
    </section>
  );
}