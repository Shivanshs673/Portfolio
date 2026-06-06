"use client";

import { motion } from "framer-motion";
import { PenTool } from "lucide-react";

import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function BlogSection() {
  return (
    <section className="section-wrapper px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Blog"
          title="Short-form writing for engineering depth"
          description="A lightweight blog preview helps recruiters see how Shivansh thinks, explains tradeoffs, and structures learning."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="glass h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-cyan-200">
                  <PenTool className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{post.description}</p>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
