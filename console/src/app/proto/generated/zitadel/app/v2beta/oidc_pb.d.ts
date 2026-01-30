import * as jspb from 'google-protobuf'

import * as zitadel_app_v2beta_login_pb from '../../../zitadel/app/v2beta/login_pb'; // proto import: "zitadel/app/v2beta/login.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"


export class OIDCLocalizedMessage extends jspb.Message {
  getKey(): string;
  setKey(value: string): OIDCLocalizedMessage;

  getLocalizedMessage(): string;
  setLocalizedMessage(value: string): OIDCLocalizedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OIDCLocalizedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OIDCLocalizedMessage): OIDCLocalizedMessage.AsObject;
  static serializeBinaryToWriter(message: OIDCLocalizedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OIDCLocalizedMessage;
  static deserializeBinaryFromReader(message: OIDCLocalizedMessage, reader: jspb.BinaryReader): OIDCLocalizedMessage;
}

export namespace OIDCLocalizedMessage {
  export type AsObject = {
    key: string,
    localizedMessage: string,
  }
}

export class OIDCConfig extends jspb.Message {
  getRedirectUrisList(): Array<string>;
  setRedirectUrisList(value: Array<string>): OIDCConfig;
  clearRedirectUrisList(): OIDCConfig;
  addRedirectUris(value: string, index?: number): OIDCConfig;

  getResponseTypesList(): Array<OIDCResponseType>;
  setResponseTypesList(value: Array<OIDCResponseType>): OIDCConfig;
  clearResponseTypesList(): OIDCConfig;
  addResponseTypes(value: OIDCResponseType, index?: number): OIDCConfig;

  getGrantTypesList(): Array<OIDCGrantType>;
  setGrantTypesList(value: Array<OIDCGrantType>): OIDCConfig;
  clearGrantTypesList(): OIDCConfig;
  addGrantTypes(value: OIDCGrantType, index?: number): OIDCConfig;

  getAppType(): OIDCAppType;
  setAppType(value: OIDCAppType): OIDCConfig;

  getClientId(): string;
  setClientId(value: string): OIDCConfig;

  getAuthMethodType(): OIDCAuthMethodType;
  setAuthMethodType(value: OIDCAuthMethodType): OIDCConfig;

  getPostLogoutRedirectUrisList(): Array<string>;
  setPostLogoutRedirectUrisList(value: Array<string>): OIDCConfig;
  clearPostLogoutRedirectUrisList(): OIDCConfig;
  addPostLogoutRedirectUris(value: string, index?: number): OIDCConfig;

  getVersion(): OIDCVersion;
  setVersion(value: OIDCVersion): OIDCConfig;

  getNoneCompliant(): boolean;
  setNoneCompliant(value: boolean): OIDCConfig;

  getComplianceProblemsList(): Array<OIDCLocalizedMessage>;
  setComplianceProblemsList(value: Array<OIDCLocalizedMessage>): OIDCConfig;
  clearComplianceProblemsList(): OIDCConfig;
  addComplianceProblems(value?: OIDCLocalizedMessage, index?: number): OIDCLocalizedMessage;

  getDevMode(): boolean;
  setDevMode(value: boolean): OIDCConfig;

  getAccessTokenType(): OIDCTokenType;
  setAccessTokenType(value: OIDCTokenType): OIDCConfig;

  getAccessTokenRoleAssertion(): boolean;
  setAccessTokenRoleAssertion(value: boolean): OIDCConfig;

  getIdTokenRoleAssertion(): boolean;
  setIdTokenRoleAssertion(value: boolean): OIDCConfig;

  getIdTokenUserinfoAssertion(): boolean;
  setIdTokenUserinfoAssertion(value: boolean): OIDCConfig;

  getClockSkew(): google_protobuf_duration_pb.Duration | undefined;
  setClockSkew(value?: google_protobuf_duration_pb.Duration): OIDCConfig;
  hasClockSkew(): boolean;
  clearClockSkew(): OIDCConfig;

