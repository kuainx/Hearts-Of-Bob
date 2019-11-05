var researchStat = {
    0: 2
};
var tooltipChange1 = function(e) {
    updateStatus();
    text = '<b class="f-orange">' + e.label + '</b><br/><br/>';
    if (researchStat[e.id] == 2) {
        text += '<b class="f-green">已完成</b><br/>';
    } else if (researchStat[e.id] == 1) {
        text += '完成需要<b class="f-orange">' + e.turn + '</b>回合（剩余<b class="f-green">' + e.turn + '</b>回合）<br/>';
        if (e.require.length > 0) {
            e.require.forEach(function(e1) {
                text += '需要<b class="f-green">' + dataResearch.nodes[e1].label + '</b><br/>';
            });
        }
    } else {
        text += '完成需要<b class="f-orange">' + e.turn + '</b>回合<br/>';
        if (e.require.length > 0) {
            e.require.forEach(function(e1) {
                text += '需要<b class="f-red">' + dataResearch.nodes[e1].label + '</b><br/>';
            });
        }
    }
    return text;
};

var fillColor1 = {
    0: {
        0: "l(90) 0:#959595 1:#323232",
        1: "l(90) 0:hsl(0,0%,48%) 1:hsl(0,0%,9%)"
    },
    1: {
        0: "l(90) 0:rgb(142,126,87) 1:rgb(57,51,34)",
        1: "l(90) 0:hsl(42,24%,34%) 1:hsl(44,25%,7%)"
    },
    2: {
        0: "l(90) 0:rgb(62,88,59) 1:rgb(25,34,22)",
        1: "l(90) 0:hsl(113,19%,18%) 1:hsl(105,21%,0%)"
    }
};
var dataResearch = {
    nodes: [{
        id: "0",
        label: "开始研究",
        turn: 1,
        description: "研究可以增加我们的实力，提升学习效率。",
        require: []
    },{
        id: "1",
        label: "基础印刷机",
        turn: 1,
        description: "令人叹为观止的武器，“不科学”的科学产物。",
        require: [0]
    },{
        id: "2",
        label: "进阶印刷机",
        turn: 1,
        description: "令人叹为观止的武器，“不科学”的科学产物。",
        require: [1]
    },{
        id: "3",
        label: "强化印刷机",
        turn: 1,
        description: "令人叹为观止的武器，“不科学”的科学产物。",
        require: [2]
    },{
        id: "4",
        label: "谐振印刷机",
        turn: 1,
        description: "令人叹为观止的武器，“不科学”的科学产物。",
        require: [3]
    },{
        id: "5",
        label: "量子印刷机",
        turn: 1,
        description: "令人叹为观止的武器，“不科学”的科学产物。",
        require: [4]
    },{
        id: "6",
        label: "基础电子科技",
        turn: 1,
        description: "组建专业队伍和生产线来改造我们过时的资料以保证我们的学习永不停歇。",
        require: [0]
    },{
        id: "7",
        label: "进阶电子科技",
        turn: 1,
        description: "组建专业队伍和生产线来改造我们过时的资料以保证我们的学习永不停歇。",
        require: [6]
    },{
        id: "8",
        label: "强化电子科技",
        turn: 1,
        description: "组建专业队伍和生产线来改造我们过时的资料以保证我们的学习永不停歇。",
        require: [7]
    },{
        id: "9",
        label: "谐振电子科技",
        turn: 1,
        description: "组建专业队伍和生产线来改造我们过时的资料以保证我们的学习永不停歇。",
        require: [8]
    },{
        id: "10",
        label: "量子讯息传输",
        turn: 1,
        description: "组建专业队伍和生产线来改造我们过时的资料以保证我们的学习永不停歇。",
        require: [9]
    },{
        id: "11",
        label: "基础加密科技",
        turn: 1,
        description: "科研进步及经验积累让我们的信息有了更多保障数据流流量安全的手段。",
        require: [0]
    },{
        id: "12",
        label: "进阶加密科技",
        turn: 1,
        description: "科研进步及经验积累让我们的信息有了更多保障数据流流量安全的手段。",
        require: [1]
    },{
        id: "13",
        label: "强化加密科技",
        turn: 1,
        description: "科研进步及经验积累让我们的信息有了更多保障数据流流量安全的手段。",
        require: [2]
    },{
        id: "14",
        label: "谐振加密科技",
        turn: 1,
        description: "科研进步及经验积累让我们的信息有了更多保障数据流流量安全的手段。",
        require: [3]
    },{
        id: "15",
        label: "量子加密科技",
        turn: 1,
        description: "科研进步及经验积累让我们的信息有了更多保障数据流流量安全的手段。",
        require: [4]
    },{
        id: "16",
        label: "基础解密科技",
        turn: 1,
        description: "更复杂的计算机将带来新的密码分析学应用手段，例如和最新破译手段结合，用以破解新的加密手段。",
        require: [0]
    },{
        id: "17",
        label: "进阶解密科技",
        turn: 1,
        description: "更复杂的计算机将带来新的密码分析学应用手段，例如和最新破译手段结合，用以破解新的加密手段。",
        require: [6]
    },{
        id: "18",
        label: "强化解密科技",
        turn: 1,
        description: "更复杂的计算机将带来新的密码分析学应用手段，例如和最新破译手段结合，用以破解新的加密手段。",
        require: [7]
    },{
        id: "19",
        label: "谐振解密科技",
        turn: 1,
        description: "更复杂的计算机将带来新的密码分析学应用手段，例如和最新破译手段结合，用以破解新的加密手段。",
        require: [8]
    },{
        id: "20",
        label: "量子解密科技",
        turn: 1,
        description: "更复杂的计算机将带来新的密码分析学应用手段，例如和最新破译手段结合，用以破解新的加密手段。",
        require: [9]
    }],
    edges: [{
        source: "0",
        target: "1"
    }, {
        source: "1",
        target: "2"
    }, {
        source: "2",
        target: "3"
    }, {
        source: "3",
        target: "4"
    }, {
        source: "4",
        target: "5"
    },{
        source: "0",
        target: "6"
    }, {
        source: "6",
        target: "7"
    }, {
        source: "7",
        target: "8"
    }, {
        source: "8",
        target: "9"
    }, {
        source: "9",
        target: "10"
    },{
        source: "0",
        target: "11"
    }, {
        source: "11",
        target: "12"
    }, {
        source: "12",
        target: "13"
    }, {
        source: "13",
        target: "14"
    }, {
        source: "14",
        target: "15"
    },{
        source: "0",
        target: "16"
    }, {
        source: "16",
        target: "17"
    }, {
        source: "17",
        target: "18"
    }, {
        source: "18",
        target: "19"
    }, {
        source: "19",
        target: "20"
    }]
};

