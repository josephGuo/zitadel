// source: zitadel/resources/user/v3alpha/user_service.proto
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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var zitadel_object_v3alpha_object_pb = require('../../../../zitadel/object/v3alpha/object_pb.js');
goog.object.extend(proto, zitadel_object_v3alpha_object_pb);
var zitadel_resources_object_v3alpha_object_pb = require('../../../../zitadel/resources/object/v3alpha/object_pb.js');
goog.object.extend(proto, zitadel_resources_object_v3alpha_object_pb);
var zitadel_protoc_gen_zitadel_v2_options_pb = require('../../../../zitadel/protoc_gen_zitadel/v2/options_pb.js');
goog.object.extend(proto, zitadel_protoc_gen_zitadel_v2_options_pb);
var zitadel_resources_user_v3alpha_authenticator_pb = require('../../../../zitadel/resources/user/v3alpha/authenticator_pb.js');
goog.object.extend(proto, zitadel_resources_user_v3alpha_authenticator_pb);
var zitadel_resources_user_v3alpha_communication_pb = require('../../../../zitadel/resources/user/v3alpha/communication_pb.js');
goog.object.extend(proto, zitadel_resources_user_v3alpha_communication_pb);
var zitadel_resources_user_v3alpha_query_pb = require('../../../../zitadel/resources/user/v3alpha/query_pb.js');
goog.object.extend(proto, zitadel_resources_user_v3alpha_query_pb);
var zitadel_resources_user_v3alpha_user_pb = require('../../../../zitadel/resources/user/v3alpha/user_pb.js');
goog.object.extend(proto, zitadel_resources_user_v3alpha_user_pb);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.ActivateUserRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.ActivateUserResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.AddUsernameRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.AddUsernameResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.CreateUserRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.CreateUserResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.MediumCase', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.DeactivateUserRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.DeactivateUserResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.DeleteUserRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.DeleteUserResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.GetUserRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.GetUserResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.LockUserRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.LockUserResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.PatchUserRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.PatchUserResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.MediumCase', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.SearchUsersRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.SearchUsersResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.SetContactEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.SetContactEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.SetPasswordRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.SetPasswordResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.ContentCase', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.NextStepCase', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.UnlockUserRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.UnlockUserResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse', null, global);
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
proto.zitadel.resources.user.v3alpha.SearchUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.resources.user.v3alpha.SearchUsersRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.SearchUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.SearchUsersRequest.displayName = 'proto.zitadel.resources.user.v3alpha.SearchUsersRequest';
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
proto.zitadel.resources.user.v3alpha.SearchUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.resources.user.v3alpha.SearchUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.SearchUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.SearchUsersResponse.displayName = 'proto.zitadel.resources.user.v3alpha.SearchUsersResponse';
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
proto.zitadel.resources.user.v3alpha.GetUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.GetUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.GetUserRequest.displayName = 'proto.zitadel.resources.user.v3alpha.GetUserRequest';
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
proto.zitadel.resources.user.v3alpha.GetUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.GetUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.GetUserResponse.displayName = 'proto.zitadel.resources.user.v3alpha.GetUserResponse';
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
proto.zitadel.resources.user.v3alpha.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.CreateUserRequest.displayName = 'proto.zitadel.resources.user.v3alpha.CreateUserRequest';
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
proto.zitadel.resources.user.v3alpha.CreateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.CreateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.CreateUserResponse.displayName = 'proto.zitadel.resources.user.v3alpha.CreateUserResponse';
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
proto.zitadel.resources.user.v3alpha.PatchUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.PatchUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.PatchUserRequest.displayName = 'proto.zitadel.resources.user.v3alpha.PatchUserRequest';
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
proto.zitadel.resources.user.v3alpha.PatchUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.PatchUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.PatchUserResponse.displayName = 'proto.zitadel.resources.user.v3alpha.PatchUserResponse';
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
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.DeactivateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.displayName = 'proto.zitadel.resources.user.v3alpha.DeactivateUserRequest';
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
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.DeactivateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.displayName = 'proto.zitadel.resources.user.v3alpha.DeactivateUserResponse';
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
proto.zitadel.resources.user.v3alpha.ActivateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.ActivateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.ActivateUserRequest.displayName = 'proto.zitadel.resources.user.v3alpha.ActivateUserRequest';
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
proto.zitadel.resources.user.v3alpha.ActivateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.ActivateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.ActivateUserResponse.displayName = 'proto.zitadel.resources.user.v3alpha.ActivateUserResponse';
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
proto.zitadel.resources.user.v3alpha.LockUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.LockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.LockUserRequest.displayName = 'proto.zitadel.resources.user.v3alpha.LockUserRequest';
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
proto.zitadel.resources.user.v3alpha.LockUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.LockUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.LockUserResponse.displayName = 'proto.zitadel.resources.user.v3alpha.LockUserResponse';
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
proto.zitadel.resources.user.v3alpha.UnlockUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.UnlockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.UnlockUserRequest.displayName = 'proto.zitadel.resources.user.v3alpha.UnlockUserRequest';
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
proto.zitadel.resources.user.v3alpha.UnlockUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.UnlockUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.UnlockUserResponse.displayName = 'proto.zitadel.resources.user.v3alpha.UnlockUserResponse';
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
proto.zitadel.resources.user.v3alpha.DeleteUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.DeleteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.DeleteUserRequest.displayName = 'proto.zitadel.resources.user.v3alpha.DeleteUserRequest';
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
proto.zitadel.resources.user.v3alpha.DeleteUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.DeleteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.DeleteUserResponse.displayName = 'proto.zitadel.resources.user.v3alpha.DeleteUserResponse';
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
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.SetContactEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.displayName = 'proto.zitadel.resources.user.v3alpha.SetContactEmailRequest';
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
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.SetContactEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.displayName = 'proto.zitadel.resources.user.v3alpha.SetContactEmailResponse';
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
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest';
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
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse';
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
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.displayName = 'proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest';
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
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.displayName = 'proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse';
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
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.displayName = 'proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest';
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
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.displayName = 'proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse';
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
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest';
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
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse';
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
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.displayName = 'proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest';
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
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.displayName = 'proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse';
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
proto.zitadel.resources.user.v3alpha.AddUsernameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.AddUsernameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.AddUsernameRequest.displayName = 'proto.zitadel.resources.user.v3alpha.AddUsernameRequest';
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
proto.zitadel.resources.user.v3alpha.AddUsernameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.AddUsernameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.AddUsernameResponse.displayName = 'proto.zitadel.resources.user.v3alpha.AddUsernameResponse';
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
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest';
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
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse';
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
proto.zitadel.resources.user.v3alpha.SetPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.SetPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.SetPasswordRequest.displayName = 'proto.zitadel.resources.user.v3alpha.SetPasswordRequest';
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
proto.zitadel.resources.user.v3alpha.SetPasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.SetPasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.SetPasswordResponse.displayName = 'proto.zitadel.resources.user.v3alpha.SetPasswordResponse';
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
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.displayName = 'proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest';
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
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.displayName = 'proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse';
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
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.displayName = 'proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest';
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
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.displayName = 'proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse';
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
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest';
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
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse';
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
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.displayName = 'proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest';
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
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.displayName = 'proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse';
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
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest';
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
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse';
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
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.displayName = 'proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest';
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
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.displayName = 'proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse';
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
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest';
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
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse';
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
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest';
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
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse';
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
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.displayName = 'proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest';
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
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.displayName = 'proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse';
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
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest';
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
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse';
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
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest';
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
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse';
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
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.displayName = 'proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest';
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
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.displayName = 'proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse';
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
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest';
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
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.displayName = 'proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse';
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
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest';
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
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse';
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
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.displayName = 'proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest';
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
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.oneofGroups_);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.displayName = 'proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse';
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
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.displayName = 'proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest';
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
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.displayName = 'proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse';
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
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.displayName = 'proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest';
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
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.displayName = 'proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse';
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
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest';
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
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.displayName = 'proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.repeatedFields_ = [4];



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
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.SearchUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
query: (f = msg.getQuery()) && zitadel_resources_object_v3alpha_object_pb.SearchQuery.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 3, 0),
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_resources_user_v3alpha_query_pb.SearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.SearchUsersRequest;
  return proto.zitadel.resources.user.v3alpha.SearchUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_resources_object_v3alpha_object_pb.SearchQuery;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.SearchQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.resources.user.v3alpha.FieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_query_pb.SearchFilter;
      reader.readMessage(value,zitadel_resources_user_v3alpha_query_pb.SearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.SearchUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_resources_object_v3alpha_object_pb.SearchQuery.serializeBinaryToWriter
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
      zitadel_resources_user_v3alpha_query_pb.SearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.resources.object.v3alpha.SearchQuery query = 2;
 * @return {?proto.zitadel.resources.object.v3alpha.SearchQuery}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.SearchQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.SearchQuery, 2));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.SearchQuery|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FieldName sorting_column = 3;
 * @return {!proto.zitadel.resources.user.v3alpha.FieldName}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.resources.user.v3alpha.FieldName} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.resources.user.v3alpha.FieldName} value
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated SearchFilter filters = 4;
 * @return {!Array<!proto.zitadel.resources.user.v3alpha.SearchFilter>}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.resources.user.v3alpha.SearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_resources_user_v3alpha_query_pb.SearchFilter, 4));
};