  getAdditionalOriginsList(): Array<string>;
  setAdditionalOriginsList(value: Array<string>): OIDCConfig;
  clearAdditionalOriginsList(): OIDCConfig;
  addAdditionalOrigins(value: string, index?: number): OIDCConfig;

  getAllowedOriginsList(): Array<string>;
  setAllowedOriginsList(value: Array<string>): OIDCConfig;
  clearAllowedOriginsList(): OIDCConfig;
  addAllowedOrigins(value: string, index?: number): OIDCConfig;

  getSkipNativeAppSuccessPage(): boolean;
  setSkipNativeAppSuccessPage(value: boolean): OIDCConfig;

  getBackChannelLogoutUri(): string;
  setBackChannelLogoutUri(value: string): OIDCConfig;

  getLoginVersion(): zitadel_app_v2beta_login_pb.LoginVersion | undefined;
  setLoginVersion(value?: zitadel_app_v2beta_login_pb.LoginVersion): OIDCConfig;
  hasLoginVersion(): boolean;
  clearLoginVersion(): OIDCConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OIDCConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OIDCConfig): OIDCConfig.AsObject;
  static serializeBinaryToWriter(message: OIDCConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OIDCConfig;
  static deserializeBinaryFromReader(message: OIDCConfig, reader: jspb.BinaryReader): OIDCConfig;
}

export namespace OIDCConfig {
  export type AsObject = {
    redirectUrisList: Array<string>,
    responseTypesList: Array<OIDCResponseType>,
    grantTypesList: Array<OIDCGrantType>,
    appType: OIDCAppType,
    clientId: string,
    authMethodType: OIDCAuthMethodType,
    postLogoutRedirectUrisList: Array<string>,
    version: OIDCVersion,
    noneCompliant: boolean,
    complianceProblemsList: Array<OIDCLocalizedMessage.AsObject>,
    devMode: boolean,
    accessTokenType: OIDCTokenType,
    accessTokenRoleAssertion: boolean,
    idTokenRoleAssertion: boolean,
    idTokenUserinfoAssertion: boolean,
    clockSkew?: google_protobuf_duration_pb.Duration.AsObject,
    additionalOriginsList: Array<string>,
    allowedOriginsList: Array<string>,
    skipNativeAppSuccessPage: boolean,
    backChannelLogoutUri: string,
    loginVersion?: zitadel_app_v2beta_login_pb.LoginVersion.AsObject,
  }
}

export enum OIDCResponseType { 
  OIDC_RESPONSE_TYPE_UNSPECIFIED = 0,
  OIDC_RESPONSE_TYPE_CODE = 1,
  OIDC_RESPONSE_TYPE_ID_TOKEN = 2,
  OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN = 3,
}
export enum OIDCGrantType { 
  OIDC_GRANT_TYPE_AUTHORIZATION_CODE = 0,
  OIDC_GRANT_TYPE_IMPLICIT = 1,
  OIDC_GRANT_TYPE_REFRESH_TOKEN = 2,
  OIDC_GRANT_TYPE_DEVICE_CODE = 3,
  OIDC_GRANT_TYPE_TOKEN_EXCHANGE = 4,
}
export enum OIDCAppType { 
  OIDC_APP_TYPE_WEB = 0,
  OIDC_APP_TYPE_USER_AGENT = 1,
  OIDC_APP_TYPE_NATIVE = 2,
}
export enum OIDCAuthMethodType { 
  OIDC_AUTH_METHOD_TYPE_BASIC = 0,
  OIDC_AUTH_METHOD_TYPE_POST = 1,
  OIDC_AUTH_METHOD_TYPE_NONE = 2,
  OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 3,
}
export enum OIDCVersion { 
  OIDC_VERSION_1_0 = 0,
}
export enum OIDCTokenType { 
  OIDC_TOKEN_TYPE_BEARER = 0,
  OIDC_TOKEN_TYPE_JWT = 1,
}
