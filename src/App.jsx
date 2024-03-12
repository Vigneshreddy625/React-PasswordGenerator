import Navbar from "./Navbar";
import PasswordGenerator from "./PasswordGenerator";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("./src/assets/lock.jpg")',
          backgroundRepeat: "none",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <PasswordGenerator />
      </div>
    </>
  );
}

export default App;
