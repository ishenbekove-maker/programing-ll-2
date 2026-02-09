export const fetchWithDelay = async (url, delayMs = 2000) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  await new Promise(resolve => setTimeout(resolve, delayMs)); // Artificial delay
  return response.json();
};