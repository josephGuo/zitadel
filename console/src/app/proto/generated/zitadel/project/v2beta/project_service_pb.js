// source: zitadel/project/v2beta/project_service.proto
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
var zitadel_project_v2beta_query_pb = require('../../../zitadel/project/v2beta/query_pb.js');
goog.object.extend(proto, zitadel_project_v2beta_query_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var zitadel_filter_v2beta_filter_pb = require('../../../zitadel/filter/v2beta/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2beta_filter_pb);
goog.exportSymbol('proto.zitadel.project.v2beta.ActivateProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.ActivateProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.ActivateProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.ActivateProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.AddProjectRoleRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.AddProjectRoleResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.CreateProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.CreateProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.CreateProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.CreateProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.DeactivateProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.DeactivateProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.DeactivateProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.DeactivateProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.DeleteProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.DeleteProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.DeleteProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.DeleteProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.GetProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.GetProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.ListProjectGrantsRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.ListProjectGrantsResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.ListProjectRolesRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.ListProjectRolesResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.ListProjectsRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.ListProjectsResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.RemoveProjectRoleRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.RemoveProjectRoleResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.UpdateProjectGrantRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.UpdateProjectGrantResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.UpdateProjectRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.UpdateProjectResponse', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.UpdateProjectRoleRequest', null, global);
goog.exportSymbol('proto.zitadel.project.v2beta.UpdateProjectRoleResponse', null, global);
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
proto.zitadel.project.v2beta.CreateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.CreateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.CreateProjectRequest.displayName = 'proto.zitadel.project.v2beta.CreateProjectRequest';
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
proto.zitadel.project.v2beta.CreateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.CreateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.CreateProjectResponse.displayName = 'proto.zitadel.project.v2beta.CreateProjectResponse';
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
proto.zitadel.project.v2beta.UpdateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.UpdateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.UpdateProjectRequest.displayName = 'proto.zitadel.project.v2beta.UpdateProjectRequest';
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
proto.zitadel.project.v2beta.UpdateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.UpdateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.UpdateProjectResponse.displayName = 'proto.zitadel.project.v2beta.UpdateProjectResponse';
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
proto.zitadel.project.v2beta.DeleteProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.DeleteProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.DeleteProjectRequest.displayName = 'proto.zitadel.project.v2beta.DeleteProjectRequest';
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
proto.zitadel.project.v2beta.DeleteProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.DeleteProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.DeleteProjectResponse.displayName = 'proto.zitadel.project.v2beta.DeleteProjectResponse';
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
proto.zitadel.project.v2beta.GetProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.GetProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.GetProjectRequest.displayName = 'proto.zitadel.project.v2beta.GetProjectRequest';
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
proto.zitadel.project.v2beta.GetProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.GetProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.GetProjectResponse.displayName = 'proto.zitadel.project.v2beta.GetProjectResponse';
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
proto.zitadel.project.v2beta.ListProjectsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2beta.ListProjectsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2beta.ListProjectsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ListProjectsRequest.displayName = 'proto.zitadel.project.v2beta.ListProjectsRequest';
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
proto.zitadel.project.v2beta.ListProjectsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2beta.ListProjectsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2beta.ListProjectsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ListProjectsResponse.displayName = 'proto.zitadel.project.v2beta.ListProjectsResponse';
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
proto.zitadel.project.v2beta.DeactivateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.DeactivateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.DeactivateProjectRequest.displayName = 'proto.zitadel.project.v2beta.DeactivateProjectRequest';
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
proto.zitadel.project.v2beta.DeactivateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.DeactivateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.DeactivateProjectResponse.displayName = 'proto.zitadel.project.v2beta.DeactivateProjectResponse';
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
proto.zitadel.project.v2beta.ActivateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.ActivateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ActivateProjectRequest.displayName = 'proto.zitadel.project.v2beta.ActivateProjectRequest';
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
proto.zitadel.project.v2beta.ActivateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.ActivateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ActivateProjectResponse.displayName = 'proto.zitadel.project.v2beta.ActivateProjectResponse';
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
proto.zitadel.project.v2beta.AddProjectRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.AddProjectRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.AddProjectRoleRequest.displayName = 'proto.zitadel.project.v2beta.AddProjectRoleRequest';
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
proto.zitadel.project.v2beta.AddProjectRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.AddProjectRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.AddProjectRoleResponse.displayName = 'proto.zitadel.project.v2beta.AddProjectRoleResponse';
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
proto.zitadel.project.v2beta.UpdateProjectRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.UpdateProjectRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.UpdateProjectRoleRequest.displayName = 'proto.zitadel.project.v2beta.UpdateProjectRoleRequest';
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
proto.zitadel.project.v2beta.UpdateProjectRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.UpdateProjectRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.UpdateProjectRoleResponse.displayName = 'proto.zitadel.project.v2beta.UpdateProjectRoleResponse';
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
proto.zitadel.project.v2beta.RemoveProjectRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.RemoveProjectRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.RemoveProjectRoleRequest.displayName = 'proto.zitadel.project.v2beta.RemoveProjectRoleRequest';
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
proto.zitadel.project.v2beta.RemoveProjectRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.RemoveProjectRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.RemoveProjectRoleResponse.displayName = 'proto.zitadel.project.v2beta.RemoveProjectRoleResponse';
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
proto.zitadel.project.v2beta.ListProjectRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2beta.ListProjectRolesRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2beta.ListProjectRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ListProjectRolesRequest.displayName = 'proto.zitadel.project.v2beta.ListProjectRolesRequest';
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
proto.zitadel.project.v2beta.ListProjectRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2beta.ListProjectRolesResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2beta.ListProjectRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ListProjectRolesResponse.displayName = 'proto.zitadel.project.v2beta.ListProjectRolesResponse';
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
proto.zitadel.project.v2beta.CreateProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2beta.CreateProjectGrantRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2beta.CreateProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.CreateProjectGrantRequest.displayName = 'proto.zitadel.project.v2beta.CreateProjectGrantRequest';
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
proto.zitadel.project.v2beta.CreateProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.CreateProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.CreateProjectGrantResponse.displayName = 'proto.zitadel.project.v2beta.CreateProjectGrantResponse';
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
proto.zitadel.project.v2beta.UpdateProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2beta.UpdateProjectGrantRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2beta.UpdateProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.UpdateProjectGrantRequest.displayName = 'proto.zitadel.project.v2beta.UpdateProjectGrantRequest';
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
proto.zitadel.project.v2beta.UpdateProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.UpdateProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.UpdateProjectGrantResponse.displayName = 'proto.zitadel.project.v2beta.UpdateProjectGrantResponse';
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
proto.zitadel.project.v2beta.DeleteProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.DeleteProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.DeleteProjectGrantRequest.displayName = 'proto.zitadel.project.v2beta.DeleteProjectGrantRequest';
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
proto.zitadel.project.v2beta.DeleteProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.DeleteProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.DeleteProjectGrantResponse.displayName = 'proto.zitadel.project.v2beta.DeleteProjectGrantResponse';
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
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.DeactivateProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.displayName = 'proto.zitadel.project.v2beta.DeactivateProjectGrantRequest';
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
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.DeactivateProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.displayName = 'proto.zitadel.project.v2beta.DeactivateProjectGrantResponse';
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
proto.zitadel.project.v2beta.ActivateProjectGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.ActivateProjectGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ActivateProjectGrantRequest.displayName = 'proto.zitadel.project.v2beta.ActivateProjectGrantRequest';
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
proto.zitadel.project.v2beta.ActivateProjectGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.project.v2beta.ActivateProjectGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ActivateProjectGrantResponse.displayName = 'proto.zitadel.project.v2beta.ActivateProjectGrantResponse';
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
proto.zitadel.project.v2beta.ListProjectGrantsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2beta.ListProjectGrantsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2beta.ListProjectGrantsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ListProjectGrantsRequest.displayName = 'proto.zitadel.project.v2beta.ListProjectGrantsRequest';
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
proto.zitadel.project.v2beta.ListProjectGrantsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.project.v2beta.ListProjectGrantsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.project.v2beta.ListProjectGrantsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.project.v2beta.ListProjectGrantsResponse.displayName = 'proto.zitadel.project.v2beta.ListProjectGrantsResponse';
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
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.CreateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.CreateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.CreateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
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
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest}
 */
proto.zitadel.project.v2beta.CreateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.CreateProjectRequest;
  return proto.zitadel.project.v2beta.CreateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.CreateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest}
 */
proto.zitadel.project.v2beta.CreateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setId(value);
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
      var value = /** @type {!proto.zitadel.project.v2beta.PrivateLabelingSetting} */ (reader.readEnum());
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
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.CreateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.CreateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.CreateProjectRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool project_role_assertion = 4;
 * @return {boolean}
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.getProjectRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.setProjectRoleAssertion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool authorization_required = 5;
 * @return {boolean}
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.getAuthorizationRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.setAuthorizationRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool project_access_required = 6;
 * @return {boolean}
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.getProjectAccessRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.setProjectAccessRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional PrivateLabelingSetting private_labeling_setting = 7;
 * @return {!proto.zitadel.project.v2beta.PrivateLabelingSetting}
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.getPrivateLabelingSetting = function() {
  return /** @type {!proto.zitadel.project.v2beta.PrivateLabelingSetting} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.zitadel.project.v2beta.PrivateLabelingSetting} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectRequest.prototype.setPrivateLabelingSetting = function(value) {
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
proto.zitadel.project.v2beta.CreateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.CreateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.CreateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.CreateProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.project.v2beta.CreateProjectResponse}
 */
proto.zitadel.project.v2beta.CreateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.CreateProjectResponse;
  return proto.zitadel.project.v2beta.CreateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.CreateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.CreateProjectResponse}
 */
proto.zitadel.project.v2beta.CreateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.CreateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.CreateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.CreateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.CreateProjectResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.project.v2beta.CreateProjectResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectResponse} returns this
 */
