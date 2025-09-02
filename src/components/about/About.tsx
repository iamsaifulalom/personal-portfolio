"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function About() {
  const [tab, setTab] = useState("portfolio")

  return (
    <Tabs value={tab} onValueChange={setTab} className="px-2 mt-6">
      <TabsList className="w-full justify-between bg-foreground/5">
        <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="blog">Blog</TabsTrigger>
      </TabsList>

      <div className="relative h-32 mt-4">
        <AnimatePresence mode="wait">
          {tab === "portfolio" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              Portfolio Content
            </motion.div>
          )}
          {tab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              About Content
            </motion.div>
          )}
          {tab === "blog" && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              Blog Content
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Tabs>
  )
}
