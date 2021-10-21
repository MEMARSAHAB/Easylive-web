import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, Redirect} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';
import {Button, Paper, Container } from '@material-ui/core';

import './login.css';
import { AuthContext } from '../../context/authcontext';
import {googlelogin} from '../../actions/auth'
import {GOOGLE_CLIENT_ID} from '../../constant/constant'
import {isAuth} from '../../helper/authHelper'

function LoginPage() {

    const history = useHistory();
    const dispatch=useDispatch();

    const isLogin = useSelector(state => state.auth.isLogin);
    const isloading = useSelector(state => state.auth.loading);
    const isError = useSelector(state => state.auth.error);
    const userId = useSelector(state => state.auth.user._id);
    const user = useSelector(state => state.auth.user.name);
   
    const GoogleSucess = async (response) => {
      try {
        dispatch(googlelogin(response.tokenId ));
        toast.success(`Welcome back, ${user} !`);
        history.push('/');
      } catch (error) {
        toast.error('Somthing went wrong please try again!');
        console.log(error);
      }
    };

    const GoogleFailure = error => {
      console.log("Google login was unsucessfull");  
      console.log(error);
      toast.error('Somthing went wrong please try again!');
      history.push('/login');
    };

    if(isloading){
      return(
          <p>Processing...</p>
      )
    }
    if(isError){
        return(
            <p>error</p>
        ) 
    }
    if(isAuth()){
      return(
        <Redirect to='/' />
      ) 
    }

    return (
      <Container component="main" maxWidth="xs">
        <ToastContainer />
        <Paper className='loginpage' elevation={3}>
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            onSuccess={GoogleSucess}
            onFailure={GoogleFailure}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <Button className='googlebutton'  onClick={renderProps.onClick} disabled={renderProps.disabled}  variant="outlined">
              Google Sign In
              </Button>  
            )}
          />
        </Paper>
      </Container>
    );
};


export default LoginPage;
