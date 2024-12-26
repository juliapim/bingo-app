export type Cell = {
    text: string;
    marked: boolean;
    free: boolean;
  };
  
  export const phrases = [
    "I love coffee",
    "I live for traveling",
    "I can speak more than 2 languages",
    "I play a musical instrument",
    "I have a pet",
    "I prefer working in the morning",
    "I’ve lived in another country",
    "I enjoy cooking or baking",
    "I’ve run a marathon",
    "I enjoy watching sci-fi movies",
    "I’m a fan of board games",
    "I’ve tried bungee jumping",
    "I love hiking or camping",
    "I’ve met a celebrity in person",
    "I enjoy gardening",
  ];
  
  export const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };