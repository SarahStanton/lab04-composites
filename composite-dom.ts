interface IDomElement {
  print();
}

class DomElement implements IDomElement {
  elementName:string;
  text:string;
  allElements:IDomElement[];

  constructor(elementName:string, text?:string) {
    this.elementName = elementName;
    this.text = text;
    this.allElements = [];
  }

  print() {
    console.log(`<${this.elementName}>`);
    if (this.text) {
      console.log(this.text);
    }
    for (let element of this.allElements) {
      element.print();
    }
    console.log(`</${this.elementName}>`);
  }

  add(element:IDomElement) {
    this.allElements.push(element);
  }
}

class TextNode implements IDomElement {
  text:string;
  constructor(text:string){
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}


let p1 = new DomElement("p");
let p2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));

div.add(p1);
div.add(p2);
html.add(div);

html.print();