// source: zitadel/project/v2/project_service.proto
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
var zitadel_project_v2_query_pb = require('../../../zitadel/project/v2/query_pb.js');
goog.object.extend(proto, zitadel_project_v2_query_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var zitadel_filter_v2_filter_pb = require('../../../zitadel/filter/v2/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2_filter_pb);
goog.exportSymbol('proto.zitadel.project.v2.ActivateProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.ActivateProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.ActivateProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.ActivateProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.AddProjectRoleRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.AddProjectRoleResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.CreateProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.CreateProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.CreateProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.CreateProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.DeactivateProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.DeactivateProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.DeactivateProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.DeactivateProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.DeleteProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.DeleteProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.DeleteProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.DeleteProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.GetProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.GetProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.ListProjectGrantsRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.ListProjectGrantsResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.ListProjectRolesRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.ListProjectRolesResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.ListProjectsRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.ListProjectsResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.RemoveProjectRoleRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.RemoveProjectRoleResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.UpdateProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.UpdateProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.UpdateProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.UpdateProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2.UpdateProjectRoleRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2.UpdateProjectRoleResponse', null, global);
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
proto.zitadel.project.v2.CreateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.CreateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.CreateProjectRequest.displayName = 'proto.zitadel.project.v2.CreateProjectRequest';
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
proto.zitadel.project.v2.CreateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.CreateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.CreateProjectResponse.displayName = 'proto.zitadel.project.v2.CreateProjectResponse';
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
proto.zitadel.project.v2.UpdateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.UpdateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.UpdateProjectRequest.displayName = 'proto.zitadel.project.v2.UpdateProjectRequest';
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
proto.zitadel.project.v2.UpdateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.UpdateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.UpdateProjectResponse.displayName = 'proto.zitadel.project.v2.UpdateProjectResponse';
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
proto.zitadel.project.v2.DeleteProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.DeleteProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.DeleteProjectRequest.displayName = 'proto.zitadel.project.v2.DeleteProjectRequest';
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
proto.zitadel.project.v2.DeleteProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.DeleteProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.DeleteProjectResponse.displayName = 'proto.zitadel.project.v2.DeleteProjectResponse';
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
proto.zitadel.project.v2.GetProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.GetProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.GetProjectRequest.displayName = 'proto.zitadel.project.v2.GetProjectRequest';
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
proto.zitadel.project.v2.GetProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.GetProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.GetProjectResponse.displayName = 'proto.zitadel.project.v2.GetProjectResponse';
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
proto.zitadel.project.v2.ListProjectsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2.ListProjectsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2.ListProjectsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ListProjectsRequest.displayName = 'proto.zitadel.project.v2.ListProjectsRequest';
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
proto.zitadel.project.v2.ListProjectsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2.ListProjectsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2.ListProjectsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ListProjectsResponse.displayName = 'proto.zitadel.project.v2.ListProjectsResponse';
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
proto.zitadel.project.v2.DeactivateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.DeactivateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.DeactivateProjectRequest.displayName = 'proto.zitadel.project.v2.DeactivateProjectRequest';
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
proto.zitadel.project.v2.DeactivateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.DeactivateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.DeactivateProjectResponse.displayName = 'proto.zitadel.project.v2.DeactivateProjectResponse';
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
proto.zitadel.project.v2.ActivateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.ActivateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ActivateProjectRequest.displayName = 'proto.zitadel.project.v2.ActivateProjectRequest';
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
proto.zitadel.project.v2.ActivateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.ActivateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ActivateProjectResponse.displayName = 'proto.zitadel.project.v2.ActivateProjectResponse';
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
proto.zitadel.project.v2.AddProjectRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.AddProjectRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.AddProjectRoleRequest.displayName = 'proto.zitadel.project.v2.AddProjectRoleRequest';
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
proto.zitadel.project.v2.AddProjectRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.AddProjectRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.AddProjectRoleResponse.displayName = 'proto.zitadel.project.v2.AddProjectRoleResponse';
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
proto.zitadel.project.v2.UpdateProjectRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.UpdateProjectRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.UpdateProjectRoleRequest.displayName = 'proto.zitadel.project.v2.UpdateProjectRoleRequest';
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
proto.zitadel.project.v2.UpdateProjectRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.UpdateProjectRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.UpdateProjectRoleResponse.displayName = 'proto.zitadel.project.v2.UpdateProjectRoleResponse';
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
proto.zitadel.project.v2.RemoveProjectRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.RemoveProjectRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.RemoveProjectRoleRequest.displayName = 'proto.zitadel.project.v2.RemoveProjectRoleRequest';
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
proto.zitadel.project.v2.RemoveProjectRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.RemoveProjectRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.RemoveProjectRoleResponse.displayName = 'proto.zitadel.project.v2.RemoveProjectRoleResponse';
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
proto.zitadel.project.v2.ListProjectRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2.ListProjectRolesRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2.ListProjectRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ListProjectRolesRequest.displayName = 'proto.zitadel.project.v2.ListProjectRolesRequest';
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
proto.zitadel.project.v2.ListProjectRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2.ListProjectRolesResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2.ListProjectRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ListProjectRolesResponse.displayName = 'proto.zitadel.project.v2.ListProjectRolesResponse';
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
proto.zitadel.project.v2.CreateProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2.CreateProjectGrantRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2.CreateProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.CreateProjectGrantRequest.displayName = 'proto.zitadel.project.v2.CreateProjectGrantRequest';
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
proto.zitadel.project.v2.CreateProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.CreateProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.CreateProjectGrantResponse.displayName = 'proto.zitadel.project.v2.CreateProjectGrantResponse';
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
proto.zitadel.project.v2.UpdateProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2.UpdateProjectGrantRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2.UpdateProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.UpdateProjectGrantRequest.displayName = 'proto.zitadel.project.v2.UpdateProjectGrantRequest';
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
proto.zitadel.project.v2.UpdateProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.UpdateProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.UpdateProjectGrantResponse.displayName = 'proto.zitadel.project.v2.UpdateProjectGrantResponse';
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
proto.zitadel.project.v2.DeleteProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.DeleteProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.DeleteProjectGrantRequest.displayName = 'proto.zitadel.project.v2.DeleteProjectGrantRequest';
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
proto.zitadel.project.v2.DeleteProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.DeleteProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.DeleteProjectGrantResponse.displayName = 'proto.zitadel.project.v2.DeleteProjectGrantResponse';
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
proto.zitadel.project.v2.DeactivateProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.DeactivateProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.DeactivateProjectGrantRequest.displayName = 'proto.zitadel.project.v2.DeactivateProjectGrantRequest';
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
proto.zitadel.project.v2.DeactivateProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.DeactivateProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.DeactivateProjectGrantResponse.displayName = 'proto.zitadel.project.v2.DeactivateProjectGrantResponse';
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
proto.zitadel.project.v2.ActivateProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.ActivateProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ActivateProjectGrantRequest.displayName = 'proto.zitadel.project.v2.ActivateProjectGrantRequest';
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
proto.zitadel.project.v2.ActivateProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2.ActivateProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ActivateProjectGrantResponse.displayName = 'proto.zitadel.project.v2.ActivateProjectGrantResponse';
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
proto.zitadel.project.v2.ListProjectGrantsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2.ListProjectGrantsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2.ListProjectGrantsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ListProjectGrantsRequest.displayName = 'proto.zitadel.project.v2.ListProjectGrantsRequest';
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
proto.zitadel.project.v2.ListProjectGrantsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2.ListProjectGrantsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2.ListProjectGrantsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2.ListProjectGrantsResponse.displayName = 'proto.zitadel.project.v2.ListProjectGrantsResponse';
}



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
proto.zitadel.project.v2.CreateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.CreateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.CreateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.CreateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
projectRoleAssertion: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
authorizationRequired: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
projectAccessRequired: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
privateLabelingSetting: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.zitadel.project.v2.CreateProjectRequest}
 */
