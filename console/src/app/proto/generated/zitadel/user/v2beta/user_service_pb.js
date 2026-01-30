// source: zitadel/user/v2beta/user_service.proto
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

var zitadel_object_v2beta_object_pb = require('../../../zitadel/object/v2beta/object_pb.js');
goog.object.extend(proto, zitadel_object_v2beta_object_pb);
var zitadel_protoc_gen_zitadel_v2_options_pb = require('../../../zitadel/protoc_gen_zitadel/v2/options_pb.js');
goog.object.extend(proto, zitadel_protoc_gen_zitadel_v2_options_pb);
var zitadel_user_v2beta_auth_pb = require('../../../zitadel/user/v2beta/auth_pb.js');
goog.object.extend(proto, zitadel_user_v2beta_auth_pb);
var zitadel_user_v2beta_email_pb = require('../../../zitadel/user/v2beta/email_pb.js');
goog.object.extend(proto, zitadel_user_v2beta_email_pb);
var zitadel_user_v2beta_phone_pb = require('../../../zitadel/user/v2beta/phone_pb.js');
goog.object.extend(proto, zitadel_user_v2beta_phone_pb);
var zitadel_user_v2beta_idp_pb = require('../../../zitadel/user/v2beta/idp_pb.js');
goog.object.extend(proto, zitadel_user_v2beta_idp_pb);
var zitadel_user_v2beta_password_pb = require('../../../zitadel/user/v2beta/password_pb.js');
goog.object.extend(proto, zitadel_user_v2beta_password_pb);
var zitadel_user_v2beta_user_pb = require('../../../zitadel/user/v2beta/user_pb.js');
goog.object.extend(proto, zitadel_user_v2beta_user_pb);
var zitadel_user_v2beta_query_pb = require('../../../zitadel/user/v2beta/query_pb.js');
goog.object.extend(proto, zitadel_user_v2beta_query_pb);
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
goog.exportSymbol('proto.zitadel.user.v2beta.AddHumanUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.AddHumanUserRequest.PasswordTypeCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.AddHumanUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.AddIDPLinkRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.AddIDPLinkResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.AddOTPEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.AddOTPEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.AddOTPSMSRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.AddOTPSMSResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.AuthenticationMethodType', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.MediumCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.DeactivateUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.DeactivateUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.DeleteUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.DeleteUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.GetUserByIDRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.GetUserByIDResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ListUsersRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ListUsersResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.LockUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.LockUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.PasswordResetRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.PasswordResetRequest.MediumCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.PasswordResetResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ReactivateUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ReactivateUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RegisterPasskeyRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RegisterPasskeyResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RegisterTOTPRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RegisterTOTPResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RegisterU2FRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RegisterU2FResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RemoveOTPEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RemoveOTPEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RemoveOTPSMSRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RemoveOTPSMSResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RemovePhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RemovePhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RemoveTOTPRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RemoveTOTPResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ResendEmailCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ResendEmailCodeRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ResendEmailCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ResendPhoneCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ResendPhoneCodeRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.ResendPhoneCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.SetEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.SetEmailRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.SetEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.SetPasswordRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.SetPasswordRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.SetPasswordResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.SetPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.SetPhoneRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.SetPhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.ContentCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.NextStepCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.UnlockUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.UnlockUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.UpdateHumanUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.UpdateHumanUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyPhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse', null, global);
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
proto.zitadel.user.v2beta.AddHumanUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2beta.AddHumanUserRequest.repeatedFields_, proto.zitadel.user.v2beta.AddHumanUserRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.AddHumanUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.AddHumanUserRequest.displayName = 'proto.zitadel.user.v2beta.AddHumanUserRequest';
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
proto.zitadel.user.v2beta.AddHumanUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.AddHumanUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.AddHumanUserResponse.displayName = 'proto.zitadel.user.v2beta.AddHumanUserResponse';
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
proto.zitadel.user.v2beta.GetUserByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.GetUserByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.GetUserByIDRequest.displayName = 'proto.zitadel.user.v2beta.GetUserByIDRequest';
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
proto.zitadel.user.v2beta.GetUserByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.GetUserByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.GetUserByIDResponse.displayName = 'proto.zitadel.user.v2beta.GetUserByIDResponse';
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
proto.zitadel.user.v2beta.ListUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2beta.ListUsersRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2beta.ListUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ListUsersRequest.displayName = 'proto.zitadel.user.v2beta.ListUsersRequest';
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
proto.zitadel.user.v2beta.ListUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2beta.ListUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2beta.ListUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ListUsersResponse.displayName = 'proto.zitadel.user.v2beta.ListUsersResponse';
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
proto.zitadel.user.v2beta.SetEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2beta.SetEmailRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.SetEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.SetEmailRequest.displayName = 'proto.zitadel.user.v2beta.SetEmailRequest';
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
proto.zitadel.user.v2beta.SetEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.SetEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.SetEmailResponse.displayName = 'proto.zitadel.user.v2beta.SetEmailResponse';
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
proto.zitadel.user.v2beta.ResendEmailCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2beta.ResendEmailCodeRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.ResendEmailCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ResendEmailCodeRequest.displayName = 'proto.zitadel.user.v2beta.ResendEmailCodeRequest';
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
proto.zitadel.user.v2beta.ResendEmailCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.ResendEmailCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ResendEmailCodeResponse.displayName = 'proto.zitadel.user.v2beta.ResendEmailCodeResponse';
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
proto.zitadel.user.v2beta.VerifyEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyEmailRequest.displayName = 'proto.zitadel.user.v2beta.VerifyEmailRequest';
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
proto.zitadel.user.v2beta.VerifyEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyEmailResponse.displayName = 'proto.zitadel.user.v2beta.VerifyEmailResponse';
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
proto.zitadel.user.v2beta.SetPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2beta.SetPhoneRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.SetPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.SetPhoneRequest.displayName = 'proto.zitadel.user.v2beta.SetPhoneRequest';
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
proto.zitadel.user.v2beta.SetPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.SetPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.SetPhoneResponse.displayName = 'proto.zitadel.user.v2beta.SetPhoneResponse';
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
proto.zitadel.user.v2beta.RemovePhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RemovePhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RemovePhoneRequest.displayName = 'proto.zitadel.user.v2beta.RemovePhoneRequest';
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
proto.zitadel.user.v2beta.RemovePhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RemovePhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RemovePhoneResponse.displayName = 'proto.zitadel.user.v2beta.RemovePhoneResponse';
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
proto.zitadel.user.v2beta.ResendPhoneCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2beta.ResendPhoneCodeRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.ResendPhoneCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ResendPhoneCodeRequest.displayName = 'proto.zitadel.user.v2beta.ResendPhoneCodeRequest';
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
proto.zitadel.user.v2beta.ResendPhoneCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.ResendPhoneCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ResendPhoneCodeResponse.displayName = 'proto.zitadel.user.v2beta.ResendPhoneCodeResponse';
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
proto.zitadel.user.v2beta.VerifyPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyPhoneRequest.displayName = 'proto.zitadel.user.v2beta.VerifyPhoneRequest';
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
proto.zitadel.user.v2beta.VerifyPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyPhoneResponse.displayName = 'proto.zitadel.user.v2beta.VerifyPhoneResponse';
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
proto.zitadel.user.v2beta.DeleteUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.DeleteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.DeleteUserRequest.displayName = 'proto.zitadel.user.v2beta.DeleteUserRequest';
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
proto.zitadel.user.v2beta.DeleteUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.DeleteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.DeleteUserResponse.displayName = 'proto.zitadel.user.v2beta.DeleteUserResponse';
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
proto.zitadel.user.v2beta.UpdateHumanUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.UpdateHumanUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.UpdateHumanUserRequest.displayName = 'proto.zitadel.user.v2beta.UpdateHumanUserRequest';
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
proto.zitadel.user.v2beta.UpdateHumanUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.UpdateHumanUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.UpdateHumanUserResponse.displayName = 'proto.zitadel.user.v2beta.UpdateHumanUserResponse';
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
proto.zitadel.user.v2beta.DeactivateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.DeactivateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.DeactivateUserRequest.displayName = 'proto.zitadel.user.v2beta.DeactivateUserRequest';
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
proto.zitadel.user.v2beta.DeactivateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.DeactivateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.DeactivateUserResponse.displayName = 'proto.zitadel.user.v2beta.DeactivateUserResponse';
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
proto.zitadel.user.v2beta.ReactivateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.ReactivateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ReactivateUserRequest.displayName = 'proto.zitadel.user.v2beta.ReactivateUserRequest';
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
proto.zitadel.user.v2beta.ReactivateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.ReactivateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ReactivateUserResponse.displayName = 'proto.zitadel.user.v2beta.ReactivateUserResponse';
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
proto.zitadel.user.v2beta.LockUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.LockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.LockUserRequest.displayName = 'proto.zitadel.user.v2beta.LockUserRequest';
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
proto.zitadel.user.v2beta.LockUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.LockUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.LockUserResponse.displayName = 'proto.zitadel.user.v2beta.LockUserResponse';
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
proto.zitadel.user.v2beta.UnlockUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.UnlockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.UnlockUserRequest.displayName = 'proto.zitadel.user.v2beta.UnlockUserRequest';
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
proto.zitadel.user.v2beta.UnlockUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.UnlockUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.UnlockUserResponse.displayName = 'proto.zitadel.user.v2beta.UnlockUserResponse';
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
proto.zitadel.user.v2beta.RegisterPasskeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RegisterPasskeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RegisterPasskeyRequest.displayName = 'proto.zitadel.user.v2beta.RegisterPasskeyRequest';
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
proto.zitadel.user.v2beta.RegisterPasskeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RegisterPasskeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RegisterPasskeyResponse.displayName = 'proto.zitadel.user.v2beta.RegisterPasskeyResponse';
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
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.displayName = 'proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest';
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
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.displayName = 'proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse';
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
proto.zitadel.user.v2beta.RegisterU2FRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RegisterU2FRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RegisterU2FRequest.displayName = 'proto.zitadel.user.v2beta.RegisterU2FRequest';
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
proto.zitadel.user.v2beta.RegisterU2FResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RegisterU2FResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RegisterU2FResponse.displayName = 'proto.zitadel.user.v2beta.RegisterU2FResponse';
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
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.displayName = 'proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest';
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
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.displayName = 'proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse';
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
proto.zitadel.user.v2beta.RegisterTOTPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RegisterTOTPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RegisterTOTPRequest.displayName = 'proto.zitadel.user.v2beta.RegisterTOTPRequest';
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
proto.zitadel.user.v2beta.RegisterTOTPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RegisterTOTPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RegisterTOTPResponse.displayName = 'proto.zitadel.user.v2beta.RegisterTOTPResponse';
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
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.displayName = 'proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest';
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
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.displayName = 'proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse';
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
proto.zitadel.user.v2beta.RemoveTOTPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RemoveTOTPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RemoveTOTPRequest.displayName = 'proto.zitadel.user.v2beta.RemoveTOTPRequest';
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
proto.zitadel.user.v2beta.RemoveTOTPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RemoveTOTPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RemoveTOTPResponse.displayName = 'proto.zitadel.user.v2beta.RemoveTOTPResponse';
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
proto.zitadel.user.v2beta.AddOTPSMSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.AddOTPSMSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.AddOTPSMSRequest.displayName = 'proto.zitadel.user.v2beta.AddOTPSMSRequest';
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
proto.zitadel.user.v2beta.AddOTPSMSResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.AddOTPSMSResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.AddOTPSMSResponse.displayName = 'proto.zitadel.user.v2beta.AddOTPSMSResponse';
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
proto.zitadel.user.v2beta.RemoveOTPSMSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RemoveOTPSMSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RemoveOTPSMSRequest.displayName = 'proto.zitadel.user.v2beta.RemoveOTPSMSRequest';
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
proto.zitadel.user.v2beta.RemoveOTPSMSResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RemoveOTPSMSResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RemoveOTPSMSResponse.displayName = 'proto.zitadel.user.v2beta.RemoveOTPSMSResponse';
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
proto.zitadel.user.v2beta.AddOTPEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.AddOTPEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.AddOTPEmailRequest.displayName = 'proto.zitadel.user.v2beta.AddOTPEmailRequest';
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
proto.zitadel.user.v2beta.AddOTPEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.AddOTPEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.AddOTPEmailResponse.displayName = 'proto.zitadel.user.v2beta.AddOTPEmailResponse';
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
proto.zitadel.user.v2beta.RemoveOTPEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RemoveOTPEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RemoveOTPEmailRequest.displayName = 'proto.zitadel.user.v2beta.RemoveOTPEmailRequest';
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
proto.zitadel.user.v2beta.RemoveOTPEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RemoveOTPEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RemoveOTPEmailResponse.displayName = 'proto.zitadel.user.v2beta.RemoveOTPEmailResponse';
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
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.displayName = 'proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest';
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
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.displayName = 'proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse';
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
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.displayName = 'proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest';
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
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.displayName = 'proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse';
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
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.displayName = 'proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest';
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
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.displayName = 'proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse';
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
proto.zitadel.user.v2beta.AddIDPLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.AddIDPLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.AddIDPLinkRequest.displayName = 'proto.zitadel.user.v2beta.AddIDPLinkRequest';
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
proto.zitadel.user.v2beta.AddIDPLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.AddIDPLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.AddIDPLinkResponse.displayName = 'proto.zitadel.user.v2beta.AddIDPLinkResponse';
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
proto.zitadel.user.v2beta.PasswordResetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2beta.PasswordResetRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.PasswordResetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.PasswordResetRequest.displayName = 'proto.zitadel.user.v2beta.PasswordResetRequest';
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
proto.zitadel.user.v2beta.PasswordResetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.PasswordResetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.PasswordResetResponse.displayName = 'proto.zitadel.user.v2beta.PasswordResetResponse';
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
proto.zitadel.user.v2beta.SetPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2beta.SetPasswordRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2beta.SetPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.SetPasswordRequest.displayName = 'proto.zitadel.user.v2beta.SetPasswordRequest';
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
proto.zitadel.user.v2beta.SetPasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.SetPasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.SetPasswordResponse.displayName = 'proto.zitadel.user.v2beta.SetPasswordResponse';
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
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.displayName = 'proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest';
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
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.displayName = 'proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.repeatedFields_ = [6,9];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.oneofGroups_ = [[7,8]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.PasswordTypeCase = {
  PASSWORD_TYPE_NOT_SET: 0,
  PASSWORD: 7,
  HASHED_PASSWORD: 8
};

