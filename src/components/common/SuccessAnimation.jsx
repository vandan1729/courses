import { motion } from 'framer-motion';

export const SuccessAnimation = () => (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      exit={{ scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "100px",
        backgroundColor: "#3771Df",
        borderRadius: "50%",
        color: "white",
        fontSize: "1.5rem",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    >
      ✔️
    </motion.div>
  );
  