import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_app_v2beta_login_pb from '../../../zitadel/app/v2beta/login_pb'; // proto import: "zitadel/app/v2beta/login.proto"
import * as zitadel_app_v2beta_oidc_pb from '../../../zitadel/app/v2beta/oidc_pb'; // proto import: "zitadel/app/v2beta/oidc.proto"
import * as zitadel_app_v2beta_api_pb from '../../../zitadel/app/v2beta/api_pb'; // proto import: "zitadel/app/v2beta/api.proto"
import * as zitadel_app_v2beta_app_pb from '../../../zitadel/app/v2beta/app_pb'; // proto import: "zitadel/app/v2beta/app.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"


export class CreateApplicationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateApplicationRequest;

  getId(): string;
  setId(value: string): CreateApplicationRequest;

  getName(): string;
  setName(value: string): CreateApplicationRequest;

  getOidcRequest(): CreateOIDCApplicationRequest | undefined;
  setOidcRequest(value?: CreateOIDCApplicationRequest): CreateApplicationRequest;
  hasOidcRequest(): boolean;
  clearOidcRequest(): CreateApplicationRequest;

  getSamlRequest(): CreateSAMLApplicationRequest | undefined;
  setSamlRequest(value?: CreateSAMLApplicationRequest): CreateApplicationRequest;
  hasSamlRequest(): boolean;
  clearSamlRequest(): CreateApplicationRequest;

  getApiRequest(): CreateAPIApplicationRequest | undefined;
  setApiRequest(value?: CreateAPIApplicationRequest): CreateApplicationRequest;
  hasApiRequest(): boolean;
  clearApiRequest(): CreateApplicationRequest;

  getCreationRequestTypeCase(): CreateApplicationRequest.CreationRequestTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApplicationRequest): CreateApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApplicationRequest;
  static deserializeBinaryFromReader(message: CreateApplicationRequest, reader: jspb.BinaryReader): CreateApplicationRequest;
}

export namespace CreateApplicationRequest {
  export type AsObject = {
    projectId: string,
    id: string,
    name: string,
    oidcRequest?: CreateOIDCApplicationRequest.AsObject,
    samlRequest?: CreateSAMLApplicationRequest.AsObject,
    apiRequest?: CreateAPIApplicationRequest.AsObject,
  }

  export enum CreationRequestTypeCase { 
    CREATION_REQUEST_TYPE_NOT_SET = 0,
    OIDC_REQUEST = 4,
    SAML_REQUEST = 5,
    API_REQUEST = 6,
  }
}

export class CreateApplicationResponse extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): CreateApplicationResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateApplicationResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateApplicationResponse;

  getOidcResponse(): CreateOIDCApplicationResponse | undefined;
  setOidcResponse(value?: CreateOIDCApplicationResponse): CreateApplicationResponse;
  hasOidcResponse(): boolean;
  clearOidcResponse(): CreateApplicationResponse;

  getSamlResponse(): CreateSAMLApplicationResponse | undefined;
  setSamlResponse(value?: CreateSAMLApplicationResponse): CreateApplicationResponse;
  hasSamlResponse(): boolean;
  clearSamlResponse(): CreateApplicationResponse;

  getApiResponse(): CreateAPIApplicationResponse | undefined;
  setApiResponse(value?: CreateAPIApplicationResponse): CreateApplicationResponse;
  hasApiResponse(): boolean;
  clearApiResponse(): CreateApplicationResponse;

  getCreationResponseTypeCase(): CreateApplicationResponse.CreationResponseTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApplicationResponse): CreateApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApplicationResponse;
  static deserializeBinaryFromReader(message: CreateApplicationResponse, reader: jspb.BinaryReader): CreateApplicationResponse;
}

export namespace CreateApplicationResponse {
  export type AsObject = {
    appId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    oidcResponse?: CreateOIDCApplicationResponse.AsObject,
    samlResponse?: CreateSAMLApplicationResponse.AsObject,
    apiResponse?: CreateAPIApplicationResponse.AsObject,
  }

  export enum CreationResponseTypeCase { 
    CREATION_RESPONSE_TYPE_NOT_SET = 0,
    OIDC_RESPONSE = 3,
    SAML_RESPONSE = 4,
    API_RESPONSE = 5,
  }
}

export class CreateOIDCApplicationRequest extends jspb.Message {
  getRedirectUrisList(): Array<string>;
  setRedirectUrisList(value: Array<string>): CreateOIDCApplicationRequest;
  clearRedirectUrisList(): CreateOIDCApplicationRequest;
  addRedirectUris(value: string, index?: number): CreateOIDCApplicationRequest;

  getResponseTypesList(): Array<zitadel_app_v2beta_oidc_pb.OIDCResponseType>;
  setResponseTypesList(value: Array<zitadel_app_v2beta_oidc_pb.OIDCResponseType>): CreateOIDCApplicationRequest;
  clearResponseTypesList(): CreateOIDCApplicationRequest;
  addResponseTypes(value: zitadel_app_v2beta_oidc_pb.OIDCResponseType, index?: number): CreateOIDCApplicationRequest;

  getGrantTypesList(): Array<zitadel_app_v2beta_oidc_pb.OIDCGrantType>;
  setGrantTypesList(value: Array<zitadel_app_v2beta_oidc_pb.OIDCGrantType>): CreateOIDCApplicationRequest;
  clearGrantTypesList(): CreateOIDCApplicationRequest;
  addGrantTypes(value: zitadel_app_v2beta_oidc_pb.OIDCGrantType, index?: number): CreateOIDCApplicationRequest;

