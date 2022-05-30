import React from 'react';
import Add from './Add';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import Test from './Test';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Add></Add>
            <Tools></Tools>
            <Test></Test>
            <Footer></Footer>

        </div>
    );
};

export default Home;