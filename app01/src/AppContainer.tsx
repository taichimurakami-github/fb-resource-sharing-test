import { AuthProvider } from "./context/AuthProvider";
import App from "./App";

export default function AppContainer() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
