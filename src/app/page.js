import Image from "next/image";
import styles from "./page.module.css";
import Herosection from "./components/Herosection";
import CategoryList from "./components/CategoryList";
import CardList from "./components/CardList";

export default function Home() {
  return (
    <div>
      <Herosection title={"Let's Blog!"} imageUrl={"/event-hero.jpeg"} />
      <CategoryList />
      <CardList />
    </div>
  );
}
