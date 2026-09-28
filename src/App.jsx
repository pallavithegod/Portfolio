import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import ProjectDetail from "./pages/ProjectDetail";
import { MusicPlayerProvider } from "./components/MusicPlayerProvider";

function App() {
  return (
    <BrowserRouter>
      <MusicPlayerProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Layout>
      </MusicPlayerProvider>
    </BrowserRouter>
  );
}

export default App;
