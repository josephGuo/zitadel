import * as jspb from 'google-protobuf'

import * as zitadel_object_v2_object_pb from '../../../zitadel/object/v2/object_pb'; // proto import: "zitadel/object/v2/object.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_saml_v2_authorization_pb from '../../../zitadel/saml/v2/authorization_pb'; // proto import: "zitadel/saml/v2/authorization.proto"
import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"


export class GetSAMLRequestRequest extends jspb.Message {
  getSamlRequestId(): string;
  setSamlRequestId(value: string): GetSAMLRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSAMLRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSAMLRequestRequest): GetSAMLRequestRequest.AsObject;
  static serializeBinaryToWriter(message: GetSAMLRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSAMLRequestRequest;
  static deserializeBinaryFromReader(message: GetSAMLRequestRequest, reader: jspb.BinaryReader): GetSAMLRequestRequest;
}

export namespace GetSAMLRequestRequest {
  export type AsObject = {
    samlRequestId: string,
  }
}

export class GetSAMLRequestResponse extends jspb.Message {
  getSamlRequest(): zitadel_saml_v2_authorization_pb.SAMLRequest | undefined;
  setSamlRequest(value?: zitadel_saml_v2_authorization_pb.SAMLRequest): GetSAMLRequestResponse;
  hasSamlRequest(): boolean;
  clearSamlRequest(): GetSAMLRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSAMLRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSAMLRequestResponse): GetSAMLRequestResponse.AsObject;
  static serializeBinaryToWriter(message: GetSAMLRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSAMLRequestResponse;
  static deserializeBinaryFromReader(message: GetSAMLRequestResponse, reader: jspb.BinaryReader): GetSAMLRequestResponse;
}

export namespace GetSAMLRequestResponse {
  export type AsObject = {
    samlRequest?: zitadel_saml_v2_authorization_pb.SAMLRequest.AsObject,
  }
}

export class CreateResponseRequest extends jspb.Message {
  getSamlRequestId(): string;
  setSamlRequestId(value: string): CreateResponseRequest;

  getSession(): Session | undefined;
  setSession(value?: Session): CreateResponseRequest;
  hasSession(): boolean;
  clearSession(): CreateResponseRequest;

  getError(): zitadel_saml_v2_authorization_pb.AuthorizationError | undefined;
  setError(value?: zitadel_saml_v2_authorization_pb.AuthorizationError): CreateResponseRequest;
  hasError(): boolean;
  clearError(): CreateResponseRequest;

  getResponseKindCase(): CreateResponseRequest.ResponseKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponseRequest): CreateResponseRequest.AsObject;
  static serializeBinaryToWriter(message: CreateResponseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponseRequest;
  static deserializeBinaryFromReader(message: CreateResponseRequest, reader: jspb.BinaryReader): CreateResponseRequest;
}

export namespace CreateResponseRequest {
  export type AsObject = {
    samlRequestId: string,
    session?: Session.AsObject,
    error?: zitadel_saml_v2_authorization_pb.AuthorizationError.AsObject,
  }

  export enum ResponseKindCase { 
    RESPONSE_KIND_NOT_SET = 0,
    SESSION = 2,
    ERROR = 3,
  }
}

export class Session extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): Session;

  getSessionToken(): string;
  setSessionToken(value: string): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    sessionId: string,
    sessionToken: string,
  }
}

export class CreateResponseResponse extends jspb.Message {
  getDetails(): zitadel_object_v2_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2_object_pb.Details): CreateResponseResponse;
  hasDetails(): boolean;
  clearDetails(): CreateResponseResponse;

  getUrl(): string;
  setUrl(value: string): CreateResponseResponse;

  getRedirect(): RedirectResponse | undefined;
  setRedirect(value?: RedirectResponse): CreateResponseResponse;
  hasRedirect(): boolean;
  clearRedirect(): CreateResponseResponse;

  getPost(): PostResponse | undefined;
  setPost(value?: PostResponse): CreateResponseResponse;
  hasPost(): boolean;
  clearPost(): CreateResponseResponse;

  getBindingCase(): CreateResponseResponse.BindingCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponseResponse): CreateResponseResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponseResponse;
  static deserializeBinaryFromReader(message: CreateResponseResponse, reader: jspb.BinaryReader): CreateResponseResponse;
}

export namespace CreateResponseResponse {
  export type AsObject = {
    details?: zitadel_object_v2_object_pb.Details.AsObject,
    url: string,
    redirect?: RedirectResponse.AsObject,
    post?: PostResponse.AsObject,
  }

  export enum BindingCase { 
    BINDING_NOT_SET = 0,
    REDIRECT = 3,
    POST = 4,
  }
}

export class RedirectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedirectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RedirectResponse): RedirectResponse.AsObject;
  static serializeBinaryToWriter(message: RedirectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedirectResponse;
  static deserializeBinaryFromReader(message: RedirectResponse, reader: jspb.BinaryReader): RedirectResponse;
}

export namespace RedirectResponse {
  export type AsObject = {
  }
}

export class PostResponse extends jspb.Message {
  getRelayState(): string;
  setRelayState(value: string): PostResponse;

  getSamlResponse(): string;
  setSamlResponse(value: string): PostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostResponse): PostResponse.AsObject;
  static serializeBinaryToWriter(message: PostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostResponse;
  static deserializeBinaryFromReader(message: PostResponse, reader: jspb.BinaryReader): PostResponse;
}

export namespace PostResponse {
  export type AsObject = {
    relayState: string,
    samlResponse: string,
  }
}