G6.registerNode("nodeResearch", {
    drawShape: function drawShape(cfg, group) {
        var rect = group.addShape("rect", {
            attrs: _extends({
                x: -50,
                y: -50,
                width: 100,
                height: 100,
                radius: 25,
                fillOpacity: 1
            }, {
                fill: fillColor1[researchStat[cfg.id] ? researchStat[cfg.id] : 0][0]
            })
        });
        return rect;
    },
    getAnchorPoints: function getAnchorPoints() {
        return [
            [1, 0.5],
            [0, 0.5]
        ];
    }
}, "single-shape");

G6.registerEdge("line-with-arrow1", {
    itemType: "edge",
    draw: function draw(cfg, group) {
        var startPoint = cfg.startPoint;
        var endPoint = cfg.endPoint;
        var centerPoint1 = {
            x: (startPoint.x + endPoint.x) / 2,
            y: startPoint.y
        };
        var centerPoint2 = {
            x: (startPoint.x + endPoint.x) / 2,
            y: endPoint.y
        };
        var path = group.addShape("path", {
            attrs: {
                path: [
                    ["M", startPoint.x, startPoint.y],
                    ["Q", centerPoint1.x, centerPoint1.y, centerPoint1.x, centerPoint1.y],
                    ["T", centerPoint2.x, centerPoint2.y],
                    ["L", endPoint.x, endPoint.y]
                ],
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

var g1 = new dagre.graphlib.Graph();
g1.setDefaultEdgeLabel(function() {
    return {};
});
g1.setGraph({
    rankdir: 'LR'
});

dataResearch.nodes.forEach(function(node) {
    g1.setNode(node.id + '', {
        width: 100,
        height: 100
    });
});

dataResearch.edges.forEach(function(edge) {
    edge.source = edge.source + '';
    edge.target = edge.target + '';
    g1.setEdge(edge.source, edge.target);
});
dagre.layout(g1);

var coord = void 0;
g1.nodes().forEach(function(node, i) {
    coord = g1.node(node);
    dataResearch.nodes[i].x = coord.x;
    dataResearch.nodes[i].y = coord.y;
});
g1.edges().forEach(function(edge, i) {
    coord = g1.edge(edge);
    var startPoint = coord.points[0];
    var endPoint = coord.points[coord.points.length - 1];
    dataResearch.edges[i].startPoint = startPoint;
    dataResearch.edges[i].endPoint = endPoint;
    dataResearch.edges[i].controlPoints = coord.points.slice(1, coord.points.length - 1);
});

function refreshResearch() {
    document.getElementById("researchContainer").innerHTML = "";
    var graph1 = new G6.Graph({
        container: "researchContainer",
        width: document.getElementById("bg").offsetWidth,
        height: document.getElementById("bg").offsetHeight - 78,
        pixelRatio: 2,
        modes: {
            default: ['drag-canvas', 'zoom-canvas', {
                type: 'tooltip',
                formatText(model) {
                    return tooltipChange1(model);
                },
                shouldUpdate: e => {
                    return true;
                }
            }]
        },
        fitView: false,
        defaultNode: {
            shape: "nodeResearch",
            labelCfg: {
                style: {
                    fill: "#fff",
                    fontSize: 14,
                    textAlign: "center"
                }
            }
        },
        defaultEdge: {
            shape: "line-with-arrow1"
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
    graph1.data(dataResearch);
    graph1.render();

    graph1.on('node:mouseenter', e => {
        graph1.update(e.item, {
            style: {
                fill: fillColor1[researchStat[e.item._cfg.id] ? researchStat[e.item._cfg.id] : 0][1]
            }
        });
    });
    graph1.on('node:mouseleave', e => {
        graph1.update(e.item, {
            style: {
                fill: fillColor1[researchStat[e.item._cfg.id] ? researchStat[e.item._cfg.id] : 0][0]
            }
        });
    });
    graph1.on('node:click', e => {
        var node = e.item._cfg.model;
        updateStatus();
        var req = "";
        document.getElementById("modalResearchDetailBtn").disabled = true;
        if (researchStat[node.id] == 2) {
            req += '<b class="f-green">已完成</b><br/>';
        } else if (researchStat[node.id] == 1) {
            req += '完成需要<b class="f-orange">' + node.turn + '</b>回合（剩余<b class="f-green">' + node.turn + '</b>回合）<br/>';
            if (node.require.length > 0) {
                node.require.forEach(function(e1) {
                    req += '需要<b class="f-green">' + dataResearch.nodes[e1].label + '</b><br/>';
                });
            }
            document.getElementById("modalResearchDetailBtn").disabled = false;
        } else {
            req += '前提条件不满足<br/>完成需要<b class="f-orange">' + node.turn + '</b>回合<br/>';
            if (node.require.length > 0) {
                node.require.forEach(function(e1) {
                    req += '需要<b class="f-red">' + dataResearch.nodes[e1].label + '</b><br/>';
                });
            }
        }
        document.getElementById("modalResearchDetailRequire").innerHTML = req;
        document.getElementById("modalResearchDetailHead").innerHTML = node.label;
        document.getElementById("modalResearchDetailTurn").innerHTML = node.turn + "回合";
        document.getElementById("modalResearchDetailDescription").innerHTML = node.description;
        document.getElementById("modalResearchDetailEffect").innerHTML = getPolicyEffects(e.effect?e.effect:[]);
        document.getElementById("modalResearchDetailBtn").onclick = function() {};
        $("#modalResearchDetail").modal("show")
    });
}
