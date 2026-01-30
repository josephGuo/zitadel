import * as jspb from 'google-protobuf'

import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_object_v2_object_pb from '../../../zitadel/object/v2/object_pb'; // proto import: "zitadel/object/v2/object.proto"
import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_idp_v2_idp_pb from '../../../zitadel/idp/v2/idp_pb'; // proto import: "zitadel/idp/v2/idp.proto"


export class GetIDPByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetIDPByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIDPByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIDPByIDRequest): GetIDPByIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetIDPByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIDPByIDRequest;
  static deserializeBinaryFromReader(message: GetIDPByIDRequest, reader: jspb.BinaryReader): GetIDPByIDRequest;
}

export namespace GetIDPByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetIDPByIDResponse extends jspb.Message {
  getIdp(): zitadel_idp_v2_idp_pb.IDP | undefined;
  setIdp(value?: zitadel_idp_v2_idp_pb.IDP): GetIDPByIDResponse;
  hasIdp(): boolean;
  clearIdp(): GetIDPByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIDPByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIDPByIDResponse): GetIDPByIDResponse.AsObject;
  static serializeBinaryToWriter(message: GetIDPByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIDPByIDResponse;
  static deserializeBinaryFromReader(message: GetIDPByIDResponse, reader: jspb.BinaryReader): GetIDPByIDResponse;
}

export namespace GetIDPByIDResponse {
  export type AsObject = {
    idp?: zitadel_idp_v2_idp_pb.IDP.AsObject,
  }
}

