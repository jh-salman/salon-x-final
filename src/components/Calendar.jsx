import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      title: "Cristi Curls - Extension Install",
      start: new Date(2025, 6, 9, 10, 0), // July is month 6 (0-based)
      end: new Date(2025, 6, 9, 11, 0),
      resource: { stylist: "Claire Mills" },
    },
    {
      title: "Candy Smiles - Full lived-in colour",
      start: new Date(2025, 6, 9, 10, 30),
      end: new Date(2025, 6, 9, 11, 15),
      resource: { stylist: "Joshua Mitchell" },
    },
    {
      title: "Joe Styles - Men's haircut & color",
      start: new Date(2025, 6, 9, 12, 45),
      end: new Date(2025, 6, 9, 13, 45),
    },
    {
      title: "Nita Haredoo - Extensions and colour",
      start: new Date(2025, 6, 9, 15, 30),
      end: new Date(2025, 6, 9, 16, 0),
    },
  ]);

  const [currentView, setCurrentView] = useState("day");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 9));
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAction = (actionType) => {
    console.log(`${actionType} clicked for`, selectedEvent);
    setSelectedEvent(null);
  };

  const startOfWeek = moment(currentDate).startOf("week").add(1, "day"); // Start from Monday
  const weekDays = Array.from({ length: 7 }).map((_, i) =>
    moment(startOfWeek).clone().add(i, "days")
  );

  return (
    <div style={{
      height: "100vh",
      padding: "20px",
      backgroundColor: "#0a0a0a",
      color: "#fff",
      WebkitOverflowScrolling: "touch"
    }}>
      <div className="custom-calendar" style={{ width: "100%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <button
            onClick={() => setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 1)))}
            style={{
              background: "none",
              border: "none",
              color: "#00b7ff",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              marginRight: "8px",
            }}
          >
            {"<<"}
          </button>

          <div
            style={{
              display: "flex",
              borderRadius: "30px",
              background: "linear-gradient(90deg, #4a4a4a, #3a3a3a)",
              border: "1px solid #5e5e5e",
              padding: "4px",
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            }}
          >
            {["day", "week", "month"].map((v) => (
              <button
                key={v}
                onClick={() => setCurrentView(v)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "24px",
                  border: "none",
                  margin: "0 2px",
                  background: currentView === v
                    ? "radial-gradient(circle at center, #222 0%, #111 100%)"
                    : "transparent",
                  boxShadow: currentView === v
                    ? "0px 0px 8px rgba(0, 183, 255, 0.6)"
                    : "none",
                  color: currentView === v ? "#00b7ff" : "#ccc",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 1)))}
            style={{
              background: "none",
              border: "none",
              color: "#00b7ff",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              marginLeft: "8px",
            }}
          >
            {">>"}
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#ccc", fontSize: "14px", maxWidth: "393px", margin: "0 auto 10px auto" }}>
          {weekDays.map((day, idx) => {
            const isSelected = moment(currentDate).isSame(day, "day");
            return (
              <div key={idx} style={{ textAlign: "center", width: "100%", fontWeight: "500", cursor: "pointer" }} onClick={() => setCurrentDate(day.toDate())}>
                <div>{day.format("dd")[0]}</div>
                <div style={{
                  marginTop: "4px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  lineHeight: "32px",
                  backgroundColor: isSelected ? "#00b0ff" : "transparent",
                  color: isSelected ? "#fff" : "#ccc",
                  margin: "auto"
                }}>
                  {day.date()}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px", marginBottom: "10px" }}>
          <span style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#fff",
            marginRight: "10px"
          }}>
            {moment(currentDate).format("dddd")}
          </span>

          <div style={{ display: "flex", gap: "8px" }}>
            {[...new Set(events.map(e => e.resource?.stylist).filter(Boolean))].map(stylist => (
              <span key={stylist} style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 12px",
                backgroundColor: "#1a1a1a",
                border: "1px solid #f28c28",
                color: "#fff",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "500"
              }}>
                <span style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#f28c28",
                  marginRight: "6px"
                }}></span>
                {stylist}
              </span>
            ))}
          </div>
        </div>
        <div style={{
          height: "calc(100vh - 320px)",
          overflowX: "auto",
          overflowY: "auto",
        }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            view={currentView}
            onView={(view) => setCurrentView(view)}
            views={["day", "week", "month"]}
            style={{
              height: "100%",
              width: "100%"
            }}
            min={new Date(2025, 6, 9, 8, 0)}  // 8:00 AM on July 9
            max={new Date(2025, 6, 9, 19, 0)} // 7:00 PM on July 9
            defaultDate={currentDate}
            date={currentDate}
            onNavigate={(date) => setCurrentDate(date)}
            toolbar={false}
            onSelectEvent={(event) => setSelectedEvent(event)}
            eventPropGetter={(event) => {
              const gradients = {
                "Cristi Curls": "linear-gradient(135deg, #9b59b6, #e91e63)", // purple-pink
                "Candy Smiles": "linear-gradient(135deg, #a1c4fd, #c2e9fb)", // blue gradient
                "Joe Styles": "linear-gradient(135deg, #bdc3c7, #2c3e50)", // gray tone
                "Nita Haredoo": "linear-gradient(135deg, #d4fc79, #96e6a1)", // green tone
                default: "linear-gradient(135deg, #d4fc79, #96e6a1)"
              };

              // Determine client name from event.title
              const clientName = event.title.split(" - ")[0];
              const background = gradients[clientName] || gradients.default;

              // Stylist color fallback
              const stylistColor = event.resource?.stylist === "Claire Mills"
                ? "#ff33cc"
                : event.resource?.stylist === "Joshua Mitchell"
                ? "#00b7ff"
                : "#888";

              return {
                style: {
                  background: background,
                  borderLeft: `4px solid ${stylistColor}`,
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "13px",
                  padding: "8px 10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
                }
              };
            }}
            components={{
              event: ({ event }) => {
                const [client, service] = event.title.split(" - ");
                return (
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "13px", color: "#fff" }}>{client}</div>
                    <div style={{ fontSize: "12px", color: "#e0e0e0", marginTop: "2px" }}>{service}</div>
                    <div style={{ fontSize: "11px", display: "flex", alignItems: "center", marginTop: "4px", color: "#cfcfcf" }}>
                      <span style={{ marginRight: "4px" }}>⏱</span>
                      {moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}
                    </div>
                  </div>
                );
              }
            }}
          />
        </div>
      </div>
      {selectedEvent && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#111",
              borderRadius: "16px",
              padding: "20px",
              width: "320px",
              color: "#fff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)"
            }}
          >
            <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
              {selectedEvent.title.split(" - ")[0]}
            </h3>

            {["PARK", "MODIFY", "DOUBLE BOOK", "NEW APPOINTMENT", "DELETE"].map(label => (
              <button
                key={label}
                onClick={() => handleAction(label)}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "24px",
                  background: "#101010",
                  border: "1px solid #555",
                  color: "#fff",
                }}
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => setSelectedEvent(null)}
              style={{
                marginTop: "10px",
                width: "100%",
                background: "transparent",
                border: "none",
                color: "#aaa",
                textAlign: "center"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <style>
        {`
          .custom-calendar .rbc-calendar {
            background-color: #121212;
            color: #fff;
            font-family: 'Segoe UI', sans-serif;
            border-radius: 20px;
          }
          .custom-calendar .rbc-event {
            border: none !important;
            padding: 6px 10px;
            border-radius: 16px !important;
            color: #fff !important;
            font-weight: 500;
            font-size: 13px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3) !important;
          }
          .custom-calendar .rbc-time-slot {
            border-color: #444 !important;
          }
          .custom-calendar .rbc-time-header-content,
          .custom-calendar .rbc-timeslot-group {
            border-color: #444 !important;
          }
          .custom-calendar .rbc-time-header {
            background-color: #1f1f1f;
          }
          .custom-calendar .rbc-toolbar {
            max-width: 393px;
            margin: 0 auto 10px auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .custom-calendar .rbc-toolbar-label {
            flex: 1 1 100%;
            text-align: center;
            margin-bottom: 5px;
          }
          .custom-calendar .rbc-toolbar button {
            background: transparent;
            color: white;
            border: none;
            padding: 8px 12px;
            margin: 0 5px;
            border-radius: 8px;
          }
          .custom-calendar .rbc-toolbar button.rbc-active {
            background-color: #6200ea;
          }
          .custom-calendar .rbc-today {
            background-color: rgba(255, 255, 255, 0.05) !important;
          }
          .custom-calendar .rbc-current-time-indicator {
            background-color: red !important;
            height: 2px;
          }
          .custom-calendar .rbc-time-content .rbc-time-gutter .rbc-timeslot-group {
            font-size: 9px;
            color: #bbb;
            font-weight: 400;
          }
          .custom-calendar .rbc-time-gutter-cell {
            font-size: 9px;
            color: #bbb;
            font-weight: 400;
          }
          .custom-date-picker {
            background-color: #1a1a1a;
            color: #fff;
            border: 1px solid #333;
            border-radius: 20px;
            padding: 8px 16px;
            font-size: 14px;
            text-align: center;
            width: 100%;
            max-width: 300px;
          }
          .custom-calendar-popup {
            background-color: #1e1e1e;
            color: white;
            border-radius: 12px;
          }
          .react-datepicker__day--selected {
            background-color: #00b0ff !important;
            color: white !important;
          }
        `}
      </style>
    </div>
  );
};

export default CalendarComponent;
