module.exports = function() {
    const intentObj = this.event.request.intent;
    const repromptSpeech = ''
    if (this.event.request.dialogState === 'STARTED') {
        this.emit(':delegate');
    }
    this.response.speak('I see you have a spending report intent and the date is' + intentObj.slots.timePeriod.value)
    this.response.listen(repromptSpeech);
    this.emit(':responseReady')
}
