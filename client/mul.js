Template.mulNum.onCreated(function mulNumOnCreated() {
    // counter starts at 0
    this.num1 = new ReactiveVar(0);
    this.num2 = new ReactiveVar(0);
  });
  
  Template.mulNum.helpers({
    num1(){
      return Template.instance().num1.get();
    },
    num2(){
      return Template.instance().num2.get();
    },
    ans(){
      return Template.instance().num1.get() * Template.instance().num2.get();
    },
  });
  
  Template.mulNum.events({
    'click #js-multiply'(event, instance) {
      console.log("div button clicked");
      instance.num1.set(parseInt(document.querySelector("#n1m").value));
      instance.num2.set(parseInt(document.querySelector("#n2m").value));
    },
  });