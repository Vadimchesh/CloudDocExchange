import { ThemeProvider } from "./components/theme-provider";
import { MainNav } from "./components/main-nav";
import { ModeToggle } from "./components/mode-toggle";
import UploadAria from "./components/upload-aria";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="hidden flex-col md:flex">
        <div className="flex justify-between h-16 items-center px-4">
          <MainNav />
          <ModeToggle />
        </div>
        <div className="border-b"></div>
        <div className="flex alflex justify-center items-center h-screen">
          <UploadAria />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
