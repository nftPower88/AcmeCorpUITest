import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';

const Main = () => {
  return (
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Layout />
    </div>
  );
};

// export default Home;
export default connect(
  state => state,
)(Main);

