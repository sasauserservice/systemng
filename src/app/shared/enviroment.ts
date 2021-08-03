export const BASEURI = "https://systemapi.tumbleusa.us/api/";
export const PEXELSURI = "https://api.pexels.com/v1/search/";
export const MEMORYTRANSLATE = "https://api.mymemory.translated.net/get";
export const GOOGLESEARCH = "https://www.googleapis.com/customsearch/v1";
export const GOOGLE_GKEY = "AIzaSyDVYUfyHgGZkA-68ZsJpi1aTAjstd4_S1I";
export const GOOGLE_GCX  = "008449371650466549478:3-4bwsyvyka";

export function generateRandomString(cant: number = 6){
    return Math.random().toString(36).substr(2, cant);
}