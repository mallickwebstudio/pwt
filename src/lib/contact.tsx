// https://docs.google.com/forms/d/e/1FAIpQLSebTSvnECAfVDwiYrRUyjCbhFsJ7HmA9ywLxsIl9wCVFjX3_A/viewform?usp=pp_url&
// entry.2016174469=From&
// entry.216530647=Name&
// entry.1790803530=Phone&
// entry.1904630126=Msg&
// entry.400809540=Package&
// entry.1351210285=Month&
// entry.707668802=Traveler
import { toast } from "sonner";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebTSvnECAfVDwiYrRUyjCbhFsJ7HmA9ywLxsIl9wCVFjX3_A/formResponse";

const ENTRY = {
  name: "entry.216530647",
  phone: "entry.1790803530",
  message: "entry.1904630126",
  package: "entry.400809540",
  month: "entry.1351210285",
  traveller: "entry.707668802",
  type: "entry.2016174469",
} as const;

export interface FormSubmitData {
  name: string;
  phone: string;
  message?: string;
  package?: string;
  month?: string;
  traveller?: string;
  type?: string;
}

export async function handleFormSubmit(
  values: FormSubmitData
): Promise<boolean> {
  try {
    const formData = new FormData();

    const fields: Record<string, string | undefined> = {
      [ENTRY.name]: values.name,
      [ENTRY.phone]: values.phone,
      [ENTRY.message]: values.message,
      [ENTRY.package]: values.package,
      [ENTRY.month]: values.month,
      [ENTRY.traveller]: values.traveller,
      [ENTRY.type]: values.type ?? "Contact",
    };

    Object.entries(fields).forEach(([key, value]) => {
      if (value?.trim()) {
        formData.append(key, value.trim());
      }
    });

    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    toast.success("Form submitted successfully!");
    return true;
  } catch (error) {
    console.error("Form submission failed:", error);
    toast.error("Failed to submit the form. Please try again.");
    return false;
  }
}