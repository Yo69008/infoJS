
var infojs = require("./../index.js");
var mocha = require("mocha");
var chai = require("chai");

var document = require("jsdom").jsdom(
    "<!doctype html><html><head></head><body></body></html>");
var window =  document.defaultView;
window.document = document;

infojs.init(window);
mocha.describe("Infojs", function(){

    mocha.it("infojs is a module ?", function (){
        chai.assert ("object" === typeof infojs);
    });    
    //   description du test case (cas de test)
    mocha.describe("Methods", function () {
        mocha.it("Does Emergency create infojs ?", function(){
        infojs.emergency("fooooo");
        //vérifier si un element est le dernier enfant du body
//        console.log(window.document.body.lastChild);
        //vérifier id
//        console.log(window.document.body.lastChild.getAttribute("id"));
        //vérifier tag name
 //       console.log(window.document.body.lastChild.tagName);

        chai.assert(
            "object" === typeof window.document.body.lastChild
            && "infojs" === window.document.body.lastChild.getAttribute("id")
            && "DIV" === window.document.body.lastChild.tagName
            );
            window.document.body.removeChild(
                    window.document.body.lastChild
            );
        });
        
        mocha.it("Emergency is a function ?", function(){
            chai.assert("function" === typeof infojs.emergency);
        });
        
        mocha.it("Alert is a function ?", function(){
            chai.assert("function" === typeof infojs.alert);
        });
        
        mocha.it("Error is a function ?", function(){
            chai.assert("function" === typeof infojs.error);
        }); 
        
        mocha.it("Critical is a function ?", function(){
            chai.assert("function" === typeof infojs.critical);
        });
        
        mocha.it("Warning is a function ?", function(){
            chai.assert("function" === typeof infojs.warning);
        });
        
        mocha.it("Notice is a function ?", function(){
            chai.assert("function" === typeof infojs.notice);
        });
        
        mocha.it("Info is a function ?", function(){
            chai.assert("function" === typeof infojs.info);
        });
        
        mocha.it("Debug is a function ?", function(){
            chai.assert("function" === typeof infojs.debug);
        });
        
    });
  
});