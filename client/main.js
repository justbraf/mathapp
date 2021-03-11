import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import './add.js';
import './sub.js';
import './mul.js';
import './div.js';

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