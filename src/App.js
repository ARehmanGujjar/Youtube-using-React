import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Store from './utils/Store';
import { Provider } from 'react-redux';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
const appRouter=createBrowserRouter([{
  Path:'/',
 Element:<Body/>,
 children:[{
  path:'/',
  element:<MainContainer/>
 },
 {
  path:'/watch',
  element:<WatchPage/>
 },
 ]
}])
function App() {
  return (
    <Provider store={Store}>
    <>
    <Header/>
    <RouterProvider router={appRouter}/>
    {/* <Body/> */}
    </>
    </Provider>
  );
}

export default App;
