const isDevelopment = import.meta.env.DEV;
const baseUrl = isDevelopment ? '' : '/Vrent';

export const getImageUrl = (imagePath) => {
  // Remove any leading slashes from the image path
  const cleanPath = imagePath.replace(/^\/+/, '');
  // Encode the image path to handle spaces and special characters
  const encodedPath = encodeURIComponent(cleanPath);
  // Return the full URL with base path
  const finalUrl = `${baseUrl}/${encodedPath}`;
  console.log('Image URL:', {
    original: imagePath,
    clean: cleanPath,
    encoded: encodedPath,
    final: finalUrl,
    isDev: isDevelopment
  });
  return finalUrl;
}; 