import { whatsappLink } from "@/content/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp Us
    </a>
  );
}
