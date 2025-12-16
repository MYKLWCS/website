# 🎯 GEMINI: Start Here

## Your Task

Complete the Dollar Loans vehicle title loan platform. Claude has set up the foundation, existing work has been done by GPT Codex. Now you finish it to perfection.

---

## 📚 Documents to Read (IN ORDER)

1. **THIS FILE** - Start here (you're reading it now)
2. **`DOLLAR_LOANS_BUILD_SPEC.md`** - Complete specification (READ FULLY)
3. **`BUILD_STATUS.md`** - Detailed checklist of what to build
4. **`GEMINI_HANDOFF.md`** - Your specific instructions
5. **`GEMINI_BUILD_INSTRUCTIONS.md`** - Step-by-step Phase 1 guide

---

## 🗂️ Project Structure

You have TWO directories:

### `/src/` - Existing Work (GPT Codex)
Contains:
- Dashboard pages (many done)
- Admin pages (many done)
- Auth pages (done)
- Some API routes

### `/dollar-loans-app/` - New Foundation (Claude)
Contains:
- Updated package.json with all dependencies
- Tailwind config with premium design system
- TypeScript config
- Complete type definitions
- Project structure

---

## ✅ What Claude Built

- [x] Project initialization
- [x] All dependencies installed
- [x] Folder structure created
- [x] Tailwind configured with premium colors
- [x] TypeScript types defined
- [x] Configuration files
- [x] Complete build documentation

---

## 🚧 What You Must Build

### CRITICAL PRIORITY: Marketing Site (Nothing exists yet!)

**Build ALL 19 public pages:**
1. Homepage - Hero, pre-qualify form, stats, testimonials
2. How It Works - Process explanation
3. CAB Model Explained - Trust page
4. Rates & Fees - Pricing transparency
5. Calculator - Interactive loan calculator
6. Eligibility - Requirements checklist
7. Vehicle Value - Valuation explainer
8. FAQ - Comprehensive Q&A
9. Reviews - Customer testimonials
10. About - Team, mission, values
11. Contact - Forms, address, map
12. Blog - Content hub
13. Locations - Texas offices
14. Careers - Job listings
15. Press - Media releases
16. Security & Trust - Security info
17. Partners - Partner overview
18. Partners/Affiliate - Affiliate program
19. Developers - API documentation

### Plus:
- Complete UI component library (25+ components)
- Header & Footer layouts
- Enhance existing dashboard/admin pages
- Complete 12-step Get Cash wizard
- All API routes
- Prisma database schema
- 200+ image placeholders
- Animations throughout
- Mobile responsive everything

---

## 🎯 Your Action Plan

### Step 1: Review Existing Work (10 min)
```bash
# See what's in the existing src folder
ls -R src/app/

# Check a few existing pages
cat src/app/(dashboard)/dashboard/page.tsx
cat src/app/(auth)/auth/login/page.tsx
```

**Note what works, what needs enhancement**

### Step 2: Set Up Your Workspace (5 min)
- Decide: Enhance `/src/` OR move to `/dollar-loans-app/`
- Recommendation: Use `/src/` (has more done), add Claude's configs
- Copy over: tailwind.config.ts, types/index.ts to `/src/`

### Step 3: Build Marketing Site (HIGHEST PRIORITY - 4 hours)
Start with homepage, then build all 19 pages using the spec

### Step 4: Build UI Components (2 hours)
Create complete component library in `components/ui/`

### Step 5: Build Layouts (1 hour)
Header, Footer, Dashboard layouts

### Step 6: Enhance Existing Pages (2 hours)
Polish dashboard, admin, auth pages

### Step 7: Complete Wizard (2 hours)
All 12 steps of Get Cash wizard

### Step 8: API & Database (2 hours)
Prisma schema, API routes

### Step 9: Polish & Animations (2 hours)
Framer Motion, microinteractions

### Step 10: Testing (1 hour)
Test all pages, all forms, all flows

---

## 📋 Quality Standards

This must be:
- ✅ The BEST title loan website ever created
- ✅ Fortune 500-level design quality
- ✅ Better than every competitor
- ✅ Mobile-first responsive
- ✅ Smooth animations (60fps)
- ✅ Accessible (WCAG 2.1 AA)
- ✅ Fast (Lighthouse 90+)
- ✅ Secure (no vulnerabilities)
- ✅ Production-ready code

---

## 🎨 Design Principles

### Colors:
- Primary Blue: #2563eb (trust, authority)
- Success Green: #10b981 (positive actions)
- Gold Accent: #f59e0b (premium features)

### Typography:
- Font: Inter (sans-serif)
- Hierarchy: Clear, bold headings
- Readable: 16px base, 1.5 line height

### Spacing:
- Generous whitespace
- Consistent padding/margins
- Breathing room everywhere

### Animations:
- Subtle, purposeful
- Enhance understanding
- Never gimmicky
- 200-400ms duration

---

## 💬 Messaging Framework

**Use this language:**

### Homepage Hero Options:
1. "The Premium Way to Borrow Against Your Vehicle"
2. "Vehicle Title Loans Done Right"
3. "Fast, Fair, and Transparent Title Loans"

### Value Props (use everywhere):
1. **Speed** - "Cash in hours, not days"
2. **Trust** - "Licensed, secure, transparent"
3. **Simplicity** - "Apply in 10 minutes"
4. **Fairness** - "Competitive rates for qualified borrowers"
5. **Flexibility** - "No prepayment penalties"

### Social Proof:
- "10,000+ satisfied customers"
- "$50M+ in loans funded"
- "4.9/5 star rating"
- "47 min average approval time"

### Trust Badges (display everywhere):
- 🔒 Bank-Level Security
- ⭐ 4.8/5 Stars
- ✅ Texas Licensed
- 🏆 10,000+ Happy Customers

---

## 🚫 What to Avoid

- ❌ Don't say "guaranteed approval"
- ❌ Don't say "lowest rates guaranteed"
- ❌ Don't use predatory language
- ❌ Don't look cheap or sketchy
- ❌ Don't skip features
- ❌ Don't use placeholder text like "Lorem ipsum"
- ❌ Don't leave broken links
- ❌ Don't forget mobile responsive

---

## 📸 Image Strategy

For every image:
1. Create placeholder div with correct aspect ratio
2. Add descriptive alt text
3. Include Nano Banana generation prompt as comment
4. Add "Generate with Nano Banana" badge
5. Make prompt copyable

Example:
```tsx
{/*
  TODO: Generate with Nano Banana
  Prompt: "Professional woman, 35, standing confidently next to Honda CR-V,
          suburban driveway, warm morning light, professional automotive
          photography, 8K resolution"
*/}
<div className="bg-gradient-to-br from-blue-100 to-blue-200 aspect-video rounded-lg flex items-center justify-center">
  <span className="text-gray-500">
    Hero Image 1 - Professional with Car
  </span>
</div>
```

---

## 🧪 Testing Checklist

Before saying "done":

### Functionality:
- [ ] Can visitor fill pre-qualify form
- [ ] Can user sign up
- [ ] Can user login
- [ ] Can user complete wizard (all 12 steps)
- [ ] Can user view dashboard
- [ ] Can admin review application
- [ ] All links work
- [ ] All forms validate
- [ ] All buttons respond

### Design:
- [ ] Looks premium on desktop
- [ ] Looks great on mobile
- [ ] Animations smooth
- [ ] No layout shifts
- [ ] Colors consistent
- [ ] Typography hierarchy clear
- [ ] Spacing consistent

### Content:
- [ ] All pages have real content (no Lorem ipsum)
- [ ] All CTAs have clear labels
- [ ] All forms have labels + validation messages
- [ ] All empty states have helpful text
- [ ] All error messages are user-friendly

---

## 📤 When Complete

### Deliverables:

1. **Code:**
   - All 60+ pages built
   - All components functional
   - All APIs stubbed
   - Database schema complete

2. **Screenshots** of:
   - Homepage (desktop + mobile)
   - Dashboard
   - Calculator page
   - Wizard (steps 1, 5, 10)
   - Admin panel

3. **Build Report:**
   ```markdown
   # Build Complete ✅

   ## Summary:
   - Total pages: XX
   - Total components: XX
   - Total API routes: XX
   - Total time: XX hours

   ## What's New:
   - All marketing pages
   - Complete component library
   - Enhanced dashboard
   - [etc...]

   ## What Was Enhanced:
   - Dashboard pages (added animations, polish)
   - Admin pages (improved UX)
   - [etc...]

   ## Ready for:
   - Image generation with Nano Banana
   - Database connection
   - Production deployment
   ```

4. **Known Issues:**
   - List anything incomplete
   - List any questions

---

## 🆘 Need Help?

- Check the spec: `DOLLAR_LOANS_BUILD_SPEC.md`
- Check the build guide: `BUILD_STATUS.md`
- Check detailed instructions: `GEMINI_HANDOFF.md`
- Ask Michael if truly stuck

---

## 🚀 LET'S GO!

**Start now:**

1. Read `DOLLAR_LOANS_BUILD_SPEC.md` (skim it, 10 min)
2. Review existing `/src/` code (5 min)
3. Start building marketing homepage (start here!)
4. Work through checklist systematically
5. Test as you go
6. Report back when done!

**Remember:** This must be the BEST title loan website ever. No shortcuts. Premium quality only.

**You got this! 💪**

---

## One-Line Command to Start:

```bash
cd "/home/michael-wolf/Desktop/Dollar Loans Website/src" && npm run dev
```

Then start building in the `/src/app/(public)/` folder!