proto.zitadel.project.v2.CreateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.CreateProjectRequest;
  return proto.zitadel.project.v2.CreateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.CreateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.CreateProjectRequest}
 */
proto.zitadel.project.v2.CreateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProjectRoleAssertion(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuthorizationRequired(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProjectAccessRequired(value);
      break;
    case 7:
      var value = /** @type {!proto.zitadel.project.v2.PrivateLabelingSetting} */ (reader.readEnum());
      msg.setPrivateLabelingSetting(value);
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
proto.zitadel.project.v2.CreateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.CreateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.CreateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.CreateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProjectRoleAssertion();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAuthorizationRequired();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getProjectAccessRequired();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPrivateLabelingSetting();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.clearProjectId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.hasProjectId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool project_role_assertion = 4;
 * @return {boolean}
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.getProjectRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.setProjectRoleAssertion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool authorization_required = 5;
 * @return {boolean}
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.getAuthorizationRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.setAuthorizationRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool project_access_required = 6;
 * @return {boolean}
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.getProjectAccessRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.setProjectAccessRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional PrivateLabelingSetting private_labeling_setting = 7;
 * @return {!proto.zitadel.project.v2.PrivateLabelingSetting}
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.getPrivateLabelingSetting = function() {
  return /** @type {!proto.zitadel.project.v2.PrivateLabelingSetting} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.zitadel.project.v2.PrivateLabelingSetting} value
 * @return {!proto.zitadel.project.v2.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectRequest.prototype.setPrivateLabelingSetting = function(value) {
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
proto.zitadel.project.v2.CreateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.CreateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.CreateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.CreateProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.project.v2.CreateProjectResponse}
 */
proto.zitadel.project.v2.CreateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.CreateProjectResponse;
  return proto.zitadel.project.v2.CreateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.CreateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.CreateProjectResponse}
 */
proto.zitadel.project.v2.CreateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.project.v2.CreateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.CreateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.CreateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.CreateProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
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
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.CreateProjectResponse.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.CreateProjectResponse} returns this
 */
proto.zitadel.project.v2.CreateProjectResponse.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.project.v2.CreateProjectResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.CreateProjectResponse} returns this
*/
proto.zitadel.project.v2.CreateProjectResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.CreateProjectResponse} returns this
 */
