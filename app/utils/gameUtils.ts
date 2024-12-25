export type Cell = {
    text: string;
    marked: boolean;
    free: boolean;
  };
  
  export const phrases = [
    "You're on mute",
    "Sorry, I couldn't log in",
    "I had connection issues",
    "Can you repeat that?",
    "I think you're frozen",
    "Can everyone see my screen?",
    "Let's circle back",
    "I'll ping you later",
    "Sorry, I was on another call",
    "Let's take this offline",
    "Can you hear me now?",
    "You're muted",
    "I'll follow up",
    "Quick question",
    "I have a hard stop",
  ];
  
  export const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };