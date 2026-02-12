import App from "./App";
import { BookingProvider } from "./context/BookingContext";
import { ThemeProvider } from "./context/ThemeContext";
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BookingProvider>
      <App />
    </BookingProvider>
  </ThemeProvider>
)