  getAppType(): zitadel_app_v2beta_oidc_pb.OIDCAppType;
  setAppType(value: zitadel_app_v2beta_oidc_pb.OIDCAppType): CreateOIDCApplicationRequest;

  getAuthMethodType(): zitadel_app_v2beta_oidc_pb.OIDCAuthMethodType;
  setAuthMethodType(value: zitadel_app_v2beta_oidc_pb.OIDCAuthMethodType): CreateOIDCApplicationRequest;

  getPostLogoutRedirectUrisList(): Array<string>;
  setPostLogoutRedirectUrisList(value: Array<string>): CreateOIDCApplicationRequest;
  clearPostLogoutRedirectUrisList(): CreateOIDCApplicationRequest;
  addPostLogoutRedirectUris(value: string, index?: number): CreateOIDCApplicationRequest;

  getVersion(): zitadel_app_v2beta_oidc_pb.OIDCVersion;
  setVersion(value: zitadel_app_v2beta_oidc_pb.OIDCVersion): CreateOIDCApplicationRequest;

  getDevMode(): boolean;
  setDevMode(value: boolean): CreateOIDCApplicationRequest;

  getAccessTokenType(): zitadel_app_v2beta_oidc_pb.OIDCTokenType;
  setAccessTokenType(value: zitadel_app_v2beta_oidc_pb.OIDCTokenType): CreateOIDCApplicationRequest;

  getAccessTokenRoleAssertion(): boolean;
  setAccessTokenRoleAssertion(value: boolean): CreateOIDCApplicationRequest;

  getIdTokenRoleAssertion(): boolean;
  setIdTokenRoleAssertion(value: boolean): CreateOIDCApplicationRequest;

  getIdTokenUserinfoAssertion(): boolean;
  setIdTokenUserinfoAssertion(value: boolean): CreateOIDCApplicationRequest;

  getClockSkew(): google_protobuf_duration_pb.Duration | undefined;
  setClockSkew(value?: google_protobuf_duration_pb.Duration): CreateOIDCApplicationRequest;
  hasClockSkew(): boolean;
  clearClockSkew(): CreateOIDCApplicationRequest;

  getAdditionalOriginsList(): Array<string>;
  setAdditionalOriginsList(value: Array<string>): CreateOIDCApplicationRequest;
  clearAdditionalOriginsList(): CreateOIDCApplicationRequest;
  addAdditionalOrigins(value: string, index?: number): CreateOIDCApplicationRequest;

  getSkipNativeAppSuccessPage(): boolean;
  setSkipNativeAppSuccessPage(value: boolean): CreateOIDCApplicationRequest;

  getBackChannelLogoutUri(): string;
  setBackChannelLogoutUri(value: string): CreateOIDCApplicationRequest;

  getLoginVersion(): zitadel_app_v2beta_login_pb.LoginVersion | undefined;
  setLoginVersion(value?: zitadel_app_v2beta_login_pb.LoginVersion): CreateOIDCApplicationRequest;
  hasLoginVersion(): boolean;
  clearLoginVersion(): CreateOIDCApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOIDCApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOIDCApplicationRequest): CreateOIDCApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOIDCApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOIDCApplicationRequest;
  static deserializeBinaryFromReader(message: CreateOIDCApplicationRequest, reader: jspb.BinaryReader): CreateOIDCApplicationRequest;
}

export namespace CreateOIDCApplicationRequest {
  export type AsObject = {
    redirectUrisList: Array<string>,
    responseTypesList: Array<zitadel_app_v2beta_oidc_pb.OIDCResponseType>,
    grantTypesList: Array<zitadel_app_v2beta_oidc_pb.OIDCGrantType>,
    appType: zitadel_app_v2beta_oidc_pb.OIDCAppType,
    authMethodType: zitadel_app_v2beta_oidc_pb.OIDCAuthMethodType,
    postLogoutRedirectUrisList: Array<string>,
    version: zitadel_app_v2beta_oidc_pb.OIDCVersion,
    devMode: boolean,
    accessTokenType: zitadel_app_v2beta_oidc_pb.OIDCTokenType,
    accessTokenRoleAssertion: boolean,
    idTokenRoleAssertion: boolean,
    idTokenUserinfoAssertion: boolean,
    clockSkew?: google_protobuf_duration_pb.Duration.AsObject,
    additionalOriginsList: Array<string>,
    skipNativeAppSuccessPage: boolean,
    backChannelLogoutUri: string,
    loginVersion?: zitadel_app_v2beta_login_pb.LoginVersion.AsObject,
  }
}

export class CreateOIDCApplicationResponse extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): CreateOIDCApplicationResponse;

  getClientSecret(): string;
  setClientSecret(value: string): CreateOIDCApplicationResponse;

  getNoneCompliant(): boolean;
  setNoneCompliant(value: boolean): CreateOIDCApplicationResponse;

  getComplianceProblemsList(): Array<zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage>;
  setComplianceProblemsList(value: Array<zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage>): CreateOIDCApplicationResponse;
  clearComplianceProblemsList(): CreateOIDCApplicationResponse;
  addComplianceProblems(value?: zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage, index?: number): zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOIDCApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOIDCApplicationResponse): CreateOIDCApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateOIDCApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOIDCApplicationResponse;
  static deserializeBinaryFromReader(message: CreateOIDCApplicationResponse, reader: jspb.BinaryReader): CreateOIDCApplicationResponse;
}

export namespace CreateOIDCApplicationResponse {
  export type AsObject = {
    clientId: string,
    clientSecret: string,
    noneCompliant: boolean,
    complianceProblemsList: Array<zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage.AsObject>,
  }
}

