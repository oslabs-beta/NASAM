import React from 'react';
// import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Insights from './pages/Insights.jsx';
import MustBeLoggedIn from './pages/MustBeLoggedIn.jsx';
import { useSelector, useDispatch } from 'react-redux';
// import Github from './components/Github.jsx';
import { useEffect } from 'react';
import { getCreds } from './utils/getAWSCreds';
import { getBackendCreds } from './features/slices/credSlice';
import { NavBar } from './components/'


function App() {

  const logged  = useSelector((state)=> state?.user.logged);
  const creds = useSelector((state) => state.creds)
  const dispatch = useDispatch();

  
  useEffect(() => {
    // getCreds() gets credentials from .env from backend
    // dispatch is then used to update state with the credentials
    const result = Promise.resolve(getCreds()).then((data) => {
      dispatch(getBackendCreds(data))
    return;
    })
  }, [])


  return (

    logged ? 

    creds.region.length ?
      <>
      <NavBar />
      {/* <Home /> */}
      <Insights /> 
      </> :
      <>
      <div>loading</div>
      </>
    :

    <Signup />
    
    )
}

export default App;
