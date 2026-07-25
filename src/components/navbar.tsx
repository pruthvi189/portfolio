"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach((item) => {
      const id = item.url.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTab(item.name);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed bottom-0 sm:top-0 sm:bottom-auto left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-0.5 sm:gap-1 bg-background/80 border border-border/60 backdrop-blur-xl py-1 px-1 rounded-full">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              aria-label={item.name}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative cursor-pointer text-xs font-medium px-3 sm:px-5 py-2 rounded-full transition-colors duration-200",
                "text-muted-foreground hover:text-foreground",
                isActive && "text-foreground",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-secondary rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 35,
                  }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-orange rounded-full" />
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
