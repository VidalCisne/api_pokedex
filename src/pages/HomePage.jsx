import {
  Card,
  CardHeaderWithImage,
  CardBody,
  CardFooter
} from "../components/cards";
import { Counter } from "../components/counter/Counter";

const HomePage = () => {
  return (
    <section className="page">

      <div className="home-cards">
        <Card>
          <CardHeaderWithImage
            imgUrl="https://picsum.photos/id/40/200/300"
            altText="Security dashboard preview"
          />
          <CardBody>
            <strong>Identity Validation</strong>
            <p>Keep a clean process for access review and risk controls.</p>
          </CardBody>
          <CardFooter>Policy Guard Enabled</CardFooter>
        </Card>
      </div>

      <div className="home-counters">
        <Counter />
        <Counter />
        <Counter />
      </div>
    </section>
  );
};

export default HomePage;
