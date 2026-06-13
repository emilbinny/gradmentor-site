# GradMentor.org — Complete Change List & Deployment Guide
**Prepared:** June 2026
**Repo:** https://github.com/emilbinny/gradmentor-site
**Live:** https://gradmentor.org (GitHub Pages + Cloudflare)

---

## 0. READ THIS FIRST — The Most Important Finding

**Your live site is an OLD deploy. Your repo is already ahead of it.**

When I compared the live `gradmentor.org` against the actual files in your GitHub repo, I found the repo has *already fixed* several things the live site still shows broken:

| Issue | Live site (deployed) | Repo (current) |
|---|---|---|
| About/Contact template | Old (`H2_horizontal_transparent.png`, 4-link nav, no Blog) | Fixed (`logo-horizontal.png`, 5-link nav with Blog) |
| Calendly link | `calendly.com/gradmentor` (placeholder) | `calendly.com/emil-binny/coffee-chat` (real) |
| Formspree | not wired | wired to `xdkgazbj` |
| WhatsApp on contact | raw link | labelled `+1-832-664-1844` |

**=> Action: Just pushing the current repo fixes the template mismatch, the dead Calendly, and the form. Do that regardless of everything else below.**

Everything in this document is about issues that **still exist in the repo** and need editing before you push.

---

## 1. CRITICAL — Remove "Coming Soon" everywhere (brief says: never use it)

### 1a. Homepage advisor cards (`index.html`, lines ~199–226)
Four "Advisor Onboarding — Coming Soon" cards directly contradict the "Premium Firm, Not a Freelancer" positioning. They advertise an empty firm.

**DELETE** the four `.advisor-card` blocks that say "Advisor Onboarding". Keep only the Emil card.

Then **change the section framing** from "growing team" to "curated network" (honest + still premium). Replace the section header text (lines ~187–189):

```html
<div class="section-overline">The Practice</div>
<h2 class="section-title">Founder-Led, Network-Backed</h2>
<p class="section-subtitle">GradMentor is led personally by Emil Binny, who handles every MBA and Business PhD engagement directly. For MS, medical, and specialised tracks, candidates are matched to vetted advisors from our curated network on a per-profile basis.</p>
```

And replace the single Emil advisor card with the upgraded bio (see §3).

### 1b. Homepage blog preview (`index.html`, lines ~266–293)
Three "Coming Soon" blog cards. **Replace** with the three real launch posts (full replacement block in §5b).

### 1c. Blog index (`blog/index.html`, lines ~40–73)
Three "Coming Soon" cards + "More articles coming soon." **Replace** the entire `.blog-grid` with the 6 real post cards (full block in §5c). Remove the "Subscribe to stay updated" line or wire it to a real form.

### 1d. About page founder photo (`pages/about.html`, line ~46)
`<div class="founder-photo">Photo Coming Soon</div>` — either add a real headshot or change to a neutral monogram. Suggested interim:
```html
<div class="founder-photo">EB</div>
```

---

## 2. CRITICAL — Tone: strip the superlatives (brief bans "best/top/world-class/elite")

The brief's positioning rules forbid hype. Current copy is full of it. Make these edits:

### Homepage (`index.html`)
| Line | Current | Change to |
|---|---|---|
| `<title>` (6) | "Elite Admissions & Career Advisory" | "Admissions & Career Advisory for MBA, PhD & MS Applicants" |
| hero-overline (81) | "Elite Admissions Consulting" | "Boutique Admissions Advisory" |
| h1 (82) | "Your Roadmap to *Top Global* Programs" | "A Considered Path to the *Programs You Want*" |
| hero-description (83) | "...at the world's most selective institutions." | "...at competitive MBA, PhD, MS, and medical programs." |
| section-title (110) | "Services Built for High-Achievers" | "What We Help You With" |

### Services (`pages/services.html`)
- Replace "premium, end-to-end" / "top global" phrasing in the hero with "structured, end-to-end" and "competitive."
- "Transparent, Value-Driven Engagement" header is fine, but see §6 (pricing) — either add real anchors or rename to "How Engagements Are Scoped."

### About (`pages/about.html`)
- "most applicants to elite MBA and PhD programmes" -> "most applicants to competitive MBA and PhD programmes"

### Why this matters
Your testimonials are (correctly) anonymized. Anonymized testimonials + "elite / world's most selective" reads as fabricated. Anonymized testimonials + grounded, specific language reads as honest discretion. Pick the second.

---

## 3. CRITICAL — Fix Emil's bio (underselling + inaccuracy)

Two problems across homepage AND about page:
1. **The Rutgers PhD is missing entirely** — your single strongest credibility signal.
2. **The "250+ candidate evaluations" is missing** — your second strongest, and it's verifiable.
3. **"CFA Candidate (Registered)"** on about.html may be premature (your CFA L1 was scoped for Feb 2027). Recommend removing or softening to "CFA Level 1 candidate (Feb 2027 sitting)" — don't claim registration you don't hold.

