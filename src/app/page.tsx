"use client";

import { Section, Block } from "@/devlink/_Builtin";
import ApplyForm from "@/components/ApplyForm";

export default function Home() {
  return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Block tag="div" className="container">
        <Block tag="div" className="hero-split" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <ApplyForm />
        </Block>
      </Block>
    </Section>
  );
}
