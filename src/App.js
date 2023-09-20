import "./App.css";
import FeedBackButton from "./components/FeedBackButton";
import Footer from "./components/Footer";
import Header from "./components/Header"; 
import Home from "./pages/Home"; 

function App() {
  return (
    <div className="">
      {/* <Router>
        <Header />
        <FeedBackButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router> */}

      <Header />
      <FeedBackButton />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
