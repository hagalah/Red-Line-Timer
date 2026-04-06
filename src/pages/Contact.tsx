import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ENDPOINT = "https://script.google.com/macros/s/AKfycbxJVqGwcVhdoJO8I4nTdnFPXvxd0uyGGuhHxgmwpnYcpt8PgQ2_encuvTSQNnq6HBdf/exec";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSending(true);
    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim().slice(0, 100),
          email: email.trim().slice(0, 255),
          message: message.trim().slice(0, 2000),
        }),
      });
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast({ title: "Error", description: "Failed to send. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      <div className="relative z-10 w-full max-w-lg mx-auto px-4 pt-16 sm:pt-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Timer
        </Link>

        <h1 className="font-display text-2xl sm:text-3xl font-black tracking-[0.15em] text-foreground text-glow mb-2">
          CONTACT <span className="text-primary">US</span>
        </h1>
        <p className="text-muted-foreground text-xs tracking-wider font-display uppercase mb-8">
          Send us a message
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Your name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              required
              className="bg-card border-border"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
              className="bg-card border-border"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your message *"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={2000}
              required
              rows={5}
              className="bg-card border-border"
            />
          </div>
          <Button type="submit" disabled={sending} className="w-full gap-2">
            <Send className="w-4 h-4" />
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
