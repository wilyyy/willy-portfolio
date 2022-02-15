export const dropIn = {
    hidden: {
        // y: "-50vh",
        scale: 0,
        opacity: 0
    },
    visible: {
        // y: "0",
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.7,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        // 
        scale: 0,
        opacity: 0
    }
}

export const modalBg = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.7,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        opacity: 0
    }
}