import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
      <p className="text-gray-400 mb-2 text-sm">
        Get the latest news and updates
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
