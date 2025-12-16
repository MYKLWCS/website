# 🚀 GEMINI: Build Dollar Loans - Complete Instructions

## Your Mission

Review ALL existing code, then complete and enhance everything to match the spec. Skip nothing.

---

## Step 1: Review Existing Work (30 minutes)

### A. Explore the `/src/` directory

```bash
# See what exists
ls -R src/

# Check key files
cat src/app/(dashboard)/dashboard/page.tsx
cat src/app/(auth)/auth/login/page.tsx
cat src/app/(dashboard)/admin/applications/page.tsx
```

### B. Document what you find

Create a file: `/src/EXISTING_WORK_REVIEW.md` with:

```markdown
# Existing Work Review

## Dashboard Pages:
- [ ] /dashboard - [Status: Working/Broken/Basic]
- [ ] /dashboard/get-cash - [Status: ...]
- [ ] /dashboard/vehicles - [Status: ...]
[etc... review all 11]

## Admin Pages:
- [ ] /admin - [Status: ...]
- [ ] /admin/applications - [Status: ...]
[etc... review all 8]

## Auth Pages:
- [ ] /auth/login - [Status: ...]
[etc... review all 4]

## API Routes:
- [ ] /api/partner/leads - [Status: ...]
[etc... list all found]

## Components:
- List any components found in /src/components/

## What's Good:
- [List what's well-done]

## What Needs Work:
- [List what needs enhancement]

## What's Missing:
- [ ] All marketing pages (19 pages)
- [ ] UI component library
- [ ] Header & Footer
- [ ] Prisma schema
- [etc...]
```

---

## Step 2: Read The Complete Spec (30 minutes)

Open and read: **`DOLLAR_LOANS_BUILD_SPEC.md`**

Pay attention to:
- Premium marketing strategy (pages 133-336)
- All 60+ page specifications
- 25 advanced AI features (pages 1772-2097)
- 15 trust-building systems (pages 2100-2385)
- 200+ image specifications with Nano Banana prompts (pages 489-994)
- Design system (colors, fonts, animations)
- Complete database schema
- All API endpoints

---

## Step 3: Your Complete Build Checklist

### PRIORITY 1: Marketing Site (CRITICAL - 6 hours)

**Build ALL 19 pages in `/src/app/(public)/`:**

#### 1. Homepage `/`
**Must include:**
- Hero section with gradient background
- Headline: "The Premium Way to Borrow Against Your Vehicle"
- Subheading: "Fast, transparent, and secure title loans for qualified Texans"
- Pre-qualify form (3 fields: Vehicle Year/Make/Model, Mileage, Desired Amount)
- [Check My Rate in 60 Seconds] CTA button
- Trust bar: "🔒 Bank-Level Security | ⭐ 4.8/5 Stars | ✅ 10,000+ Customers | 📝 Texas Licensed"
- 3-step process cards (Apply → Approved → Get Cash)
- Stats counter with animated count-up:
  - $50M+ Loans Funded
  - 10,000+ Happy Customers
  - 4.9 Rating
  - 47min Avg Approval
- "Why Dollar Loans" section (4 features)
- Customer testimonials (3 cards minimum)
- Final CTA section
- All animations with Framer Motion

Build this first! It's the most important page.

#### 2. `/how-it-works` - Process Explanation
- Step-by-step breakdown (6-8 steps)
- Process infographic (placeholder with Nano Banana prompt)
- Timeline visual
- Video placeholder
- FAQ section
- CTA

#### 3. `/cab-model-explained` - Trust Page
- "What is a CAB" section
- Why CAB model exists
- Fee structure explanation with charts
- Consumer rights
- Complaint process
- Comparison: CAB vs Traditional Lender
- Educational infographics

#### 4. `/rates-fees` - Pricing Page
- APR ranges by credit tier (table)
- Fee breakdown with disclaimers
- 3-4 example scenarios:
  - $5,000 / 12 months example
  - $10,000 / 18 months example
  - etc.
