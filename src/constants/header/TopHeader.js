import { Bell, Search, LogOut, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useGetProfileQuery } from "../../features/profile/profileApi";

export default function TopHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    localStorage.clear("auth");
    navigate("/login");
  };

  const { data: profile } = useGetProfileQuery();
  console.log("profile", profile);
  return (
    <>
      <header className="px-6 py-2">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold text-heading ">Dashboard</h1>
            <p className="text-muted-foreground text-text_paragraph  xl:flex hidden">
              Welcome back! Here's what's happening with your rewards program.
            </p>
            <p className="text-muted-foreground text-text_paragraph  xl:hidden block">
              Welcome back! Here's...
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative xl:flex hidden">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 " />
              <input
                placeholder="Search..."
                className="pl-10 w-64 border border-borderColor py-2 rounded-md bg-[#F8FEF9]  outline-none focus:ring-0 focus:outline-primary shadow-md"
              />
            </div>
            <button
              size="icon"
              variant="outline"
              className="bg-white p-3 shadow-md rounded-md"
            >
              <Bell className="w-4 h-4" />
            </button>

            <div ref={dropdownRef} className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="inline-block w-10 h-10 rounded-full ring-2 ring-gray-900 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                    <User className="w-4 h-4" /> {profile?.user?.name}
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                    onClick={logout}
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
