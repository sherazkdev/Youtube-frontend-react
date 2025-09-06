import React from "react";
import {AnimatePresence,motion} from "framer-motion";
import Icons from "../../../assets/Icons";

const LikeButton = ({isLiked}) => {

  return (
    <motion.div
      whileTap={{ scale: 1.2 }}
      className={`w-6.5 h-6.5 rounded-full transition-all duration-300`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLiked ? (
          <motion.div
            key="filled"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icons.ThumbOutline  />
          </motion.div>
        ) : (
          <motion.div
            key="outline"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icons.ThumbFilled/>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LikeButton;