/**
 * @return {proto.zitadel.user.v2beta.AddHumanUserRequest.PasswordTypeCase}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getPasswordTypeCase = function() {
  return /** @type {proto.zitadel.user.v2beta.AddHumanUserRequest.PasswordTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.AddHumanUserRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.AddHumanUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.AddHumanUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
username: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
organization: (f = msg.getOrganization()) && zitadel_object_v2beta_object_pb.Organization.toObject(includeInstance, f),
profile: (f = msg.getProfile()) && zitadel_user_v2beta_user_pb.SetHumanProfile.toObject(includeInstance, f),
email: (f = msg.getEmail()) && zitadel_user_v2beta_email_pb.SetHumanEmail.toObject(includeInstance, f),
phone: (f = msg.getPhone()) && zitadel_user_v2beta_phone_pb.SetHumanPhone.toObject(includeInstance, f),
metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    zitadel_user_v2beta_user_pb.SetMetadataEntry.toObject, includeInstance),
password: (f = msg.getPassword()) && zitadel_user_v2beta_password_pb.Password.toObject(includeInstance, f),
hashedPassword: (f = msg.getHashedPassword()) && zitadel_user_v2beta_password_pb.HashedPassword.toObject(includeInstance, f),
idpLinksList: jspb.Message.toObjectList(msg.getIdpLinksList(),
    zitadel_user_v2beta_idp_pb.IDPLink.toObject, includeInstance),
totpSecret: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.AddHumanUserRequest;
  return proto.zitadel.user.v2beta.AddHumanUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.AddHumanUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 11:
      var value = new zitadel_object_v2beta_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 4:
      var value = new zitadel_user_v2beta_user_pb.SetHumanProfile;
      reader.readMessage(value,zitadel_user_v2beta_user_pb.SetHumanProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 5:
      var value = new zitadel_user_v2beta_email_pb.SetHumanEmail;
      reader.readMessage(value,zitadel_user_v2beta_email_pb.SetHumanEmail.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 10:
      var value = new zitadel_user_v2beta_phone_pb.SetHumanPhone;
      reader.readMessage(value,zitadel_user_v2beta_phone_pb.SetHumanPhone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 6:
      var value = new zitadel_user_v2beta_user_pb.SetMetadataEntry;
      reader.readMessage(value,zitadel_user_v2beta_user_pb.SetMetadataEntry.deserializeBinaryFromReader);
      msg.addMetadata(value);
      break;
    case 7:
      var value = new zitadel_user_v2beta_password_pb.Password;
      reader.readMessage(value,zitadel_user_v2beta_password_pb.Password.deserializeBinaryFromReader);
      msg.setPassword(value);
      break;
    case 8:
      var value = new zitadel_user_v2beta_password_pb.HashedPassword;
      reader.readMessage(value,zitadel_user_v2beta_password_pb.HashedPassword.deserializeBinaryFromReader);
      msg.setHashedPassword(value);
      break;
    case 9:
      var value = new zitadel_user_v2beta_idp_pb.IDPLink;
      reader.readMessage(value,zitadel_user_v2beta_idp_pb.IDPLink.deserializeBinaryFromReader);
      msg.addIdpLinks(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotpSecret(value);
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
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.AddHumanUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.AddHumanUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      zitadel_object_v2beta_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2beta_user_pb.SetHumanProfile.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_user_v2beta_email_pb.SetHumanEmail.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      zitadel_user_v2beta_phone_pb.SetHumanPhone.serializeBinaryToWriter
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      zitadel_user_v2beta_user_pb.SetMetadataEntry.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      zitadel_user_v2beta_password_pb.Password.serializeBinaryToWriter
    );
  }
  f = message.getHashedPassword();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      zitadel_user_v2beta_password_pb.HashedPassword.serializeBinaryToWriter
    );
  }
  f = message.getIdpLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      zitadel_user_v2beta_idp_pb.IDPLink.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional zitadel.object.v2beta.Organization organization = 11;
 * @return {?proto.zitadel.object.v2beta.Organization}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v2beta.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Organization, 11));
};


/**
 * @param {?proto.zitadel.object.v2beta.Organization|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional SetHumanProfile profile = 4;
 * @return {?proto.zitadel.user.v2beta.SetHumanProfile}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getProfile = function() {
  return /** @type{?proto.zitadel.user.v2beta.SetHumanProfile} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_user_pb.SetHumanProfile, 4));
};


/**
 * @param {?proto.zitadel.user.v2beta.SetHumanProfile|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SetHumanEmail email = 5;
 * @return {?proto.zitadel.user.v2beta.SetHumanEmail}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.user.v2beta.SetHumanEmail} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_email_pb.SetHumanEmail, 5));
};


/**
 * @param {?proto.zitadel.user.v2beta.SetHumanEmail|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SetHumanPhone phone = 10;
 * @return {?proto.zitadel.user.v2beta.SetHumanPhone}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.user.v2beta.SetHumanPhone} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_phone_pb.SetHumanPhone, 10));
};


/**
 * @param {?proto.zitadel.user.v2beta.SetHumanPhone|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated SetMetadataEntry metadata = 6;
 * @return {!Array<!proto.zitadel.user.v2beta.SetMetadataEntry>}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2beta.SetMetadataEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2beta_user_pb.SetMetadataEntry, 6));
};


/**
 * @param {!Array<!proto.zitadel.user.v2beta.SetMetadataEntry>} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.zitadel.user.v2beta.SetMetadataEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2beta.SetMetadataEntry}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.zitadel.user.v2beta.SetMetadataEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};


/**
 * optional Password password = 7;
 * @return {?proto.zitadel.user.v2beta.Password}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getPassword = function() {
  return /** @type{?proto.zitadel.user.v2beta.Password} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_password_pb.Password, 7));
};


/**
 * @param {?proto.zitadel.user.v2beta.Password|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.zitadel.user.v2beta.AddHumanUserRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional HashedPassword hashed_password = 8;
 * @return {?proto.zitadel.user.v2beta.HashedPassword}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getHashedPassword = function() {
  return /** @type{?proto.zitadel.user.v2beta.HashedPassword} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_password_pb.HashedPassword, 8));
};


/**
 * @param {?proto.zitadel.user.v2beta.HashedPassword|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setHashedPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.zitadel.user.v2beta.AddHumanUserRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearHashedPassword = function() {
  return this.setHashedPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.hasHashedPassword = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated IDPLink idp_links = 9;
 * @return {!Array<!proto.zitadel.user.v2beta.IDPLink>}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getIdpLinksList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2beta.IDPLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2beta_idp_pb.IDPLink, 9));
};


/**
 * @param {!Array<!proto.zitadel.user.v2beta.IDPLink>} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setIdpLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.zitadel.user.v2beta.IDPLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2beta.IDPLink}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.addIdpLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.zitadel.user.v2beta.IDPLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearIdpLinksList = function() {
  return this.setIdpLinksList([]);
};


/**
 * optional string totp_secret = 12;
 * @return {string}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.getTotpSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.setTotpSecret = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.clearTotpSecret = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserRequest.prototype.hasTotpSecret = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.AddHumanUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.AddHumanUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
emailCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
phoneCode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2beta.AddHumanUserResponse}
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.AddHumanUserResponse;
  return proto.zitadel.user.v2beta.AddHumanUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.AddHumanUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserResponse}
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailCode(value);
      break;
    case 4:
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
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.AddHumanUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.AddHumanUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
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
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.object.v2beta.Details details = 2;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 2));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserResponse} returns this
*/
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string email_code = 3;
 * @return {string}
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string phone_code = 4;
 * @return {string}
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddHumanUserResponse.prototype.hasPhoneCode = function() {
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
proto.zitadel.user.v2beta.GetUserByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.GetUserByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.GetUserByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.GetUserByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.GetUserByIDRequest}
 */
