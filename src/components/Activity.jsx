function Activity() {
      return (
        <div className="flex flex-col gap-2 max-w-[320px] mx-auto md:mx-0">
          <div className="flex justify-between items-center text-xs font-semibold text-[#0f1a4b]">
            <span>Activity</span>
            <span className="text-[#a3a9c1] font-normal text-[10px]">
              3 appointment on this week
            </span>
          </div>
          <div className="flex justify-between items-end gap-1 h-16">
            {[
              { day: 'Mon', height: 8, color: '#2cc4e1' },
              { day: 'Tues', height: 12, color: '#2c2cc4' },
              { day: 'Wed', height: 6, color: '#2cc4e1' },
              { day: 'Thurs', height: 10, color: '#2c2cc4' },
              { day: 'Fri', height: 14, color: '#2cc4e1' },
              { day: 'Sat', height: 8, color: '#2c2cc4' },
              { day: 'Sun', height: 12, color: '#2cc4e1' },
            ].map(({ day, height, color }) => (
              <div key={day} className="flex flex-col items-center gap-1">
                <div
                  className="w-1 rounded"
                  style={{ height: `${height}px`, backgroundColor: color }}
                ></div>
                <span className="text-[#a3a9c1] text-[10px]">{day}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Activity;