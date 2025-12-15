import Link from "next/link";
import { LegalPageShell } from "@/components/pages/LegalPageShell";

export default function Page() {
  return (
    <LegalPageShell
      title="Texas-Specific Disclosures"
      summary={
        <>
          Important legal disclosures required for credit transactions in Texas. Please review carefully before using our services.
        </>
      }
      body={
        <>
          <h3 className="text-base font-semibold mt-6 mb-3">Texas Finance Code Compliance Notice</h3>
          <p>
            Dollar Loans, Inc. operates as a Credit Access Business (CAB) under Texas Finance Code Chapter 59. We are regulated by the State of Texas and comply with all applicable consumer protection laws. This page provides disclosures required under Texas law for credit transactions involving secured credit.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Consumer Rights & Protections</h3>
          <p>
            As a consumer in Texas, you have the following rights when accessing credit through a CAB:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Right to clear, written disclosure of all terms and charges</li>
            <li>Right to receive a copy of the credit agreement before signing</li>
            <li>Right to rescind (cancel) the agreement within 3 business days</li>
            <li>Right to repay early without penalty</li>
            <li>Right to request the creditor's contact information</li>
            <li>Right to file complaints with regulatory agencies</li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-3">Fee Transparency</h3>
          <p>
            Dollar Loans discloses all fees in writing before you accept an offer. Our fee is separate from creditor charges. Typical fee categories include:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Credit Access Service Fee (Dollar Loans)</li>
            <li>Interest / Finance Charges (Creditor)</li>
            <li>Documentation Fees (Creditor)</li>
            <li>Title Recording / Lien Fees (Creditor)</li>
            <li>Late Payment Fees (Creditor)</li>
          </ul>
          <p className="mt-3">
            The total APR, monthly payment, and full payment schedule will be shown in your Credit Agreement before you sign.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Vehicle Security Interest</h3>
          <p>
            When you accept credit through Dollar Loans, the creditor takes a first security interest (lien) on your vehicle&apos;s title. This means:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>The creditor can repossess your vehicle if you default on payments</li>
            <li>You remain the registered owner and may continue driving the vehicle</li>
            <li>You must maintain active insurance coverage on the vehicle</li>
            <li>The lien is released when the credit is repaid in full</li>
            <li>Texas law may require you to notify the creditor before selling the vehicle</li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-3">Default & Remedies</h3>
          <p>
            If you fail to make payments as agreed, the creditor may:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Charge late fees as disclosed in your agreement</li>
            <li>Repossess your vehicle</li>
            <li>Report the default to credit bureaus</li>
            <li>File legal action to collect the debt</li>
          </ul>
          <p className="mt-3">
            If your vehicle is repossessed, you may have rights to redeem (buy back) the vehicle within certain timeframes. Contact your creditor for details.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Cooling-Off Period (Rescission Rights)</h3>
          <p>
            You have the right to cancel your credit agreement within three (3) business days of signing, even if you have received the funds. To rescind:
          </p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Contact the creditor in writing within 3 business days</li>
            <li>Return any funds you received</li>
            <li>The creditor will release the title lien</li>
          </ol>
          <p className="mt-3">
            The creditor&apos;s rescission contact information will be in your Credit Agreement. Rescission rights do not apply to transactions structured as check-cashing or other specific categories.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Maximum Finance Charges (Payday Loans)</h3>
          <p>
            If your credit is structured as a payday loan or deferred presentment transaction under Texas Finance Code § 59.007:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Maximum loan term: 31 days</li>
            <li>Maximum finance charge: 17% of the principal amount</li>
            <li>You may extend (rollover) the loan, but this incurs additional fees</li>
            <li>You may repay early without additional penalty</li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-3">No Harassment or Deception</h3>
          <p>
            Texas law prohibits creditors and CABs from:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Using false, misleading, or deceptive advertising</li>
            <li>Misrepresenting the credit terms or your obligations</li>
            <li>Using abusive or harassing collection practices</li>
            <li>Making guarantees or promises about approval</li>
            <li>Charging unauthorized fees or interest</li>
          </ul>
          <p className="mt-3">
            If you believe you have been treated unfairly, you may file a complaint with regulatory agencies.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Complaints & Regulatory Authority</h3>
          <p>
            If you have a complaint about Dollar Loans or our creditor partners, you can contact:
          </p>
          <div className="mt-3 ml-4 space-y-3 text-sm">
            <div>
              <p><strong>Dollar Loans Customer Service</strong></p>
              <p>Email: support@dollarloans.com</p>
              <p>Phone: 1-800-DOLLAR-1 (1-800-365-5271)</p>
              <p>Hours: Monday-Friday 8am-5pm CST</p>
            </div>
            <div>
              <p><strong>Texas Credit Access Business Program</strong></p>
              <p>State regulatory complaints: Credit Access Business program oversight</p>
            </div>
            <div>
              <p><strong>Consumer Complaints</strong></p>
              <p>See our <Link className="underline underline-offset-4 hover:text-fg" href="/legal/complaints">Complaints &amp; Disputes</Link> page for additional resources.</p>
            </div>
          </div>

          <h3 className="text-base font-semibold mt-6 mb-3">Your Obligations</h3>
          <p>
            As a borrower, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Provide truthful and complete information in your application</li>
            <li>Make all payments in full and on time</li>
            <li>Maintain insurance on the vehicle</li>
            <li>Notify the creditor of any changes to contact information</li>
            <li>Comply with all terms in the Credit Agreement</li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-3">Non-Discrimination</h3>
          <p>
            We do not discriminate based on race, color, religion, national origin, sex, age, marital status, disability, or any other protected characteristic. Credit decisions are made on the basis of creditworthiness, vehicle value, income, and other relevant financial factors.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Questions?</h3>
          <p>
            For questions about these disclosures or your rights under Texas law, please contact us at support@dollarloans.com or call 1-800-DOLLAR-1.
          </p>

          <p className="mt-6 pt-4 border-t text-xs">
            Last Updated: December 2024. These disclosures are required under Texas Finance Code Chapter 59 and related provisions. The information is accurate at the time of publication but may be subject to changes in law or regulation.
          </p>
        </>
      }
    />
  );
}

