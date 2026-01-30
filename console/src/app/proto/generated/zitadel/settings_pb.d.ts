import * as jspb from 'google-protobuf'

import * as zitadel_object_pb from '../zitadel/object_pb'; // proto import: "zitadel/object.proto"
import * as validate_validate_pb from '../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"


export class SecretGenerator extends jspb.Message {
  getGeneratorType(): SecretGeneratorType;
  setGeneratorType(value: SecretGeneratorType): SecretGenerator;

  getDetails(): zitadel_object_pb.ObjectDetails | undefined;
  setDetails(value?: zitadel_object_pb.ObjectDetails): SecretGenerator;
  hasDetails(): boolean;
  clearDetails(): SecretGenerator;

  getLength(): number;
  setLength(value: number): SecretGenerator;

  getExpiry(): google_protobuf_duration_pb.Duration | undefined;
  setExpiry(value?: google_protobuf_duration_pb.Duration): SecretGenerator;
  hasExpiry(): boolean;
  clearExpiry(): SecretGenerator;

  getIncludeLowerLetters(): boolean;
  setIncludeLowerLetters(value: boolean): SecretGenerator;

  getIncludeUpperLetters(): boolean;
  setIncludeUpperLetters(value: boolean): SecretGenerator;

  getIncludeDigits(): boolean;
  setIncludeDigits(value: boolean): SecretGenerator;

  getIncludeSymbols(): boolean;
  setIncludeSymbols(value: boolean): SecretGenerator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretGenerator.AsObject;
  static toObject(includeInstance: boolean, msg: SecretGenerator): SecretGenerator.AsObject;
  static serializeBinaryToWriter(message: SecretGenerator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretGenerator;
  static deserializeBinaryFromReader(message: SecretGenerator, reader: jspb.BinaryReader): SecretGenerator;
}

export namespace SecretGenerator {
  export type AsObject = {
    generatorType: SecretGeneratorType,
    details?: zitadel_object_pb.ObjectDetails.AsObject,
    length: number,
    expiry?: google_protobuf_duration_pb.Duration.AsObject,
    includeLowerLetters: boolean,
    includeUpperLetters: boolean,
    includeDigits: boolean,
    includeSymbols: boolean,
  }
}

export class SecretGeneratorQuery extends jspb.Message {
  getTypeQuery(): SecretGeneratorTypeQuery | undefined;
  setTypeQuery(value?: SecretGeneratorTypeQuery): SecretGeneratorQuery;
  hasTypeQuery(): boolean;
  clearTypeQuery(): SecretGeneratorQuery;

  getQueryCase(): SecretGeneratorQuery.QueryCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretGeneratorQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SecretGeneratorQuery): SecretGeneratorQuery.AsObject;
  static serializeBinaryToWriter(message: SecretGeneratorQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretGeneratorQuery;
  static deserializeBinaryFromReader(message: SecretGeneratorQuery, reader: jspb.BinaryReader): SecretGeneratorQuery;
}

export namespace SecretGeneratorQuery {
  export type AsObject = {
    typeQuery?: SecretGeneratorTypeQuery.AsObject,
  }

  export enum QueryCase { 
    QUERY_NOT_SET = 0,
    TYPE_QUERY = 1,
  }
}

export class SecretGeneratorTypeQuery extends jspb.Message {
  getGeneratorType(): SecretGeneratorType;
  setGeneratorType(value: SecretGeneratorType): SecretGeneratorTypeQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretGeneratorTypeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SecretGeneratorTypeQuery): SecretGeneratorTypeQuery.AsObject;
  static serializeBinaryToWriter(message: SecretGeneratorTypeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretGeneratorTypeQuery;
  static deserializeBinaryFromReader(message: SecretGeneratorTypeQuery, reader: jspb.BinaryReader): SecretGeneratorTypeQuery;
}

export namespace SecretGeneratorTypeQuery {
  export type AsObject = {
    generatorType: SecretGeneratorType,
  }
}

export class SMTPConfig extends jspb.Message {
  getDetails(): zitadel_object_pb.ObjectDetails | undefined;
  setDetails(value?: zitadel_object_pb.ObjectDetails): SMTPConfig;
  hasDetails(): boolean;
  clearDetails(): SMTPConfig;

  getSenderAddress(): string;
  setSenderAddress(value: string): SMTPConfig;

  getSenderName(): string;
  setSenderName(value: string): SMTPConfig;

