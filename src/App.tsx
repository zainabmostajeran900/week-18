import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "./redux/store";
import { Router } from "./Router";
const queryClient = new QueryClient();

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <Router/>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