- Interactive payment calculator
- "No hidden fees" guarantee badge
- CTA

#### 5. `/calculator` - Interactive Calculator
**Build interactive calculator with:**
- Vehicle inputs:
  - Year (dropdown 2024-2000)
  - Make (dropdown with all major brands)
  - Model (filtered by make)
  - Mileage (number input)
  - Condition (slider: Poor > Fair > Good > Excellent)
- Loan inputs:
  - Desired amount (slider: $1K-$25K)
  - Term (buttons: 6, 12, 18, 24 months)
- Real-time results:
  - Estimated loan range
  - Monthly payment
  - Total cost
  - APR
- "Lock your estimate" CTA
- Disclaimers

#### 6-19. Build remaining pages:
- `/eligibility` - Checklist UI
- `/vehicle-value` - Valuation explainer
- `/faq` - Comprehensive Q&A (50+ questions)
- `/reviews` - Testimonials (12+ customer cards)
- `/about` - Team, mission, office photos
- `/contact` - Form, map, info
- `/blog` & `/blog/[slug]` - Content hub
- `/locations` - Texas offices
- `/careers` - Job listings
- `/press` - Press releases
- `/security-trust` - Security page
- `/partners` - Partner info
- `/partners/affiliate-program` - Affiliate details
- `/developers` - API documentation

---

### PRIORITY 2: UI Component Library (2 hours)

**Build in `/src/components/ui/`:**

#### Base Components:
1. **button.tsx**
```typescript
// 4 variants: primary, secondary, tertiary, ghost
// 3 sizes: sm, md, lg
// Loading state with spinner
// Disabled state
// TypeScript props
```

2. **input.tsx**
```typescript
// Text, email, phone, number, password types
// Label, error, helperText props
// Validation display
// Icons support
```

3. **card.tsx**
```typescript
// 3 variants: default, bordered, elevated
// CardHeader, CardTitle, CardContent subcomponents
// Hover effects
```

4. **select.tsx** - Custom styled dropdown
5. **checkbox.tsx** - Custom styled
6. **radio.tsx** - Custom styled
7. **switch.tsx** - Toggle switch
8. **slider.tsx** - Range slider
9. **badge.tsx** - Status badges
10. **tag.tsx** - Category tags
11. **modal.tsx** - Dialog/popup
12. **toast.tsx** - Notifications
13. **alert.tsx** - Alerts
14. **tooltip.tsx** - Tooltips
15. **dropdown-menu.tsx** - Context menus
16. **tabs.tsx** - Tab navigation
17. **accordion.tsx** - Collapsible content
18. **progress-bar.tsx** - Progress indicator
19. **stepper.tsx** - Multi-step indicator
20. **skeleton.tsx** - Loading skeleton
21. **empty-state.tsx** - No data state
22. **file-upload.tsx** - File upload with drag & drop
23. **date-picker.tsx** - Date picker
24. **phone-input.tsx** - Formatted phone input
25. **currency-input.tsx** - Formatted currency input

---

### PRIORITY 3: Layouts (1 hour)

**Build in `/src/components/layouts/`:**

#### header.tsx
```typescript
// Sticky header
// Logo (left)
// Desktop nav: How It Works, Calculator, Eligibility, About, Contact
// Mobile hamburger menu
// CTAs: Login (ghost), Check Your Rate (primary)
// Trust badge in header
// Smooth animations
```

#### footer.tsx
```typescript
// 4 columns: Company Info, Products, Company, Legal
// Social icons
// Trust badges row
// Newsletter signup
// Copyright + CAB disclaimer
```

#### dashboard-header.tsx
```typescript
// User avatar + name
// Notifications bell
// Quick actions dropdown
// Logout
```

#### dashboard-sidebar.tsx
```typescript
// Navigation for 11 dashboard pages
// Icons for each
// Active state highlighting
// Collapsible on mobile
```

---

### PRIORITY 4: Review & Enhance Existing Pages (3 hours)

