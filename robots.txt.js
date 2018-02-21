'use strict';
let content = `
User-agent: *
Disallow: /
`;
exports.handler = (event, context, callback) => {
    const response = {
        status: '200',
        statusDescription: 'OK',
        headers: {
            'cache-control': [{
                key: 'Cache-Control',
                value: 'max-age=100'
            }],
            'content-type': [{
                key: 'Content-Type',
                value: 'text/plain'
            }],
            'content-encoding': [{
                key: 'Content-Encoding',
                value: 'UTF-8'
            }],
        },
        body: content,
    };
    callback(null, response);
};