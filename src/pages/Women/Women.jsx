import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import CatalogWomen from '../../pageComponents/women/CatalogWomen/CatalogWomen';
import Path from '../../components/atoms/Path/Path';

const Women = () => {
  return (
    <>
      <Header/>
      <main>
        <Path link='Women'/>
        <CatalogWomen/>
      </main>
      <Footer/>
    </>
  );
};

export default Women;