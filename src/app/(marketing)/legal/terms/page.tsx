import { LegalPageShell } from "@/components/pages/LegalPageShell";

export default function Page() {
  return (
    <LegalPageShell
      title="Terms of Service"
      summary={
        <>
          These Terms of Service govern your use of the Dollar Loans platform, our website, and services. By accessing or using Dollar Loans, you agree to be bound by these terms. If you do not agree, do not use our services.
        </>
      }
      body={
        <>
          <h3 className="text-base font-semibold mt-6 mb-3">1. Our Services</h3>
          <p>
            Dollar Loans is a licensed Texas Credit Access Business (CAB). We connect you with third-party creditors who may extend credit secured by a title to your vehicle. We do not lend funds directly. We facilitate credit access and provide credit services as defined by Texas Finance Code § 59.001.
          </p>
          
          <h3 className="text-base font-semibold mt-6 mb-3">2. Eligibility & Application</h3>
          <p>
            To use our services, you must: (a) be at least 18 years old; (b) be a Texas resident; (c) own a vehicle with a clear or encumbered title; (d) have an active income source; and (e) provide accurate information in your application. You agree that all information you provide is truthful and complete. We reserve the right to verify information and reject applications that do not meet our underwriting criteria.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">3. Credit Services & Fees</h3>
          <p>
            If your application is approved, a creditor will extend credit. You will receive a separate Credit Agreement containing the loan terms, annual percentage rate (APR), monthly payment amount, total amount financed, finance charges, and total payments due.
          </p>
          <p>
            Dollar Loans charges a credit access service fee, which is disclosed before you accept an offer. This fee compensates us for services including application processing, credit facilitation, and administrative support. The fee is separate from creditor charges and is disclosed in writing.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">4. Title as Security</h3>
          <p>
            You grant the creditor a security interest in your vehicle title as collateral for the credit extended. The creditor has the right to repossess your vehicle if you default on the credit agreement. You must maintain insurance on the vehicle. You remain the registered owner and may drive and use the vehicle during the credit term.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">5. Payments & Default</h3>
          <p>
            You agree to make all payments in full and on time as specified in your Credit Agreement. If you miss a payment, the creditor may charge a late fee and may initiate repossession or other collection actions. We recommend setting up automatic payment to avoid missed payments.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">6. Right to Rescind</h3>
          <p>
            You may rescind (cancel) the credit agreement within three (3) business days after signing by notifying the creditor in writing. Upon rescission, you must return the funds received and the creditor will release the security interest in your title. Contact information for rescission will be provided in your Credit Agreement.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">7. Privacy & Data</h3>
          <p>
            Your personal and financial information is handled according to our Privacy Policy. We do not sell your information to third parties. Information is shared with the creditor to facilitate credit and with service providers to operate our platform. See our Privacy Policy for complete details.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">8. No Guarantees</h3>
          <p>
            We make no guarantee that your application will be approved or that you will receive any specific terms or amounts. Credit approval and terms depend on creditworthiness, vehicle value, income, and creditor discretion. We do not guarantee any specific credit terms, rates, or outcomes.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">9. Liability Limitations</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, DOLLAR LOANS AND ITS OFFICERS, EMPLOYEES, AND AGENTS ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR PLATFORM OR SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            Our liability for direct damages is limited to the amount of fees you paid to Dollar Loans in the twelve months preceding the claim.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">10. Dispute Resolution</h3>
          <p>
            Any disputes arising from these terms or your use of our services shall be governed by the laws of Texas and resolved in the state or federal courts located in Texas. You waive any right to a jury trial and agree to binding individual arbitration for disputes, except that either party may pursue claims in small claims court.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">11. Changes to Terms</h3>
          <p>
            We may update these terms at any time. We will notify you of material changes by email or by posting the updated terms on our website. Your continued use of our services after changes constitutes acceptance of the updated terms.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-3">12. Compliance</h3>
          <p>
            Dollar Loans operates in full compliance with the Texas Credit Access Business rules (Texas Finance Code Chapter 59), Texas Deferred Presentment Transaction Act, and all applicable federal and state lending laws. We maintain a license with the Texas Credit Access Business program.
          </p>

          <p className="mt-6 pt-4 border-t text-xs">
            Last Updated: December 2024. These terms are a scaffold and should be reviewed by qualified legal counsel before full deployment.
          </p>
        </>
      }
    />
  );
}

