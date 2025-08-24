import { Bell,  Search} from "lucide-react";

export default function SideHeader() {
  return (
    <header className="px-6 py-2">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-heading ">Dashboard</h1>
          <p className="text-muted-foreground text-text_paragraph">
            Welcome back! Here's what's happening with your rewards program.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 " />
            <input placeholder="Search..." className="pl-10 w-64 border border-borderColor py-2 rounded-md bg-[#F8FEF9]  outline-none focus:ring-0 focus:outline-primary shadow-md" />
          </div>
          <button size="icon" variant="outline">
            <Bell className="w-4 h-4" />
          </button>

          <div class="flex -space-x-2 ">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              class="inline-block size-12 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
