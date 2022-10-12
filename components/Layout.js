import React from 'react';
import Wrapper from '../components/Wrapper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import Manager from './Manager';
import Customer from './Customer';
import RoleSel from './RoleSel';

toast.configure();
const Layout = ({    
  role
}) => { 
    return (
        <Wrapper>
            <Navbar />
            {role ? role === 'manager' ? <Manager/> : <Customer/> : <RoleSel/>}
            <Footer/>
        </Wrapper>
    );
};

// export default Layout;
export default connect(
    state => state
)(Layout);

