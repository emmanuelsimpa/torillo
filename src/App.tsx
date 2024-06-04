import { Toaster } from "./common/components/ui/toaster";
import { Overview } from "./features/dashboard/overview";
import { AppProvider } from "./providers/app-provider";

function App() {
  return (
    <AppProvider>
      <Toaster />
      <Overview />
    </AppProvider>
  );
}

export default App;
