
    function HealthBars() {
      return (
        <div className="flex flex-col gap-4 bg-[#f9fbff] rounded-2xl p-6 max-w-[280px] mx-auto md:mx-0">
          <HealthBar label="Lungs" date="Date: 26 Okt 2021" color="#f28b82" widthPercent="60%" />
          <HealthBar label="Teeth" date="Date: 26 Okt 2021" color="#81c995" widthPercent="80%" />
          <HealthBar label="Bone" date="Date: 26 Okt 2021" color="#f28b82" widthPercent="60%" />
          <div className="text-xs text-[#2c2cc4] font-semibold self-end cursor-pointer select-none flex items-center gap-1">
            Details <i className="fas fa-arrow-right text-[10px]"></i>
          </div>
        </div>
      );
    }

    function HealthBar({ label, date, color, widthPercent }) {
      return (
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-xs font-semibold text-[#0f1a4b]">
            <span>{label}</span>
            <span className={`text-[9px]`} style={{ color }}>
              {date}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-opacity-40" style={{ backgroundColor: color }}>
            <div
              className="h-2 rounded-full"
              style={{ backgroundColor: color, width: widthPercent }}
            ></div>
          </div>
        </div>
      );
    }

    export default HealthBars