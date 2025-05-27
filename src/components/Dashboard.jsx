import Activity from "./Activity";
import AppointmentCard from "./AppointmentCard";
import Calendar from "./Calendar";
import HealthBars from "./HealthBars";
import HumanBody from "./Humanbody";
import Schedule from "./Schedule";
import TopBar from "./Topbar";

function Dashboard() {
      return (
        <main className="flex-1 flex flex-col gap-6">
          <TopBar />
          <div className="flex justify-between items-center">
            <h2 className="text-[#0f1a4b] font-bold text-lg">Dashboard</h2>
            <button
              aria-label="Filter by week"
              className="text-xs text-[#2c2cc4] font-semibold flex items-center gap-1"
            >
              This Week <i className="fas fa-chevron-down text-[10px]"></i>
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-6 flex-1">
              <HumanBody />
              <Activity />
            </div>
            <div className="flex flex-col gap-6 flex-1 max-w-[600px]">
              <HealthBars />
              <Calendar />
              <div className="flex gap-4 flex-wrap max-w-[600px]">
                <AppointmentCard
                  iconClass="fas fa-tooth"
                  title="Dentist"
                  time="09:00-11:00"
                  doctor="Dr. Cameron Williamson"
                  bgColor="#2c2cc4"
                  textColor="white"
                />
                <AppointmentCard
                  iconClass="fas fa-dumbbell"
                  title="Physiotherapy Appoinment"
                  time="11:00-12:00"
                  doctor="Dr. Kevin Djones"
                  bgColor="#dbe9f9"
                  textColor="#0f1a4b"
                />
              </div>
              <div className="max-w-[600px]">
                <h3 className="text-[#0f1a4b] font-semibold text-sm mb-2">
                  The Upcoming Schedule
                </h3>
                <div className="text-xs font-normal text-[#0f1a4b] mb-1">On Thursday</div>
                <div className="flex gap-4 flex-wrap mb-4">
                  <Schedule
                    iconClass="fas fa-pencil-alt"
                    title="Health checkup complete"
                    time="11:00 AM"
                    bgColor="#dbe9f9"
                    textColor="#0f1a4b"
                  />
                  <Schedule
                    iconClass="fas fa-eye"
                    title="Ophthalmologist"
                    time="14:00 PM"
                    bgColor="#dbe9f9"
                    textColor="#0f1a4b"
                  />
                </div>
                <div className="text-xs font-normal text-[#0f1a4b] mb-1">On Saturday</div>
                <div className="flex gap-4 flex-wrap">
                  <Schedule
                    iconClass="fas fa-heart"
                    title="Cardiologist"
                    time="12:00 AM"
                    bgColor="#dbe9f9"
                    textColor="#0f1a4b"
                  />
                  <Schedule
                    iconClass="fas fa-user-md"
                    title="Neurologist"
                    time="16:00 PM"
                    bgColor="#dbe9f9"
                    textColor="#0f1a4b"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }

    export default Dashboard;