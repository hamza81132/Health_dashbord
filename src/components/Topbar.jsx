   function TopBar() {
      return (
        <div className="flex justify-between items-center">
          <form
            aria-label="Search"
            className="flex items-center bg-white rounded-xl border border-[#eaeefb] px-4 py-2 w-full max-w-md"
            role="search"
          >
            <i className="fas fa-search text-[#a3a9c1] text-sm"></i>
            <input
              aria-label="Search"
              className="ml-3 w-full text-xs text-[#a3a9c1] placeholder-[#a3a9c1] focus:outline-none"
              placeholder="Search"
              type="search"
            />
          </form>
          <button
            aria-label="Notifications"
            className="ml-4 bg-white border border-[#eaeefb] rounded-xl p-3 text-[#a3a9c1] hover:text-[#0f1a4b] transition-colors"
          >
            <i className="fas fa-bell text-base"></i>
          </button>
          <button
            aria-label="User profile"
            className="ml-4 rounded-full border-2 border-[#2cc4e1] w-10 h-10 overflow-hidden"
          >
            <img
              alt="User avatar with teal background and white text"
              className="w-full h-full object-cover"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/9a9dfcc4-1f4a-417b-431b-7c3a0286ec53.jpg"
              width="40"
            />
          </button>
          <button
            aria-label="Add new"
            className="ml-4 bg-[#2c2cc4] rounded-xl w-10 h-10 flex items-center justify-center text-white text-xl font-bold"
          >
            +
          </button>
        </div>
      );
    }

    export default TopBar