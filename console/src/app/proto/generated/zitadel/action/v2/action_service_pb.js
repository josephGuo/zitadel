// source: zitadel/action/v2/action_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var zitadel_protoc_gen_zitadel_v2_options_pb = require('../../../zitadel/protoc_gen_zitadel/v2/options_pb.js');
goog.object.extend(proto, zitadel_protoc_gen_zitadel_v2_options_pb);
var zitadel_action_v2_target_pb = require('../../../zitadel/action/v2/target_pb.js');
goog.object.extend(proto, zitadel_action_v2_target_pb);
var zitadel_action_v2_execution_pb = require('../../../zitadel/action/v2/execution_pb.js');
goog.object.extend(proto, zitadel_action_v2_execution_pb);
var zitadel_action_v2_query_pb = require('../../../zitadel/action/v2/query_pb.js');
goog.object.extend(proto, zitadel_action_v2_query_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var zitadel_filter_v2_filter_pb = require('../../../zitadel/filter/v2/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2_filter_pb);
goog.exportSymbol('proto.zitadel.action.v2.ActivatePublicKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ActivatePublicKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.AddPublicKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.AddPublicKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.CreateTargetRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.CreateTargetRequest.TargetTypeCase', null, global);
goog.exportSymbol('proto.zitadel.action.v2.CreateTargetResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.DeactivatePublicKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.DeactivatePublicKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.DeleteTargetRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.DeleteTargetResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.GetTargetRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.GetTargetResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListExecutionFunctionsRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListExecutionFunctionsResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListExecutionMethodsRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListExecutionMethodsResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListExecutionServicesRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListExecutionServicesResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListExecutionsRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListExecutionsResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListPublicKeysRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListPublicKeysResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListTargetsRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.ListTargetsResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.RemovePublicKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.RemovePublicKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.SetExecutionRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.SetExecutionResponse', null, global);
goog.exportSymbol('proto.zitadel.action.v2.UpdateTargetRequest', null, global);
goog.exportSymbol('proto.zitadel.action.v2.UpdateTargetRequest.TargetTypeCase', null, global);
goog.exportSymbol('proto.zitadel.action.v2.UpdateTargetResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.CreateTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.action.v2.CreateTargetRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.action.v2.CreateTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.CreateTargetRequest.displayName = 'proto.zitadel.action.v2.CreateTargetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.CreateTargetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.CreateTargetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.CreateTargetResponse.displayName = 'proto.zitadel.action.v2.CreateTargetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.UpdateTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.action.v2.UpdateTargetRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.action.v2.UpdateTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.UpdateTargetRequest.displayName = 'proto.zitadel.action.v2.UpdateTargetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.UpdateTargetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.UpdateTargetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.UpdateTargetResponse.displayName = 'proto.zitadel.action.v2.UpdateTargetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.DeleteTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.DeleteTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.DeleteTargetRequest.displayName = 'proto.zitadel.action.v2.DeleteTargetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.DeleteTargetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.DeleteTargetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.DeleteTargetResponse.displayName = 'proto.zitadel.action.v2.DeleteTargetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.GetTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.GetTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.GetTargetRequest.displayName = 'proto.zitadel.action.v2.GetTargetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.GetTargetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.GetTargetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.GetTargetResponse.displayName = 'proto.zitadel.action.v2.GetTargetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListTargetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.ListTargetsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.ListTargetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListTargetsRequest.displayName = 'proto.zitadel.action.v2.ListTargetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListTargetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.ListTargetsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.ListTargetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListTargetsResponse.displayName = 'proto.zitadel.action.v2.ListTargetsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.AddPublicKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.AddPublicKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.AddPublicKeyRequest.displayName = 'proto.zitadel.action.v2.AddPublicKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.AddPublicKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.AddPublicKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.AddPublicKeyResponse.displayName = 'proto.zitadel.action.v2.AddPublicKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.ActivatePublicKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ActivatePublicKeyRequest.displayName = 'proto.zitadel.action.v2.ActivatePublicKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.ActivatePublicKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ActivatePublicKeyResponse.displayName = 'proto.zitadel.action.v2.ActivatePublicKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.DeactivatePublicKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.DeactivatePublicKeyRequest.displayName = 'proto.zitadel.action.v2.DeactivatePublicKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.DeactivatePublicKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.DeactivatePublicKeyResponse.displayName = 'proto.zitadel.action.v2.DeactivatePublicKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.RemovePublicKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.RemovePublicKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.RemovePublicKeyRequest.displayName = 'proto.zitadel.action.v2.RemovePublicKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.RemovePublicKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.RemovePublicKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.RemovePublicKeyResponse.displayName = 'proto.zitadel.action.v2.RemovePublicKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListPublicKeysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.ListPublicKeysRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.ListPublicKeysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListPublicKeysRequest.displayName = 'proto.zitadel.action.v2.ListPublicKeysRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListPublicKeysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.ListPublicKeysResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.ListPublicKeysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListPublicKeysResponse.displayName = 'proto.zitadel.action.v2.ListPublicKeysResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.SetExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.SetExecutionRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.SetExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.SetExecutionRequest.displayName = 'proto.zitadel.action.v2.SetExecutionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.SetExecutionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.SetExecutionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.SetExecutionResponse.displayName = 'proto.zitadel.action.v2.SetExecutionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListExecutionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.ListExecutionsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.ListExecutionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListExecutionsRequest.displayName = 'proto.zitadel.action.v2.ListExecutionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListExecutionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.ListExecutionsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.ListExecutionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListExecutionsResponse.displayName = 'proto.zitadel.action.v2.ListExecutionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListExecutionFunctionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.ListExecutionFunctionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListExecutionFunctionsRequest.displayName = 'proto.zitadel.action.v2.ListExecutionFunctionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.ListExecutionFunctionsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.ListExecutionFunctionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListExecutionFunctionsResponse.displayName = 'proto.zitadel.action.v2.ListExecutionFunctionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListExecutionMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.ListExecutionMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListExecutionMethodsRequest.displayName = 'proto.zitadel.action.v2.ListExecutionMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.ListExecutionMethodsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.ListExecutionMethodsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListExecutionMethodsResponse.displayName = 'proto.zitadel.action.v2.ListExecutionMethodsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListExecutionServicesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.action.v2.ListExecutionServicesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListExecutionServicesRequest.displayName = 'proto.zitadel.action.v2.ListExecutionServicesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.action.v2.ListExecutionServicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.action.v2.ListExecutionServicesResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.action.v2.ListExecutionServicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.action.v2.ListExecutionServicesResponse.displayName = 'proto.zitadel.action.v2.ListExecutionServicesResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.action.v2.CreateTargetRequest.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.zitadel.action.v2.CreateTargetRequest.TargetTypeCase = {
  TARGET_TYPE_NOT_SET: 0,
  REST_WEBHOOK: 2,
  REST_CALL: 3,
  REST_ASYNC: 4
};

/**
 * @return {proto.zitadel.action.v2.CreateTargetRequest.TargetTypeCase}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.getTargetTypeCase = function() {
  return /** @type {proto.zitadel.action.v2.CreateTargetRequest.TargetTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.action.v2.CreateTargetRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.CreateTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.CreateTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.CreateTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
restWebhook: (f = msg.getRestWebhook()) && zitadel_action_v2_target_pb.RESTWebhook.toObject(includeInstance, f),
restCall: (f = msg.getRestCall()) && zitadel_action_v2_target_pb.RESTCall.toObject(includeInstance, f),
restAsync: (f = msg.getRestAsync()) && zitadel_action_v2_target_pb.RESTAsync.toObject(includeInstance, f),
timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
endpoint: jspb.Message.getFieldWithDefault(msg, 6, ""),
payloadType: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.CreateTargetRequest}
 */
proto.zitadel.action.v2.CreateTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.CreateTargetRequest;
  return proto.zitadel.action.v2.CreateTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.CreateTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.CreateTargetRequest}
 */
proto.zitadel.action.v2.CreateTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new zitadel_action_v2_target_pb.RESTWebhook;
      reader.readMessage(value,zitadel_action_v2_target_pb.RESTWebhook.deserializeBinaryFromReader);
      msg.setRestWebhook(value);
      break;
    case 3:
      var value = new zitadel_action_v2_target_pb.RESTCall;
      reader.readMessage(value,zitadel_action_v2_target_pb.RESTCall.deserializeBinaryFromReader);
      msg.setRestCall(value);
      break;
    case 4:
      var value = new zitadel_action_v2_target_pb.RESTAsync;
      reader.readMessage(value,zitadel_action_v2_target_pb.RESTAsync.deserializeBinaryFromReader);
      msg.setRestAsync(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 7:
      var value = /** @type {!proto.zitadel.action.v2.PayloadType} */ (reader.readEnum());
      msg.setPayloadType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.CreateTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.CreateTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.CreateTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRestWebhook();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_action_v2_target_pb.RESTWebhook.serializeBinaryToWriter
    );
  }
  f = message.getRestCall();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_action_v2_target_pb.RESTCall.serializeBinaryToWriter
    );
  }
  f = message.getRestAsync();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_action_v2_target_pb.RESTAsync.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPayloadType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RESTWebhook rest_webhook = 2;
 * @return {?proto.zitadel.action.v2.RESTWebhook}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.getRestWebhook = function() {
  return /** @type{?proto.zitadel.action.v2.RESTWebhook} */ (
    jspb.Message.getWrapperField(this, zitadel_action_v2_target_pb.RESTWebhook, 2));
};


