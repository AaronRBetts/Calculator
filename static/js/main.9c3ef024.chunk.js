(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),i=a(3),r=a.n(i),n=a(4),l=a(5),u=a(1),c=a(7),d=a(6),h=(a(13),[{value:"+",id:"add",type:"operator",keyCode:107},{value:"-",id:"subtract",type:"operator",keyCode:109},{value:"*",id:"multiply",type:"operator",keyCode:106},{value:"/",id:"divide",type:"operator",keyCode:111},{value:7,id:"seven",type:"num",keyCode:103},{value:8,id:"eight",type:"num",keyCode:104},{value:9,id:"nine",type:"num",keyCode:105},{value:4,id:"four",type:"num",keyCode:100},{value:5,id:"five",type:"num",keyCode:101},{value:6,id:"six",type:"num",keyCode:102},{value:1,id:"one",type:"num",keyCode:97},{value:2,id:"two",type:"num",keyCode:98},{value:3,id:"three",type:"num",keyCode:99},{value:0,id:"zero",type:"num",keyCode:96},{value:".",id:"decimal",type:"decimal",keyCode:110},{value:"clear",id:"clear",type:"clear",keyCode:8},{value:"=",id:"equals",type:"equals",keyCode:13}]),p=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handleInput=function(e,t){console.log("input: "+e,"type: "+t),"num"===t?s.handleDigitInput(e):"-"===e&&0===s.state.currentVal?s.setState({negNum:!0}):"operator"===t?s.handleOperator(e):"decimal"===t&&!0===s.state.wholeNum?s.setState({wholeNum:!1,emptyDecimals:"."}):"equals"===t?s.setState({output:s.calcOutcome(s.state.storedVal,s.state.equationOperator,s.state.currentVal)}):"clear"===t&&(s.setState({output:""}),s.resetCalc())},s.calcOutcome=function(e,t,a){var s;switch(t){case"+":s=e+a;break;case"-":s=e-a;break;case"*":s=e*a;break;case"/":s=e/a}return s},s.state={currentVal:0,storedVal:0,belowZeroDivider:10,wholeNum:!0,output:"",equationOperator:"",negNum:!1,emptyDecimals:""},s.handleKeyPress=s.handleKeyPress.bind(Object(u.a)(s)),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"handleDigitInput",value:function(e){var t;console.log("digit input: "+e),!0===this.state.wholeNum?t=this.state.negNum?10*this.state.currentVal-e:10*this.state.currentVal+e:(t=this.state.negNum?this.state.currentVal-e/this.state.belowZeroDivider:this.state.currentVal+e/this.state.belowZeroDivider,this.setState({belowZeroDivider:10*this.state.belowZeroDivider}),0===e?this.setState({emptyDecimals:this.state.emptyDecimals+"0"}):this.setState({emptyDecimals:""})),this.setState({currentVal:t}),this.calcOutcome(this.state.storedVal,this.state.equationOperator,this.state.currentVal)===this.state.output&&this.setState({currentVal:t,output:""}),console.log(t)}},{key:"handleOperator",value:function(e){console.log("handling operator"),this.setState({equationOperator:e});var t=this.calcOutcome(this.state.storedVal,this.state.equationOperator,this.state.currentVal);0!==this.state.currentVal||0===this.state.output?(console.log("setting stored value = currentVal"),this.setState({storedVal:this.state.currentVal})):t!==this.output&&0!==this.state.currentVal&&(console.log("valid equation, setting storedVal and output to equation"),this.setState({storedVal:t,output:t,equationOperator:e,belowZeroDivider:10,wholeNum:!0,negNum:!1})),this.setState({currentVal:0,belowZeroDivider:10,wholeNum:!0,negNum:!1})}},{key:"resetCalc",value:function(){console.log("calculator reset"),this.setState({currentVal:0,storedVal:0,belowZeroDivider:10,wholeNum:!0,negNum:!1,equationOperator:""})}},{key:"handleKeyPress",value:function(e){console.log("key pressed: "+e.value);var t=h.find((function(t){return t.keyCode===e.keyCode}));t&&this.handleInput(t.value,t.type)}},{key:"render",value:function(){var e=this;return(o.a.createElement("div",{id:"calc",className:"calculator"},o.a.createElement("div",{className:"display"},o.a.createElement("p",{style:{display:0!==this.state.storedVal?"initial":"none"}},this.state.storedVal,0===this.state.storedVal?"":this.state.emptyDecimals),o.a.createElement("p",{style:{display:""!==this.state.equationOperator?"initial":"none"}},this.state.equationOperator),o.a.createElement("p",{style:{visibility:0!==this.state.currentVal?"visible":"hidden"}},this.state.currentVal,0===this.state.currentVal?"":this.state.emptyDecimals)),o.a.createElement("div",{className:"calculator-pad"},h.map((function(t,a){return o.a.createElement("button",{key:a,id:t.id,onClick:function(){return e.handleInput(t.value,t.type)}},t.value)}))),o.a.createElement("div",{className:"display"},o.a.createElement("p",{id:"display"},""!==this.state.output&&0!==this.state.storedVal?this.state.output:this.state.currentVal,0===this.state.currentVal?"":this.state.emptyDecimals))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9c3ef024.chunk.js.map