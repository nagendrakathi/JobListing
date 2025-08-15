export function timeAgoString(createdAt) {
  if (!createdAt) return "";
  const now = new Date();
  const created = new Date(createdAt);
  const diffMs = now - created;

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return `Just now`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}w ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  const years = Math.floor(days / 365);
  return `${years}y ago`;
}

export function formatSalaryRange(rangeStr) {
  if (!rangeStr) return "";
  const parts = rangeStr.split("-");
  if (parts.length !== 2) return "";
  const maxSalary = Number(parts[1]);
  const lpaValue = Math.round(maxSalary / 100000);
  return `₹${lpaValue} LPA`;
}
export function findExp(jobType, title) {
  let experience = "";
  if (title === "FullTime") {
    if (title.includes("Senior")) {
      experience = "3-5yr Exp";
    }
    experience = "1-3yr Exp";
  } else if (jobType === "PartTime") {
    experience = "0-1yr Exp";
  } else if (jobType === "Internship") {
    experience = "Fresher";
  }
}

export const token=import.meta.env.LOGO_API;
export function getCompanyLogo(name){
  if (!name) return `/companyLogos/default.svg`;
  name = name.toLowerCase().replace(/\s+/g, "-");
  return `https://img.logo.dev/${name}.com?token=pk_YIP8vkw7SEa7ok-qbG35wg`
}