proto.zitadel.project.v2.CreateProjectResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.CreateProjectResponse.prototype.hasCreationDate = function() {
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
proto.zitadel.project.v2.UpdateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.UpdateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.UpdateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
projectRoleAssertion: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
authorizationRequired: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
projectAccessRequired: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
privateLabelingSetting: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest}
 */
proto.zitadel.project.v2.UpdateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.UpdateProjectRequest;
  return proto.zitadel.project.v2.UpdateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.UpdateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest}
 */
proto.zitadel.project.v2.UpdateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProjectRoleAssertion(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuthorizationRequired(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProjectAccessRequired(value);
      break;
    case 6:
      var value = /** @type {!proto.zitadel.project.v2.PrivateLabelingSetting} */ (reader.readEnum());
      msg.setPrivateLabelingSetting(value);
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
proto.zitadel.project.v2.UpdateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.UpdateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.UpdateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {!proto.zitadel.project.v2.PrivateLabelingSetting} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool project_role_assertion = 3;
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.getProjectRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.setProjectRoleAssertion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.clearProjectRoleAssertion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.hasProjectRoleAssertion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool authorization_required = 4;
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.getAuthorizationRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.setAuthorizationRequired = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.clearAuthorizationRequired = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.hasAuthorizationRequired = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool project_access_required = 5;
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.getProjectAccessRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.setProjectAccessRequired = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.clearProjectAccessRequired = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.hasProjectAccessRequired = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PrivateLabelingSetting private_labeling_setting = 6;
 * @return {!proto.zitadel.project.v2.PrivateLabelingSetting}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.getPrivateLabelingSetting = function() {
  return /** @type {!proto.zitadel.project.v2.PrivateLabelingSetting} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.zitadel.project.v2.PrivateLabelingSetting} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.setPrivateLabelingSetting = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.clearPrivateLabelingSetting = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRequest.prototype.hasPrivateLabelingSetting = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.zitadel.project.v2.UpdateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.UpdateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.UpdateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2.UpdateProjectResponse}
 */
proto.zitadel.project.v2.UpdateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.UpdateProjectResponse;
  return proto.zitadel.project.v2.UpdateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.UpdateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.UpdateProjectResponse}
 */
proto.zitadel.project.v2.UpdateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2.UpdateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.UpdateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.UpdateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2.UpdateProjectResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.UpdateProjectResponse} returns this
*/
proto.zitadel.project.v2.UpdateProjectResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectResponse} returns this
 */
proto.zitadel.project.v2.UpdateProjectResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2.DeleteProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.DeleteProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.DeleteProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeleteProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.project.v2.DeleteProjectRequest}
 */
proto.zitadel.project.v2.DeleteProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.DeleteProjectRequest;
  return proto.zitadel.project.v2.DeleteProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.DeleteProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.DeleteProjectRequest}
 */
proto.zitadel.project.v2.DeleteProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.project.v2.DeleteProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.DeleteProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.DeleteProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeleteProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.DeleteProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.DeleteProjectRequest} returns this
 */
proto.zitadel.project.v2.DeleteProjectRequest.prototype.setProjectId = function(value) {
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
proto.zitadel.project.v2.DeleteProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.DeleteProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.DeleteProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeleteProjectResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2.DeleteProjectResponse}
 */
proto.zitadel.project.v2.DeleteProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.DeleteProjectResponse;
  return proto.zitadel.project.v2.DeleteProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.DeleteProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.DeleteProjectResponse}
 */
proto.zitadel.project.v2.DeleteProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2.DeleteProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.DeleteProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.DeleteProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeleteProjectResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2.DeleteProjectResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.DeleteProjectResponse} returns this
*/
proto.zitadel.project.v2.DeleteProjectResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.DeleteProjectResponse} returns this
 */
proto.zitadel.project.v2.DeleteProjectResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.DeleteProjectResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.project.v2.GetProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.GetProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.GetProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.GetProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.project.v2.GetProjectRequest}
 */
proto.zitadel.project.v2.GetProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.GetProjectRequest;
  return proto.zitadel.project.v2.GetProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.GetProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.GetProjectRequest}
 */
proto.zitadel.project.v2.GetProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.project.v2.GetProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.GetProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.GetProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.GetProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.GetProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.GetProjectRequest} returns this
 */
proto.zitadel.project.v2.GetProjectRequest.prototype.setProjectId = function(value) {
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
proto.zitadel.project.v2.GetProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.GetProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.GetProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.GetProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
project: (f = msg.getProject()) && zitadel_project_v2_query_pb.Project.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.project.v2.GetProjectResponse}
 */
proto.zitadel.project.v2.GetProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.GetProjectResponse;
  return proto.zitadel.project.v2.GetProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.GetProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.GetProjectResponse}
 */
proto.zitadel.project.v2.GetProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_project_v2_query_pb.Project;
      reader.readMessage(value,zitadel_project_v2_query_pb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
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
proto.zitadel.project.v2.GetProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.GetProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.GetProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.GetProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_project_v2_query_pb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.zitadel.project.v2.Project}
 */
proto.zitadel.project.v2.GetProjectResponse.prototype.getProject = function() {
  return /** @type{?proto.zitadel.project.v2.Project} */ (
    jspb.Message.getWrapperField(this, zitadel_project_v2_query_pb.Project, 1));
};