/**
 * @param {!Array<!proto.zitadel.resources.user.v3alpha.SearchFilter>} value
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.zitadel.resources.user.v3alpha.SearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.resources.user.v3alpha.SearchFilter}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.zitadel.resources.user.v3alpha.SearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SearchUsersRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.repeatedFields_ = [2];



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
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.SearchUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.SearchUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_resources_user_v3alpha_user_pb.GetUser.toObject, includeInstance)
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
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersResponse}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.SearchUsersResponse;
  return proto.zitadel.resources.user.v3alpha.SearchUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.SearchUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersResponse}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.ListDetails;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.ListDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_resources_user_v3alpha_user_pb.GetUser;
      reader.readMessage(value,zitadel_resources_user_v3alpha_user_pb.GetUser.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.SearchUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.SearchUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_resources_user_v3alpha_user_pb.GetUser.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.ListDetails details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.ListDetails}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.ListDetails|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GetUser result = 2;
 * @return {!Array<!proto.zitadel.resources.user.v3alpha.GetUser>}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.resources.user.v3alpha.GetUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_resources_user_v3alpha_user_pb.GetUser, 2));
};


/**
 * @param {!Array<!proto.zitadel.resources.user.v3alpha.GetUser>} value
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.resources.user.v3alpha.GetUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.resources.user.v3alpha.GetUser}
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.resources.user.v3alpha.GetUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.resources.user.v3alpha.SearchUsersResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.SearchUsersResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
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
proto.zitadel.resources.user.v3alpha.GetUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.GetUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.GetUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.GetUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.GetUserRequest}
 */
