const mongoose = require("mongoose");
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subjects, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subjects,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // Great place to send an email
        const mailer = new Mailer(survey, surveyTemplate(survey));
        console.log(mailer)
        mailer.send();
    });
}