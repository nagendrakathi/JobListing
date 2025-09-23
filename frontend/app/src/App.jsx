import JobPage from "./pages/JobsPage";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <div className="min-h-screen bg-[#ffffff]">
        <Toaster position="top-center" />
        <JobPage />
      </div>
    </>
  );
}

export default App;
