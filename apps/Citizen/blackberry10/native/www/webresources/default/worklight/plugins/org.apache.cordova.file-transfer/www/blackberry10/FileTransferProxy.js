
/* JavaScript content from worklight/plugins/org.apache.cordova.file-transfer/www/blackberry10/FileTransferProxy.js in JS Resources */
cordova.define("org.apache.cordova.file-transfer.FileTransferProxy", function(require, exports, module) {/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/*
 * FileTransferProxy
 *
 * Register all FileTransfer exec calls to be handled by proxy
 */

var xhrFileTransfer = require('org.apache.cordova.file-transfer.xhrFileTransfer');

module.exports = {
    abort: xhrFileTransfer.abort,
    download: xhrFileTransfer.download,
    upload: xhrFileTransfer.upload
};

require('cordova/exec/proxy').add('FileTransfer', module.exports);
});