import React from 'react';
import Preview from '../../pageComponents/home/Preview/Preview';
import Divider from '../../components/atoms/Divider/Divider';
import Catalog from '../../pageComponents/home/Catalog/Catalog';
import BD from '../../BD';
import Offer from '../../pageComponents/home/Offer/Offer';

const Home = () => {
  return (
    <>
      <Preview/>
      <Divider/>
      <Catalog section={BD.women} title="WOMEN'S"/>
      <Catalog section={BD.men} title="MEN'S"/>
      <Offer/>
    </>
  );
};

export default Home;