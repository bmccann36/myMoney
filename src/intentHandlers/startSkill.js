

module.exports = function startSkill() {
        const repromptSpeech = 'let me know what you would like to do'
        this.response.speak('WELCOME!! to my money, you can ask questions like, am I on budget? or, check my balance, or get recommendations')
        this.response.listen(repromptSpeech);
        this.emit(':responseReady')
    }