/**
 * @param {?proto.zitadel.action.v2.RESTWebhook|undefined} value
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
*/
proto.zitadel.action.v2.CreateTargetRequest.prototype.setRestWebhook = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.action.v2.CreateTargetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.clearRestWebhook = function() {
  return this.setRestWebhook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.hasRestWebhook = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RESTCall rest_call = 3;
 * @return {?proto.zitadel.action.v2.RESTCall}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.getRestCall = function() {
  return /** @type{?proto.zitadel.action.v2.RESTCall} */ (
    jspb.Message.getWrapperField(this, zitadel_action_v2_target_pb.RESTCall, 3));
};


/**
 * @param {?proto.zitadel.action.v2.RESTCall|undefined} value
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
*/
proto.zitadel.action.v2.CreateTargetRequest.prototype.setRestCall = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.action.v2.CreateTargetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.clearRestCall = function() {
  return this.setRestCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.hasRestCall = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RESTAsync rest_async = 4;
 * @return {?proto.zitadel.action.v2.RESTAsync}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.getRestAsync = function() {
  return /** @type{?proto.zitadel.action.v2.RESTAsync} */ (
    jspb.Message.getWrapperField(this, zitadel_action_v2_target_pb.RESTAsync, 4));
};


/**
 * @param {?proto.zitadel.action.v2.RESTAsync|undefined} value
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
*/
proto.zitadel.action.v2.CreateTargetRequest.prototype.setRestAsync = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.action.v2.CreateTargetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.clearRestAsync = function() {
  return this.setRestAsync(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.hasRestAsync = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration timeout = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
*/
proto.zitadel.action.v2.CreateTargetRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string endpoint = 6;
 * @return {string}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional PayloadType payload_type = 7;
 * @return {!proto.zitadel.action.v2.PayloadType}
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.getPayloadType = function() {
  return /** @type {!proto.zitadel.action.v2.PayloadType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.zitadel.action.v2.PayloadType} value
 * @return {!proto.zitadel.action.v2.CreateTargetRequest} returns this
 */
proto.zitadel.action.v2.CreateTargetRequest.prototype.setPayloadType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.CreateTargetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.CreateTargetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.CreateTargetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.CreateTargetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
signingKey: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.CreateTargetResponse}
 */
proto.zitadel.action.v2.CreateTargetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.CreateTargetResponse;
  return proto.zitadel.action.v2.CreateTargetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.CreateTargetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.CreateTargetResponse}
 */
proto.zitadel.action.v2.CreateTargetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSigningKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.CreateTargetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.CreateTargetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.CreateTargetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.CreateTargetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSigningKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.CreateTargetResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.CreateTargetResponse} returns this
 */
proto.zitadel.action.v2.CreateTargetResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.action.v2.CreateTargetResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.action.v2.CreateTargetResponse} returns this
*/
proto.zitadel.action.v2.CreateTargetResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.CreateTargetResponse} returns this
 */