proto.zitadel.user.v2beta.GetUserByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.GetUserByIDRequest;
  return proto.zitadel.user.v2beta.GetUserByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.GetUserByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.GetUserByIDRequest}
 */
proto.zitadel.user.v2beta.GetUserByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.GetUserByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.GetUserByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.GetUserByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.GetUserByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.GetUserByIDRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.GetUserByIDRequest} returns this
 */
proto.zitadel.user.v2beta.GetUserByIDRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.GetUserByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.GetUserByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
user: (f = msg.getUser()) && zitadel_user_v2beta_user_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.GetUserByIDResponse}
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.GetUserByIDResponse;
  return proto.zitadel.user.v2beta.GetUserByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.GetUserByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.GetUserByIDResponse}
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_user_pb.User;
      reader.readMessage(value,zitadel_user_v2beta_user_pb.User.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.GetUserByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.GetUserByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.GetUserByIDResponse} returns this
*/
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.GetUserByIDResponse} returns this
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.zitadel.user.v2beta.User}
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.getUser = function() {
  return /** @type{?proto.zitadel.user.v2beta.User} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_user_pb.User, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.User|undefined} value
 * @return {!proto.zitadel.user.v2beta.GetUserByIDResponse} returns this
*/
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.GetUserByIDResponse} returns this
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.GetUserByIDResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2beta.ListUsersRequest.repeatedFields_ = [3];



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
proto.zitadel.user.v2beta.ListUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ListUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ListUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ListUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_v2beta_object_pb.ListQuery.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    zitadel_user_v2beta_query_pb.SearchQuery.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2beta.ListUsersRequest}
 */
proto.zitadel.user.v2beta.ListUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ListUsersRequest;
  return proto.zitadel.user.v2beta.ListUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ListUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ListUsersRequest}
 */
proto.zitadel.user.v2beta.ListUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.ListQuery;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.ListQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.user.v2beta.UserFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_query_pb.SearchQuery;
      reader.readMessage(value,zitadel_user_v2beta_query_pb.SearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.zitadel.user.v2beta.ListUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ListUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ListUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ListUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_user_v2beta_query_pb.SearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.ListQuery query = 1;
 * @return {?proto.zitadel.object.v2beta.ListQuery}
 */
proto.zitadel.user.v2beta.ListUsersRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.object.v2beta.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.ListQuery|undefined} value
 * @return {!proto.zitadel.user.v2beta.ListUsersRequest} returns this
*/
proto.zitadel.user.v2beta.ListUsersRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ListUsersRequest} returns this
 */
proto.zitadel.user.v2beta.ListUsersRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ListUsersRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserFieldName sorting_column = 2;
 * @return {!proto.zitadel.user.v2beta.UserFieldName}
 */
proto.zitadel.user.v2beta.ListUsersRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.user.v2beta.UserFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.user.v2beta.UserFieldName} value
 * @return {!proto.zitadel.user.v2beta.ListUsersRequest} returns this
 */
proto.zitadel.user.v2beta.ListUsersRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated SearchQuery queries = 3;
 * @return {!Array<!proto.zitadel.user.v2beta.SearchQuery>}
 */
proto.zitadel.user.v2beta.ListUsersRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2beta.SearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2beta_query_pb.SearchQuery, 3));
};


/**
 * @param {!Array<!proto.zitadel.user.v2beta.SearchQuery>} value
 * @return {!proto.zitadel.user.v2beta.ListUsersRequest} returns this
*/
proto.zitadel.user.v2beta.ListUsersRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.user.v2beta.SearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2beta.SearchQuery}
 */
proto.zitadel.user.v2beta.ListUsersRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.user.v2beta.SearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2beta.ListUsersRequest} returns this
 */
proto.zitadel.user.v2beta.ListUsersRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2beta.ListUsersResponse.repeatedFields_ = [3];



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
proto.zitadel.user.v2beta.ListUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ListUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ListUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ListUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.ListDetails.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_v2beta_user_pb.User.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2beta.ListUsersResponse}
 */
proto.zitadel.user.v2beta.ListUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ListUsersResponse;
  return proto.zitadel.user.v2beta.ListUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ListUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ListUsersResponse}
 */
proto.zitadel.user.v2beta.ListUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.ListDetails;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.ListDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.user.v2beta.UserFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_user_pb.User;
      reader.readMessage(value,zitadel_user_v2beta_user_pb.User.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.ListUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ListUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ListUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ListUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_user_v2beta_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.ListDetails details = 1;
 * @return {?proto.zitadel.object.v2beta.ListDetails}
 */
proto.zitadel.user.v2beta.ListUsersResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.ListDetails|undefined} value
 * @return {!proto.zitadel.user.v2beta.ListUsersResponse} returns this
*/
proto.zitadel.user.v2beta.ListUsersResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ListUsersResponse} returns this
 */
proto.zitadel.user.v2beta.ListUsersResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ListUsersResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserFieldName sorting_column = 2;
 * @return {!proto.zitadel.user.v2beta.UserFieldName}
 */
proto.zitadel.user.v2beta.ListUsersResponse.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.user.v2beta.UserFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.user.v2beta.UserFieldName} value
 * @return {!proto.zitadel.user.v2beta.ListUsersResponse} returns this
 */
proto.zitadel.user.v2beta.ListUsersResponse.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated User result = 3;
 * @return {!Array<!proto.zitadel.user.v2beta.User>}
 */
proto.zitadel.user.v2beta.ListUsersResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2beta.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2beta_user_pb.User, 3));
};


/**
 * @param {!Array<!proto.zitadel.user.v2beta.User>} value
 * @return {!proto.zitadel.user.v2beta.ListUsersResponse} returns this
*/
proto.zitadel.user.v2beta.ListUsersResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.user.v2beta.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2beta.User}
 */
proto.zitadel.user.v2beta.ListUsersResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.user.v2beta.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2beta.ListUsersResponse} returns this
 */
proto.zitadel.user.v2beta.ListUsersResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2beta.SetEmailRequest.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.SetEmailRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 3,
  RETURN_CODE: 4,
  IS_VERIFIED: 5
};

/**
 * @return {proto.zitadel.user.v2beta.SetEmailRequest.VerificationCase}
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2beta.SetEmailRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.SetEmailRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.SetEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.SetEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.SetEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
email: jspb.Message.getFieldWithDefault(msg, 2, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2beta_email_pb.SendEmailVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode.toObject(includeInstance, f),
isVerified: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest}
 */
proto.zitadel.user.v2beta.SetEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.SetEmailRequest;
  return proto.zitadel.user.v2beta.SetEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.SetEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest}
 */
proto.zitadel.user.v2beta.SetEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_email_pb.SendEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2beta_email_pb.SendEmailVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 4:
      var value = new zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVerified(value);
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
proto.zitadel.user.v2beta.SetEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.SetEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.SetEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2beta_email_pb.SendEmailVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest} returns this
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest} returns this
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SendEmailVerificationCode send_code = 3;
 * @return {?proto.zitadel.user.v2beta.SendEmailVerificationCode}
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.SendEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_email_pb.SendEmailVerificationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2beta.SendEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest} returns this
*/
proto.zitadel.user.v2beta.SetEmailRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2beta.SetEmailRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest} returns this
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ReturnEmailVerificationCode return_code = 4;
 * @return {?proto.zitadel.user.v2beta.ReturnEmailVerificationCode}
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.ReturnEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode, 4));
};


/**
 * @param {?proto.zitadel.user.v2beta.ReturnEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest} returns this
*/
proto.zitadel.user.v2beta.SetEmailRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v2beta.SetEmailRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest} returns this
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.hasReturnCode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_verified = 5;
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.getIsVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest} returns this
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.setIsVerified = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v2beta.SetEmailRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetEmailRequest} returns this
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.clearIsVerified = function() {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v2beta.SetEmailRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetEmailRequest.prototype.hasIsVerified = function() {
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
proto.zitadel.user.v2beta.SetEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.SetEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.SetEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.user.v2beta.SetEmailResponse}
 */
proto.zitadel.user.v2beta.SetEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.SetEmailResponse;
  return proto.zitadel.user.v2beta.SetEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.SetEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.SetEmailResponse}
 */
