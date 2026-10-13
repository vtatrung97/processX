import { AppProperty, KeycloakConfig, ServiceCategory } from "@core/models/env.model";

const _window: any = typeof window !== 'undefined' ? window : {};
const windowEnv = _window['env'] || {};

export const WEB_PHONE = windowEnv.WEB_PHONE || 'https://demo.moj.gov.vn:9976/webphone';
export const WEB_DOMAIN_URL = windowEnv.WEB_DOMAIN_URL || 'http://localhost:4200';
export const KEYCLOAK: KeycloakConfig = windowEnv.KEYCLOAK || {
  endpoint: 'http://192.168.10.24:8081',
  requireHttps: false,
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false
};
export const SERVICES: ServiceCategory = windowEnv.SERVICES || ({} as any);
export const LOCAL_SERVICES: ServiceCategory = windowEnv.LOCAL_SERVICES || ({} as any);
export const PROPERTIES: AppProperty = windowEnv.PROPERTIES || ({} as any);
export const REPORT_PROPERTIES = windowEnv.REPORT_PROPERTIES || {};
export const BCCS_URL = windowEnv.BCCS_URL || '';
export const ZALO_AUTH_URL = windowEnv.ZALO_AUTH_URL || '';
export const ZALO_CALLBACK = windowEnv.ZALO_CALLBACK || '';
export const ZONE_ALIAS = windowEnv.ZONE_ALIAS || { HN: 'hn', HCM: 'hcm' };
export const FACEBOOK_PROPERTIES = windowEnv.FACEBOOK_PROPERTIES || {};
export const CALL_BOT = windowEnv.CALL_BOT || {};
export const AGENTMATE = windowEnv.AGENTMATE || {};
export const WHATSAPP = windowEnv.WHATSAPP || {};

export const environment = {
  production: false,
  local: true,
  stompDebug: true,
  WEB_PHONE: WEB_PHONE,
  WEB_DOMAIN_URL: WEB_DOMAIN_URL,
  REPORT_PROPERTIES: REPORT_PROPERTIES,
  FACEBOOK_PROPERTIES: FACEBOOK_PROPERTIES,
  CALL_BOT: CALL_BOT,
  AGENTMATE: AGENTMATE,
  WHATSAPP: WHATSAPP,
};
