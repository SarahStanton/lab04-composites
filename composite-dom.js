var DomElement = (function () {
    function DomElement(elementName, text) {
        this.elementName = elementName;
        this.text = text;
        this.allElements = [];
    }
    DomElement.prototype.print = function () {
        console.log("<" + this.elementName + ">");
        if (this.text) {
            console.log(this.text);
        }
        for (var _i = 0, _a = this.allElements; _i < _a.length; _i++) {
            var element = _a[_i];
            element.print();
        }
        console.log("</" + this.elementName + ">");
    };
    DomElement.prototype.add = function (element) {
        this.allElements.push(element);
    };
    return DomElement;
}());
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
var p1 = new DomElement("p");
var p2 = new DomElement("p");
var div = new DomElement("div");
var html = new DomElement("html");
p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));
div.add(p1);
div.add(p2);
html.add(div);
html.print();
