import type { Social } from "@/lib/types";
import { whatsappHref } from "@/data/contact";

export const socials: Social[] = [
  {
    label: "WhatsApp",
    href: whatsappHref,
    icon: "phone"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dimas-firmansyah-73787b124/",
    icon: "linkedin"
  }
];
