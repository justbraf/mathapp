import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'click h3'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 2);
  },
});

Template.addNum.onCreated(function addNumOnCreated() {
  // counter starts at 0
  this.num1 = new ReactiveVar(0);
  this.num2 = new ReactiveVar(0);
});

Template.addNum.helpers({
  num1(){
    return Template.instance().num1.get();
  },
  num2(){
    return Template.instance().num2.get();
  },
  ans(){
    return Template.instance().num1.get() + Template.instance().num2.get();
  },
});

Template.addNum.events({
  'click #js-adding'(event, instance) {
    console.log("sum button clicked");
    instance.num1.set(parseInt(document.querySelector("#n1a").value));
    instance.num2.set(parseInt(document.querySelector("#n2a").value));
  },
});

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

let gName = "Brad";

Template.allData.helpers({
  guestName(){
    return gName;
  },
  skill(){
    return "coding"
  },
  mySkill(){
    if (gName == "Brad"){
      return true;
    }
    return false;
  }
});

Template.allData.events({
  'mouseout h3'(event, instance){
    console.log("Welcome");
  },
  'mouseenter h6'(event, instance){
    console.log("Header 6 touched");
  }
});