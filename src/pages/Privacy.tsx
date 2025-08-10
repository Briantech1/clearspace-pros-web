// src/pages/Privacy.tsx
import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <main className="px-4 py-10">
      <SEO
        title="Privacy Policy | ClearSpace Pros LLC"
        description="How ClearSpace Pros LLC collects, uses, and protects your information."
        canonical="https://your-domain.com/privacy"
      />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-clean-gray mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="text-clean-gray mb-6">
          ClearSpace Pros LLC (“we,” “us,” or “our”) provides residential and commercial cleaning
          services across Maryland. We respect your privacy and are committed to protecting the
          information you share with us.
        </p>

        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">1) Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-2 text-clean-gray">
          <li><strong>Contact details</strong> (name, phone, email).</li>
          <li><strong>Service info</strong> (property details, job notes, photos you provide).</li>
          <li><strong>Payments</strong> (processed by Stripe or Jobber— we don’t store full card numbers).</li>
          <li><strong>Website data</strong> (IP, pages viewed, basic analytics, and cookies).</li>
        </ul>

        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">2) How We Use It</h2>
        <ul className="list-disc ml-6 space-y-2 text-clean-gray">
          <li>Provide quotes, schedule jobs, and perform services.</li>
          <li>Send invoices/receipts and process payments.</li>
          <li>Communicate about appointments and updates.</li>
          <li>Send marketing emails (you can unsubscribe anytime).</li>
          <li>Improve our website and service quality.</li>
          <li>Comply with applicable laws.</li>
        </ul>

        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">3) Cookies</h2>
        <p className="text-clean-gray mb-4">
          We use cookies to keep the site reliable, understand traffic, and improve your experience.
          You can block cookies in your browser settings; some features may not work as expected.
        </p>

        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">4) Sharing</h2>
        <p className="text-clean-gray mb-2">
          We <strong>do not sell</strong> personal information. We share only as needed with:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-clean-gray">
          <li><strong>Stripe</strong> (payment processing).</li>
          <li><strong>Jobber</strong> (client portal, scheduling, invoices).</li>
          <li>Website/IT/analytics providers (to run and improve the site).</li>
          <li>Law enforcement or regulators if legally required.</li>
        </ul>

        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">5) Data Security & Retention</h2>
        <p className="text-clean-gray mb-4">
          We use reasonable safeguards and trusted processors. No system is 100% secure. We retain
          data only as long as necessary for services, legal obligations, and business records.
        </p>

        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">6) Children’s Privacy</h2>
        <p className="text-clean-gray mb-4">
          Our services are not directed to children under 16, and we don’t knowingly collect their data.
        </p>

        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">7) Your Choices</h2>
        <ul className="list-disc ml-6 space-y-2 text-clean-gray">
          <li>Opt out of marketing emails via the unsubscribe link.</li>
          <li>Block cookies in your browser settings.</li>
          <li>Request access, correction, or deletion: <a className="text-clean-blue underline" href="mailto:connect@clearspacepros.com">connect@clearspacepros.com</a></li>
        </ul>

        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">8) Contact</h2>
        <p className="text-clean-gray mb-4">
          Questions or requests: <a className="text-clean-blue underline" href="mailto:connect@clearspacepros.com">connect@clearspacepros.com</a>
        </p>

        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">9) Changes</h2>
        <p className="text-clean-gray">
          If we update this policy, we’ll post the new version here and update the date above.
        </p>
      </div>
    </main>
  );
}