proto.zitadel.user.v2beta.SetEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.SetEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.SetEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.SetEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.SetEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.SetEmailResponse} returns this
*/
proto.zitadel.user.v2beta.SetEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetEmailResponse} returns this
 */
proto.zitadel.user.v2beta.SetEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetEmailResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.SetEmailResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.SetEmailResponse} returns this
 */
proto.zitadel.user.v2beta.SetEmailResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetEmailResponse} returns this
 */
proto.zitadel.user.v2beta.SetEmailResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetEmailResponse.prototype.hasVerificationCode = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 2,
  RETURN_CODE: 3
};

/**
 * @return {proto.zitadel.user.v2beta.ResendEmailCodeRequest.VerificationCase}
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2beta.ResendEmailCodeRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.ResendEmailCodeRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ResendEmailCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ResendEmailCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2beta_email_pb.SendEmailVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeRequest}
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ResendEmailCodeRequest;
  return proto.zitadel.user.v2beta.ResendEmailCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ResendEmailCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeRequest}
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_email_pb.SendEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2beta_email_pb.SendEmailVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ResendEmailCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ResendEmailCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_email_pb.SendEmailVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeRequest} returns this
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendEmailVerificationCode send_code = 2;
 * @return {?proto.zitadel.user.v2beta.SendEmailVerificationCode}
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.SendEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_email_pb.SendEmailVerificationCode, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.SendEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeRequest} returns this
*/
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2beta.ResendEmailCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeRequest} returns this
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReturnEmailVerificationCode return_code = 3;
 * @return {?proto.zitadel.user.v2beta.ReturnEmailVerificationCode}
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.ReturnEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_email_pb.ReturnEmailVerificationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2beta.ReturnEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeRequest} returns this
*/
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2beta.ResendEmailCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeRequest} returns this
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ResendEmailCodeRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ResendEmailCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ResendEmailCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeResponse}
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ResendEmailCodeResponse;
  return proto.zitadel.user.v2beta.ResendEmailCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ResendEmailCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeResponse}
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ResendEmailCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ResendEmailCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeResponse} returns this
*/
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeResponse} returns this
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeResponse} returns this
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ResendEmailCodeResponse} returns this
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ResendEmailCodeResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2beta.VerifyEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
verificationCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2beta.VerifyEmailRequest}
 */
proto.zitadel.user.v2beta.VerifyEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyEmailRequest;
  return proto.zitadel.user.v2beta.VerifyEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyEmailRequest}
 */
proto.zitadel.user.v2beta.VerifyEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.VerifyEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerificationCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyEmailRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyEmailRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyEmailRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyEmailRequest.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyEmailRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyEmailRequest.prototype.setVerificationCode = function(value) {
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
proto.zitadel.user.v2beta.VerifyEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.VerifyEmailResponse}
 */
proto.zitadel.user.v2beta.VerifyEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyEmailResponse;
  return proto.zitadel.user.v2beta.VerifyEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyEmailResponse}
 */
proto.zitadel.user.v2beta.VerifyEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.VerifyEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.VerifyEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.VerifyEmailResponse} returns this
*/
proto.zitadel.user.v2beta.VerifyEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.VerifyEmailResponse} returns this
 */
proto.zitadel.user.v2beta.VerifyEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.VerifyEmailResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.SetPhoneRequest.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 3,
  RETURN_CODE: 4,
  IS_VERIFIED: 5
};

/**
 * @return {proto.zitadel.user.v2beta.SetPhoneRequest.VerificationCase}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2beta.SetPhoneRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.SetPhoneRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.SetPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.SetPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetPhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
phone: jspb.Message.getFieldWithDefault(msg, 2, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode.toObject(includeInstance, f),
isVerified: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.SetPhoneRequest;
  return proto.zitadel.user.v2beta.SetPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.SetPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode;
      reader.readMessage(value,zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 4:
      var value = new zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode;
      reader.readMessage(value,zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVerified(value);
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
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.SetPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.SetPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetPhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phone = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SendPhoneVerificationCode send_code = 3;
 * @return {?proto.zitadel.user.v2beta.SendPhoneVerificationCode}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.SendPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2beta.SendPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest} returns this
*/
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2beta.SetPhoneRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ReturnPhoneVerificationCode return_code = 4;
 * @return {?proto.zitadel.user.v2beta.ReturnPhoneVerificationCode}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.ReturnPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode, 4));
};


/**
 * @param {?proto.zitadel.user.v2beta.ReturnPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest} returns this
*/
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v2beta.SetPhoneRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.hasReturnCode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_verified = 5;
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.getIsVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.setIsVerified = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v2beta.SetPhoneRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.clearIsVerified = function() {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v2beta.SetPhoneRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPhoneRequest.prototype.hasIsVerified = function() {
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
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.SetPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.SetPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetPhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.user.v2beta.SetPhoneResponse}
 */
proto.zitadel.user.v2beta.SetPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.SetPhoneResponse;
  return proto.zitadel.user.v2beta.SetPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.SetPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.SetPhoneResponse}
 */
proto.zitadel.user.v2beta.SetPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.SetPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.SetPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetPhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.SetPhoneResponse} returns this
*/
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetPhoneResponse} returns this
 */
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.SetPhoneResponse} returns this
 */
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetPhoneResponse} returns this
 */
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPhoneResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2beta.RemovePhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RemovePhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RemovePhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemovePhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.RemovePhoneRequest}
 */
proto.zitadel.user.v2beta.RemovePhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RemovePhoneRequest;
  return proto.zitadel.user.v2beta.RemovePhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RemovePhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RemovePhoneRequest}
 */
proto.zitadel.user.v2beta.RemovePhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.RemovePhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RemovePhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RemovePhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemovePhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.RemovePhoneRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RemovePhoneRequest} returns this
 */
proto.zitadel.user.v2beta.RemovePhoneRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.RemovePhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RemovePhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RemovePhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemovePhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.RemovePhoneResponse}
 */
proto.zitadel.user.v2beta.RemovePhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RemovePhoneResponse;
  return proto.zitadel.user.v2beta.RemovePhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RemovePhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RemovePhoneResponse}
 */
proto.zitadel.user.v2beta.RemovePhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.RemovePhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RemovePhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RemovePhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemovePhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.RemovePhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.RemovePhoneResponse} returns this
*/
proto.zitadel.user.v2beta.RemovePhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RemovePhoneResponse} returns this
 */
proto.zitadel.user.v2beta.RemovePhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RemovePhoneResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 3,
  RETURN_CODE: 4
};

/**
 * @return {proto.zitadel.user.v2beta.ResendPhoneCodeRequest.VerificationCase}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2beta.ResendPhoneCodeRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.ResendPhoneCodeRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ResendPhoneCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ResendPhoneCodeRequest;
  return proto.zitadel.user.v2beta.ResendPhoneCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode;
      reader.readMessage(value,zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 4:
      var value = new zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode;
      reader.readMessage(value,zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ResendPhoneCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest} returns this
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendPhoneVerificationCode send_code = 3;
 * @return {?proto.zitadel.user.v2beta.SendPhoneVerificationCode}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.SendPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_phone_pb.SendPhoneVerificationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2beta.SendPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest} returns this
*/
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2beta.ResendPhoneCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest} returns this
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ReturnPhoneVerificationCode return_code = 4;
 * @return {?proto.zitadel.user.v2beta.ReturnPhoneVerificationCode}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.ReturnPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_phone_pb.ReturnPhoneVerificationCode, 4));
};


/**
 * @param {?proto.zitadel.user.v2beta.ReturnPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest} returns this
*/
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v2beta.ResendPhoneCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeRequest} returns this
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ResendPhoneCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ResendPhoneCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeResponse}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ResendPhoneCodeResponse;
  return proto.zitadel.user.v2beta.ResendPhoneCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ResendPhoneCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeResponse}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ResendPhoneCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ResendPhoneCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeResponse} returns this
*/
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeResponse} returns this
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeResponse} returns this
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ResendPhoneCodeResponse} returns this
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ResendPhoneCodeResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2beta.VerifyPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyPhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
verificationCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2beta.VerifyPhoneRequest}
 */
proto.zitadel.user.v2beta.VerifyPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyPhoneRequest;
  return proto.zitadel.user.v2beta.VerifyPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyPhoneRequest}
 */
proto.zitadel.user.v2beta.VerifyPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.VerifyPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyPhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerificationCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyPhoneRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyPhoneRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyPhoneRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyPhoneRequest.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyPhoneRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyPhoneRequest.prototype.setVerificationCode = function(value) {
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
proto.zitadel.user.v2beta.VerifyPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyPhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.VerifyPhoneResponse}
 */
proto.zitadel.user.v2beta.VerifyPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyPhoneResponse;
  return proto.zitadel.user.v2beta.VerifyPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyPhoneResponse}
 */
proto.zitadel.user.v2beta.VerifyPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.VerifyPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyPhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.VerifyPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.VerifyPhoneResponse} returns this
*/
proto.zitadel.user.v2beta.VerifyPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.VerifyPhoneResponse} returns this
 */
proto.zitadel.user.v2beta.VerifyPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.VerifyPhoneResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.DeleteUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.DeleteUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.DeleteUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.DeleteUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.DeleteUserRequest}
 */
proto.zitadel.user.v2beta.DeleteUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.DeleteUserRequest;
  return proto.zitadel.user.v2beta.DeleteUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.DeleteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.DeleteUserRequest}
 */
proto.zitadel.user.v2beta.DeleteUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.DeleteUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.DeleteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.DeleteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.DeleteUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.DeleteUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.DeleteUserRequest} returns this
 */
proto.zitadel.user.v2beta.DeleteUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.DeleteUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.DeleteUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.DeleteUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.DeleteUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.DeleteUserResponse}
 */
proto.zitadel.user.v2beta.DeleteUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.DeleteUserResponse;
  return proto.zitadel.user.v2beta.DeleteUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.DeleteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.DeleteUserResponse}
 */
proto.zitadel.user.v2beta.DeleteUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.DeleteUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.DeleteUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.DeleteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.DeleteUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.DeleteUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.DeleteUserResponse} returns this
*/
proto.zitadel.user.v2beta.DeleteUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.DeleteUserResponse} returns this
 */
