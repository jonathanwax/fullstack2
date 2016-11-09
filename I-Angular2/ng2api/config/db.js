'use strict;'
//Include crypto to generate the movie id
var crypto = require('crypto');

module.exports = function () {
    return {
        messageList: [],
        /*
         * Save the message inside the "db".
         */
        save(message) {
            message.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
            this.messageList.push(message);
            return 1;
        },
        /*
         * Retrieve a message with a given id or return all the movies if the id is undefined.
         */
        find(id) {
            if (id) {
                return this.messageList.find(element => {
                    return element.id === id;
                });
            } else {
                return this.messageList;
            }
        },
        /*
         * Delete a message with the given id.
         */
        remove(id) {
            var found = 0;
            this.messageList = this.messageList.filter(element => {
                if (element.id === id) {
                    found = 1;
                } else {
                    return element.id !== id;
                }
            });
            return found;
        },
        /*
         * Update a message with the given id
         */
        update(id, message) {
            var messageIndex = this.messageList.findIndex(element => {
                return element.id === id;
            });
            if (messageIndex !== -1) {
                this.messageList[messageIndex].title = message.title;
                this.messageList[messageIndex].year = message.year;
                return 1;
            } else {
                return 0;
            }
        }
    }
};  