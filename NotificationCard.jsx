import "../styles/NotificationCard.css";

function NotificationCard() {

  const notifications = [
    "Carbon emissions increased by 5%",
    "CSR activity approved",
    "New badge earned by IT Department",
    "Monthly ESG report is ready",
  ];

  return (
    <div className="notification-card">

      <h3>🔔 Recent Notifications</h3>

      {notifications.map((note, index) => (
        <div className="notification-item" key={index}>
          • {note}
        </div>
      ))}

    </div>
  );
}

export default NotificationCard;