import { ref } from 'vue';

export const lang = ref('');
export const tracker = ref('');
export const jurisdictionCode = ref('');
export const footerIcons = ref([]);
export const footerText = ref([]);
export const globalContent = ref({
  'About Us': 'aboutus',
  'Terms and conditions': 'terms',
  'Privacy Policy': 'privacy',
  'Bonus Policy': 'bonus',
  'Responsible Gaming': 'responsible',
  'Licence': 'license',
  'Payouts': 'payouts',
  'Depositing': 'deposits',
  'Cashing Out': 'withdrawals',
  'FAQ': 'faq',
  'Contact Us': 'contact',
});


// ProgressPlay data:
export const WHITELABEL_ID = 30;
export const PP_API_URL = 'https://prd-api.casino-pp.net/CmSHelper/';
const PP_PROMOTIONS_API = `${PP_API_URL}GetPromotionsInfo?whitelabelId=${WHITELABEL_ID}&country=`;
const PP_LOBBY_LINK = 'https://betdukes.casino-pp.net/';
//const KV_GAMES = `https://content.progressplay.net/api23/api/game?whitelabelId=${WHITELABEL_ID}`; // Test API


// WP-REST-API:
const WP_API = 'https://headless.betdukes.com/wp-json/wp/v2/';

//CloudFlare Workers KV data:
const KV_WORKER_URL = 'https://worker-casino-brands.tech1960.workers.dev/';
export const KV_GAMES = 'https://access-ppgames.tech1960.workers.dev/';
export const FILTERED_BY_NAME_KV = 'https://access-filterbyname.tech1960.workers.dev/';
const CF_GEO_WORKER = 'https://cf-geo-lookup.tech1960.workers.dev/';
const KV_SUPPORTED_COUNTRIES = "https://access-supportedcountries.tech1960.workers.dev/";
//const REST_COUNTRY_KV = "https://access-restcountries.tech1960.workers.dev/";
const IGP_SUPPORTED_COUNTRIES = "https://igp-supported-countries.tech1960.workers.dev/";
const KV_TRANSLATIONS ="https://access-translations.tech1960.workers.dev/";

const games = ref([]);
const newGames = ref([]);
const filterByName = ref([]);
const popularGames = ref([]);
const casinoGames = ref([]);
const jackpotGames = ref([]);
const slotGames = ref([]);
const liveGames = ref([]);
const scratchGames = ref([]);
const blackjackGames = ref([]);
const rouletteGames = ref([]);
const regLink = ref([null]);
const loginLink = ref([null]);
const playLink = ref([null]);
const msgTranslate = ref({});
const pp_promotions = ref([]);
const promotionsPosts = ref([]);
const countryCode = ref('');
const countryName = ref('');
const countries = ref('');
const country = ref('');
const countryNotSupported = ref(false);
const countriesData = ref([]);

export async function checkCountry() {
  try {
    const workerResponse = await fetch(CF_GEO_WORKER);
    const workerData = await workerResponse.json();
    const countryCodeValue = workerData.countryCode;

    if (!countryCode.value.includes(countryCodeValue)) {
      countryName.value = workerData.countryName;
      countryNotSupported.value = true;
    }
  } catch (error) {
    console.error('Error checking country:', error);
  }
}

export async function loadLang() {
  if (typeof window !== 'undefined') {
    let langValue;

    // 1. Check CF_GEO_WORKER for originalLang
    try {
      const workerResponse = await fetch(CF_GEO_WORKER);
      const workerData = await workerResponse.json();
      const originalLang = workerData.countryCode;

      // 2:1 Verify value with KV_SUPPORTED_COUNTRIES
      const apiResponse = await fetch(KV_SUPPORTED_COUNTRIES);
      const apiData = await apiResponse.json();
      const foundLangKV = apiData.find(c => c.countryIntlCode === originalLang);

      // Verify value with IGP_SUPPORTED_COUNTRIES
      const igpResponse = await fetch(IGP_SUPPORTED_COUNTRIES);
      const igpData = await igpResponse.json();
      const foundLangIGP = Object.values(igpData).flat().includes(originalLang);

      // Check if the originalLang exists in both KV's
      if (foundLangKV && foundLangIGP) {
        langValue = originalLang;
      } else {
        // If the country is not found in both KV's, set fallback to 'CA'
        langValue = 'CA';
      }
    } catch (error) {
      console.error('Error getting country code:', error);
    }

    // 2:2 Check if lang cookie exists
    const cookieLang = getCookie('lang');

    if (cookieLang) {
      // 2:3 Compare values, if same use cookie value
      if (langValue && langValue.toUpperCase() === cookieLang.toUpperCase()) {
        lang.value = cookieLang.toUpperCase();
      } else {
        // 2:4 If NOT same value (or empty lang cookie), set new lang cookie value from CF_GEO_WORKER value
        lang.value = langValue || 'CA';
        // Set the 'lang' cookie to the selected language for one month
        setCookie('lang', lang.value, 30, 'None', true);
      }
    } else {
      // 3. Fallback to "CA" if all the above fails
      lang.value = langValue || 'CA';
      // Set the 'lang' cookie to the selected language for one month
      setCookie('lang', lang.value, 30, 'None', true);
    }

    // Fetch the country data based on the selected language
    await fetchCountry();
  }
}