proto.zitadel.action.v2.CreateTargetResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.CreateTargetResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string signing_key = 3;
 * @return {string}
 */
proto.zitadel.action.v2.CreateTargetResponse.prototype.getSigningKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.CreateTargetResponse} returns this
 */
proto.zitadel.action.v2.CreateTargetResponse.prototype.setSigningKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.action.v2.UpdateTargetRequest.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.action.v2.UpdateTargetRequest.TargetTypeCase = {
  TARGET_TYPE_NOT_SET: 0,
  REST_WEBHOOK: 3,
  REST_CALL: 4,
  REST_ASYNC: 5
};

/**
 * @return {proto.zitadel.action.v2.UpdateTargetRequest.TargetTypeCase}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getTargetTypeCase = function() {
  return /** @type {proto.zitadel.action.v2.UpdateTargetRequest.TargetTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.action.v2.UpdateTargetRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.UpdateTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.UpdateTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.UpdateTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
restWebhook: (f = msg.getRestWebhook()) && zitadel_action_v2_target_pb.RESTWebhook.toObject(includeInstance, f),
restCall: (f = msg.getRestCall()) && zitadel_action_v2_target_pb.RESTCall.toObject(includeInstance, f),
restAsync: (f = msg.getRestAsync()) && zitadel_action_v2_target_pb.RESTAsync.toObject(includeInstance, f),
timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
endpoint: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
expirationSigningKey: (f = msg.getExpirationSigningKey()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
payloadType: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest}
 */
proto.zitadel.action.v2.UpdateTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.UpdateTargetRequest;
  return proto.zitadel.action.v2.UpdateTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.UpdateTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest}
 */
proto.zitadel.action.v2.UpdateTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new zitadel_action_v2_target_pb.RESTWebhook;
      reader.readMessage(value,zitadel_action_v2_target_pb.RESTWebhook.deserializeBinaryFromReader);
      msg.setRestWebhook(value);
      break;
    case 4:
      var value = new zitadel_action_v2_target_pb.RESTCall;
      reader.readMessage(value,zitadel_action_v2_target_pb.RESTCall.deserializeBinaryFromReader);
      msg.setRestCall(value);
      break;
    case 5:
      var value = new zitadel_action_v2_target_pb.RESTAsync;
      reader.readMessage(value,zitadel_action_v2_target_pb.RESTAsync.deserializeBinaryFromReader);
      msg.setRestAsync(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setExpirationSigningKey(value);
      break;
    case 9:
      var value = /** @type {!proto.zitadel.action.v2.PayloadType} */ (reader.readEnum());
      msg.setPayloadType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.UpdateTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.UpdateTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.UpdateTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRestWebhook();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_action_v2_target_pb.RESTWebhook.serializeBinaryToWriter
    );
  }
  f = message.getRestCall();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_action_v2_target_pb.RESTCall.serializeBinaryToWriter
    );
  }
  f = message.getRestAsync();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_action_v2_target_pb.RESTAsync.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExpirationSigningKey();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPayloadType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RESTWebhook rest_webhook = 3;
 * @return {?proto.zitadel.action.v2.RESTWebhook}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getRestWebhook = function() {
  return /** @type{?proto.zitadel.action.v2.RESTWebhook} */ (
    jspb.Message.getWrapperField(this, zitadel_action_v2_target_pb.RESTWebhook, 3));
};


