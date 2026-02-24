export const fetchWithDelay = async (url, options = {}, delayMs = 1800) => {
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} — ${response.statusText}`);
  }

  await new Promise(r => setTimeout(r, delayMs));

  // Для DELETE часто возвращается пустой ответ
  if (options.method === 'DELETE') {
    return { success: true };
  }

  return response.json();
};