proto.zitadel.resources.user.v3alpha.GetUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.GetUserRequest;
  return proto.zitadel.resources.user.v3alpha.GetUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.GetUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.GetUserRequest}
 */
proto.zitadel.resources.user.v3alpha.GetUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
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
proto.zitadel.resources.user.v3alpha.GetUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.GetUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.GetUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.GetUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.GetUserRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.GetUserRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.GetUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.GetUserRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.GetUserRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.GetUserRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.GetUserRequest.prototype.setId = function(value) {
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
proto.zitadel.resources.user.v3alpha.GetUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.GetUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.GetUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.GetUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
user: (f = msg.getUser()) && zitadel_resources_user_v3alpha_user_pb.GetUser.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.GetUserResponse}
 */
proto.zitadel.resources.user.v3alpha.GetUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.GetUserResponse;
  return proto.zitadel.resources.user.v3alpha.GetUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.GetUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.GetUserResponse}
 */
proto.zitadel.resources.user.v3alpha.GetUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_user_v3alpha_user_pb.GetUser;
      reader.readMessage(value,zitadel_resources_user_v3alpha_user_pb.GetUser.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.zitadel.resources.user.v3alpha.GetUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.GetUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.GetUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.GetUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_user_v3alpha_user_pb.GetUser.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetUser user = 1;
 * @return {?proto.zitadel.resources.user.v3alpha.GetUser}
 */
proto.zitadel.resources.user.v3alpha.GetUserResponse.prototype.getUser = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.GetUser} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_user_pb.GetUser, 1));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.GetUser|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetUserResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.GetUserResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.GetUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.GetUserResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.GetUserResponse.prototype.hasUser = function() {
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
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
user: (f = msg.getUser()) && zitadel_resources_user_v3alpha_user_pb.CreateUser.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserRequest}
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.CreateUserRequest;
  return proto.zitadel.resources.user.v3alpha.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserRequest}
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = new zitadel_resources_user_v3alpha_user_pb.CreateUser;
      reader.readMessage(value,zitadel_resources_user_v3alpha_user_pb.CreateUser.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_resources_user_v3alpha_user_pb.CreateUser.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CreateUser user = 3;
 * @return {?proto.zitadel.resources.user.v3alpha.CreateUser}
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.getUser = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.CreateUser} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_user_pb.CreateUser, 3));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.CreateUser|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateUserRequest.prototype.hasUser = function() {
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
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.CreateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.CreateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
emailCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
phoneCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserResponse}
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.CreateUserResponse;
  return proto.zitadel.resources.user.v3alpha.CreateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.CreateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserResponse}
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneCode(value);
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
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.CreateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.CreateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
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
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string email_code = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phone_code = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateUserResponse.prototype.hasPhoneCode = function() {
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
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.PatchUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
user: (f = msg.getUser()) && zitadel_resources_user_v3alpha_user_pb.PatchUser.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserRequest}
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.PatchUserRequest;
  return proto.zitadel.resources.user.v3alpha.PatchUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserRequest}
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_user_pb.PatchUser;
      reader.readMessage(value,zitadel_resources_user_v3alpha_user_pb.PatchUser.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.PatchUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_user_pb.PatchUser.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional PatchUser user = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.PatchUser}
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.getUser = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.PatchUser} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_user_pb.PatchUser, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.PatchUser|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.PatchUserRequest.prototype.hasUser = function() {
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
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.PatchUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.PatchUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
emailCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
phoneCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserResponse}
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.PatchUserResponse;
  return proto.zitadel.resources.user.v3alpha.PatchUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.PatchUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserResponse}
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneCode(value);
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
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.PatchUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.PatchUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
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
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string email_code = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phone_code = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.PatchUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.PatchUserResponse.prototype.hasPhoneCode = function() {
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
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.DeactivateUserRequest;
  return proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
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
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.DeactivateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserResponse}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.DeactivateUserResponse;
  return proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.DeactivateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserResponse}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.DeactivateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.DeactivateUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.DeactivateUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.ActivateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.ActivateUserRequest;
  return proto.zitadel.resources.user.v3alpha.ActivateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
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
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.ActivateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ActivateUserRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.ActivateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.ActivateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserResponse}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.ActivateUserResponse;
  return proto.zitadel.resources.user.v3alpha.ActivateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.ActivateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserResponse}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.ActivateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.ActivateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ActivateUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ActivateUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.LockUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.LockUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserRequest}
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.LockUserRequest;
  return proto.zitadel.resources.user.v3alpha.LockUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.LockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserRequest}
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
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
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.LockUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.LockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.LockUserRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.zitadel.resources.user.v3alpha.LockUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.LockUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.LockUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.LockUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserResponse}
 */