/**
 * @param {?proto.zitadel.action.v2.RESTWebhook|undefined} value
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
*/
proto.zitadel.action.v2.UpdateTargetRequest.prototype.setRestWebhook = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.action.v2.UpdateTargetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.clearRestWebhook = function() {
  return this.setRestWebhook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.hasRestWebhook = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RESTCall rest_call = 4;
 * @return {?proto.zitadel.action.v2.RESTCall}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getRestCall = function() {
  return /** @type{?proto.zitadel.action.v2.RESTCall} */ (
    jspb.Message.getWrapperField(this, zitadel_action_v2_target_pb.RESTCall, 4));
};


/**
 * @param {?proto.zitadel.action.v2.RESTCall|undefined} value
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
*/
proto.zitadel.action.v2.UpdateTargetRequest.prototype.setRestCall = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.action.v2.UpdateTargetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.clearRestCall = function() {
  return this.setRestCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.hasRestCall = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RESTAsync rest_async = 5;
 * @return {?proto.zitadel.action.v2.RESTAsync}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getRestAsync = function() {
  return /** @type{?proto.zitadel.action.v2.RESTAsync} */ (
    jspb.Message.getWrapperField(this, zitadel_action_v2_target_pb.RESTAsync, 5));
};


/**
 * @param {?proto.zitadel.action.v2.RESTAsync|undefined} value
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
*/
proto.zitadel.action.v2.UpdateTargetRequest.prototype.setRestAsync = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.action.v2.UpdateTargetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.clearRestAsync = function() {
  return this.setRestAsync(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.hasRestAsync = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration timeout = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
*/
proto.zitadel.action.v2.UpdateTargetRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string endpoint = 7;
 * @return {string}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.setEndpoint = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.clearEndpoint = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Duration expiration_signing_key = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getExpirationSigningKey = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
*/
proto.zitadel.action.v2.UpdateTargetRequest.prototype.setExpirationSigningKey = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.clearExpirationSigningKey = function() {
  return this.setExpirationSigningKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.hasExpirationSigningKey = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PayloadType payload_type = 9;
 * @return {!proto.zitadel.action.v2.PayloadType}
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.getPayloadType = function() {
  return /** @type {!proto.zitadel.action.v2.PayloadType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.zitadel.action.v2.PayloadType} value
 * @return {!proto.zitadel.action.v2.UpdateTargetRequest} returns this
 */
proto.zitadel.action.v2.UpdateTargetRequest.prototype.setPayloadType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.UpdateTargetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.UpdateTargetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.UpdateTargetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.UpdateTargetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
signingKey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.UpdateTargetResponse}
 */
proto.zitadel.action.v2.UpdateTargetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.UpdateTargetResponse;
  return proto.zitadel.action.v2.UpdateTargetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.UpdateTargetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.UpdateTargetResponse}
 */
proto.zitadel.action.v2.UpdateTargetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSigningKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.UpdateTargetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.UpdateTargetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.UpdateTargetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.UpdateTargetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp change_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.action.v2.UpdateTargetResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.action.v2.UpdateTargetResponse} returns this
*/
proto.zitadel.action.v2.UpdateTargetResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.UpdateTargetResponse} returns this
 */
proto.zitadel.action.v2.UpdateTargetResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.UpdateTargetResponse.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string signing_key = 2;
 * @return {string}
 */
proto.zitadel.action.v2.UpdateTargetResponse.prototype.getSigningKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.UpdateTargetResponse} returns this
 */
proto.zitadel.action.v2.UpdateTargetResponse.prototype.setSigningKey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.action.v2.UpdateTargetResponse} returns this
 */
proto.zitadel.action.v2.UpdateTargetResponse.prototype.clearSigningKey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.UpdateTargetResponse.prototype.hasSigningKey = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.DeleteTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.DeleteTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.DeleteTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.DeleteTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.DeleteTargetRequest}
 */
proto.zitadel.action.v2.DeleteTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.DeleteTargetRequest;
  return proto.zitadel.action.v2.DeleteTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.DeleteTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.DeleteTargetRequest}
 */
proto.zitadel.action.v2.DeleteTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.DeleteTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.DeleteTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.DeleteTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.DeleteTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.DeleteTargetRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.DeleteTargetRequest} returns this
 */
proto.zitadel.action.v2.DeleteTargetRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.DeleteTargetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.DeleteTargetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.DeleteTargetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.DeleteTargetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deletionDate: (f = msg.getDeletionDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.DeleteTargetResponse}
 */
proto.zitadel.action.v2.DeleteTargetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.DeleteTargetResponse;
  return proto.zitadel.action.v2.DeleteTargetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.DeleteTargetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.DeleteTargetResponse}
 */
proto.zitadel.action.v2.DeleteTargetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletionDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.DeleteTargetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.DeleteTargetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.DeleteTargetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.DeleteTargetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletionDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp deletion_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.action.v2.DeleteTargetResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.action.v2.DeleteTargetResponse} returns this
*/
proto.zitadel.action.v2.DeleteTargetResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.DeleteTargetResponse} returns this
 */
proto.zitadel.action.v2.DeleteTargetResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.DeleteTargetResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.GetTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.GetTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.GetTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.GetTargetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.GetTargetRequest}
 */
proto.zitadel.action.v2.GetTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.GetTargetRequest;
  return proto.zitadel.action.v2.GetTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.GetTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.GetTargetRequest}
 */
proto.zitadel.action.v2.GetTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.GetTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.GetTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.GetTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.GetTargetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.GetTargetRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.GetTargetRequest} returns this
 */
proto.zitadel.action.v2.GetTargetRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.GetTargetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.GetTargetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.GetTargetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.GetTargetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
target: (f = msg.getTarget()) && zitadel_action_v2_target_pb.Target.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.GetTargetResponse}
 */
proto.zitadel.action.v2.GetTargetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.GetTargetResponse;
  return proto.zitadel.action.v2.GetTargetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.GetTargetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.GetTargetResponse}
 */
proto.zitadel.action.v2.GetTargetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_action_v2_target_pb.Target;
      reader.readMessage(value,zitadel_action_v2_target_pb.Target.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.GetTargetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.GetTargetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.GetTargetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.GetTargetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_action_v2_target_pb.Target.serializeBinaryToWriter
    );
  }
};


/**
 * optional Target target = 1;
 * @return {?proto.zitadel.action.v2.Target}
 */
proto.zitadel.action.v2.GetTargetResponse.prototype.getTarget = function() {
  return /** @type{?proto.zitadel.action.v2.Target} */ (
    jspb.Message.getWrapperField(this, zitadel_action_v2_target_pb.Target, 1));
};


/**
 * @param {?proto.zitadel.action.v2.Target|undefined} value
 * @return {!proto.zitadel.action.v2.GetTargetResponse} returns this
*/
proto.zitadel.action.v2.GetTargetResponse.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.GetTargetResponse} returns this
 */
