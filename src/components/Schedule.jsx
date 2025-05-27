function Schedule({ iconClass, title, time, bgColor, textColor }) {
      return (
        <div
          className="flex items-center gap-2 rounded-xl px-4 py-3 max-w-[220px] text-xs font-semibold"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <i className={`${iconClass} text-sm`}></i>
          <div>
            <div>{title}</div>
            <div className="text-[9px] font-normal">{time}</div>
          </div>
        </div>
      );
    }

    export default Schedule