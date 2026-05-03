export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateWALink(phone: string, message: string): string {
  // Remove any non-numeric characters from the phone number
  const cleanPhone = phone.replace(/\D/g, "");
  // Ensure the phone number starts with the country code (e.g., 62 for Indonesia)
  const formattedPhone = cleanPhone.startsWith("0") 
    ? `62${cleanPhone.slice(1)}` 
    : cleanPhone;
    
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