proto.zitadel.user.v2beta.DeleteUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.DeleteUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.UpdateHumanUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
username: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
profile: (f = msg.getProfile()) && zitadel_user_v2beta_user_pb.SetHumanProfile.toObject(includeInstance, f),
email: (f = msg.getEmail()) && zitadel_user_v2beta_email_pb.SetHumanEmail.toObject(includeInstance, f),
phone: (f = msg.getPhone()) && zitadel_user_v2beta_phone_pb.SetHumanPhone.toObject(includeInstance, f),
password: (f = msg.getPassword()) && zitadel_user_v2beta_password_pb.SetPassword.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.UpdateHumanUserRequest;
  return proto.zitadel.user.v2beta.UpdateHumanUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_user_pb.SetHumanProfile;
      reader.readMessage(value,zitadel_user_v2beta_user_pb.SetHumanProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 4:
      var value = new zitadel_user_v2beta_email_pb.SetHumanEmail;
      reader.readMessage(value,zitadel_user_v2beta_email_pb.SetHumanEmail.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 5:
      var value = new zitadel_user_v2beta_phone_pb.SetHumanPhone;
      reader.readMessage(value,zitadel_user_v2beta_phone_pb.SetHumanPhone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 6:
      var value = new zitadel_user_v2beta_password_pb.SetPassword;
      reader.readMessage(value,zitadel_user_v2beta_password_pb.SetPassword.deserializeBinaryFromReader);
      msg.setPassword(value);
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
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.UpdateHumanUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
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
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2beta_user_pb.SetHumanProfile.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2beta_email_pb.SetHumanEmail.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_user_v2beta_phone_pb.SetHumanPhone.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      zitadel_user_v2beta_password_pb.SetPassword.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SetHumanProfile profile = 3;
 * @return {?proto.zitadel.user.v2beta.SetHumanProfile}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.getProfile = function() {
  return /** @type{?proto.zitadel.user.v2beta.SetHumanProfile} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_user_pb.SetHumanProfile, 3));
};


/**
 * @param {?proto.zitadel.user.v2beta.SetHumanProfile|undefined} value
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SetHumanEmail email = 4;
 * @return {?proto.zitadel.user.v2beta.SetHumanEmail}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.user.v2beta.SetHumanEmail} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_email_pb.SetHumanEmail, 4));
};


/**
 * @param {?proto.zitadel.user.v2beta.SetHumanEmail|undefined} value
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SetHumanPhone phone = 5;
 * @return {?proto.zitadel.user.v2beta.SetHumanPhone}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.user.v2beta.SetHumanPhone} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_phone_pb.SetHumanPhone, 5));
};


/**
 * @param {?proto.zitadel.user.v2beta.SetHumanPhone|undefined} value
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SetPassword password = 6;
 * @return {?proto.zitadel.user.v2beta.SetPassword}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.getPassword = function() {
  return /** @type{?proto.zitadel.user.v2beta.SetPassword} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_password_pb.SetPassword, 6));
};


/**
 * @param {?proto.zitadel.user.v2beta.SetPassword|undefined} value
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
*/
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.UpdateHumanUserRequest.prototype.hasPassword = function() {
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
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.UpdateHumanUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.UpdateHumanUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserResponse}
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.UpdateHumanUserResponse;
  return proto.zitadel.user.v2beta.UpdateHumanUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.UpdateHumanUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserResponse}
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.UpdateHumanUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.UpdateHumanUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserResponse} returns this
*/
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string email_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phone_code = 3;
 * @return {string}
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.UpdateHumanUserResponse.prototype.hasPhoneCode = function() {
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
proto.zitadel.user.v2beta.DeactivateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.DeactivateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.DeactivateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.DeactivateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.DeactivateUserRequest}
 */
proto.zitadel.user.v2beta.DeactivateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.DeactivateUserRequest;
  return proto.zitadel.user.v2beta.DeactivateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.DeactivateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.DeactivateUserRequest}
 */
proto.zitadel.user.v2beta.DeactivateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.DeactivateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.DeactivateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.DeactivateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.DeactivateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.DeactivateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.DeactivateUserRequest} returns this
 */
proto.zitadel.user.v2beta.DeactivateUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.DeactivateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.DeactivateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.DeactivateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.DeactivateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.DeactivateUserResponse}
 */
proto.zitadel.user.v2beta.DeactivateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.DeactivateUserResponse;
  return proto.zitadel.user.v2beta.DeactivateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.DeactivateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.DeactivateUserResponse}
 */
proto.zitadel.user.v2beta.DeactivateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.DeactivateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.DeactivateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.DeactivateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.DeactivateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.DeactivateUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.DeactivateUserResponse} returns this
*/
proto.zitadel.user.v2beta.DeactivateUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.DeactivateUserResponse} returns this
 */
proto.zitadel.user.v2beta.DeactivateUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.DeactivateUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.ReactivateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ReactivateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ReactivateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ReactivateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.ReactivateUserRequest}
 */
proto.zitadel.user.v2beta.ReactivateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ReactivateUserRequest;
  return proto.zitadel.user.v2beta.ReactivateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ReactivateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ReactivateUserRequest}
 */
proto.zitadel.user.v2beta.ReactivateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.ReactivateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ReactivateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ReactivateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ReactivateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.ReactivateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.ReactivateUserRequest} returns this
 */
proto.zitadel.user.v2beta.ReactivateUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.ReactivateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ReactivateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ReactivateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ReactivateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.ReactivateUserResponse}
 */
proto.zitadel.user.v2beta.ReactivateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ReactivateUserResponse;
  return proto.zitadel.user.v2beta.ReactivateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ReactivateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ReactivateUserResponse}
 */
proto.zitadel.user.v2beta.ReactivateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.ReactivateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ReactivateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ReactivateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ReactivateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.ReactivateUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.ReactivateUserResponse} returns this
*/
proto.zitadel.user.v2beta.ReactivateUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ReactivateUserResponse} returns this
 */
proto.zitadel.user.v2beta.ReactivateUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ReactivateUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.LockUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.LockUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.LockUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.LockUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.LockUserRequest}
 */
proto.zitadel.user.v2beta.LockUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.LockUserRequest;
  return proto.zitadel.user.v2beta.LockUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.LockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.LockUserRequest}
 */
proto.zitadel.user.v2beta.LockUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.LockUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.LockUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.LockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.LockUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.LockUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.LockUserRequest} returns this
 */
proto.zitadel.user.v2beta.LockUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.LockUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.LockUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.LockUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.LockUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.LockUserResponse}
 */
proto.zitadel.user.v2beta.LockUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.LockUserResponse;
  return proto.zitadel.user.v2beta.LockUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.LockUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.LockUserResponse}
 */
proto.zitadel.user.v2beta.LockUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.LockUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.LockUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.LockUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.LockUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.LockUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.LockUserResponse} returns this
*/
proto.zitadel.user.v2beta.LockUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.LockUserResponse} returns this
 */
proto.zitadel.user.v2beta.LockUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.LockUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.UnlockUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.UnlockUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.UnlockUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.UnlockUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.UnlockUserRequest}
 */
proto.zitadel.user.v2beta.UnlockUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.UnlockUserRequest;
  return proto.zitadel.user.v2beta.UnlockUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.UnlockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.UnlockUserRequest}
 */
proto.zitadel.user.v2beta.UnlockUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.UnlockUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.UnlockUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.UnlockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.UnlockUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.UnlockUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.UnlockUserRequest} returns this
 */
proto.zitadel.user.v2beta.UnlockUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.UnlockUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.UnlockUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.UnlockUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.UnlockUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.UnlockUserResponse}
 */
proto.zitadel.user.v2beta.UnlockUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.UnlockUserResponse;
  return proto.zitadel.user.v2beta.UnlockUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.UnlockUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.UnlockUserResponse}
 */
proto.zitadel.user.v2beta.UnlockUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.UnlockUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.UnlockUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.UnlockUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.UnlockUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.UnlockUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.UnlockUserResponse} returns this
*/
proto.zitadel.user.v2beta.UnlockUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.UnlockUserResponse} returns this
 */
proto.zitadel.user.v2beta.UnlockUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.UnlockUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RegisterPasskeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RegisterPasskeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
code: (f = msg.getCode()) && zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode.toObject(includeInstance, f),
authenticator: jspb.Message.getFieldWithDefault(msg, 3, 0),
domain: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyRequest}
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RegisterPasskeyRequest;
  return proto.zitadel.user.v2beta.RegisterPasskeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RegisterPasskeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyRequest}
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode;
      reader.readMessage(value,zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode.deserializeBinaryFromReader);
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.user.v2beta.PasskeyAuthenticator} */ (reader.readEnum());
      msg.setAuthenticator(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
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
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RegisterPasskeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RegisterPasskeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode.serializeBinaryToWriter
    );
  }
  f = message.getAuthenticator();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyRequest} returns this
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PasskeyRegistrationCode code = 2;
 * @return {?proto.zitadel.user.v2beta.PasskeyRegistrationCode}
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.getCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.PasskeyRegistrationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.PasskeyRegistrationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyRequest} returns this
*/
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.setCode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyRequest} returns this
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.clearCode = function() {
  return this.setCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.hasCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PasskeyAuthenticator authenticator = 3;
 * @return {!proto.zitadel.user.v2beta.PasskeyAuthenticator}
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.getAuthenticator = function() {
  return /** @type {!proto.zitadel.user.v2beta.PasskeyAuthenticator} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.user.v2beta.PasskeyAuthenticator} value
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyRequest} returns this
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.setAuthenticator = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string domain = 4;
 * @return {string}
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyRequest} returns this
 */
proto.zitadel.user.v2beta.RegisterPasskeyRequest.prototype.setDomain = function(value) {
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
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RegisterPasskeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RegisterPasskeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
passkeyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyResponse}
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RegisterPasskeyResponse;
  return proto.zitadel.user.v2beta.RegisterPasskeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RegisterPasskeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyResponse}
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasskeyId(value);
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
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RegisterPasskeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RegisterPasskeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getPasskeyId();
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
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyResponse} returns this
*/
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyResponse} returns this
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string passkey_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.getPasskeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyResponse} returns this
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.setPasskeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct public_key_credential_creation_options = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.getPublicKeyCredentialCreationOptions = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyResponse} returns this
*/
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.setPublicKeyCredentialCreationOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RegisterPasskeyResponse} returns this
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.clearPublicKeyCredentialCreationOptions = function() {
  return this.setPublicKeyCredentialCreationOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RegisterPasskeyResponse.prototype.hasPublicKeyCredentialCreationOptions = function() {
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
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
passkeyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
publicKeyCredential: (f = msg.getPublicKeyCredential()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
passkeyName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest;
  return proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasskeyId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPublicKeyCredential(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasskeyName(value);
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
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPasskeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicKeyCredential();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getPasskeyName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string passkey_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.getPasskeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.setPasskeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct public_key_credential = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.getPublicKeyCredential = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest} returns this
*/
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.setPublicKeyCredential = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.clearPublicKeyCredential = function() {
  return this.setPublicKeyCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.hasPublicKeyCredential = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string passkey_name = 4;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.getPasskeyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationRequest.prototype.setPasskeyName = function(value) {
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
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse;
  return proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse} returns this
*/
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse} returns this
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.VerifyPasskeyRegistrationResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.RegisterU2FRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RegisterU2FRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RegisterU2FRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterU2FRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2beta.RegisterU2FRequest}
 */
proto.zitadel.user.v2beta.RegisterU2FRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RegisterU2FRequest;
  return proto.zitadel.user.v2beta.RegisterU2FRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RegisterU2FRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RegisterU2FRequest}
 */
proto.zitadel.user.v2beta.RegisterU2FRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
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
proto.zitadel.user.v2beta.RegisterU2FRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RegisterU2FRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RegisterU2FRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterU2FRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.RegisterU2FRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RegisterU2FRequest} returns this
 */