/**
 * @param {?proto.zitadel.project.v2.Project|undefined} value
 * @return {!proto.zitadel.project.v2.GetProjectResponse} returns this
*/
proto.zitadel.project.v2.GetProjectResponse.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.GetProjectResponse} returns this
 */
proto.zitadel.project.v2.GetProjectResponse.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.GetProjectResponse.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2.ListProjectsRequest.repeatedFields_ = [3];



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
proto.zitadel.project.v2.ListProjectsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ListProjectsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ListProjectsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_project_v2_query_pb.ProjectSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2.ListProjectsRequest}
 */
proto.zitadel.project.v2.ListProjectsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ListProjectsRequest;
  return proto.zitadel.project.v2.ListProjectsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ListProjectsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ListProjectsRequest}
 */
proto.zitadel.project.v2.ListProjectsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.zitadel.project.v2.ProjectFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_project_v2_query_pb.ProjectSearchFilter;
      reader.readMessage(value,zitadel_project_v2_query_pb.ProjectSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.project.v2.ListProjectsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ListProjectsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ListProjectsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.project.v2.ProjectFieldName} */ (jspb.Message.getField(message, 2));
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
      zitadel_project_v2_query_pb.ProjectSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.project.v2.ListProjectsRequest} returns this
*/
proto.zitadel.project.v2.ListProjectsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.ListProjectsRequest} returns this
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProjectFieldName sorting_column = 2;
 * @return {!proto.zitadel.project.v2.ProjectFieldName}
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.project.v2.ProjectFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.project.v2.ProjectFieldName} value
 * @return {!proto.zitadel.project.v2.ListProjectsRequest} returns this
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.ListProjectsRequest} returns this
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProjectSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.project.v2.ProjectSearchFilter>}
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2.ProjectSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2_query_pb.ProjectSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.project.v2.ProjectSearchFilter>} value
 * @return {!proto.zitadel.project.v2.ListProjectsRequest} returns this
*/
proto.zitadel.project.v2.ListProjectsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.project.v2.ProjectSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2.ProjectSearchFilter}
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.project.v2.ProjectSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2.ListProjectsRequest} returns this
 */
proto.zitadel.project.v2.ListProjectsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2.ListProjectsResponse.repeatedFields_ = [2];



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
proto.zitadel.project.v2.ListProjectsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ListProjectsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ListProjectsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    zitadel_project_v2_query_pb.Project.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2.ListProjectsResponse}
 */
proto.zitadel.project.v2.ListProjectsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ListProjectsResponse;
  return proto.zitadel.project.v2.ListProjectsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ListProjectsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ListProjectsResponse}
 */
proto.zitadel.project.v2.ListProjectsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_project_v2_query_pb.Project;
      reader.readMessage(value,zitadel_project_v2_query_pb.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
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
proto.zitadel.project.v2.ListProjectsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ListProjectsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ListProjectsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_project_v2_query_pb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.project.v2.ListProjectsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.project.v2.ListProjectsResponse} returns this
*/
proto.zitadel.project.v2.ListProjectsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.ListProjectsResponse} returns this
 */
proto.zitadel.project.v2.ListProjectsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ListProjectsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Project projects = 2;
 * @return {!Array<!proto.zitadel.project.v2.Project>}
 */
proto.zitadel.project.v2.ListProjectsResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2_query_pb.Project, 2));
};


/**
 * @param {!Array<!proto.zitadel.project.v2.Project>} value
 * @return {!proto.zitadel.project.v2.ListProjectsResponse} returns this
*/
proto.zitadel.project.v2.ListProjectsResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.project.v2.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2.Project}
 */
proto.zitadel.project.v2.ListProjectsResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.project.v2.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2.ListProjectsResponse} returns this
 */
proto.zitadel.project.v2.ListProjectsResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
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
proto.zitadel.project.v2.DeactivateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.DeactivateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.DeactivateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeactivateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.project.v2.DeactivateProjectRequest}
 */
proto.zitadel.project.v2.DeactivateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.DeactivateProjectRequest;
  return proto.zitadel.project.v2.DeactivateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.DeactivateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.DeactivateProjectRequest}
 */
proto.zitadel.project.v2.DeactivateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.project.v2.DeactivateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.DeactivateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.DeactivateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeactivateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.DeactivateProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.DeactivateProjectRequest} returns this
 */
proto.zitadel.project.v2.DeactivateProjectRequest.prototype.setProjectId = function(value) {
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
proto.zitadel.project.v2.DeactivateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.DeactivateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.DeactivateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeactivateProjectResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2.DeactivateProjectResponse}
 */
proto.zitadel.project.v2.DeactivateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.DeactivateProjectResponse;
  return proto.zitadel.project.v2.DeactivateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.DeactivateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.DeactivateProjectResponse}
 */
proto.zitadel.project.v2.DeactivateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2.DeactivateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.DeactivateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.DeactivateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeactivateProjectResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2.DeactivateProjectResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.DeactivateProjectResponse} returns this
*/
proto.zitadel.project.v2.DeactivateProjectResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.DeactivateProjectResponse} returns this
 */
