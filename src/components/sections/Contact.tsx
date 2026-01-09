"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import { HiMail } from "react-icons/hi";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Contact() {
  const contacts = [
    {
      icon: HiMail,
      label: "Email",
      value: "Get in touch",
      href: "mailto:trangalt@proton.me",
      color: "text-red-500",
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/minh-ngn",
      color: "text-blue-600",
    },
    {
      icon: SiGithub,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/Iced-Coffee-Ctrl",
      color: "text-gray-800 dark:text-gray-200",
    },
  ];

  return (
    <Section id="contact" title="Let's Connect" subtitle="I'm open to new opportunities and collaborations">
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="block"
          >
            <GlassCard className="text-center hover:scale-105 transition-transform cursor-pointer">
              <contact.icon size={48} className={`mx-auto mb-4 ${contact.color}`} />
              <h3 className="text-lg font-bold mb-2">{contact.label}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 break-all">{contact.value}</p>
            </GlassCard>
          </motion.a>
        ))}
      </div>

    </Section>
  );
}
