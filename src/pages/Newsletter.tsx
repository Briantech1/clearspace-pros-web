import { useEffect } from "react";

export default function Newsletter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    script.setAttribute("data-account", "1714208");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Join Our Newsletter</h1>
        <p className="text-gray-600 mb-6">
          Sign up for cleaning tips, special offers, and updates from ClearSpace Pros.
        </p>

        {/* MailerLite embedded form */}
        <div className="ml-embedded" data-form="SeLNiY"></div>

        {/* Styling override */}
        <style jsx global>{`
          .ml-embedded input[type="email"] {
            width: 100%;
            padding: 12px 16px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin-bottom: 16px;
          }

          .ml-embedded button {
            background-color: #1e40af;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
          }

          .ml-embedded button:hover {
            background-color: #1d4ed8;
          }

          .ml-embedded * {
            font-family: 'Inter', sans-serif;
          }

          .ml-embedded h4 {
            display: none !important;
          }
        `}</style>
      </div>
    </div>
  );
}