proto.zitadel.project.v2.DeactivateProjectResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.DeactivateProjectResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2.ActivateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ActivateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ActivateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ActivateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.project.v2.ActivateProjectRequest}
 */
proto.zitadel.project.v2.ActivateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ActivateProjectRequest;
  return proto.zitadel.project.v2.ActivateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ActivateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ActivateProjectRequest}
 */
proto.zitadel.project.v2.ActivateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.project.v2.ActivateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ActivateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ActivateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ActivateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.ActivateProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.ActivateProjectRequest} returns this
 */
proto.zitadel.project.v2.ActivateProjectRequest.prototype.setProjectId = function(value) {
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
proto.zitadel.project.v2.ActivateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ActivateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ActivateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ActivateProjectResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2.ActivateProjectResponse}
 */
proto.zitadel.project.v2.ActivateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ActivateProjectResponse;
  return proto.zitadel.project.v2.ActivateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ActivateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ActivateProjectResponse}
 */
proto.zitadel.project.v2.ActivateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2.ActivateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ActivateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ActivateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ActivateProjectResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2.ActivateProjectResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.ActivateProjectResponse} returns this
*/
proto.zitadel.project.v2.ActivateProjectResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.ActivateProjectResponse} returns this
 */
proto.zitadel.project.v2.ActivateProjectResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ActivateProjectResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.AddProjectRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.AddProjectRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.AddProjectRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
roleKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
group: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.zitadel.project.v2.AddProjectRoleRequest}
 */
proto.zitadel.project.v2.AddProjectRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.AddProjectRoleRequest;
  return proto.zitadel.project.v2.AddProjectRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.AddProjectRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.AddProjectRoleRequest}
 */
proto.zitadel.project.v2.AddProjectRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
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
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.AddProjectRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.AddProjectRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.AddProjectRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string role_key = 2;
 * @return {string}
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.getRoleKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.setRoleKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string group = 4;
 * @return {string}
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.AddProjectRoleRequest.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.zitadel.project.v2.AddProjectRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.AddProjectRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.AddProjectRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.AddProjectRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.zitadel.project.v2.AddProjectRoleResponse}
 */
proto.zitadel.project.v2.AddProjectRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.AddProjectRoleResponse;
  return proto.zitadel.project.v2.AddProjectRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.AddProjectRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.AddProjectRoleResponse}
 */
proto.zitadel.project.v2.AddProjectRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.zitadel.project.v2.AddProjectRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.AddProjectRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.AddProjectRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.AddProjectRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.project.v2.AddProjectRoleResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.AddProjectRoleResponse} returns this
*/
proto.zitadel.project.v2.AddProjectRoleResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.AddProjectRoleResponse} returns this
 */
proto.zitadel.project.v2.AddProjectRoleResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.AddProjectRoleResponse.prototype.hasCreationDate = function() {
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
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.UpdateProjectRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.UpdateProjectRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
roleKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
displayName: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
group: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleRequest}
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.UpdateProjectRoleRequest;
  return proto.zitadel.project.v2.UpdateProjectRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.UpdateProjectRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleRequest}
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
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
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.UpdateProjectRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.UpdateProjectRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string role_key = 2;
 * @return {string}
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.getRoleKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.setRoleKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string group = 4;
 * @return {string}
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRoleRequest.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.zitadel.project.v2.UpdateProjectRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.UpdateProjectRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.UpdateProjectRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectRoleResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleResponse}
 */
proto.zitadel.project.v2.UpdateProjectRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.UpdateProjectRoleResponse;
  return proto.zitadel.project.v2.UpdateProjectRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.UpdateProjectRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleResponse}
 */
proto.zitadel.project.v2.UpdateProjectRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2.UpdateProjectRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.UpdateProjectRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.UpdateProjectRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectRoleResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2.UpdateProjectRoleResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleResponse} returns this
*/
proto.zitadel.project.v2.UpdateProjectRoleResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectRoleResponse} returns this
 */
proto.zitadel.project.v2.UpdateProjectRoleResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectRoleResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2.RemoveProjectRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.RemoveProjectRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.RemoveProjectRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.RemoveProjectRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
roleKey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.project.v2.RemoveProjectRoleRequest}
 */
proto.zitadel.project.v2.RemoveProjectRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.RemoveProjectRoleRequest;
  return proto.zitadel.project.v2.RemoveProjectRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.RemoveProjectRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.RemoveProjectRoleRequest}
 */
proto.zitadel.project.v2.RemoveProjectRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleKey(value);
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
proto.zitadel.project.v2.RemoveProjectRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.RemoveProjectRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.RemoveProjectRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.RemoveProjectRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.RemoveProjectRoleRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.RemoveProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.RemoveProjectRoleRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string role_key = 2;
 * @return {string}
 */
proto.zitadel.project.v2.RemoveProjectRoleRequest.prototype.getRoleKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.RemoveProjectRoleRequest} returns this
 */
proto.zitadel.project.v2.RemoveProjectRoleRequest.prototype.setRoleKey = function(value) {
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
proto.zitadel.project.v2.RemoveProjectRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.RemoveProjectRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.RemoveProjectRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.RemoveProjectRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
removalDate: (f = msg.getRemovalDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.project.v2.RemoveProjectRoleResponse}
 */
proto.zitadel.project.v2.RemoveProjectRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.RemoveProjectRoleResponse;
  return proto.zitadel.project.v2.RemoveProjectRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.RemoveProjectRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.RemoveProjectRoleResponse}
 */
