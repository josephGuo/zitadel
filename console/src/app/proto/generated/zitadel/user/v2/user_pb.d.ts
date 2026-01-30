import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_object_v2_object_pb from '../../../zitadel/object/v2/object_pb'; // proto import: "zitadel/object/v2/object.proto"
import * as zitadel_user_v2_email_pb from '../../../zitadel/user/v2/email_pb'; // proto import: "zitadel/user/v2/email.proto"
import * as zitadel_user_v2_phone_pb from '../../../zitadel/user/v2/phone_pb'; // proto import: "zitadel/user/v2/phone.proto"


export class SetHumanProfile extends jspb.Message {
  getGivenName(): string;
  setGivenName(value: string): SetHumanProfile;

  getFamilyName(): string;
  setFamilyName(value: string): SetHumanProfile;

  getNickName(): string;
  setNickName(value: string): SetHumanProfile;
  hasNickName(): boolean;
  clearNickName(): SetHumanProfile;

  getDisplayName(): string;
  setDisplayName(value: string): SetHumanProfile;
  hasDisplayName(): boolean;
  clearDisplayName(): SetHumanProfile;

  getPreferredLanguage(): string;
  setPreferredLanguage(value: string): SetHumanProfile;
  hasPreferredLanguage(): boolean;
  clearPreferredLanguage(): SetHumanProfile;

  getGender(): Gender;
  setGender(value: Gender): SetHumanProfile;
  hasGender(): boolean;
  clearGender(): SetHumanProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHumanProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SetHumanProfile): SetHumanProfile.AsObject;
  static serializeBinaryToWriter(message: SetHumanProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHumanProfile;
  static deserializeBinaryFromReader(message: SetHumanProfile, reader: jspb.BinaryReader): SetHumanProfile;
}

export namespace SetHumanProfile {
  export type AsObject = {
    givenName: string,
    familyName: string,
    nickName?: string,
    displayName?: string,
    preferredLanguage?: string,
    gender?: Gender,
  }

  export enum NickNameCase { 
    _NICK_NAME_NOT_SET = 0,
    NICK_NAME = 3,
  }

  export enum DisplayNameCase { 
    _DISPLAY_NAME_NOT_SET = 0,
    DISPLAY_NAME = 4,
  }

  export enum PreferredLanguageCase { 
    _PREFERRED_LANGUAGE_NOT_SET = 0,
    PREFERRED_LANGUAGE = 5,
  }

  export enum GenderCase { 
    _GENDER_NOT_SET = 0,
    GENDER = 6,
  }
}

export class HumanProfile extends jspb.Message {
  getGivenName(): string;
  setGivenName(value: string): HumanProfile;

  getFamilyName(): string;
  setFamilyName(value: string): HumanProfile;

  getNickName(): string;
  setNickName(value: string): HumanProfile;
  hasNickName(): boolean;
  clearNickName(): HumanProfile;

  getDisplayName(): string;
  setDisplayName(value: string): HumanProfile;
  hasDisplayName(): boolean;
  clearDisplayName(): HumanProfile;

  getPreferredLanguage(): string;
  setPreferredLanguage(value: string): HumanProfile;
  hasPreferredLanguage(): boolean;
  clearPreferredLanguage(): HumanProfile;

  getGender(): Gender;
  setGender(value: Gender): HumanProfile;
  hasGender(): boolean;
  clearGender(): HumanProfile;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): HumanProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanProfile.AsObject;
  static toObject(includeInstance: boolean, msg: HumanProfile): HumanProfile.AsObject;
  static serializeBinaryToWriter(message: HumanProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanProfile;
  static deserializeBinaryFromReader(message: HumanProfile, reader: jspb.BinaryReader): HumanProfile;
}

export namespace HumanProfile {
  export type AsObject = {
    givenName: string,
    familyName: string,
    nickName?: string,
    displayName?: string,
    preferredLanguage?: string,
    gender?: Gender,
    avatarUrl: string,
  }

  export enum NickNameCase { 
    _NICK_NAME_NOT_SET = 0,
    NICK_NAME = 3,
  }

  export enum DisplayNameCase { 
    _DISPLAY_NAME_NOT_SET = 0,
    DISPLAY_NAME = 4,
  }