export class CreateSAMLApplicationRequest extends jspb.Message {
  getMetadataXml(): Uint8Array | string;
  getMetadataXml_asU8(): Uint8Array;
  getMetadataXml_asB64(): string;
  setMetadataXml(value: Uint8Array | string): CreateSAMLApplicationRequest;

  getMetadataUrl(): string;
  setMetadataUrl(value: string): CreateSAMLApplicationRequest;

  getLoginVersion(): zitadel_app_v2beta_login_pb.LoginVersion | undefined;
  setLoginVersion(value?: zitadel_app_v2beta_login_pb.LoginVersion): CreateSAMLApplicationRequest;
  hasLoginVersion(): boolean;
  clearLoginVersion(): CreateSAMLApplicationRequest;

  getMetadataCase(): CreateSAMLApplicationRequest.MetadataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSAMLApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSAMLApplicationRequest): CreateSAMLApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSAMLApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSAMLApplicationRequest;
  static deserializeBinaryFromReader(message: CreateSAMLApplicationRequest, reader: jspb.BinaryReader): CreateSAMLApplicationRequest;
}

export namespace CreateSAMLApplicationRequest {
  export type AsObject = {
    metadataXml: Uint8Array | string,
    metadataUrl: string,
    loginVersion?: zitadel_app_v2beta_login_pb.LoginVersion.AsObject,
  }

  export enum MetadataCase { 
    METADATA_NOT_SET = 0,
    METADATA_XML = 1,
    METADATA_URL = 2,
  }
}

export class CreateSAMLApplicationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSAMLApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSAMLApplicationResponse): CreateSAMLApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateSAMLApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSAMLApplicationResponse;
  static deserializeBinaryFromReader(message: CreateSAMLApplicationResponse, reader: jspb.BinaryReader): CreateSAMLApplicationResponse;
}

export namespace CreateSAMLApplicationResponse {
  export type AsObject = {
  }
}

export class CreateAPIApplicationRequest extends jspb.Message {
  getAuthMethodType(): zitadel_app_v2beta_api_pb.APIAuthMethodType;
  setAuthMethodType(value: zitadel_app_v2beta_api_pb.APIAuthMethodType): CreateAPIApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAPIApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAPIApplicationRequest): CreateAPIApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAPIApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAPIApplicationRequest;
  static deserializeBinaryFromReader(message: CreateAPIApplicationRequest, reader: jspb.BinaryReader): CreateAPIApplicationRequest;
}

export namespace CreateAPIApplicationRequest {
  export type AsObject = {
    authMethodType: zitadel_app_v2beta_api_pb.APIAuthMethodType,
  }
}

export class CreateAPIApplicationResponse extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): CreateAPIApplicationResponse;

  getClientSecret(): string;
  setClientSecret(value: string): CreateAPIApplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAPIApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAPIApplicationResponse): CreateAPIApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAPIApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAPIApplicationResponse;
  static deserializeBinaryFromReader(message: CreateAPIApplicationResponse, reader: jspb.BinaryReader): CreateAPIApplicationResponse;
}

export namespace CreateAPIApplicationResponse {
  export type AsObject = {
    clientId: string,
    clientSecret: string,
  }
}

export class UpdateApplicationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateApplicationRequest;

  getId(): string;
  setId(value: string): UpdateApplicationRequest;

  getName(): string;
  setName(value: string): UpdateApplicationRequest;

  getSamlConfigurationRequest(): UpdateSAMLApplicationConfigurationRequest | undefined;
  setSamlConfigurationRequest(value?: UpdateSAMLApplicationConfigurationRequest): UpdateApplicationRequest;
  hasSamlConfigurationRequest(): boolean;
  clearSamlConfigurationRequest(): UpdateApplicationRequest;

  getOidcConfigurationRequest(): UpdateOIDCApplicationConfigurationRequest | undefined;
  setOidcConfigurationRequest(value?: UpdateOIDCApplicationConfigurationRequest): UpdateApplicationRequest;
  hasOidcConfigurationRequest(): boolean;
  clearOidcConfigurationRequest(): UpdateApplicationRequest;

  getApiConfigurationRequest(): UpdateAPIApplicationConfigurationRequest | undefined;
  setApiConfigurationRequest(value?: UpdateAPIApplicationConfigurationRequest): UpdateApplicationRequest;
  hasApiConfigurationRequest(): boolean;
  clearApiConfigurationRequest(): UpdateApplicationRequest;

  getUpdateRequestTypeCase(): UpdateApplicationRequest.UpdateRequestTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApplicationRequest): UpdateApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApplicationRequest;
  static deserializeBinaryFromReader(message: UpdateApplicationRequest, reader: jspb.BinaryReader): UpdateApplicationRequest;
}

export namespace UpdateApplicationRequest {
  export type AsObject = {
    projectId: string,
    id: string,
    name: string,
    samlConfigurationRequest?: UpdateSAMLApplicationConfigurationRequest.AsObject,
    oidcConfigurationRequest?: UpdateOIDCApplicationConfigurationRequest.AsObject,
    apiConfigurationRequest?: UpdateAPIApplicationConfigurationRequest.AsObject,
  }

  export enum UpdateRequestTypeCase { 
    UPDATE_REQUEST_TYPE_NOT_SET = 0,
    SAML_CONFIGURATION_REQUEST = 4,
    OIDC_CONFIGURATION_REQUEST = 5,
    API_CONFIGURATION_REQUEST = 6,
  }
}

