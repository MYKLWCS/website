type PartnerLead = {
  id: string;
  createdAt: string;
  partnerId?: string;
  utm?: Record<string, string>;
  name?: string;
  email?: string;
  phone?: string;
  vehicle?: { year?: number; make?: string; model?: string };
  status: "created" | "qualified" | "application_started" | "application_completed" | "funded";
};

type PartnerLink = {
  id: string;
  createdAt: string;
  partnerId: string;
  url: string;
};

const leads: PartnerLead[] = [];
const links: PartnerLink[] = [];

function uid(prefix: string) {
  return `${prefix}_${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
}

function now() {
  return new Date().toISOString();
}

export function createLead(input: Partial<PartnerLead>) {
  const lead: PartnerLead = {
    id: uid("lead"),
    createdAt: now(),
    status: "created",
    ...input
  };
  leads.push(lead);
  return lead;
}

export function getLead(id: string) {
  return leads.find((l) => l.id === id) || null;
}

export function listLeads() {
  return leads.slice().reverse();
}

export function createTrackedLink(partnerId: string, baseUrl = "https://dollarloans.example/#prequal") {
  const url = `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}partnerId=${encodeURIComponent(partnerId)}`;
  const link: PartnerLink = { id: uid("plink"), createdAt: now(), partnerId, url };
  links.push(link);
  return link;
}

export function getMetrics(partnerId?: string) {
  const filtered = partnerId ? leads.filter((l) => l.partnerId === partnerId) : leads;
  const counts = filtered.reduce(
    (acc, l) => {
      acc.total += 1;
      acc.byStatus[l.status] = (acc.byStatus[l.status] || 0) + 1;
      return acc;
    },
    { total: 0, byStatus: {} as Record<string, number> }
  );
  return counts;
}

