import { useCallback, useState } from 'react';
import ReactFlow, {
    Background, Controls,
    addEdge, type Connection, type Edge, type Node, useNodesState, useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import TextNode from '../custom-nodes/TextNode';
import NodesPanel from './NodesPanel';
import SettingsPanel from './SettingsPanel';
import { v4 as uuid } from 'uuid';

const nodeTypes = { textNode: TextNode };

export default function FlowBuilder() {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);

    const onConnect = useCallback((params: Edge | Connection) => {
        const hasEdgeFromSource = edges.some(e => e.source === params.source);
        if (!hasEdgeFromSource) setEdges((eds) => addEdge(params, eds));
    }, [edges]);

    const handleNodeDrop = (type: string) => {
        const id = uuid();
        const newNode: Node = {
            id,
            type,
            position: { x: Math.random() * 400, y: Math.random() * 400 },
            data: { label: '' }
        };
        setNodes((nds) => [...nds, newNode]);
    };

    const onUpdateLabel = (label: string) => {
        setNodes((nds) =>
            nds.map((node) =>
                node.id === selectedNode?.id
                    ? {
                        ...node,
                        data: {
                            ...node.data,
                            label,
                        },
                    }
                    : node
            )
        );
    };


    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSave = () => {
        const nodesWithoutTarget = nodes.filter(
            (node) => !edges.some((e) => e.source === node.id)
        );

        if (nodes.length > 1 && nodesWithoutTarget.length > 1) {
            setError(true);
            setSuccess(false);
            setTimeout(() => setError(false), 3000); 
            return;
        }

        setError(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); 

    };


    return (
        <div className="flex h-screen">
            <div className="flex flex-1 flex-col justify-center ">
                <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
                    {error && (
                        <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
                            Cannot save Flow
                        </div>
                    )}
                    {success && (
                        <div className="bg-green-100 text-green-700 px-4 py-2 rounded">
                            ✅ Flow saved successfully
                        </div>
                    )}
                    <button
                        onClick={handleSave}
                        className="ml-auto bg-white text-blue-700 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50"
                    >
                        Save Changes
                    </button>
                </div>

                <div className="flex flex-1 h-full">
                    <ReactFlow
                        nodeTypes={nodeTypes}
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onNodeClick={(_, node) => setSelectedNode(node)}
                        fitView
                    >
                        <Background />
                        <Controls />

                    </ReactFlow>
                </div>
            </div>
            {selectedNode ? (
                <SettingsPanel
                    node={selectedNode}
                    onUpdateLabel={onUpdateLabel}
                    onClose={() => setSelectedNode(null)}
                />

            ) : (
                <NodesPanel onDragNode={handleNodeDrop} />
            )}
        </div>
    );
}
