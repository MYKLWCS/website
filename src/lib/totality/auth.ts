/**
 * Totality SSO Authentication
 *
 * Handles authentication with Totality LMS via SSO.
 * STUB IMPLEMENTATION - Replace with actual Totality SSO integration.
 */

import { TOTALITY_CONFIG, isMockMode } from "./config";
import type { TotalitySession, TotalityUser } from "./types";

/**
 * Validate SSO token from Totality
 *
 * TODO: Implement actual JWT validation with Totality's public keys
 */
export async function validateSSOToken(token: string): Promise<TotalityUser | null> {
  if (isMockMode()) {
    // Mock implementation for development
    console.log("[Totality Auth] Mock mode: validating token...");
    return {
      id: "mock_user_123",
      email: "demo@dollarloans.example",
      name: "Demo User",
      tenantId: "tenant_demo",
      roles: ["customer"]
    };
  }

  try {
    const response = await fetch(`${TOTALITY_CONFIG.ssoEndpoint}/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Tenant-ID": TOTALITY_CONFIG.tenantId
      },
      body: JSON.stringify({ token })
    });

    if (!response.ok) {
      console.error("[Totality Auth] Token validation failed:", response.status);
      return null;
    }

    const user = await response.json();
    return user as TotalityUser;
  } catch (error) {
    console.error("[Totality Auth] Error validating token:", error);
    return null;
  }
}

/**
 * Exchange authorization code for access token
 *
 * TODO: Implement OAuth2 authorization code flow
 */
export async function exchangeCodeForToken(code: string): Promise<TotalitySession | null> {
  if (isMockMode()) {
    console.log("[Totality Auth] Mock mode: exchanging code for token...");
    return {
      accessToken: "mock_access_token",
      refreshToken: "mock_refresh_token",
      expiresAt: Date.now() + 3600000, // 1 hour
      user: {
        id: "mock_user_123",
        email: "demo@dollarloans.example",
        name: "Demo User",
        tenantId: "tenant_demo",
        roles: ["customer"]
      }
    };
  }

  try {
    const response = await fetch(`${TOTALITY_CONFIG.ssoEndpoint}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: TOTALITY_CONFIG.ssoClientId,
        client_secret: TOTALITY_CONFIG.ssoClientSecret,
        redirect_uri: TOTALITY_CONFIG.ssoRedirectUri
      })
    });

    if (!response.ok) {
      console.error("[Totality Auth] Token exchange failed:", response.status);
      return null;
    }

    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: Date.now() + data.expires_in * 1000,
      user: data.user
    };
  } catch (error) {
    console.error("[Totality Auth] Error exchanging code:", error);
    return null;
  }
}

/**
 * Refresh access token
 *
 * TODO: Implement token refresh logic
 */
export async function refreshAccessToken(refreshToken: string): Promise<TotalitySession | null> {
  if (isMockMode()) {
    console.log("[Totality Auth] Mock mode: refreshing token...");
    return {
      accessToken: "mock_access_token_refreshed",
      refreshToken: "mock_refresh_token",
      expiresAt: Date.now() + 3600000,
      user: {
        id: "mock_user_123",
        email: "demo@dollarloans.example",
        name: "Demo User",
        tenantId: "tenant_demo",
        roles: ["customer"]
      }
    };
  }

  try {
    const response = await fetch(`${TOTALITY_CONFIG.ssoEndpoint}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: TOTALITY_CONFIG.ssoClientId,
        client_secret: TOTALITY_CONFIG.ssoClientSecret
      })
    });

    if (!response.ok) {
      console.error("[Totality Auth] Token refresh failed:", response.status);
      return null;
    }

    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token || refreshToken,
      expiresAt: Date.now() + data.expires_in * 1000,
      user: data.user
    };
  } catch (error) {
    console.error("[Totality Auth] Error refreshing token:", error);
    return null;
  }
}

/**
 * Get SSO login URL
 */
export function getSSOLoginUrl(state?: string): string {
  const params = new URLSearchParams({
    client_id: TOTALITY_CONFIG.ssoClientId,
    redirect_uri: TOTALITY_CONFIG.ssoRedirectUri,
    response_type: "code",
    scope: "openid profile email",
    state: state || crypto.randomUUID()
  });

  return `${TOTALITY_CONFIG.ssoEndpoint}/authorize?${params.toString()}`;
}

/**
 * Logout from Totality SSO
 */
export async function logout(accessToken: string): Promise<boolean> {
  if (isMockMode()) {
    console.log("[Totality Auth] Mock mode: logging out...");
    return true;
  }

  try {
    const response = await fetch(`${TOTALITY_CONFIG.ssoEndpoint}/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });

    return response.ok;
  } catch (error) {
    console.error("[Totality Auth] Error during logout:", error);
    return false;
  }
}
