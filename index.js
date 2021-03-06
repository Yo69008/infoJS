
(function (root, factory) {
    if (typeof module === "object" && module.exports) {

        module.exports = factory();
    } else {
        //nom du namespace
        root.infojs = factory(root);
  }
}(this, function (root) {
    
    if(root){

        var style = root.document.createElement("style"); 
        style.type = "text/css";
        var css = root.document.createTextNode("div");
        if(style.stylesheet){
            style.stylesheet.cssText = css;
        } else {
            style.appendChild(css);
        }
       root.document.getElementsByTagName("head")[0].appendChild(style);


        
 
    }
         var setCss = function (helper) {
                        helper.style.background = "#C0C0C0",
                        helper.style.boxShadow = "0 0 10px #000000",
                        helper.style.position ="fixed",
                        helper.style.width ="10%",
                        helper.style.bottom ="10%",
                        helper.style.right ="-100%",
                        helper.style.transition ="right 1s, opacity 1s";
        };
   
        var closeOnclick = function () {
//                        this.onclick = null;
                        var parent = this.parentNode;
                        parent.style.background ="#d84545";
                        parent.style.opacity = 0;
                        root.setTimeout(function () {
                                parent.parentNode.removeChild(parent);
                        }, 1000);
        };
        
        var buttonCancelOnClick = function () {
			var parent = this.parentNode;
			parent.style.background ="#ef5229";
			parent.style.opacity = 0;
			root.setTimeout(function () {
				parent.parentNode.removeChild(parent);
			}, 1000);
        };
        
        var buttonOKOnClick = function () {
			var parent = this.parentNode;
			parent.style.background ="#e3e116";
			parent.style.opacity = 0;
			root.setTimeout(function () {
				parent.parentNode.removeChild(parent);
			}, 1000);
        };
	var getHelper = function(message) {
            
            if (typeof message !== "string") {
                    throw new Error("Message must be string");
            }

            var popup = root.document.createElement("div");
            var p = root.document.createElement("p");
            var close = root.document.createElement("a");
            var buttonOK = root.document.createElement("button");
            var buttonCancel = root.document.createElement("button");

            var pText = root.document.createTextNode("Salut");
            close.innerHTML = "&#x274c;";/*la croix*/
            var buttonOKText = root.document.createTextNode("Coucou");
            var buttonTextCancel = root.document.createTextNode("Bye");

            setCss(popup);
            p.appendChild(pText);
            buttonOK.appendChild(buttonOKText);
            buttonCancel.appendChild(buttonTextCancel);
            popup.appendChild(close);
            popup.appendChild(p);
            popup.appendChild(buttonOK);
            popup.appendChild(buttonCancel);

            popup.setAttribute("id", "infojs");
            close.onclick = closeOnclick;
            buttonOK.onclick = buttonOKOnClick;                
            buttonCancel.onclick = buttonCancelOnClick;
            return popup;
	};

         /**
          * 
          * @param {HTMLElement} helper
          */   
	var log = function(helper) {
		
            if(!(helper instanceof root.HTMLElement) || !root.document.body) {
			throw new Error("require a valid document and a body");
		}
            root.document.body.appendChild(helper);
            helper.clientHeight;
            helper.style.right = "20%";
	};

        /**
         * @namespace infojs
         */
    return (function(){
        var self = {};
        
        
        self.init = function (window) {
            if (!window || !window.document){
                throw new Error ("infojs require a window with a document");
            }
            root = window;
        },
        /**
         * Emergency
         * 
         * @memberOf infojs
         * @param {String} message displayed message
         * @returns {Object}infojs module
         * 
         * @throws {Error} invalid argument exception
         */
        self.emergency = function (message) {
            var helper = getHelper(message);
            log(helper);
        };
        
        /**
         * Alert
         * 
         * @memberOf infojs
         * @param {String} message displayed message
         * @returns {Object}infojs module
         * 
         * @throws {Error} invalid argument exception
         */
        self.alert = function (message) {
            var helper = getHelper(message);
            log(helper);
        };
        
        /**
         * Error
         * 
         * @memberOf infojs
         * @param {String} message displayed message
         * @returns {Object}infojs module
         * 
         * @throws {Error} invalid argument exception
         */
        self.error = function (message) {
            var helper = getHelper(message);
            log(helper);
        };
        
        /**
         * Critical
         * 
         * @memberOf infojs
         * @param {String} message displayed message
         * @returns {Object}infojs module
         * 
         * @throws {Error} invalid argument exception
         */
        self.critical = function (message) {
            var helper = getHelper(message);
            log(helper);
        };
        
        /**
         * Warning
         * 
         * @memberOf infojs
         * @param {String} message displayed message
         * @returns {Object}infojs module
         * 
         * @throws {Error} invalid argument exception
         */
        self.warning = function (message) {
            var helper = getHelper(message);
            log(helper);
        };
        
        /**
         * Notice
         * 
         * @memberOf infojs
         * @param {String} message displayed message
         * @returns {Object}infojs module
         * 
         * @throws {Error} invalid argument exception
         */
        self.notice = function (message) {
            var helper = getHelper(message);
            log(helper);
        };
        
        /**
         * Info
         * 
         * @memberOf infojs
         * @param {String} message displayed message
         * @returns {Object}infojs module
         * 
         * @throws {Error} invalid argument exception
         */
        self.info = function (message) {
            var helper = getHelper(message);
            log(helper);
        };
        
        /**
         * Debug
         * 
         * @memberOf infojs
         * @param {String} message displayed message
         * @returns {Object}infojs module
         * 
         * @throws {Error} invalid argument exception
         */
        self.debug = function (message) {
            var helper = getHelper(message);
            log(helper);
        }; 
        
        return self;

    }());  
    
    
}));