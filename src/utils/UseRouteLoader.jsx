
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // import CSS
import '../assets/styles/nprogress.css'; // import CSS

NProgress.configure({ showSpinner: false, trickleSpeed:200,minimum: 0.2 });

const UseRouteLoader = () => {
  const location = useLocation();
  
  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 600);

    return () => clearTimeout(timer); 
  }, [location.pathname,location.search]);
};

export default UseRouteLoader;