export class UpdateApplicationResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateApplicationResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateApplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApplicationResponse): UpdateApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApplicationResponse;
  static deserializeBinaryFromReader(message: UpdateApplicationResponse, reader: jspb.BinaryReader): UpdateApplicationResponse;
}

export namespace UpdateApplicationResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateSAMLApplicationConfigurationRequest extends jspb.Message {
  getMetadataXml(): Uint8Array | string;
  getMetadataXml_asU8(): Uint8Array;
  getMetadataXml_asB64(): string;
  setMetadataXml(value: Uint8Array | string): UpdateSAMLApplicationConfigurationRequest;

  getMetadataUrl(): string;
  setMetadataUrl(value: string): UpdateSAMLApplicationConfigurationRequest;

  getLoginVersion(): zitadel_app_v2beta_login_pb.LoginVersion | undefined;
  setLoginVersion(value?: zitadel_app_v2beta_login_pb.LoginVersion): UpdateSAMLApplicationConfigurationRequest;
  hasLoginVersion(): boolean;
  clearLoginVersion(): UpdateSAMLApplicationConfigurationRequest;

  getMetadataCase(): UpdateSAMLApplicationConfigurationRequest.MetadataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSAMLApplicationConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSAMLApplicationConfigurationRequest): UpdateSAMLApplicationConfigurationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSAMLApplicationConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSAMLApplicationConfigurationRequest;
  static deserializeBinaryFromReader(message: UpdateSAMLApplicationConfigurationRequest, reader: jspb.BinaryReader): UpdateSAMLApplicationConfigurationRequest;
}

export namespace UpdateSAMLApplicationConfigurationRequest {
  export type AsObject = {
    metadataXml: Uint8Array | string,
    metadataUrl: string,
    loginVersion?: zitadel_app_v2beta_login_pb.LoginVersion.AsObject,
  }

  export enum MetadataCase { 
    METADATA_NOT_SET = 0,
    METADATA_XML = 1,
    METADATA_URL = 2,
  }

  export enum LoginVersionCase { 
    _LOGIN_VERSION_NOT_SET = 0,
    LOGIN_VERSION = 3,
  }
}

export class UpdateOIDCApplicationConfigurationRequest extends jspb.Message {
  getRedirectUrisList(): Array<string>;
  setRedirectUrisList(value: Array<string>): UpdateOIDCApplicationConfigurationRequest;
  clearRedirectUrisList(): UpdateOIDCApplicationConfigurationRequest;
  addRedirectUris(value: string, index?: number): UpdateOIDCApplicationConfigurationRequest;

  getResponseTypesList(): Array<zitadel_app_v2beta_oidc_pb.OIDCResponseType>;
  setResponseTypesList(value: Array<zitadel_app_v2beta_oidc_pb.OIDCResponseType>): UpdateOIDCApplicationConfigurationRequest;
  clearResponseTypesList(): UpdateOIDCApplicationConfigurationRequest;
  addResponseTypes(value: zitadel_app_v2beta_oidc_pb.OIDCResponseType, index?: number): UpdateOIDCApplicationConfigurationRequest;

  getGrantTypesList(): Array<zitadel_app_v2beta_oidc_pb.OIDCGrantType>;
  setGrantTypesList(value: Array<zitadel_app_v2beta_oidc_pb.OIDCGrantType>): UpdateOIDCApplicationConfigurationRequest;
  clearGrantTypesList(): UpdateOIDCApplicationConfigurationRequest;
  addGrantTypes(value: zitadel_app_v2beta_oidc_pb.OIDCGrantType, index?: number): UpdateOIDCApplicationConfigurationRequest;

  getAppType(): zitadel_app_v2beta_oidc_pb.OIDCAppType;
  setAppType(value: zitadel_app_v2beta_oidc_pb.OIDCAppType): UpdateOIDCApplicationConfigurationRequest;
  hasAppType(): boolean;
  clearAppType(): UpdateOIDCApplicationConfigurationRequest;

  getAuthMethodType(): zitadel_app_v2beta_oidc_pb.OIDCAuthMethodType;
  setAuthMethodType(value: zitadel_app_v2beta_oidc_pb.OIDCAuthMethodType): UpdateOIDCApplicationConfigurationRequest;
  hasAuthMethodType(): boolean;
  clearAuthMethodType(): UpdateOIDCApplicationConfigurationRequest;

  getPostLogoutRedirectUrisList(): Array<string>;
  setPostLogoutRedirectUrisList(value: Array<string>): UpdateOIDCApplicationConfigurationRequest;
  clearPostLogoutRedirectUrisList(): UpdateOIDCApplicationConfigurationRequest;
  addPostLogoutRedirectUris(value: string, index?: number): UpdateOIDCApplicationConfigurationRequest;

  getVersion(): zitadel_app_v2beta_oidc_pb.OIDCVersion;
  setVersion(value: zitadel_app_v2beta_oidc_pb.OIDCVersion): UpdateOIDCApplicationConfigurationRequest;
  hasVersion(): boolean;
  clearVersion(): UpdateOIDCApplicationConfigurationRequest;

  getDevMode(): boolean;
  setDevMode(value: boolean): UpdateOIDCApplicationConfigurationRequest;
  hasDevMode(): boolean;
  clearDevMode(): UpdateOIDCApplicationConfigurationRequest;

  getAccessTokenType(): zitadel_app_v2beta_oidc_pb.OIDCTokenType;
  setAccessTokenType(value: zitadel_app_v2beta_oidc_pb.OIDCTokenType): UpdateOIDCApplicationConfigurationRequest;
  hasAccessTokenType(): boolean;
  clearAccessTokenType(): UpdateOIDCApplicationConfigurationRequest;