  getTls(): boolean;
  setTls(value: boolean): SMTPConfig;

  getHost(): string;
  setHost(value: string): SMTPConfig;

  getUser(): string;
  setUser(value: string): SMTPConfig;

  getReplyToAddress(): string;
  setReplyToAddress(value: string): SMTPConfig;

  getState(): SMTPConfigState;
  setState(value: SMTPConfigState): SMTPConfig;

  getDescription(): string;
  setDescription(value: string): SMTPConfig;

  getId(): string;
  setId(value: string): SMTPConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMTPConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SMTPConfig): SMTPConfig.AsObject;
  static serializeBinaryToWriter(message: SMTPConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMTPConfig;
  static deserializeBinaryFromReader(message: SMTPConfig, reader: jspb.BinaryReader): SMTPConfig;
}

export namespace SMTPConfig {
  export type AsObject = {
    details?: zitadel_object_pb.ObjectDetails.AsObject,
    senderAddress: string,
    senderName: string,
    tls: boolean,
    host: string,
    user: string,
    replyToAddress: string,
    state: SMTPConfigState,
    description: string,
    id: string,
  }
}

export class EmailProvider extends jspb.Message {
  getDetails(): zitadel_object_pb.ObjectDetails | undefined;
  setDetails(value?: zitadel_object_pb.ObjectDetails): EmailProvider;
  hasDetails(): boolean;
  clearDetails(): EmailProvider;

  getId(): string;
  setId(value: string): EmailProvider;

  getState(): EmailProviderState;
  setState(value: EmailProviderState): EmailProvider;

  getDescription(): string;
  setDescription(value: string): EmailProvider;

  getSmtp(): EmailProviderSMTP | undefined;
  setSmtp(value?: EmailProviderSMTP): EmailProvider;
  hasSmtp(): boolean;
  clearSmtp(): EmailProvider;

  getHttp(): EmailProviderHTTP | undefined;
  setHttp(value?: EmailProviderHTTP): EmailProvider;
  hasHttp(): boolean;
  clearHttp(): EmailProvider;

  getConfigCase(): EmailProvider.ConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailProvider.AsObject;
  static toObject(includeInstance: boolean, msg: EmailProvider): EmailProvider.AsObject;
  static serializeBinaryToWriter(message: EmailProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailProvider;
  static deserializeBinaryFromReader(message: EmailProvider, reader: jspb.BinaryReader): EmailProvider;
}

export namespace EmailProvider {
  export type AsObject = {
    details?: zitadel_object_pb.ObjectDetails.AsObject,
    id: string,
    state: EmailProviderState,
    description: string,
    smtp?: EmailProviderSMTP.AsObject,
    http?: EmailProviderHTTP.AsObject,
  }

  export enum ConfigCase { 
    CONFIG_NOT_SET = 0,
    SMTP = 4,
    HTTP = 5,
  }
}

export class EmailProviderSMTP extends jspb.Message {
  getSenderAddress(): string;
  setSenderAddress(value: string): EmailProviderSMTP;

  getSenderName(): string;
  setSenderName(value: string): EmailProviderSMTP;

  getTls(): boolean;
  setTls(value: boolean): EmailProviderSMTP;

  getHost(): string;
  setHost(value: string): EmailProviderSMTP;

  getUser(): string;
  setUser(value: string): EmailProviderSMTP;

  getReplyToAddress(): string;
  setReplyToAddress(value: string): EmailProviderSMTP;

  getNone(): SMTPNoAuth | undefined;
  setNone(value?: SMTPNoAuth): EmailProviderSMTP;
  hasNone(): boolean;
  clearNone(): EmailProviderSMTP;

  getPlain(): SMTPPlainAuth | undefined;
  setPlain(value?: SMTPPlainAuth): EmailProviderSMTP;
  hasPlain(): boolean;
  clearPlain(): EmailProviderSMTP;

  getXoauth2(): SMTPXOAuth2Auth | undefined;
  setXoauth2(value?: SMTPXOAuth2Auth): EmailProviderSMTP;
  hasXoauth2(): boolean;
  clearXoauth2(): EmailProviderSMTP;