proto.zitadel.action.v2.GetTargetResponse.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.GetTargetResponse.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.ListTargetsRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListTargetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListTargetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListTargetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_action_v2_query_pb.TargetSearchFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListTargetsRequest}
 */
proto.zitadel.action.v2.ListTargetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListTargetsRequest;
  return proto.zitadel.action.v2.ListTargetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListTargetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListTargetsRequest}
 */
proto.zitadel.action.v2.ListTargetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.action.v2.TargetFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_action_v2_query_pb.TargetSearchFilter;
      reader.readMessage(value,zitadel_action_v2_query_pb.TargetSearchFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListTargetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListTargetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListTargetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.action.v2.TargetFieldName} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_action_v2_query_pb.TargetSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.action.v2.ListTargetsRequest} returns this
*/
proto.zitadel.action.v2.ListTargetsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.ListTargetsRequest} returns this
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TargetFieldName sorting_column = 2;
 * @return {!proto.zitadel.action.v2.TargetFieldName}
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.action.v2.TargetFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.action.v2.TargetFieldName} value
 * @return {!proto.zitadel.action.v2.ListTargetsRequest} returns this
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.action.v2.ListTargetsRequest} returns this
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated TargetSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.action.v2.TargetSearchFilter>}
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.action.v2.TargetSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_action_v2_query_pb.TargetSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.action.v2.TargetSearchFilter>} value
 * @return {!proto.zitadel.action.v2.ListTargetsRequest} returns this
*/
proto.zitadel.action.v2.ListTargetsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.action.v2.TargetSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.TargetSearchFilter}
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.action.v2.TargetSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.ListTargetsRequest} returns this
 */
proto.zitadel.action.v2.ListTargetsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.ListTargetsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListTargetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListTargetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListTargetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListTargetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
targetsList: jspb.Message.toObjectList(msg.getTargetsList(),
    zitadel_action_v2_target_pb.Target.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListTargetsResponse}
 */
proto.zitadel.action.v2.ListTargetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListTargetsResponse;
  return proto.zitadel.action.v2.ListTargetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListTargetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListTargetsResponse}
 */
proto.zitadel.action.v2.ListTargetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_action_v2_target_pb.Target;
      reader.readMessage(value,zitadel_action_v2_target_pb.Target.deserializeBinaryFromReader);
      msg.addTargets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListTargetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListTargetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListTargetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListTargetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_action_v2_target_pb.Target.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.action.v2.ListTargetsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.action.v2.ListTargetsResponse} returns this
*/
proto.zitadel.action.v2.ListTargetsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.ListTargetsResponse} returns this
 */
proto.zitadel.action.v2.ListTargetsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.ListTargetsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Target targets = 2;
 * @return {!Array<!proto.zitadel.action.v2.Target>}
 */
proto.zitadel.action.v2.ListTargetsResponse.prototype.getTargetsList = function() {
  return /** @type{!Array<!proto.zitadel.action.v2.Target>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_action_v2_target_pb.Target, 2));
};


/**
 * @param {!Array<!proto.zitadel.action.v2.Target>} value
 * @return {!proto.zitadel.action.v2.ListTargetsResponse} returns this
*/
proto.zitadel.action.v2.ListTargetsResponse.prototype.setTargetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.action.v2.Target=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.Target}
 */
proto.zitadel.action.v2.ListTargetsResponse.prototype.addTargets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.action.v2.Target, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.ListTargetsResponse} returns this
 */
proto.zitadel.action.v2.ListTargetsResponse.prototype.clearTargetsList = function() {
  return this.setTargetsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.AddPublicKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.AddPublicKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.AddPublicKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
targetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
publicKey: msg.getPublicKey_asB64(),
expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.AddPublicKeyRequest}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.AddPublicKeyRequest;
  return proto.zitadel.action.v2.AddPublicKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.AddPublicKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.AddPublicKeyRequest}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.AddPublicKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.AddPublicKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.AddPublicKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string target_id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.AddPublicKeyRequest} returns this
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes public_key = 2;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.action.v2.AddPublicKeyRequest} returns this
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp expiration_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.action.v2.AddPublicKeyRequest} returns this
*/
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.AddPublicKeyRequest} returns this
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.AddPublicKeyRequest.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.AddPublicKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.AddPublicKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.AddPublicKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.AddPublicKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
keyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.AddPublicKeyResponse}
 */
proto.zitadel.action.v2.AddPublicKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.AddPublicKeyResponse;
  return proto.zitadel.action.v2.AddPublicKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.AddPublicKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.AddPublicKeyResponse}
 */
proto.zitadel.action.v2.AddPublicKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.AddPublicKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.AddPublicKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.AddPublicKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.AddPublicKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key_id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.AddPublicKeyResponse.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.AddPublicKeyResponse} returns this
 */
proto.zitadel.action.v2.AddPublicKeyResponse.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.action.v2.AddPublicKeyResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.action.v2.AddPublicKeyResponse} returns this
*/
proto.zitadel.action.v2.AddPublicKeyResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.AddPublicKeyResponse} returns this
 */
proto.zitadel.action.v2.AddPublicKeyResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.AddPublicKeyResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ActivatePublicKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ActivatePublicKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
targetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
keyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ActivatePublicKeyRequest}
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ActivatePublicKeyRequest;
  return proto.zitadel.action.v2.ActivatePublicKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ActivatePublicKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ActivatePublicKeyRequest}
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ActivatePublicKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ActivatePublicKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string target_id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.ActivatePublicKeyRequest} returns this
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key_id = 2;
 * @return {string}
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.ActivatePublicKeyRequest} returns this
 */
