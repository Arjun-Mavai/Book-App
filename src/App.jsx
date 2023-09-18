import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Navigate,
} from "react-router-dom";

import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
import Book from "./components/Book";
import Author from "./components/Author";
import "./styles/main.css";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="main ">
      <div className="header col-span-4">
        <Header className="" />
      </div>
      <div className="container col-span-1 row-span-2">
        <div className="menuContainer  ">
          <Sidebar />
        </div>
        <div className="contentContainer  col-span-[2/4]">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
      <div className="footer col-span-4">
        <Footer className="" />
      </div>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/about", element: <About /> },
        { path: "/authors", element: <Author /> },
        { path: "/books", element: <Book /> },
        { path: "*", element: <NotFound /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <Route index element={<Navigate to="/" />} />
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