proto.zitadel.resources.user.v3alpha.LockUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.LockUserResponse;
  return proto.zitadel.resources.user.v3alpha.LockUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.LockUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserResponse}
 */
proto.zitadel.resources.user.v3alpha.LockUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.LockUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.LockUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.LockUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.LockUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.LockUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.LockUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.LockUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.LockUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.LockUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.UnlockUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.UnlockUserRequest;
  return proto.zitadel.resources.user.v3alpha.UnlockUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
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
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.UnlockUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.UnlockUserRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.UnlockUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.UnlockUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserResponse}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.UnlockUserResponse;
  return proto.zitadel.resources.user.v3alpha.UnlockUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.UnlockUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserResponse}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.UnlockUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.UnlockUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.UnlockUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.UnlockUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.DeleteUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.DeleteUserRequest;
  return proto.zitadel.resources.user.v3alpha.DeleteUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
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
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.DeleteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.DeleteUserRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.DeleteUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.DeleteUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserResponse}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.DeleteUserResponse;
  return proto.zitadel.resources.user.v3alpha.DeleteUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.DeleteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserResponse}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.DeleteUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.DeleteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.DeleteUserResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.DeleteUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
email: (f = msg.getEmail()) && zitadel_resources_user_v3alpha_communication_pb.SetEmail.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.SetContactEmailRequest;
  return proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_communication_pb.SetEmail;
      reader.readMessage(value,zitadel_resources_user_v3alpha_communication_pb.SetEmail.deserializeBinaryFromReader);
      msg.setEmail(value);
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
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_communication_pb.SetEmail.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SetEmail email = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SetEmail}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SetEmail} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_communication_pb.SetEmail, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SetEmail|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailRequest.prototype.hasEmail = function() {
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
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailResponse}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.SetContactEmailResponse;
  return proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailResponse}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactEmailResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactEmailResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
verificationCode: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest;
  return proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVerificationCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string verification_code = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailRequest.prototype.setVerificationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse;
  return proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactEmailResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 4,
  RETURN_CODE: 5
};