  getAuthCase(): EmailProviderSMTP.AuthCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailProviderSMTP.AsObject;
  static toObject(includeInstance: boolean, msg: EmailProviderSMTP): EmailProviderSMTP.AsObject;
  static serializeBinaryToWriter(message: EmailProviderSMTP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailProviderSMTP;
  static deserializeBinaryFromReader(message: EmailProviderSMTP, reader: jspb.BinaryReader): EmailProviderSMTP;
}

export namespace EmailProviderSMTP {
  export type AsObject = {
    senderAddress: string,
    senderName: string,
    tls: boolean,
    host: string,
    user: string,
    replyToAddress: string,
    none?: SMTPNoAuth.AsObject,
    plain?: SMTPPlainAuth.AsObject,
    xoauth2?: SMTPXOAuth2Auth.AsObject,
  }

  export enum AuthCase { 
    AUTH_NOT_SET = 0,
    NONE = 9,
    PLAIN = 10,
    XOAUTH2 = 11,
  }
}

export class SMTPNoAuth extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMTPNoAuth.AsObject;
  static toObject(includeInstance: boolean, msg: SMTPNoAuth): SMTPNoAuth.AsObject;
  static serializeBinaryToWriter(message: SMTPNoAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMTPNoAuth;
  static deserializeBinaryFromReader(message: SMTPNoAuth, reader: jspb.BinaryReader): SMTPNoAuth;
}

export namespace SMTPNoAuth {
  export type AsObject = {
  }
}

export class SMTPPlainAuth extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMTPPlainAuth.AsObject;
  static toObject(includeInstance: boolean, msg: SMTPPlainAuth): SMTPPlainAuth.AsObject;
  static serializeBinaryToWriter(message: SMTPPlainAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMTPPlainAuth;
  static deserializeBinaryFromReader(message: SMTPPlainAuth, reader: jspb.BinaryReader): SMTPPlainAuth;
}

export namespace SMTPPlainAuth {
  export type AsObject = {
  }
}

export class SMTPXOAuth2Auth extends jspb.Message {
  getTokenEndpoint(): string;
  setTokenEndpoint(value: string): SMTPXOAuth2Auth;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): SMTPXOAuth2Auth;
  clearScopesList(): SMTPXOAuth2Auth;
  addScopes(value: string, index?: number): SMTPXOAuth2Auth;

  getClientCredentials(): SMTPXOAuth2Auth.ClientCredentials | undefined;
  setClientCredentials(value?: SMTPXOAuth2Auth.ClientCredentials): SMTPXOAuth2Auth;
  hasClientCredentials(): boolean;
  clearClientCredentials(): SMTPXOAuth2Auth;

  getOauth2typeCase(): SMTPXOAuth2Auth.Oauth2typeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMTPXOAuth2Auth.AsObject;
  static toObject(includeInstance: boolean, msg: SMTPXOAuth2Auth): SMTPXOAuth2Auth.AsObject;
  static serializeBinaryToWriter(message: SMTPXOAuth2Auth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMTPXOAuth2Auth;
  static deserializeBinaryFromReader(message: SMTPXOAuth2Auth, reader: jspb.BinaryReader): SMTPXOAuth2Auth;
}

export namespace SMTPXOAuth2Auth {
  export type AsObject = {
    tokenEndpoint: string,
    scopesList: Array<string>,
    clientCredentials?: SMTPXOAuth2Auth.ClientCredentials.AsObject,
  }

  export class ClientCredentials extends jspb.Message {
    getClientId(): string;
    setClientId(value: string): ClientCredentials;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientCredentials.AsObject;
    static toObject(includeInstance: boolean, msg: ClientCredentials): ClientCredentials.AsObject;
    static serializeBinaryToWriter(message: ClientCredentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientCredentials;
    static deserializeBinaryFromReader(message: ClientCredentials, reader: jspb.BinaryReader): ClientCredentials;
  }

  export namespace ClientCredentials {
    export type AsObject = {
      clientId: string,
    }
  }


  export enum Oauth2typeCase { 
    OAUTH2TYPE_NOT_SET = 0,
    CLIENT_CREDENTIALS = 3,
  }
}

export class EmailProviderHTTP extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): EmailProviderHTTP;

  getSigningKey(): string;
  setSigningKey(value: string): EmailProviderHTTP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailProviderHTTP.AsObject;
  static toObject(includeInstance: boolean, msg: EmailProviderHTTP): EmailProviderHTTP.AsObject;
  static serializeBinaryToWriter(message: EmailProviderHTTP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailProviderHTTP;
  static deserializeBinaryFromReader(message: EmailProviderHTTP, reader: jspb.BinaryReader): EmailProviderHTTP;
}

export namespace EmailProviderHTTP {
  export type AsObject = {
    endpoint: string,
    signingKey: string,
  }
}

export class SMSProvider extends jspb.Message {
  getDetails(): zitadel_object_pb.ObjectDetails | undefined;
  setDetails(value?: zitadel_object_pb.ObjectDetails): SMSProvider;
  hasDetails(): boolean;
  clearDetails(): SMSProvider;