proto.zitadel.action.v2.ActivatePublicKeyRequest.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ActivatePublicKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ActivatePublicKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ActivatePublicKeyResponse}
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ActivatePublicKeyResponse;
  return proto.zitadel.action.v2.ActivatePublicKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ActivatePublicKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ActivatePublicKeyResponse}
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ActivatePublicKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ActivatePublicKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp change_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.action.v2.ActivatePublicKeyResponse} returns this
*/
proto.zitadel.action.v2.ActivatePublicKeyResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.ActivatePublicKeyResponse} returns this
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.ActivatePublicKeyResponse.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.DeactivatePublicKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.DeactivatePublicKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
targetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
keyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.DeactivatePublicKeyRequest}
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.DeactivatePublicKeyRequest;
  return proto.zitadel.action.v2.DeactivatePublicKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.DeactivatePublicKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.DeactivatePublicKeyRequest}
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.DeactivatePublicKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.DeactivatePublicKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string target_id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.DeactivatePublicKeyRequest} returns this
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key_id = 2;
 * @return {string}
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.DeactivatePublicKeyRequest} returns this
 */
proto.zitadel.action.v2.DeactivatePublicKeyRequest.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.DeactivatePublicKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.DeactivatePublicKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.DeactivatePublicKeyResponse}
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.DeactivatePublicKeyResponse;
  return proto.zitadel.action.v2.DeactivatePublicKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.DeactivatePublicKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.DeactivatePublicKeyResponse}
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.DeactivatePublicKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.DeactivatePublicKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp change_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.action.v2.DeactivatePublicKeyResponse} returns this
*/
proto.zitadel.action.v2.DeactivatePublicKeyResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.DeactivatePublicKeyResponse} returns this
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.DeactivatePublicKeyResponse.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.RemovePublicKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.RemovePublicKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
targetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
keyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.RemovePublicKeyRequest}
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.RemovePublicKeyRequest;
  return proto.zitadel.action.v2.RemovePublicKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.RemovePublicKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.RemovePublicKeyRequest}
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.RemovePublicKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.RemovePublicKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string target_id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.RemovePublicKeyRequest} returns this
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key_id = 2;
 * @return {string}
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.RemovePublicKeyRequest} returns this
 */
proto.zitadel.action.v2.RemovePublicKeyRequest.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.RemovePublicKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.RemovePublicKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.RemovePublicKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.RemovePublicKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deletionDate: (f = msg.getDeletionDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.RemovePublicKeyResponse}
 */
proto.zitadel.action.v2.RemovePublicKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.RemovePublicKeyResponse;
  return proto.zitadel.action.v2.RemovePublicKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.RemovePublicKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.RemovePublicKeyResponse}
 */
proto.zitadel.action.v2.RemovePublicKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletionDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.RemovePublicKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.RemovePublicKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.RemovePublicKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.RemovePublicKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletionDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp deletion_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.action.v2.RemovePublicKeyResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.action.v2.RemovePublicKeyResponse} returns this
*/
proto.zitadel.action.v2.RemovePublicKeyResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.RemovePublicKeyResponse} returns this
 */
proto.zitadel.action.v2.RemovePublicKeyResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.RemovePublicKeyResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.ListPublicKeysRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListPublicKeysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListPublicKeysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListPublicKeysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
targetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 3, 0),
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_action_v2_query_pb.PublicKeySearchFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListPublicKeysRequest}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListPublicKeysRequest;
  return proto.zitadel.action.v2.ListPublicKeysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListPublicKeysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListPublicKeysRequest}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
      break;
    case 2:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.action.v2.PublicKeyFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 4:
      var value = new zitadel_action_v2_query_pb.PublicKeySearchFilter;
      reader.readMessage(value,zitadel_action_v2_query_pb.PublicKeySearchFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListPublicKeysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListPublicKeysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListPublicKeysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      zitadel_action_v2_query_pb.PublicKeySearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string target_id = 1;
 * @return {string}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.action.v2.ListPublicKeysRequest} returns this
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.action.v2.ListPublicKeysRequest} returns this
*/
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.ListPublicKeysRequest} returns this
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PublicKeyFieldName sorting_column = 3;
 * @return {!proto.zitadel.action.v2.PublicKeyFieldName}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.action.v2.PublicKeyFieldName} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.action.v2.PublicKeyFieldName} value
 * @return {!proto.zitadel.action.v2.ListPublicKeysRequest} returns this
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated PublicKeySearchFilter filters = 4;
 * @return {!Array<!proto.zitadel.action.v2.PublicKeySearchFilter>}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.action.v2.PublicKeySearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_action_v2_query_pb.PublicKeySearchFilter, 4));
};


/**
 * @param {!Array<!proto.zitadel.action.v2.PublicKeySearchFilter>} value
 * @return {!proto.zitadel.action.v2.ListPublicKeysRequest} returns this
*/
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.zitadel.action.v2.PublicKeySearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.PublicKeySearchFilter}
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.zitadel.action.v2.PublicKeySearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.ListPublicKeysRequest} returns this
 */
proto.zitadel.action.v2.ListPublicKeysRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.ListPublicKeysResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListPublicKeysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListPublicKeysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListPublicKeysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
publicKeysList: jspb.Message.toObjectList(msg.getPublicKeysList(),
    zitadel_action_v2_target_pb.PublicKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListPublicKeysResponse}
 */
proto.zitadel.action.v2.ListPublicKeysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListPublicKeysResponse;
  return proto.zitadel.action.v2.ListPublicKeysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListPublicKeysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListPublicKeysResponse}
 */