proto.zitadel.project.v2beta.CreateProjectResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.project.v2beta.CreateProjectResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectResponse} returns this
*/
proto.zitadel.project.v2beta.CreateProjectResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.CreateProjectResponse} returns this
 */
proto.zitadel.project.v2beta.CreateProjectResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.CreateProjectResponse.prototype.hasCreationDate = function() {
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
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.UpdateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.UpdateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
projectRoleAssertion: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
projectRoleCheck: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
hasProjectCheck: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
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
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.UpdateProjectRequest;
  return proto.zitadel.project.v2beta.UpdateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProjectRoleAssertion(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProjectRoleCheck(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasProjectCheck(value);
      break;
    case 6:
      var value = /** @type {!proto.zitadel.project.v2beta.PrivateLabelingSetting} */ (reader.readEnum());
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
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.UpdateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.zitadel.project.v2beta.PrivateLabelingSetting} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool project_role_assertion = 3;
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.getProjectRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.setProjectRoleAssertion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.clearProjectRoleAssertion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.hasProjectRoleAssertion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool project_role_check = 4;
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.getProjectRoleCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.setProjectRoleCheck = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.clearProjectRoleCheck = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.hasProjectRoleCheck = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool has_project_check = 5;
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.getHasProjectCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.setHasProjectCheck = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.clearHasProjectCheck = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.hasHasProjectCheck = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PrivateLabelingSetting private_labeling_setting = 6;
 * @return {!proto.zitadel.project.v2beta.PrivateLabelingSetting}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.getPrivateLabelingSetting = function() {
  return /** @type {!proto.zitadel.project.v2beta.PrivateLabelingSetting} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.zitadel.project.v2beta.PrivateLabelingSetting} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.setPrivateLabelingSetting = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.clearPrivateLabelingSetting = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRequest.prototype.hasPrivateLabelingSetting = function() {
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
proto.zitadel.project.v2beta.UpdateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.UpdateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.UpdateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.UpdateProjectResponse}
 */
proto.zitadel.project.v2beta.UpdateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.UpdateProjectResponse;
  return proto.zitadel.project.v2beta.UpdateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectResponse}
 */
proto.zitadel.project.v2beta.UpdateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.UpdateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.UpdateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.UpdateProjectResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectResponse} returns this
*/
proto.zitadel.project.v2beta.UpdateProjectResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectResponse} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2beta.DeleteProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.DeleteProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.DeleteProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeleteProjectRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.DeleteProjectRequest}
 */