/**
 * @return {proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.VerificationCase}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.oneofGroups_[0]));
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
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
sendCode: (f = msg.getSendCode()) && zitadel_resources_user_v3alpha_communication_pb.SendEmailVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_resources_user_v3alpha_communication_pb.ReturnEmailVerificationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest;
  return proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_communication_pb.SendEmailVerificationCode;
      reader.readMessage(value,zitadel_resources_user_v3alpha_communication_pb.SendEmailVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 5:
      var value = new zitadel_resources_user_v3alpha_communication_pb.ReturnEmailVerificationCode;
      reader.readMessage(value,zitadel_resources_user_v3alpha_communication_pb.ReturnEmailVerificationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_communication_pb.SendEmailVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_resources_user_v3alpha_communication_pb.ReturnEmailVerificationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SendEmailVerificationCode send_code = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SendEmailVerificationCode}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SendEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_communication_pb.SendEmailVerificationCode, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SendEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ReturnEmailVerificationCode return_code = 5;
 * @return {?proto.zitadel.resources.user.v3alpha.ReturnEmailVerificationCode}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.ReturnEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_communication_pb.ReturnEmailVerificationCode, 5));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.ReturnEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeRequest.prototype.hasReturnCode = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse;
  return proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactEmailCodeResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
phone: (f = msg.getPhone()) && zitadel_resources_user_v3alpha_communication_pb.SetPhone.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest;
  return proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_communication_pb.SetPhone;
      reader.readMessage(value,zitadel_resources_user_v3alpha_communication_pb.SetPhone.deserializeBinaryFromReader);
      msg.setPhone(value);
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
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_communication_pb.SetPhone.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SetPhone phone = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SetPhone}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SetPhone} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_communication_pb.SetPhone, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SetPhone|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneRequest.prototype.hasPhone = function() {
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
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse;
  return proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetContactPhoneResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
verificationCode: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest;
  return proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVerificationCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string verification_code = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneRequest.prototype.setVerificationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse;
  return proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyContactPhoneResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 4,
  RETURN_CODE: 5
};

/**
 * @return {proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.VerificationCase}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.oneofGroups_[0]));
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
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
sendCode: (f = msg.getSendCode()) && zitadel_resources_user_v3alpha_communication_pb.SendPhoneVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_resources_user_v3alpha_communication_pb.ReturnPhoneVerificationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest;
  return proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_communication_pb.SendPhoneVerificationCode;
      reader.readMessage(value,zitadel_resources_user_v3alpha_communication_pb.SendPhoneVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 5:
      var value = new zitadel_resources_user_v3alpha_communication_pb.ReturnPhoneVerificationCode;
      reader.readMessage(value,zitadel_resources_user_v3alpha_communication_pb.ReturnPhoneVerificationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_communication_pb.SendPhoneVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_resources_user_v3alpha_communication_pb.ReturnPhoneVerificationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SendPhoneVerificationCode send_code = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SendPhoneVerificationCode}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SendPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_communication_pb.SendPhoneVerificationCode, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SendPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ReturnPhoneVerificationCode return_code = 5;
 * @return {?proto.zitadel.resources.user.v3alpha.ReturnPhoneVerificationCode}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.ReturnPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_communication_pb.ReturnPhoneVerificationCode, 5));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.ReturnPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeRequest.prototype.hasReturnCode = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse;
  return proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.ResendContactPhoneCodeResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.AddUsernameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
username: (f = msg.getUsername()) && zitadel_resources_user_v3alpha_authenticator_pb.SetUsername.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.AddUsernameRequest;
  return proto.zitadel.resources.user.v3alpha.AddUsernameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.SetUsername;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.SetUsername.deserializeBinaryFromReader);
      msg.setUsername(value);
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
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.AddUsernameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUsername();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.SetUsername.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SetUsername username = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SetUsername}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.getUsername = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SetUsername} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.SetUsername, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SetUsername|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.setUsername = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.clearUsername = function() {
  return this.setUsername(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameRequest.prototype.hasUsername = function() {
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
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.AddUsernameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.AddUsernameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
usernameId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameResponse}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.AddUsernameResponse;
  return proto.zitadel.resources.user.v3alpha.AddUsernameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.AddUsernameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameResponse}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsernameId(value);
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
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.AddUsernameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.AddUsernameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getUsernameId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string username_id = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.prototype.getUsernameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddUsernameResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddUsernameResponse.prototype.setUsernameId = function(value) {
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
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
usernameId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest;
  return proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsernameId(value);
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
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUsernameId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string username_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.getUsernameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameRequest.prototype.setUsernameId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse;
  return proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveUsernameResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.SetPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
newPassword: (f = msg.getNewPassword()) && zitadel_resources_user_v3alpha_authenticator_pb.SetPassword.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.SetPasswordRequest;
  return proto.zitadel.resources.user.v3alpha.SetPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.SetPassword;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.SetPassword.deserializeBinaryFromReader);
      msg.setNewPassword(value);
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
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.SetPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewPassword();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.SetPassword.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SetPassword new_password = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SetPassword}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.getNewPassword = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SetPassword} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.SetPassword, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SetPassword|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.clearNewPassword = function() {
  return this.setNewPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordRequest.prototype.hasNewPassword = function() {
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
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.SetPasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.SetPasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordResponse}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.SetPasswordResponse;
  return proto.zitadel.resources.user.v3alpha.SetPasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.SetPasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordResponse}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.SetPasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.SetPasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.SetPasswordResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.SetPasswordResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.oneofGroups_ = [[4,5,6]];

/**
 * @enum {number}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.MediumCase = {
  MEDIUM_NOT_SET: 0,
  SEND_EMAIL: 4,
  SEND_SMS: 5,
  RETURN_CODE: 6
};

/**
 * @return {proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.MediumCase}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.getMediumCase = function() {
  return /** @type {proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.MediumCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.oneofGroups_[0]));
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
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
sendEmail: (f = msg.getSendEmail()) && zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetEmail.toObject(includeInstance, f),
sendSms: (f = msg.getSendSms()) && zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetSMS.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_resources_user_v3alpha_authenticator_pb.ReturnPasswordResetCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest;
  return proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetEmail;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetEmail.deserializeBinaryFromReader);
      msg.setSendEmail(value);
      break;
    case 5:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetSMS;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetSMS.deserializeBinaryFromReader);
      msg.setSendSms(value);
      break;
    case 6:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.ReturnPasswordResetCode;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.ReturnPasswordResetCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSendEmail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetEmail.serializeBinaryToWriter
    );
  }
  f = message.getSendSms();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetSMS.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.ReturnPasswordResetCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SendPasswordResetEmail send_email = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SendPasswordResetEmail}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.getSendEmail = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SendPasswordResetEmail} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetEmail, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SendPasswordResetEmail|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.setSendEmail = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.clearSendEmail = function() {
  return this.setSendEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.hasSendEmail = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SendPasswordResetSMS send_sms = 5;
 * @return {?proto.zitadel.resources.user.v3alpha.SendPasswordResetSMS}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.getSendSms = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SendPasswordResetSMS} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetSMS, 5));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SendPasswordResetSMS|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.setSendSms = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.clearSendSms = function() {
  return this.setSendSms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.hasSendSms = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ReturnPasswordResetCode return_code = 6;
 * @return {?proto.zitadel.resources.user.v3alpha.ReturnPasswordResetCode}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.ReturnPasswordResetCode} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.ReturnPasswordResetCode, 6));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.ReturnPasswordResetCode|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse;
  return proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RequestPasswordResetResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
registration: (f = msg.getRegistration()) && zitadel_resources_user_v3alpha_authenticator_pb.StartWebAuthNRegistration.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest;
  return proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.StartWebAuthNRegistration;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.StartWebAuthNRegistration.deserializeBinaryFromReader);
      msg.setRegistration(value);
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
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRegistration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.StartWebAuthNRegistration.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional StartWebAuthNRegistration registration = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistration}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.getRegistration = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistration} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.StartWebAuthNRegistration, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistration|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.setRegistration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.clearRegistration = function() {
  return this.setRegistration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationRequest.prototype.hasRegistration = function() {
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
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
webAuthNId: jspb.Message.getFieldWithDefault(msg, 2, ""),
publicKeyCredentialCreationOptions: (f = msg.getPublicKeyCredentialCreationOptions()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse;
  return proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebAuthNId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPublicKeyCredentialCreationOptions(value);
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
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getWebAuthNId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicKeyCredentialCreationOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string web_auth_n_id = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.getWebAuthNId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.setWebAuthNId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct public_key_credential_creation_options = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.getPublicKeyCredentialCreationOptions = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.setPublicKeyCredentialCreationOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.clearPublicKeyCredentialCreationOptions = function() {
  return this.setPublicKeyCredentialCreationOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartWebAuthNRegistrationResponse.prototype.hasPublicKeyCredentialCreationOptions = function() {
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
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
webAuthNId: jspb.Message.getFieldWithDefault(msg, 4, ""),
verify: (f = msg.getVerify()) && zitadel_resources_user_v3alpha_authenticator_pb.VerifyWebAuthNRegistration.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest;
  return proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebAuthNId(value);
      break;
    case 5:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.VerifyWebAuthNRegistration;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.VerifyWebAuthNRegistration.deserializeBinaryFromReader);
      msg.setVerify(value);
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
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWebAuthNId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVerify();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.VerifyWebAuthNRegistration.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string web_auth_n_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.getWebAuthNId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.setWebAuthNId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional VerifyWebAuthNRegistration verify = 5;
 * @return {?proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistration}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.getVerify = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistration} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.VerifyWebAuthNRegistration, 5));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistration|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.setVerify = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.clearVerify = function() {
  return this.setVerify(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationRequest.prototype.hasVerify = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse;
  return proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyWebAuthNRegistrationResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.MediumCase = {
  MEDIUM_NOT_SET: 0,
  SEND_LINK: 4,
  RETURN_CODE: 5
};

/**
 * @return {proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.MediumCase}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.getMediumCase = function() {
  return /** @type {proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.MediumCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.oneofGroups_[0]));
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
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
sendLink: (f = msg.getSendLink()) && zitadel_resources_user_v3alpha_authenticator_pb.SendWebAuthNRegistrationLink.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_resources_user_v3alpha_authenticator_pb.ReturnWebAuthNRegistrationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest;
  return proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.SendWebAuthNRegistrationLink;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.SendWebAuthNRegistrationLink.deserializeBinaryFromReader);
      msg.setSendLink(value);
      break;
    case 5:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.ReturnWebAuthNRegistrationCode;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.ReturnWebAuthNRegistrationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSendLink();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.SendWebAuthNRegistrationLink.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.ReturnWebAuthNRegistrationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SendWebAuthNRegistrationLink send_link = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SendWebAuthNRegistrationLink}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.getSendLink = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SendWebAuthNRegistrationLink} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.SendWebAuthNRegistrationLink, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SendWebAuthNRegistrationLink|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.setSendLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.clearSendLink = function() {
  return this.setSendLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.hasSendLink = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ReturnWebAuthNRegistrationCode return_code = 5;
 * @return {?proto.zitadel.resources.user.v3alpha.ReturnWebAuthNRegistrationCode}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.ReturnWebAuthNRegistrationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.ReturnWebAuthNRegistrationCode, 5));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.ReturnWebAuthNRegistrationCode|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkRequest.prototype.hasReturnCode = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
code: (f = msg.getCode()) && zitadel_resources_user_v3alpha_authenticator_pb.AuthenticatorRegistrationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse;
  return proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.AuthenticatorRegistrationCode;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.AuthenticatorRegistrationCode.deserializeBinaryFromReader);
      msg.setCode(value);
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
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.AuthenticatorRegistrationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AuthenticatorRegistrationCode code = 2;
 * @return {?proto.zitadel.resources.user.v3alpha.AuthenticatorRegistrationCode}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.getCode = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.AuthenticatorRegistrationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.AuthenticatorRegistrationCode, 2));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.AuthenticatorRegistrationCode|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.setCode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.clearCode = function() {
  return this.setCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.CreateWebAuthNRegistrationLinkResponse.prototype.hasCode = function() {
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
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
webAuthNId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest;
  return proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebAuthNId(value);
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
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWebAuthNId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string web_auth_n_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.getWebAuthNId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorRequest.prototype.setWebAuthNId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse;
  return proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveWebAuthNAuthenticatorResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest;
  return proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
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
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
totpId: jspb.Message.getFieldWithDefault(msg, 2, ""),
uri: jspb.Message.getFieldWithDefault(msg, 3, ""),
secret: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse;
  return proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotpId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
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
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getTotpId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string totp_id = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.getTotpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.setTotpId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uri = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string secret = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartTOTPRegistrationResponse.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
totpId: jspb.Message.getFieldWithDefault(msg, 4, ""),
code: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest;
  return proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotpId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotpId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string totp_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.getTotpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.setTotpId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string code = 5;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse;
  return proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyTOTPRegistrationResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
totpId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest;
  return proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotpId(value);
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
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotpId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string totp_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.getTotpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorRequest.prototype.setTotpId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse;
  return proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveTOTPAuthenticatorResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
phone: (f = msg.getPhone()) && zitadel_resources_user_v3alpha_communication_pb.SetPhone.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest;
  return proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_communication_pb.SetPhone;
      reader.readMessage(value,zitadel_resources_user_v3alpha_communication_pb.SetPhone.deserializeBinaryFromReader);
      msg.setPhone(value);
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
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_communication_pb.SetPhone.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SetPhone phone = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SetPhone}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SetPhone} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_communication_pb.SetPhone, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SetPhone|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorRequest.prototype.hasPhone = function() {
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
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
otpSmsId: jspb.Message.getFieldWithDefault(msg, 2, ""),
verificationCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse;
  return proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtpSmsId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getOtpSmsId();
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
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string otp_sms_id = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.getOtpSmsId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.setOtpSmsId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string verification_code = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPSMSAuthenticatorResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
otpSmsId: jspb.Message.getFieldWithDefault(msg, 4, ""),
code: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest;
  return proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtpSmsId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOtpSmsId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string otp_sms_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.getOtpSmsId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.setOtpSmsId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string code = 5;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse;
  return proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPSMSRegistrationResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
otpSmsId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest;
  return proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtpSmsId(value);
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
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOtpSmsId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string otp_sms_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.getOtpSmsId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorRequest.prototype.setOtpSmsId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse;
  return proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPSMSAuthenticatorResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
email: (f = msg.getEmail()) && zitadel_resources_user_v3alpha_communication_pb.SetEmail.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest;
  return proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_communication_pb.SetEmail;
      reader.readMessage(value,zitadel_resources_user_v3alpha_communication_pb.SetEmail.deserializeBinaryFromReader);
      msg.setEmail(value);
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
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_communication_pb.SetEmail.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SetEmail email = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.SetEmail}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.SetEmail} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_communication_pb.SetEmail, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.SetEmail|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorRequest.prototype.hasEmail = function() {
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
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
otpEmailId: jspb.Message.getFieldWithDefault(msg, 2, ""),
verificationCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse;
  return proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtpEmailId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getOtpEmailId();
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
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string otp_email_id = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.getOtpEmailId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.setOtpEmailId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string verification_code = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddOTPEmailAuthenticatorResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
otpEmailId: jspb.Message.getFieldWithDefault(msg, 4, ""),
code: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest;
  return proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtpEmailId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOtpEmailId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string otp_email_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.getOtpEmailId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.setOtpEmailId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string code = 5;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse;
  return proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.VerifyOTPEmailRegistrationResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
otpEmailId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest;
  return proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtpEmailId(value);
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
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOtpEmailId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string otp_email_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.getOtpEmailId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorRequest.prototype.setOtpEmailId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse;
  return proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveOTPEmailAuthenticatorResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.ContentCase = {
  CONTENT_NOT_SET: 0,
  URLS: 4,
  LDAP: 5
};

/**
 * @return {proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.ContentCase}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.getContentCase = function() {
  return /** @type {proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.ContentCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.oneofGroups_[0]));
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
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
idpId: jspb.Message.getFieldWithDefault(msg, 3, ""),
urls: (f = msg.getUrls()) && zitadel_resources_user_v3alpha_authenticator_pb.RedirectURLs.toObject(includeInstance, f),
ldap: (f = msg.getLdap()) && zitadel_resources_user_v3alpha_authenticator_pb.LDAPCredentials.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest;
  return proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.RedirectURLs;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.RedirectURLs.deserializeBinaryFromReader);
      msg.setUrls(value);
      break;
    case 5:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.LDAPCredentials;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.LDAPCredentials.deserializeBinaryFromReader);
      msg.setLdap(value);
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
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getIdpId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUrls();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.RedirectURLs.serializeBinaryToWriter
    );
  }
  f = message.getLdap();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.LDAPCredentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string idp_id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.getIdpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.setIdpId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RedirectURLs urls = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.RedirectURLs}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.getUrls = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.RedirectURLs} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.RedirectURLs, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.RedirectURLs|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.setUrls = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.clearUrls = function() {
  return this.setUrls(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.hasUrls = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LDAPCredentials ldap = 5;
 * @return {?proto.zitadel.resources.user.v3alpha.LDAPCredentials}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.getLdap = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.LDAPCredentials} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.LDAPCredentials, 5));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.LDAPCredentials|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.setLdap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.clearLdap = function() {
  return this.setLdap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentRequest.prototype.hasLdap = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.NextStepCase = {
  NEXT_STEP_NOT_SET: 0,
  AUTH_URL: 2,
  IDP_INTENT: 3,
  POST_FORM: 4
};

/**
 * @return {proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.NextStepCase}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.getNextStepCase = function() {
  return /** @type {proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.NextStepCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.oneofGroups_[0]));
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
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
authUrl: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
idpIntent: (f = msg.getIdpIntent()) && zitadel_resources_user_v3alpha_authenticator_pb.IdentityProviderIntent.toObject(includeInstance, f),
postForm: msg.getPostForm_asB64()
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
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse;
  return proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthUrl(value);
      break;
    case 3:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.IdentityProviderIntent;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.IdentityProviderIntent.deserializeBinaryFromReader);
      msg.setIdpIntent(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPostForm(value);
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
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdpIntent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.IdentityProviderIntent.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string auth_url = 2;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.getAuthUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.setAuthUrl = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.clearAuthUrl = function() {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.hasAuthUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IdentityProviderIntent idp_intent = 3;
 * @return {?proto.zitadel.resources.user.v3alpha.IdentityProviderIntent}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.getIdpIntent = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.IdentityProviderIntent} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.IdentityProviderIntent, 3));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.IdentityProviderIntent|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.setIdpIntent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.clearIdpIntent = function() {
  return this.setIdpIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.hasIdpIntent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes post_form = 4;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.getPostForm = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes post_form = 4;
 * This is a type-conversion wrapper around `getPostForm()`
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.getPostForm_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPostForm()));
};


/**
 * optional bytes post_form = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPostForm()`
 * @return {!Uint8Array}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.getPostForm_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPostForm()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.setPostForm = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.clearPostForm = function() {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.StartIdentityProviderIntentResponse.prototype.hasPostForm = function() {
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
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
idpIntentId: jspb.Message.getFieldWithDefault(msg, 3, ""),
idpIntentToken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest;
  return proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpIntentId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpIntentToken(value);
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
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getIdpIntentId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIdpIntentToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string idp_intent_id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.getIdpIntentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.setIdpIntentId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string idp_intent_token = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.getIdpIntentToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentRequest.prototype.setIdpIntentToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f),
idpInformation: (f = msg.getIdpInformation()) && zitadel_resources_user_v3alpha_authenticator_pb.IDPInformation.toObject(includeInstance, f),
id: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse;
  return proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.IDPInformation;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.IDPInformation.deserializeBinaryFromReader);
      msg.setIdpInformation(value);
      break;
    case 3:
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
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getIdpInformation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.IDPInformation.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IDPInformation idp_information = 2;
 * @return {?proto.zitadel.resources.user.v3alpha.IDPInformation}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.getIdpInformation = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.IDPInformation} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.IDPInformation, 2));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.IDPInformation|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.setIdpInformation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.clearIdpInformation = function() {
  return this.setIdpInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.hasIdpInformation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.setId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.clearId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.GetIdentityProviderIntentResponse.prototype.hasId = function() {
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
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
authenticator: (f = msg.getAuthenticator()) && zitadel_resources_user_v3alpha_authenticator_pb.IDPAuthenticator.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest;
  return proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new zitadel_resources_user_v3alpha_authenticator_pb.IDPAuthenticator;
      reader.readMessage(value,zitadel_resources_user_v3alpha_authenticator_pb.IDPAuthenticator.deserializeBinaryFromReader);
      msg.setAuthenticator(value);
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
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAuthenticator();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_resources_user_v3alpha_authenticator_pb.IDPAuthenticator.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional IDPAuthenticator authenticator = 4;
 * @return {?proto.zitadel.resources.user.v3alpha.IDPAuthenticator}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.getAuthenticator = function() {
  return /** @type{?proto.zitadel.resources.user.v3alpha.IDPAuthenticator} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_user_v3alpha_authenticator_pb.IDPAuthenticator, 4));
};


/**
 * @param {?proto.zitadel.resources.user.v3alpha.IDPAuthenticator|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.setAuthenticator = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.clearAuthenticator = function() {
  return this.setAuthenticator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorRequest.prototype.hasAuthenticator = function() {
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
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse;
  return proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.AddIDPAuthenticatorResponse.prototype.hasDetails = function() {
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
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_object_v3alpha_object_pb.Instance.toObject(includeInstance, f),
organization: (f = msg.getOrganization()) && zitadel_object_v3alpha_object_pb.Organization.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
idpId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest;
  return proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v3alpha_object_pb.Instance;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = new zitadel_object_v3alpha_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v3alpha_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpId(value);
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
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v3alpha_object_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v3alpha_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIdpId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional zitadel.object.v3alpha.Instance instance = 1;
 * @return {?proto.zitadel.object.v3alpha.Instance}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Instance} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Instance, 1));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Instance|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.object.v3alpha.Organization organization = 2;
 * @return {?proto.zitadel.object.v3alpha.Organization}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v3alpha.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v3alpha_object_pb.Organization, 2));
};


/**
 * @param {?proto.zitadel.object.v3alpha.Organization|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string idp_id = 4;
 * @return {string}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.getIdpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorRequest.prototype.setIdpId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_resources_object_v3alpha_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse;
  return proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_resources_object_v3alpha_object_pb.Details;
      reader.readMessage(value,zitadel_resources_object_v3alpha_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_resources_object_v3alpha_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.resources.object.v3alpha.Details details = 1;
 * @return {?proto.zitadel.resources.object.v3alpha.Details}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.resources.object.v3alpha.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_resources_object_v3alpha_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.resources.object.v3alpha.Details|undefined} value
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse} returns this
*/
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse} returns this
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.resources.user.v3alpha.RemoveIDPAuthenticatorResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.zitadel.resources.user.v3alpha);
