import ReactDOM from "react-dom/client";
import "../src/ui/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import React from 'react';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./test/mocks/worker.ts')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
  );
});