define([], function() {
    "use strict";

    //////////////////////////////////
    // Private class methods/fields //
    //////////////////////////////////
    
    var messengerId = 0;
    
    
    /**
     * @exports worker/workerMessenger
     */
    var module = {
        /////////////////////////////////
        // Public class methods/fields //
        /////////////////////////////////
        
        /**
         * WorkerMessenger
         * @constructor
         */
        WorkerMessenger: function(target, id) {
            /////////////////////////////////////
            // Private instance methods/fields //
            /////////////////////////////////////
            
            var that = this;
            
            target = target || self;
            if (id === undefined) {
                id = messengerId++;
            } 
            
            
            ////////////////////////////////////
            // Public instance methods/fields //
            ////////////////////////////////////
           
            this.sendMessage = function(functionName, params) {
                target.postMessage({
                    id: id,
                    functionName: functionName,
                    params: params
                });
            };
        }
    };

    return module; 
});