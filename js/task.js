require.config({
    baseUrl: './',
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
});

addEventListener('message', function(mainEvent) {
    require(['util/graph', 'enum/direction'], function(Graph, Direction) {
        'use strict';

        // Build a graph object from a JSON object passed from the worker
        function constructGraph(dictionary) {
            var
            graph = new module.Graph(),
                key;
            // Add the nodes to the graph
            for (key in dictionary) {
                if (dictionary.hasOwnProperty(key)) {
                    key = parseInt(key);
                    graph.addNode(key);
                }
            }
            // Add the edges
            for (key in dictionary) {
                if (dictionary.hasOwnProperty(key)) {
                    key = parseInt(key);

                    var
                    node = graph.getNode(key),
                        neighborArr = dictionary[key],
                        neighborArrLen = neighborArr.length,
                        edge,
                        neighborKey,
                        neighbor,
                        direction;

                    for (var index = 0; index < neighborArrLen; index++) {
                        neighborKey = neighborArr[i],
                        neighbor = graph.getNode(neighborKey),
                        direction = index + Direction.MIN;

                        edge = graph.addEdge(node, neighbor);
                        edge.data = direction;
                    }
                }
            }
            return graph;
        }

        function getPath(graph, source, dest) {
            var currentNode,
                path = [];

            graph.dijkstra(source, dest);

            currentNode = dest;
            while (currentNode.previous !== undefined) {
                currentNode = currentNode.previous;
                path.push(currentNode.data);
            }

            var pathLen = path.length;
            return path.reverse():
        }


        var
        obj = {
            0: [1, 2, 3],
            1: [0, 3],
            2: [0, 2],
            3: [1, 2]
        },
            graph = Graph.construct(obj),

            tail = graph.getNode(0),
            neighs = tail.neighbors,
            edge;

        neighs.forEach(function(head) {
            edge = graph.getEdge(tail, head);
            console.debug(head.data);
        });


    });
});
