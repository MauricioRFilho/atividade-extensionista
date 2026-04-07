import { track } from "@vercel/analytics";

/**
 * Utilitário para rastrear eventos customizados na aplicação.
 * @param eventName Nome amigável do evento (ex: 'video_play', 'category_click')
 * @param properties Objeto com propriedades extras (ex: { title: 'Como usar WhatsApp' })
 */
export const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean | null>) => {
  try {
    // Apenas rastreia se estiver no navegador
    if (typeof window !== "undefined") {
      track(eventName, properties);
      
      // Log em desenvolvimento para debug
      if (process.env.NODE_ENV === "development") {
        console.log(`[Telemetry] Event: ${eventName}`, properties);
      }
    }
  } catch (error) {
    console.error("[Telemetry Error]", error);
  }
};