proto.zitadel.project.v2beta.DeleteProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.DeleteProjectRequest;
  return proto.zitadel.project.v2beta.DeleteProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.DeleteProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.DeleteProjectRequest}
 */
proto.zitadel.project.v2beta.DeleteProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.DeleteProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.DeleteProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.DeleteProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeleteProjectRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.DeleteProjectRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.DeleteProjectRequest} returns this
 */
proto.zitadel.project.v2beta.DeleteProjectRequest.prototype.setId = function(value) {
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
proto.zitadel.project.v2beta.DeleteProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.DeleteProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.DeleteProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeleteProjectResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.DeleteProjectResponse}
 */
proto.zitadel.project.v2beta.DeleteProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.DeleteProjectResponse;
  return proto.zitadel.project.v2beta.DeleteProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.DeleteProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.DeleteProjectResponse}
 */
proto.zitadel.project.v2beta.DeleteProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.DeleteProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.DeleteProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.DeleteProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeleteProjectResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.DeleteProjectResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.DeleteProjectResponse} returns this
*/
proto.zitadel.project.v2beta.DeleteProjectResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.DeleteProjectResponse} returns this
 */
proto.zitadel.project.v2beta.DeleteProjectResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.DeleteProjectResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.project.v2beta.GetProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.GetProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.GetProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.GetProjectRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.GetProjectRequest}
 */
