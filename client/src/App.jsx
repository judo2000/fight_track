import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