  getAccessTokenRoleAssertion(): boolean;
  setAccessTokenRoleAssertion(value: boolean): UpdateOIDCApplicationConfigurationRequest;
  hasAccessTokenRoleAssertion(): boolean;
  clearAccessTokenRoleAssertion(): UpdateOIDCApplicationConfigurationRequest;

  getIdTokenRoleAssertion(): boolean;
  setIdTokenRoleAssertion(value: boolean): UpdateOIDCApplicationConfigurationRequest;
  hasIdTokenRoleAssertion(): boolean;
  clearIdTokenRoleAssertion(): UpdateOIDCApplicationConfigurationRequest;

  getIdTokenUserinfoAssertion(): boolean;
  setIdTokenUserinfoAssertion(value: boolean): UpdateOIDCApplicationConfigurationRequest;
  hasIdTokenUserinfoAssertion(): boolean;
  clearIdTokenUserinfoAssertion(): UpdateOIDCApplicationConfigurationRequest;

  getClockSkew(): google_protobuf_duration_pb.Duration | undefined;
  setClockSkew(value?: google_protobuf_duration_pb.Duration): UpdateOIDCApplicationConfigurationRequest;
  hasClockSkew(): boolean;
  clearClockSkew(): UpdateOIDCApplicationConfigurationRequest;

  getAdditionalOriginsList(): Array<string>;
  setAdditionalOriginsList(value: Array<string>): UpdateOIDCApplicationConfigurationRequest;
  clearAdditionalOriginsList(): UpdateOIDCApplicationConfigurationRequest;
  addAdditionalOrigins(value: string, index?: number): UpdateOIDCApplicationConfigurationRequest;

  getSkipNativeAppSuccessPage(): boolean;
  setSkipNativeAppSuccessPage(value: boolean): UpdateOIDCApplicationConfigurationRequest;
  hasSkipNativeAppSuccessPage(): boolean;
  clearSkipNativeAppSuccessPage(): UpdateOIDCApplicationConfigurationRequest;

  getBackChannelLogoutUri(): string;
  setBackChannelLogoutUri(value: string): UpdateOIDCApplicationConfigurationRequest;
  hasBackChannelLogoutUri(): boolean;
  clearBackChannelLogoutUri(): UpdateOIDCApplicationConfigurationRequest;

  getLoginVersion(): zitadel_app_v2beta_login_pb.LoginVersion | undefined;
  setLoginVersion(value?: zitadel_app_v2beta_login_pb.LoginVersion): UpdateOIDCApplicationConfigurationRequest;
  hasLoginVersion(): boolean;
  clearLoginVersion(): UpdateOIDCApplicationConfigurationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOIDCApplicationConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOIDCApplicationConfigurationRequest): UpdateOIDCApplicationConfigurationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOIDCApplicationConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOIDCApplicationConfigurationRequest;
  static deserializeBinaryFromReader(message: UpdateOIDCApplicationConfigurationRequest, reader: jspb.BinaryReader): UpdateOIDCApplicationConfigurationRequest;
}

export namespace UpdateOIDCApplicationConfigurationRequest {
  export type AsObject = {
    redirectUrisList: Array<string>,
    responseTypesList: Array<zitadel_app_v2beta_oidc_pb.OIDCResponseType>,
    grantTypesList: Array<zitadel_app_v2beta_oidc_pb.OIDCGrantType>,
    appType?: zitadel_app_v2beta_oidc_pb.OIDCAppType,
    authMethodType?: zitadel_app_v2beta_oidc_pb.OIDCAuthMethodType,
    postLogoutRedirectUrisList: Array<string>,
    version?: zitadel_app_v2beta_oidc_pb.OIDCVersion,
    devMode?: boolean,
    accessTokenType?: zitadel_app_v2beta_oidc_pb.OIDCTokenType,
    accessTokenRoleAssertion?: boolean,
    idTokenRoleAssertion?: boolean,
    idTokenUserinfoAssertion?: boolean,
    clockSkew?: google_protobuf_duration_pb.Duration.AsObject,
    additionalOriginsList: Array<string>,
    skipNativeAppSuccessPage?: boolean,
    backChannelLogoutUri?: string,
    loginVersion?: zitadel_app_v2beta_login_pb.LoginVersion.AsObject,
  }

  export enum AppTypeCase { 
    _APP_TYPE_NOT_SET = 0,
    APP_TYPE = 4,
  }

  export enum AuthMethodTypeCase { 
    _AUTH_METHOD_TYPE_NOT_SET = 0,
    AUTH_METHOD_TYPE = 5,
  }

  export enum VersionCase { 
    _VERSION_NOT_SET = 0,
    VERSION = 7,
  }

  export enum DevModeCase { 
    _DEV_MODE_NOT_SET = 0,
    DEV_MODE = 8,
  }

  export enum AccessTokenTypeCase { 
    _ACCESS_TOKEN_TYPE_NOT_SET = 0,
    ACCESS_TOKEN_TYPE = 9,
  }

  export enum AccessTokenRoleAssertionCase { 
    _ACCESS_TOKEN_ROLE_ASSERTION_NOT_SET = 0,
    ACCESS_TOKEN_ROLE_ASSERTION = 10,
  }

  export enum IdTokenRoleAssertionCase { 
    _ID_TOKEN_ROLE_ASSERTION_NOT_SET = 0,
    ID_TOKEN_ROLE_ASSERTION = 11,
  }

