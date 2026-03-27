import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Topbar } from "./components/topbar";
import { StatusBar } from "./components/status-bar";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <div class="flex flex-col h-full">
            <Topbar />
            <Suspense>{props.children}</Suspense>
            <StatusBar mode="" />
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
