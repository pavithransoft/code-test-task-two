import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const menus = [
    { name: "UnRead", path: "/unread" },
    { name: "Read", path: "/read" },
    { name: "Favorites", path: "/favorites" },
  ];
  return (
    <section className="bg-[#F4F5F9] text-[#636363] text-xs lg:text-sm xl:text-base">
      <div className="sticky top-0 z-50 h-20 backdrop-blur flex items-center gap-5 sm:gap-10 px-4 sm:px-20 bg-slate-50 border">
        <span className="whitespace-pre">Filter By :</span>
        {menus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            className={({ isActive }) =>
              isActive
                ? "bg-[#E1E4EA] border border-[#CFD2DC] px-4 rounded-full"
                : "cursor-pointer px-4 rounded-full hover:border hover:border-[#CFD2DC] hover:bg-[#E1E4EA]"
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </div>
      <div className="px-3 lg:px-16 py-7">
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