  export enum PreferredLanguageCase { 
    _PREFERRED_LANGUAGE_NOT_SET = 0,
    PREFERRED_LANGUAGE = 5,
  }

  export enum GenderCase { 
    _GENDER_NOT_SET = 0,
    GENDER = 6,
  }
}

export class SetMetadataEntry extends jspb.Message {
  getKey(): string;
  setKey(value: string): SetMetadataEntry;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): SetMetadataEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMetadataEntry.AsObject;
  static toObject(includeInstance: boolean, msg: SetMetadataEntry): SetMetadataEntry.AsObject;
  static serializeBinaryToWriter(message: SetMetadataEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMetadataEntry;
  static deserializeBinaryFromReader(message: SetMetadataEntry, reader: jspb.BinaryReader): SetMetadataEntry;
}

export namespace SetMetadataEntry {
  export type AsObject = {
    key: string,
    value: Uint8Array | string,
  }
}

export class HumanUser extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): HumanUser;

  getState(): UserState;
  setState(value: UserState): HumanUser;

  getUsername(): string;
  setUsername(value: string): HumanUser;

  getLoginNamesList(): Array<string>;
  setLoginNamesList(value: Array<string>): HumanUser;
  clearLoginNamesList(): HumanUser;
  addLoginNames(value: string, index?: number): HumanUser;

  getPreferredLoginName(): string;
  setPreferredLoginName(value: string): HumanUser;

  getProfile(): HumanProfile | undefined;
  setProfile(value?: HumanProfile): HumanUser;
  hasProfile(): boolean;
  clearProfile(): HumanUser;

  getEmail(): zitadel_user_v2_email_pb.HumanEmail | undefined;
  setEmail(value?: zitadel_user_v2_email_pb.HumanEmail): HumanUser;
  hasEmail(): boolean;
  clearEmail(): HumanUser;

  getPhone(): zitadel_user_v2_phone_pb.HumanPhone | undefined;
  setPhone(value?: zitadel_user_v2_phone_pb.HumanPhone): HumanUser;
  hasPhone(): boolean;
  clearPhone(): HumanUser;

  getPasswordChangeRequired(): boolean;
  setPasswordChangeRequired(value: boolean): HumanUser;

  getPasswordChanged(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPasswordChanged(value?: google_protobuf_timestamp_pb.Timestamp): HumanUser;
  hasPasswordChanged(): boolean;
  clearPasswordChanged(): HumanUser;

  getMfaInitSkipped(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMfaInitSkipped(value?: google_protobuf_timestamp_pb.Timestamp): HumanUser;
  hasMfaInitSkipped(): boolean;
  clearMfaInitSkipped(): HumanUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanUser.AsObject;
  static toObject(includeInstance: boolean, msg: HumanUser): HumanUser.AsObject;
  static serializeBinaryToWriter(message: HumanUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanUser;
  static deserializeBinaryFromReader(message: HumanUser, reader: jspb.BinaryReader): HumanUser;
}

export namespace HumanUser {
  export type AsObject = {
    userId: string,
    state: UserState,
    username: string,
    loginNamesList: Array<string>,
    preferredLoginName: string,
    profile?: HumanProfile.AsObject,
    email?: zitadel_user_v2_email_pb.HumanEmail.AsObject,
    phone?: zitadel_user_v2_phone_pb.HumanPhone.AsObject,
    passwordChangeRequired: boolean,
    passwordChanged?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mfaInitSkipped?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class User extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): User;

  getDetails(): zitadel_object_v2_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2_object_pb.Details): User;
  hasDetails(): boolean;
  clearDetails(): User;

  getState(): UserState;
  setState(value: UserState): User;

  getUsername(): string;
  setUsername(value: string): User;

  getLoginNamesList(): Array<string>;
  setLoginNamesList(value: Array<string>): User;
  clearLoginNamesList(): User;
  addLoginNames(value: string, index?: number): User;

  getPreferredLoginName(): string;
  setPreferredLoginName(value: string): User;

  getHuman(): HumanUser | undefined;
  setHuman(value?: HumanUser): User;
  hasHuman(): boolean;
  clearHuman(): User;

  getMachine(): MachineUser | undefined;
  setMachine(value?: MachineUser): User;
  hasMachine(): boolean;
  clearMachine(): User;

  getTypeCase(): User.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userId: string,
    details?: zitadel_object_v2_object_pb.Details.AsObject,
    state: UserState,
    username: string,
    loginNamesList: Array<string>,
    preferredLoginName: string,
    human?: HumanUser.AsObject,
    machine?: MachineUser.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    HUMAN = 6,
    MACHINE = 7,
  }
}

