var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
};
var focusStat={5:2};
var updateStatus = function(){
  data.nodes.forEach(function(e,val){
      focusStat[e.id]=focusStat[e.id]?focusStat[e.id]:0;
      if(focusStat[e.id]!=2){
          let complete=true;
          e.require.forEach(function(e1){
              if(focusStat[e1]!=2){
                  complete=false;
              }
          });
          if(complete===true){
              focusStat[e.id]=1;
          }
      }
  });
};
var tooltipChange = function(e){
  updateStatus();
  text='<b class="f-orange">'+e.label+'</b><br/><br/>';
  if(focusStat[e.id]==2){
      text+='<b class="f-green">已完成</b><br/>';
  }else if(focusStat[e.id]==1){
      text+='完成需要<b class="f-orange">'+e.turn+'</b>回合（剩余<b class="f-green">'+e.turn+'</b>回合）<br/>';
      if(e.require.length>0){
          e.require.forEach(function(e1){
              text+='需要<b class="f-green">'+data.nodes[e1].label+'</b><br/>';
          });
      }
  }else{
      text+='完成需要<b class="f-orange">'+e.turn+'</b>回合<br/>';
      if(e.require.length>0){
          e.require.forEach(function(e1){
              text+='需要<b class="f-red">'+data.nodes[e1].label+'</b><br/>';
          });
      }
  }
  text+='<br/><b class="f-orange">效果：</b><br/>'+getPolicyEffects(e.effect);
  return text;
};
var getPolicyEffects = function(e){
  var ret="";
  e.forEach(function(e,i){
      (i!==0)&&(ret+="<br/>");
      switch(e.type){
            case 'eduPoint':
                ret+='教育点数：';
                if(e.amount>0){
                    ret+='<b class="f-green">+';
                }else{
                    ret+='<b class="f-red">';
                }
                ret+=e.amount+'</b>';
                break;
            case 'stability':
                ret+='班级稳定度：';
                if(e.amount>0){
                    ret+='<b class="f-green">+';
                }else{
                    ret+='<b class="f-red">';
                }
                ret+=e.amount*100+'%</b>';
                break;
            case 'leader':
                ret+='<b class="f-orange">'+e.name+'</b>成为班级领导人';
                break;
            case 'research':
                ret+='获得<b class="f-green">'+e.amount+'</b>个教师栏位';
                break;
            case 'factory':
                ret+='获得<b class="f-green">'+e.amount+'</b>个文印室';
                break;
            case 'spiritAdd':
                ret+='获得班级精神：<b class="f-orange">'+e.name+'</b>，其效果为（'+getSpiritEffect(e.effect,"，")+'）';
                break;
            case 'spiritRep':
                ret+='以班级精神<b class="f-orange">'+e.name+'</b>取代<b class="f-orange">'+e.nameDel+'</b>，其效果为（'+getSpiritEffect(e.effect,"，")+'）';
                break;
            case 'spiritDel':
                ret+='移除班级精神：<b class="f-orange">'+e.name+'</b>';
                break;
      }
  });
  (ret==="")&&(ret="这个策略目前没有实际影响，但随着学校局势的变化可能会发生改变");
  return ret;
};
var getSpiritEffect = function(e,divide="<br/>"){
var ret="",num=0;
for(var attr in e){
    (num!==0)&&(ret+=divide);
    switch(attr){
        case 'eduPoint':
            ret+='教育点数：';
            break;
        case 'stability':
            ret+='班级稳定度：';
            break;
        case 'studySpeed':
            ret+='学习速度：';
            break;
        case 'studySupport':
            ret+='学术支持率：';
            break;
    }
    if(e[attr]>0){
        ret+='<b class="f-green">+';
    }else{
        ret+='<b class="f-red">';
    }
    ret+=e[attr]*100+'%</b>';
    num++;
}
return ret;
};
var fillColor={
  0:{
      0:"l(90) 0:#5E4940 1:#120E0C",
      1:"l(90) 0:#9B5436 1:#36241B"
  },
  1:{
      0:"l(90) 0:#9AA1A6 1:#515858",
      1:"l(90) 0:#B1BCC3 1:#5D7E7E"
  },
  2:{
      0:"l(90) 0:#D19152 1:#50341F",
      1:"l(90) 0:#DEAB78 1:#834B20"
  }
};
var data = {
nodes: [{
  id: "0",
  label: "建立班级",
  turn: 1,
  description: "在新的一学年，学校一如往常的需要建立各个班级。在建立班级后即可任命班主任、教师和分配学生。",
  require:[],
  effect:[{
      type:"eduPoint",
      amount:150
  }]
},{
  id: "1",
  label: "举行班会",
  turn: 1,
  description: "通过举行班会，我们可以调整学习倾向，以便于更好地适应班级的当前情况。",
  require:[0],
  effect:[{
      type:"leader",
      name:"YET"
  },{
      type:"stability",
      amount:0.3
  }]
},{
  id: "2",
  label: "任命教师",
  turn: 1,
  description: "在建立班级之后，我们必须组建我们的教学队伍，以保证我们能够和其他班级抗衡。",
  require:[0],
  effect:[{
      type:"spiritAdd",
      name:"学不死就往死里学",
      effect:{
          studySpeed:0.3,
          studySupport:-0.2,
          stability:-0.05
      }
  }]
},{
  id: "3",
  label: "任命教师",
  turn: 1,
  description: "在建立班级之后，我们必须组建我们的教学队伍，以保证我们能够和其他班级抗衡。",
  require:[0],
  effect:[{
  }]
},{
  id: "4",
  label: "调整学习",
  turn: 1,
  description: "随着学校局势紧张的加剧，我们当前的学习倾向显然无法保护班级的利益。现在是时候彻底抛弃之前的学习倾向了。",
  require:[],
  effect:[{
  }]
},{
  id: "5",
  label: "平稳学习",
  turn: 1,
  description: "日益严重的危机正是我们必须坚持自身根本的原因。我们将继续我们之前的学习倾向，而不是做出任何可能导致内部不稳的变化，这种变化我们负担不起。",
  require:[],
  effect:[{
  }]
}],
edges: [{
  source: "0",
  target: "1"
},{
  source: "0",
  target: "2"
},{
  source: "0",
  target: "3"
},{
  source: "0",
  target: "4"
},{
  source: "0",
  target: "5"
}]
};

