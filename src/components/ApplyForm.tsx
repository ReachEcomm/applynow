"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ApplyForm.module.css";

type FormState = {
  homeowner: string;
  need: string;
  amount: string; // raw numeric string without commas
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

const initialState: FormState = {
  homeowner: "",
  need: "",
  amount: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function formatWithCommas(val: string) {
  if (!val) return "";
  const n = val.replace(/[^0-9]/g, "");
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function onlyDigits(val: string) {
  return val.replace(/\D/g, "");
}

export default function ApplyForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // capture UTM params into hidden fields
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source") || undefined;
    const utm_medium = params.get("utm_medium") || undefined;
    const utm_campaign = params.get("utm_campaign") || undefined;
    const utm_term = params.get("utm_term") || undefined;
    const utm_content = params.get("utm_content") || undefined;
    setForm((s) => ({ ...s, utm_source, utm_medium, utm_campaign, utm_term, utm_content }));
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.homeowner) e.homeowner = "Please select if you're a homeowner";
    if (!form.need) e.need = "Please choose what you need help with";
    if (!form.amount || Number(onlyDigits(form.amount)) < 1000)
      e.amount = "Please enter an amount of at least $1,000";
    if (!form.firstName) e.firstName = "First name is required";
    if (!form.lastName) e.lastName = "Last name is required";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone || onlyDigits(form.phone).length < 10) e.phone = "Enter a valid phone number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAmountChange = (v: string) => {
    const digits = onlyDigits(v);
    setForm((s) => ({ ...s, amount: digits }));
  };

  const handlePhoneChange = (v: string) => {
    // simple formatting: keep digits, format as XXX-XXX-XXXX as user types
    const d = onlyDigits(v).slice(0, 10);
    let formatted = d;
    if (d.length > 6) formatted = `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
    else if (d.length > 3) formatted = `${d.slice(0, 3)}-${d.slice(3)}`;
    setForm((s) => ({ ...s, phone: formatted }));
  };

  const handleSubmit = async (ev?: React.FormEvent) => {
    ev?.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const payload = { ...form, amount: form.amount ? Number(form.amount) : null };
      const apiUrl = new URL("api/submit", window.location.href).href; // ensures basePath is preserved
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "cors",
      });
      if (!res.ok) {
        let bodyText = "";
        try {
          bodyText = await res.text();
        } catch (e) {
          /* ignore */
        }
        // attach server response to errors to help debugging
        throw new Error(`Submission failed: ${res.status} ${res.statusText} ${bodyText}`);
      }
  // redirect to thank-you (relative path so basePath is preserved)
  router.push("thank-you");
    } catch (err) {
      console.error('Submit error', err);
      setErrors((e) => ({ ...e, submit: (err as Error).message || "Submission error" }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.formCard}>
      <div className={styles.wrapper}>
        <div className={styles.panel}>
          <h2>Fast, friendly, and flexible</h2>
          <p>Tell us a bit about your needs and we'll match you with the right option. No obligation.</p>
          <ul>
            <li>Works for homeowners in Ontario</li>
            <li>HELOC, refinance, renewal & more</li>
            <li>Bank-grade security</li>
          </ul>
        </div>

        <div>
          <div className={styles.pageTitle}>Secure Your Approval</div>
          <div className={styles.progress}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} />
            </div>
            <div className={styles.progressLabels}>
              <div>Step 1</div>
              <div>Step 2</div>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div>
              <label>Are you a homeowner in Ontario? *</label>
              <div>
                <label>
                  <input
                    name="homeowner"
                    type="radio"
                    value="yes"
                    checked={form.homeowner === "yes"}
                    onChange={() => setForm((s) => ({ ...s, homeowner: "yes" }))}
                  />
                  Yes
                </label>
                <label style={{ marginLeft: 12 }}>
                  <input
                    name="homeowner"
                    type="radio"
                    value="no"
                    checked={form.homeowner === "no"}
                    onChange={() => setForm((s) => ({ ...s, homeowner: "no" }))}
                  />
                  No
                </label>
              </div>
              {errors.homeowner && <div className={styles.error}>{errors.homeowner}</div>}
            </div>

            <div>
              <label>What do you need help with most right now? *</label>
              <div className={styles.needsGrid}>
                {[
                  { title: 'Consolidate Debt', subtitle: 'Simplify and lower payments' },
                  { title: 'Home Equity Line of Credit', subtitle: 'Flexible access to funds' },
                  { title: 'Home Equity Loan', subtitle: 'Lump sum for projects' },
                  { title: 'Refinance', subtitle: 'Adjust rate/term' },
                  { title: 'Renewal', subtitle: 'Stay ahead of renewals' },
                  { title: 'Reverse Mortgage', subtitle: 'Unlock equity later in life' },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.title}
                    className={`${styles.needPill} ${form.need === opt.title ? styles.selected : ''}`}
                    onClick={() => setForm((s) => ({ ...s, need: opt.title }))}
                  >
                    <div className={styles.needTitle}>{opt.title}</div>
                    <div className={styles.needSubtitle}>{opt.subtitle}</div>
                  </button>
                ))}
              </div>
              {errors.need && <div className={styles.error}>{errors.need}</div>}
            </div>

            <div>
              <label>What's the amount you have in mind? *</label>
              <input
                className={styles.input}
                inputMode="numeric"
                value={formatWithCommas(form.amount)}
                onChange={(e) => handleAmountChange(e.target.value)}
                placeholder="e.g., 50,000"
              />
              <div className={styles.small}>Minimum $1,000. Live formatting with commas.</div>
              {errors.amount && <div className={styles.error}>{errors.amount}</div>}
            </div>

            <div className={styles.row}>
              <div>
                <label>First Name *</label>
                <input className={styles.input} value={form.firstName} onChange={(e) => setForm((s) => ({ ...s, firstName: e.target.value }))} />
                {errors.firstName && <div className={styles.error}>{errors.firstName}</div>}
              </div>
              <div>
                <label>Last Name *</label>
                <input className={styles.input} value={form.lastName} onChange={(e) => setForm((s) => ({ ...s, lastName: e.target.value }))} />
                {errors.lastName && <div className={styles.error}>{errors.lastName}</div>}
              </div>
            </div>

            <div className={styles.row}>
              <div>
                <label>Email *</label>
                <input className={styles.input} value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} />
                {errors.email && <div className={styles.error}>{errors.email}</div>}
              </div>
              <div>
                <label>Phone *</label>
                <input className={styles.input} value={form.phone} onChange={(e) => handlePhoneChange(e.target.value)} placeholder="123-456-7890" />
                <div className={styles.small}>Enter digits; we'll format with dashes.</div>
                {errors.phone && <div className={styles.error}>{errors.phone}</div>}
              </div>
            </div>

            {/* Hidden UTM fields */}
            <input type="hidden" name="utm_source" value={form.utm_source ?? ""} />
            <input type="hidden" name="utm_medium" value={form.utm_medium ?? ""} />
            <input type="hidden" name="utm_campaign" value={form.utm_campaign ?? ""} />
            <input type="hidden" name="utm_term" value={form.utm_term ?? ""} />
            <input type="hidden" name="utm_content" value={form.utm_content ?? ""} />

            {errors.submit && <div className={styles.error}>{errors.submit}</div>}

            <div className={styles.actions}>
              <button type="button" className={styles.btnSecondary} onClick={() => window.history.back()}>
                ← Back
              </button>
              <button type="submit" disabled={submitting} className={styles.btnPrimary}>
                {submitting ? "Submitting..." : "Continue →"}
              </button>
            </div>
          </div>
          <div className={styles.panelFooter}>© Lighthouse Lending</div>
        </div>
      </div>
    </form>
  );
}
