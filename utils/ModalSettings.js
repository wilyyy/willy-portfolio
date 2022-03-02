import TypewriterComponent from "typewriter-effect"

export const dropIn = {
    hidden: {
        // y: "-50vh",
        scale: 0.4,
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

export const slideInFromBottom = {
    hidden: {
        y: "50vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            delay: 1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
}

export const slideInFromTop = {
    hidden: {
        y: "50vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            delay: 1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
}

export const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.2,
            duration: 0.5,
            type: "tween"
        }
    }
}