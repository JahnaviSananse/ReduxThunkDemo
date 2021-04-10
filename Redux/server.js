export const severData = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        resolve(json);
        return;
      });
  });
};
