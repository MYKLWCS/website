# Instructions for Gemini Code Assist

## 🎯 Mission

Build the **absolute best, most premium vehicle title loan website ever created** for Dollar Loans. This must look like a Fortune 500 fintech company - think Tesla meets Chase Bank.

---

## 📄 Specification Document

**READ THIS FIRST:** The complete specification is in `DOLLAR_LOANS_BUILD_SPEC.md` in this same directory. Read it thoroughly before starting.

---

## 🚀 Build Instructions

### Phase 1: Foundation & Design System (START HERE)

**Goal:** Set up the project foundation with premium design system

**Tasks:**

1. **Initialize Next.js Project**
```bash
npx create-next-app@latest dollar-loans-app --typescript --tailwind --app --use-npm
cd dollar-loans-app
```

2. **Install Required Dependencies**
```bash
npm install @prisma/client prisma
npm install next-auth
npm install framer-motion
npm install lucide-react
npm install react-hook-form zod @hookform/resolvers
npm install zustand
npm install @tanstack/react-query
npm install date-fns
npm install recharts
npm install react-dropzone
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs
npm install -D @types/node @types/react @types/react-dom
npm install -D prettier eslint-config-prettier
```

3. **Create Project Structure**

Create this exact folder structure:
```
dollar-loans-app/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                 # Homepage
│   │   ├── layout.tsx
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
│   ├── (auth)/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   └── layout.tsx
│   ├── (protected)/
│   │   └── dashboard/
│   │       ├── page.tsx
│   │       ├── layout.tsx
│   │       ├── get-cash/
│   │       ├── vehicles/
│   │       ├── applications/
│   │       ├── agreements/
│   │       ├── payments/
│   │       ├── documents/
│   │       ├── profile/
│   │       ├── settings/
│   │       ├── support/
│   │       └── referrals/
│   ├── (admin)/
│   │   └── admin/
│   │       ├── page.tsx
│   │       ├── layout.tsx
│   │       ├── applications/
│   │       ├── customers/
│   │       ├── vehicles/
│   │       ├── offers/
│   │       ├── doc-review/
│   │       ├── payments/
│   │       ├── rules/
│   │       └── audit/
│   ├── legal/
│   │   ├── terms/
│   │   ├── privacy/
│   │   ├── cab-disclosures/
│   │   ├── texas-disclosures/
│   │   ├── cookies/
│   │   └── complaints/
│   ├── api/
│   │   ├── auth/
│   │   ├── applications/
│   │   ├── vehicles/
│   │   ├── payments/
│   │   ├── documents/
│   │   └── partner/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                    # Base components (buttons, inputs, cards)
│   ├── forms/                 # Form components
│   ├── layouts/               # Headers, footers, navigation
│   ├── marketing/             # Marketing page sections
│   ├── dashboard/             # Dashboard widgets
│   └── admin/                 # Admin components
├── lib/
│   ├── db/                    # Database utilities
│   ├── auth/                  # Auth utilities
│   ├── validations/           # Zod schemas
│   ├── utils/                 # Helper functions
│   └── constants.ts
├── types/
│   └── index.ts
├── hooks/                     # Custom React hooks
├── public/
│   └── images/
│       ├── heroes/
│       ├── marketing/
│       ├── testimonials/
│       ├── dashboard/
│       ├── infographics/
│       ├── icons/
│       └── vehicles/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
└── package.json
```

4. **Configure Tailwind CSS with Premium Design System**

Update `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

5. **Create Base UI Components**

Build these components in `components/ui/`:

**Button Component** (`components/ui/button.tsx`):
```typescript
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-md hover:shadow-lg',
      secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500',
      tertiary: 'bg-success-500 text-white hover:bg-success-600 focus:ring-success-500 shadow-md hover:shadow-lg',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </>
        ) : children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
```

**Input Component** (`components/ui/input.tsx`):
```typescript
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 outline-none',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
```

**Card Component** (`components/ui/card.tsx`):
```typescript
import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated'
}

export function Card({ className, variant = 'default', children, ...props }: CardProps) {
  const variants = {
    default: 'bg-white rounded-xl p-6',
    bordered: 'bg-white rounded-xl p-6 border border-gray-200',
    elevated: 'bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200',
  }

  return (
    <div className={cn(variants[variant], className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-xl font-bold text-gray-900', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-gray-600', className)} {...props}>
      {children}
    </div>
  )
}
```

**Utils** (`lib/utils.ts`):
```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
```

6. **Create Layout Components**

**Header** (`components/layouts/header.tsx`):
```typescript
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Dollar Loans
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-gray-700 hover:text-primary-600 transition">
              How It Works
            </Link>
            <Link href="/calculator" className="text-gray-700 hover:text-primary-600 transition">
              Calculator
            </Link>
            <Link href="/eligibility" className="text-gray-700 hover:text-primary-600 transition">
              Eligibility
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/#get-started">
              <Button variant="primary">Check Your Rate</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/how-it-works" className="text-gray-700 hover:text-primary-600">
                How It Works
              </Link>
              <Link href="/calculator" className="text-gray-700 hover:text-primary-600">
                Calculator
              </Link>
              <Link href="/eligibility" className="text-gray-700 hover:text-primary-600">
                Eligibility
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600">
                Contact
              </Link>
              <Link href="/auth/login">
                <Button variant="ghost" className="w-full">Login</Button>
              </Link>
              <Link href="/#get-started">
                <Button variant="primary" className="w-full">Check Your Rate</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