export class MachineUser extends jspb.Message {
  getName(): string;
  setName(value: string): MachineUser;

  getDescription(): string;
  setDescription(value: string): MachineUser;

  getHasSecret(): boolean;
  setHasSecret(value: boolean): MachineUser;

  getAccessTokenType(): AccessTokenType;
  setAccessTokenType(value: AccessTokenType): MachineUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineUser.AsObject;
  static toObject(includeInstance: boolean, msg: MachineUser): MachineUser.AsObject;
  static serializeBinaryToWriter(message: MachineUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineUser;
  static deserializeBinaryFromReader(message: MachineUser, reader: jspb.BinaryReader): MachineUser;
}

export namespace MachineUser {
  export type AsObject = {
    name: string,
    description: string,
    hasSecret: boolean,
    accessTokenType: AccessTokenType,
  }
}

export class Passkey extends jspb.Message {
  getId(): string;
  setId(value: string): Passkey;

  getState(): AuthFactorState;
  setState(value: AuthFactorState): Passkey;

  getName(): string;
  setName(value: string): Passkey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Passkey.AsObject;
  static toObject(includeInstance: boolean, msg: Passkey): Passkey.AsObject;
  static serializeBinaryToWriter(message: Passkey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Passkey;
  static deserializeBinaryFromReader(message: Passkey, reader: jspb.BinaryReader): Passkey;
}

export namespace Passkey {
  export type AsObject = {
    id: string,
    state: AuthFactorState,
    name: string,
  }
}

export class AuthFactor extends jspb.Message {
  getState(): AuthFactorState;
  setState(value: AuthFactorState): AuthFactor;

  getOtp(): AuthFactorOTP | undefined;
  setOtp(value?: AuthFactorOTP): AuthFactor;
  hasOtp(): boolean;
  clearOtp(): AuthFactor;

  getU2f(): AuthFactorU2F | undefined;
  setU2f(value?: AuthFactorU2F): AuthFactor;
  hasU2f(): boolean;
  clearU2f(): AuthFactor;

  getOtpSms(): AuthFactorOTPSMS | undefined;
  setOtpSms(value?: AuthFactorOTPSMS): AuthFactor;
  hasOtpSms(): boolean;
  clearOtpSms(): AuthFactor;

  getOtpEmail(): AuthFactorOTPEmail | undefined;
  setOtpEmail(value?: AuthFactorOTPEmail): AuthFactor;
  hasOtpEmail(): boolean;
  clearOtpEmail(): AuthFactor;

  getTypeCase(): AuthFactor.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthFactor.AsObject;
  static toObject(includeInstance: boolean, msg: AuthFactor): AuthFactor.AsObject;
  static serializeBinaryToWriter(message: AuthFactor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthFactor;
  static deserializeBinaryFromReader(message: AuthFactor, reader: jspb.BinaryReader): AuthFactor;
}

export namespace AuthFactor {
  export type AsObject = {
    state: AuthFactorState,
    otp?: AuthFactorOTP.AsObject,
    u2f?: AuthFactorU2F.AsObject,
    otpSms?: AuthFactorOTPSMS.AsObject,
    otpEmail?: AuthFactorOTPEmail.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    OTP = 2,
    U2F = 3,
    OTP_SMS = 4,
    OTP_EMAIL = 5,
  }
}

export class AuthFactorOTP extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthFactorOTP.AsObject;
  static toObject(includeInstance: boolean, msg: AuthFactorOTP): AuthFactorOTP.AsObject;
  static serializeBinaryToWriter(message: AuthFactorOTP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthFactorOTP;
  static deserializeBinaryFromReader(message: AuthFactorOTP, reader: jspb.BinaryReader): AuthFactorOTP;
}

export namespace AuthFactorOTP {
  export type AsObject = {
  }
}

export class AuthFactorOTPSMS extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthFactorOTPSMS.AsObject;
  static toObject(includeInstance: boolean, msg: AuthFactorOTPSMS): AuthFactorOTPSMS.AsObject;
  static serializeBinaryToWriter(message: AuthFactorOTPSMS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthFactorOTPSMS;
  static deserializeBinaryFromReader(message: AuthFactorOTPSMS, reader: jspb.BinaryReader): AuthFactorOTPSMS;
}

export namespace AuthFactorOTPSMS {
  export type AsObject = {
  }
}

export class AuthFactorOTPEmail extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthFactorOTPEmail.AsObject;
  static toObject(includeInstance: boolean, msg: AuthFactorOTPEmail): AuthFactorOTPEmail.AsObject;
  static serializeBinaryToWriter(message: AuthFactorOTPEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthFactorOTPEmail;
  static deserializeBinaryFromReader(message: AuthFactorOTPEmail, reader: jspb.BinaryReader): AuthFactorOTPEmail;
}

export namespace AuthFactorOTPEmail {
  export type AsObject = {
  }
}

export class AuthFactorU2F extends jspb.Message {
  getId(): string;
  setId(value: string): AuthFactorU2F;

