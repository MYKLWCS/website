# 🎯 GEMINI: Complete This Build

## Situation

There are TWO Dollar Loans projects in this directory:

1. **`/src/` folder** - Previous work by GPT Codex (partial build)
2. **`/dollar-loans-app/` folder** - New foundation by Claude (infrastructure setup)

## Your Mission

**Merge the best of both + complete EVERYTHING missing to match the spec.**

---

## Step 1: Audit Existing Work

### Check `/src/app/` folder:
```bash
# See what pages exist
ls -R src/app/
```

**Pages that appear to exist:**
- Dashboard pages (✓ many done)
- Admin pages (✓ many done)
- Auth pages (✓ done)
- API routes (✓ some done)

**What's MISSING (you must build):**
- [ ] All 19 PUBLIC marketing pages (homepage, how-it-works, calculator, etc.)
- [ ] All 6 legal pages
- [ ] Complete UI component library
- [ ] Header & Footer layouts
- [ ] Prisma database schema
- [ ] All API routes (many missing)
- [ ] Image placeholders with Nano Banana prompts
- [ ] Animations throughout
- [ ] Premium design polish

---

## Step 2: Review The Existing Code

### Look at what's already built:
```bash
# Check dashboard pages
cat src/app/(dashboard)/dashboard/page.tsx

# Check admin pages
cat src/app/(dashboard)/admin/applications/page.tsx

# Check auth pages
cat src/app/(auth)/auth/login/page.tsx

# Check API routes
cat src/app/api/partner/leads/route.ts
```

### Questions to answer:
1. Are these pages functional or just placeholders?
2. Do they follow the premium design from our spec?
3. Are they using proper TypeScript types?
4. Do they have animations?
5. Are they mobile-responsive?

---

## Step 3: Your Build Plan

### Priority 1: Marketing Site (CRITICAL - Nothing exists yet)

**Build ALL 19 public pages in `/src/app/(public)/`:**

1. `/` - Homepage
   - Hero with 5 A/B test variations
   - Pre-qualify form
   - Trust bar
   - 3-step process
   - Stats counter
   - Everything from spec

2. `/how-it-works` - Process explanation
3. `/cab-model-explained` - Trust page
4. `/rates-fees` - Pricing page
5. `/calculator` - Interactive calculator
6. `/eligibility` - Requirements checklist
7. `/vehicle-value` - Valuation explainer
8. `/faq` - Comprehensive FAQ
9. `/reviews` - Testimonials
10. `/about` - Company page with team
11. `/contact` - Contact page
12. `/blog` - Blog index
13. `/blog/[slug]` - Blog post template
14. `/locations` - Office locations
15. `/careers` - Job listings
16. `/press` - Press releases
17. `/security-trust` - Security page
18. `/partners` - Partner overview
19. `/partners/affiliate-program` - Affiliate details
20. `/developers` - API docs

### Priority 2: Complete UI Components

**Build in `/src/components/ui/`:**
- button.tsx (4 variants, loading states)
- input.tsx (with validation display)
- textarea.tsx
- select.tsx (custom styled)
- checkbox.tsx
- radio.tsx
- switch.tsx
- slider.tsx
- card.tsx (3 variants)
- badge.tsx
- tag.tsx
- modal.tsx
- toast.tsx
- alert.tsx
- tooltip.tsx
- dropdown-menu.tsx
- tabs.tsx
- accordion.tsx
- progress-bar.tsx
- stepper.tsx
- skeleton.tsx
- empty-state.tsx
- file-upload.tsx
- date-picker.tsx
- phone-input.tsx
- currency-input.tsx

### Priority 3: Layouts

**Build in `/src/components/layouts/`:**
- header.tsx - Premium marketing site header
- footer.tsx - Comprehensive footer
- dashboard-header.tsx
- dashboard-sidebar.tsx

### Priority 4: Enhance Existing Pages

**Review and improve:**
- Dashboard pages - Add animations, polish design
- Admin pages - Ensure all features work
- Auth pages - Add form validation, loading states
- Get Cash wizard - Complete all 12 steps

### Priority 5: Database & API

**Create `/src/lib/prisma/schema.prisma`:**
- All models from spec (User, Vehicle, Application, etc.)
- All relationships
- All indexes

**Complete all API routes in `/src/app/api/`:**
- Check what exists
- Build what's missing
- Test all endpoints

### Priority 6: Polish & Animations

**Add throughout:**
- Framer Motion page transitions
- Scroll animations
- Hover effects
- Loading states
- Success animations
- Microinteractions

### Priority 7: Images

**Create placeholder system:**
- 200+ image placeholders
- Each with Nano Banana prompt
- Organized by category
- Copy-to-clipboard feature

---

## Step 4: Quality Checklist

Before saying "done", verify:

