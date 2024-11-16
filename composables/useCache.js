// Simple cache implementation
const cache = new Map();

export function getCacheKey(prefix, params = {}) {
  const sortedParams = Object.entries(params)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}:${value}`)
    .join('|');
  return `${prefix}|${sortedParams}`;
}

export function getCache(key) {
  const item = cache.get(key);
  if (!item) return null;
  
  if (item.expiry && item.expiry < Date.now()) {
    cache.delete(key);
    return null;
  }
  
  return item.value;
}

export function setCache(key, value, ttlMinutes = 5) {
  cache.set(key, {
    value,
    expiry: Date.now() + (ttlMinutes * 60 * 1000)
  });
}

export function clearCache() {
  cache.clear();
}