  getName(): string;
  setName(value: string): AuthFactorU2F;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthFactorU2F.AsObject;
  static toObject(includeInstance: boolean, msg: AuthFactorU2F): AuthFactorU2F.AsObject;
  static serializeBinaryToWriter(message: AuthFactorU2F, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthFactorU2F;
  static deserializeBinaryFromReader(message: AuthFactorU2F, reader: jspb.BinaryReader): AuthFactorU2F;
}

export namespace AuthFactorU2F {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class SendInviteCode extends jspb.Message {
  getUrlTemplate(): string;
  setUrlTemplate(value: string): SendInviteCode;
  hasUrlTemplate(): boolean;
  clearUrlTemplate(): SendInviteCode;

  getApplicationName(): string;
  setApplicationName(value: string): SendInviteCode;
  hasApplicationName(): boolean;
  clearApplicationName(): SendInviteCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendInviteCode.AsObject;
  static toObject(includeInstance: boolean, msg: SendInviteCode): SendInviteCode.AsObject;
  static serializeBinaryToWriter(message: SendInviteCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendInviteCode;
  static deserializeBinaryFromReader(message: SendInviteCode, reader: jspb.BinaryReader): SendInviteCode;
}

export namespace SendInviteCode {
  export type AsObject = {
    urlTemplate?: string,
    applicationName?: string,
  }

  export enum UrlTemplateCase { 
    _URL_TEMPLATE_NOT_SET = 0,
    URL_TEMPLATE = 1,
  }

  export enum ApplicationNameCase { 
    _APPLICATION_NAME_NOT_SET = 0,
    APPLICATION_NAME = 2,
  }
}

export class ReturnInviteCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReturnInviteCode.AsObject;
  static toObject(includeInstance: boolean, msg: ReturnInviteCode): ReturnInviteCode.AsObject;
  static serializeBinaryToWriter(message: ReturnInviteCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReturnInviteCode;
  static deserializeBinaryFromReader(message: ReturnInviteCode, reader: jspb.BinaryReader): ReturnInviteCode;
}

export namespace ReturnInviteCode {
  export type AsObject = {
  }
}

export enum Gender { 
  GENDER_UNSPECIFIED = 0,
  GENDER_FEMALE = 1,
  GENDER_MALE = 2,
  GENDER_DIVERSE = 3,
}
export enum AccessTokenType { 
  ACCESS_TOKEN_TYPE_BEARER = 0,
  ACCESS_TOKEN_TYPE_JWT = 1,
}
export enum UserState { 
  USER_STATE_UNSPECIFIED = 0,
  USER_STATE_ACTIVE = 1,
  USER_STATE_INACTIVE = 2,
  USER_STATE_DELETED = 3,
  USER_STATE_LOCKED = 4,
  USER_STATE_INITIAL = 5,
}
export enum AuthFactorState { 
  AUTH_FACTOR_STATE_UNSPECIFIED = 0,
  AUTH_FACTOR_STATE_NOT_READY = 1,
  AUTH_FACTOR_STATE_READY = 2,
  AUTH_FACTOR_STATE_REMOVED = 3,
}