proto.zitadel.project.v2.RemoveProjectRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRemovalDate(value);
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
proto.zitadel.project.v2.RemoveProjectRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.RemoveProjectRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.RemoveProjectRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.RemoveProjectRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRemovalDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp removal_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.project.v2.RemoveProjectRoleResponse.prototype.getRemovalDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.RemoveProjectRoleResponse} returns this
*/
proto.zitadel.project.v2.RemoveProjectRoleResponse.prototype.setRemovalDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.RemoveProjectRoleResponse} returns this
 */
proto.zitadel.project.v2.RemoveProjectRoleResponse.prototype.clearRemovalDate = function() {
  return this.setRemovalDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.RemoveProjectRoleResponse.prototype.hasRemovalDate = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2.ListProjectRolesRequest.repeatedFields_ = [4];



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
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ListProjectRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ListProjectRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_project_v2_query_pb.ProjectRoleSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2.ListProjectRolesRequest}
 */
proto.zitadel.project.v2.ListProjectRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ListProjectRolesRequest;
  return proto.zitadel.project.v2.ListProjectRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ListProjectRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ListProjectRolesRequest}
 */
proto.zitadel.project.v2.ListProjectRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.project.v2.ProjectRoleFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 4:
      var value = new zitadel_project_v2_query_pb.ProjectRoleSearchFilter;
      reader.readMessage(value,zitadel_project_v2_query_pb.ProjectRoleSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ListProjectRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ListProjectRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
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
  f = /** @type {!proto.zitadel.project.v2.ProjectRoleFieldName} */ (jspb.Message.getField(message, 3));
  if (f != null) {
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
      zitadel_project_v2_query_pb.ProjectRoleSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.project.v2.ListProjectRolesRequest} returns this
*/
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ProjectRoleFieldName sorting_column = 3;
 * @return {!proto.zitadel.project.v2.ProjectRoleFieldName}
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.project.v2.ProjectRoleFieldName} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.project.v2.ProjectRoleFieldName} value
 * @return {!proto.zitadel.project.v2.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ProjectRoleSearchFilter filters = 4;
 * @return {!Array<!proto.zitadel.project.v2.ProjectRoleSearchFilter>}
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2.ProjectRoleSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2_query_pb.ProjectRoleSearchFilter, 4));
};


/**
 * @param {!Array<!proto.zitadel.project.v2.ProjectRoleSearchFilter>} value
 * @return {!proto.zitadel.project.v2.ListProjectRolesRequest} returns this
*/
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.zitadel.project.v2.ProjectRoleSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2.ProjectRoleSearchFilter}
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.zitadel.project.v2.ProjectRoleSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2.ListProjectRolesRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2.ListProjectRolesResponse.repeatedFields_ = [2];



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
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ListProjectRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ListProjectRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
projectRolesList: jspb.Message.toObjectList(msg.getProjectRolesList(),
    zitadel_project_v2_query_pb.ProjectRole.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2.ListProjectRolesResponse}
 */
proto.zitadel.project.v2.ListProjectRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ListProjectRolesResponse;
  return proto.zitadel.project.v2.ListProjectRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ListProjectRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ListProjectRolesResponse}
 */
proto.zitadel.project.v2.ListProjectRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_project_v2_query_pb.ProjectRole;
      reader.readMessage(value,zitadel_project_v2_query_pb.ProjectRole.deserializeBinaryFromReader);
      msg.addProjectRoles(value);
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
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ListProjectRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ListProjectRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getProjectRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_project_v2_query_pb.ProjectRole.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.project.v2.ListProjectRolesResponse} returns this
*/
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.ListProjectRolesResponse} returns this
 */
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ProjectRole project_roles = 2;
 * @return {!Array<!proto.zitadel.project.v2.ProjectRole>}
 */
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.getProjectRolesList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2.ProjectRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2_query_pb.ProjectRole, 2));
};


/**
 * @param {!Array<!proto.zitadel.project.v2.ProjectRole>} value
 * @return {!proto.zitadel.project.v2.ListProjectRolesResponse} returns this
*/
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.setProjectRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.project.v2.ProjectRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2.ProjectRole}
 */
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.addProjectRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.project.v2.ProjectRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2.ListProjectRolesResponse} returns this
 */
proto.zitadel.project.v2.ListProjectRolesResponse.prototype.clearProjectRolesList = function() {
  return this.setProjectRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.repeatedFields_ = [3];



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
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.CreateProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.CreateProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
grantedOrganizationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
roleKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.project.v2.CreateProjectGrantRequest}
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.CreateProjectGrantRequest;
  return proto.zitadel.project.v2.CreateProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.CreateProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.CreateProjectGrantRequest}
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrganizationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
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
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.CreateProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.CreateProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantedOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string role_keys = 3;
 * @return {!Array<string>}
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.project.v2.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.setRoleKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.addRoleKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.CreateProjectGrantRequest.prototype.clearRoleKeysList = function() {
  return this.setRoleKeysList([]);
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
proto.zitadel.project.v2.CreateProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.CreateProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.CreateProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.CreateProjectGrantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.zitadel.project.v2.CreateProjectGrantResponse}
 */
