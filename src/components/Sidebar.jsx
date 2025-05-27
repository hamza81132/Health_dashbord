

    function Sidebar() {
      return (
        <aside className="flex flex-col justify-between w-full md:w-56 bg-[#f0f4ff] rounded-3xl p-6 select-none">
          <div>
            <h1 className="text-xl font-semibold mb-10">
              <span className="text-[#2cc4e1]">Health</span>
              <span className="font-extrabold">care.</span>
            </h1>
            <nav className="flex flex-col gap-6 text-sm font-medium">
              <button
                aria-current="page"
                className="flex items-center gap-3 text-[#0f1a4b] font-semibold"
              >
                <i className="fas fa-th-large text-base"></i>
                Dashboard
              </button>
              <button
                className="flex items-center gap-3 text-[#a3a9c1] cursor-default"
                disabled
              >
                <i className="fas fa-exchange-alt text-sm"></i>
                History
              </button>
              <button
                className="flex items-center gap-3 text-[#a3a9c1] cursor-default"
                disabled
              >
                <i className="fas fa-calendar-alt text-sm"></i>
                Calendar
              </button>
              <button
                className="flex items-center gap-3 text-[#a3a9c1] cursor-default"
                disabled
              >
                <i className="fas fa-calendar-check text-sm"></i>
                Appointments
              </button>
              <button
                className="flex items-center gap-3 text-[#a3a9c1] cursor-default"
                disabled
              >
                <i className="fas fa-chart-bar text-sm"></i>
                Statistics
              </button>
            </nav>
            <div className="mt-10 text-xs text-[#a3a9c1] font-semibold uppercase">
              Tools
            </div>
            <nav className="flex flex-col gap-6 mt-4 text-xs font-semibold text-[#a3a9c1]">
              <button className="flex items-center gap-3 cursor-default" disabled>
                <i className="fas fa-comment-alt text-sm"></i>
                Chat
              </button>
              <button className="flex items-center gap-3 cursor-default" disabled>
                <i className="fas fa-phone-alt text-sm"></i>
                Support
              </button>
            </nav>
          </div>
          <button
            className="flex items-center gap-3 text-xs font-semibold text-[#a3a9c1] cursor-default"
            disabled
          >
            <i className="fas fa-cog text-sm"></i>
            Setting
          </button>
        </aside>
      );
    }


export default Sidebar;