proto.zitadel.user.v2beta.RegisterU2FRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.RegisterU2FRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RegisterU2FRequest} returns this
 */
proto.zitadel.user.v2beta.RegisterU2FRequest.prototype.setDomain = function(value) {
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
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RegisterU2FResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RegisterU2FResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
u2fId: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.zitadel.user.v2beta.RegisterU2FResponse}
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RegisterU2FResponse;
  return proto.zitadel.user.v2beta.RegisterU2FResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RegisterU2FResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RegisterU2FResponse}
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setU2fId(value);
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
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RegisterU2FResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RegisterU2FResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getU2fId();
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
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.RegisterU2FResponse} returns this
*/
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RegisterU2FResponse} returns this
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string u2f_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.getU2fId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RegisterU2FResponse} returns this
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.setU2fId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct public_key_credential_creation_options = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.getPublicKeyCredentialCreationOptions = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.user.v2beta.RegisterU2FResponse} returns this
*/
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.setPublicKeyCredentialCreationOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RegisterU2FResponse} returns this
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.clearPublicKeyCredentialCreationOptions = function() {
  return this.setPublicKeyCredentialCreationOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RegisterU2FResponse.prototype.hasPublicKeyCredentialCreationOptions = function() {
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
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
u2fId: jspb.Message.getFieldWithDefault(msg, 2, ""),
publicKeyCredential: (f = msg.getPublicKeyCredential()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
tokenName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest;
  return proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setU2fId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPublicKeyCredential(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenName(value);
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
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getU2fId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicKeyCredential();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getTokenName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string u2f_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.getU2fId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.setU2fId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct public_key_credential = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.getPublicKeyCredential = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest} returns this
*/
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.setPublicKeyCredential = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.clearPublicKeyCredential = function() {
  return this.setPublicKeyCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.hasPublicKeyCredential = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string token_name = 4;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.getTokenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationRequest.prototype.setTokenName = function(value) {
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
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse;
  return proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse} returns this
*/
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse} returns this
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.VerifyU2FRegistrationResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.RegisterTOTPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RegisterTOTPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RegisterTOTPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterTOTPRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.RegisterTOTPRequest}
 */
proto.zitadel.user.v2beta.RegisterTOTPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RegisterTOTPRequest;
  return proto.zitadel.user.v2beta.RegisterTOTPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RegisterTOTPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RegisterTOTPRequest}
 */
proto.zitadel.user.v2beta.RegisterTOTPRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.RegisterTOTPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RegisterTOTPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RegisterTOTPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterTOTPRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.RegisterTOTPRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RegisterTOTPRequest} returns this
 */
proto.zitadel.user.v2beta.RegisterTOTPRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RegisterTOTPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RegisterTOTPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
secret: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.user.v2beta.RegisterTOTPResponse}
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RegisterTOTPResponse;
  return proto.zitadel.user.v2beta.RegisterTOTPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RegisterTOTPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RegisterTOTPResponse}
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 3:
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
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RegisterTOTPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RegisterTOTPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.RegisterTOTPResponse} returns this
*/
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RegisterTOTPResponse} returns this
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RegisterTOTPResponse} returns this
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string secret = 3;
 * @return {string}
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RegisterTOTPResponse} returns this
 */
proto.zitadel.user.v2beta.RegisterTOTPResponse.prototype.setSecret = function(value) {
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
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
code: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest}
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest;
  return proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest}
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
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
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest} returns this
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationRequest.prototype.setCode = function(value) {
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
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse}
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse;
  return proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse}
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse} returns this
*/
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse} returns this
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.VerifyTOTPRegistrationResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.RemoveTOTPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RemoveTOTPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RemoveTOTPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveTOTPRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.RemoveTOTPRequest}
 */
proto.zitadel.user.v2beta.RemoveTOTPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RemoveTOTPRequest;
  return proto.zitadel.user.v2beta.RemoveTOTPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RemoveTOTPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RemoveTOTPRequest}
 */
proto.zitadel.user.v2beta.RemoveTOTPRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.RemoveTOTPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RemoveTOTPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RemoveTOTPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveTOTPRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.RemoveTOTPRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RemoveTOTPRequest} returns this
 */
proto.zitadel.user.v2beta.RemoveTOTPRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.RemoveTOTPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RemoveTOTPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RemoveTOTPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveTOTPResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.RemoveTOTPResponse}
 */
proto.zitadel.user.v2beta.RemoveTOTPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RemoveTOTPResponse;
  return proto.zitadel.user.v2beta.RemoveTOTPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RemoveTOTPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RemoveTOTPResponse}
 */
proto.zitadel.user.v2beta.RemoveTOTPResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.RemoveTOTPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RemoveTOTPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RemoveTOTPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveTOTPResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.RemoveTOTPResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.RemoveTOTPResponse} returns this
*/
proto.zitadel.user.v2beta.RemoveTOTPResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RemoveTOTPResponse} returns this
 */
proto.zitadel.user.v2beta.RemoveTOTPResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RemoveTOTPResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.AddOTPSMSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.AddOTPSMSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.AddOTPSMSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddOTPSMSRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.AddOTPSMSRequest}
 */
proto.zitadel.user.v2beta.AddOTPSMSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.AddOTPSMSRequest;
  return proto.zitadel.user.v2beta.AddOTPSMSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.AddOTPSMSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.AddOTPSMSRequest}
 */
proto.zitadel.user.v2beta.AddOTPSMSRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.AddOTPSMSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.AddOTPSMSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.AddOTPSMSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddOTPSMSRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.AddOTPSMSRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.AddOTPSMSRequest} returns this
 */
proto.zitadel.user.v2beta.AddOTPSMSRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.AddOTPSMSResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.AddOTPSMSResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.AddOTPSMSResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddOTPSMSResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.AddOTPSMSResponse}
 */
proto.zitadel.user.v2beta.AddOTPSMSResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.AddOTPSMSResponse;
  return proto.zitadel.user.v2beta.AddOTPSMSResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.AddOTPSMSResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.AddOTPSMSResponse}
 */
proto.zitadel.user.v2beta.AddOTPSMSResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.AddOTPSMSResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.AddOTPSMSResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.AddOTPSMSResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddOTPSMSResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.AddOTPSMSResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddOTPSMSResponse} returns this
*/
proto.zitadel.user.v2beta.AddOTPSMSResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddOTPSMSResponse} returns this
 */
proto.zitadel.user.v2beta.AddOTPSMSResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddOTPSMSResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.RemoveOTPSMSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RemoveOTPSMSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RemoveOTPSMSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveOTPSMSRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.RemoveOTPSMSRequest}
 */
proto.zitadel.user.v2beta.RemoveOTPSMSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RemoveOTPSMSRequest;
  return proto.zitadel.user.v2beta.RemoveOTPSMSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RemoveOTPSMSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RemoveOTPSMSRequest}
 */
proto.zitadel.user.v2beta.RemoveOTPSMSRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.RemoveOTPSMSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RemoveOTPSMSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RemoveOTPSMSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveOTPSMSRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.RemoveOTPSMSRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RemoveOTPSMSRequest} returns this
 */
proto.zitadel.user.v2beta.RemoveOTPSMSRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RemoveOTPSMSResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RemoveOTPSMSResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.RemoveOTPSMSResponse}
 */
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RemoveOTPSMSResponse;
  return proto.zitadel.user.v2beta.RemoveOTPSMSResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RemoveOTPSMSResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RemoveOTPSMSResponse}
 */
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RemoveOTPSMSResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RemoveOTPSMSResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.RemoveOTPSMSResponse} returns this
*/
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RemoveOTPSMSResponse} returns this
 */
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RemoveOTPSMSResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.AddOTPEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.AddOTPEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.AddOTPEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddOTPEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.AddOTPEmailRequest}
 */
proto.zitadel.user.v2beta.AddOTPEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.AddOTPEmailRequest;
  return proto.zitadel.user.v2beta.AddOTPEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.AddOTPEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.AddOTPEmailRequest}
 */
proto.zitadel.user.v2beta.AddOTPEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.AddOTPEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.AddOTPEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.AddOTPEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddOTPEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.AddOTPEmailRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.AddOTPEmailRequest} returns this
 */
proto.zitadel.user.v2beta.AddOTPEmailRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.AddOTPEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.AddOTPEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.AddOTPEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddOTPEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.AddOTPEmailResponse}
 */