proto.zitadel.project.v2.CreateProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.CreateProjectGrantResponse;
  return proto.zitadel.project.v2.CreateProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.CreateProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.CreateProjectGrantResponse}
 */
proto.zitadel.project.v2.CreateProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.zitadel.project.v2.CreateProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.CreateProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.CreateProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.CreateProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp creation_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.project.v2.CreateProjectGrantResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.CreateProjectGrantResponse} returns this
*/
proto.zitadel.project.v2.CreateProjectGrantResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.CreateProjectGrantResponse} returns this
 */
proto.zitadel.project.v2.CreateProjectGrantResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.CreateProjectGrantResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.repeatedFields_ = [3];



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
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.UpdateProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.UpdateProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
grantedOrganizationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
roleKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantRequest}
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.UpdateProjectGrantRequest;
  return proto.zitadel.project.v2.UpdateProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.UpdateProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantRequest}
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrganizationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
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
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.UpdateProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.UpdateProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantedOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string role_keys = 3;
 * @return {!Array<string>}
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.setRoleKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.addRoleKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.UpdateProjectGrantRequest.prototype.clearRoleKeysList = function() {
  return this.setRoleKeysList([]);
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
proto.zitadel.project.v2.UpdateProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.UpdateProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.UpdateProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectGrantResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantResponse}
 */
proto.zitadel.project.v2.UpdateProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.UpdateProjectGrantResponse;
  return proto.zitadel.project.v2.UpdateProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.UpdateProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantResponse}
 */
proto.zitadel.project.v2.UpdateProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2.UpdateProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.UpdateProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.UpdateProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.UpdateProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2.UpdateProjectGrantResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantResponse} returns this
*/
proto.zitadel.project.v2.UpdateProjectGrantResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.UpdateProjectGrantResponse} returns this
 */
proto.zitadel.project.v2.UpdateProjectGrantResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.UpdateProjectGrantResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2.DeleteProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.DeleteProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.DeleteProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeleteProjectGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
grantedOrganizationId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.project.v2.DeleteProjectGrantRequest}
 */
proto.zitadel.project.v2.DeleteProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.DeleteProjectGrantRequest;
  return proto.zitadel.project.v2.DeleteProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.DeleteProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.DeleteProjectGrantRequest}
 */
proto.zitadel.project.v2.DeleteProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrganizationId(value);
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
proto.zitadel.project.v2.DeleteProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.DeleteProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.DeleteProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeleteProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantedOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.DeleteProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.DeleteProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.DeleteProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2.DeleteProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.DeleteProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.DeleteProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
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
proto.zitadel.project.v2.DeleteProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.DeleteProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.DeleteProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeleteProjectGrantResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2.DeleteProjectGrantResponse}
 */
proto.zitadel.project.v2.DeleteProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.DeleteProjectGrantResponse;
  return proto.zitadel.project.v2.DeleteProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.DeleteProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.DeleteProjectGrantResponse}
 */
proto.zitadel.project.v2.DeleteProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2.DeleteProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.DeleteProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.DeleteProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeleteProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2.DeleteProjectGrantResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.DeleteProjectGrantResponse} returns this
*/
proto.zitadel.project.v2.DeleteProjectGrantResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.DeleteProjectGrantResponse} returns this
 */
proto.zitadel.project.v2.DeleteProjectGrantResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.DeleteProjectGrantResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.project.v2.DeactivateProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.DeactivateProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.DeactivateProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeactivateProjectGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
grantedOrganizationId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.project.v2.DeactivateProjectGrantRequest}
 */
proto.zitadel.project.v2.DeactivateProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.DeactivateProjectGrantRequest;
  return proto.zitadel.project.v2.DeactivateProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.DeactivateProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.DeactivateProjectGrantRequest}
 */
proto.zitadel.project.v2.DeactivateProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrganizationId(value);
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
proto.zitadel.project.v2.DeactivateProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.DeactivateProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.DeactivateProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeactivateProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantedOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.DeactivateProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.DeactivateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.DeactivateProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2.DeactivateProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.DeactivateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.DeactivateProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
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
proto.zitadel.project.v2.DeactivateProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.DeactivateProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.DeactivateProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeactivateProjectGrantResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2.DeactivateProjectGrantResponse}
 */
proto.zitadel.project.v2.DeactivateProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.DeactivateProjectGrantResponse;
  return proto.zitadel.project.v2.DeactivateProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.DeactivateProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.DeactivateProjectGrantResponse}
 */
proto.zitadel.project.v2.DeactivateProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2.DeactivateProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.DeactivateProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.DeactivateProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.DeactivateProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2.DeactivateProjectGrantResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.DeactivateProjectGrantResponse} returns this
*/
proto.zitadel.project.v2.DeactivateProjectGrantResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.DeactivateProjectGrantResponse} returns this
 */