async function fetchCountry() {
  try {
    const response = await fetch(KV_SUPPORTED_COUNTRIES);
    if (!response.ok) {
      throw new Error(`Failed to fetch country data (status ${response.status})`);
    }
    const data = await response.json();
    //console.log('Selected language:', lang.value);
    const country = data.find(c => c.countryIntlCode === lang.value);
    //console.log('Found country:', country);
    if (country) {
      jurisdictionCode.value = country.jurisdictionCode;
      //console.log('jurisdictionCode:', jurisdictionCode.value);
    }
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
  await loadTranslations();
}

export async function loadTranslations() {
  try {
    const response = await fetch(IGP_SUPPORTED_COUNTRIES);
    const IGP_SUPPORTED_COUNTRIES_KV = await response.json();
    let langCode = lang.value;
    const countryCode = langCode;
    if (!Object.values(IGP_SUPPORTED_COUNTRIES_KV).flat().includes(countryCode)) {
      langCode = 'EN';
    } else {
      for (const [key, value] of Object.entries(IGP_SUPPORTED_COUNTRIES_KV)) {
        if (value.includes(countryCode)) {
          langCode = key.toLowerCase();
          break;
        }
      }
    }

    // Fetch translations from the worker
    const translationsResponse = await fetch(`${KV_TRANSLATIONS}?lang=${langCode}`);
    const allTranslations = await translationsResponse.json();

    msgTranslate.value = allTranslations;
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

async function fetchApiPromotions() {
  try {
    const response = await fetch(`${PP_API_URL}GetPromotionsInfo?whitelabelId=${WHITELABEL_ID}&country=${lang.value}`);
    const data = await response.json();
    pp_promotions.value = data;
    //console.log('this.pp_promotions 123: ', pp_promotions.value);
  } catch (error) {
    console.error(error);
  }
}

// In globalData.js
export async function fetchPromotions() {
  try {
    console.log('Fetching KV content for:', { WHITELABEL_ID, lang: lang.value });
    
    // Try current language first
    let response = await fetch(`${KV_WORKER_URL}content/${WHITELABEL_ID}/${lang.value}`);
    let data = null;

    if (response.ok) {
      data = await response.json();
    } else {
      // Try fallback languages in order
      const fallbackLangs = ['EN', 'CA', 'IE'];
      
      for (const fallbackLang of fallbackLangs) {
        if (fallbackLang === lang.value) continue;
        
        console.log(`Trying fallback: ${fallbackLang}`);
        response = await fetch(`${KV_WORKER_URL}content/${WHITELABEL_ID}/${fallbackLang}`);
        
        if (response.ok) {
          data = await response.json();
          break;
        }
      }
    }

    if (data && (data.acf || data.brand_info)) {
      // Ensure consistent structure for components
      promotionsPosts.value = [{
        id: `${WHITELABEL_ID}-${lang.value}`,
        acf: {
          ...data.acf,
          // Ensure all required fields exist with fallbacks
          new_games_info: data.acf.new_games_info || '',
          popular_games_info: data.acf.popular_games_info || '',
          slot_games_info: data.acf.slot_games_info || '',
          casino_games_info: data.acf.casino_games_info || '',
          jackpot_games_info: data.acf.jackpot_games_info || '',
          live_games_info: data.acf.live_games_info || '',
          scratch_games_info: data.acf.scratch_games_info || '',
          sig_terms: data.acf.sig_terms || '',
          image_full: data.acf.image_full || '',
          image_small: data.acf.image_small || '',
          trust_icons: data.acf.trust_icons || ''
        },
        brand_info: data.brand_info || {},
        yoast_head_json: data.yoast_head_json || {}
      }];
    } else {
      console.error('Invalid data structure received:', data);
      promotionsPosts.value = [];
    }

    console.log('Final promotionsPosts:', promotionsPosts.value);

  } catch (error) {
    console.error('Error fetching promotions:', error);
    promotionsPosts.value = [];
  }
}

export async function fetchFilterByName() {
  try {
    const response = await fetch(FILTERED_BY_NAME_KV);
    const data = await response.json();
    filterByName.value = data;
  } catch (error) {
    console.error('Error fetching filterByName:', error);
  }
}

async function fetchGames() {
  try {
    await fetchFilterByName();
    const response = await fetch(KV_GAMES);
    const data = await response.json();

    // Add your logic for processing the games data here
    const filteredGames = data.filter(game => {
      const hasName = filterByName.value.some(name => game.gameName.toLowerCase().includes(name.toLowerCase()));
      const hasId = filterByName.value.some(id => game.gameId == id);

      // Check for jurisdictionCode and excluded countries
      const isExcludedJurisdiction = game.excludedJurisdictions?.includes(jurisdictionCode.value);
      const isExcludedCountry = game.excludedCountries?.includes(lang.value);

      return !(hasName || hasId || isExcludedJurisdiction || isExcludedCountry);
    });

    games.value = filteredGames;
    newGames.value = filteredGames.filter(game => game.gameFilters?.includes('New'));
    popularGames.value = filteredGames.filter(game => game.gameFilters?.includes('Featured'));
	  casinoGames.value = filteredGames.filter(game => game.gameType?.includes('Casino'));
	  slotGames.value = filteredGames.filter(game => game.gameType?.includes('Slots'));
	  jackpotGames.value = filteredGames.filter(game => game.gameType?.includes('Jackpots'));
	  liveGames.value = filteredGames.filter(game => game.gameType?.includes('Live'));
	  scratchGames.value = filteredGames.filter(game => game.gameName?.toLowerCase().includes('scratch'));
    blackjackGames.value = filteredGames.filter(game => game.gameFilters?.includes('Blackjack'));
	  rouletteGames.value = filteredGames.filter(game => game.gameFilters?.includes('Roulette'));

      async function updateLinks() {
  const tracker = await handleParameter('tracker');
  const btag = await handleParameter('btag');
  const affid = await handleParameter('affid');
  const lang = getCookie('lang');

  const queryStringParams = [
    tracker ? `tracker=${tracker}` : '',
    btag ? `btag=${btag}` : '',
    affid ? `affid=${affid}` : '',
  ].filter(param => param !== '').join('&'); // Join only the non-empty parameters

  regLink.value = `${PP_LOBBY_LINK}${queryStringParams ? '?' + queryStringParams : ''}#registration`;
  loginLink.value = `${PP_LOBBY_LINK}${queryStringParams ? '?' + queryStringParams : ''}#login`;
  playLink.value = `${PP_LOBBY_LINK}${queryStringParams ? '?' + queryStringParams : ''}#play/`;
}

    await updateLinks();

  } catch (error) {
    console.error('Error fetching games:', error);
  }
}

export async function handleParameter(parameterName) {
  const params = new URLSearchParams(window.location.search);
  const parameterFromURL = params.get(parameterName);
  const parameterFromCookie = getCookie(parameterName);

  if (parameterFromURL) {
    setCookie(parameterName, parameterFromURL, 30, 'None', true);
    return parameterFromURL;
  } else if (parameterFromCookie) {
    return parameterFromCookie;
  } else {
    return ''; // Return an empty string if the parameter is not found in the URL or cookies
  }
}

export async function fetchSupportedCountries() {
  const response = await fetch(IGP_SUPPORTED_COUNTRIES);
  return await response.json();
}



// globalData.js
const footerIconsCache = new Map();
const footerTextCache = new Map();

export async function fetchFooterIcons(lang) {
  if (footerIconsCache.has(lang)) {
    footerIcons.value = footerIconsCache.get(lang);
  } else {
    const response = await fetch(`${PP_API_URL}GetInfoContentByCode?whitelabelId=${WHITELABEL_ID}&country=${lang}&code=footericon`);
    const data = await response.json();
    footerIcons.value = data;
    footerIconsCache.set(lang, data);
  }
}

export async function fetchFooterText(lang) {
  if (footerTextCache.has(lang)) {
    footerText.value = footerTextCache.get(lang);
  } else {
    const response = await fetch(`${PP_API_URL}GetInfoContentByCode?whitelabelId=${WHITELABEL_ID}&country=${lang}&code=footertext`);
    const data = await response.json();
    footerText.value = data;
    footerTextCache.set(lang, data);
  }
}



function setCookie(name, value, days, sameSite, secure) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  const sameSiteAttribute = sameSite ? '; SameSite=' + sameSite : '';
  const secureAttribute = secure ? '; Secure' : '';
  document.cookie = name + '=' + (value || '') + expires + sameSiteAttribute + secureAttribute + '; path=/';
}

function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export async function fetchCountriesData() {
  try {
    const IGP_SUPPORTED_COUNTRIES_KV = await fetchSupportedCountries();
    const countries = [];

    for (const [language, countryCodes] of Object.entries(IGP_SUPPORTED_COUNTRIES_KV)) {
      for (const countryCode of countryCodes) {
        try {
          countries.push({
            name: countryCode,
            code: countryCode,
            language: language,
            // Since REST_COUNTRY_KV is commented out, we'll use simple flags
            flagUrl: `/flags/${countryCode.toLowerCase()}.svg`
          });
        } catch (error) {
          console.error(`Error processing country ${countryCode}:`, error);
          continue;
        }
      }
    }

    return countries.filter(country => country.language !== '');
  } catch (error) {
    console.error('Error in fetchCountriesData:', error);
    return [];
  }
}


export { 
    //fetchPromotions, 
    fetchApiPromotions, 
    games, 
    newGames, 
    popularGames, 
    jackpotGames, 
    casinoGames, 
    slotGames, 
    scratchGames, 
    liveGames,
    blackjackGames,
    rouletteGames,
    regLink,
    loginLink,
    playLink,
    msgTranslate,
    pp_promotions,
    promotionsPosts,
    countryCode,
    countryName,
    countries,
    country,
    countriesData,
    countryNotSupported,
    fetchGames,
    getCookie, 
    setCookie, 
};
