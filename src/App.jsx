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
// import "./styles/main.css";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="main h-screen grid grid-cols-3 grid-rows-[auto , 1fr , auto] bg-slate-800 text-white h-full">
      <div className="header  p-4 col-span-3">
        <Header className="" />
      </div>
      <div className="menuContainer flex h-full  ">
        <Sidebar />
      </div>
      <div className="container bg-slate-600 p-4 col-span-2 row-span-2 rounded-md">
        <div className="contentContainer  col-span-[2/4]">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
      <div className="footer bg-amber-600 col-span-3">
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
        { path: "/", element: <About /> },
        { path: "/authors", element: <Author /> }, // here query key and path when i made the same code worked
        //it fetched the data from the server
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
