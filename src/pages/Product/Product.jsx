import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import Path from '../../components/atoms/Path/Path';

const Product = ({ link }) => {
  return (
    <>
      <Header/>
      <main>
        <Path link={ link } title="Women's tracksuit Q109"/>
      </main>
      <Footer/>
    </>
  );
};

export default Product;