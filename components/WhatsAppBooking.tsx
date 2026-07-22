const WHATSAPP_BOOKING_URL =
  "https://wa.me/15556263182?text=Booking%20request%20%E2%80%94%20Arshad%20Staging%20Shopzz%20%5BREF%3AA0YQC2%5D";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    className="h-6 w-6"
  >
    <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.58-1.67a12.74 12.74 0 0 0 6.22 1.61h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.72 12.72 0 0 0-9.05-3.69zm0 23.39h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.02 1.07-3.92-.25-.4a10.55 10.55 0 0 1-1.63-5.66c0-5.87 4.78-10.65 10.66-10.65 2.84 0 5.51 1.11 7.52 3.12a10.58 10.58 0 0 1 3.11 7.53c0 5.88-4.78 10.67-10.66 10.67zm5.84-7.98c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.51-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.77.25 1.46.21 2.01.13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
  </svg>
);

const WhatsAppBooking = () => (
  <section className="w-full max-w-5xl px-2">
    <div className="relative overflow-hidden rounded-xl border border-emerald-300/70 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-lg dark:border-emerald-800/70 dark:from-emerald-950/60 dark:via-slate-900 dark:to-teal-950/50 lg:p-10">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-700/20"
      />
      <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="flex flex-col gap-3">
          <span className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300 lg:justify-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Book a session
          </span>
          <h2 className="text-2xl font-semibold lg:text-3xl">
            Liked the demo? Book directly on WhatsApp
          </h2>
          <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300 lg:text-base">
            Send a booking request in one tap — your message comes pre-filled
            with the reference so I know exactly what you are looking at.
          </p>
        </div>
        <a
          href={WHATSAPP_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-4 text-lg font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
        >
          <WhatsAppIcon />
          Book on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default WhatsAppBooking;
