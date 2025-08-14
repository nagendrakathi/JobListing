import HeaderBar from "./components/HeaderBar";
import JobGrid from "./components/JobGrid";
function App() {
  return (
    <>
      <div className="min-h-screen bg-[#f9f9f9]">
        <HeaderBar />
        <JobGrid />
      </div>
    </>
  );
}

export default App;
