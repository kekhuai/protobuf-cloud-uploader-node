// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var upload_service_pb = require('./upload_service_pb.js');

function serialize_Request(arg) {
  if (!(arg instanceof upload_service_pb.Request)) {
    throw new Error('Expected argument of type Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Request(buffer_arg) {
  return upload_service_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response(arg) {
  if (!(arg instanceof upload_service_pb.Response)) {
    throw new Error('Expected argument of type Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Response(buffer_arg) {
  return upload_service_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var UploadServiceService = exports.UploadServiceService = {
  upload: {
    path: '/UploadService/Upload',
    requestStream: false,
    responseStream: false,
    requestType: upload_service_pb.Request,
    responseType: upload_service_pb.Response,
    requestSerialize: serialize_Request,
    requestDeserialize: deserialize_Request,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
};

exports.UploadServiceClient = grpc.makeGenericClientConstructor(UploadServiceService);
