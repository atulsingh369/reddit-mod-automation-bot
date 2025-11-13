# Reddit Moderation Automation Bot

This project provides a lightweight backend + automation workflow designed to help subreddit moderators automate routine tasks using **n8n** and Reddit’s official API.

The bot focuses strictly on **moderation-related messaging**.  
It does *not* perform any form of unsolicited outreach, marketing, or user contact outside of actions triggered by subreddit moderators.

---

## Purpose

This bot assists moderators by automating these common tasks:

- Sending private messages to users with **removal reasons**  
- Sending **rule reminders** when users violate guidelines  
- Delivering **follow-up messages** when moderators request clarifications  
- Sending **event reminders** or participation prompts within the subreddit  
- Helping automate moderation queues using external triggers

All messaging is initiated by moderator action or subreddit workflows.

---

## Role of n8n?

Many moderation teams rely on external services (Sheets, Forms, APIs, mod-tools dashboards).  
This bot integrates **Reddit’s API** with external trigger sources using n8n’s automation features.

Typical examples:

- When a mod removes a post → n8n triggers → bot sends removal explanation  
- When a mod flags a user for review → bot sends a clarification request  
- When the subreddit schedules an event → bot sends reminders  
- When a mod tool updates a sheet → bot sends a follow-up message

---

## Tech Stack

- **n8n** (workflow automation)
- **Node.js** (light backend utility functions)
- **Reddit OAuth API**
- **Google Sheets** (optional for mod queues)
- **Webhook triggers** for moderation actions

---

## Project Structure

```
reddit-mod-automation-bot/
│
├── workflows/
│   ├── mod-removal-notice.json
│   ├── rule-reminder.json
│   └── event-reminder.json
│
├── src/
│   ├── oauth.js
│   ├── sendMessage.js
│   └── utils.js
│
└── README.md
```

---

## Messaging Behavior

Messages are sent when:
- a moderator removes a post  
- a moderator flags a user  
- a moderator triggers an automation workflow  
- the subreddit runs a scheduled event  

---

## How It Works

1. Moderator performs an action (remove/flag/update)
2. n8n receives webhook or external trigger
3. n8n calls Reddit API via OAuth
4. Bot sends an approved moderation message

Example JSON sent by the workflow:

POST /api/compose
{
"to": "u/atulsingh369",
"subject": "Regarding your recent post",
"text": "Hi, this is an automated message from the mod team .."
}

---

## Setup Instructions

1. Clone repo  
2. Install dependencies  
3. Configure your Reddit OAuth app  
4. Import workflows into n8n  
5. Connect your moderation triggers  

---

## License

MIT License — free for moderation/tooling use.

---

## Maintainer

**u/AtulSingh369**  
Building moderation automation tools for small subreddit communities.
