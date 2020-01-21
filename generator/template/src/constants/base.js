const isDev = process.env.NODE_ENV==='development';
const baseUrl = process.env.BASE_URL;
export default {
  BASE_URL:baseUrl,
  IS_DEV:isDev
}
