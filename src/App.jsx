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
// import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
import Book from "./components/Book";
import Author from "./components/Author";
// import { Slider } from "antd"; // i actually used it as my component name this one got rendered here from antd
import ImageCar from "./pages/Slider";
import Quiz from "./pages/Quiz";
import Reminder from "./pages/Reminders";
import DisplayPhotos from "./pages/DisplayPhotos";
import MediaPosts from "./pages/MediaPosts";
// import { Slider } from "antd";
// import "./styles/main.css";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import Starter from "./components/Starter";
import MatchGame from "./pages/MatchGame";
import BookApi from "./pages/BookApi";
import MoveToList from "./pages/MoveToLists";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const Layout = () => {
  const { user } = useUser();

  if (!user) {
    return <RedirectToSignIn />;
  }
  return (
    <>
      {/* {user && <Welcome />} */}

      <div className="main h-screen overflow-x-hidden md:max-w-full  grid grid-cols-3 grid-rows-[auto , 1fr , auto] grainy text-white h-full">
        <Starter />

        <div className="header  p-4 col-span-3">
          <Sidebar />
        </div>
        {/* <div className="menuContainer flex h-full  "></div>  earlier it is for sidebar above one for header*/}
        <div className="container  p-4 col-span-3 row-span-2 rounded-md">
          <div className="contentContainer max-w-full col-span-[1/3]">
            {/* maxwfull above solve the problem of horizontal moving of the entire app */}
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
        <div className="footer  col-span-3 bottom-0 flex  flex-col-reverse p-2 ">
          <Footer className="" />
        </div>
      </div>
    </>
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
        { path: "/slide", element: <ImageCar /> },
        { path: "/quiz", element: <Quiz /> },
        { path: "/remind", element: <Reminder /> },
        { path: "/photo", element: <DisplayPhotos /> },
        { path: "/media", element: <MediaPosts /> },
        { path: "/match", element: <MatchGame /> },
        { path: "/arjun", element: <BookApi /> },
        { path: "/move", element: <MoveToList /> },

        // earlier i was usign <sidebar/> if layout whole layout will be visible withing it  so in the child it was showing entire sidebar inside it
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
