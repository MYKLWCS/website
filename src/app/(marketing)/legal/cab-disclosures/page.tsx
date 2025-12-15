import Link from "next/link";
import { LegalPageShell } from "@/components/pages/LegalPageShell";

export default function Page() {
  return (
    <LegalPageShell
      title="CAB Disclosures (Texas)"
      summary={
        <>
          Dollar Loans is a licensed Texas Credit Access Business (CAB). These disclosures are required under Texas Finance Code Chapter 59 and provide important information about our services and your rights.
        </>
      }
      body={
        <>
          <h3 className="text-base font-semibold mt-6 mb-3">Credit Access Business Notice</h3>
          <p>
            Dollar Loans, Inc. is a licensed Credit Access Business registered with the Texas Credit Access Business Program. We are not a lender. We connect you with third-party creditors who may extend credit to you based on their underwriting criteria.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">How We Operate</h3>
          <p>
            As a CAB, we: (a) facilitate your access to credit by connecting you with creditors; (b) assist with application completion and verification; (c) charge a separate service fee for our services; and (d) may provide services related to your credit agreement, including payment processing assistance.
          </p>
          <p>
            We do not: (a) extend credit directly; (b) set loan terms or interest rates; (c) approve or decline credit applications (creditor discretion); or (d) service the credit agreement after it is signed (creditor responsibility).
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Our Charges & Fees</h3>
          <p>
            Dollar Loans charges a credit access service fee for facilitating your credit. The fee varies based on the requested credit amount and other factors. You will receive a written quote of our fee before accepting any offer. Our fee is in addition to creditor charges, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Interest or finance charges imposed by the creditor</li>
            <li>Late fees if payments are missed</li>
            <li>Creditor documentation fees</li>
            <li>Default or collection fees (if applicable)</li>
          </ul>
          <p className="mt-3">
            All fees and charges will be disclosed in writing before you sign any credit agreement.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">The Credit Agreement</h3>
          <p>
            If a creditor approves your application, you will receive a separate Credit Agreement (also called a "loan agreement" or "promissory note") directly from the creditor. This agreement contains:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>The total amount financed</li>
            <li>The Annual Percentage Rate (APR) and total finance charges</li>
            <li>The number and amount of payments</li>
            <li>Payment due dates and methods</li>
            <li>Default terms and creditor remedies</li>
            <li>Your rights and obligations</li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-3">Security Interest in Your Vehicle</h3>
          <p>
            The credit extended is secured by a first lien on the title of your vehicle. This means:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>The creditor has the right to repossess your vehicle if you default</li>
            <li>You remain the registered owner and may drive the vehicle</li>
            <li>You must maintain comprehensive and collision insurance</li>
            <li>The lien is released when the credit is paid in full</li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-3">Right to Rescind</h3>
          <p>
            You have the right to rescind (cancel) the credit agreement within three (3) business days after you sign it. To rescind:
          </p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Notify the creditor in writing within 3 business days</li>
            <li>Return the funds you received (if any)</li>
            <li>The creditor must release the lien on your title</li>
          </ol>
          <p className="mt-3">
            The creditor's contact information for rescission will be in your Credit Agreement.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Important Information About Payday Loans</h3>
          <p>
            If the credit is structured as a payday loan or deferred presentment transaction under Texas Finance Code Chapter 59:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Maximum loan term is 31 days</li>
            <li>Maximum finance charge is 17% of the principal</li>
            <li>You may roll over (extend) the loan, but this incurs additional fees</li>
            <li>You have the right to repay early without penalty</li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-3">Estimates & Examples</h3>
          <p>
            Any estimates, examples, calculators, and payment schedules on this website are for informational purposes only. They do not guarantee approval or represent an actual offer. Your actual terms depend on creditor underwriting, your creditworthiness, vehicle value, income, and other factors.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">No Guarantee of Approval</h3>
          <p>
            We make no guarantee that your application will be approved. Credit approval is solely within the creditor's discretion. If your application is declined, you may ask the creditor for the reason.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Complaints & Questions</h3>
          <p>
            If you have questions about our services or wish to file a complaint about Dollar Loans, contact:
          </p>
          <div className="mt-3 ml-4 space-y-1 text-sm">
            <p><strong>Dollar Loans Customer Service</strong></p>
            <p>Email: support@dollarloans.com</p>
            <p>Phone: 1-800-DOLLAR-1 (1-800-365-5271)</p>
            <p>Hours: Monday-Friday 8am-5pm CST</p>
          </div>
          <p className="mt-3">
            You may also file a complaint with the Texas Credit Access Business Program. See{" "}
            <Link className="underline underline-offset-4 hover:text-fg" href="/legal/complaints">
              complaints and disputes
            </Link>{" "}
            for details.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">Texas Finance Code Authority</h3>
          <p>
            Dollar Loans operates under Texas Finance Code Chapter 59 (Credit Access Businesses). Our license allows us to facilitate credit access subject to all requirements of this law, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Truthful and non-deceptive advertising</li>
            <li>Clear disclosure of all charges and terms</li>
            <li>Compliance with consumer protection laws</li>
            <li>Maintenance of required records and documentation</li>
          </ul>

          <p className="mt-6 pt-4 border-t text-xs">
            Last Updated: December 2024. These disclosures are required under Texas Finance Code § 59.007 and related provisions. Dollar Loans maintains full compliance with all CAB requirements and regulations.
          </p>
        </>
      }
    />
  );
}