  getId(): string;
  setId(value: string): SMSProvider;

  getState(): SMSProviderConfigState;
  setState(value: SMSProviderConfigState): SMSProvider;

  getDescription(): string;
  setDescription(value: string): SMSProvider;

  getTwilio(): TwilioConfig | undefined;
  setTwilio(value?: TwilioConfig): SMSProvider;
  hasTwilio(): boolean;
  clearTwilio(): SMSProvider;

  getHttp(): HTTPConfig | undefined;
  setHttp(value?: HTTPConfig): SMSProvider;
  hasHttp(): boolean;
  clearHttp(): SMSProvider;

  getConfigCase(): SMSProvider.ConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMSProvider.AsObject;
  static toObject(includeInstance: boolean, msg: SMSProvider): SMSProvider.AsObject;
  static serializeBinaryToWriter(message: SMSProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMSProvider;
  static deserializeBinaryFromReader(message: SMSProvider, reader: jspb.BinaryReader): SMSProvider;
}

export namespace SMSProvider {
  export type AsObject = {
    details?: zitadel_object_pb.ObjectDetails.AsObject,
    id: string,
    state: SMSProviderConfigState,
    description: string,
    twilio?: TwilioConfig.AsObject,
    http?: HTTPConfig.AsObject,
  }

  export enum ConfigCase { 
    CONFIG_NOT_SET = 0,
    TWILIO = 4,
    HTTP = 5,
  }
}

export class TwilioConfig extends jspb.Message {
  getSid(): string;
  setSid(value: string): TwilioConfig;

  getSenderNumber(): string;
  setSenderNumber(value: string): TwilioConfig;

  getVerifyServiceSid(): string;
  setVerifyServiceSid(value: string): TwilioConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TwilioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TwilioConfig): TwilioConfig.AsObject;
  static serializeBinaryToWriter(message: TwilioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TwilioConfig;
  static deserializeBinaryFromReader(message: TwilioConfig, reader: jspb.BinaryReader): TwilioConfig;
}

export namespace TwilioConfig {
  export type AsObject = {
    sid: string,
    senderNumber: string,
    verifyServiceSid: string,
  }
}

export class HTTPConfig extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): HTTPConfig;

  getSigningKey(): string;
  setSigningKey(value: string): HTTPConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPConfig.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPConfig): HTTPConfig.AsObject;
  static serializeBinaryToWriter(message: HTTPConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPConfig;
  static deserializeBinaryFromReader(message: HTTPConfig, reader: jspb.BinaryReader): HTTPConfig;
}

export namespace HTTPConfig {
  export type AsObject = {
    endpoint: string,
    signingKey: string,
  }
}

export class DebugNotificationProvider extends jspb.Message {
  getDetails(): zitadel_object_pb.ObjectDetails | undefined;
  setDetails(value?: zitadel_object_pb.ObjectDetails): DebugNotificationProvider;
  hasDetails(): boolean;
  clearDetails(): DebugNotificationProvider;

  getCompact(): boolean;
  setCompact(value: boolean): DebugNotificationProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebugNotificationProvider.AsObject;
  static toObject(includeInstance: boolean, msg: DebugNotificationProvider): DebugNotificationProvider.AsObject;
  static serializeBinaryToWriter(message: DebugNotificationProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebugNotificationProvider;
  static deserializeBinaryFromReader(message: DebugNotificationProvider, reader: jspb.BinaryReader): DebugNotificationProvider;
}

export namespace DebugNotificationProvider {
  export type AsObject = {
    details?: zitadel_object_pb.ObjectDetails.AsObject,
    compact: boolean,
  }
}

export class OIDCSettings extends jspb.Message {
  getDetails(): zitadel_object_pb.ObjectDetails | undefined;
  setDetails(value?: zitadel_object_pb.ObjectDetails): OIDCSettings;
  hasDetails(): boolean;
  clearDetails(): OIDCSettings;

