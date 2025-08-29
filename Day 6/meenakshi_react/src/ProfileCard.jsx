import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProfileCard = () => {
  const styles = {
    card: {
      background: "linear-gradient(135deg, #f8f9fa, #e3f2fd)",
      borderRadius: "18px",
      boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
      padding: "30px",
      width: "340px",
      textAlign: "center",
      margin: "60px auto",
      fontFamily: "Arial, sans-serif",
    },
    image: {
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      marginBottom: "18px",
      objectFit: "cover",
      border: "5px solid white",
      boxShadow: "0px 3px 8px rgba(0,0,0,0.2)",
    },
    name: {
      fontSize: "1.8rem",
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#333",
    },
    title: {
      fontSize: "1.1rem",
      color: "#0077b6",
      marginBottom: "12px",
      fontWeight: "500",
    },
    location: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#555",
      fontSize: "1rem",
      marginBottom: "14px",
    },
    description: {
      fontSize: "1rem",
      color: "#444",
      lineHeight: "1.4",
      marginBottom: "14px",
    },
    languages: {
      display: "flex",
      justifyContent: "center",
      gap: "15px", // space between languages
      fontSize: "1rem",
      fontWeight: "500",
      color: "#555",
    },
  };

  return (
    <div style={styles.card}>
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Profile"
        className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
        style={styles.image}
      />
      <h2 style={styles.name}>Meenakshi Mishra</h2>
      <p style={styles.title}>software engineer</p>
      <div style={styles.location}>
        <FaMapMarkerAlt size={16} style={{ marginRight: "6px", color: "#ff4d4d" }} />
        <span>Gwalior, MP</span>
      </div>
      <p style={styles.description}>
        hi! i'm a B.Tech Computer Science student , currently in my 5th sem | Interested in Full Stack Development, AI and cyber security
      </p>
      <div style={styles.languages}>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
    </div>
  );
};

export default ProfileCard;
