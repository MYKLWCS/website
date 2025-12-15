# Dollar Loans — Ultimate Build Specification
## Premium Texas CAB Vehicle Title Access Experience (Totality LMS Edition)

> **Version:** 2.1 - LMS EDITION (User-Facing + Informational)
> **Last Updated:** December 2025
> **Build Status:** World-Class UI/UX Spec (Scaffold + Content System)
> **Primary Use:** Totality LMS user-facing informational experience (not a live lending operation)

---

## 🎯 Executive Summary

Build a **premium, high-trust, education-first fintech experience** for Dollar Loans that explains **vehicle equity access facilitated by a Texas Credit Access Business (CAB)**. This LMS edition is designed to look and feel like a Fortune 500 fintech while remaining **CAB-accurate** and **non-deceptive**.

### Mission Statement
**"Making vehicle equity access simple, transparent, and premium - serving creditworthy customers who deserve better."**

### Core Requirements
- ✅ **Industry-Leading Design** - Surpassing every competitor by 10x
- ✅ **Massive Trust Signals** - Big-company credibility at every touchpoint
- ✅ **Education-First UX** - Clear steps, clear categories, clear disclaimers
- ✅ **Interactive Demos** - Wizard, calculators, and portal screens (informational scaffolds)
- ✅ **Texas CAB Accurate** - CAB-first language and disclosure-forward content

### Brand Promise
**🏆 Premium • 🚀 Innovation-First • 💎 Elite Service • 🔒 Bank-Grade Security • ⚡ Instant Decisions • 🎯 Transparent Pricing**

> LMS scope note:
> - This build is **user-facing and informational** (Totality LMS). Any “application”, “estimate”, “offer”, “payment”, or “e-sign” is a **simulation/scaffold** unless explicitly integrated with real providers and reviewed for compliance.
> - Do **not** collect sensitive personal data in this edition (SSN, bank account, etc.). Use placeholders and clearly label them.

### Competitive Positioning

**We are NOT:**
- ❌ A payday loan operation
- ❌ A predatory lender
- ❌ A small local business
- ❌ A desperate cash option

**We ARE:**
- ✅ A premium financial services company
- ✅ A technology-first access-to-credit facilitation experience (Texas CAB)
- ✅ A trusted partner for transparent education and safe UX
- ✅ The aspirational choice in vehicle equity access clarity
- ✅ A national brand with Texas roots

---

## 📋 Table of Contents

