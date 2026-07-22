"use client";

import { Home, Layers, Code2, User, Mail } from "lucide-react";
import { NavBar } from "@/components/navbar";

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "Projects", url: "#projects", icon: Layers },
  { name: "Skills", url: "#skills", icon: Code2 },
  { name: "About", url: "#about", icon: User },
  { name: "Contact", url: "#contact", icon: Mail },
];

export function Navigation() {
  return <NavBar items={navItems} />;
}
