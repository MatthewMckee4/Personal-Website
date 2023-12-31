export function getShortenedLinkName(url) {
  const parts = url.split("/");
  const lastPart = parts[parts.length - 1].replace(/-/g, " ");
  return lastPart
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
