 function HumanBody() {
      return (
        <div className="bg-[#f9fbff] rounded-2xl p-6  flex justify-center items-center max-w-[320px] mx-auto md:mx-0">
          <img
            alt="Front view of human body anatomy showing muscular system with healthy heart and leg labels"
            className="relative z-10"
            height="320"
            src="https://storage.googleapis.com/a1aa/image/112a261c-b3a1-438e-ff23-835e2f837582.jpg"
            width="180"
          />
          <div className=" top-20 right-10 bg-[#2c2cc4] text-white text-xs font-semibold rounded-xl px-3 py-1 flex items-center gap-1 shadow-md">
            <i className="fas fa-heart text-sm"></i>Healthy Heart
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-gradient-to-t from-[#0000001a] to-transparent rounded-full opacity-20"></div>
        </div>
      );
    }

    export default HumanBody;