import { useState } from "react";

export type SubscriptionStatus = "idle" | "loading" | "success" | "error";

export function useSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscriptionStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    const callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());
    const mailchimpUrl = `https://gmail.us8.list-manage.com/subscribe/post-json?u=4aa947ff0111cc91bb44e1ae9&id=e3608104c1&f_id=007eb6e3f0&EMAIL=${encodeURIComponent(email)}&c=${callbackName}`;
    
    const currentEmail = email; // Capture for closure safety

    (window as any)[callbackName] = (data: any) => {
      console.log("Mailchimp Response:", data);
      
      delete (window as any)[callbackName];
      const script = document.getElementById(callbackName);
      if (script) script.remove();

      if (data.result === "success") {
        setStatus("success");
        
        // Handle Double Opt-In or Direct Success messages
        if (data.msg?.toLowerCase().includes("confirm")) {
          setMessage("Almost there! Please check your inbox and confirm your subscription.");
        } else {
          setMessage("Priority access secured. We have sent an acknowledgement email to your inbox.");
        }

        console.log("Triggering custom acknowledgement for:", currentEmail);
        
        // Trigger custom acknowledgement email asynchronously
        fetch('/api/send-acknowledgement', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: currentEmail })
        })
        .then(res => res.json())
        .then(json => console.log("Custom Email API Response:", json))
        .catch(err => console.error("Failed to trigger acknowledgement email", err));

      } else {
        const errorMsg = data.msg?.toString() || "";
        if (errorMsg.toLowerCase().includes("already subscribed")) {
          setStatus("success"); 
          setMessage("You are already subscribed to our waitlist.");
        } else {
          setStatus("error");
          setMessage(errorMsg.replace(/^\d+\s-\s/, "") || "An error occurred.");
        }
      }
    };

    const script = document.createElement("script");
    script.src = mailchimpUrl;
    script.id = callbackName;
    document.body.appendChild(script);
  };

  return {
    email,
    setEmail,
    status,
    message,
    handleSubmit
  };
}
