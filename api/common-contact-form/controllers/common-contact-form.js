'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async customContact(ctx) {
        await strapi.plugins['email'].services.email.send({
            to: 'pkderlam@hotmail.com',
            from: 'pkderlam@hotmail.com', //e.g. single sender verification in SendGrid
            cc: 'pkderlam@hotmail.com',
            bcc: 'pkderlam@hotmail.com',
            replyTo: `${result.email}`,
            subject: 'The Strapi Email plugin worked successfully',
            text: `${result.message}`,
            html: 'Hello world!',
        });
    }
};
