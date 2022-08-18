import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function Home () {
  return (
    <div className="App">
      <Header />
      <h1>Visita nuestra tienda</h1>
      <p>Disfruta de las promociones que tenemos para ti</p>
      <ItemListContainer title="Nuestros productos" />
      <Footer />
    </div>
  );
}