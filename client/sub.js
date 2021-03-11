Template.subNum.onCreated(function subNumOnCreated() {
    // counter starts at 0
    this.num1 = new ReactiveVar(0);
    this.num2 = new ReactiveVar(0);
  });
  
  Template.subNum.helpers({
    num1(){
      return Template.instance().num1.get();
    },
    num2(){
      return Template.instance().num2.get();
    },
    ans(){
      return Template.instance().num1.get() - Template.instance().num2.get();
    },
  });
  
  Template.subNum.events({
    'click #js-subing'(event, instance) {
      console.log("diff button clicked");
      instance.num1.set(parseInt(document.querySelector("#n1s").value));
      instance.num2.set(parseInt(document.querySelector("#n2s").value));
    },
  });