import { Handle, Position } from 'reactflow';
import { memo } from 'react';
import { FaComments } from 'react-icons/fa';

type Props = {
  data: { label: string };
};

function TextNode({ data }: Props) {
  return (
    <div className="rounded border-2 border-blue-300 bg-white shadow-md w-64">
      <div className="bg-teal-100 px-3 py-2 flex items-center justify-between border-b-2">
        <div className="flex items-center gap-2 font-semibold text-sm">
          <FaComments />
          Send Message
        </div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
      <div className="p-3 text-sm">{data.label || 'Text node content'}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default memo(TextNode);
