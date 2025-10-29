/**
 * Vnf_meta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
      vnf_name:{
          type: 'string'
      },
      vnfd_id:{
          type: 'string'
      },
      application_version:{
          type: 'string'
      },
      vnf_package_name:{
          type: 'string'
      },
      vnf_description:{
          type: 'string'
      }
  }
};