#### Dashboard Pages (enhance what exists):
- `/dashboard` - Add animations, polish design, add widgets
- `/dashboard/get-cash` - Complete all 12 wizard steps
- `/dashboard/vehicles` - Add photo upload, improve UX
- `/dashboard/applications` - Add filtering, sorting
- `/dashboard/agreements` - Add payment schedule visualization
- `/dashboard/payments` - Add payment methods, history
- `/dashboard/documents` - Add drag & drop upload
- `/dashboard/profile` - Add all sections with validation
- `/dashboard/settings` - Add all tabs (Security, Notifications, etc.)
- `/dashboard/support` - Add ticket system, chat widget placeholder
- `/dashboard/referrals` - Add tracking, stats, tiers

#### Admin Pages (enhance what exists):
- `/admin` - Add dashboard with charts
- `/admin/applications` - Add filters, detail modals
- `/admin/customers` - Add search, customer detail views
- `/admin/vehicles` - Add photo viewer, valuation tracking
- `/admin/offers` - Add offer editing, approval flow
- `/admin/doc-review` - Add document viewer, approval UI
- `/admin/payments` - Add payment processing, history
- `/admin/rules` - Add rule configuration UI
- `/admin/audit` - Add audit log viewer with filters

#### Auth Pages (enhance what exists):
- `/auth/login` - Add validation, loading states, error handling
- `/auth/signup` - Add password strength, email verification flow
- `/auth/forgot-password` - Add success states, email confirmation
- `/auth/mfa` - Add 6-digit code input, resend option

---

### PRIORITY 5: Complete Get Cash Wizard (2 hours)

**Build all 12 steps in `/dashboard/get-cash`:**

Create wizard with:
- Progress stepper (1-12 showing current step)
- Back button always available
- Auto-save to localStorage
- Step validation before proceeding
- Mobile responsive

**All 12 Steps:**
1. Goal & Amount (slider, urgency)
2. Vehicle Quick Details (VIN, year, make, model, mileage, condition)
3. Instant Estimate Range (display card, require login)
4. Vehicle Deep Profile (trim, condition notes, title status)
5. Vehicle Photo Upload (7 photos with guidance overlays)
6. Borrower Identity (name, DOB, SSN, DL, address)
7. Income & Employment (status, employer, income, paystub)
8. Banking (Plaid or manual entry)
9. CAB Disclosures (checkboxes with expandable content)
10. Offer Presentation (full cost breakdown, payment schedule)
11. E-Sign (document viewer, signature canvas, confirmations)
12. Funding Tracker (status timeline, next steps, contact info)

---

### PRIORITY 6: Legal Pages (1 hour)

**Build in `/src/app/legal/`:**
- `/legal/terms` - Terms of Service
- `/legal/privacy` - Privacy Policy (CCPA compliant)
- `/legal/cab-disclosures` - Texas CAB disclosures
- `/legal/texas-disclosures` - State-specific disclosures
- `/legal/cookies` - Cookie policy
- `/legal/complaints` - Complaint resolution process

---

### PRIORITY 7: API Routes (2 hours)

**Complete in `/src/app/api/`:**

#### Authentication:
- `/api/auth/[...nextauth]/route.ts` - NextAuth config
- `/api/auth/signup/route.ts` - Registration
- `/api/auth/verify-email/route.ts` - Email verification

#### Applications:
- `/api/applications/route.ts` - GET all, POST create
- `/api/applications/[id]/route.ts` - GET, PATCH, DELETE
- `/api/applications/[id]/estimate/route.ts` - Calculate estimate
- `/api/applications/[id]/submit/route.ts` - Submit
- `/api/applications/[id]/approve/route.ts` - Approve
- `/api/applications/[id]/decline/route.ts` - Decline

#### Vehicles:
- `/api/vehicles/route.ts` - GET all, POST create
- `/api/vehicles/[id]/route.ts` - GET, PATCH, DELETE
- `/api/vehicles/[id]/photos/route.ts` - Upload
- `/api/vehicles/[id]/valuation/route.ts` - Valuation
- `/api/vehicles/lookup/route.ts` - VIN/plate lookup

