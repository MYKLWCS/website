/**
 * LMS Event Logger
 * Batches and logs events to the LMS with retry logic
 */

import { getTotalityLMS, type LMSEvent } from "@/lib/lms/totality";

interface LoggerConfig {
  batchSize?: number;
  flushInterval?: number;
  maxRetries?: number;
}

export class LMSEventLogger {
  private queue: LMSEvent[] = [];
  private flushTimer: NodeJS.Timeout | null = null;
  private config: Required<LoggerConfig>;
  private lms = getTotalityLMS();
  private retryMap: Map<string, number> = new Map();

  constructor(config: LoggerConfig = {}) {
    this.config = {
      batchSize: config.batchSize || 10,
      flushInterval: config.flushInterval || 5000, // 5 seconds
      maxRetries: config.maxRetries || 3,
    };
  }

  /**
   * Add an event to the queue
   */
  log(event: LMSEvent): void {
    this.queue.push(event);

    if (this.queue.length >= this.config.batchSize) {
      this.flush();
    } else if (!this.flushTimer) {
      this.scheduleFlush();
    }
  }

  /**
   * Schedule a flush for later
   */
  private scheduleFlush(): void {
    this.flushTimer = setTimeout(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  /**
   * Flush queued events to LMS
   */
  async flush(): Promise<void> {
    if (this.flushTimer) {
      clearTimeout(this.flushTimer);
      this.flushTimer = null;
    }

    if (this.queue.length === 0) return;

    const batch = this.queue.splice(0, this.config.batchSize);

    for (const event of batch) {
      await this.sendWithRetry(event);
    }

    if (this.queue.length > 0) {
      this.scheduleFlush();
    }
  }

  /**
   * Send event with retry logic
   */
  private async sendWithRetry(event: LMSEvent): Promise<void> {
    const eventId = `${event.userId}-${event.type}-${event.timestamp}`;
    const retries = this.retryMap.get(eventId) || 0;

    try {
      await this.lms.trackEvent(event);
      this.retryMap.delete(eventId);
    } catch (error) {
      if (retries < this.config.maxRetries) {
        this.retryMap.set(eventId, retries + 1);
        // Re-queue for retry
        this.queue.push(event);
        console.warn(`[LMS] Event failed, queued for retry (attempt ${retries + 1}):`, error);
      } else {
        console.error(`[LMS] Event failed after ${this.config.maxRetries} retries:`, error);
        this.retryMap.delete(eventId);
      }
    }
  }

  /**
   * Force flush on page unload
   */
  setupUnloadHandler(): void {
    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", () => {
        this.flush();
      });
    }
  }

  /**
   * Get current queue size
   */
  getQueueSize(): number {
    return this.queue.length;
  }

  /**
   * Clear the queue
   */
  clear(): void {
    this.queue = [];
    if (this.flushTimer) {
      clearTimeout(this.flushTimer);
      this.flushTimer = null;
    }
  }
}

// Global singleton logger instance
let loggerInstance: LMSEventLogger | null = null;

export function getLMSEventLogger(): LMSEventLogger {
  if (!loggerInstance) {
    loggerInstance = new LMSEventLogger();
    loggerInstance.setupUnloadHandler();
  }
  return loggerInstance;
}

export default getLMSEventLogger;
