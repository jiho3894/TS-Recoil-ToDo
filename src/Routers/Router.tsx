import { HashRouter, Route, Routes } from "react-router-dom";
import AuthForm from "../Pages/AuthForm";
import TodoList from "../Pages/TodoList";
import Header from "./Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/authForm" element={<AuthForm />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
