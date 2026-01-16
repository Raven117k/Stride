import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./UserPanel/Dashboard";
import Training from "./UserPanel/Training";
import Progress from "./UserPanel/Progress";
import MealPlanner from "./UserPanel/MealPlanner";
import Settings from "./UserPanel/Settings";
import Notification from "./UserPanel/Notification";
import Login from "./UserPanel/Login";
import Signup from "./UserPanel/Signup";
import MainHome from "./DisplaySite/MainHome";
import AdminDashboard from "./AdminPanel/AdminDashboard";
import AdminLayout from "./AdminPanel/components/AdminLayout";
import AdminUsers from "./AdminPanel/AdminUsers";
import AdminContent from "./AdminPanel/AdminContent";
import AdminSettings from "./AdminPanel/AdminSettings";
import UserLayout from "./UserPanel/components/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* For User */}
        <Route path="/" element={<MainHome />} />
        <Route path="/user/" element={ <UserLayout> <Dashboard /> </UserLayout>} />
        <Route path="/user/training" element={<UserLayout> <Training /> </UserLayout>} />
        <Route path="/user/progress" element={<UserLayout> <Progress /> </UserLayout>} />
        <Route path="/user/meal" element={<UserLayout> <MealPlanner /> </UserLayout>} />
        <Route path="/user/settings" element={<UserLayout> <Settings /> </UserLayout>} />
        <Route path="/user/notifications" element={<UserLayout> <Notification /> </UserLayout>} />
        {/* For Login */}
        <Route path="/login" element={<Login />} />
        {/* For Signup */}
        <Route path="/signup" element={<Signup />} />
        {/* For Admin */}
        <Route path="/admin" element={<AdminLayout> <AdminDashboard /> </AdminLayout>} />
        <Route path="/admin/users" element={<AdminLayout> <AdminUsers /> </AdminLayout>} />
        <Route path="/admin/content" element={<AdminLayout> <AdminContent /> </AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout> <AdminSettings /> </AdminLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
