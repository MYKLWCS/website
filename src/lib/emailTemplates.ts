export const emailTemplates = {
  applicationSubmitted: {
    subject: "Application Received - Confirmation",
    template: (name: string, appId: string) => `
      <h2>Application Received</h2>
      <p>Hi ${name},</p>
      <p>Thank you for submitting your application with Dollar Loans. We've received your submission and have assigned it ID: ${appId}.</p>
      
      <h3>What's Next?</h3>
      <ul>
        <li>Our team will review your application within 24-48 hours</li>
        <li>You'll receive updates via email as your application progresses</li>
        <li>If we need additional documents, we'll request them through your account</li>
      </ul>
      
      <p><strong>Next Steps:</strong> Log in to your dashboard to track your application status and upload any required documents.</p>
      
      <p>Questions? Contact our support team at support@dollarloans.com or call (844) LOANS-4U.</p>
    `
  },

  documentRequested: {
    subject: "Documents Needed for Your Application",
    template: (name: string, documents: string[]) => `
      <h2>Additional Documents Required</h2>
      <p>Hi ${name},</p>
      <p>To continue processing your application, we need the following documents:</p>
      
      <ul>
        ${documents.map((doc) => `<li>${doc}</li>`).join("")}
      </ul>
      
      <p>Please upload these documents through your account dashboard. You have 5 days to submit them.</p>
      <p>Questions about what's needed? Visit our <a href="/dashboard/documents">documents page</a> for detailed requirements.</p>
    `
  },

  offerReady: {
    subject: "Your Offer is Ready to Review",
    template: (name: string, amount: string, rate: string) => `
      <h2>Your Offer is Ready</h2>
      <p>Hi ${name},</p>
      <p>Great news! We're ready to present you with a loan offer.</p>
      
      <div style="background: #f0f0f0; padding: 20px; border-radius: 8px;">
        <p><strong>Loan Amount:</strong> ${amount}</p>
        <p><strong>Estimated Rate:</strong> ${rate}</p>
      </div>
      
      <p>Log in to your account to review the full offer details, including fees and payment schedule. This offer expires in 7 days.</p>
      <p><strong>Important:</strong> All offers include required CAB disclosures. Please review these before accepting.</p>
    `
  },

  paymentDue: {
    subject: "Payment Reminder - Due Soon",
    template: (name: string, amount: string, dueDate: string) => `
      <h2>Payment Reminder</h2>
      <p>Hi ${name},</p>
      <p>Your payment of ${amount} is due on ${dueDate}.</p>
      
      <p><a href="/dashboard/payments">Make a payment now</a> or set up autopay to never miss a payment.</p>
      <p>Paying on time helps avoid late fees and keeps your account in good standing.</p>
    `
  },

  paymentConfirmation: {
    subject: "Payment Confirmed",
    template: (name: string, amount: string, date: string, receiptId: string) => `
      <h2>Payment Confirmed</h2>
      <p>Hi ${name},</p>
      <p>Your payment of ${amount} has been successfully processed.</p>
      
      <div style="background: #f0f0f0; padding: 20px; border-radius: 8px;">
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Receipt ID:</strong> ${receiptId}</p>
      </div>
      
      <p><a href="/dashboard/payments">View payment history</a> or <a href="/dashboard">return to dashboard</a>.</p>
    `
  },

  documentApproved: {
    subject: "Document Approved",
    template: (name: string, document: string) => `
      <h2>Document Approved</h2>
      <p>Hi ${name},</p>
      <p>Your ${document} has been approved and verified.</p>
      
      <p>Your application is progressing as expected. You'll receive an update as soon as we have more news.</p>
    `
  },

  accountUpdated: {
    subject: "Account Information Updated",
    template: (name: string) => `
      <h2>Account Updated</h2>
      <p>Hi ${name},</p>
      <p>Your account information has been successfully updated.</p>
      
      <p>If you didn't make this change, please contact support immediately at support@dollarloans.com.</p>
    `
  },

  supportTicketCreated: {
    subject: "Support Ticket Created",
    template: (name: string, ticketId: string) => `
      <h2>We Received Your Request</h2>
      <p>Hi ${name},</p>
      <p>Thank you for contacting us. Your support ticket has been created with ID: ${ticketId}.</p>
      
      <p>Our support team typically responds within 24 hours. You can check the status of your ticket in your account dashboard.</p>
      <p>Urgent issues? Call us at (844) LOANS-4U.</p>
    `
  }
};

export type EmailTemplate = keyof typeof emailTemplates;
