import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import Path from '../../components/atoms/Path/Path';
import ProductPage from '../../components/molecules/ProductPage/ProductPage';

const Product = ({ link }) => {
  return (
    <>
      <Header/>
      <main>
        <Path link={ link } title="Women's tracksuit Q109"/>
        <ProductPage link={ link }/>
      </main>
      <Footer/>
    </>
  );
};

export default Product;