### Functionality ✓
- [ ] All 60+ pages exist and render
- [ ] All forms have validation
- [ ] All API routes respond
- [ ] Navigation works (all links)
- [ ] Mobile menu works
- [ ] Modals open/close
- [ ] Tooltips display
- [ ] Dropdowns work

### Design ✓
- [ ] Matches premium design system (colors, fonts, spacing)
- [ ] Looks like Fortune 500 company
- [ ] Mobile responsive on ALL pages
- [ ] Animations smooth (60fps)
- [ ] Hover states on interactive elements
- [ ] Loading states everywhere
- [ ] Error states user-friendly
- [ ] Success states celebratory

### Content ✓
- [ ] All marketing copy written (use spec messaging framework)
- [ ] All page titles/meta tags
- [ ] All buttons have clear labels
- [ ] All forms have labels + placeholders
- [ ] All error messages helpful
- [ ] All empty states have guidance

### Technical ✓
- [ ] TypeScript strict mode (no `any` types)
- [ ] All imports resolve
- [ ] No console errors
- [ ] Proper file structure
- [ ] Code formatted (Prettier)
- [ ] Components reusable
- [ ] API routes have error handling

### Performance ✓
- [ ] Images optimized
- [ ] Code split by route
- [ ] Lazy loading implemented
- [ ] No unnecessary re-renders
- [ ] Fast initial load

### Accessibility ✓
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels on interactive elements
- [ ] Alt text on images
- [ ] Color contrast meets WCAG AA

---

## Step 5: Testing Flow

**Test these critical paths:**

1. **Visitor → Application:**
   - Land on homepage
   - Fill pre-qualify form
   - See estimate
   - Click "Continue"
   - Create account
   - Complete 12-step wizard
   - Submit application

2. **Dashboard Navigation:**
   - Login
   - View dashboard
   - Navigate to each page
   - Add vehicle
   - View applications
   - Make payment
   - Upload document
   - Create support ticket
   - Generate referral link

3. **Admin Flow:**
   - Admin login
   - View dashboard stats
   - Review pending application
   - Approve application
   - Review document
   - Process payment
   - View audit logs

4. **Mobile Experience:**
   - Test homepage on mobile
   - Test navigation menu
   - Test forms on mobile
   - Test dashboard on mobile

---

## Step 6: Documentation

**Create `/src/README.md` with:**
- Setup instructions
- Environment variables needed
- How to run development server
- How to build for production
- How to run database migrations
- How to seed database
- Project structure explanation
- Key features list

---

## Step 7: Final Deliverable

### When Complete, Provide:

1. **Screenshots** of:
   - Homepage (desktop & mobile)
   - How It Works page
   - Calculator page
   - Dashboard
   - Get Cash wizard (step 1, 5, 10)
   - Admin panel

2. **Summary Report:**
   ```markdown
   # Build Complete ✅

   ## What Was Built:
   - [x] 60+ pages (list them)
   - [x] 50+ UI components (list them)
   - [x] Complete database schema
   - [x] 40+ API endpoints (list them)
   - [x] 200+ image placeholders
   - [x] Animations throughout
   - [x] Mobile responsive
   - [x] Fully functional

   ## What Exists from Previous Work:
   - Dashboard pages (enhanced)
   - Admin pages (enhanced)
   - Auth pages (enhanced)
   - Some API routes (completed)

   ## Stats:
   - Total files: XXX
   - Total lines of code: XXX
   - Components: XXX
   - Pages: XXX
   - API routes: XXX

   ## Next Steps:
   1. Generate images with Nano Banana
   2. Connect to real database
   3. Set up authentication
   4. Deploy to production
   ```

3. **Known Issues / TODOs:**
   - List anything not completed
   - List any assumptions made
   - List any questions

---

## Important Reminders

### Use the Spec!
- **Read**: `DOLLAR_LOANS_BUILD_SPEC.md`
- **Follow**: All design guidelines
- **Implement**: All features listed
- **Match**: Marketing messaging framework
- **Include**: All trust-building elements

### Premium Quality Only
- This must look like a $10M website
- Better than ANY competitor
- Users should say "Wow, this is legit"
- Trustworthy, modern, professional

### No Shortcuts
- Don't skip pages
- Don't use "Coming soon" placeholders
- Build real, functional features
- Write actual content (use spec for copy)

### Ask Questions
- If anything is unclear, ask
- If you need clarification on design, ask
- If you're unsure about functionality, ask
- Better to ask than guess wrong

---

## 🚀 Ready? Let's Build!

1. Start by auditing what exists in `/src/`
2. Build the marketing site (highest priority)
3. Complete UI components
4. Enhance existing pages
5. Add animations and polish
6. Test everything
7. Report back with screenshots!

**LET'S MAKE THIS THE BEST TITLE LOAN SITE EVER! 💪**
