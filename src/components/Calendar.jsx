
function Calendar() {
      return (
        <div className="flex flex-col gap-4 max-w-[600px]">
          <div className="flex justify-between items-center text-xs font-semibold text-[#0f1a4b]">
            <span>October 2021</span>
            <div className="flex gap-2 text-[#2c2cc4] cursor-pointer select-none">
              <i className="fas fa-chevron-left text-[10px]"></i>
              <i className="fas fa-chevron-right text-[10px]"></i>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-[10px] font-semibold text-[#0f1a4b]">
            <CalendarDay day="Mon" date="25" times={['10:00', '11:00', '12:00']} />
            <CalendarDay
              day="Tues"
              date="26"
              times={['08:00', '09:00', '10:00']}
              highlightIndex={1}
              isActive
            />
            <CalendarDay day="Wed" date="27" times={['12:00', '11:00', '—']} highlightIndex={1} />
            <CalendarDay day="Thurs" date="28" times={['10:00', '—', '—']} />
            <CalendarDay day="Fri" date="29" times={['—', '—', '—']} />
            <CalendarDay
              day="Sat"
              date="30"
              times={['12:00', '14:00', '15:00']}
              highlightIndex={0}
              isActive
            />
            <CalendarDay day="Sun" date="31" times={['09:00', '10:00', '11:00']} isDisabled />
          </div>
        </div>
      );
    }

function CalendarDay({ day, date, times, highlightIndex, isActive, isDisabled }) {
      return (
        <div
          className={`flex flex-col items-center gap-1 rounded-xl ${
            isActive ? 'bg-[#dbe9f9] text-[#0f1a4b] font-semibold' : ''
          } ${isDisabled ? 'text-[#a3a9c1]' : 'text-[#0f1a4b]'} text-[10px]`}
        >
          <span className={`text-[9px] font-normal`}>{day}</span>
          <span className="text-sm font-bold">{date}</span>
          {times.map((time, i) => {
            if (time === '—') {
              return (
                <span key={i} className="font-semibold">
                  —
                </span>
              );
            }
            return (
              <span
                key={i}
                className={`${
                  highlightIndex === i
                    ? isActive
                      ? 'bg-[#2c2cc4] text-white rounded-xl px-2 py-0.5 w-14 text-center font-semibold'
                      : 'bg-[#a3a9c1] bg-opacity-30 rounded-xl px-2 py-0.5 w-14 text-center font-semibold text-[#0f1a4b]'
                    : ''
                }`}
              >
                {time}
              </span>
            );
          })}
        </div>
      );
    }

export default Calendar