  export enum IdTokenUserinfoAssertionCase { 
    _ID_TOKEN_USERINFO_ASSERTION_NOT_SET = 0,
    ID_TOKEN_USERINFO_ASSERTION = 12,
  }

  export enum ClockSkewCase { 
    _CLOCK_SKEW_NOT_SET = 0,
    CLOCK_SKEW = 13,
  }

  export enum SkipNativeAppSuccessPageCase { 
    _SKIP_NATIVE_APP_SUCCESS_PAGE_NOT_SET = 0,
    SKIP_NATIVE_APP_SUCCESS_PAGE = 15,
  }

  export enum BackChannelLogoutUriCase { 
    _BACK_CHANNEL_LOGOUT_URI_NOT_SET = 0,
    BACK_CHANNEL_LOGOUT_URI = 16,
  }

  export enum LoginVersionCase { 
    _LOGIN_VERSION_NOT_SET = 0,
    LOGIN_VERSION = 17,
  }
}

export class UpdateAPIApplicationConfigurationRequest extends jspb.Message {
  getAuthMethodType(): zitadel_app_v2beta_api_pb.APIAuthMethodType;
  setAuthMethodType(value: zitadel_app_v2beta_api_pb.APIAuthMethodType): UpdateAPIApplicationConfigurationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAPIApplicationConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAPIApplicationConfigurationRequest): UpdateAPIApplicationConfigurationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAPIApplicationConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAPIApplicationConfigurationRequest;
  static deserializeBinaryFromReader(message: UpdateAPIApplicationConfigurationRequest, reader: jspb.BinaryReader): UpdateAPIApplicationConfigurationRequest;
}

export namespace UpdateAPIApplicationConfigurationRequest {
  export type AsObject = {
    authMethodType: zitadel_app_v2beta_api_pb.APIAuthMethodType,
  }
}

export class GetApplicationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplicationRequest): GetApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: GetApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplicationRequest;
  static deserializeBinaryFromReader(message: GetApplicationRequest, reader: jspb.BinaryReader): GetApplicationRequest;
}

export namespace GetApplicationRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetApplicationResponse extends jspb.Message {
  getApp(): zitadel_app_v2beta_app_pb.Application | undefined;
  setApp(value?: zitadel_app_v2beta_app_pb.Application): GetApplicationResponse;
  hasApp(): boolean;
  clearApp(): GetApplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplicationResponse): GetApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: GetApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplicationResponse;
  static deserializeBinaryFromReader(message: GetApplicationResponse, reader: jspb.BinaryReader): GetApplicationResponse;
}

export namespace GetApplicationResponse {
  export type AsObject = {
    app?: zitadel_app_v2beta_app_pb.Application.AsObject,
  }
}

export class DeleteApplicationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeleteApplicationRequest;

  getId(): string;
  setId(value: string): DeleteApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplicationRequest): DeleteApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplicationRequest;
  static deserializeBinaryFromReader(message: DeleteApplicationRequest, reader: jspb.BinaryReader): DeleteApplicationRequest;
}

export namespace DeleteApplicationRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class DeleteApplicationResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteApplicationResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteApplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplicationResponse): DeleteApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplicationResponse;
  static deserializeBinaryFromReader(message: DeleteApplicationResponse, reader: jspb.BinaryReader): DeleteApplicationResponse;
}

export namespace DeleteApplicationResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeactivateApplicationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeactivateApplicationRequest;

  getId(): string;
  setId(value: string): DeactivateApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateApplicationRequest): DeactivateApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateApplicationRequest;
  static deserializeBinaryFromReader(message: DeactivateApplicationRequest, reader: jspb.BinaryReader): DeactivateApplicationRequest;
}

export namespace DeactivateApplicationRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class DeactivateApplicationResponse extends jspb.Message {
  getDeactivationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeactivationDate(value?: google_protobuf_timestamp_pb.Timestamp): DeactivateApplicationResponse;
  hasDeactivationDate(): boolean;
  clearDeactivationDate(): DeactivateApplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateApplicationResponse): DeactivateApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivateApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateApplicationResponse;
  static deserializeBinaryFromReader(message: DeactivateApplicationResponse, reader: jspb.BinaryReader): DeactivateApplicationResponse;
}

export namespace DeactivateApplicationResponse {
  export type AsObject = {
    deactivationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ReactivateApplicationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ReactivateApplicationRequest;

  getId(): string;
  setId(value: string): ReactivateApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactivateApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReactivateApplicationRequest): ReactivateApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: ReactivateApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactivateApplicationRequest;
  static deserializeBinaryFromReader(message: ReactivateApplicationRequest, reader: jspb.BinaryReader): ReactivateApplicationRequest;
}

export namespace ReactivateApplicationRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class ReactivateApplicationResponse extends jspb.Message {
  getReactivationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReactivationDate(value?: google_protobuf_timestamp_pb.Timestamp): ReactivateApplicationResponse;
  hasReactivationDate(): boolean;
  clearReactivationDate(): ReactivateApplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactivateApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReactivateApplicationResponse): ReactivateApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: ReactivateApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactivateApplicationResponse;
  static deserializeBinaryFromReader(message: ReactivateApplicationResponse, reader: jspb.BinaryReader): ReactivateApplicationResponse;
}

export namespace ReactivateApplicationResponse {
  export type AsObject = {
    reactivationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RegenerateClientSecretRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): RegenerateClientSecretRequest;

  getApplicationId(): string;
  setApplicationId(value: string): RegenerateClientSecretRequest;

  getIsOidc(): boolean;
  setIsOidc(value: boolean): RegenerateClientSecretRequest;