proto.zitadel.action.v2.ListPublicKeysResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_action_v2_target_pb.PublicKey;
      reader.readMessage(value,zitadel_action_v2_target_pb.PublicKey.deserializeBinaryFromReader);
      msg.addPublicKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListPublicKeysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListPublicKeysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListPublicKeysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getPublicKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_action_v2_target_pb.PublicKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.action.v2.ListPublicKeysResponse} returns this
*/
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.ListPublicKeysResponse} returns this
 */
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PublicKey public_keys = 2;
 * @return {!Array<!proto.zitadel.action.v2.PublicKey>}
 */
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.getPublicKeysList = function() {
  return /** @type{!Array<!proto.zitadel.action.v2.PublicKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_action_v2_target_pb.PublicKey, 2));
};


/**
 * @param {!Array<!proto.zitadel.action.v2.PublicKey>} value
 * @return {!proto.zitadel.action.v2.ListPublicKeysResponse} returns this
*/
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.setPublicKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.action.v2.PublicKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.PublicKey}
 */
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.addPublicKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.action.v2.PublicKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.ListPublicKeysResponse} returns this
 */
proto.zitadel.action.v2.ListPublicKeysResponse.prototype.clearPublicKeysList = function() {
  return this.setPublicKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.SetExecutionRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.SetExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.SetExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.SetExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.SetExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
condition: (f = msg.getCondition()) && zitadel_action_v2_execution_pb.Condition.toObject(includeInstance, f),
targetsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.SetExecutionRequest}
 */
proto.zitadel.action.v2.SetExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.SetExecutionRequest;
  return proto.zitadel.action.v2.SetExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.SetExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.SetExecutionRequest}
 */
proto.zitadel.action.v2.SetExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_action_v2_execution_pb.Condition;
      reader.readMessage(value,zitadel_action_v2_execution_pb.Condition.deserializeBinaryFromReader);
      msg.setCondition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTargets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.SetExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.SetExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.SetExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.SetExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_action_v2_execution_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional Condition condition = 1;
 * @return {?proto.zitadel.action.v2.Condition}
 */
proto.zitadel.action.v2.SetExecutionRequest.prototype.getCondition = function() {
  return /** @type{?proto.zitadel.action.v2.Condition} */ (
    jspb.Message.getWrapperField(this, zitadel_action_v2_execution_pb.Condition, 1));
};


/**
 * @param {?proto.zitadel.action.v2.Condition|undefined} value
 * @return {!proto.zitadel.action.v2.SetExecutionRequest} returns this
*/
proto.zitadel.action.v2.SetExecutionRequest.prototype.setCondition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.SetExecutionRequest} returns this
 */
proto.zitadel.action.v2.SetExecutionRequest.prototype.clearCondition = function() {
  return this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.SetExecutionRequest.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string targets = 2;
 * @return {!Array<string>}
 */
proto.zitadel.action.v2.SetExecutionRequest.prototype.getTargetsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.action.v2.SetExecutionRequest} returns this
 */
proto.zitadel.action.v2.SetExecutionRequest.prototype.setTargetsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.SetExecutionRequest} returns this
 */
proto.zitadel.action.v2.SetExecutionRequest.prototype.addTargets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.SetExecutionRequest} returns this
 */
proto.zitadel.action.v2.SetExecutionRequest.prototype.clearTargetsList = function() {
  return this.setTargetsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.SetExecutionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.SetExecutionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.SetExecutionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.SetExecutionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
setDate: (f = msg.getSetDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.SetExecutionResponse}
 */
proto.zitadel.action.v2.SetExecutionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.SetExecutionResponse;
  return proto.zitadel.action.v2.SetExecutionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.SetExecutionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.SetExecutionResponse}
 */
proto.zitadel.action.v2.SetExecutionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSetDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.SetExecutionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.SetExecutionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.SetExecutionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.SetExecutionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp set_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.action.v2.SetExecutionResponse.prototype.getSetDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.action.v2.SetExecutionResponse} returns this
*/
proto.zitadel.action.v2.SetExecutionResponse.prototype.setSetDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.SetExecutionResponse} returns this
 */
proto.zitadel.action.v2.SetExecutionResponse.prototype.clearSetDate = function() {
  return this.setSetDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.SetExecutionResponse.prototype.hasSetDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.ListExecutionsRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListExecutionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListExecutionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_action_v2_query_pb.ExecutionSearchFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListExecutionsRequest}
 */
proto.zitadel.action.v2.ListExecutionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListExecutionsRequest;
  return proto.zitadel.action.v2.ListExecutionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListExecutionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListExecutionsRequest}
 */
proto.zitadel.action.v2.ListExecutionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.action.v2.ExecutionFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_action_v2_query_pb.ExecutionSearchFilter;
      reader.readMessage(value,zitadel_action_v2_query_pb.ExecutionSearchFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListExecutionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListExecutionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.action.v2.ExecutionFieldName} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_action_v2_query_pb.ExecutionSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.action.v2.ListExecutionsRequest} returns this
*/
proto.zitadel.action.v2.ListExecutionsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.ListExecutionsRequest} returns this
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExecutionFieldName sorting_column = 2;
 * @return {!proto.zitadel.action.v2.ExecutionFieldName}
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.action.v2.ExecutionFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.action.v2.ExecutionFieldName} value
 * @return {!proto.zitadel.action.v2.ListExecutionsRequest} returns this
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.action.v2.ListExecutionsRequest} returns this
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ExecutionSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.action.v2.ExecutionSearchFilter>}
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.action.v2.ExecutionSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_action_v2_query_pb.ExecutionSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.action.v2.ExecutionSearchFilter>} value
 * @return {!proto.zitadel.action.v2.ListExecutionsRequest} returns this