#### Complete all other routes (payments, documents, users, support, etc.)

---

### PRIORITY 8: Database Schema (1 hour)

**Create `/src/lib/prisma/schema.prisma`:**

Include ALL models:
- User, Address, Employment, BankAccount
- Vehicle, VehiclePhoto
- Application, Offer, Agreement
- PaymentSchedule, Payment
- Document, SupportTicket, TicketMessage
- AnalyticsEvent, AdminUser, AuditLog

With:
- All relationships (1-to-1, 1-to-many, many-to-many)
- All indexes for performance
- All enums for type safety
- All constraints

---

### PRIORITY 9: Animations & Polish (2 hours)

**Add Framer Motion throughout:**

#### Page Transitions:
- Fade in on mount
- Smooth route transitions

#### Homepage Animations:
- Hero: Staggered fade-up (headline > subhead > form > trust bar)
- Process cards: Slide in on scroll
- Stats counter: Animated count-up when in viewport
- Testimonials: Fade in on scroll

#### Interactive Animations:
- Buttons: Hover scale(1.02), click scale(0.98)
- Cards: Hover lift translateY(-4px) + shadow increase
- Inputs: Focus border glow animation
- Modals: Fade in overlay, scale in content
- Toasts: Slide in from top-right
- Success states: Checkmark draw-in animation

#### Wizard Animations:
- Step transitions: Slide left/right
- Progress bar: Smooth fill
- Completion: Confetti or celebration animation

---

### PRIORITY 10: Image Placeholders (1 hour)

**For every image in spec, create placeholder:**

```typescript
<ImagePlaceholder
  src="/images/heroes/hero-1.webp"
  alt="Professional with car"
  width={1920}
  height={1080}
  nanoBananaPrompt="Professional woman, 35, standing confidently next to Honda CR-V, suburban home driveway, warm morning light, premium automotive photography style, shot on Sony A7IV, shallow depth of field, aspirational lifestyle imagery, 8K resolution"
  priority={true}
/>
```

Component should:
- Render colored placeholder div (correct aspect ratio)
- Show alt text overlay
- Display "Generate with Nano Banana" badge
- Include copy button for prompt
- Show image dimensions

**Create 200+ placeholders for:**
- Homepage (25 images)
- Marketing pages (40 images)
- Dashboard (30 images)
- Infographics (60 images)
- Icons (28 images)
- Marketing assets (20 images)

---

## Step 4: Quality Verification

### Before Saying "Done", Check:

#### Functionality ✓
- [ ] Can visitor land on homepage and see content
- [ ] Can visitor fill pre-qualify form
- [ ] Can user sign up (form validates, submits)
- [ ] Can user login (auth works)
- [ ] Can user complete wizard (all 12 steps work)
- [ ] Can user navigate dashboard (all pages load)
- [ ] Can admin login and view applications
- [ ] All links work (no 404s)
- [ ] All forms validate correctly
- [ ] All buttons respond to clicks

#### Design ✓
- [ ] Homepage looks premium (Fortune 500 quality)
- [ ] Mobile responsive on ALL pages
- [ ] Animations are smooth (60fps)
- [ ] No layout shifts or jumps
- [ ] Colors consistent with design system
- [ ] Typography hierarchy clear
- [ ] Spacing consistent (uses Tailwind properly)
- [ ] Hover states work on all interactive elements
- [ ] Loading states show for async actions
- [ ] Error states are user-friendly

#### Content ✓
- [ ] No "Lorem ipsum" or placeholder text
- [ ] All headings are clear and descriptive
- [ ] All CTAs have action-oriented labels
- [ ] All forms have labels and placeholders
- [ ] All validation messages are helpful
- [ ] All empty states have guidance
- [ ] All 404/error pages exist

#### Technical ✓
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] All imports resolve
- [ ] Code is formatted (Prettier)
- [ ] Components are reusable
- [ ] No hardcoded sensitive data
- [ ] Environment variables used for config

