export default class PubSub{
    constructor(){
        this.events = {};
    }

    /**
     * 订阅， 时间订阅
     * @param event
     * @param callback
     * @returns {*}
     */
    subscribe(event, callback) {
        let self = this;
        if(!self.events.hasOwnProperty(event)) {
            self.events[event] = [];
        }
        return self.events[event].push(callback);
    }

    /**
     * 事件发布
     * @param event
     * @param data
     * @returns {Array|*}
     */
    publish(event, data){
        let self = this;
        if(!self.events.hasOwnProperty(event)){
            return [];
        }
        return self.events[event].map(callback=>callback(data))
    }

}