proto.zitadel.project.v2beta.GetProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.GetProjectRequest;
  return proto.zitadel.project.v2beta.GetProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.GetProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.GetProjectRequest}
 */
proto.zitadel.project.v2beta.GetProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.GetProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.GetProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.GetProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.GetProjectRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.GetProjectRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.GetProjectRequest} returns this
 */
proto.zitadel.project.v2beta.GetProjectRequest.prototype.setId = function(value) {
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
proto.zitadel.project.v2beta.GetProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.GetProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.GetProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.GetProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
project: (f = msg.getProject()) && zitadel_project_v2beta_query_pb.Project.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.project.v2beta.GetProjectResponse}
 */
proto.zitadel.project.v2beta.GetProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.GetProjectResponse;
  return proto.zitadel.project.v2beta.GetProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.GetProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.GetProjectResponse}
 */
proto.zitadel.project.v2beta.GetProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_project_v2beta_query_pb.Project;
      reader.readMessage(value,zitadel_project_v2beta_query_pb.Project.deserializeBinaryFromReader);
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
proto.zitadel.project.v2beta.GetProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.GetProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.GetProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.GetProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_project_v2beta_query_pb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.zitadel.project.v2beta.Project}
 */
proto.zitadel.project.v2beta.GetProjectResponse.prototype.getProject = function() {
  return /** @type{?proto.zitadel.project.v2beta.Project} */ (
    jspb.Message.getWrapperField(this, zitadel_project_v2beta_query_pb.Project, 1));
};


/**
 * @param {?proto.zitadel.project.v2beta.Project|undefined} value
 * @return {!proto.zitadel.project.v2beta.GetProjectResponse} returns this
*/
proto.zitadel.project.v2beta.GetProjectResponse.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.GetProjectResponse} returns this
 */
proto.zitadel.project.v2beta.GetProjectResponse.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.GetProjectResponse.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2beta.ListProjectsRequest.repeatedFields_ = [3];



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
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ListProjectsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ListProjectsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_project_v2beta_query_pb.ProjectSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2beta.ListProjectsRequest}
 */
proto.zitadel.project.v2beta.ListProjectsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ListProjectsRequest;
  return proto.zitadel.project.v2beta.ListProjectsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ListProjectsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ListProjectsRequest}
 */
proto.zitadel.project.v2beta.ListProjectsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.project.v2beta.ProjectFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_project_v2beta_query_pb.ProjectSearchFilter;
      reader.readMessage(value,zitadel_project_v2beta_query_pb.ProjectSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ListProjectsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ListProjectsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.project.v2beta.ProjectFieldName} */ (jspb.Message.getField(message, 2));
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
      zitadel_project_v2beta_query_pb.ProjectSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationRequest}
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationRequest|undefined} value
 * @return {!proto.zitadel.project.v2beta.ListProjectsRequest} returns this
*/
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ListProjectsRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProjectFieldName sorting_column = 2;
 * @return {!proto.zitadel.project.v2beta.ProjectFieldName}
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.project.v2beta.ProjectFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.project.v2beta.ProjectFieldName} value
 * @return {!proto.zitadel.project.v2beta.ListProjectsRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ListProjectsRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProjectSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.project.v2beta.ProjectSearchFilter>}
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2beta.ProjectSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2beta_query_pb.ProjectSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.project.v2beta.ProjectSearchFilter>} value
 * @return {!proto.zitadel.project.v2beta.ListProjectsRequest} returns this
