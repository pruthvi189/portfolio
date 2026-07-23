"use client";

import { Layers, Mail } from "lucide-react";
import { NavBar } from "@/components/navbar";

const navItems = [
  { name: "Projects", url: "#projects", icon: Layers },
  { name: "Contact", url: "#contact", icon: Mail },
];

export function Navigation() {
  return <NavBar items={navItems} />;
}
