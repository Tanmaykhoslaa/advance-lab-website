export const WhatsAppButton = () => {
  const phone = "917988927387";
  const text = encodeURIComponent("Hi, I'm interested in your lab equipment.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center shadow-glow bg-[hsl(142_70%_45%)] hover:scale-110 transition-smooth"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor">
        <path d="M19.11 17.21c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM16.02 4C9.4 4 4.04 9.36 4.04 15.98c0 2.11.55 4.17 1.6 5.98L4 28l6.22-1.63c1.74.95 3.71 1.45 5.71 1.45h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.21-3.51-8.47A11.9 11.9 0 0016.02 4z"/>
      </svg>
    </a>
  );
};