*/
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.project.v2beta.ProjectSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2beta.ProjectSearchFilter}
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.project.v2beta.ProjectSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2beta.ListProjectsRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2beta.ListProjectsResponse.repeatedFields_ = [2];



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
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ListProjectsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ListProjectsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationResponse.toObject(includeInstance, f),
projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    zitadel_project_v2beta_query_pb.Project.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2beta.ListProjectsResponse}
 */
proto.zitadel.project.v2beta.ListProjectsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ListProjectsResponse;
  return proto.zitadel.project.v2beta.ListProjectsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ListProjectsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ListProjectsResponse}
 */
proto.zitadel.project.v2beta.ListProjectsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_project_v2beta_query_pb.Project;
      reader.readMessage(value,zitadel_project_v2beta_query_pb.Project.deserializeBinaryFromReader);
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
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ListProjectsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ListProjectsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_project_v2beta_query_pb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationResponse}
 */
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationResponse|undefined} value
 * @return {!proto.zitadel.project.v2beta.ListProjectsResponse} returns this
*/
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ListProjectsResponse} returns this
 */
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Project projects = 2;
 * @return {!Array<!proto.zitadel.project.v2beta.Project>}
 */
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2beta.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2beta_query_pb.Project, 2));
};


/**
 * @param {!Array<!proto.zitadel.project.v2beta.Project>} value
 * @return {!proto.zitadel.project.v2beta.ListProjectsResponse} returns this
*/
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.project.v2beta.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2beta.Project}
 */
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.project.v2beta.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2beta.ListProjectsResponse} returns this
 */
proto.zitadel.project.v2beta.ListProjectsResponse.prototype.clearProjectsList = function() {
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
proto.zitadel.project.v2beta.DeactivateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.DeactivateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeactivateProjectRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectRequest}
 */
proto.zitadel.project.v2beta.DeactivateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.DeactivateProjectRequest;
  return proto.zitadel.project.v2beta.DeactivateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectRequest}
 */
proto.zitadel.project.v2beta.DeactivateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.DeactivateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.DeactivateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeactivateProjectRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.DeactivateProjectRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.DeactivateProjectRequest.prototype.setId = function(value) {
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
proto.zitadel.project.v2beta.DeactivateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.DeactivateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeactivateProjectResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectResponse}
 */
proto.zitadel.project.v2beta.DeactivateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.DeactivateProjectResponse;
  return proto.zitadel.project.v2beta.DeactivateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectResponse}
 */
proto.zitadel.project.v2beta.DeactivateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.DeactivateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.DeactivateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeactivateProjectResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.DeactivateProjectResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectResponse} returns this
*/
proto.zitadel.project.v2beta.DeactivateProjectResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectResponse} returns this
 */
proto.zitadel.project.v2beta.DeactivateProjectResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.DeactivateProjectResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2beta.ActivateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ActivateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ActivateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ActivateProjectRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.ActivateProjectRequest}
 */
proto.zitadel.project.v2beta.ActivateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ActivateProjectRequest;
  return proto.zitadel.project.v2beta.ActivateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ActivateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ActivateProjectRequest}
 */
proto.zitadel.project.v2beta.ActivateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.ActivateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ActivateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ActivateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ActivateProjectRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.ActivateProjectRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.ActivateProjectRequest} returns this
 */
proto.zitadel.project.v2beta.ActivateProjectRequest.prototype.setId = function(value) {
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
proto.zitadel.project.v2beta.ActivateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ActivateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ActivateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ActivateProjectResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.ActivateProjectResponse}
 */
proto.zitadel.project.v2beta.ActivateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ActivateProjectResponse;
  return proto.zitadel.project.v2beta.ActivateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ActivateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ActivateProjectResponse}
 */
proto.zitadel.project.v2beta.ActivateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.ActivateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ActivateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ActivateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ActivateProjectResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.ActivateProjectResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.ActivateProjectResponse} returns this
*/
proto.zitadel.project.v2beta.ActivateProjectResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ActivateProjectResponse} returns this
 */
proto.zitadel.project.v2beta.ActivateProjectResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ActivateProjectResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.AddProjectRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.AddProjectRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleRequest}
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.AddProjectRoleRequest;
  return proto.zitadel.project.v2beta.AddProjectRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.AddProjectRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleRequest}
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.AddProjectRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.AddProjectRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string role_key = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.getRoleKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.setRoleKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string group = 4;
 * @return {string}
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.AddProjectRoleRequest.prototype.hasGroup = function() {
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
proto.zitadel.project.v2beta.AddProjectRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.AddProjectRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.AddProjectRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.AddProjectRoleResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleResponse}
 */
