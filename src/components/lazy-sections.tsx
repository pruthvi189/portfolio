"use client";

import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/sections/skills").then(m => ({ default: m.Skills })), { ssr: false });
const About = dynamic(() => import("@/components/sections/about").then(m => ({ default: m.About })), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/contact").then(m => ({ default: m.Contact })), { ssr: false });

export { Skills, About, Contact };
