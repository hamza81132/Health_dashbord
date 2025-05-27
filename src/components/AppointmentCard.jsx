   function AppointmentCard({ iconClass, title, time, doctor, bgColor, textColor }) {
      return (
        <div
          className={`flex items-center gap-2 rounded-xl px-4 py-3 max-w-[280px] text-xs font-semibold`}
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <i className={`${iconClass} text-lg`}></i>
          <div>
            <div>{title}</div>
            <div className="text-[9px] font-normal">{time}</div>
            {doctor && <div className="text-[9px] font-normal">{doctor}</div>}
          </div>
        </div>
      );
    }

    export default AppointmentCard;