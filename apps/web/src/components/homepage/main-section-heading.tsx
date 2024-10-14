import React from 'react'
import { motion } from "framer-motion"

type Props = {
    title?: string;
}

export default function MainSectionHeading({ title = "Featured Products" }: Props) {
    return (
        <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {title}
        </motion.h2>
    )
}