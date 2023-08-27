import Card from "./Card";

import DivePic1 from "../images/diving1.png";
import DivePic2 from "../images/diving2.png";
import DivePic3 from "../images/diving3.png";

export default function CardsSlider() {
  return (
    <section className="mx-10">
      <div className="grid grid-flow-col gap-x-4 overflow-scroll py-5">
        <Card title="Under water course" img={DivePic1} stars="3" voted="14" price="124" location="Can" />
        <Card title="Under water course" img={DivePic2} stars="3" voted="14" price="200" location="us" />
        <Card title="Under water course" img={DivePic3} stars="3" voted="14" price="453" location="gb" soldout="true" />

      </div>
    </section>
  );
}