import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import {About} from "./pages/About";
import {Welcome} from "./pages/Welcome";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App/>
        ),
        children: [
            {
                path: "about",
                element: <About />,
            },
            {
                path: "welcome",
                element: <Welcome />,
            },
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
