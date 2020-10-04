import { v4 as uuidv4 } from 'uuid';

export class JSONResponse {
  responseTemplate = {
    response: {
      code: null,
      id: null,
      timestamp: null,
      function: {},
      messages: {
        errors: [],
        warnings: [],
        infos: []
      }
    },
    data: []
  };

  responseTmp;
  responseJSON;

  constructor (request, reply) {
    this.responseTmp = JSON.parse(JSON.stringify(this.responseTemplate));
    this.responseTmp.response.timestamp = new Date().toISOString();
    // this.responseTmp.response.code = this.responseJSON.statusCode;
    this.responseTmp.response.id = uuidv4();
    this.responseTmp.response.function.method = request.method;
    this.responseTmp.response.function.url = `${request.path}`;
    this.responseTmp.response.function.ip = request.ip;
    this.responseTmp.response.function.version = request.path.split('/')[1];
    this.responseTmp.response.responseTime = `${Date.now() - request.responseTime}ms`;
  }

  $inject (obj, value) {
    this.responseTmp.response[obj] = value;
  }

  $send () {
    return this.__deleteNulls(this.responseTmp);
  }

  $data (data) {
    this.responseTmp.data = data;
  }

  __deleteNulls (object) {
    Object
      .entries(object)
      .forEach(([k, v]) => {
        if (v && typeof v === 'object') {
          this.__deleteNulls(v);
        }
        if ((v && typeof v === 'object' && !Object.keys(v).length) || v === null || v === undefined) {
          // if (Array.isArray(object)) {
          //   console.log('INSIDE', k, object);
          //   object.splice(k, 1);
          // } else {
          delete object[k];
          // }
        }
      });
    return object;
  }
}
