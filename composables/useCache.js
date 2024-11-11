export const useCache = () => {
  const getCacheKey = (prefix, identifiers = {}) => {
    const parts = [prefix];
    Object.entries(identifiers).forEach(([key, value]) => {
      parts.push(`${key}:${value}`);
    });
    return parts.join('-');
  };

  const getCache = (key) => {
    if (process.server) return null;
    
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const cacheAge = Date.now() - timestamp;
    
    // Cache expires after 5 minutes (adjust as needed)
    if (cacheAge > 5 * 60 * 1000) {
      localStorage.removeItem(key);
      return null;
    }
    
    return data;
  };

  const setCache = (key, data) => {
    if (process.server) return;
    
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  };

  return {
    getCacheKey,
    getCache,
    setCache
  };
};