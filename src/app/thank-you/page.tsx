import { Section, Block } from "@/devlink/_Builtin";

export default function ThankYou() {
  return (
    <Section tag="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Block tag="div" className="container">
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Thank you</h1>
          <p>We received your submission. One of our advisors will be in touch soon.</p>
        </div>
      </Block>
    </Section>
  );
}
