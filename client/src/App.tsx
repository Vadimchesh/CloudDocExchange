import { ThemeProvider } from "./components/theme-provider";
import UploadAria from "./components/upload-aria";
import { Provider } from "jotai";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Files from "./pages/files";

function App() {
  return (
    <Provider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<UploadAria />} />
              <Route path="/files" element={<Files />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