proto.zitadel.user.v2beta.AddOTPEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.AddOTPEmailResponse;
  return proto.zitadel.user.v2beta.AddOTPEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.AddOTPEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.AddOTPEmailResponse}
 */
proto.zitadel.user.v2beta.AddOTPEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.AddOTPEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.AddOTPEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.AddOTPEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddOTPEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.AddOTPEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddOTPEmailResponse} returns this
*/
proto.zitadel.user.v2beta.AddOTPEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddOTPEmailResponse} returns this
 */
proto.zitadel.user.v2beta.AddOTPEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddOTPEmailResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.RemoveOTPEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RemoveOTPEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RemoveOTPEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveOTPEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.RemoveOTPEmailRequest}
 */
proto.zitadel.user.v2beta.RemoveOTPEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RemoveOTPEmailRequest;
  return proto.zitadel.user.v2beta.RemoveOTPEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RemoveOTPEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RemoveOTPEmailRequest}
 */
proto.zitadel.user.v2beta.RemoveOTPEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.RemoveOTPEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RemoveOTPEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RemoveOTPEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveOTPEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.RemoveOTPEmailRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RemoveOTPEmailRequest} returns this
 */
proto.zitadel.user.v2beta.RemoveOTPEmailRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RemoveOTPEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RemoveOTPEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.RemoveOTPEmailResponse}
 */
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RemoveOTPEmailResponse;
  return proto.zitadel.user.v2beta.RemoveOTPEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RemoveOTPEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RemoveOTPEmailResponse}
 */
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RemoveOTPEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RemoveOTPEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.RemoveOTPEmailResponse} returns this
*/
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RemoveOTPEmailResponse} returns this
 */
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RemoveOTPEmailResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.MediumCase = {
  MEDIUM_NOT_SET: 0,
  SEND_LINK: 2,
  RETURN_CODE: 3
};

/**
 * @return {proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.MediumCase}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.getMediumCase = function() {
  return /** @type {proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.MediumCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendLink: (f = msg.getSendLink()) && zitadel_user_v2beta_auth_pb.SendPasskeyRegistrationLink.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2beta_auth_pb.ReturnPasskeyRegistrationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest;
  return proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_auth_pb.SendPasskeyRegistrationLink;
      reader.readMessage(value,zitadel_user_v2beta_auth_pb.SendPasskeyRegistrationLink.deserializeBinaryFromReader);
      msg.setSendLink(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_auth_pb.ReturnPasskeyRegistrationCode;
      reader.readMessage(value,zitadel_user_v2beta_auth_pb.ReturnPasskeyRegistrationCode.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_auth_pb.SendPasskeyRegistrationLink.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2beta_auth_pb.ReturnPasskeyRegistrationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest} returns this
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendPasskeyRegistrationLink send_link = 2;
 * @return {?proto.zitadel.user.v2beta.SendPasskeyRegistrationLink}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.getSendLink = function() {
  return /** @type{?proto.zitadel.user.v2beta.SendPasskeyRegistrationLink} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_auth_pb.SendPasskeyRegistrationLink, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.SendPasskeyRegistrationLink|undefined} value
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest} returns this
*/
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.setSendLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest} returns this
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.clearSendLink = function() {
  return this.setSendLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.hasSendLink = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReturnPasskeyRegistrationCode return_code = 3;
 * @return {?proto.zitadel.user.v2beta.ReturnPasskeyRegistrationCode}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.ReturnPasskeyRegistrationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_auth_pb.ReturnPasskeyRegistrationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2beta.ReturnPasskeyRegistrationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest} returns this
*/
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest} returns this
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
code: (f = msg.getCode()) && zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse;
  return proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode;
      reader.readMessage(value,zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse} returns this
*/
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse} returns this
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PasskeyRegistrationCode code = 2;
 * @return {?proto.zitadel.user.v2beta.PasskeyRegistrationCode}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.getCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.PasskeyRegistrationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_auth_pb.PasskeyRegistrationCode, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.PasskeyRegistrationCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse} returns this
*/
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.setCode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse} returns this
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.clearCode = function() {
  return this.setCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse.prototype.hasCode = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.ContentCase = {
  CONTENT_NOT_SET: 0,
  URLS: 2,
  LDAP: 3
};

/**
 * @return {proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.ContentCase}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.getContentCase = function() {
  return /** @type {proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.ContentCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
idpId: jspb.Message.getFieldWithDefault(msg, 1, ""),
urls: (f = msg.getUrls()) && zitadel_user_v2beta_idp_pb.RedirectURLs.toObject(includeInstance, f),
ldap: (f = msg.getLdap()) && zitadel_user_v2beta_idp_pb.LDAPCredentials.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest;
  return proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpId(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_idp_pb.RedirectURLs;
      reader.readMessage(value,zitadel_user_v2beta_idp_pb.RedirectURLs.deserializeBinaryFromReader);
      msg.setUrls(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_idp_pb.LDAPCredentials;
      reader.readMessage(value,zitadel_user_v2beta_idp_pb.LDAPCredentials.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdpId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrls();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_idp_pb.RedirectURLs.serializeBinaryToWriter
    );
  }
  f = message.getLdap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2beta_idp_pb.LDAPCredentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional string idp_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.getIdpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.setIdpId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RedirectURLs urls = 2;
 * @return {?proto.zitadel.user.v2beta.RedirectURLs}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.getUrls = function() {
  return /** @type{?proto.zitadel.user.v2beta.RedirectURLs} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_idp_pb.RedirectURLs, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.RedirectURLs|undefined} value
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest} returns this
*/
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.setUrls = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.clearUrls = function() {
  return this.setUrls(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.hasUrls = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LDAPCredentials ldap = 3;
 * @return {?proto.zitadel.user.v2beta.LDAPCredentials}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.getLdap = function() {
  return /** @type{?proto.zitadel.user.v2beta.LDAPCredentials} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_idp_pb.LDAPCredentials, 3));
};


/**
 * @param {?proto.zitadel.user.v2beta.LDAPCredentials|undefined} value
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest} returns this
*/
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.setLdap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.clearLdap = function() {
  return this.setLdap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentRequest.prototype.hasLdap = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.NextStepCase = {
  NEXT_STEP_NOT_SET: 0,
  AUTH_URL: 2,
  IDP_INTENT: 3,
  POST_FORM: 4,
  FORM_DATA: 5
};

/**
 * @return {proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.NextStepCase}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.getNextStepCase = function() {
  return /** @type {proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.NextStepCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
authUrl: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
idpIntent: (f = msg.getIdpIntent()) && zitadel_user_v2beta_idp_pb.IDPIntent.toObject(includeInstance, f),
postForm: msg.getPostForm_asB64(),
formData: (f = msg.getFormData()) && zitadel_user_v2beta_idp_pb.FormData.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse;
  return proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthUrl(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_idp_pb.IDPIntent;
      reader.readMessage(value,zitadel_user_v2beta_idp_pb.IDPIntent.deserializeBinaryFromReader);
      msg.setIdpIntent(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPostForm(value);
      break;
    case 5:
      var value = new zitadel_user_v2beta_idp_pb.FormData;
      reader.readMessage(value,zitadel_user_v2beta_idp_pb.FormData.deserializeBinaryFromReader);
      msg.setFormData(value);
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
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
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
      zitadel_user_v2beta_idp_pb.IDPIntent.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getFormData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_user_v2beta_idp_pb.FormData.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string auth_url = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.getAuthUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.setAuthUrl = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.clearAuthUrl = function() {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.hasAuthUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IDPIntent idp_intent = 3;
 * @return {?proto.zitadel.user.v2beta.IDPIntent}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.getIdpIntent = function() {
  return /** @type{?proto.zitadel.user.v2beta.IDPIntent} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_idp_pb.IDPIntent, 3));
};


/**
 * @param {?proto.zitadel.user.v2beta.IDPIntent|undefined} value
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.setIdpIntent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.clearIdpIntent = function() {
  return this.setIdpIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.hasIdpIntent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes post_form = 4;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.getPostForm = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes post_form = 4;
 * This is a type-conversion wrapper around `getPostForm()`
 * @return {string}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.getPostForm_asB64 = function() {
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
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.getPostForm_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPostForm()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.setPostForm = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.clearPostForm = function() {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.hasPostForm = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FormData form_data = 5;
 * @return {?proto.zitadel.user.v2beta.FormData}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.getFormData = function() {
  return /** @type{?proto.zitadel.user.v2beta.FormData} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_idp_pb.FormData, 5));
};


/**
 * @param {?proto.zitadel.user.v2beta.FormData|undefined} value
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.setFormData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.clearFormData = function() {
  return this.setFormData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.StartIdentityProviderIntentResponse.prototype.hasFormData = function() {
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
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
idpIntentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
idpIntentToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest;
  return proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpIntentId(value);
      break;
    case 2:
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
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdpIntentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdpIntentToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string idp_intent_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.prototype.getIdpIntentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.prototype.setIdpIntentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string idp_intent_token = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.prototype.getIdpIntentToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest.prototype.setIdpIntentToken = function(value) {
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
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
idpInformation: (f = msg.getIdpInformation()) && zitadel_user_v2beta_idp_pb.IDPInformation.toObject(includeInstance, f),
userId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse;
  return proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_idp_pb.IDPInformation;
      reader.readMessage(value,zitadel_user_v2beta_idp_pb.IDPInformation.deserializeBinaryFromReader);
      msg.setIdpInformation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getIdpInformation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_idp_pb.IDPInformation.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IDPInformation idp_information = 2;
 * @return {?proto.zitadel.user.v2beta.IDPInformation}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.getIdpInformation = function() {
  return /** @type{?proto.zitadel.user.v2beta.IDPInformation} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_idp_pb.IDPInformation, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.IDPInformation|undefined} value
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.setIdpInformation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.clearIdpInformation = function() {
  return this.setIdpInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.hasIdpInformation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2beta.AddIDPLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.AddIDPLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.AddIDPLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddIDPLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
idpLink: (f = msg.getIdpLink()) && zitadel_user_v2beta_idp_pb.IDPLink.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.AddIDPLinkRequest}
 */
proto.zitadel.user.v2beta.AddIDPLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.AddIDPLinkRequest;
  return proto.zitadel.user.v2beta.AddIDPLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.AddIDPLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.AddIDPLinkRequest}
 */
proto.zitadel.user.v2beta.AddIDPLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_idp_pb.IDPLink;
      reader.readMessage(value,zitadel_user_v2beta_idp_pb.IDPLink.deserializeBinaryFromReader);
      msg.setIdpLink(value);
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
proto.zitadel.user.v2beta.AddIDPLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.AddIDPLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.AddIDPLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddIDPLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdpLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_idp_pb.IDPLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.AddIDPLinkRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.AddIDPLinkRequest} returns this
 */
proto.zitadel.user.v2beta.AddIDPLinkRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IDPLink idp_link = 2;
 * @return {?proto.zitadel.user.v2beta.IDPLink}
 */
proto.zitadel.user.v2beta.AddIDPLinkRequest.prototype.getIdpLink = function() {
  return /** @type{?proto.zitadel.user.v2beta.IDPLink} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_idp_pb.IDPLink, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.IDPLink|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddIDPLinkRequest} returns this
*/
proto.zitadel.user.v2beta.AddIDPLinkRequest.prototype.setIdpLink = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddIDPLinkRequest} returns this
 */
proto.zitadel.user.v2beta.AddIDPLinkRequest.prototype.clearIdpLink = function() {
  return this.setIdpLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddIDPLinkRequest.prototype.hasIdpLink = function() {
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
proto.zitadel.user.v2beta.AddIDPLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.AddIDPLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.AddIDPLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddIDPLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.AddIDPLinkResponse}
 */
proto.zitadel.user.v2beta.AddIDPLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.AddIDPLinkResponse;
  return proto.zitadel.user.v2beta.AddIDPLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.AddIDPLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.AddIDPLinkResponse}
 */
proto.zitadel.user.v2beta.AddIDPLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.AddIDPLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.AddIDPLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.AddIDPLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.AddIDPLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.AddIDPLinkResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.AddIDPLinkResponse} returns this
*/
proto.zitadel.user.v2beta.AddIDPLinkResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.AddIDPLinkResponse} returns this
 */
proto.zitadel.user.v2beta.AddIDPLinkResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.AddIDPLinkResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.PasswordResetRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.PasswordResetRequest.MediumCase = {
  MEDIUM_NOT_SET: 0,
  SEND_LINK: 2,
  RETURN_CODE: 3
};

/**
 * @return {proto.zitadel.user.v2beta.PasswordResetRequest.MediumCase}
 */
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.getMediumCase = function() {
  return /** @type {proto.zitadel.user.v2beta.PasswordResetRequest.MediumCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.PasswordResetRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.PasswordResetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.PasswordResetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.PasswordResetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendLink: (f = msg.getSendLink()) && zitadel_user_v2beta_password_pb.SendPasswordResetLink.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2beta_password_pb.ReturnPasswordResetCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.PasswordResetRequest}
 */
proto.zitadel.user.v2beta.PasswordResetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.PasswordResetRequest;
  return proto.zitadel.user.v2beta.PasswordResetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.PasswordResetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.PasswordResetRequest}
 */
proto.zitadel.user.v2beta.PasswordResetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_password_pb.SendPasswordResetLink;
      reader.readMessage(value,zitadel_user_v2beta_password_pb.SendPasswordResetLink.deserializeBinaryFromReader);
      msg.setSendLink(value);
      break;
    case 3:
      var value = new zitadel_user_v2beta_password_pb.ReturnPasswordResetCode;
      reader.readMessage(value,zitadel_user_v2beta_password_pb.ReturnPasswordResetCode.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.PasswordResetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.PasswordResetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.PasswordResetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_password_pb.SendPasswordResetLink.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2beta_password_pb.ReturnPasswordResetCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.PasswordResetRequest} returns this
 */
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendPasswordResetLink send_link = 2;
 * @return {?proto.zitadel.user.v2beta.SendPasswordResetLink}
 */
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.getSendLink = function() {
  return /** @type{?proto.zitadel.user.v2beta.SendPasswordResetLink} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_password_pb.SendPasswordResetLink, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.SendPasswordResetLink|undefined} value
 * @return {!proto.zitadel.user.v2beta.PasswordResetRequest} returns this
*/
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.setSendLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2beta.PasswordResetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.PasswordResetRequest} returns this
 */
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.clearSendLink = function() {
  return this.setSendLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.hasSendLink = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReturnPasswordResetCode return_code = 3;
 * @return {?proto.zitadel.user.v2beta.ReturnPasswordResetCode}
 */
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2beta.ReturnPasswordResetCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_password_pb.ReturnPasswordResetCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2beta.ReturnPasswordResetCode|undefined} value
 * @return {!proto.zitadel.user.v2beta.PasswordResetRequest} returns this
*/
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2beta.PasswordResetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.PasswordResetRequest} returns this
 */
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.PasswordResetRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.PasswordResetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.PasswordResetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.PasswordResetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.user.v2beta.PasswordResetResponse}
 */
