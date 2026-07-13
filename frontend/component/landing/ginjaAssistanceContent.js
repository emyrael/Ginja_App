export const GINJA_ASSISTANCE_CONTENT = {
  eyebrow: 'GINJA ASSISTANCE',
  headline: 'Your assistant, wherever you message.',
  body: 'You already send messages every day. Now you can message Ginja on WhatsApp or by text to capture tasks, check your plans, and decide what to do next — without opening another app first.',
  channels: ['WhatsApp', 'SMS'],
  channelLine: 'Available on WhatsApp and SMS.',
  benefits: [
    {
      title: 'Capture anything instantly',
      body: 'Turn a simple message into a task, reminder, or plan.',
    },
    {
      title: 'Understand your day',
      body: 'Ask what is coming up, what is overdue, or what time you are free.',
    },
    {
      title: 'Move naturally into Ginja',
      body: 'When the next step needs more context, Ginja guides you into the right part of the app.',
    },
  ],
  cta: 'See how Ginja Assistance works',
  closing: 'Productivity should start the moment you have the thought — not when you remember to open an app.',
  phoneNote: 'The same connected experience is available through SMS/text.',
  conversation: {
    firstRequest: 'Remind me to send my report at 4 PM tomorrow.',
    firstResponse: "Done — I've added 'Send report' for tomorrow at 4:00 PM.",
    confirmation: 'Task created',
    scheduleRequest: 'What are my tasks tomorrow?',
    scheduleTitle: 'Tomorrow',
    tasks: [
      { title: 'Team stand-up', time: '9:00 AM' },
      { title: 'Send report', time: '4:00 PM', created: true },
      { title: 'Gym', time: '6:00 PM' },
    ],
    eveningInsight: 'Your evening is free after 7:00 PM.',
    exploreRequest: 'What can I do this evening?',
    exploreResponse: 'Looks like you have some free time. Open Explore to see personalised places, events, and activities near you.',
    exploreAction: 'Open Explore',
  },
};