*/
proto.zitadel.action.v2.ListExecutionsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.action.v2.ExecutionSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.ExecutionSearchFilter}
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.action.v2.ExecutionSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.ListExecutionsRequest} returns this
 */
proto.zitadel.action.v2.ListExecutionsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.ListExecutionsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListExecutionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListExecutionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListExecutionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
executionsList: jspb.Message.toObjectList(msg.getExecutionsList(),
    zitadel_action_v2_execution_pb.Execution.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListExecutionsResponse}
 */
proto.zitadel.action.v2.ListExecutionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListExecutionsResponse;
  return proto.zitadel.action.v2.ListExecutionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListExecutionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListExecutionsResponse}
 */
proto.zitadel.action.v2.ListExecutionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_action_v2_execution_pb.Execution;
      reader.readMessage(value,zitadel_action_v2_execution_pb.Execution.deserializeBinaryFromReader);
      msg.addExecutions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListExecutionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListExecutionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListExecutionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getExecutionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_action_v2_execution_pb.Execution.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.action.v2.ListExecutionsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.action.v2.ListExecutionsResponse} returns this
*/
proto.zitadel.action.v2.ListExecutionsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.action.v2.ListExecutionsResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.action.v2.ListExecutionsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Execution executions = 2;
 * @return {!Array<!proto.zitadel.action.v2.Execution>}
 */
proto.zitadel.action.v2.ListExecutionsResponse.prototype.getExecutionsList = function() {
  return /** @type{!Array<!proto.zitadel.action.v2.Execution>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_action_v2_execution_pb.Execution, 2));
};


/**
 * @param {!Array<!proto.zitadel.action.v2.Execution>} value
 * @return {!proto.zitadel.action.v2.ListExecutionsResponse} returns this
*/
proto.zitadel.action.v2.ListExecutionsResponse.prototype.setExecutionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.action.v2.Execution=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.Execution}
 */
proto.zitadel.action.v2.ListExecutionsResponse.prototype.addExecutions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.action.v2.Execution, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.ListExecutionsResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionsResponse.prototype.clearExecutionsList = function() {
  return this.setExecutionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListExecutionFunctionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListExecutionFunctionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListExecutionFunctionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionFunctionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListExecutionFunctionsRequest}
 */
proto.zitadel.action.v2.ListExecutionFunctionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListExecutionFunctionsRequest;
  return proto.zitadel.action.v2.ListExecutionFunctionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListExecutionFunctionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListExecutionFunctionsRequest}
 */
proto.zitadel.action.v2.ListExecutionFunctionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListExecutionFunctionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListExecutionFunctionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListExecutionFunctionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionFunctionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListExecutionFunctionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListExecutionFunctionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
functionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListExecutionFunctionsResponse}
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListExecutionFunctionsResponse;
  return proto.zitadel.action.v2.ListExecutionFunctionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListExecutionFunctionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListExecutionFunctionsResponse}
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFunctions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListExecutionFunctionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListExecutionFunctionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string functions = 1;
 * @return {!Array<string>}
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.prototype.getFunctionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.action.v2.ListExecutionFunctionsResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.prototype.setFunctionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.ListExecutionFunctionsResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.prototype.addFunctions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.ListExecutionFunctionsResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionFunctionsResponse.prototype.clearFunctionsList = function() {
  return this.setFunctionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListExecutionMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListExecutionMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListExecutionMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListExecutionMethodsRequest}
 */
proto.zitadel.action.v2.ListExecutionMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListExecutionMethodsRequest;
  return proto.zitadel.action.v2.ListExecutionMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListExecutionMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListExecutionMethodsRequest}
 */
proto.zitadel.action.v2.ListExecutionMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListExecutionMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListExecutionMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListExecutionMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListExecutionMethodsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListExecutionMethodsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
methodsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListExecutionMethodsResponse}
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListExecutionMethodsResponse;
  return proto.zitadel.action.v2.ListExecutionMethodsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListExecutionMethodsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListExecutionMethodsResponse}
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addMethods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListExecutionMethodsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListExecutionMethodsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string methods = 1;
 * @return {!Array<string>}
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.prototype.getMethodsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.action.v2.ListExecutionMethodsResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.prototype.setMethodsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.ListExecutionMethodsResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.prototype.addMethods = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.ListExecutionMethodsResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionMethodsResponse.prototype.clearMethodsList = function() {
  return this.setMethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListExecutionServicesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListExecutionServicesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListExecutionServicesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionServicesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListExecutionServicesRequest}
 */
proto.zitadel.action.v2.ListExecutionServicesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListExecutionServicesRequest;
  return proto.zitadel.action.v2.ListExecutionServicesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListExecutionServicesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListExecutionServicesRequest}
 */
proto.zitadel.action.v2.ListExecutionServicesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListExecutionServicesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListExecutionServicesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListExecutionServicesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionServicesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.action.v2.ListExecutionServicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.action.v2.ListExecutionServicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
servicesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.action.v2.ListExecutionServicesResponse}
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.action.v2.ListExecutionServicesResponse;
  return proto.zitadel.action.v2.ListExecutionServicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.action.v2.ListExecutionServicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.action.v2.ListExecutionServicesResponse}
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addServices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.action.v2.ListExecutionServicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.action.v2.ListExecutionServicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServicesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string services = 1;
 * @return {!Array<string>}
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.prototype.getServicesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.action.v2.ListExecutionServicesResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.prototype.setServicesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.action.v2.ListExecutionServicesResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.prototype.addServices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.action.v2.ListExecutionServicesResponse} returns this
 */
proto.zitadel.action.v2.ListExecutionServicesResponse.prototype.clearServicesList = function() {
  return this.setServicesList([]);
};


goog.object.extend(exports, proto.zitadel.action.v2);
