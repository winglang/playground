import { countSamesiteTabs } from "./count-samesite-tabs";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 10);

interface MaybeRedirectOptions {
  /**
   * Maximum number of tabs to allow in the same site.
   * @min 1
   */
  maxTabs?: number;

  /**
   * The main site URL.
   * @example "https://play.wing.dev"
   */
  mainSite?: string;

  /**
   * The subdomain site URL. Must contain "xxx" as a placeholder for the subdomain.
   * @example "https://xxx.play.wing.dev"
   */
  subdomainSite?: string;
}

/**
 * Counts the number of tabs open in the same site and redirects to a subdomain if necessary.
 *
 * Also, redirects back to the main site if there's enough room.
 *
 * If either the mainSite or the subdomainSite are missing, it will not redirect.
 *
 * @returns whether the page is being redirected
 */
export const maybeRedirect = async (options: MaybeRedirectOptions) => {
  if (!options.mainSite || !options.subdomainSite) {
    console.info("missing mainSite or subdomainSite");
    return false;
  }

  const maxTabs = Math.max(1, options.maxTabs ?? 0);

  const { samesiteTabs } = await countSamesiteTabs();
  console.info({ samesiteTabs });

  const mainSiteURL = new URL(options.mainSite);
  const subdomainSiteURL = new URL(options.subdomainSite);

  const isMainSite = location.hostname === mainSiteURL.hostname;
  const isSubdomainSite = new RegExp(
    `^${subdomainSiteURL.hostname
      .replaceAll(".", "\\.")
      .replace("xxx", "(.+?)")}$`,
  ).test(location.hostname);

  const redirectToMainSite = () => {
    const newURL = `${mainSiteURL.toString()}${location.search}`;
    console.info("redirecting to main site", newURL);
    location.replace(newURL);
  };
  const redirectToSubdomainSite = () => {
    const newURL = `${subdomainSiteURL.toString().replace("xxx", nanoid())}${
      location.search
    }`;
    console.info("redirecting to subdomain site", newURL);
    location.replace(newURL);
  };

  if (samesiteTabs <= maxTabs) {
    return false;
  }

  if (isMainSite) {
    redirectToSubdomainSite();
    return true;
  }

  if (isSubdomainSite) {
    redirectToMainSite();
    return true;
  }

  console.info("skipping redirect. neither main site nor subdomain site");
  return false;
};
