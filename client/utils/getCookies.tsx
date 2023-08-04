export const getCookie = (name: string): string | null => {
  if (typeof window === "undefined") {
    return null; // Return null on the server side
  }

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};
