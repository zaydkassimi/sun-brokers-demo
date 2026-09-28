export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToElement(
  elementId: string,
  block: ScrollLogicalPosition = "start",
): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block,
  });
}

/** Met en évidence un élément via le DOM, sans provoquer de rendu React supplémentaire. */
export function highlightElement(element: HTMLElement, durationMs = 3200): () => void {
  element.classList.add("is-highlighted");

  const timer = window.setTimeout(() => {
    element.classList.remove("is-highlighted");
  }, durationMs);

  return () => window.clearTimeout(timer);
}
