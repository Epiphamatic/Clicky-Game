(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,image:"hoatzin.jpg"},{id:2,image:"irrawaddy.jpg"},{id:3,image:"jerboa.jpg"},{id:4,image:"kakapo.jpg"},{id:5,image:"mantisshrimp.jpg"},{id:6,image:"molelizard.jpg"},{id:7,image:"okapi.JPG"},{id:8,image:"pangolin.jpg"},{id:9,image:"quokka.jpg"},{id:10,image:"saiga.jpg"},{id:11,image:"scorpionfly.jpg"},{id:12,image:"seapig.jpg"}]},function(e,a,t){e.exports=t(41)},,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){var i={"./background.png":24,"./forest.gif":25,"./hoatzin.jpg":26,"./irrawaddy.jpg":27,"./jerboa.jpg":28,"./kakapo.jpg":29,"./mantisshrimp.jpg":30,"./molelizard.jpg":31,"./okapi.JPG":32,"./pangolin.jpg":33,"./quokka.jpg":34,"./rain.gif":35,"./saiga.jpg":36,"./scorpionfly.jpg":37,"./seapig.jpg":38};function n(e){var a=r(e);return t(a)}function r(e){var a=i[e];if(!(a+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=23},function(e,a,t){e.exports=t.p+"static/media/background.4e889282.png"},function(e,a,t){e.exports=t.p+"static/media/forest.f9477409.gif"},function(e,a,t){e.exports=t.p+"static/media/hoatzin.ba344abb.jpg"},function(e,a,t){e.exports=t.p+"static/media/irrawaddy.113fe681.jpg"},function(e,a,t){e.exports=t.p+"static/media/jerboa.7b7af1d1.jpg"},function(e,a,t){e.exports=t.p+"static/media/kakapo.352c193e.jpg"},function(e,a,t){e.exports=t.p+"static/media/mantisshrimp.63e42a73.jpg"},function(e,a,t){e.exports=t.p+"static/media/molelizard.8ca8b2a8.jpg"},function(e,a,t){e.exports=t.p+"static/media/okapi.60f1535e.JPG"},function(e,a,t){e.exports=t.p+"static/media/pangolin.630360ed.jpg"},function(e,a,t){e.exports=t.p+"static/media/quokka.f422adee.jpg"},function(e,a,t){e.exports=t.p+"static/media/rain.4d7d5daa.gif"},function(e,a,t){e.exports=t.p+"static/media/saiga.5ac9a8cf.jpg"},function(e,a,t){e.exports=t.p+"static/media/scorpionfly.26cdb60b.jpg"},function(e,a,t){e.exports=t.p+"static/media/seapig.406eee0f.jpg"},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(7),c=t.n(r),o=(t(15),t(1)),s=t(2),p=t(4),m=t(3),l=t(5),g=(t(17),function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top navBackground"},n.a.createElement("ul",null,n.a.createElement("li",{className:"itemCenter"},"Score: ",this.props.score)))}}]),a}(i.Component)),u=(t(19),function(){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",null," Weird Animal Clicker Game "),n.a.createElement("h2",null,"Clicking on an image gives you a point, but if you click it again you lose. Remember which ones you chose and pick all 12 to win!"))}),d=(t(21),function(e){return n.a.createElement("div",{className:"imgDivDiv",onClick:e.imageClick},n.a.createElement("div",{className:"imgDiv"},n.a.createElement("img",{className:"image",alt:e.image.replace(".jpg",""),src:t(23)("./"+e.image)})))}),f=t(8),j=(t(39),function(e){function a(){var e,t;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={Animal:f,clickedAnimal:[],score:0},t.imageClick=function(e){var a=e.target.alt;t.state.clickedAnimal.indexOf(a)>-1?(t.setState({Animal:t.state.Animal.sort(function(e,a){return.5-Math.random()}),clickedAnimal:[],score:0}),alert("You lose. Play again?")):t.setState({Animal:t.state.Animal.sort(function(e,a){return.5-Math.random()}),clickedAnimal:t.state.clickedAnimal.concat(a),score:t.state.score+1},function(){12===t.state.score&&(alert("Yay! You Win!"),t.setState({Animal:t.state.Animal.sort(function(e,a){return.5-Math.random()}),clickedAnimal:[],score:0}))})},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(g,{score:this.state.score}),n.a.createElement(u,null),n.a.createElement("div",{className:"wrapper"},this.state.Animal.map(function(a){return n.a.createElement(d,{imageClick:e.imageClick,id:a.id,key:a.id,image:a.image})})))}}]),a}(i.Component));c.a.render(n.a.createElement(j,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.0a9531b3.chunk.js.map