import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => (
  <>
    <Header />
    <main className="mt-20">
      <Outlet />
    </main>
  </>
);

export default AppLayout;
