import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_object_v3alpha_object_pb from '../../../../zitadel/object/v3alpha/object_pb'; // proto import: "zitadel/object/v3alpha/object.proto"
import * as zitadel_resources_object_v3alpha_object_pb from '../../../../zitadel/resources/object/v3alpha/object_pb'; // proto import: "zitadel/resources/object/v3alpha/object.proto"
import * as zitadel_resources_debug_events_v3alpha_event_pb from '../../../../zitadel/resources/debug_events/v3alpha/event_pb'; // proto import: "zitadel/resources/debug_events/v3alpha/event.proto"
import * as zitadel_resources_debug_events_v3alpha_state_pb from '../../../../zitadel/resources/debug_events/v3alpha/state_pb'; // proto import: "zitadel/resources/debug_events/v3alpha/state.proto"


export class CreateDebugEventsRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): CreateDebugEventsRequest;
  hasInstance(): boolean;
  clearInstance(): CreateDebugEventsRequest;

  getAggregateId(): string;
  setAggregateId(value: string): CreateDebugEventsRequest;

  getEventsList(): Array<zitadel_resources_debug_events_v3alpha_event_pb.Event>;
  setEventsList(value: Array<zitadel_resources_debug_events_v3alpha_event_pb.Event>): CreateDebugEventsRequest;
  clearEventsList(): CreateDebugEventsRequest;
  addEvents(value?: zitadel_resources_debug_events_v3alpha_event_pb.Event, index?: number): zitadel_resources_debug_events_v3alpha_event_pb.Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDebugEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDebugEventsRequest): CreateDebugEventsRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDebugEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDebugEventsRequest;
  static deserializeBinaryFromReader(message: CreateDebugEventsRequest, reader: jspb.BinaryReader): CreateDebugEventsRequest;
}

export namespace CreateDebugEventsRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    aggregateId: string,
    eventsList: Array<zitadel_resources_debug_events_v3alpha_event_pb.Event.AsObject>,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }
}

export class CreateDebugEventsResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): CreateDebugEventsResponse;
  hasDetails(): boolean;
  clearDetails(): CreateDebugEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDebugEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDebugEventsResponse): CreateDebugEventsResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDebugEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDebugEventsResponse;
  static deserializeBinaryFromReader(message: CreateDebugEventsResponse, reader: jspb.BinaryReader): CreateDebugEventsResponse;
}

export namespace CreateDebugEventsResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class GetDebugEventsStateByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetDebugEventsStateByIdRequest;

  getTriggerBulk(): boolean;
  setTriggerBulk(value: boolean): GetDebugEventsStateByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDebugEventsStateByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDebugEventsStateByIdRequest): GetDebugEventsStateByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetDebugEventsStateByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDebugEventsStateByIdRequest;
  static deserializeBinaryFromReader(message: GetDebugEventsStateByIdRequest, reader: jspb.BinaryReader): GetDebugEventsStateByIdRequest;
}

export namespace GetDebugEventsStateByIdRequest {
  export type AsObject = {
    id: string,
    triggerBulk: boolean,
  }
}

export class GetDebugEventsStateByIdResponse extends jspb.Message {
  getState(): zitadel_resources_debug_events_v3alpha_state_pb.State | undefined;
  setState(value?: zitadel_resources_debug_events_v3alpha_state_pb.State): GetDebugEventsStateByIdResponse;
  hasState(): boolean;
  clearState(): GetDebugEventsStateByIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDebugEventsStateByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDebugEventsStateByIdResponse): GetDebugEventsStateByIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetDebugEventsStateByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDebugEventsStateByIdResponse;
  static deserializeBinaryFromReader(message: GetDebugEventsStateByIdResponse, reader: jspb.BinaryReader): GetDebugEventsStateByIdResponse;
}

export namespace GetDebugEventsStateByIdResponse {
  export type AsObject = {
    state?: zitadel_resources_debug_events_v3alpha_state_pb.State.AsObject,
  }
}

export class ListDebugEventsStatesRequest extends jspb.Message {
  getTriggerBulk(): boolean;
  setTriggerBulk(value: boolean): ListDebugEventsStatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDebugEventsStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDebugEventsStatesRequest): ListDebugEventsStatesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDebugEventsStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDebugEventsStatesRequest;
  static deserializeBinaryFromReader(message: ListDebugEventsStatesRequest, reader: jspb.BinaryReader): ListDebugEventsStatesRequest;
}

export namespace ListDebugEventsStatesRequest {
  export type AsObject = {
    triggerBulk: boolean,
  }
}

export class ListDebugEventsStatesResponse extends jspb.Message {
  getStatesList(): Array<zitadel_resources_debug_events_v3alpha_state_pb.State>;
  setStatesList(value: Array<zitadel_resources_debug_events_v3alpha_state_pb.State>): ListDebugEventsStatesResponse;
  clearStatesList(): ListDebugEventsStatesResponse;
  addStates(value?: zitadel_resources_debug_events_v3alpha_state_pb.State, index?: number): zitadel_resources_debug_events_v3alpha_state_pb.State;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDebugEventsStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDebugEventsStatesResponse): ListDebugEventsStatesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDebugEventsStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDebugEventsStatesResponse;
  static deserializeBinaryFromReader(message: ListDebugEventsStatesResponse, reader: jspb.BinaryReader): ListDebugEventsStatesResponse;
}

export namespace ListDebugEventsStatesResponse {
  export type AsObject = {
    statesList: Array<zitadel_resources_debug_events_v3alpha_state_pb.State.AsObject>,
  }
}

