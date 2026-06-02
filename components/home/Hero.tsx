"use client";

import { motion } from "framer-motion";

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: customEase,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <motion.img
        src="/villa.jpg"
        alt="Neo Nature Resort"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-black/20" />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black
        via-black/30
        to-black/10
      "
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/50
        via-transparent
        to-transparent
      "
      />

      {/* Main Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-8 h-full">
          <div className="h-full flex flex-col justify-center">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-7xl"
            >
              {/* <motion.span
                variants={item}
                className="
                  inline-block
                  uppercase
                  tracking-[0.4em]
                  text-xs
                  text-white/70
                  mb-8
                "
              >
                Valuka, Mymensingh
              </motion.span> */}

              <div className="overflow-hidden">
                <motion.h1
                  variants={item}
                  className="
                    text-[40px]
                    sm:text-[60px]
                    md:text-[80px]
                    lg:text-[100px]
                    xl:text-[140px]
                    leading-[0.9]
                    tracking-[-0.05em]
                    font-serif
                    text-white
                  "
                >
                  Where Future
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  variants={item}
                  className="
                   text-[40px]
                    sm:text-[60px]
                    md:text-[80px]
                    lg:text-[100px]
                    xl:text-[140px]
                    leading-[0.9]
                    tracking-[-0.05em]
                    font-serif
                    text-white
                  "
                >
                  Meets Nature
                </motion.h1>
              </div>

              <motion.p
                variants={item}
                className="
                  mt-10
                  max-w-xl
                  text-lg
                  md:text-xl
                  text-white/75
                  leading-relaxed
                "
              >
                Bangladeshs first eco-intelligent destination where regenerative
                landscapes, luxury hospitality, and advanced technology merge
                into a new model for future living.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Floating Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="
            hidden
            lg:block
            absolute
            right-12
            top-1/2
            -translate-y-1/2
            w-[320px]
          "
        >
          <div
            className="
              backdrop-blur-xl
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
            "
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
              Future Living
            </p>

            <div className="space-y-4 text-white/80">
              <div>AI Concierge Experiences</div>
              <div>Autonomous Mobility</div>
              <div>Floating Villa Districts</div>
              <div>Regenerative Water Systems</div>
              <div>Immersive Digital Attractions</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Information Rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="
            absolute
            bottom-10
            left-0
            right-0
            px-8
          "
        >
          <div
            className="
              max-w-7xl
              mx-auto
              flex
              flex-col
              md:flex-row
              md:items-center
              justify-between
              gap-6
              text-white/60
              text-sm
            "
          >
            <div>Valuka, Bangladesh</div>

            <div className="hidden md:block flex-1 h-px bg-white/10 mx-8" />

            <div className="flex gap-8 flex-wrap">
              <span>Eco-Intelligent Resort</span>
              <span>Vision 2035</span>
              <span>Luxury Hospitality</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-24
            left-1/2
            -translate-x-1/2
            text-white/50
            text-xs
            uppercase
            tracking-[0.4em]
          "
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
