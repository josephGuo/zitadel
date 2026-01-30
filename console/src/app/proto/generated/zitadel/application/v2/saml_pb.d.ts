import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as zitadel_application_v2_login_pb from '../../../zitadel/application/v2/login_pb'; // proto import: "zitadel/application/v2/login.proto"


export class SAMLConfiguration extends jspb.Message {
  getMetadataXml(): Uint8Array | string;
  getMetadataXml_asU8(): Uint8Array;
  getMetadataXml_asB64(): string;
  setMetadataXml(value: Uint8Array | string): SAMLConfiguration;

  getMetadataUrl(): string;
  setMetadataUrl(value: string): SAMLConfiguration;

  getLoginVersion(): zitadel_application_v2_login_pb.LoginVersion | undefined;
  setLoginVersion(value?: zitadel_application_v2_login_pb.LoginVersion): SAMLConfiguration;
  hasLoginVersion(): boolean;
  clearLoginVersion(): SAMLConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SAMLConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: SAMLConfiguration): SAMLConfiguration.AsObject;
  static serializeBinaryToWriter(message: SAMLConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SAMLConfiguration;
  static deserializeBinaryFromReader(message: SAMLConfiguration, reader: jspb.BinaryReader): SAMLConfiguration;
}

export namespace SAMLConfiguration {
  export type AsObject = {
    metadataXml: Uint8Array | string,
    metadataUrl: string,
    loginVersion?: zitadel_application_v2_login_pb.LoginVersion.AsObject,
  }
}