G6.registerNode("node", {
drawShape: function drawShape(cfg, group) {
  var rect = group.addShape("rect", {
    attrs: _extends({
      x: -75,
      y: -25,
      width: 150,
      height: 50,
      radius: 25,
      fill: "#66ccff",
      fillOpacity: 1
    }, {fill:fillColor[focusStat[cfg.id]?focusStat[cfg.id]:0][0]})
  });
  return rect;
},
// 设置状态
setState: function setState(name, value, item) {
  var group = item.getContainer();
  var shape = group.get("children")[0]; // 顺序根据 draw 时确定

  if (name === "selected") {
    if (value) {
      shape.attr("fill", "#F6C277");
    } else {
      shape.attr("fill", "#FFD591");
    }
  }
},
getAnchorPoints: function getAnchorPoints() {
  return [[0.5, 1], [0.5, 0]];
}
}, "single-shape");

G6.registerEdge("line-with-arrow", {
itemType: "edge",
draw: function draw(cfg, group) {
  var startPoint = cfg.startPoint;
  var endPoint = cfg.endPoint;
  var centerPoint1 = {
    x: startPoint.x,
    y: (startPoint.y + endPoint.y) / 2
  };
  var centerPoint2 = {
    x: endPoint.x,
    y: (startPoint.y + endPoint.y) / 2
  };
  // 为了更好的展示效果, 对称贝塞尔曲线需要连到箭头根部
  var path = group.addShape("path", {
    attrs: {
      path: [["M", startPoint.x, startPoint.y], ["Q", centerPoint1.x, centerPoint1.y, centerPoint1.x, centerPoint1.y], ["T", centerPoint2.x, centerPoint2.y], ["L", endPoint.x, endPoint.y]],
      stroke: "#ccc",
      lineWidth: 1.6,
      endArrow: {
        path: "M 4,0 L -4,-4 L -4,4 Z",
        d: 4
      }
    }
  });
  return path;
}
});

