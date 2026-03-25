export const whatsappNumber = "628994106932";
export const contactLocation = "Bandung";

export const whatsappHref = `https://wa.me/${whatsappNumber}`;

export function createWhatsAppHref(message?: string) {
  if (!message?.trim()) return whatsappHref;

  return `${whatsappHref}?text=${encodeURIComponent(message.trim())}`;
}