proto.zitadel.project.v2beta.AddProjectRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.AddProjectRoleResponse;
  return proto.zitadel.project.v2beta.AddProjectRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.AddProjectRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleResponse}
 */
proto.zitadel.project.v2beta.AddProjectRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.AddProjectRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.AddProjectRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.AddProjectRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.AddProjectRoleResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.AddProjectRoleResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleResponse} returns this
*/
proto.zitadel.project.v2beta.AddProjectRoleResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.AddProjectRoleResponse} returns this
 */
proto.zitadel.project.v2beta.AddProjectRoleResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.AddProjectRoleResponse.prototype.hasCreationDate = function() {
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
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.UpdateProjectRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.UpdateProjectRoleRequest;
  return proto.zitadel.project.v2beta.UpdateProjectRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.UpdateProjectRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string role_key = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.getRoleKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.setRoleKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.clearDisplayName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string group = 4;
 * @return {string}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleRequest.prototype.hasGroup = function() {
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
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.UpdateProjectRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.UpdateProjectRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleResponse}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.UpdateProjectRoleResponse;
  return proto.zitadel.project.v2beta.UpdateProjectRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleResponse}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.UpdateProjectRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleResponse} returns this
*/
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectRoleResponse} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectRoleResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.RemoveProjectRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.RemoveProjectRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.RemoveProjectRoleRequest}
 */
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.RemoveProjectRoleRequest;
  return proto.zitadel.project.v2beta.RemoveProjectRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.RemoveProjectRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.RemoveProjectRoleRequest}
 */
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.RemoveProjectRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.RemoveProjectRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.RemoveProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string role_key = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.prototype.getRoleKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.RemoveProjectRoleRequest} returns this
 */
proto.zitadel.project.v2beta.RemoveProjectRoleRequest.prototype.setRoleKey = function(value) {
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
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.RemoveProjectRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.RemoveProjectRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.RemoveProjectRoleResponse}
 */
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.RemoveProjectRoleResponse;
  return proto.zitadel.project.v2beta.RemoveProjectRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.RemoveProjectRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.RemoveProjectRoleResponse}
 */
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.RemoveProjectRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.RemoveProjectRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.prototype.getRemovalDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.RemoveProjectRoleResponse} returns this
*/
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.prototype.setRemovalDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.RemoveProjectRoleResponse} returns this
 */
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.prototype.clearRemovalDate = function() {
  return this.setRemovalDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.RemoveProjectRoleResponse.prototype.hasRemovalDate = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.repeatedFields_ = [4];



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
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ListProjectRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ListProjectRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesRequest}
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ListProjectRolesRequest;
  return proto.zitadel.project.v2beta.ListProjectRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ListProjectRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesRequest}
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_filter_v2beta_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.project.v2beta.ProjectRoleFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 4:
      var value = new zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter;
      reader.readMessage(value,zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ListProjectRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ListProjectRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_filter_v2beta_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.project.v2beta.ProjectRoleFieldName} */ (jspb.Message.getField(message, 3));
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
      zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.filter.v2beta.PaginationRequest pagination = 2;
 * @return {?proto.zitadel.filter.v2beta.PaginationRequest}
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationRequest, 2));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationRequest|undefined} value
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesRequest} returns this
*/
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ProjectRoleFieldName sorting_column = 3;
 * @return {!proto.zitadel.project.v2beta.ProjectRoleFieldName}
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.project.v2beta.ProjectRoleFieldName} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.project.v2beta.ProjectRoleFieldName} value
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ProjectRoleSearchFilter filters = 4;
 * @return {!Array<!proto.zitadel.project.v2beta.ProjectRoleSearchFilter>}
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2beta.ProjectRoleSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter, 4));
};


