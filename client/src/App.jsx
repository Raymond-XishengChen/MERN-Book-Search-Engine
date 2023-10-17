//Create an Apollo Provider to make every request work with the Apollo Server.

import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollp-boost";

const client = new Apolloclient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    
    operation.setContext({
      headers:{
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<SearchBooks />} />
            <Route path="/saved" element={<SavedBooks />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