var g = new dagre.graphlib.Graph();
    g.setDefaultEdgeLabel(function() {
    return {};
});
g.setGraph({
    rankdir: 'TB'
});

data.nodes.forEach(function(node) {
    g.setNode(node.id + '', {
      width: 150,
      height: 50
    });
});

data.edges.forEach(function(edge) {
    edge.source = edge.source + '';
    edge.target = edge.target + '';
    g.setEdge(edge.source, edge.target);
});
dagre.layout(g);

var coord = void 0;
g.nodes().forEach(function(node, i) {
    coord = g.node(node);
    data.nodes[i].x = coord.x;
    data.nodes[i].y = coord.y;
});
g.edges().forEach(function(edge, i) {
    coord = g.edge(edge);
    var startPoint = coord.points[0];
    var endPoint = coord.points[coord.points.length - 1];
    data.edges[i].startPoint = startPoint;
    data.edges[i].endPoint = endPoint;
    data.edges[i].controlPoints = coord.points.slice(1, coord.points.length - 1);
});

function refreshFocus(){
    document.getElementById("focusContainer").innerHTML="";
    var graph = new G6.Graph({
    container: "focusContainer",
    width: document.getElementById("bg").offsetWidth,
    height: document.getElementById("bg").offsetHeight-78,
    pixelRatio: 2,
    fitViewPadding: [ 20, 40, 50, 20 ],
    modes: {
        default: ['drag-canvas', 'zoom-canvas',{
            type: 'tooltip',
            formatText(model) {
              return tooltipChange(model);
            },
            shouldUpdate: e => {
              return true;
            }
        }]
    },
    fitView: false,
    defaultNode: {
      shape: "node",
      labelCfg: {
        style: {
          fill: "#fff",
          fontSize: 14
        }
      }
    },
    defaultEdge: {
      shape: "line-with-arrow"
    },
    edgeStyle: {
      default: {
        endArrow: true,
        lineWidth: 2,
        stroke: "#ccc"
      }
    }
    });
    updateStatus();
    graph.data(data);
    graph.render();
    
    graph.on('node:mouseenter', e => {
      graph.update(e.item,{style: {
          fill: fillColor[focusStat[e.item._cfg.id]?focusStat[e.item._cfg.id]:0][1]
      }});
    });
    graph.on('node:mouseleave', e => {
      graph.update(e.item,{style: {
          fill: fillColor[focusStat[e.item._cfg.id]?focusStat[e.item._cfg.id]:0][0]
      }});
    });
    graph.on('node:click', e => {
      var node=e.item._cfg.model;
      updateStatus();
      var req="";
      document.getElementById("modalFocusDetailBtn").disabled=true;
      if(focusStat[node.id]==2){
          req+='<b class="f-green">已完成</b><br/>';
      }else if(focusStat[node.id]==1){
          req+='完成需要<b class="f-orange">'+node.turn+'</b>回合（剩余<b class="f-green">'+node.turn+'</b>回合）<br/>';
          if(node.require.length>0){
              node.require.forEach(function(e1){
                  req+='需要<b class="f-green">'+data.nodes[e1].label+'</b><br/>';
              });
          }
          document.getElementById("modalFocusDetailBtn").disabled=false;
      }else{
          req+='前提条件不满足<br/>完成需要<b class="f-orange">'+node.turn+'</b>回合<br/>';
          if(node.require.length>0){
              node.require.forEach(function(e1){
                  req+='需要<b class="f-red">'+data.nodes[e1].label+'</b><br/>';
              });
          }
      }
      document.getElementById("modalFocusDetailRequire").innerHTML=req;
      document.getElementById("modalFocusDetailHead").innerHTML=node.label;
      document.getElementById("modalFocusDetailTurn").innerHTML=node.turn+"回合";
      document.getElementById("modalFocusDetailDescription").innerHTML=node.description;
      document.getElementById("modalFocusDetailEffect").innerHTML=getPolicyEffects(node.effect);
      document.getElementById("modalFocusDetailBtn").onclick=function(){};
      $("#modalFocusDetail").modal("show")
    });
}
refreshFocus();