/**
 * @param {!Array<!proto.zitadel.project.v2beta.ProjectRoleSearchFilter>} value
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesRequest} returns this
*/
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.zitadel.project.v2beta.ProjectRoleSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2beta.ProjectRoleSearchFilter}
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.zitadel.project.v2beta.ProjectRoleSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectRolesRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.repeatedFields_ = [2];



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
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ListProjectRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ListProjectRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationResponse.toObject(includeInstance, f),
projectRolesList: jspb.Message.toObjectList(msg.getProjectRolesList(),
    zitadel_project_v2beta_query_pb.ProjectRole.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesResponse}
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ListProjectRolesResponse;
  return proto.zitadel.project.v2beta.ListProjectRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ListProjectRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesResponse}
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_project_v2beta_query_pb.ProjectRole;
      reader.readMessage(value,zitadel_project_v2beta_query_pb.ProjectRole.deserializeBinaryFromReader);
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
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ListProjectRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ListProjectRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getProjectRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_project_v2beta_query_pb.ProjectRole.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationResponse}
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationResponse|undefined} value
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesResponse} returns this
*/
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesResponse} returns this
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ProjectRole project_roles = 2;
 * @return {!Array<!proto.zitadel.project.v2beta.ProjectRole>}
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.getProjectRolesList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2beta.ProjectRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2beta_query_pb.ProjectRole, 2));
};


/**
 * @param {!Array<!proto.zitadel.project.v2beta.ProjectRole>} value
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesResponse} returns this
*/
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.setProjectRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.project.v2beta.ProjectRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2beta.ProjectRole}
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.addProjectRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.project.v2beta.ProjectRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2beta.ListProjectRolesResponse} returns this
 */
proto.zitadel.project.v2beta.ListProjectRolesResponse.prototype.clearProjectRolesList = function() {
  return this.setProjectRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.repeatedFields_ = [3];



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
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.CreateProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.CreateProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantRequest}
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.CreateProjectGrantRequest;
  return proto.zitadel.project.v2beta.CreateProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.CreateProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantRequest}
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.CreateProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.CreateProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string role_keys = 3;
 * @return {!Array<string>}
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.setRoleKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.addRoleKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.CreateProjectGrantRequest.prototype.clearRoleKeysList = function() {
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
proto.zitadel.project.v2beta.CreateProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.CreateProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.CreateProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.CreateProjectGrantResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantResponse}
 */
proto.zitadel.project.v2beta.CreateProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.CreateProjectGrantResponse;
  return proto.zitadel.project.v2beta.CreateProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.CreateProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantResponse}
 */
proto.zitadel.project.v2beta.CreateProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.CreateProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.CreateProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.CreateProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.CreateProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.CreateProjectGrantResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantResponse} returns this
*/
proto.zitadel.project.v2beta.CreateProjectGrantResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.CreateProjectGrantResponse} returns this
 */
proto.zitadel.project.v2beta.CreateProjectGrantResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.CreateProjectGrantResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.repeatedFields_ = [3];



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
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.UpdateProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest}
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.UpdateProjectGrantRequest;
  return proto.zitadel.project.v2beta.UpdateProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest}
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.UpdateProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string role_keys = 3;
 * @return {!Array<string>}
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.setRoleKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.addRoleKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectGrantRequest.prototype.clearRoleKeysList = function() {
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
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.UpdateProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.UpdateProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantResponse}
 */
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.UpdateProjectGrantResponse;
  return proto.zitadel.project.v2beta.UpdateProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantResponse}
 */
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.UpdateProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.UpdateProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantResponse} returns this
*/
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.UpdateProjectGrantResponse} returns this
 */
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.UpdateProjectGrantResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.DeleteProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.DeleteProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.DeleteProjectGrantRequest}
 */
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.DeleteProjectGrantRequest;
  return proto.zitadel.project.v2beta.DeleteProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.DeleteProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.DeleteProjectGrantRequest}
 */
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.DeleteProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.DeleteProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.DeleteProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.DeleteProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.DeleteProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
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
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.DeleteProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.DeleteProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.DeleteProjectGrantResponse}
 */
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.DeleteProjectGrantResponse;
  return proto.zitadel.project.v2beta.DeleteProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.DeleteProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.DeleteProjectGrantResponse}
 */
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.DeleteProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.DeleteProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.DeleteProjectGrantResponse} returns this
*/
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.DeleteProjectGrantResponse} returns this
 */
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.DeleteProjectGrantResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectGrantRequest}
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.DeactivateProjectGrantRequest;
  return proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectGrantRequest}
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
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
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectGrantResponse}
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.DeactivateProjectGrantResponse;
  return proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectGrantResponse}
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.DeactivateProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectGrantResponse} returns this
*/
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.DeactivateProjectGrantResponse} returns this
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.DeactivateProjectGrantResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ActivateProjectGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ActivateProjectGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.ActivateProjectGrantRequest}
 */
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ActivateProjectGrantRequest;
  return proto.zitadel.project.v2beta.ActivateProjectGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ActivateProjectGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ActivateProjectGrantRequest}
 */
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ActivateProjectGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ActivateProjectGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.ActivateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_organization_id = 2;
 * @return {string}
 */
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.prototype.getGrantedOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.project.v2beta.ActivateProjectGrantRequest} returns this
 */
