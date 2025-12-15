import { emailTemplates, type EmailTemplate } from "./emailTemplates";

export interface Notification {
  id: string;
  userId: string;
  type: EmailTemplate;
  subject: string;
  body: string;
  sent: boolean;
  createdAt: string;
  sentAt?: string;
}

// Mock notification store (in production, use database)
const notifications: Notification[] = [];

export async function sendNotification(
  userId: string,
  type: EmailTemplate,
  templateVars: Record<string, any>
) {
  const template = emailTemplates[type];
  if (!template) {
    throw new Error(`Unknown email template: ${type}`);
  }

  // Build the email body using template function
  const body = (template.template as Function)(...Object.values(templateVars));
  
  const notification: Notification = {
    id: `notif-${Date.now()}`,
    userId,
    type,
    subject: template.subject,
    body,
    sent: false,
    createdAt: new Date().toISOString()
  };

  notifications.push(notification);

  // In production, queue this for actual email delivery
  // For now, mark as sent immediately
  notification.sent = true;
  notification.sentAt = new Date().toISOString();

  return notification;
}

export async function getNotifications(userId: string): Promise<Notification[]> {
  return notifications.filter((n) => n.userId === userId).slice(-50); // Last 50
}

export async function getNotificationById(id: string): Promise<Notification | null> {
  return notifications.find((n) => n.id === id) || null;
}

// Notification types for different events
export const notificationEvents = {
  APPLICATION_SUBMITTED: "applicationSubmitted" as const,
  DOCUMENTS_REQUESTED: "documentRequested" as const,
  OFFER_READY: "offerReady" as const,
  PAYMENT_DUE: "paymentDue" as const,
  PAYMENT_CONFIRMED: "paymentConfirmation" as const,
  DOCUMENT_APPROVED: "documentApproved" as const,
  ACCOUNT_UPDATED: "accountUpdated" as const,
  SUPPORT_TICKET_CREATED: "supportTicketCreated" as const
};

// Helper to send application submitted notification
export async function notifyApplicationSubmitted(
  userId: string,
  name: string,
  appId: string
) {
  return sendNotification(userId, "applicationSubmitted", { name, appId });
}

// Helper to send payment confirmation
export async function notifyPaymentConfirmed(
  userId: string,
  name: string,
  amount: string,
  date: string,
  receiptId: string
) {
  return sendNotification(userId, "paymentConfirmation", { name, amount, date, receiptId });
}

// Helper to send offer ready
export async function notifyOfferReady(
  userId: string,
  name: string,
  amount: string,
  rate: string
) {
  return sendNotification(userId, "offerReady", { name, amount, rate });
}

// Helper to send payment due reminder
export async function notifyPaymentDue(
  userId: string,
  name: string,
  amount: string,
  dueDate: string
) {
  return sendNotification(userId, "paymentDue", { name, amount, dueDate });
}
