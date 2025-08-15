export function timeAgoString(createdAt) {
  if (!createdAt) return "";
  const now = new Date();
  const created = new Date(createdAt);
  const diffMs = now - created;

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return `Just now`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m Ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h Ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d Ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}w Ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo Ago`;
  const years = Math.floor(days / 365);
  return `${years}y Ago`;
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

const LOGO_API = import.meta.env.VITE_LOGO_API;

export function getCompanyLogo(name){
  if (!name) return `/companyLogos/default.svg`;
  name = name.toLowerCase().replace(/\s+/g, "-");
  return `https://img.logo.dev/${name}.com?token=${LOGO_API}`;
}