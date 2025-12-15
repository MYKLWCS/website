# Totality LMS Integration Guide

This document explains how to integrate the Dollar Loans website with Totality LMS for production use.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Current State (Mock Mode)](#current-state-mock-mode)
3. [Integration Steps](#integration-steps)
4. [Configuration](#configuration)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

---

## Overview

The Dollar Loans website is designed as an **informational experience** that connects to **Totality LMS** for actual loan management. The website handles:

- ✅ Marketing and education
- ✅ User interface and experience
- ✅ Application wizard (data collection)
- ✅ Dashboard and admin interfaces

**Totality LMS handles:**
- 🔐 Authentication (SSO)
- 💾 Data storage (applications, documents, users)
- 💳 Payment processing
- 📧 Email notifications
- 📊 Analytics and reporting

---

## Current State (Mock Mode)

The website currently runs in **mock mode** for development:

- Fake authentication (no real login required)
- In-memory database (data resets on restart)
- Console logging instead of real analytics
- No file uploads (placeholders only)

**To verify mock mode is active:**

```bash
# Check .env.local file
cat .env.local | grep MOCK

# Should show:
# NEXT_PUBLIC_USE_MOCK_DATA=true
```

---

## Integration Steps

### Step 1: Get Totality Credentials

**Contact your Totality LMS representative** to obtain:

1. **SSO Configuration:**
   - Client ID
   - Client Secret
   - SSO endpoint URL
   - Redirect URI (provide: `https://yourdomain.com/auth/callback`)

2. **API Configuration:**
   - API base URL
   - Tenant ID
   - API authentication method

3. **Analytics Configuration:**
   - xAPI/SCORM endpoint URL
   - Analytics format (xAPI 1.0.3, SCORM 1.2, SCORM 2004)

4. **Documentation:**
   - API documentation
   - Authentication flow diagrams
   - Webhook configuration (if available)

### Step 2: Update Environment Variables

Copy `.env.example` to `.env.production`:

```bash
cp .env.example .env.production
```

Edit `.env.production` and fill in your Totality credentials:

```bash
# Totality LMS Integration
NEXT_PUBLIC_TOTALITY_API_URL=https://api.totality.com/v1
NEXT_PUBLIC_TOTALITY_SSO_URL=https://sso.totality.com
NEXT_PUBLIC_TOTALITY_ANALYTICS_URL=https://analytics.totality.com/xapi

# SSO Credentials (from Totality)
TOTALITY_SSO_CLIENT_ID=your_actual_client_id
TOTALITY_SSO_CLIENT_SECRET=your_actual_client_secret
NEXT_PUBLIC_TOTALITY_REDIRECT_URI=https://dollarloans.com/auth/callback

# Tenant Configuration
TOTALITY_TENANT_ID=your_tenant_id

# Enable Totality Features
NEXT_PUBLIC_TOTALITY_SSO_ENABLED=true
NEXT_PUBLIC_TOTALITY_DOCUMENTS_ENABLED=true
NEXT_PUBLIC_TOTALITY_APPLICATIONS_ENABLED=true
NEXT_PUBLIC_TOTALITY_ANALYTICS_ENABLED=true

# Disable Mock Mode
NEXT_PUBLIC_USE_MOCK_DATA=false
```

### Step 3: Implement SSO Flow

The SSO integration is **partially implemented** in `src/lib/totality/auth.ts`. You need to:

1. **Review the authentication flow** with Totality's documentation
2. **Update token validation logic** (replace stub with actual JWT verification)
3. **Test the login flow:**

```typescript
// src/lib/totality/auth.ts
// Replace this function with Totality-specific logic:
export async function validateSSOToken(token: string): Promise<TotalityUser | null> {
  // TODO: Implement actual JWT validation
  // - Verify signature with Totality's public key
  // - Check expiration
  // - Validate issuer and audience
}
```

### Step 4: Update Application Submission

The application API is ready in `src/lib/totality/applications.ts`. You need to:

1. **Verify the data mapping** matches Totality's expected format
2. **Test application submission:**

```bash
# Test in staging first
curl -X POST https://staging.totality.com/v1/applications \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "applicantId": "user_123",
    "requestedAmount": 2500,
    "vehicleInfo": { ... }
  }'
```

3. **Update error handling** based on Totality's error responses

### Step 5: Configure Analytics

The xAPI integration is ready in `src/lib/totality/analytics.ts`. You need to:

1. **Verify the xAPI statement format** matches Totality's requirements
2. **Test event tracking:**

```typescript
import { trackToTotality } from "@/lib/totality";

// Test tracking
await trackToTotality(
  {
    name: "wizard_step_view",
    properties: { step: "goal_amount" }
  },
  "user_123",
  "access_token"
);
```

3. **Check events appear in Totality's analytics dashboard**

### Step 6: Test Document Upload

Update the document upload route to use Totality:

```typescript
// src/app/api/documents/upload/route.ts
import { isMockMode } from "@/lib/totality";

export async function POST(req: Request) {
  if (isMockMode()) {
    // Current mock implementation
  } else {
    // Forward to Totality document API
    // (Implementation provided in Totality docs)
  }
}
```

### Step 7: Deploy to Staging

1. **Deploy to staging environment** with Totality integration enabled
2. **Test complete user flows:**
   - SSO login → Application wizard → Submit application
   - Document upload
   - Application status updates
   - Analytics tracking

3. **Monitor logs** for integration errors

### Step 8: Production Deployment

1. **Update production environment variables**
2. **Deploy to production**
3. **Monitor during initial launch:**
   - SSO authentication success rate
   - Application submission success rate
   - API error rates
   - Analytics event delivery

---

## Configuration

### Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_TOTALITY_API_URL` | Totality API base URL | Yes | `https://api.totality.com/v1` |
| `NEXT_PUBLIC_TOTALITY_SSO_URL` | SSO endpoint | Yes | `https://sso.totality.com` |
| `TOTALITY_SSO_CLIENT_ID` | OAuth client ID | Yes | `client_abc123` |
| `TOTALITY_SSO_CLIENT_SECRET` | OAuth client secret | Yes | `secret_xyz789` |
| `TOTALITY_TENANT_ID` | Your tenant identifier | Yes | `tenant_dollarloans` |
| `NEXT_PUBLIC_USE_MOCK_DATA` | Use mock mode | No | `false` (production) |

### Feature Flags

Enable/disable specific features:

```bash
# SSO Authentication
NEXT_PUBLIC_TOTALITY_SSO_ENABLED=true

# Document Upload to Totality
NEXT_PUBLIC_TOTALITY_DOCUMENTS_ENABLED=true

# Application Submission to Totality
NEXT_PUBLIC_TOTALITY_APPLICATIONS_ENABLED=true

# xAPI Analytics Tracking
NEXT_PUBLIC_TOTALITY_ANALYTICS_ENABLED=true
```

---

## Testing

### Local Testing with Totality Sandbox

If Totality provides a sandbox environment:

```bash
# .env.local (development with Totality sandbox)
NEXT_PUBLIC_TOTALITY_API_URL=https://sandbox.totality.com/v1
NEXT_PUBLIC_TOTALITY_SSO_URL=https://sandbox-sso.totality.com
NEXT_PUBLIC_USE_MOCK_DATA=false
TOTALITY_SSO_CLIENT_ID=sandbox_client_id
# ... other sandbox credentials
```

### Integration Test Checklist

- [ ] SSO login redirects to Totality
- [ ] SSO callback receives token
- [ ] Token validation succeeds
- [ ] User profile loads from Totality
- [ ] Application submission succeeds
- [ ] Application appears in Totality dashboard
- [ ] Document upload works
- [ ] Analytics events appear in Totality
- [ ] Token refresh works
- [ ] Logout clears session

### Manual Testing Script

```bash
# 1. Test SSO Login
# Open browser to: http://localhost:3000/auth/login
# Should redirect to Totality SSO

# 2. Test Application Submission
# Complete wizard and submit
# Check Totality dashboard for new application

# 3. Test Analytics
# Open browser console
# Perform actions (view pages, complete wizard)
# Check Totality analytics dashboard
```

---

## Troubleshooting

### Common Issues

#### 1. "SSO redirect loop"

**Cause:** Invalid client ID or redirect URI mismatch

**Fix:**
- Verify `TOTALITY_SSO_CLIENT_ID` is correct
- Ensure redirect URI in Totality matches `NEXT_PUBLIC_TOTALITY_REDIRECT_URI`

#### 2. "Application submission failed"

**Cause:** Data format mismatch or authentication issue

**Fix:**
- Check application payload in network tab
- Compare with Totality's API documentation
- Verify access token is valid

#### 3. "Analytics events not appearing"

**Cause:** xAPI format mismatch or endpoint incorrect

**Fix:**
- Verify `NEXT_PUBLIC_TOTALITY_ANALYTICS_URL` is correct
- Check xAPI statement format matches Totality's expectations
- Enable `DEBUG=true` to see event payloads

#### 4. "Token validation fails"

**Cause:** JWT signature verification issue

**Fix:**
- Get Totality's public key for JWT verification
- Update `validateSSOToken()` function
- Check token expiration time

### Debug Mode

Enable detailed logging:

```bash
DEBUG=true
NEXT_PUBLIC_SHOW_ERRORS=true
```

Then check console for detailed integration logs:

```
[Totality Auth] Validating token...
[Totality Apps] Submitting application...
[Totality Analytics] Tracking event: wizard_step_view
```

---

## Support

**For integration issues:**

1. **Check Totality documentation** first
2. **Review integration logs** in debug mode
3. **Contact Totality support** with:
   - Tenant ID
   - Error messages
   - Request/response payloads (sanitized)
   - Timestamp of issue

**For website issues:**

1. Check application logs
2. Review GitHub issues
3. Contact development team

---

## Next Steps After Integration

1. **Monitor performance metrics:**
   - SSO success rate
   - API response times
   - Error rates

2. **Set up alerts** for integration failures

3. **Document any Totality-specific customizations**

4. **Create runbook** for common integration issues

5. **Train support team** on troubleshooting integration problems

---

**Last Updated:** December 2025
**Integration Version:** 1.0
**Totality LMS:** Ready for integration