  getIsApi(): boolean;
  setIsApi(value: boolean): RegenerateClientSecretRequest;

  getAppTypeCase(): RegenerateClientSecretRequest.AppTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegenerateClientSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegenerateClientSecretRequest): RegenerateClientSecretRequest.AsObject;
  static serializeBinaryToWriter(message: RegenerateClientSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegenerateClientSecretRequest;
  static deserializeBinaryFromReader(message: RegenerateClientSecretRequest, reader: jspb.BinaryReader): RegenerateClientSecretRequest;
}

export namespace RegenerateClientSecretRequest {
  export type AsObject = {
    projectId: string,
    applicationId: string,
    isOidc: boolean,
    isApi: boolean,
  }

  export enum AppTypeCase { 
    APP_TYPE_NOT_SET = 0,
    IS_OIDC = 3,
    IS_API = 4,
  }
}

export class RegenerateClientSecretResponse extends jspb.Message {
  getClientSecret(): string;
  setClientSecret(value: string): RegenerateClientSecretResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): RegenerateClientSecretResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): RegenerateClientSecretResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegenerateClientSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegenerateClientSecretResponse): RegenerateClientSecretResponse.AsObject;
  static serializeBinaryToWriter(message: RegenerateClientSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegenerateClientSecretResponse;
  static deserializeBinaryFromReader(message: RegenerateClientSecretResponse, reader: jspb.BinaryReader): RegenerateClientSecretResponse;
}

export namespace RegenerateClientSecretResponse {
  export type AsObject = {
    clientSecret: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListApplicationsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListApplicationsRequest;

  getPagination(): zitadel_filter_v2_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationRequest): ListApplicationsRequest;
  hasPagination(): boolean;
  clearPagination(): ListApplicationsRequest;

  getFiltersList(): Array<zitadel_app_v2beta_app_pb.ApplicationSearchFilter>;
  setFiltersList(value: Array<zitadel_app_v2beta_app_pb.ApplicationSearchFilter>): ListApplicationsRequest;
  clearFiltersList(): ListApplicationsRequest;
  addFilters(value?: zitadel_app_v2beta_app_pb.ApplicationSearchFilter, index?: number): zitadel_app_v2beta_app_pb.ApplicationSearchFilter;

  getSortingColumn(): zitadel_app_v2beta_app_pb.AppSorting;
  setSortingColumn(value: zitadel_app_v2beta_app_pb.AppSorting): ListApplicationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApplicationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListApplicationsRequest): ListApplicationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListApplicationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApplicationsRequest;
  static deserializeBinaryFromReader(message: ListApplicationsRequest, reader: jspb.BinaryReader): ListApplicationsRequest;
}

export namespace ListApplicationsRequest {
  export type AsObject = {
    projectId: string,
    pagination?: zitadel_filter_v2_filter_pb.PaginationRequest.AsObject,
    filtersList: Array<zitadel_app_v2beta_app_pb.ApplicationSearchFilter.AsObject>,
    sortingColumn: zitadel_app_v2beta_app_pb.AppSorting,
  }
}

export class ListApplicationsResponse extends jspb.Message {
  getApplicationsList(): Array<zitadel_app_v2beta_app_pb.Application>;
  setApplicationsList(value: Array<zitadel_app_v2beta_app_pb.Application>): ListApplicationsResponse;
  clearApplicationsList(): ListApplicationsResponse;
  addApplications(value?: zitadel_app_v2beta_app_pb.Application, index?: number): zitadel_app_v2beta_app_pb.Application;

  getPagination(): zitadel_filter_v2_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationResponse): ListApplicationsResponse;
  hasPagination(): boolean;
  clearPagination(): ListApplicationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApplicationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListApplicationsResponse): ListApplicationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListApplicationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApplicationsResponse;
  static deserializeBinaryFromReader(message: ListApplicationsResponse, reader: jspb.BinaryReader): ListApplicationsResponse;
}

export namespace ListApplicationsResponse {
  export type AsObject = {
    applicationsList: Array<zitadel_app_v2beta_app_pb.Application.AsObject>,
    pagination?: zitadel_filter_v2_filter_pb.PaginationResponse.AsObject,
  }
}

export class CreateApplicationKeyRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): CreateApplicationKeyRequest;

  getProjectId(): string;
  setProjectId(value: string): CreateApplicationKeyRequest;

  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateApplicationKeyRequest;
  hasExpirationDate(): boolean;
  clearExpirationDate(): CreateApplicationKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApplicationKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApplicationKeyRequest): CreateApplicationKeyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateApplicationKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApplicationKeyRequest;
  static deserializeBinaryFromReader(message: CreateApplicationKeyRequest, reader: jspb.BinaryReader): CreateApplicationKeyRequest;
}

export namespace CreateApplicationKeyRequest {
  export type AsObject = {
    appId: string,
    projectId: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateApplicationKeyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateApplicationKeyResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateApplicationKeyResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateApplicationKeyResponse;

  getKeyDetails(): Uint8Array | string;
  getKeyDetails_asU8(): Uint8Array;
  getKeyDetails_asB64(): string;
  setKeyDetails(value: Uint8Array | string): CreateApplicationKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApplicationKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApplicationKeyResponse): CreateApplicationKeyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateApplicationKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApplicationKeyResponse;
  static deserializeBinaryFromReader(message: CreateApplicationKeyResponse, reader: jspb.BinaryReader): CreateApplicationKeyResponse;
}

export namespace CreateApplicationKeyResponse {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    keyDetails: Uint8Array | string,
  }
}

