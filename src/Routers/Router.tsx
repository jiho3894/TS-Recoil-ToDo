import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthForm from "../Pages/AuthForm";
import TodoList from "../Pages/TodoList";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/authForm" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
