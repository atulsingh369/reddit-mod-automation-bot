const fetch = require("node-fetch");

/**
 * Sends a private message to a Reddit user using the API.
 * @param {string} accessToken - OAuth access token
 * @param {string} username - Recipient username (e.g. "u/example")
 * @param {string} subject - Message subject line
 * @param {string} text - Body of the message
 */
async function sendModerationMessage(accessToken, username, subject, text) {
  const endpoint = "https://oauth.reddit.com/api/compose";

  const form = new URLSearchParams();
  form.append("to", username);
  form.append("subject", subject);
  form.append("text", text);

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: form
  });

  if (!res.ok) {
    console.error("Failed to send message:", await res.text());
  }

  return res.json();
}

module.exports = {
  sendModerationMessage
};
