type Props = {
  onDragNode: (type: string) => void;
};

export default function NodesPanel({ onDragNode }: Props) {
  return (
    <div className="w-60 bg-gray-100 p-4 border-r">
      <h3 className="font-bold mb-4">Nodes Panel</h3>
      <button
        className="bg-white text-blue-700 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 "
        onClick={() => onDragNode('textNode')}
      >
        + Text Node
      </button>
    </div>
  );
}
