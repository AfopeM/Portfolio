export function handleScrollTo(link: string) {
  (document.getElementById(link) as HTMLElement).scrollIntoView({
    behavior: "smooth",
  });
}
