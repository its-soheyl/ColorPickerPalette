// Define the letters that make up a color
export const letter: string[] = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

// Define function for build a Hex color
export const getColor = () => {
  // Define New Array for push color letters in
  let color: string[] = [];
  for (let i = 0; i < 3; i++) {
    color.push(
      letter[Math.floor(Math.random() * 16)] +
        letter[Math.floor(Math.random() * 16)],
    );
  }
  let code = '#' + color[0] + color[1] + color[2];
  color = [];
  return code;
};

export const getNineNew = () => {
  return [
    getColor(),
    getColor(),
    getColor(),
    getColor(),
    getColor(),
    getColor(),
    getColor(),
    getColor(),
    getColor(),
  ];
};
