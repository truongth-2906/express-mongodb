const randomCharacters = (length) => {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  let result = '';
  let count = 0;
  while (count < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    count++;
  }

  return result;
}

const str = randomCharacters(64);
console.log(str);

