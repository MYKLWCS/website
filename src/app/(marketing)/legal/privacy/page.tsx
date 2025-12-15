import { LegalPageShell } from "@/components/pages/LegalPageShell";

export default function Page() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      summary={
        <>
          Your privacy is important to us. This Privacy Policy explains what personal information we collect, how we use it, and your rights under applicable law including the California Consumer Privacy Act (CCPA).
        </>
      }
      body={
        <>
          <h3 className="text-base font-semibold mt-6 mb-3">1. Information We Collect</h3>
          <p>
            We collect information you provide directly, including your name, email, phone number, address, date of birth, employment information, vehicle details (year, make, model, VIN, current value), and financial information (income, existing debts, bank accounts).
          </p>
          <p>
            We also collect information automatically, including IP address, browser type, pages visited, time spent on site, referral source, and device information via cookies and similar technologies.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">2. How We Use Your Information</h3>
          <p>
            We use your information to: (a) process your credit application and verify your identity; (b) determine credit eligibility and terms; (c) facilitate credit with third-party creditors; (d) provide customer support and respond to inquiries; (e) send administrative notifications and updates; (f) prevent fraud and maintain security; (g) comply with legal obligations; and (h) improve our platform and services.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">3. Information We Share</h3>
          <p>
            We share your information with: (a) third-party creditors to facilitate credit decisions and agreements; (b) service providers who perform functions on our behalf, including payment processors, identity verification, and analytics; (c) government agencies as required by law; and (d) other parties with your explicit consent.
          </p>
          <p>
            We do NOT sell your personal information for monetary consideration. We do NOT share your information with third parties for their direct marketing purposes without your prior consent.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">4. Data Security</h3>
          <p>
            We implement industry-standard security measures including encryption, secure servers, and access controls to protect your information from unauthorized access, alteration, or destruction. However, no security is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">5. Data Retention</h3>
          <p>
            We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements. When information is no longer needed, we securely delete or anonymize it.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">6. Cookies & Tracking</h3>
          <p>
            We use cookies and similar technologies to remember preferences, understand usage patterns, and deliver personalized content. You can control cookies through browser settings, but disabling them may affect site functionality.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">7. Your Rights (CCPA)</h3>
          <p>
            If you are a California resident, you have the right to: (a) know what personal information we collect and how we use it; (b) delete your personal information (subject to exceptions); (c) opt-out of the "sale" or sharing of your personal information; and (d) not be discriminated against for exercising your privacy rights.
          </p>
          <p>
            To exercise your rights, email privacy@dollarloans.com with "CCPA Request" in the subject line and include your full name and email. We will verify your identity and respond within 45 days.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">8. Your Rights (General)</h3>
          <p>
            You may request access to, correction of, or deletion of your personal information by contacting us. You can opt-out of promotional emails by clicking "unsubscribe" in any email. You may limit cookies through browser settings.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">9. Third-Party Links</h3>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">10. Children's Privacy</h3>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will promptly delete it.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">11. International Privacy</h3>
          <p>
            Our services are operated in the United States. If you access our platform from outside the US, you consent to the transfer of your information to and processing in the United States, which may have different privacy protections than your country.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">12. Contact Us</h3>
          <p>
            For questions about this Privacy Policy or our privacy practices, contact us at:
          </p>
          <div className="mt-3 ml-4 space-y-1 text-sm">
            <p><strong>Dollar Loans Privacy Team</strong></p>
            <p>Email: privacy@dollarloans.com</p>
            <p>Phone: 1-800-DOLLAR-1 (1-800-365-5271)</p>
            <p>Hours: Monday-Friday 8am-5pm CST</p>
          </div>

          <h3 className="text-base font-semibold mt-6 mb-3">13. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy at any time. We will notify you of material changes by email or by posting the updated policy on our website with an updated "Last Updated" date. Your continued use constitutes acceptance.
          </p>

          <p className="mt-6 pt-4 border-t text-xs">
            Last Updated: December 2024. This policy is a scaffold and should be reviewed by qualified legal counsel before full deployment. It incorporates CCPA requirements but may require state-specific customization for multi-state operations.
          </p>
        </>
      }
    />
  );
}

