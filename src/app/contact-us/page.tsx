import { redirect } from "next/navigation";

/** /contact-us → permanent redirect to /contact */
export default function ContactUsRedirect() {
  redirect("/contact");
}
