import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Remove any existing Jobber script first
    const oldScript = document.getElementById("jobber-script");
    if (oldScript) {
      oldScript.remove();
    }

    // Remove old form container content (if needed)
    const container = document.getElementById("8b08d54f-b0f8-4a55-9aef-5bb6b4a24c11");
    if (container) {
      container.innerHTML = "";
    }

    // Inject new Jobber script
    const script = document.createElement("script");
    script.id = "jobber-script";
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.async = true;
    script.setAttribute("clienthub_id", "8b08d54f-b0f8-4a55-9aef-5bb6b4a24c11");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/8b08d54f-b0f8-4a55-9aef-5bb6b4a24c11/public/work_request/embedded_work_request_form");
    document.body.appendChild(script);

    // Add stylesheet if needed
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
    link.media = "screen";
    document.head.appendChild(link);
  }, []);

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div
          id="8b08d54f-b0f8-4a55-9aef-5bb6b4a24c11"
          className="w-full min-h-[600px]"
        />
      </div>
    </section>
  );
};

export default Contact;
