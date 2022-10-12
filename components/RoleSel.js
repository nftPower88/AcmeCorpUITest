import React, {useRef} from 'react';
import { update_role, delete_role } from '../controller/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const RoleSel = ({ 
  role,   
  actions: {
    update_role,
    delete_role
  },
  className 
}) => {
  const formRef = useRef();

  const onSubmitRealestate = (e) => {
    e.preventDefault();
    
    const currentFormData = new FormData(formRef.current);

    if (currentFormData.get('username') === 'manager' && currentFormData.get('password') === 'manager') {
      update_role(false, 'manager');
    } else if (currentFormData.get('username') === 'customer' && currentFormData.get('password') === 'customer') {
      update_role(false, 'customer');
    } else {
      toast.warning("Unregistered user");
    }
  }

  return (
    <div
      className={`select-none w-[100%] h-[100%] px-10 py-10 flex flex-row justify-center text-black text-sm ${className}`}
    >
      <form className="space-y-4 w-[50%]" action="#" ref={formRef}>
        <div>
          <input
            type="text"
            name="username"
            className="ring-2 ring-app-form-border text-app-form-text text-md focus:ring-gray-500 block w-full p-2.5 outline-none caret-red-500"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="ring-2 ring-app-form-border text-app-form-text text-md focus:ring-gray-500 block w-full p-2.5 outline-none caret-red-500"
            placeholder="Password"
            required
          />
        </div>
        <div className='py-10'>
          <div>Manager: username: manager // password: manager</div>
          <div>Customer: username: customer // password: customer</div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium font-millerBanner text-base px-5 py-2.5 text-center"
          onClick={(e) => onSubmitRealestate(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators({ update_role, delete_role }, dispatch) })
)(RoleSel);