proto.zitadel.project.v2.DeactivateProjectGrantResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.DeactivateProjectGrantResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2.ActivateProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ActivateProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ActivateProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ActivateProjectGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
grantedOrganizationId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.project.v2.ActivateProjectGrantRequest}
 */
proto.zitadel.project.v2.ActivateProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ActivateProjectGrantRequest;
  return proto.zitadel.project.v2.ActivateProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ActivateProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ActivateProjectGrantRequest}
 */
proto.zitadel.project.v2.ActivateProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrganizationId(value);
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
proto.zitadel.project.v2.ActivateProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ActivateProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ActivateProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ActivateProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantedOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2.ActivateProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.ActivateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.ActivateProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2.ActivateProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2.ActivateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2.ActivateProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
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
proto.zitadel.project.v2.ActivateProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ActivateProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ActivateProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ActivateProjectGrantResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2.ActivateProjectGrantResponse}
 */
proto.zitadel.project.v2.ActivateProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ActivateProjectGrantResponse;
  return proto.zitadel.project.v2.ActivateProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ActivateProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ActivateProjectGrantResponse}
 */
proto.zitadel.project.v2.ActivateProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2.ActivateProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ActivateProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ActivateProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ActivateProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2.ActivateProjectGrantResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2.ActivateProjectGrantResponse} returns this
*/
proto.zitadel.project.v2.ActivateProjectGrantResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.ActivateProjectGrantResponse} returns this
 */
proto.zitadel.project.v2.ActivateProjectGrantResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ActivateProjectGrantResponse.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.repeatedFields_ = [3];



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
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ListProjectGrantsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ListProjectGrantsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_project_v2_query_pb.ProjectGrantSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2.ListProjectGrantsRequest}
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ListProjectGrantsRequest;
  return proto.zitadel.project.v2.ListProjectGrantsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ListProjectGrantsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ListProjectGrantsRequest}
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.zitadel.project.v2.ProjectGrantFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_project_v2_query_pb.ProjectGrantSearchFilter;
      reader.readMessage(value,zitadel_project_v2_query_pb.ProjectGrantSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ListProjectGrantsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ListProjectGrantsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.project.v2.ProjectGrantFieldName} */ (jspb.Message.getField(message, 2));
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
      zitadel_project_v2_query_pb.ProjectGrantSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.project.v2.ListProjectGrantsRequest} returns this
*/
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.ListProjectGrantsRequest} returns this
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProjectGrantFieldName sorting_column = 2;
 * @return {!proto.zitadel.project.v2.ProjectGrantFieldName}
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.project.v2.ProjectGrantFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.project.v2.ProjectGrantFieldName} value
 * @return {!proto.zitadel.project.v2.ListProjectGrantsRequest} returns this
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2.ListProjectGrantsRequest} returns this
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProjectGrantSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.project.v2.ProjectGrantSearchFilter>}
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2.ProjectGrantSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2_query_pb.ProjectGrantSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.project.v2.ProjectGrantSearchFilter>} value
 * @return {!proto.zitadel.project.v2.ListProjectGrantsRequest} returns this
*/
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.project.v2.ProjectGrantSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2.ProjectGrantSearchFilter}
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.project.v2.ProjectGrantSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2.ListProjectGrantsRequest} returns this
 */
proto.zitadel.project.v2.ListProjectGrantsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.repeatedFields_ = [2];



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
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2.ListProjectGrantsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2.ListProjectGrantsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
projectGrantsList: jspb.Message.toObjectList(msg.getProjectGrantsList(),
    zitadel_project_v2_query_pb.ProjectGrant.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2.ListProjectGrantsResponse}
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2.ListProjectGrantsResponse;
  return proto.zitadel.project.v2.ListProjectGrantsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2.ListProjectGrantsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2.ListProjectGrantsResponse}
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_project_v2_query_pb.ProjectGrant;
      reader.readMessage(value,zitadel_project_v2_query_pb.ProjectGrant.deserializeBinaryFromReader);
      msg.addProjectGrants(value);
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
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2.ListProjectGrantsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2.ListProjectGrantsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getProjectGrantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_project_v2_query_pb.ProjectGrant.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.project.v2.ListProjectGrantsResponse} returns this
*/
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2.ListProjectGrantsResponse} returns this
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ProjectGrant project_grants = 2;
 * @return {!Array<!proto.zitadel.project.v2.ProjectGrant>}
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.getProjectGrantsList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2.ProjectGrant>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2_query_pb.ProjectGrant, 2));
};


/**
 * @param {!Array<!proto.zitadel.project.v2.ProjectGrant>} value
 * @return {!proto.zitadel.project.v2.ListProjectGrantsResponse} returns this
*/
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.setProjectGrantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.project.v2.ProjectGrant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2.ProjectGrant}
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.addProjectGrants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.project.v2.ProjectGrant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2.ListProjectGrantsResponse} returns this
 */
proto.zitadel.project.v2.ListProjectGrantsResponse.prototype.clearProjectGrantsList = function() {
  return this.setProjectGrantsList([]);
};


goog.object.extend(exports, proto.zitadel.project.v2);
