"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";

interface SettingsFormProps {
  userId: string;
}

export function SettingsForm({ userId }: SettingsFormProps) {
  // Password section
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [showPasswords, setShowPasswords] = useState({ current: false, new: false, confirm: false });

  // 2FA section
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [twoFALoading, setTwoFALoading] = useState(false);
  const [twoFACode, setTwoFACode] = useState("");
  const [showTwoFASetup, setShowTwoFASetup] = useState(false);

  // Notifications section
  const [notifications, setNotifications] = useState({
    email_application: true,
    email_payment: true,
    email_documents: true,
    sms_payment: false,
    sms_urgent: true
  });
  const [notificationsLoading, setNotificationsLoading] = useState(false);

  // Privacy section
  const [privacy, setPrivacy] = useState({
    marketing: false,
    analytics: true,
    data_sharing: false
  });
  const [privacyLoading, setPrivacyLoading] = useState(false);

  const toast = useToast();

  const handlePasswordChange = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.push({ title: "Please fill in all fields", tone: "warn" });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.push({ title: "New passwords do not match", tone: "warn" });
      return;
    }
    if (newPassword.length < 8) {
      toast.push({ title: "Password must be at least 8 characters", tone: "warn" });
      return;
    }

    setPasswordLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.push({ title: "Password updated (demo)", message: "Your new password is now active.", tone: "ok" });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setPasswordOpen(false);
    } catch (error) {
      toast.push({ title: "Failed to update password", message: "Current password may be incorrect.", tone: "danger" });
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleToggle2FA = async () => {
    setTwoFALoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setTwoFAEnabled(!twoFAEnabled);
      toast.push({ title: twoFAEnabled ? "2FA disabled (demo)" : "2FA enabled (demo)", tone: "ok" });
      if (!twoFAEnabled) {
        setShowTwoFASetup(true);
      } else {
        setShowTwoFASetup(false);
        setTwoFACode("");
      }
    } catch (error) {
      toast.push({ title: "Failed to update 2FA settings", tone: "danger" });
    } finally {
      setTwoFALoading(false);
    }
  };

  const handleNotificationChange = async (key: keyof typeof notifications) => {
    setNotificationsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
      toast.push({ title: "Notification settings updated (demo)", tone: "ok" });
    } finally {
      setNotificationsLoading(false);
    }
  };

  const handlePrivacyChange = async (key: keyof typeof privacy) => {
    setPrivacyLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
      toast.push({ title: "Privacy settings updated (demo)", tone: "ok" });
    } finally {
      setPrivacyLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Password Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold tracking-tight">Password</h2>
            <p className="mt-1 text-sm text-muted">Last changed 3 months ago</p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setPasswordOpen(!passwordOpen)}
          >
            {passwordOpen ? "Cancel" : "Change"}
          </Button>
        </div>

        {passwordOpen && (
          <div className="mt-4 space-y-3">
            <div>
              <Label>Current Password</Label>
              <div className="mt-1 relative">
                <Input
                  type={showPasswords.current ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-fg"
                  onClick={() =>
                    setShowPasswords((prev) => ({ ...prev, current: !prev.current }))
                  }
                >
                  {showPasswords.current ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div>
              <Label>New Password</Label>
              <div className="mt-1 relative">
                <Input
                  type={showPasswords.new ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-fg"
                  onClick={() =>
                    setShowPasswords((prev) => ({ ...prev, new: !prev.new }))
                  }
                >
                  {showPasswords.new ? "Hide" : "Show"}
                </button>
              </div>
              <p className="mt-1 text-xs text-muted">Must be at least 8 characters</p>
            </div>
            <div>
              <Label>Confirm New Password</Label>
              <div className="mt-1 relative">
                <Input
                  type={showPasswords.confirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-fg"
                  onClick={() =>
                    setShowPasswords((prev) => ({
                      ...prev,
                      confirm: !prev.confirm
                    }))
                  }
                >
                  {showPasswords.confirm ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <Button
              onClick={handlePasswordChange}
              disabled={passwordLoading}
              className={passwordLoading ? "opacity-75" : ""}
            >
              {passwordLoading ? "Updating..." : "Update Password"}
            </Button>
          </div>
        )}
      </Card>

      {/* 2FA Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold tracking-tight">Two-Factor Authentication</h2>
            <p className="mt-1 text-sm text-muted">
              Add an extra layer of security to your account
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={twoFAEnabled ? "ok" : "default"}>
              {twoFAEnabled ? "Enabled" : "Disabled"}
            </Badge>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleToggle2FA}
              disabled={twoFALoading}
              className={twoFALoading ? "opacity-75" : ""}
            >
              {twoFALoading ? "..." : twoFAEnabled ? "Disable" : "Enable"}
            </Button>
          </div>
        </div>

        {showTwoFASetup && !twoFAEnabled && (
          <div className="mt-4 space-y-3 p-4 bg-brand/5 rounded-lg border border-brand/20">
            <p className="text-sm text-muted">
              Scan this QR code with your authenticator app (Google Authenticator, Authy, Microsoft Authenticator):
            </p>
            <div className="inline-block rounded-xl border border-border/14 bg-bg/30 p-3">
              <div className="w-32 h-32 rounded-lg bg-panel/60 flex items-center justify-center text-xs text-muted">
                [QR Code Placeholder]
              </div>
            </div>
            <p className="text-sm text-muted">
              If you can't scan, enter this code manually: <code className="bg-bg/50 px-2 py-1 rounded text-xs font-mono">123456789ABC</code>
            </p>
            <div>
              <Label>Verification Code</Label>
              <Input
                type="text"
                value={twoFACode}
                onChange={(e) => setTwoFACode(e.target.value.slice(0, 6))}
                placeholder="000000"
                maxLength={6}
                className="text-center text-2xl tracking-widest"
              />
            </div>
            <p className="text-xs text-muted">
              Save these backup codes in a secure location. You'll need them if you lose access to your authenticator app.
            </p>
            <div className="bg-bg/50 p-3 rounded text-xs font-mono space-y-1 max-h-32 overflow-y-auto">
              <div>XXXX-XXXX-XXXX</div>
              <div>XXXX-XXXX-XXXX</div>
              <div>XXXX-XXXX-XXXX</div>
              <div>XXXX-XXXX-XXXX</div>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Copy Codes</Button>
              <Button variant="secondary" size="sm">Download</Button>
            </div>
          </div>
        )}
      </Card>

      {/* Notifications Section */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Notifications</h2>
        <p className="mt-1 text-sm text-muted">Control how we contact you</p>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between p-3 bg-bg/25 rounded-lg">
            <div>
              <p className="font-medium text-sm">Application Updates</p>
              <p className="text-xs text-muted">Email notifications about your application</p>
            </div>
            <button
              onClick={() => handleNotificationChange("email_application")}
              disabled={notificationsLoading}
              className={`h-6 w-10 rounded-full transition-colors ${
                notifications.email_application
                  ? "bg-brand"
                  : "bg-border/40"
              } ${notificationsLoading ? "opacity-50" : ""}`}
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-bg/25 rounded-lg">
            <div>
              <p className="font-medium text-sm">Payment Reminders</p>
              <p className="text-xs text-muted">Email reminders for upcoming payments</p>
            </div>
            <button
              onClick={() => handleNotificationChange("email_payment")}
              disabled={notificationsLoading}
              className={`h-6 w-10 rounded-full transition-colors ${
                notifications.email_payment
                  ? "bg-brand"
                  : "bg-border/40"
              } ${notificationsLoading ? "opacity-50" : ""}`}
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-bg/25 rounded-lg">
            <div>
              <p className="font-medium text-sm">Document Uploads</p>
              <p className="text-xs text-muted">Email when documents are approved/rejected</p>
            </div>
            <button
              onClick={() => handleNotificationChange("email_documents")}
              disabled={notificationsLoading}
              className={`h-6 w-10 rounded-full transition-colors ${
                notifications.email_documents
                  ? "bg-brand"
                  : "bg-border/40"
              } ${notificationsLoading ? "opacity-50" : ""}`}
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-bg/25 rounded-lg">
            <div>
              <p className="font-medium text-sm">SMS Payment Alerts</p>
              <p className="text-xs text-muted">Text message payment due reminders</p>
            </div>
            <button
              onClick={() => handleNotificationChange("sms_payment")}
              disabled={notificationsLoading}
              className={`h-6 w-10 rounded-full transition-colors ${
                notifications.sms_payment
                  ? "bg-brand"
                  : "bg-border/40"
              } ${notificationsLoading ? "opacity-50" : ""}`}
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-bg/25 rounded-lg">
            <div>
              <p className="font-medium text-sm">Urgent Notifications</p>
              <p className="text-xs text-muted">SMS alerts for urgent account issues</p>
            </div>
            <button
              onClick={() => handleNotificationChange("sms_urgent")}
              disabled={notificationsLoading}
              className={`h-6 w-10 rounded-full transition-colors ${
                notifications.sms_urgent
                  ? "bg-brand"
                  : "bg-border/40"
              } ${notificationsLoading ? "opacity-50" : ""}`}
            />
          </div>
        </div>
      </Card>

      {/* Privacy Section */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Privacy & Data</h2>
        <p className="mt-1 text-sm text-muted">Manage how your data is used</p>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between p-3 bg-bg/25 rounded-lg">
            <div>
              <p className="font-medium text-sm">Marketing Emails</p>
              <p className="text-xs text-muted">Offers, promotions, and company news</p>
            </div>
            <button
              onClick={() => handlePrivacyChange("marketing")}
              disabled={privacyLoading}
              className={`h-6 w-10 rounded-full transition-colors ${
                privacy.marketing
                  ? "bg-brand"
                  : "bg-border/40"
              } ${privacyLoading ? "opacity-50" : ""}`}
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-bg/25 rounded-lg">
            <div>
              <p className="font-medium text-sm">Analytics</p>
              <p className="text-xs text-muted">Help us improve by tracking site usage</p>
            </div>
            <button
              onClick={() => handlePrivacyChange("analytics")}
              disabled={privacyLoading}
              className={`h-6 w-10 rounded-full transition-colors ${
                privacy.analytics
                  ? "bg-brand"
                  : "bg-border/40"
              } ${privacyLoading ? "opacity-50" : ""}`}
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-bg/25 rounded-lg">
            <div>
              <p className="font-medium text-sm">Data Sharing</p>
              <p className="text-xs text-muted">Share with partners for better rates</p>
            </div>
            <button
              onClick={() => handlePrivacyChange("data_sharing")}
              disabled={privacyLoading}
              className={`h-6 w-10 rounded-full transition-colors ${
                privacy.data_sharing
                  ? "bg-brand"
                  : "bg-border/40"
              } ${privacyLoading ? "opacity-50" : ""}`}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