#### Performance ✓
- [ ] Images are optimized (Next.js Image component)
- [ ] Routes are code-split
- [ ] No unnecessary re-renders
- [ ] Animations don't cause jank
- [ ] Initial page load < 3 seconds

#### Accessibility ✓
- [ ] Can navigate with keyboard (Tab works)
- [ ] Focus indicators visible
- [ ] ARIA labels on interactive elements
- [ ] Alt text on all images
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Form errors are announced

---

## Step 5: Documentation

**Create `/src/BUILD_COMPLETE.md`:**

```markdown
# Build Complete ✅

## Summary
- Date completed: [date]
- Total time: [X hours]
- Total files created/modified: [X]

## What Was Built

### Marketing Site:
- [x] Homepage - Full hero, pre-qualify, stats, testimonials
- [x] How It Works - 8-step process, infographics
- [x] CAB Model Explained - Trust page, fee breakdown
- [... list all 19]

### Dashboard:
- [x] Dashboard Home - Enhanced with animations, widgets
- [... list all 11]

### Admin:
- [x] Admin Dashboard - Charts, metrics, filters
- [... list all 8]

### Components:
- [x] Button - 4 variants, loading states
- [x] Input - Validation, error display
- [... list all 25+]

### API Routes:
- [x] /api/applications/* - Full CRUD
- [... list all routes]

### Database:
- [x] Prisma schema - 20 models, all relationships

### Images:
- [x] 200+ placeholders with Nano Banana prompts

## What Was Enhanced (from existing code)
- Dashboard pages: Added animations, improved layouts
- Admin pages: Added filtering, better UX
- Auth pages: Added validation, loading states

## Stats
- Total pages: 60+
- Total components: 50+
- Total API routes: 40+
- Lines of code: ~15,000

## Testing Completed
- [x] Homepage loads and looks great
- [x] Pre-qualify form works
- [x] Sign up flow works
- [x] Login works
- [x] Dashboard loads
- [x] Wizard navigates through steps
- [x] Mobile responsive verified
- [x] All links tested

## Known Issues / TODOs
- None! Everything works.
- Ready for image generation with Nano Banana
- Ready for database connection
- Ready for deployment

## Screenshots
[Include screenshots of key pages]

## Next Steps
1. Generate all images with Nano Banana
2. Replace placeholders with real images
3. Connect to production database
4. Deploy to Vercel/Netlify
```

---

## Step 6: Deliver

**Provide Michael with:**

1. **Summary** of what you built
2. **Screenshots** of key pages (homepage, dashboard, calculator, wizard)
3. **`BUILD_COMPLETE.md`** documenting everything
4. **List of questions** (if any)

---

## 🎯 Quality Standards

Remember:
- **Fortune 500 quality** - Premium, polished, professional
- **No shortcuts** - Build it right, build it complete
- **Mobile-first** - Looks perfect on phone, tablet, desktop
- **Smooth animations** - Framer Motion, 60fps
- **Accessible** - Keyboard nav, ARIA labels, color contrast
- **Fast** - Optimized images, code splitting
- **Secure** - No vulnerabilities, proper validation

This must be the **BEST title loan website ever created**.

---

## 📞 Questions?

If stuck:
1. Check `DOLLAR_LOANS_BUILD_SPEC.md` first
2. Look at code examples in `BUILD_STATUS.md`
3. Review existing code for patterns
4. Ask Michael if truly blocked

---

## 🚀 Ready? Start Building!

1. Review existing code (30 min)
2. Read spec (30 min)
3. Build homepage (2 hours)
4. Build rest of marketing site (4 hours)
5. Build components (2 hours)
6. Enhance existing pages (3 hours)
7. Add polish & animations (2 hours)
8. Test everything (1 hour)
9. Document & deliver (30 min)

**Total: ~16 hours of focused work**

**YOU GOT THIS! 💪**

**Start now. Build amazing things. Show Michael when done!**