```

**Footer** (`components/layouts/footer.tsx`):
```typescript
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dollar Loans</h3>
            <p className="text-gray-400 mb-4">
              Premium vehicle title loans for qualified Texans. Fast, transparent, and secure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/calculator" className="text-gray-400 hover:text-white transition">Loan Calculator</Link></li>
              <li><Link href="/eligibility" className="text-gray-400 hover:text-white transition">Check Eligibility</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition">How It Works</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition">Careers</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white transition">Press</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/legal/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/legal/cab-disclosures" className="text-gray-400 hover:text-white transition">CAB Disclosures</Link></li>
              <li><Link href="/legal/complaints" className="text-gray-400 hover:text-white transition">Complaints</Link></li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <span>🔒 256-bit SSL Encryption</span>
            <span>✅ Texas CAB Licensed #12345</span>
            <span>⭐ BBB A+ Rated</span>
            <span>🏆 10,000+ Happy Customers</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Dollar Loans. All rights reserved.</p>
          <p className="mt-2">
            Dollar Loans is a licensed Credit Access Business in Texas. Licensed under Texas Finance Code Chapter 393.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

7. **Create Homepage** (`app/(public)/page.tsx`):

```typescript
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { CheckCircle, Clock, Shield, TrendingUp, Star } from 'lucide-react'

export default function HomePage() {
  const [vehicleYear, setVehicleYear] = useState('')
  const [vehicleMake, setVehicleMake] = useState('')
  const [loanAmount, setLoanAmount] = useState('')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              The Premium Way to Borrow Against Your Vehicle
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Fast, transparent, and secure title loans for qualified Texans
            </p>

            {/* Pre-Qualify Form */}
            <Card className="max-w-2xl mx-auto mt-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Check Your Rate in 60 Seconds
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Input
                    type="number"
                    placeholder="Vehicle Year"
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Make/Model"
                    value={vehicleMake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                  />
                  <Input
                    type="number"
                    placeholder="Loan Amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Get My Estimate →
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  No impact to your credit score • 100% secure
                </p>
              </div>
            </Card>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>4.8/5 Stars</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Texas Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get cash fast with our streamlined application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Apply Online</h3>
              <p className="text-gray-600">
                Complete our secure application in just 10 minutes from your phone or computer.
              </p>
            </Card>

            <Card variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Get Approved</h3>
              <p className="text-gray-600">
                Most applications are approved within 1 hour. We'll present you with a clear offer.
              </p>
            </Card>

            <Card variant="elevated" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Receive Cash</h3>
              <p className="text-gray-600">
                Funds are deposited directly to your bank account within 24 hours.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$50M+</div>
              <div className="text-primary-100">Loans Funded</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">47min</div>
              <div className="text-primary-100">Avg Approval Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied Texans who chose Dollar Loans for their vehicle title loan needs.
          </p>
          <Button variant="primary" size="lg">
            Check Your Rate Now →
          </Button>
        </div>
      </section>
    </div>
  )
}
```

---

## ✅ When Phase 1 is Complete

Report back with:
1. ✅ Project initialized successfully
2. ✅ All dependencies installed
3. ✅ Folder structure created
4. ✅ Tailwind configured with design system
5. ✅ Base UI components built (Button, Input, Card)
6. ✅ Layout components built (Header, Footer)
7. ✅ Homepage created with hero and pre-qualify form
8. ✅ Development server running (`npm run dev`)

Take a screenshot of the homepage and show me!

---

## 🎨 Important Reminders for ALL Phases:

### Design Quality Standards:
- ✅ Use the premium color palette from the spec
- ✅ Implement smooth animations with Framer Motion
- ✅ Add hover effects to all interactive elements
- ✅ Use proper spacing (generous whitespace)
- ✅ Mobile-first responsive design
- ✅ Loading states for all async actions
- ✅ Error states with helpful messages
- ✅ Success confirmations with animations

### Marketing Language:
- ✅ Use "loan" and "title loan" terminology (NOT just "CAB access")
- ✅ Premium, confident tone
- ✅ Trust-building language everywhere
- ✅ Social proof and statistics
- ✅ Clear value propositions

### Image Placeholders:
- ✅ For now, use placeholder divs with background colors
- ✅ Add comments: "// TODO: Generate with Nano Banana: [prompt from spec]"
- ✅ Use correct aspect ratios and sizes from spec
- ✅ Include descriptive alt text placeholders

### Code Quality:
- ✅ TypeScript strict mode
- ✅ Proper error handling
- ✅ Loading states
- ✅ Accessibility (ARIA labels, keyboard navigation)
- ✅ SEO meta tags
- ✅ Clean, commented code

---

## 🚀 After Phase 1, We'll Move to:

- **Phase 2:** All marketing pages (How It Works, Calculator, etc.)
- **Phase 3:** Authentication system
- **Phase 4:** Database setup with Prisma
- **Phase 5:** Get Cash wizard (12-step application)
- **Phase 6:** Customer dashboard
- **Phase 7:** Admin panel
- **Phase 8:** Image generation with Nano Banana
- **Phase 9:** Testing & deployment

---

## ❓ Questions to Ask Me If Needed:

- Clarify any design decisions
- Confirm any functionality details
- Ask about copy/content for specific pages
- Request examples for complex components

---

## 🎯 Success Criteria:

This must be the **BEST vehicle title loan website ever built**:
- Looks like a Fortune 500 company
- Better design than ANY competitor
- Fast, smooth, premium experience
- Builds massive trust
- Converts visitors to customers

---

**LET'S BUILD SOMETHING AMAZING! 🚀**

Start with Phase 1 now and report back when complete!