export class DeleteApplicationKeyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteApplicationKeyRequest;

  getProjectId(): string;
  setProjectId(value: string): DeleteApplicationKeyRequest;

  getApplicationId(): string;
  setApplicationId(value: string): DeleteApplicationKeyRequest;

  getOrganizationId(): string;
  setOrganizationId(value: string): DeleteApplicationKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplicationKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplicationKeyRequest): DeleteApplicationKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteApplicationKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplicationKeyRequest;
  static deserializeBinaryFromReader(message: DeleteApplicationKeyRequest, reader: jspb.BinaryReader): DeleteApplicationKeyRequest;
}

export namespace DeleteApplicationKeyRequest {
  export type AsObject = {
    id: string,
    projectId: string,
    applicationId: string,
    organizationId: string,
  }
}

export class DeleteApplicationKeyResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteApplicationKeyResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteApplicationKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplicationKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplicationKeyResponse): DeleteApplicationKeyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteApplicationKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplicationKeyResponse;
  static deserializeBinaryFromReader(message: DeleteApplicationKeyResponse, reader: jspb.BinaryReader): DeleteApplicationKeyResponse;
}

export namespace DeleteApplicationKeyResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetApplicationKeyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetApplicationKeyRequest;

  getProjectId(): string;
  setProjectId(value: string): GetApplicationKeyRequest;

  getApplicationId(): string;
  setApplicationId(value: string): GetApplicationKeyRequest;

  getOrganizationId(): string;
  setOrganizationId(value: string): GetApplicationKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplicationKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplicationKeyRequest): GetApplicationKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetApplicationKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplicationKeyRequest;
  static deserializeBinaryFromReader(message: GetApplicationKeyRequest, reader: jspb.BinaryReader): GetApplicationKeyRequest;
}

export namespace GetApplicationKeyRequest {
  export type AsObject = {
    id: string,
    projectId: string,
    applicationId: string,
    organizationId: string,
  }
}

export class GetApplicationKeyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetApplicationKeyResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): GetApplicationKeyResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): GetApplicationKeyResponse;

  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): GetApplicationKeyResponse;
  hasExpirationDate(): boolean;
  clearExpirationDate(): GetApplicationKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplicationKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplicationKeyResponse): GetApplicationKeyResponse.AsObject;
  static serializeBinaryToWriter(message: GetApplicationKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplicationKeyResponse;
  static deserializeBinaryFromReader(message: GetApplicationKeyResponse, reader: jspb.BinaryReader): GetApplicationKeyResponse;
}

export namespace GetApplicationKeyResponse {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListApplicationKeysRequest extends jspb.Message {
  getPagination(): zitadel_filter_v2_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationRequest): ListApplicationKeysRequest;
  hasPagination(): boolean;
  clearPagination(): ListApplicationKeysRequest;

  getSortingColumn(): zitadel_app_v2beta_app_pb.ApplicationKeysSorting;
  setSortingColumn(value: zitadel_app_v2beta_app_pb.ApplicationKeysSorting): ListApplicationKeysRequest;

  getApplicationId(): string;
  setApplicationId(value: string): ListApplicationKeysRequest;

  getProjectId(): string;
  setProjectId(value: string): ListApplicationKeysRequest;

  getOrganizationId(): string;
  setOrganizationId(value: string): ListApplicationKeysRequest;

  getResourceIdCase(): ListApplicationKeysRequest.ResourceIdCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApplicationKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListApplicationKeysRequest): ListApplicationKeysRequest.AsObject;
  static serializeBinaryToWriter(message: ListApplicationKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApplicationKeysRequest;
  static deserializeBinaryFromReader(message: ListApplicationKeysRequest, reader: jspb.BinaryReader): ListApplicationKeysRequest;
}

export namespace ListApplicationKeysRequest {
  export type AsObject = {
    pagination?: zitadel_filter_v2_filter_pb.PaginationRequest.AsObject,
    sortingColumn: zitadel_app_v2beta_app_pb.ApplicationKeysSorting,
    applicationId: string,
    projectId: string,
    organizationId: string,
  }

  export enum ResourceIdCase { 
    RESOURCE_ID_NOT_SET = 0,
    APPLICATION_ID = 3,
    PROJECT_ID = 4,
    ORGANIZATION_ID = 5,
  }
}

export class ListApplicationKeysResponse extends jspb.Message {
  getKeysList(): Array<zitadel_app_v2beta_app_pb.ApplicationKey>;
  setKeysList(value: Array<zitadel_app_v2beta_app_pb.ApplicationKey>): ListApplicationKeysResponse;
  clearKeysList(): ListApplicationKeysResponse;
  addKeys(value?: zitadel_app_v2beta_app_pb.ApplicationKey, index?: number): zitadel_app_v2beta_app_pb.ApplicationKey;

  getPagination(): zitadel_filter_v2_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationResponse): ListApplicationKeysResponse;
  hasPagination(): boolean;
  clearPagination(): ListApplicationKeysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApplicationKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListApplicationKeysResponse): ListApplicationKeysResponse.AsObject;
  static serializeBinaryToWriter(message: ListApplicationKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApplicationKeysResponse;
  static deserializeBinaryFromReader(message: ListApplicationKeysResponse, reader: jspb.BinaryReader): ListApplicationKeysResponse;
}

export namespace ListApplicationKeysResponse {
  export type AsObject = {
    keysList: Array<zitadel_app_v2beta_app_pb.ApplicationKey.AsObject>,
    pagination?: zitadel_filter_v2_filter_pb.PaginationResponse.AsObject,
  }
}