proto.zitadel.user.v2beta.PasswordResetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.PasswordResetResponse;
  return proto.zitadel.user.v2beta.PasswordResetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.PasswordResetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.PasswordResetResponse}
 */
proto.zitadel.user.v2beta.PasswordResetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.PasswordResetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.PasswordResetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.PasswordResetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.PasswordResetResponse} returns this
*/
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.PasswordResetResponse} returns this
 */
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.PasswordResetResponse} returns this
 */
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.PasswordResetResponse} returns this
 */
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.PasswordResetResponse.prototype.hasVerificationCode = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2beta.SetPasswordRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  CURRENT_PASSWORD: 3,
  VERIFICATION_CODE: 4
};

/**
 * @return {proto.zitadel.user.v2beta.SetPasswordRequest.VerificationCase}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2beta.SetPasswordRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2beta.SetPasswordRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.SetPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.SetPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
newPassword: (f = msg.getNewPassword()) && zitadel_user_v2beta_password_pb.Password.toObject(includeInstance, f),
currentPassword: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
verificationCode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2beta.SetPasswordRequest}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.SetPasswordRequest;
  return proto.zitadel.user.v2beta.SetPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.SetPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.SetPasswordRequest}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new zitadel_user_v2beta_password_pb.Password;
      reader.readMessage(value,zitadel_user_v2beta_password_pb.Password.deserializeBinaryFromReader);
      msg.setNewPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentPassword(value);
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
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.SetPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.SetPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewPassword();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2beta_password_pb.Password.serializeBinaryToWriter
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
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Password new_password = 2;
 * @return {?proto.zitadel.user.v2beta.Password}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.getNewPassword = function() {
  return /** @type{?proto.zitadel.user.v2beta.Password} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_password_pb.Password, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.Password|undefined} value
 * @return {!proto.zitadel.user.v2beta.SetPasswordRequest} returns this
*/
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.clearNewPassword = function() {
  return this.setNewPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.hasNewPassword = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string current_password = 3;
 * @return {string}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.getCurrentPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.setCurrentPassword = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.user.v2beta.SetPasswordRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.clearCurrentPassword = function() {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.user.v2beta.SetPasswordRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.hasCurrentPassword = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string verification_code = 4;
 * @return {string}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.setVerificationCode = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.user.v2beta.SetPasswordRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.clearVerificationCode = function() {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.user.v2beta.SetPasswordRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPasswordRequest.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2beta.SetPasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.SetPasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.SetPasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetPasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2beta.SetPasswordResponse}
 */
proto.zitadel.user.v2beta.SetPasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.SetPasswordResponse;
  return proto.zitadel.user.v2beta.SetPasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.SetPasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.SetPasswordResponse}
 */
proto.zitadel.user.v2beta.SetPasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.user.v2beta.SetPasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.SetPasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.SetPasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.SetPasswordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.user.v2beta.SetPasswordResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.user.v2beta.SetPasswordResponse} returns this
*/
proto.zitadel.user.v2beta.SetPasswordResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.SetPasswordResponse} returns this
 */
proto.zitadel.user.v2beta.SetPasswordResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.SetPasswordResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest}
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest;
  return proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest}
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest} returns this
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.repeatedFields_ = [2];



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
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.ListDetails.toObject(includeInstance, f),
authMethodTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse}
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse;
  return proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse}
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.ListDetails;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.ListDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.zitadel.user.v2beta.AuthenticationMethodType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAuthMethodTypes(values[i]);
      }
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
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getAuthMethodTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2beta.ListDetails details = 1;
 * @return {?proto.zitadel.object.v2beta.ListDetails}
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.ListDetails|undefined} value
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse} returns this
*/
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse} returns this
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated AuthenticationMethodType auth_method_types = 2;
 * @return {!Array<!proto.zitadel.user.v2beta.AuthenticationMethodType>}
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.getAuthMethodTypesList = function() {
  return /** @type {!Array<!proto.zitadel.user.v2beta.AuthenticationMethodType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v2beta.AuthenticationMethodType>} value
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse} returns this
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.setAuthMethodTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.zitadel.user.v2beta.AuthenticationMethodType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse} returns this
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.addAuthMethodTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse} returns this
 */
proto.zitadel.user.v2beta.ListAuthenticationMethodTypesResponse.prototype.clearAuthMethodTypesList = function() {
  return this.setAuthMethodTypesList([]);
};


/**
 * @enum {number}
 */
proto.zitadel.user.v2beta.AuthenticationMethodType = {
  AUTHENTICATION_METHOD_TYPE_UNSPECIFIED: 0,
  AUTHENTICATION_METHOD_TYPE_PASSWORD: 1,
  AUTHENTICATION_METHOD_TYPE_PASSKEY: 2,
  AUTHENTICATION_METHOD_TYPE_IDP: 3,
  AUTHENTICATION_METHOD_TYPE_TOTP: 4,
  AUTHENTICATION_METHOD_TYPE_U2F: 5,
  AUTHENTICATION_METHOD_TYPE_OTP_SMS: 6,
  AUTHENTICATION_METHOD_TYPE_OTP_EMAIL: 7
};

goog.object.extend(exports, proto.zitadel.user.v2beta);
