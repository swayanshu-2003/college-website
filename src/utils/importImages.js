
export const importImages = async (path) => {
  const tempImages = [];
  let i = 1;

  while (true) {
    try {
      const image = await import(`${path}/${i}.jpg`); //imp - all images should be in jpg format
      tempImages.push(image.default);
      i++;
    } catch (err) {
      console.error(`Error loading image ${i}.jpg:`, err);
      break; // Exit the loop when an image is not found
    }
  }
  console.log(tempImages)
  return tempImages;
}