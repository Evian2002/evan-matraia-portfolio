import { useState } from "react";
import { toast } from "sonner";
import { Facebook, Globe } from "lucide-react";


export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "5cedfd33-7449-4887-a4a8-97351989b43f",
            name,
            email,
            website,
            message,
            subject: "New Portfolio Inquiry",
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! I'll get back to you soon.");

        setName("");
        setEmail("");
        setWebsite("");
        setMessage("");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setPending(false);
    }
  };

  return (
    <section id="contact-me" className="bg-background py-15">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-md border-2 border-border bg-background px-3 py-2 text-sm"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full rounded-md border-2 border-border bg-background px-3 py-2 text-sm"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full rounded-md border-2 border-border bg-background px-3 py-2 text-sm"
            placeholder="Your website (if exists)"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <textarea
            rows={5}
            className="w-full rounded-md border-2 border-border bg-background px-3 py-2 text-sm"
            placeholder="How can I help?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div className="flex items-center gap-2 pt-1">
            <button
              type="submit"
              disabled={pending}
              className="cursor-pointer rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {pending ? "Sending..." : "Get In Touch"}
            </button>
            <a
              href="https://www.facebook.com/profile.php?id=100009739929184"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-foreground text-background"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-foreground text-foreground"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </form>
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            Let's <span className="font-black tracking-tight">connect</span> for
            <br />A meaningful Project
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Let's connect and see if we are a good match. I look forward to working
            with you and bringing my design vision and skills to your project.
          </p>
          <p className="mt-5 text-sm font-semibold">evanmatraiajr@gmail.com</p>
          <p className="text-sm font-semibold">+38061372471</p>
        </div>
      </div>
    </section>
  );
}
