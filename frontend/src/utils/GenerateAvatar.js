const generateDiceBearAvataaars = (seed) =>
  `https://api.dicebear.com/8.x/avataaars/svg?seed=${seed}`;
const generateDiceBearBottts = (seed) =>
  `https://api.dicebear.com/8.x/bottts/svg?seed=${seed}`;
const generateDiceBearGridy = (seed) =>
  `https://api.dicebear.com/8.x/gridy/svg?seed=${seed}`;

export const generateAvatar = () => {
  const data = [];
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAvataaars(
      Math.random().toString(36).substring(2, 10)
    );
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearBottts(
      Math.random().toString(36).substring(2, 10)
    );
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearGridy(
      Math.random().toString(36).substring(2, 10)
    );
    data.push(res);
  }
  return data;
};
