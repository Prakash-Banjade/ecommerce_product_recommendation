"use client"
import { motion } from "framer-motion"

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

interface ProductCardProps extends React.PropsWithChildren { }

export function ProductCardWrapper({ children }: ProductCardProps) {
    return (
        <motion.div variants={fadeIn}>
            {children}
        </motion.div>
    )
}