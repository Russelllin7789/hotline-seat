export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const navbarHeight = window.innerWidth < 640 ? 64 : 72;
  const elementPosition = element.offsetTop - navbarHeight - 16;
  const startPosition = window.pageYOffset;
  const distance = elementPosition - startPosition;
  const duration = Math.min(800, Math.abs(distance) * 0.5);
  let startTime: number | null = null;

  const easeInOutCubic = (t: number): number =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateScroll);
}