proto.zitadel.project.v2beta.ActivateProjectGrantRequest.prototype.setGrantedOrganizationId = function(value) {
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
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ActivateProjectGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ActivateProjectGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.project.v2beta.ActivateProjectGrantResponse}
 */
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ActivateProjectGrantResponse;
  return proto.zitadel.project.v2beta.ActivateProjectGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ActivateProjectGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ActivateProjectGrantResponse}
 */
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ActivateProjectGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ActivateProjectGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.project.v2beta.ActivateProjectGrantResponse} returns this
*/
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ActivateProjectGrantResponse} returns this
 */
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ActivateProjectGrantResponse.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.repeatedFields_ = [3];



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
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ListProjectGrantsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ListProjectGrantsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsRequest}
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ListProjectGrantsRequest;
  return proto.zitadel.project.v2beta.ListProjectGrantsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ListProjectGrantsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsRequest}
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.project.v2beta.ProjectGrantFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter;
      reader.readMessage(value,zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ListProjectGrantsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ListProjectGrantsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.project.v2beta.ProjectGrantFieldName} */ (jspb.Message.getField(message, 2));
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
      zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationRequest}
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationRequest|undefined} value
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsRequest} returns this
*/
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProjectGrantFieldName sorting_column = 2;
 * @return {!proto.zitadel.project.v2beta.ProjectGrantFieldName}
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.project.v2beta.ProjectGrantFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.project.v2beta.ProjectGrantFieldName} value
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProjectGrantSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.project.v2beta.ProjectGrantSearchFilter>}
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2beta.ProjectGrantSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.project.v2beta.ProjectGrantSearchFilter>} value
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsRequest} returns this
*/
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.project.v2beta.ProjectGrantSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2beta.ProjectGrantSearchFilter}
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.project.v2beta.ProjectGrantSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsRequest} returns this
 */
proto.zitadel.project.v2beta.ListProjectGrantsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.repeatedFields_ = [2];



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
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.project.v2beta.ListProjectGrantsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.project.v2beta.ListProjectGrantsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationResponse.toObject(includeInstance, f),
projectGrantsList: jspb.Message.toObjectList(msg.getProjectGrantsList(),
    zitadel_project_v2beta_query_pb.ProjectGrant.toObject, includeInstance)
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
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsResponse}
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.project.v2beta.ListProjectGrantsResponse;
  return proto.zitadel.project.v2beta.ListProjectGrantsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.project.v2beta.ListProjectGrantsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsResponse}
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_project_v2beta_query_pb.ProjectGrant;
      reader.readMessage(value,zitadel_project_v2beta_query_pb.ProjectGrant.deserializeBinaryFromReader);
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
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.project.v2beta.ListProjectGrantsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.project.v2beta.ListProjectGrantsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getProjectGrantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_project_v2beta_query_pb.ProjectGrant.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationResponse}
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationResponse|undefined} value
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsResponse} returns this
*/
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsResponse} returns this
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ProjectGrant project_grants = 2;
 * @return {!Array<!proto.zitadel.project.v2beta.ProjectGrant>}
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.getProjectGrantsList = function() {
  return /** @type{!Array<!proto.zitadel.project.v2beta.ProjectGrant>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_project_v2beta_query_pb.ProjectGrant, 2));
};


/**
 * @param {!Array<!proto.zitadel.project.v2beta.ProjectGrant>} value
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsResponse} returns this
*/
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.setProjectGrantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.project.v2beta.ProjectGrant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.project.v2beta.ProjectGrant}
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.addProjectGrants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.project.v2beta.ProjectGrant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.project.v2beta.ListProjectGrantsResponse} returns this
 */
proto.zitadel.project.v2beta.ListProjectGrantsResponse.prototype.clearProjectGrantsList = function() {
  return this.setProjectGrantsList([]);
};


goog.object.extend(exports, proto.zitadel.project.v2beta);