0. [Totality LMS Context](#totality-lms-context)
1. [Business Model & Compliance](#business-model--compliance)
2. [Premium Marketing Strategy](#premium-marketing-strategy)
3. [Brand Identity & Elite Design System](#brand-identity--elite-design-system)
4. [Technical Architecture](#technical-architecture)
5. [Complete Sitemap (60+ Pages)](#complete-sitemap)
6. [Feature Specifications](#feature-specifications)
7. [Advanced Features & Innovation](#advanced-features--innovation)
8. [Trust & Credibility Systems](#trust--credibility-systems)
9. [Data Models](#data-models)
10. [Implementation Phases](#implementation-phases)
11. [Build Instructions](#build-instructions)

---

## 🎓 Totality LMS Context

This spec is intended for a **Totality LMS-delivered, user-facing informational experience**.

### Scope (LMS Edition)
- **No real transactions**: no live underwriting, funding, ACH/card processing, or e-sign execution in this edition.
- **No sensitive PII collection**: do not request SSN, bank account numbers, or upload real IDs. Use placeholders and clearly label “demo only”.
- **Education-first UX**: users should understand roles, categories, and next steps without being pressured or misled.

### LMS Integration Notes (High-Level)
- **Auth**: Prefer LMS SSO. If a login/signup UI exists, label it as a portal demo unless integrated with real auth.
- **Tracking**: Mirror the analytics event map as LMS-compatible events (xAPI/SCORM/LMS-native), with privacy-safe properties.
- **Content governance**: Every “estimate” and “example” must include non-guarantee language and a CAB disclosure link.

---

## 🏛️ Business Model & Compliance

### Texas CAB Model (Non‑Negotiable)

**Dollar Loans operates as a Texas Credit Access Business (CAB).**

#### CAB‑First Terminology Rules (Use Everywhere)

**Global override:** If any legacy sections below use “loan”, “lender”, “borrower”, “approval”, or “funding” language, treat it as **deprecated** for the LMS edition and translate it to CAB-first equivalents (e.g., “agreement”, “creditor may extend credit if approved”, “estimate range”, “status tracker”).

**Preferred (UI + copy):**
- “CAB vehicle title access‑to‑credit”
- “CAB title access services”
- “vehicle equity access”
- “credit arrangement facilitated by a Texas Credit Access Business (CAB)”
- Product label: **“CAB Title Access Agreement”**
- Portal label: **“Agreements”** (not “Loans”)
- Primary CTA: **“Get Cash”**

**Avoid (in user-facing LMS content):**
- “We lend”, “we are the lender”, “title lender”, “loan approval”, “guaranteed approval”
- Unqualified claims like “lowest rates”, “instant decisions”, “cash in hours”

**Allowed only in clearly-labeled educational context (optional):**
- “Vehicle title loan” / “title loan” as a common consumer term, paired immediately with CAB clarification (e.g., “commonly called a title loan; facilitated via Texas CAB rules”).

#### Marketing Language Strategy

This LMS edition is **informational**. Marketing language must be **CAB-accurate** and **non-deceptive**.

**✅ Primary user-facing language (recommended):**
- “Get an estimate range” / “Check your estimate”
- “Start your Get Cash flow (demo)”
- “Review cost categories (examples)”
- “Read CAB disclosures”
- “Facilitated access to credit under Texas CAB rules”

**⚖️ COMPLIANCE LANGUAGE (Legal Pages & Disclosures):**
- "Credit Access Business (CAB)"
- "CAB license #XXXXX"
- "Facilitated by a Texas-licensed CAB"
- Include CAB disclosures on legal pages
- Footer disclaimer: "Dollar Loans is a licensed Credit Access Business (CAB) in Texas"

**❌ AVOID:**
- "Guaranteed approval" (use “Approval not guaranteed”)
- "Lowest rates guaranteed" (use “Competitive options may be available”)
- Predatory or desperate-sounding language
- Anything that looks cheap or unprofessional

#### Compliance Strategy

**The Approach:**
1. **Marketing Pages** - CAB-first, education-first, high-trust
2. **Wizard** - Premium interactive demo with autosave + disclaimers
3. **Legal/Disclosure Pages** - Full CAB compliance
4. **Footer & Fine Print** - CAB license displayed prominently

**Key Principle:** Premium brand execution without misleading users about roles. CAB clarity is part of the trust strategy.

#### Required Compliance Elements

1. **Disclaimers (in footer/legal pages):**
   - "Licensed as a Credit Access Business under Texas Finance Code Chapter 393"
   - CAB License Number displayed
   - "Approval and terms are not guaranteed"
   - Category-based fee and charge disclosures (final text by counsel)

2. **Transparent Cost Structure:**
   - Clear breakdown of all fees
   - Total cost of credit displayed
   - Payment schedule details
   - Early payoff options

3. **Consumer Protection:**
   - Privacy policy (CCPA compliant)
   - Terms of service
   - Complaint resolution process
   - Contact information for Texas OCCC

---

## 🎯 Premium Marketing Strategy

> LMS edition override:
> - Treat the remainder of this section as **tone/visual guidance** only.
> - Do not add lender-implication claims (“we approve”, “we fund”, “we lend”) to user-facing pages in this edition.
> - Use CAB-first terminology everywhere; if you mention “title loan” as a common term, pair it with CAB clarification.

### Target Customer Profile

**PRIMARY AUDIENCE: "Premium Pragmatists"**
- Age: 28-55
- Credit Score: 600-750
- Income: $40k-$80k annually
- Vehicle Value: $10k-$40k
- Employment: Stable, full-time
- Need: Short-term liquidity, not desperation cash

**Psychographics:**
- Values transparency and professionalism
- Digitally savvy, expects modern UX
- Comparison shops before deciding
- Wants to feel smart about borrowing decisions
- Appreciates premium service

**Pain Points We Solve:**
- Traditional banks rejected them
- Payday loans feel predatory
- Other title loan sites look sketchy
- Want fast cash without judgment
- Need flexibility and respect

### Brand Positioning Strategy

**Positioning Statement:**
"Dollar Loans is the premium vehicle title loan provider for creditworthy Texans who need fast, flexible funding. We combine bank-level security with fintech speed, transparent pricing with exceptional service."

**Competitive Differentiation:**

| Competitor Type | Their Position | Our Advantage |
|-----------------|----------------|---------------|
| Traditional Banks | "Prime credit only" | "We approve good credit, not just perfect credit" |
| Payday Lenders | "Fast cash, anyone" | "Premium loans for qualified borrowers" |
| Other Title Lenders | "Cheap websites, high fees" | "Premium platform, competitive rates" |
| Online Lenders | "Hidden fees, confusing terms" | "Total transparency, no surprises" |

### Marketing Messaging Framework

#### Value Propositions (Rank Ordered)

1. **Speed** - "Cash in hours, not days"
2. **Trust** - "Licensed, secure, and transparent"
3. **Simplicity** - "Apply in 10 minutes from your phone"
4. **Fairness** - "Competitive rates for qualified borrowers"
5. **Flexibility** - "No prepayment penalties, pay off anytime"

#### Headline Formulas

**Homepage Hero Options:**
1. "The Premium Way to Borrow Against Your Vehicle"
2. "Vehicle Title Loans Done Right"
3. "Fast, Fair, and Transparent Title Loans"
4. "Access Your Vehicle's Equity with Confidence"
5. "Modern Lending. Competitive Rates. Texas Licensed."

**Supporting Headlines:**
- "Join 10,000+ Satisfied Borrowers" (social proof)
- "Most Applications Approved in Under 1 Hour"
- "100% Online Application - Keep Your Car"
- "Borrow $2,500 - $25,000 Against Your Vehicle"

### Trust-Building Elements (Must Include Everywhere)

#### Trust Badges
- ✅ Texas CAB Licensed (with license #)
- ✅ 256-bit SSL Encryption
- ✅ BBB Accredited (if applicable)
- ✅ Google Reviews 4.8/5 stars
- ✅ "Featured in:" Forbes, Bloomberg, WSJ (if true)
- ✅ Norton Secured
- ✅ McAfee Secure
- ✅ "Trusted by 10,000+ Texans"

#### Social Proof Strategies
1. **Customer Count:** "Over 10,000 loans funded"
2. **Dollar Amount:** "$50M+ in loans funded since 2020"
3. **Speed Stat:** "Average approval time: 47 minutes"
4. **Satisfaction:** "98% customer satisfaction rate"
5. **Video Testimonials:** 5-10 real customer stories
6. **Case Studies:** "How Sarah Used Her Equity to..."

#### Professional Signals
- Corporate headquarters address (physical location)
- Leadership team page with photos & bios
- "In the news" press mentions
- Industry awards and certifications
- Community involvement/charity work
- Partner logos (if applicable)

### Conversion Optimization Strategy

#### Above-the-Fold Priority
```
[Hero Image: Professional person with modern car]
Headline: "The Premium Way to Borrow Against Your Vehicle"
Subheadline: "Fast, transparent, and secure title loans for qualified Texans"

[Pre-Qualify Form - 3 Fields]
- Vehicle Year/Make/Model
- Vehicle Mileage
- Desired Loan Amount

[CTA Button: "Check My Rate in 60 Seconds →"]

[Trust Bar]
🔒 Bank-Level Security | ⭐ 4.8/5 Stars | 🏆 10,000+ Happy Customers | 📝 Texas Licensed
```

#### Call-to-Action (CTA) Hierarchy

**Primary CTAs (Green/Blue, Prominent):**
- "Check My Rate"
- "Get Pre-Approved Now"
- "Start Application"
- "Calculate My Loan"

**Secondary CTAs (Outline/Ghost):**
- "See How It Works"
- "Compare Our Rates"
- "Read Reviews"
- "Contact Us"

**Micro-CTAs (Text Links):**
- "Learn about CAB licensing"
- "View sample loan terms"
- "Read our privacy policy"

#### A/B Testing Plan (Built Into Design)

Test these elements:
- Hero headlines (5 variations)
- CTA button color (green vs blue vs orange)
- CTA button text (10+ variations)
- Form fields (3-field vs 5-field)
- Trust badges (order and prominence)
- Testimonial placement
- Calculator widget vs form widget
- Video autoplay vs static image

### SEO & Content Strategy

#### Primary Keywords (Texas-Focused)
- "vehicle title loans texas"
- "car title loans texas"
- "auto title loans houston/dallas/austin/san antonio"
- "title loan near me"
- "online title loans texas"
- "best title loan companies texas"

#### Content Hub Topics
1. **Educational:**
   - "How Do Title Loans Work in Texas?"
   - "Title Loan Requirements in Texas"
   - "Understanding CAB Licensing"

2. **Comparison:**
   - "Title Loans vs Personal Loans"
   - "Title Loans vs Payday Loans"
   - "How to Choose a Title Loan Provider"

3. **Location Pages:**
   - "Title Loans in Houston"
   - "Title Loans in Dallas"
   - "Title Loans in Austin"
   - (One for each major TX city)

4. **Use Cases:**
   - "Emergency Medical Expenses"
   - "Home Repairs"
   - "Debt Consolidation"
   - "Business Cash Flow"

#### Content Quality Standards
- Minimum 1,500 words per article
- Original, well-researched content
- Author bylines with credentials
- Cited sources and statistics
- Readable (8th grade reading level)
- Mobile-optimized
- Featured images and infographics

### Paid Advertising Strategy (Future)

#### Google Ads
- Search campaigns for high-intent keywords
- Display remarketing to site visitors
- YouTube pre-roll for brand awareness

#### Social Media Ads
- Facebook/Instagram: Lookalike audiences
- LinkedIn: Professional targeting
- TikTok: Younger demographic (25-35)

#### Ad Creative Themes
1. "Speed & Simplicity" - Show fast approval
2. "Trust & Security" - Emphasize licensing
3. "Customer Success" - Testimonial-based
4. "Comparison" - "Better than banks/payday"

---

## 🎨 Brand Identity & Elite Design System

### Visual Direction

**Design Target:** Cross between a top neobank (Chime, Varo) and premium automotive brand (Tesla, Rivian)

#### Core Brand Traits
- 🔒 **Secure** - Bank-grade security messaging
- 🏆 **High-Integrity** - Transparent and honest
- ⚡ **Fast** - Quick approvals and funding
- 💎 **Premium** - Polished and professional
- 📊 **Predictable** - Clear expectations
- 🤝 **Human + Helpful** - Supportive and accessible

### UI Principles

1. **Bold Whitespace** - Breathable layouts
2. **High Contrast Typography** - Clear hierarchy
3. **Confident Minimalism** - No clutter
4. **Controlled Futuristic Accents** - Modern but not gimmicky
5. **Subtle Motion** - Only when it adds meaning

### Color Palette - Premium Financial Brand

```css
/* Primary Brand Colors - Deep, Trustworthy Blues */
--primary-50: #eff6ff;       /* Light blue tint for backgrounds */
--primary-100: #dbeafe;      /* Subtle highlights */
--primary-200: #bfdbfe;      /* Hover states */
--primary-300: #93c5fd;      /* Borders */
--primary-400: #60a5fa;      /* Secondary actions */
--primary-500: #3b82f6;      /* Main brand blue */
--primary-600: #2563eb;      /* Primary CTAs */
--primary-700: #1d4ed8;      /* Hover/active states */
--primary-800: #1e40af;      /* Dark mode blue */
--primary-900: #1e3a8a;      /* Headers, deep accents */

/* Success/Action Green - For CTAs & Positive Actions */
--success-50: #ecfdf5;
--success-500: #10b981;      /* Primary CTA alternative */
--success-600: #059669;      /* CTA hover */
--success-700: #047857;      /* CTA active */

/* Premium Gold Accent - For VIP/Premium Features */
--gold-400: #fbbf24;         /* Highlight color */
--gold-500: #f59e0b;         /* Premium badges */
--gold-600: #d97706;         /* Premium hover */

/* Neutral Scale - Clean, Modern Grays */
--gray-50: #f9fafb;          /* Background */
--gray-100: #f3f4f6;         /* Cards, panels */
--gray-200: #e5e7eb;         /* Borders */
--gray-300: #d1d5db;         /* Disabled states */
--gray-400: #9ca3af;         /* Placeholders */
--gray-500: #6b7280;         /* Secondary text */
--gray-600: #4b5563;         /* Body text */
--gray-700: #374151;         /* Dark text */
--gray-800: #1f2937;         /* Headers */
--gray-900: #111827;         /* Primary text */

/* Semantic Colors */
--success: #10b981;          /* Success messages */
--warning: #f59e0b;          /* Warnings */
--error: #ef4444;            /* Errors */
--info: #3b82f6;             /* Info messages */

/* Gradient Overlays - For Premium Feel */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-success: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-premium: linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%);
--gradient-trust: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);

/* Box Shadows - Depth & Elevation */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Typography Scale

```css
/* Font Stack */
--font-sans: 'Inter', -apple-system, system-ui, sans-serif;
--font-display: 'Cal Sans', 'Inter', sans-serif;

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Component Library Requirements

Build these reusable components:

#### Buttons
- Primary CTA (solid, gradient hover)
- Secondary (outline)
- Tertiary (ghost)
- Icon buttons
- Loading states

#### Forms
- Text inputs with floating labels
- Select dropdowns (custom styled)
- Radio buttons / Checkboxes
- Sliders (for condition, amount)
- File upload with drag-drop
- Date pickers

#### Feedback
- Toast notifications (top-right)
- Modal dialogs
- Confirmation dialogs
- Progress steppers
- Loading skeletons
- Empty states

#### Data Display
- Vehicle cards
- Application status cards
- Payment schedule tables
- Document list with status tags
- Timeline components
- Stat cards with icons

#### Trust Elements
- Trust badge strips
- Security icons
- Compliance banners
- Testimonial cards
- FAQ accordions

#### Complex Components
- Hero with embedded pre-qualify form
- Multi-step wizard with autosave
- Photo upload with guidance overlays
- E-signature panel
- Payment method selector
- Calendar scheduler

---

## 🎨 Visual Assets & Image Generation Strategy

### Image Generation with Nano Banana

**IMPORTANT:** All imagery must be generated using **Nano Banana** AI image generation tool to ensure consistency, quality, and cost-effectiveness.

### Image Inventory (200+ Images Required)

#### Homepage Images (25 images)

**1. Hero Section (5 variations for A/B testing)**
```
Prompt Template:
"Professional [demographic] standing confidently next to modern [vehicle make/model],
bright natural lighting, contemporary urban setting, premium automotive photography style,
shot on Sony A7IV, shallow depth of field, aspirational lifestyle imagery, 8K resolution"

Specific variations:
- Young professional man, 30s, with Tesla Model 3, Dallas skyline background
- Professional woman, 35, with Honda CR-V, suburban home driveway, warm morning light
- Diverse couple, 40s, with Ford F-150, Texas countryside setting
- Business owner, 45, with luxury SUV, modern office building backdrop
- Graduate, 25, with reliable sedan, college campus area, hopeful expression
```

**2. Trust & Security Images (3 images)**
```
- "Bank vault door closeup, digital lock interface, blue security lighting,
  high-tech financial security concept, 4K"

- "SSL certificate badge, digital encryption visualization, floating data particles,
  cybersecurity theme, dark blue gradient background"

- "Professional hands typing on laptop with security icons overlay,
  modern office desk, secure transaction concept"
```

**3. Process Visualization (3 images)**
```
- "Modern smartphone displaying loan application interface, clean UI mockup,
  hands holding phone, blurred background, product photography"

- "Person receiving approval notification on phone, excited expression,
  confetti celebration feeling, lifestyle photography"

- "Bank transfer confirmation screen, money arriving concept,
  clean fintech app UI design"
```

**4. Customer Lifestyle Images (10 images showing diverse use cases)**
```
Use cases:
- Home repair emergency (couple looking at damaged ceiling)
- Medical bills (person in pharmacy, relieved expression)
- Car repair (mechanic and customer shaking hands)
- Family vacation planning (family looking at travel brochures)
- Small business owner (person in shop with inventory)
- Education expenses (student with books/laptop)
- Wedding planning (couple reviewing plans)
- Moving expenses (family in new empty home)
- Holiday shopping (person with shopping bags, happy)
- Pet emergency (person at vet with dog)

Style: Warm, authentic, diverse demographics, professional photography
```

**5. Vehicle Images (4 images)**
```
- "Pristine 2020 Honda Civic, 3/4 front view, professional car photography,
  showroom lighting, white background"

- "Ford F-150 pickup truck, side profile, Texas ranch setting,
  golden hour lighting, automotive magazine quality"

- "Toyota Camry sedan, modern color, urban setting, clean professional shot"

- "Luxury SUV collection (BMW, Mercedes, Lexus), high-end automotive display"
```

#### Marketing Pages Images (40 images)

**How It Works Page (6 images)**
```
Step visualizations:
- "Person happily filling form on laptop, bright office, natural lighting"
- "Smartphone notification showing instant approval, close-up hands"
- "Bank account interface showing funds deposit, clean fintech UI"
- "Customer signing digital document on tablet, e-signature concept"
- "Happy customer driving car, money in hand visual metaphor"
- "Customer service representative smiling with headset, modern call center"
```

**Rates & Fees Page (4 infographic images)**
```
- "Cost breakdown pie chart visualization, professional financial graphic,
  clean design, blue and green color scheme"

- "Payment schedule timeline infographic, months displayed horizontally,
  clean modern design, easy to understand"

- "APR comparison bar chart, Dollar Loans vs competitors, visual data display"

- "Total cost calculator visualization, interactive UI mockup"
```

**Calculator Page (3 images)**
```
- "Interactive calculator interface mockup, sliders and inputs,
  modern fintech app design"

- "Vehicle value assessment visualization, KBB-style interface"

- "Loan estimate results display, clean numbers presentation"
```

**Eligibility Page (5 images)**
```
- "Texas resident holding ID with Texas flag background, citizenship concept"
- "Clear vehicle title document closeup, official paperwork"
- "Paystub or income verification document, professional layout"
- "Valid driver's license closeup, identification verification"
- "Vehicle inspection checklist visual, quality assessment"
```

**Reviews/Testimonials Page (12 customer portraits)**
```
Prompt template:
"Professional headshot portrait, [demographic], genuine smile, solid color
background, studio lighting, high resolution, approachable expression,
business casual attire"

Demographics to cover:
- Hispanic male, 35, construction worker
- African American female, 42, nurse
- White male, 50, small business owner
- Asian female, 28, teacher
- Mixed race couple, 30s, young professionals
- White female, 45, single mom
- Hispanic female, 38, retail manager
- African American male, 32, IT professional
- White male, 60, retiree
- Asian male, 40, restaurant owner
- Hispanic couple, late 40s, homeowners
- White female, 33, freelancer
```

**About Us Page (10 team photos)**
```
Executive team (placeholder, will use nano banana):
- "Professional executive headshot, CEO, 50s male, confident expression,
  navy suit, office background, Fortune 500 style"

- "CFO female executive portrait, 45, professional attire, financial expertise look"

- "CTO male, 40, tech-forward appearance, casual business attire"

- "VP of Operations, diverse female, 38, professional and warm"

- "Head of Customer Success, male 35, friendly approachable look"

Office photos:
- "Modern fintech office interior, open floor plan, employees collaborating"
- "Company team meeting, diverse group, professional environment"
- "Customer service team at workstations, modern call center"
- "Office exterior, Dallas skyscraper, corporate headquarters"
- "Team celebration photo, company milestone, group shot"
```

#### Dashboard Images (30 images)

**Dashboard Widgets (10 images)**
```
- "Loan approval celebration illustration, confetti and check mark,
  success state visual"

- "Payment schedule calendar interface, clean UI design"

- "Vehicle valuation graph, increasing trend line, financial chart"

- "Document upload success state, green checkmark, completed task"

- "Profile completion progress bar, 85% complete visual"

- "Payment reminder notification, friendly alert design"

- "Referral reward badge, gold star achievement visual"

- "Credit score improvement graph, upward trend visualization"

- "Early payoff calculator interface, savings highlighted"

- "Customer support chat interface mockup, conversation UI"
```

**Empty States (8 images)**
```
- "No vehicles added yet, illustration of car with plus sign,
  friendly empty state design"

- "No documents uploaded, folder with upload icon, helpful empty state"

- "No payments yet, calendar with dollar sign, clean illustration"

- "No active loans, clean slate concept, minimalist illustration"

- "No referrals yet, people connected icon, invitation concept"

- "No messages, empty inbox, peaceful zen illustration"

- "No notifications, bell with zzz, quiet state visual"

- "Profile incomplete, person silhouette with missing pieces, progress prompt"
```

**Success States (6 images)**
```
- "Application submitted successfully, rocket launch illustration, excitement"
- "Payment processed, green checkmark with confetti, success celebration"
- "Document approved, stamp of approval visual, official look"
- "Loan funded, money transferred illustration, completion state"
- "Profile updated, save icon with checkmark, confirmation"
- "Referral successful, high-five illustration, achievement"
```

**Vehicle Photos (6 reference images)**
```
- "Vehicle front view template, alignment guide overlay, photo guidance"
- "Vehicle rear view template, license plate centered, instruction overlay"
- "Vehicle side view template, full profile visible, guidance lines"
- "Odometer close up, clear numbers, alignment guide"
- "VIN plate close up, legible text, capture guide overlay"
- "Title document flat lay, corners visible, photo requirements shown"
```

#### Infographics & Diagrams (60 images)

**Process Flow Diagrams (8 infographics)**
```
1. "Loan application flow diagram, step-by-step process visualization,
   clean arrows and icons, modern infographic style, blue theme"

2. "Document verification workflow, checklist visualization,
   approval process diagram, professional design"

3. "Funding timeline infographic, from application to bank deposit,
   time estimates shown, progress visualization"

4. "Payment schedule visualization, monthly payments over time,
   bar chart style, financial infographic"

5. "Credit decision process, flowchart style, decision tree visualization"

6. "Vehicle valuation factors diagram, mind map style, interconnected elements"

7. "Customer journey map, touchpoints visualization, experience timeline"

8. "Referral program flow, network effect visualization, growth diagram"
```

**Comparison Charts (6 infographics)**
```
- "Dollar Loans vs traditional banks, comparison table, visual data presentation"
- "Title loans vs payday loans, side-by-side comparison chart"
- "Fee structure breakdown, pie chart with labeled segments"
- "APR ranges comparison, bar chart visualization, competitor analysis"
- "Approval speed comparison, racing visualization, speed concept"
- "Customer satisfaction ratings, star ratings comparison, review scores"
```

**Educational Infographics (10 images)**
```
- "How CAB licensing works, regulatory diagram, educational visual"
- "Understanding APR, calculation visualization, financial literacy"
- "Vehicle equity explained, Venn diagram style, concept illustration"
- "Credit score factors, weighted pie chart, credit education"
- "Payment options comparison, grid layout, method differences"
- "Early payoff savings calculator, before/after comparison"
- "Loan terms glossary, visual dictionary, key terms illustrated"
- "Texas lending regulations, compliance flowchart"
- "Document checklist infographic, verification requirements"
- "Financial wellness tips, illustrated list, best practices"
```

**Statistical Visualizations (8 infographics)**
```
- "Customer satisfaction stats, 98% approval rating, visual metric display"
- "Average approval time, clock visualization, 47 minutes highlighted"
- "Total loans funded, counter style, $50M+ displayed dramatically"
- "Customer growth chart, exponential curve, year-over-year comparison"
- "Geographic coverage map, Texas highlighted, cities marked"
- "Vehicle types accepted, pie chart of makes/models, distribution"
- "Loan amount ranges, histogram visualization, popular amounts shown"
- "Repayment success rate, progress circle, 94% on-time payment rate"
```

**Icon Sets & Illustrations (28 custom icons)**
```
Create consistent icon set for:
- Trust badges (10 icons): Lock, Shield, Certificate, Checkmark, Star,
  Trophy, Badge, Ribbon, Seal, Award

- Process steps (8 icons): Application form, Magnifying glass, Checkmark,
  Document, Signature, Bank, Calendar, Trophy

- Features (10 icons): Speed/Lightning, Security/Lock, Transparency/Eye,
  Money/Dollar, Car, Phone, Chat, Star, Graph up, Handshake

Style: Line icons, 2px stroke, rounded ends, blue primary color
```

#### Marketing Assets (20 images)

**Social Media Templates (8 images)**
```
- "Instagram post template, Dollar Loans branded, customer testimonial layout"
- "Facebook cover image, hero shot with logo and tagline"
- "LinkedIn company banner, professional corporate imagery"
- "Twitter header, brand identity and value props"
- "YouTube thumbnail template, video content branding"
- "Pinterest pin template, infographic style, shareable content"
- "TikTok video frame template, mobile-first design"
- "Stories template, vertical format, swipe up design"
```

**Email Templates (6 images)**
```
- "Welcome email header, branded banner, friendly greeting"
- "Approval notification email hero, celebration visual"
- "Payment reminder email graphic, calendar concept"
- "Referral program email banner, sharing incentive visual"
- "Newsletter header, monthly updates branding"
- "Re-engagement email hero, comeback offer visual"
```

**Advertising Banners (6 sizes)**
```
Create for display ads:
- Leaderboard (728x90)
- Medium Rectangle (300x250)
- Wide Skyscraper (160x600)
- Mobile Banner (320x50)
- Large Mobile Banner (320x100)
- Half Page (300x600)

Content: "Get Cash Fast with Dollar Loans" + CTA button + car visual
```

### Nano Banana Generation Workflow

**Step-by-Step Process:**

1. **Batch Generation Strategy**
   - Generate 20-30 images per session
   - Maintain consistent style parameters
   - Use variation seeds for related images
   - Quality check each batch before proceeding

2. **Consistency Parameters**
```
Global Style Settings:
--style professional fintech
--quality high
--aspect-ratio varies by use case
--color-palette blues, greens, neutrals
--mood trustworthy, aspirational, modern
--exclude cluttered, cartoonish, unprofessional
```

3. **Image Organization**
```
/public/images/
├── heroes/
│   ├── hero-1-professional-car.png
│   ├── hero-2-family-suv.png
│   └── hero-3-business-truck.png
├── marketing/
│   ├── trust/
│   ├── process/
│   └── lifestyle/
├── testimonials/
│   ├── customer-1.png
│   └── customer-2.png
├── dashboard/
│   ├── widgets/
│   ├── empty-states/
│   └── success-states/
├── infographics/
│   ├── process-flows/
│   ├── comparisons/
│   └── education/
├── icons/
│   └── trust-badges/
└── vehicles/
    └── reference-photos/
```

4. **Quality Standards**
   - Minimum resolution: 1920x1080 for heroes
   - Web-optimized format: WebP with PNG fallback
   - File size target: < 300KB per image
   - Consistent lighting and color grading
   - No watermarks or artifacts

5. **Alt Text Requirements**
Every image must have descriptive alt text:
```html
<img
  src="/images/heroes/professional-car.webp"
  alt="Professional woman standing confidently next to her Honda CR-V,
       symbolizing financial empowerment through Dollar Loans vehicle title loans"
  loading="lazy"
  width="1920"
  height="1080"
/>
```

### Animation & Motion Design

**Framer Motion Animations to Implement:**

1. **Page Transitions**
```javascript
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}
```

2. **Hero Entrance**
```javascript
- Headline fades up with stagger
- CTA button scales in with bounce
- Trust badges slide in from bottom
- Background image subtle parallax
```

3. **Card Hover Effects**
```javascript
- Lift: translateY(-4px)
- Shadow increase: shadow-md → shadow-xl
- Border glow animation
- Icon color change
- Duration: 200ms ease-out
```

4. **Number Count-Up Animations**
```javascript
- Stats counter animates from 0 to target
- Easing: ease-out
- Duration: 2000ms
- Trigger: IntersectionObserver on scroll
```

5. **Loading States**
```javascript
- Skeleton screens (shimmer effect)
- Spinner with brand colors
- Progress bars with smooth transitions
- Button loading states (spinner inside button)
```

6. **Micro-interactions**
```javascript
- Button press: scale(0.98)
- Input focus: border glow + scale(1.02)
- Checkbox check: checkmark draws in
- Toggle switch: smooth slide with spring
- Dropdown: fade + slide down
- Tooltip: fade + scale from anchor
```

7. **Scroll Animations**
```javascript
- Fade up on scroll (sections)
- Stagger children (feature cards)
- Parallax background layers
- Progress bar on scroll
- Sticky header shrink
```

### Responsive Image Strategy

**Use Next.js Image Optimization:**

```javascript
import Image from 'next/image'

<Image
  src="/images/heroes/professional-car.webp"
  alt="Professional car photo"
  width={1920}
  height={1080}
  priority={true} // for above-fold images
  placeholder="blur"
  blurDataURL={blurhash}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Breakpoints for Responsive Images:**
- Mobile: 640px width
- Tablet: 1024px width
- Desktop: 1920px width
- 4K: 3840px width (optional)

---

## 🏗️ Technical Architecture

### Stack Requirements

#### Frontend
```json
{
  "framework": "Next.js 14+ (App Router)",
  "language": "TypeScript 5+",
  "styling": "Tailwind CSS 3+",
  "state": "Zustand or React Query",
  "forms": "React Hook Form + Zod validation",
  "animations": "Framer Motion",
  "icons": "Lucide React"
}
```

#### Backend
```json
{
  "api": "Next.js API Routes",
  "auth": "NextAuth.js or Supabase Auth",
  "database": "PostgreSQL (Supabase/Neon)",
  "storage": "S3-compatible (Supabase Storage)",
  "email": "Resend or SendGrid"
}
```

#### Dev Tools
```json
{
  "linting": "ESLint + Prettier",
  "testing": "Vitest + React Testing Library",
  "e2e": "Playwright",
  "api-testing": "Postman collections"
}
```

### Project Structure

```
dollar-loans/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public marketing pages
│   │   ├── page.tsx              # Home
│   │   ├── how-it-works/
│   │   ├── cab-model-explained/
│   │   ├── rates-fees/
│   │   ├── calculator/
│   │   ├── eligibility/
│   │   ├── vehicle-value/
│   │   ├── faq/
│   │   ├── reviews/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── blog/
│   │   ├── locations/
│   │   ├── careers/
│   │   ├── press/
│   │   ├── security-trust/
│   │   ├── partners/
│   │   └── developers/
│   ├── (auth)/                   # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   └── mfa/
│   ├── (protected)/              # Protected dashboard
│   │   └── dashboard/
│   │       ├── page.tsx          # Dashboard home
│   │       ├── get-cash/         # Loan wizard
│   │       ├── vehicles/
│   │       ├── applications/
│   │       ├── agreements/
│   │       ├── payments/
│   │       ├── documents/
│   │       ├── profile/
│   │       ├── settings/
│   │       ├── support/
│   │       └── referrals/
│   ├── (admin)/                  # Admin panel
│   │   └── admin/
│   │       ├── applications/
│   │       ├── customers/
│   │       ├── vehicles/
│   │       ├── offers/
│   │       ├── doc-review/
│   │       ├── payments/
│   │       ├── rules/
│   │       └── audit/
│   ├── legal/                    # Legal pages
│   │   ├── terms/
│   │   ├── privacy/
│   │   ├── cab-disclosures/
│   │   ├── texas-disclosures/
│   │   ├── cookies/
│   │   └── complaints/
│   ├── api/                      # API routes
│   │   ├── auth/
│   │   ├── applications/
│   │   ├── vehicles/
│   │   ├── payments/
│   │   ├── documents/
│   │   └── partner/
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # Base UI components
│   ├── forms/                    # Form components
│   ├── layouts/                  # Layout components
│   ├── marketing/                # Marketing sections
│   ├── dashboard/                # Dashboard widgets
│   └── admin/                    # Admin components
├── lib/
│   ├── db/                       # Database utilities
│   ├── auth/                     # Auth utilities
│   ├── validations/              # Zod schemas
│   ├── utils/                    # Helper functions
│   └── constants.ts              # App constants
├── types/
│   └── index.ts                  # TypeScript types
├── hooks/                        # Custom React hooks
├── public/
│   ├── images/
│   └── icons/
└── prisma/
    ├── schema.prisma
    └── seed.ts
```

### Performance Targets

- ⚡ **Lighthouse Score:** 90+ on all metrics
- 🎯 **Core Web Vitals:** All green
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- 🔄 **API Response:** < 200ms average
- 📦 **Bundle Size:** < 200KB initial JS

---

## 🗺️ Complete Sitemap

### Public Marketing Pages (19 pages)

| Route | Purpose | Key Features |
|-------|---------|--------------|
| `/` | Home | Hero + Pre-qualify form, 3-step process, trust badges |
| `/how-it-works` | Process explanation | Step-by-step flow diagram, timeline |
| `/cab-model-explained` | Trust + compliance | CAB explanation, fee taxonomy, consumer rights |
| `/rates-fees` | Cost transparency | Fee breakdown, example scenarios, payment calculator |
| `/calculator` | Loan calculator | Vehicle value estimate, payment scenarios |
| `/eligibility` | Requirements | Checklist UI, pre-check widget |
| `/vehicle-value` | Value explainer | Factors affecting value, valuation process |
| `/faq` | Common questions | Categorized accordion, search |
| `/reviews` | Social proof | Customer testimonials, ratings |
| `/about` | Company info | Mission, team, company story |
| `/contact` | Contact forms | Multiple contact methods, office locations |
| `/blog` | Content hub | Blog posts, resources, guides |
| `/locations` | Office locations | Map, addresses, hours |
| `/careers` | Job listings | Open positions, company culture |
| `/press` | Media kit | Press releases, brand assets |
| `/security-trust` | Security info | Encryption, data handling, compliance |
| `/partners` | Partner overview | Partnership opportunities, benefits |
| `/partners/affiliate-program` | Affiliate details | Program tiers, tracking, payouts |
| `/developers` | API docs | API overview, authentication, endpoints |

### Legal & Compliance Pages (6 pages)

| Route | Purpose |
|-------|---------|
| `/legal/terms` | Terms of service |
| `/legal/privacy` | Privacy policy |
| `/legal/cab-disclosures` | CAB-specific disclosures |
| `/legal/texas-disclosures` | Texas state disclosures |
| `/legal/cookies` | Cookie policy |
| `/legal/complaints` | Complaint process |

### Authentication Pages (4 pages)

| Route | Purpose |
|-------|---------|
| `/auth/login` | User login |
| `/auth/signup` | New user registration |
| `/auth/forgot-password` | Password reset |
| `/auth/mfa` | Multi-factor auth (optional) |

### Customer Dashboard (11 pages)

| Route | Purpose | Key Features |
|-------|---------|--------------|
| `/dashboard` | Dashboard home | Overview widgets, quick actions |
| `/dashboard/get-cash` | Loan wizard | 12-step application flow |
| `/dashboard/vehicles` | Vehicle management | Add/edit vehicles, photos, valuations |
| `/dashboard/applications` | Application tracking | Status list, resume functionality |
| `/dashboard/agreements` | Active loans | Payment schedules, contract downloads |
| `/dashboard/payments` | Payment center | Pay now, schedule, autopay, history |
| `/dashboard/documents` | Document vault | Upload, view, download documents |
| `/dashboard/profile` | User profile | Personal info, employment, income |
| `/dashboard/settings` | Account settings | Security, notifications, preferences |
| `/dashboard/support` | Help center | Tickets, chat, knowledge base |
| `/dashboard/referrals` | Referral program | Unique links, rewards tracking |

### Admin Panel (8 pages)

| Route | Purpose |
|-------|---------|
| `/admin/applications` | Application management |
| `/admin/customers` | Customer database |
| `/admin/vehicles` | Vehicle inventory |
| `/admin/offers` | Offer management |
| `/admin/doc-review` | Document review queue |
| `/admin/payments` | Payment processing |
| `/admin/rules` | Underwriting rules config |
| `/admin/audit` | Audit logs |

**Total Pages: 48**

---

## 📱 Feature Specifications

### 1. Homepage - Conversion Optimized

#### Above-the-Fold Stack
```
┌─────────────────────────────────────┐
│  [Logo]        Nav Links    [Login] │ ← Sticky header
├─────────────────────────────────────┤
│                                     │
│     "Get Cash Using Your            │
│      Vehicle's Equity"              │ ← Hero headline
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Pre-Qualify Micro Wizard     │ │ ← Embedded form
│  │  • Vehicle Year/Make/Model    │ │
│  │  • Mileage                    │ │
│  │  • Desired Amount             │ │
│  │  [Get Your Estimate →]        │ │
│  └───────────────────────────────┘ │
│                                     │
│  ✓ Bank-level security             │
│  ✓ Texas CAB licensed              │ ← Trust badges
│  ✓ Fast funding                    │
└─────────────────────────────────────┘
```

#### Sections (In Order)
1. **3-Step Process**
   - Card layout with icons
   - "Apply → Get Approved → Get Cash"
   - Animated as user scrolls

2. **Why Dollar Loans**
   - 4-column feature grid
   - Icons + short descriptions
   - Trust, Speed, Transparency, Technology

3. **Vehicle Equity Explainer**
   - Split layout: Text + Infographic
   - "How we calculate your vehicle's value"
   - Interactive diagram

4. **Customer Stories**
   - 3 testimonial cards
   - Photos + quotes + outcomes
   - Star ratings

5. **Calculator Preview**
   - Mini calculator widget
   - CTA: "Try our full calculator"

6. **Compliance-First Transparency Panel**
   - "How CAB works" summary
   - Link to full CAB explanation
   - Fee transparency promise

7. **FAQ Teaser**
   - Top 5 questions
   - Link to full FAQ

#### Header (Sticky)
- Logo (left)
- Navigation: How It Works | Calculator | Eligibility | Contact
- Primary CTA: "Check Your Estimate"
- Secondary CTA: "Login"

#### Footer
```
┌─────────────────────────────────────────────────────┐
│  Dollar Loans Logo                                  │
│  "Vehicle title access-to-credit, the modern way"   │
│                                                     │
│  [Product]        [Company]       [Legal]          │
│  Calculator       About           Terms            │
│  Eligibility      Careers         Privacy          │
│  How It Works     Press           CAB Disclosures  │
│  FAQ              Contact         Complaints       │
│                                                     │
│  [Trust Badges: Licensed CAB | Encrypted | BBB]    │
│  [Social Icons]                                     │
│                                                     │
│  © 2025 Dollar Loans. Licensed Texas CAB.          │
│  All rights reserved.                               │
└─────────────────────────────────────────────────────┘
```

---

### 2. Get Cash Wizard (12-Step Flow)

**This is the core conversion feature. Must be flawless.**

#### Wizard UX Rules
- ✅ **Autosave every step** to localStorage and API
- ✅ **Resume anywhere** via saved progress
- ✅ **Clear progress stepper** showing current step
- ✅ **Contextual tooltips** explaining "why we ask this"
- ✅ **Inline validation** with helpful error messages
- ✅ **Back button** always available
- ✅ **Mobile-first** responsive design

#### Progress Stepper UI
```
[1]━━━[2]━━━[3]━━━[4]━━━[5]━━━[6]━━━[7]━━━[8]━━━[9]━━━[10]━━━[11]━━━[12]
 ✓     ✓     ●     ○     ○     ○     ○     ○     ○      ○      ○      ○
```

### Phase A: Instant Estimate (No login required)

#### Step 1: Goal & Amount
**Fields:**
- How much cash do you need? (Slider: $1,000 - $15,000)
- How soon do you need it? (Radio: Today / This Week / Flexible)

**Validation:**
- Amount between $1,000 and $15,000

**CTA:** Continue →

---

#### Step 2: Vehicle Quick Details
**Fields:**
- VIN or License Plate (auto-lookup if possible)
- Year (dropdown: 2024 down to 2000)
- Make (searchable dropdown)
- Model (dependent on make)
- Mileage (number input)
- Overall Condition (slider: Poor / Fair / Good / Excellent)

**Tooltips:**
- "Find your VIN on the driver's side dashboard"

**Validation:**
- All fields required
- Year 2000 or newer
- Mileage < 300,000

**CTA:** Get My Estimate →

---

#### Step 3: Instant Estimate Range
**Display:**
```
┌─────────────────────────────────┐
│  Your Estimated Range           │
│                                 │
│  $2,500 - $4,200               │ ← Large, bold
│                                 │
│  Based on your:                │
│  • 2018 Honda Civic            │
│  • 67,000 miles                │
│  • Good condition              │
│                                 │
│  ⚠️  Not a guarantee           │
│  Final offer after full review  │
│                                 │
│  [Continue to Secure Offer →]  │
│  [Adjust Vehicle Details]      │
└─────────────────────────────────┘
```

**At this point: Require account creation/login**

---

### Phase B: Full Application (Login Required)

#### Step 4: Vehicle Deep Profile
**Fields:**
- Trim/Package (dropdown or text)
- Detailed condition notes (textarea)
- Title status (Radio: I own it free and clear / I'm paying it off / Other)
- Primary use (Radio: Daily driver / Occasional / Work vehicle)

**Conditional:**
- If "paying it off" → Payoff amount field
- If "Other" → Explain field

**CTA:** Continue →

---

#### Step 5: Vehicle Photo Upload (Guided)
**Required Photos (with visual guides):**

```
┌─────────────────────────────────────────┐
│  Upload Vehicle Photos                  │
│                                         │
│  [📷 Front View]      ✅ Uploaded      │
│  [📷 Rear View]       ⬆️  Upload       │
│  [📷 Driver Side]     ⬆️  Upload       │
│  [📷 Passenger Side]  ⬆️  Upload       │
│  [📷 Odometer]        ⬆️  Upload       │
│  [📷 VIN Plate]       ⬆️  Upload       │
│  [📷 Title Document]  ⬆️  Upload       │
│                                         │
│  Tips:                                  │
│  • Use good lighting                    │
│  • Ensure VIN is legible                │
│  • Show entire vehicle in frame         │
└─────────────────────────────────────────┘
```

**Features:**
- Drag-and-drop or click to upload
- Camera access on mobile
- Real-time preview
- Compression before upload
- Visual guides (silhouette overlays)

**Validation:**
- All photos required
- Max 10MB per photo
- Formats: JPG, PNG, HEIC

**CTA:** Continue →

---

#### Step 6: Borrower Identity
**Fields:**
- Full Legal Name (First, Middle, Last)
- Date of Birth (date picker)
- Social Security Number (masked input)
- Driver's License Number
- Driver's License State
- Current Address (Street, City, State, ZIP)
- How long at this address? (dropdown)
- Phone Number
- Email (pre-filled if signed up)

**Security Notice:**
```
🔒 Your information is encrypted and secure
We never sell your personal data.
```

**Validation:**
- All required
- SSN format validation
- Email format validation
- Phone format validation

**CTA:** Continue →

---

#### Step 7: Income & Employment
**Fields:**
- Employment Status (Radio: Employed / Self-Employed / Retired / Other)
- Employer Name (if employed)
- Job Title
- How long with employer? (dropdown)
- Monthly Income (number input)
- Pay Frequency (dropdown: Weekly / Bi-weekly / Monthly)
- Optional: Upload recent paystub

**Conditional:**
- If Self-Employed → Business type field
- If Retired → Income source field

**Validation:**
- Income > $1,500/month

**CTA:** Continue →

---

#### Step 8: Banking
**Option A: Instant Verification (Plaid placeholder)**
```
[🏦 Connect Your Bank Instantly]
Secure connection via Plaid
```

**Option B: Manual Entry**
```
Bank Name: ___________
Account Type: [Checking / Savings]
Routing Number: _________
Account Number: _________

[ ] I authorize Dollar Loans to verify this account
```

**Security Notice:**
- Why we need this: "For secure fund deposits and payment processing"

**CTA:** Continue →

---

#### Step 9: CAB Disclosures & Acknowledgements
**Display:**
```
┌──────────────────────────────────────────┐
│  Required Disclosures                    │
│                                          │
│  Please review and acknowledge:          │
│                                          │
│  [📄 Texas CAB Disclosure]     [View]   │
│  [ ] I have read and understand          │
│                                          │
│  [📄 Terms of Service]         [View]   │
│  [ ] I agree to the terms                │
│                                          │
│  [📄 Privacy Policy]           [View]   │
│  [ ] I acknowledge                       │
│                                          │
│  [📄 Credit Authorization]     [View]   │
│  [ ] I authorize a credit check          │
│                                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                          │
│  💡 Plain Language Summary:              │
│                                          │
│  Dollar Loans is a Credit Access         │
│  Business (CAB) licensed in Texas.       │
│  We facilitate your access to credit     │
│  by connecting you with lenders.         │
│                                          │
│  Your fees may include:                  │
│  • CAB fees                              │
│  • Interest charges                      │
│  • Documentation fees                    │
│                                          │
│  You will see the total cost before      │
│  you sign any agreement.                 │
└──────────────────────────────────────────┘
```

**Validation:**
- All checkboxes must be checked

**CTA:** Continue to Offer →

---

#### Step 10: Offer Presentation
**Display:**
```
┌──────────────────────────────────────────┐
│  Your Personalized Offer                 │
│                                          │
│  ╔════════════════════════════════════╗ │
│  ║  $3,750                            ║ │
│  ║  Cash you'll receive               ║ │
│  ╚════════════════════════════════════╝ │
│                                          │
│  Payment Details:                        │
│  • Monthly Payment: $428               │
│  • Number of Payments: 12              │
│  • Total Amount to Repay: $5,136       │
│                                          │
│  Cost Breakdown:                         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Principal           $3,750            │
│  Interest            $1,086            │
│  CAB Fee             $225              │
│  Documentation Fee   $75               │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Total Cost          $5,136            │
│                                          │
│  APR: 28.5%                              │
│                                          │
│  Payment Schedule Preview:               │
│  [Show Full Schedule ▼]                 │
│                                          │
│  ⚠️  Important:                         │
│  • Your vehicle is collateral            │
│  • Pay off early anytime                 │
│  • No prepayment penalties               │
│                                          │
│  [✅ Accept This Offer]                 │
│  [← Back] [Decline Offer]               │
└──────────────────────────────────────────┘
```

**Features:**
- Expandable payment schedule table
- "How we calculated this" tooltip
- Print/download offer option

**Validation:**
- Must explicitly accept

**CTA:** Accept & Continue →

---

#### Step 11: E-Sign & Final Confirmations
**Display:**
```
┌──────────────────────────────────────────┐
│  Review & Sign Your Agreement            │
│                                          │
│  Please review your CAB Title Access     │
│  Agreement:                              │
│                                          │
│  [📄 Agreement Document Preview]        │
│  [12 pages]                              │
│                                          │
│  [Download PDF] [Print]                  │
│                                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                          │
│  Confirmations:                          │
│  [ ] I have read the entire agreement    │
│  [ ] I understand the payment terms      │
│  [ ] I agree to use my vehicle as        │
│      collateral                          │
│                                          │
│  Your Signature:                         │
│  ┌────────────────────────────────────┐ │
│  │                                    │ │ ← Canvas for signature
│  │  [Sign here with mouse/finger]    │ │
│  │                                    │ │
│  └────────────────────────────────────┘ │
│  [Clear Signature]                       │
│                                          │
│  By signing, I agree to the terms        │
│  stated in the CAB Title Access          │
│  Agreement dated December 15, 2025.      │
│                                          │
│  [Submit Signed Agreement]               │
└──────────────────────────────────────────┘
```

**Features:**
- PDF viewer with all agreement pages
- Canvas-based signature pad
- Timestamp signature
- Email copy of signed agreement

**Validation:**
- All confirmations checked
- Valid signature drawn

**CTA:** Submit →

---

#### Step 12: Funding Tracker
**Display:**
```
┌──────────────────────────────────────────┐
│  🎉 Agreement Submitted!                 │
│                                          │
│  Your application is being processed.    │
│                                          │
│  Current Status:                         │
│                                          │
│  ✅ Application Submitted                │
│  ⏳ Under Review (Current)              │
│  ⏱️  Approved                           │
│  ⏱️  Funds Sent                         │
│                                          │
│  Estimated Timeline:                     │
│  Approval within 2 hours                 │
│  Funding within 24 hours of approval     │
│                                          │
│  What's Next?                            │
│  1. We'll review your application        │
│  2. You may receive a call to verify     │
│     information                          │
│  3. Once approved, funds are sent to     │
│     your bank account                    │
│                                          │
│  We'll send updates to:                  │
│  📧 your.email@example.com              │
│  📱 (555) 123-4567                      │
│                                          │
│  [View Application Details]              │
│  [Go to Dashboard]                       │
└──────────────────────────────────────────┘
```

**Features:**
- Real-time status updates via polling/webhooks
- Email and SMS notifications
- Link to track in dashboard

---

### 3. Dashboard Features

#### Dashboard Home (`/dashboard`)
**Layout:**
```
┌────────────────────────────────────────────────┐
│  Welcome back, John! 👋                        │
├────────────────────────────────────────────────┤
│                                                │
│  ┌─────────────────┐  ┌──────────────────┐   │
│  │ Active Agreement │  │ Next Payment Due │   │
│  │                  │  │                  │   │
│  │  $3,200 balance │  │  $428           │   │
│  │  12 months left  │  │  Jan 15, 2025   │   │
│  │                  │  │                  │   │
│  │  [View Details]  │  │  [Pay Now]      │   │
│  └─────────────────┘  └──────────────────┘   │
│                                                │
│  ┌────────────────────────────────────────┐   │
│  │  🚗 Your Vehicle                        │   │
│  │  2018 Honda Civic                       │   │
│  │  Estimated Value: $8,500                │   │
│  │  [View Details]                         │   │
│  └────────────────────────────────────────┘   │
│                                                │
│  ┌────────────────────────────────────────┐   │
│  │  💰 Need More Cash?                     │   │
│  │                                         │   │
│  │  [Get Cash Now →]                       │   │ ← Big CTA
│  └────────────────────────────────────────┘   │
│                                                │
│  Recent Activity:                              │
│  • Payment received - Dec 15                   │
│  • Document uploaded - Dec 10                  │
│  • Profile updated - Dec 5                     │
└────────────────────────────────────────────────┘
```

#### Vehicles Page (`/dashboard/vehicles`)
- Grid of vehicle cards
- "Add Vehicle" button
- Each card shows: Photo, Make/Model/Year, Value estimate, Status
- Click to view/edit details
- Upload/update photos

#### Applications Page (`/dashboard/applications`)
- Table/list of all applications
- Status badges (Pending, Under Review, Approved, Declined)
- Date submitted
- Amount requested
- Action buttons (View, Resume, Withdraw)

#### Agreements Page (`/dashboard/agreements`)
- Active agreements with full details
- Payment schedule table
- Download contract PDF
- Early payoff calculator
- Payment history

#### Payments Page (`/dashboard/payments`)
**Features:**
- Make one-time payment
- Set up autopay
- View payment history
- Download receipts
- Update payment method
- Schedule future payments

#### Documents Page (`/dashboard/documents`)
**Categories:**
- Identity Documents
- Vehicle Documents
- Income Verification
- Agreements
- Receipts

**Each document:**
- Status badge (Uploaded, Under Review, Approved, Rejected)
- Upload date
- File name
- Download button
- Re-upload if rejected

#### Profile Page (`/dashboard/profile`)
**Sections:**
- Personal Information
- Address
- Employment
- Income
- Bank Account
- Contact Preferences

#### Settings Page (`/dashboard/settings`)
**Tabs:**
- Security (Password, 2FA)
- Notifications (Email, SMS preferences)
- Privacy
- Account (Close account option)

#### Support Page (`/dashboard/support`)
**Features:**
- Submit ticket
- View open tickets
- FAQ search
- Live chat widget (placeholder)
- Contact information
- Hours of operation

#### Referrals Page (`/dashboard/referrals`)
**Features:**
- Unique referral link with copy button
- Referral stats (Sent, Clicked, Signed Up, Funded)
- Reward tracking
- Share buttons (Email, SMS, Social)
- Terms and conditions

---

## 🗄️ Data Models

### Database Schema (Prisma)

```prisma
// User Model
model User {
  id                String        @id @default(cuid())
  email             String        @unique
  phone             String?
  firstName         String
  middleName        String?
  lastName          String
  dateOfBirth       DateTime
  ssn               String        @db.Text // Encrypted
  dlNumber          String?
  dlState           String?

  address           Address?
  employment        Employment?
  bankAccount       BankAccount?
  vehicles          Vehicle[]
  applications      Application[]
  agreements        Agreement[]
  documents         Document[]
  tickets           SupportTicket[]

  emailVerified     DateTime?
  phoneVerified     DateTime?
  identityStatus    IdentityStatus @default(PENDING)

  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt

  @@index([email])
}

enum IdentityStatus {
  PENDING
  VERIFIED
  REJECTED
}

// Address Model
model Address {
  id                String   @id @default(cuid())
  userId            String   @unique
  user              User     @relation(fields: [userId], references: [id])

  street1           String
  street2           String?
  city              String
  state             String
  zipCode           String

  yearsAtAddress    Int?

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}

// Employment Model
model Employment {
  id                String          @id @default(cuid())
  userId            String          @unique
  user              User            @relation(fields: [userId], references: [id])

  status            EmploymentStatus
  employerName      String?
  jobTitle          String?
  monthsEmployed    Int?
  monthlyIncome     Decimal
  payFrequency      PayFrequency

  createdAt         DateTime        @default(now())
  updatedAt         DateTime        @updatedAt
}

enum EmploymentStatus {
  EMPLOYED
  SELF_EMPLOYED
  RETIRED
  UNEMPLOYED
  OTHER
}

enum PayFrequency {
  WEEKLY
  BI_WEEKLY
  SEMI_MONTHLY
  MONTHLY
}

// Bank Account Model
model BankAccount {
  id                String   @id @default(cuid())
  userId            String   @unique
  user              User     @relation(fields: [userId], references: [id])

  bankName          String
  accountType       String
  routingNumber     String   @db.Text // Encrypted
  accountNumber     String   @db.Text // Encrypted
  verified          Boolean  @default(false)

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}

// Vehicle Model
model Vehicle {
  id                String          @id @default(cuid())
  userId            String
  user              User            @relation(fields: [userId], references: [id])

  vin               String?
  licensePlate      String?
  year              Int
  make              String
  model             String
  trim              String?
  mileage           Int
  condition         VehicleCondition

  titleStatus       TitleStatus
  payoffAmount      Decimal?
  primaryUse        String?

  photos            VehiclePhoto[]
  valuation         Decimal?
  valuationDate     DateTime?

  applications      Application[]
  isPrimary         Boolean         @default(false)

  createdAt         DateTime        @default(now())
  updatedAt         DateTime        @updatedAt

  @@index([userId])
  @@index([vin])
}

enum VehicleCondition {
  POOR
  FAIR
  GOOD
  EXCELLENT
}

enum TitleStatus {
  OWNED_FREE_CLEAR
  PAYING_OFF
  OTHER
}

// Vehicle Photo Model
model VehiclePhoto {
  id                String   @id @default(cuid())
  vehicleId         String
  vehicle           Vehicle  @relation(fields: [vehicleId], references: [id], onDelete: Cascade)

  type              PhotoType
  url               String
  uploadedAt        DateTime @default(now())

  @@index([vehicleId])
}

enum PhotoType {
  FRONT
  REAR
  DRIVER_SIDE
  PASSENGER_SIDE
  ODOMETER
  VIN_PLATE
  TITLE
  INTERIOR
  OTHER
}

// Application Model
model Application {
  id                String              @id @default(cuid())
  userId            String
  user              User                @relation(fields: [userId], references: [id])
  vehicleId         String
  vehicle           Vehicle             @relation(fields: [vehicleId], references: [id])

  status            ApplicationStatus   @default(DRAFT)
  requestedAmount   Decimal
  estimateMin       Decimal?
  estimateMax       Decimal?

  currentStep       Int                 @default(1)
  savedData         Json?               // Wizard progress

  finalOffer        Offer?
  agreement         Agreement?

  cabDisclosureVersion String?
  disclosuresAcceptedAt DateTime?

  submittedAt       DateTime?
  reviewedAt        DateTime?
  decidedAt         DateTime?

  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt

  @@index([userId])
  @@index([status])
}

enum ApplicationStatus {
  DRAFT
  SUBMITTED
  UNDER_REVIEW
  APPROVED
  DECLINED
  WITHDRAWN
  EXPIRED
}

// Offer Model
model Offer {
  id                String      @id @default(cuid())
  applicationId     String      @unique
  application       Application @relation(fields: [applicationId], references: [id])

  principalAmount   Decimal
  interestAmount    Decimal
  cabFee            Decimal
  docFee            Decimal
  totalRepayment    Decimal

  monthlyPayment    Decimal
  numberOfPayments  Int
  apr               Decimal

  expiresAt         DateTime
  acceptedAt        DateTime?

  createdAt         DateTime    @default(now())
}

// Agreement Model
model Agreement {
  id                String            @id @default(cuid())
  userId            String
  user              User              @relation(fields: [userId], references: [id])
  applicationId     String            @unique
  application       Application       @relation(fields: [applicationId], references: [id])

  status            AgreementStatus   @default(ACTIVE)

  principalAmount   Decimal
  totalRepayment    Decimal
  currentBalance    Decimal

  signedDocUrl      String
  signatureData     Json
  signedAt          DateTime

  payments          Payment[]
  paymentSchedule   PaymentSchedule[]

  startDate         DateTime
  endDate           DateTime

  createdAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt

  @@index([userId])
  @@index([status])
}

enum AgreementStatus {
  ACTIVE
  PAID_OFF
  DEFAULTED
  SETTLED
  CANCELLED
}

// Payment Schedule Model
model PaymentSchedule {
  id                String    @id @default(cuid())
  agreementId       String
  agreement         Agreement @relation(fields: [agreementId], references: [id])

  paymentNumber     Int
  dueDate           DateTime
  amount            Decimal
  principalAmount   Decimal
  interestAmount    Decimal

  paid              Boolean   @default(false)
  paidDate          DateTime?

  @@index([agreementId])
  @@index([dueDate])
}

// Payment Model
model Payment {
  id                String        @id @default(cuid())
  agreementId       String
  agreement         Agreement     @relation(fields: [agreementId], references: [id])

  amount            Decimal
  method            PaymentMethod
  status            PaymentStatus @default(PENDING)

  transactionId     String?
  receiptUrl        String?

  scheduledDate     DateTime?
  processedDate     DateTime?

  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt

  @@index([agreementId])
  @@index([status])
}

enum PaymentMethod {
  ACH
  DEBIT_CARD
  CREDIT_CARD
  WIRE_TRANSFER
  CHECK
  CASH
}

enum PaymentStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
  REFUNDED
  CANCELLED
}

// Document Model
model Document {
  id                String          @id @default(cuid())
  userId            String
  user              User            @relation(fields: [userId], references: [id])

  category          DocumentCategory
  fileName          String
  fileUrl           String
  fileSize          Int
  mimeType          String

  status            DocumentStatus  @default(PENDING)
  reviewNotes       String?

  uploadedAt        DateTime        @default(now())
  reviewedAt        DateTime?

  @@index([userId])
  @@index([category])
}

enum DocumentCategory {
  IDENTITY
  VEHICLE
  INCOME
  AGREEMENT
  RECEIPT
  OTHER
}

enum DocumentStatus {
  PENDING
  APPROVED
  REJECTED
  EXPIRED
}

// Support Ticket Model
model SupportTicket {
  id                String        @id @default(cuid())
  userId            String
  user              User          @relation(fields: [userId], references: [id])

  subject           String
  description       String        @db.Text
  status            TicketStatus  @default(OPEN)
  priority          TicketPriority @default(NORMAL)

  messages          TicketMessage[]

  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt
  closedAt          DateTime?

  @@index([userId])
  @@index([status])
}

enum TicketStatus {
  OPEN
  IN_PROGRESS
  WAITING_ON_CUSTOMER
  RESOLVED
  CLOSED
}

enum TicketPriority {
  LOW
  NORMAL
  HIGH
  URGENT
}

// Ticket Message Model
model TicketMessage {
  id                String        @id @default(cuid())
  ticketId          String
  ticket            SupportTicket @relation(fields: [ticketId], references: [id], onDelete: Cascade)

  fromUserId        String?       // null if from admin
  message           String        @db.Text

  createdAt         DateTime      @default(now())

  @@index([ticketId])
}

// Analytics Event Model (optional)
model AnalyticsEvent {
  id                String   @id @default(cuid())
  userId            String?
  sessionId         String

  eventName         String
  eventData         Json?

  page              String?
  referrer          String?
  userAgent         String?
  ipAddress         String?

  createdAt         DateTime @default(now())

  @@index([eventName])
  @@index([userId])
  @@index([createdAt])
}
```

---

## 🚀 Advanced Features & Innovation

### AI-Powered Features (Next-Level UX)

#### 1. Intelligent Loan Calculator with ML Predictions
**Feature:** Real-time loan amount predictions based on vehicle data

**How it works:**
- User enters vehicle year/make/model
- System instantly fetches KBB/NADA values via API
- Machine learning model predicts approval likelihood
- Shows personalized estimate range

**UI Components:**
- Interactive slider with dynamic ranges
- "Confidence score" indicator (High/Medium probability)
- Instant vehicle photo recognition (future: upload photo, AI identifies vehicle)

#### 2. Smart Document Verification
**Feature:** AI-powered document quality checking

**Capabilities:**
- Auto-detect document type (license, title, paystub)
- Check for blur, glare, missing corners
- Verify information matches application
- Flag potential issues before submission

**User Benefit:** Faster approval, fewer rejections

#### 3. Chatbot with Natural Language Processing
**Feature:** 24/7 AI assistant for common questions

**Personality:** Professional, friendly, human-like
**Capabilities:**
- Answer eligibility questions
- Explain loan terms
- Check application status
- Schedule callbacks
- Seamlessly hand off to human agents

#### 4. Predictive Approval Scoring
**Feature:** Show users their approval likelihood upfront

**Display:**
```
Your Approval Score: 85/100 ⭐⭐⭐⭐

✅ Strong Factors:
- Vehicle value: $18,000
- Stable employment history
- Texas resident

⚠️ To Improve:
- Add proof of income for faster approval
```

#### 5. Dynamic Pricing Engine
**Feature:** Personalized rate offers based on risk profile

**How it works:**
- Credit score tier matching
- Vehicle equity ratio calculation
- Employment stability assessment
- Custom rate generation

**Benefit:** Best possible rate for each customer

### Premium Customer Experience Features

#### 6. White-Glove Onboarding
**For loans $10,000+:**
- Dedicated loan specialist assigned
- Personal phone consultation
- Priority processing (same-day approval)
- Concierge document pickup (optional)

**UI Display:**
```
┌────────────────────────────────────┐
│ 👔 You Qualify for VIP Service    │
│                                    │
│ Your loan amount makes you         │
│ eligible for premium support:      │
│                                    │
│ ✓ Dedicated specialist             │
│ ✓ Same-day approval guarantee      │
│ ✓ Personal consultation            │
│                                    │
│ [Activate VIP Service →]           │
└────────────────────────────────────┘
```

#### 7. Real-Time Application Tracking
**Feature:** Live status updates with ETA

**Stages with Time Estimates:**
- Application received (instant)
- Document review (15-30 min)
- Vehicle valuation (20-40 min)
- Credit decision (10-15 min)
- Offer generation (5 min)
- Funding initiated (1-24 hours)

**UI:** Progress bar with live updates, push notifications

#### 8. Instant Bank Verification
**Feature:** Plaid integration for instant account verification

**Benefits:**
- No need to enter routing/account numbers
- Verify income automatically from deposits
- Instant approval for verified accounts
- Reduce fraud

#### 9. Flexible Payment Options
**Beyond standard ACH:**
- **Pay with debit card** (instant payment, small fee)
- **PayPal/Venmo** (coming soon badge)
- **Cryptocurrency** (BTC/ETH - for tech-forward branding)
- **Check by phone** (call to pay)
- **Auto-pay with rewards** (5% cashback on auto-pay)

#### 10. Loan Health Dashboard
**Feature:** Financial wellness tools

**Widgets:**
- Payment history graph
- Credit score tracker (via partner API)
- "Payoff Progress" visualization
- Savings calculator ("Pay $X extra, save $Y in interest")
- Early payoff incentives

**Example:**
```
💪 You're crushing it!

You've paid $2,400 of $5,000
48% Complete

Pay $100 extra this month and save $75 in interest!
[Make Extra Payment →]
```

#### 11. Referral Program with Tiered Rewards
**Structure:**
- Tier 1: Refer 1-2 friends → $50 per funded loan
- Tier 2: Refer 3-5 friends → $75 per funded loan
- Tier 3: Refer 6+ friends → $100 per funded loan + Gold Member status

**Gold Member Perks:**
- Lower rates on future loans
- Fee waivers
- Priority support
- Exclusive offers

#### 12. Vehicle Equity Monitoring
**Feature:** Track your vehicle's value over time

**Display:**
```
📈 Your Vehicle Value Trends

Current Value: $18,500 (+$500 since last check)

Available Equity: $12,000
You could borrow: $2,500 - $9,000

Market Insight:
Honda Civics in your area have increased 2.7% this quarter.

[Get Additional Funding →]
```

### Marketing & Conversion Features

#### 13. Exit-Intent Offers
**Trigger:** User about to leave site

**Popup:**
```
⏰ Wait! Before you go...

Get $50 off your loan fees if you apply in the next 15 minutes.

Code: STAY50

[Claim My Discount →]
```

#### 14. Social Proof Popups
**Display:** Small non-intrusive notifications

**Examples:**
- "John from Houston just got approved for $5,000"
- "127 people are viewing this page right now"
- "Sarah just received funding in 3 hours"

**Timing:** Every 8-15 seconds (not annoying)

#### 15. Comparison Calculator
**Feature:** Side-by-side comparison with competitors

**Columns:**
- Dollar Loans
- Competitor A (generic "other lenders")
- Banks
- Payday Loans

**Rows:**
- Application time
- Approval speed
- Typical APR range
- Fees
- Keep your car?
- Early payoff penalty

**Obviously, we win on most metrics**

#### 16. Interactive ROI Calculator
**Use Case:** "Is borrowing worth it for your situation?"

**Inputs:**
- What do you need cash for?
- How much do you need?
- How quickly can you pay it back?

**Outputs:**
- Total cost
- Monthly payment
- Cost vs. benefit analysis
- "Smart borrowing" recommendations

#### 17. Video Testimonials
**Features:**
- 8-10 real customers
- Professional production quality
- Diverse demographics (age, ethnicity, use cases)
- Subtitles for accessibility
- Short (30-60 seconds each)

**Placement:**
- Homepage (carousel)
- Reviews page (grid)
- During application (encouraging messages)

#### 18. Live Chat with Smart Routing
**Features:**
- Instant response (< 30 seconds)
- Pre-qualify questions to route to right agent
- Co-browsing for complex issues
- Screen sharing option
- Transfer application data into chat

**Agent Profiles:**
- Photo and name
- "John is typing..." indicator
- Agent ratings visible

### Mobile-First Excellence

#### 19. Progressive Web App (PWA)
**Features:**
- Add to homescreen
- Offline functionality (save progress)
- Push notifications (approval updates)
- App-like experience
- No app store required

#### 20. Mobile-Optimized Document Capture
**Features:**
- Auto-crop and enhance photos
- Guide users with overlay (align VIN here)
- Instant preview
- Retake option with tips
- Compression before upload

#### 21. SMS Application Status
**Feature:** Text updates at each stage

**Example:**
```
Dollar Loans: Your application (#1234) has been approved!
You qualified for $4,500 at 24% APR.
Review offer: [link]
```

#### 22. One-Tap Pay (Mobile)
**Feature:** Biometric authentication for payments

**Flow:**
- Open mobile site
- Tap "Pay Now"
- Face ID / Touch ID
- Payment confirmed

**No password needed for returning users**

### Backend Intelligence

#### 23. Fraud Detection System
**Features:**
- Velocity checks (too many apps from same IP)
- Device fingerprinting
- Behavioral analysis
- Identity verification APIs
- Synthetic identity detection

#### 24. Automated Underwriting Engine
**Rules-Based + ML:**
- Credit score thresholds
- Debt-to-income ratios
- Vehicle loan-to-value (LTV)
- Employment stability scoring
- ML model for edge cases

**Result:** 80% of applications auto-approved/declined

#### 25. Dynamic Fee Optimization
**A/B Test Different Fee Structures:**
- Test origination fee amounts
- Test fee disclosure placement
- Test APR presentation styles
- Optimize for conversion and profit

**Compliance:** All within Texas regulations

---

## 🏆 Trust & Credibility Systems

### Building Massive Trust Signals

#### Corporate Identity Elements

**1. Executive Leadership Page**
```
Meet Our Leadership Team

[Professional Headshots]

John Smith - CEO & Founder
Former VP of Lending at Wells Fargo
MBA, Harvard Business School
15+ years in financial services

[LinkedIn Icon] [Email]

Jane Doe - Chief Risk Officer
Former Federal Reserve Bank Examiner
CPA, CFA
20+ years in risk management

[LinkedIn Icon] [Email]

[+ 4 more executives]
```

**2. Physical Office Presence**
**Headquarters:**
Dollar Loans Corporate HQ
2500 Main Street, Suite 1200
Dallas, TX 75201

📞 (214) 555-0100
📧 info@dollarloans.com
🕐 Mon-Fri: 8am-8pm CT, Sat: 9am-5pm CT

**Show on homepage:**
- High-quality office building photo
- Google Maps embed
- "Visit us" CTA

**Branch Locations** (even if online-only):
- Houston Service Center
- Austin Service Center
- San Antonio Service Center

**Strategy:** Creates perception of large, established company

**3. Industry Certifications & Memberships**

Display prominently:
- ✅ Texas Office of Consumer Credit Commissioner Licensed
- ✅ Better Business Bureau A+ Rated
- ✅ Member, Online Lenders Alliance
- ✅ Member, Texas Bankers Association (if applicable)
- ✅ Certified HTTPS / SSL Secured
- ✅ PCI DSS Compliant (payment security)
- ✅ SOC 2 Type II Certified (data security)

**4. Press & Media Mentions**

**Create "In The News" Section:**
```
As Featured In:

[Logo: Dallas Morning News]
[Logo: Texas Tribune]
[Logo: Houston Chronicle]
[Logo: Austin Business Journal]
```

**Press Releases:**
- "Dollar Loans Funds $50M in Vehicle Title Loans"
- "Dollar Loans Launches AI-Powered Approval System"
- "Dollar Loans Earns Top Rating for Customer Service"

**Strategy:** Even if not yet published, prepare templates for future PR

**5. Awards & Recognition**

**Create/Apply For:**
- "Best Title Loan Provider in Texas 2025"
- "Top Fintech Startup - Dallas"
- "Customer Service Excellence Award"
- "Fast 50 Growing Companies"

**Display as badges on homepage**

**6. Security & Compliance Page**

**Comprehensive security documentation:**

```
🔒 Your Security is Our Priority

Bank-Level Encryption
We use 256-bit SSL encryption, the same security used by major banks.

Data Protection
Your personal information is encrypted at rest and in transit.
We never sell your data to third parties.

Secure Infrastructure
- SOC 2 Type II Certified
- PCI DSS Compliant
- Regular third-party security audits
- 24/7 threat monitoring

Privacy Commitment
We comply with CCPA and all Texas privacy regulations.

Fraud Prevention
Advanced AI-powered fraud detection protects your identity.

[View Our Security Report →]
[Download Privacy Policy →]
```

**7. Transparent Pricing Guarantee**

**Prominent Badge:**
```
💎 No Hidden Fees Guarantee

You'll see your total cost before signing anything.
If we miss a fee disclosure, we'll waive that fee.

That's our promise.
```

**8. Customer Bill of Rights**

**Create a unique policy:**
```
The Dollar Loans Customer Bill of Rights

1. Right to Clear Pricing
   You will always know the total cost before committing.

2. Right to Change Your Mind
   Cancel within 3 days for a full refund.

3. Right to Early Payoff
   No penalties for paying off your loan early.

4. Right to Payment Flexibility
   Request payment date changes without fees.

5. Right to Human Support
   Talk to a real person 6 days a week.

6. Right to Data Privacy
   We never sell your information.

7. Right to Fair Treatment
   We pledge ethical lending practices.

[Download Full Policy →]
```

**9. Live Stats Counter**

**On homepage:**
```
Trusted by Thousands of Texans

[Counting Animation]
$52,483,450    Loans Funded
   12,847      Happy Customers
     4.9       Average Rating
     47min     Avg Approval Time
```

**Updates in real-time (or appears to)**

**10. Video About Us / Brand Story**

**Professional 2-minute video:**
- Founder story (why we started Dollar Loans)
- Our mission and values
- Customer success montage
- Office/team footage
- Call to action

**Tone:** Inspirational, trustworthy, human

**11. Community Involvement**

**Show we give back:**
```
Giving Back to Texas Communities

Dollar Loans proudly supports:
- Texas Food Bank Network
- Habitat for Humanity Texas
- United Way of Texas

We donate 1% of profits to local charities.

[See Our Impact Report →]
```

**12. Transparent Complaint Resolution**

**Dedicated page: /legal/complaints**

```
Have a Concern? We're Here to Help.

We take complaints seriously and resolve them quickly.

Step 1: Contact Our Support Team
Call: (214) 555-0100
Email: support@dollarloans.com

Step 2: Escalation (if needed)
complaints@dollarloans.com
Receive response within 48 hours

Step 3: Regulatory Contact
If unresolved, contact:
Texas Office of Consumer Credit Commissioner
[Contact info]

Our Complaint Resolution Record:
• Average resolution time: 3 days
• 97% resolved to customer satisfaction
```

**13. Educational Content Hub**

**Position as industry experts:**

Blog categories:
- "Understanding Vehicle Title Loans"
- "Managing Your Finances"
- "Texas Lending Regulations"
- "Vehicle Value & Maintenance"
- "Credit Score Improvement"

**Each article:**
- 1,500+ words
- Author bio with credentials
- Cited sources
- Helpful infographics
- Related article suggestions

**14. FAQ with Video Answers**

**Beyond text FAQs:**
- Each top question has a 1-2 minute video answer
- Friendly spokesperson
- Clear, simple explanations
- Professional production

**15. Customer Success Stories (Detailed)**

**Format:**
```
How Maria Used Her Vehicle Equity to Save Her Home

[Professional Photo of Maria]

The Challenge:
Maria needed $8,000 for emergency home repairs after a storm.
Traditional banks denied her due to recent credit issues.

The Solution:
Dollar Loans approved Maria for $8,500 in under 2 hours.
She fixed her home and kept her car.

The Outcome:
Maria paid off her loan in 9 months, saving $400 in interest
by using our early payoff option.

"Dollar Loans treated me with respect when I needed help most.
The process was simple and transparent." - Maria R., Houston

[Apply Now →]
```

**10+ stories like this**

---

## 🚀 Implementation Phases

**Break the build into manageable phases to avoid timeouts and ensure quality.**

### Phase 1: Foundation & Design System (Week 1)
**Goal:** Set up project structure and build reusable components

**Tasks:**
1. Initialize Next.js 14 project with TypeScript
2. Configure Tailwind CSS with custom design tokens
3. Set up project structure (folders, routing)
4. Build core UI components library:
   - Buttons (primary, secondary, tertiary)
   - Form inputs (text, select, checkbox, radio, slider)
   - Cards, badges, tags
   - Modal, toast, alert components
   - Loading skeletons
5. Create layout components (header, footer, sidebar)
6. Set up fonts (Inter, custom display font)
7. Configure icons library (Lucide React)
8. Create global styles and theme

**Deliverable:** Storybook or component showcase page

---

### Phase 2: Public Marketing Pages (Week 2)
**Goal:** Build all public-facing pages with SEO optimization

**Tasks:**
1. Homepage with hero and pre-qualify widget
2. How It Works page with process diagram
3. CAB Model Explained page with infographics
4. Rates & Fees page with calculators
5. Calculator page (interactive)
6. Eligibility page with checklist
7. Vehicle Value page
8. FAQ page with search and accordion
9. Reviews/testimonials page
10. About, Contact, Careers, Press pages
11. Security & Trust page
12. Blog index and sample post
13. Locations page with map
14. Partners overview page
15. Affiliate program page
16. Developers/API docs page
17. All legal pages (Terms, Privacy, CAB Disclosures, etc.)

**Deliverable:** Fully functional marketing site with placeholder content

---

### Phase 3: Authentication System (Week 3)
**Goal:** Secure user authentication and session management

**Tasks:**
1. Set up NextAuth.js or Supabase Auth
2. Create signup page with email verification
3. Create login page
4. Forgot password flow
5. Optional: MFA setup
6. Protected route middleware
7. Session management
8. User profile creation on signup
9. Email templates (welcome, verification, password reset)

**Deliverable:** Working auth system with protected routes

---

### Phase 4: Database & API Layer (Week 3)
**Goal:** Set up database and API endpoints

**Tasks:**
1. Set up PostgreSQL database (Supabase/Neon)
2. Create Prisma schema (from models above)
3. Run migrations
4. Create seed data script
5. Build API routes:
   - `/api/auth/*` (handled by NextAuth)
   - `/api/users/*`
   - `/api/vehicles/*`
   - `/api/applications/*`
   - `/api/offers/*`
   - `/api/agreements/*`
   - `/api/payments/*`
   - `/api/documents/*`
   - `/api/support/*`
6. Set up file upload to S3-compatible storage
7. Add API rate limiting
8. Add error handling and logging

**Deliverable:** Full API with mock data

---

### Phase 5: Get Cash Wizard (Week 4-5)
**Goal:** Build the core conversion funnel

**Tasks:**
1. Create wizard layout with stepper
2. Build all 12 steps with forms
3. Implement autosave functionality (localStorage + API)
4. Add form validation (Zod schemas)
5. Create vehicle photo upload with guides
6. Build offer presentation UI
7. Implement e-signature component
8. Create funding tracker
9. Add progress persistence and resume
10. Mobile responsive testing
11. Add tooltips and help text
12. Error handling and recovery

**Deliverable:** Complete loan application wizard

---

### Phase 6: Customer Dashboard (Week 6)
**Goal:** Build user dashboard and management features

**Tasks:**
1. Dashboard homepage with widgets
2. Vehicles page (list, add, edit, photos)
3. Applications page (list, status, resume)
4. Agreements page (details, schedule, download)
5. Payments page (make payment, history, autopay setup)
6. Documents page (upload, view, organize)
7. Profile page (edit all personal info)
8. Settings page (security, notifications, preferences)
9. Support page (tickets, chat widget placeholder, FAQ)
10. Referrals page (link, stats, rewards)

**Deliverable:** Full customer portal

---

### Phase 7: Admin Panel (Week 7)
**Goal:** Internal tools for managing operations

**Tasks:**
1. Admin layout and navigation
2. Applications management (list, review, approve/decline)
3. Customer database (search, view, edit)
4. Vehicle inventory (view photos, valuations)
5. Offers management (create, adjust)
6. Document review queue
7. Payments processing
8. Underwriting rules configuration UI
9. Audit log viewer
10. Role-based access control

**Deliverable:** Admin panel for operations team

---

### Phase 8: Integrations & Polish (Week 8)
**Goal:** Add integrations and polish the experience

**Tasks:**
1. Analytics integration (Google Analytics, Mixpanel, or custom)
2. Implement event tracking (from event map)
3. Email service integration (Resend/SendGrid)
4. SMS notifications (Twilio)
5. Payment processing integration placeholder
6. Document signing integration placeholder
7. Add animations (Framer Motion)
8. Optimize images and assets
9. SEO optimization (meta tags, sitemap, robots.txt)
10. Performance optimization (lazy loading, code splitting)
11. Accessibility audit (ARIA, keyboard navigation, screen readers)
12. Cross-browser testing
13. Mobile responsiveness final polish

**Deliverable:** Production-ready application

---

### Phase 9: Testing & Deployment (Week 9)
**Goal:** Comprehensive testing and deployment

**Tasks:**
1. Unit tests (Vitest)
2. Component tests (React Testing Library)
3. E2E tests (Playwright)
4. API tests (Postman/Jest)
5. Load testing
6. Security audit
7. UAT (User Acceptance Testing)
8. Fix bugs and issues
9. Set up CI/CD pipeline
10. Deploy to staging
11. Final review and approval
12. Deploy to production
13. Monitoring and alerting setup

**Deliverable:** Live production application

---

## 🛠️ Build Instructions

### For AI Coding Assistants (Claude Code, Gemini, etc.)

**Use this prompt to start the build:**

---

## BUILD PROMPT START

You are a senior full-stack engineer and product designer. Your task is to build a **production-grade Next.js application** for **Dollar Loans**, a Texas Credit Access Business (CAB) providing vehicle title access-to-credit services.

### Core Requirements

1. **Technology Stack:**
   - Next.js 14+ (App Router)
   - TypeScript 5+
   - Tailwind CSS 3+
   - Prisma ORM
   - NextAuth.js
   - PostgreSQL

2. **Compliance:**
   - Use CAB-safe terminology throughout (see spec)
   - Include all required disclosure pages
   - Add contextual compliance warnings
   - Never imply guaranteed approval or misleading claims

3. **Design Standards:**
   - Premium neobank aesthetic
   - High contrast, bold typography
   - Subtle animations (Framer Motion)
   - Mobile-first responsive design
   - Accessibility compliant (WCAG 2.1 AA)

4. **Features to Build:**
   - Full marketing site (19 pages)
   - Complete authentication system
   - 12-step loan wizard with autosave
   - Customer dashboard (11 pages)
   - Admin panel (8 pages)
   - Legal/compliance pages (6 pages)

### Implementation Approach

**Start with Phase 1 (Foundation & Design System):**

1. Initialize Next.js project:
   ```bash
   npx create-next-app@latest dollar-loans --typescript --tailwind --app
   ```

2. Set up project structure (use the structure from the spec)

3. Install dependencies:
   ```bash
   npm install @prisma/client prisma next-auth framer-motion lucide-react react-hook-form zod zustand
   npm install -D @types/node @types/react
   ```

4. Configure Tailwind with custom design tokens (colors, fonts, spacing from spec)

5. Build all base UI components first (buttons, inputs, cards, modals)

6. Create layout components (header, footer)

7. Test each component with different states

**Then proceed through phases 2-9 sequentially.**

### Quality Standards

- ✅ All TypeScript types must be defined
- ✅ All forms must have validation
- ✅ All API routes must have error handling
- ✅ All pages must be responsive
- ✅ All components must have loading states
- ✅ No hardcoded sensitive data
- ✅ Use environment variables for config
- ✅ Add comments for complex logic
- ✅ Follow Next.js best practices

### What Not to Do

- ❌ Don't skip validation
- ❌ Don't use plain HTTP for sensitive data
- ❌ Don't hardcode API endpoints
- ❌ Don't ignore error states
- ❌ Don't forget mobile responsiveness
- ❌ Don't add features not in the spec
- ❌ Don't use CAB-unsafe terminology

### Output Format

For each phase:
1. List files created/modified
2. Show key code snippets
3. Note any decisions or assumptions
4. Highlight any blockers or questions

### Ready to Build?

Confirm you understand the requirements, then begin with **Phase 1: Foundation & Design System**.

Ask questions if anything is unclear.

## BUILD PROMPT END

---

## 📊 Analytics Event Map

Track these events for conversion optimization:

```typescript
// Analytics Events
type AnalyticsEvent =
  // Marketing
  | 'visit_home'
  | 'prequal_start'
  | 'prequal_complete'
  | 'calculator_use'
  | 'faq_search'
  | 'page_view'

  // Auth
  | 'signup_start'
  | 'signup_complete'
  | 'login_success'
  | 'login_fail'
  | 'password_reset'

  // Wizard
  | 'wizard_start'
  | 'wizard_step_view'
  | 'wizard_step_complete'
  | 'wizard_step_back'
  | 'wizard_abandoned'
  | 'wizard_resume'

  // Vehicle
  | 'vehicle_added'
  | 'vehicle_photo_upload'
  | 'vehicle_valuation_view'

  // Application
  | 'application_submit'
  | 'upload_started'
  | 'upload_completed'
  | 'cab_disclosure_view'
  | 'cab_disclosure_accept'

  // Offer
  | 'offer_view'
  | 'offer_accept'
  | 'offer_decline'
  | 'esign_start'
  | 'esign_complete'

  // Funding
  | 'funding_status_view'
  | 'approval_received'
  | 'funding_complete'

  // Payments
  | 'payment_initiated'
  | 'payment_success'
  | 'payment_fail'
  | 'autopay_setup'

  // Support
  | 'support_contact'
  | 'ticket_created'
  | 'chat_started'

  // Referrals
  | 'referral_link_generated'
  | 'referral_link_shared';
```

---

## 🎯 Conversion Funnel Goals

### New Customer Funnel

```
Visit Homepage (100%)
    ↓ Target: 40%
Start Pre-Qualify (40%)
    ↓ Target: 70%
Complete Pre-Qualify (28%)
    ↓ Target: 50%
Create Account (14%)
    ↓ Target: 60%
Start Full Application (8.4%)
    ↓ Target: 80%
Complete Application (6.7%)
    ↓ Target: 70%
Accept Offer (4.7%)
    ↓ Target: 90%
Complete E-Sign (4.2%)
    ↓ Target: 95%
Get Funded (4.0%)
```

**Overall Conversion Target: 4% (Homepage Visit → Funded)**

### Returning Customer Funnel

```
Login (100%)
    ↓ Target: 30%
Start New Application (30%)
    ↓ Target: 90%
Accept Offer (27%)
    ↓ Target: 95%
Complete E-Sign (25.7%)
    ↓ Target: 98%
Get Funded (25.2%)
```

**Returning Customer Target: 25% (Login → Funded)**

---

## 🔒 Security Considerations

### Data Protection

1. **Encryption:**
   - All sensitive data encrypted at rest (SSN, bank info)
   - TLS 1.3 for data in transit
   - Encrypted backups

2. **Authentication:**
   - Password hashing (bcrypt)
   - Optional 2FA
   - Session management
   - Rate limiting on login attempts

3. **File Uploads:**
   - Virus scanning
   - File type validation
   - Size limits
   - Secure storage with signed URLs

4. **PII Handling:**
   - Minimal data collection
   - Clear retention policies
   - User data export/deletion
   - Audit logging

### Compliance Requirements

1. **Texas CAB License:**
   - Display license number
   - Follow CAB regulations
   - Proper disclosures

2. **Privacy:**
   - CCPA compliance
   - Privacy policy
   - Cookie consent
   - User rights (access, deletion)

3. **Fair Lending:**
   - No discriminatory practices
   - Clear terms
   - APR disclosure
   - Right to cancel

---

## 📞 Support & Maintenance

### Monitoring

- Uptime monitoring (99.9% target)
- Error tracking (Sentry)
- Performance monitoring (Vercel Analytics)
- User session recording (optional)

### Backup & Recovery

- Daily database backups
- Document storage backups
- Disaster recovery plan
- RTO: 4 hours
- RPO: 1 hour

### Updates & Maintenance

- Security patches (immediate)
- Feature updates (bi-weekly)
- Bug fixes (as needed)
- Compliance updates (as regulations change)

---

## 📝 Final Checklist

Before considering the project complete:

### Functionality
- [ ] All 48 pages built and functional
- [ ] All forms have validation
- [ ] All API endpoints work correctly
- [ ] Authentication works (signup, login, password reset)
- [ ] File uploads work
- [ ] Payment processing placeholder integrated
- [ ] E-signature flow works
- [ ] Admin panel functional

### Design
- [ ] Mobile responsive on all pages
- [ ] Consistent design system
- [ ] Animations smooth and purposeful
- [ ] Images optimized
- [ ] Typography hierarchy clear
- [ ] Colors accessible (contrast ratios)

### Performance
- [ ] Lighthouse scores 90+ on all metrics
- [ ] Core Web Vitals green
- [ ] Fast initial load (< 3s)
- [ ] Smooth interactions (no janky scrolling)

### SEO
- [ ] Meta tags on all pages
- [ ] Open Graph tags
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Structured data markup

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] ARIA labels where needed
- [ ] Focus indicators visible
- [ ] Color not sole indicator

### Security
- [ ] Environment variables configured
- [ ] No sensitive data in code
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Rate limiting on sensitive endpoints

### Compliance
- [ ] All CAB terminology correct
- [ ] Required disclosures present
- [ ] Privacy policy complete
- [ ] Terms of service complete
- [ ] Cookie policy if using cookies

### Testing
- [ ] Manual testing on all pages
- [ ] Form validation tested
- [ ] Error states tested
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile tested (iOS Safari, Chrome Android)

### Documentation
- [ ] README.md with setup instructions
- [ ] API documentation
- [ ] Component documentation
- [ ] Environment variables documented
- [ ] Deployment guide

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] All environment variables set in production
- [ ] Database migrations run
- [ ] Seed data loaded (if needed)
- [ ] CDN configured for static assets
- [ ] Email service configured
- [ ] SMS service configured (if used)
- [ ] Payment processor configured (if integrated)

### Monitoring Setup
- [ ] Error tracking (Sentry, etc.)
- [ ] Analytics (Google Analytics, etc.)
- [ ] Uptime monitoring
- [ ] Performance monitoring
- [ ] Log aggregation

### Post-Deployment
- [ ] Smoke tests on production
- [ ] Check all critical user paths
- [ ] Verify email delivery
- [ ] Test payment flow (if integrated)
- [ ] Monitor error rates
- [ ] Check performance metrics

---

## 🎉 Success Criteria

The project is successful when:

1. **Functionality:** All features work as specified
2. **Performance:** Meets all performance targets
3. **Design:** Looks premium and trustworthy
4. **Compliance:** Meets all legal requirements
5. **Conversions:** Achieves 4%+ homepage → funded conversion
6. **User Satisfaction:** 4.5+ star rating from users
7. **Uptime:** 99.9% availability
8. **Security:** Zero security incidents in first 90 days

---

## 📚 Resources & References

### Design Inspiration
- **Fintech:** Chime, Varo, Dave, Earnin
- **Automotive:** Tesla, Carvana, CarMax
- **Form Wizards:** TurboTax, Stripe onboarding

### Technical Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [NextAuth.js Docs](https://next-auth.js.org)

### Compliance Resources
- Texas Office of Consumer Credit Commissioner
- CFPB Regulations
- Texas Finance Code Chapter 393 (CAB Act)

---

## 🤝 Contributing

This spec is a living document. Updates should be made as:
- Regulations change
- User feedback is received
- Technical capabilities evolve
- Business requirements shift

**Document Version:** 1.0
**Last Updated:** December 15, 2025
**Maintained By:** Dollar Loans Product Team

---

## 📄 License

© 2025 Dollar Loans. Proprietary and Confidential.

This specification is proprietary to Dollar Loans and may not be shared, reproduced, or used without explicit written permission.

---

# END OF SPECIFICATION

**Ready to build? Use the BUILD PROMPT above with your AI coding assistant.**

**Questions? Contact the product team.**