### 3a. Homepage advisor card (`index.html`) — replace the Emil card with:
```html
<div class="advisor-card">
  <div class="advisor-photo">EB</div>
  <h4>Emil Mathew Binny</h4>
  <div class="advisor-title">Founder &amp; Principal Advisor</div>
  <div class="advisor-university">Rutgers Business School · Rice University · JNU</div>
  <p class="advisor-desc">Incoming PhD candidate in International Business &amp; Strategy at Rutgers (Fall 2026, funded). MBA from Rice, MA in Applied Economics from JNU. Has conducted 250+ candidate evaluations as a Rice MBA Admissions Ambassador. Handles MBA and Business PhD strategy personally.</p>
  <a href="https://emilbinny.com/about.html" class="service-link" target="_blank" rel="noopener">Learn more about Emil →</a>
</div>
```

### 3b. About page bio (`pages/about.html`, lines ~50–62) — replace the bio paragraphs and credentials list:
```html
<p>GradMentor was born from a simple observation: most applicants to competitive MBA and PhD programmes are qualified — but very few know how to present that qualification compellingly. The difference between an admit and a ding is rarely about grades or test scores. It's about story, strategy, and positioning.</p>
<p>Emil Mathew Binny is an incoming PhD candidate in International Business &amp; Strategy at Rutgers Business School (Fall 2026, funded), with an MBA from Rice University (Jones Graduate School) and an MA in Applied Economics from JNU. As a Rice MBA Admissions Ambassador, he conducted 250+ candidate evaluations — seeing first-hand what separates an admit from a rejection. He brings practitioner experience across corporate finance, pricing strategy, and institutional research.</p>
<p>GradMentor's approach is rigorous, personalised, and results-oriented — built around the client's unique story, not a templated process. Emil handles every MBA and Business PhD engagement personally; other tracks are matched to vetted advisors from a curated network.</p>
<ul class="credentials-list">
  <li>Incoming PhD, International Business &amp; Strategy — Rutgers Business School (funded, Fall 2026)</li>
  <li>MBA — Rice University (Jones Graduate School of Business)</li>
  <li>MA in Applied Economics — Jawaharlal Nehru University (JNU), Delhi</li>
  <li>250+ candidate evaluations — Rice MBA Admissions Ambassador</li>
  <li>Research: Kerala State Planning Board, Coffee Board of India (with King's College London &amp; Gulati Institute faculty)</li>
  <li>Practitioner background across corporate finance, pricing strategy, and institutional research</li>
</ul>
<p style="margin-top:1.5rem;"><a href="https://emilbinny.com/about.html" target="_blank" rel="noopener">Learn more about Emil → emilbinny.com</a></p>
```

---

## 4. HIGH — Remove the unverifiable "network at Harvard/Wharton/Booth/INSEAD" claim

`pages/about.html` (repo line ~52) claims "a network of advisors and alumni at programmes including Harvard, Wharton, Chicago Booth, and INSEAD." With zero advisors actually listed, this is the most exposed claim on the site and the exact "claim a team that doesn't exist" failure the brief warns against. The replacement bio in §3b already removes it. **Confirm it's gone.**

Also fix the homepage stat card "**Top 10** — MBA & PhD Admits" (`index.html` line ~90), which is unsubstantiated. Replace with the verifiable signal:
```html
<div class="hero-stat-number">250+</div>
<div class="hero-stat-label">Candidate Evaluations</div>
```

---

## 5. Blog: complete the unfinished posts + 3 new SEO posts

I have written **6 complete, publish-ready HTML articles** (provided alongside this file). They target high-intent admissions search terms to drive organic traffic.

### 5a. The 6 articles (drop all into `/blog/`)
| File | Target keyword cluster | Category |
|---|---|---|
| `mba-narrative-typical-background.html` | "MBA essay typical background", "stand out MBA application" | MBA Strategy |
| `professor-outreach-email-phd.html` | "how to email professors for PhD", "PhD cold email template" | PhD Applications |
| `post-mba-career-pivot-2026.html` | "post MBA career change", "MBA career switch consulting to tech" | Career Advisory |
| `sop-mistakes-mba-phd.html` | "common SOP mistakes", "statement of purpose mistakes MBA PhD" | Admissions |
| `mba-vs-ms-vs-phd-which-degree.html` | "MBA vs MS vs PhD", "which graduate degree should I do" | Admissions |
| `funded-phd-application-guide-india.html` | "fully funded PhD USA from India", "funded PhD application guide" | PhD Applications |

