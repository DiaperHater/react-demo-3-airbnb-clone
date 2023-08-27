import Header from "./components/Header";
import Hero from "./components/Hero";
import CardsSlider from "./components/CardsSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pb-12">
        <Hero />
        <CardsSlider />
      </main>
    </div>
  );
}

export default App;