  getAccessTokenLifetime(): google_protobuf_duration_pb.Duration | undefined;
  setAccessTokenLifetime(value?: google_protobuf_duration_pb.Duration): OIDCSettings;
  hasAccessTokenLifetime(): boolean;
  clearAccessTokenLifetime(): OIDCSettings;

  getIdTokenLifetime(): google_protobuf_duration_pb.Duration | undefined;
  setIdTokenLifetime(value?: google_protobuf_duration_pb.Duration): OIDCSettings;
  hasIdTokenLifetime(): boolean;
  clearIdTokenLifetime(): OIDCSettings;

  getRefreshTokenIdleExpiration(): google_protobuf_duration_pb.Duration | undefined;
  setRefreshTokenIdleExpiration(value?: google_protobuf_duration_pb.Duration): OIDCSettings;
  hasRefreshTokenIdleExpiration(): boolean;
  clearRefreshTokenIdleExpiration(): OIDCSettings;

  getRefreshTokenExpiration(): google_protobuf_duration_pb.Duration | undefined;
  setRefreshTokenExpiration(value?: google_protobuf_duration_pb.Duration): OIDCSettings;
  hasRefreshTokenExpiration(): boolean;
  clearRefreshTokenExpiration(): OIDCSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OIDCSettings.AsObject;
  static toObject(includeInstance: boolean, msg: OIDCSettings): OIDCSettings.AsObject;
  static serializeBinaryToWriter(message: OIDCSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OIDCSettings;
  static deserializeBinaryFromReader(message: OIDCSettings, reader: jspb.BinaryReader): OIDCSettings;
}

export namespace OIDCSettings {
  export type AsObject = {
    details?: zitadel_object_pb.ObjectDetails.AsObject,
    accessTokenLifetime?: google_protobuf_duration_pb.Duration.AsObject,
    idTokenLifetime?: google_protobuf_duration_pb.Duration.AsObject,
    refreshTokenIdleExpiration?: google_protobuf_duration_pb.Duration.AsObject,
    refreshTokenExpiration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class SecurityPolicy extends jspb.Message {
  getDetails(): zitadel_object_pb.ObjectDetails | undefined;
  setDetails(value?: zitadel_object_pb.ObjectDetails): SecurityPolicy;
  hasDetails(): boolean;
  clearDetails(): SecurityPolicy;

  getEnableIframeEmbedding(): boolean;
  setEnableIframeEmbedding(value: boolean): SecurityPolicy;

  getAllowedOriginsList(): Array<string>;
  setAllowedOriginsList(value: Array<string>): SecurityPolicy;
  clearAllowedOriginsList(): SecurityPolicy;
  addAllowedOrigins(value: string, index?: number): SecurityPolicy;

  getEnableImpersonation(): boolean;
  setEnableImpersonation(value: boolean): SecurityPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityPolicy): SecurityPolicy.AsObject;
  static serializeBinaryToWriter(message: SecurityPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityPolicy;
  static deserializeBinaryFromReader(message: SecurityPolicy, reader: jspb.BinaryReader): SecurityPolicy;
}

export namespace SecurityPolicy {
  export type AsObject = {
    details?: zitadel_object_pb.ObjectDetails.AsObject,
    enableIframeEmbedding: boolean,
    allowedOriginsList: Array<string>,
    enableImpersonation: boolean,
  }
}

export enum SMTPConfigState { 
  SMTP_CONFIG_STATE_UNSPECIFIED = 0,
  SMTP_CONFIG_ACTIVE = 1,
  SMTP_CONFIG_INACTIVE = 2,
}
export enum SecretGeneratorType { 
  SECRET_GENERATOR_TYPE_UNSPECIFIED = 0,
  SECRET_GENERATOR_TYPE_INIT_CODE = 1,
  SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE = 2,
  SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE = 3,
  SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE = 4,
  SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE = 5,
  SECRET_GENERATOR_TYPE_APP_SECRET = 6,
  SECRET_GENERATOR_TYPE_OTP_SMS = 7,
  SECRET_GENERATOR_TYPE_OTP_EMAIL = 8,
}
export enum EmailProviderState { 
  EMAIL_PROVIDER_STATE_UNSPECIFIED = 0,
  EMAIL_PROVIDER_ACTIVE = 1,
  EMAIL_PROVIDER_INACTIVE = 2,
}
export enum SMSProviderConfigState { 
  SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED = 0,
  SMS_PROVIDER_CONFIG_ACTIVE = 1,
  SMS_PROVIDER_CONFIG_INACTIVE = 2,
}