Each file is self-contained, uses the site's design system (Playfair + Source Sans, navy/gold), includes meta tags, canonical URL, OG tags, JSON-LD `BlogPosting` schema, internal links to `/pages/contact.html` and `/pages/services.html`, and a closing CTA.

### 5b. Homepage blog preview — replace lines ~266–293 with:
(Full block in the file `SNIPPET-homepage-blog.html` provided alongside.)

### 5c. Blog index — replace the `.blog-grid` in `blog/index.html` with the 6-card block:
(Full block in the file `SNIPPET-blog-index-grid.html` provided alongside.)

### 5d. Add the article-body CSS
The shared stylesheet has no article/prose styles. I've prepared a CSS block to **append to the end of `css/styles.css`** — provided as `SNIPPET-article-css.css`. Paste it at the bottom of `css/styles.css`. (The articles also work without it because they carry a scoped `<style>` fallback, but appending keeps it DRY.)

---

## 6. MEDIUM — Services pricing transparency

`pages/services.html` lists every tier as "Custom / per project" with no anchor. Under a header that says "Transparent." A sophisticated buyer can't self-qualify. Two options:
- **(A) Add "starting from" anchors** (e.g. "Essentials — from ₹X / $Y"), OR
- **(B) Rename the header** from "Transparent, Value-Driven Engagement" to "How Engagements Are Scoped" so you're not promising transparency you don't show.

Pick one. Doing neither is the weakest choice.

---

## 7. MEDIUM — Footer & nav consistency (repo is mostly fine, verify after push)

- Footer service links all point to bare `services.html` (no anchors). Optional: add `#mba`, `#phd` anchors to the service sections in `services.html` and link them.
- Homepage `blog/` link in nav resolves to `blog/index.html` — fine.
- After pushing, click through every nav item on the LIVE site to confirm the stale template is gone.

---

## 8. LOW — SEO housekeeping

1. **Update `sitemap.xml`** to include all 6 blog posts + refresh `lastmod`. A ready-to-use sitemap is provided as `sitemap.xml` (overwrite the existing one).
2. **Google Search Console** — add `gradmentor.org` as a domain property, verify via Cloudflare TXT, submit `https://gradmentor.org/sitemap.xml`.
3. **OG image** — `og:image` points to `assets/img/gm-icon-dark.png` (an icon, not a 1200×630 social card). Create a proper 1200×630 `og-image.png` and update the `og:image` tags across pages for better link previews.
4. **`blog/sample.html`** is a bare non-design-system file. Delete it (`git rm blog/sample.html`) so it isn't indexed.
5. Internal linking: the new articles link to each other and to services/contact — this builds topical authority. Keep adding 1–2 posts/month around the same keyword clusters.

---

## 9. DEPLOYMENT — Zip + terminal push (same as emilbinny.com)

You said you push via a downloaded zip. Here's the clean sequence.

1. Download the zip I provide and unzip it. It contains the new/changed files in the correct folder structure:
   ```
   blog/mba-narrative-typical-background.html
   blog/professor-outreach-email-phd.html
   blog/post-mba-career-pivot-2026.html
   blog/sop-mistakes-mba-phd.html
   blog/mba-vs-ms-vs-phd-which-degree.html
   blog/funded-phd-application-guide-india.html
   blog/index.html              (updated)
   sitemap.xml                  (updated)
   SNIPPET-*.html / .css        (paste-in snippets for index.html, services.html, styles.css)
   ```
2. Copy these into your local clone of `gradmentor-site`, overwriting where prompted.
3. Hand-apply the snippet edits to `index.html`, `pages/about.html`, `pages/services.html`, and `css/styles.css` per sections §1–§6 above (these are surgical edits, not full-file replacements, so I give them as snippets rather than overwrite your whole homepage).
4. Delete the stale sample: `git rm blog/sample.html`
5. Push:
   ```bash
   cd ~/path/to/gradmentor-site
   git add .
   git commit -m "Content overhaul: remove Coming Soon, fix bio + Rutgers PhD, strip superlatives, launch 6 blog posts, update sitemap"
   git push origin main
   ```
6. GitHub Pages redeploys in ~60s via Cloudflare. Hard-refresh and click through all pages.

---

## 10. Priority order (do in this sequence)

1. **Push the current repo** — instantly fixes the stale live template, Calendly, and form. (5 min)
2. **Remove all "Coming Soon"** (advisor cards, blog previews). (§1)
3. **Fix Emil's bio** — add Rutgers PhD + 250 evaluations + emilbinny.com link, reconcile CFA. (§3)
4. **Remove Harvard/Wharton network claim + "Top 10" stat.** (§4)
5. **Strip superlatives.** (§2)
6. **Drop in the 6 blog posts + update blog index + sitemap.** (§5, §8)
7. **Pricing decision on services page.** (§6)
8. **SEO housekeeping + Search Console.** (§8)
