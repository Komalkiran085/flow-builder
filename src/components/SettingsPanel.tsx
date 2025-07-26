type Props = {
  node: any;
  onUpdateLabel: (label: string) => void;
  onClose: () => void;
};

import { useState } from "react";

export default function SettingsPanel({ node, onUpdateLabel, onClose }: Props) {
  const [text, setText] = useState(node.data.label);

  const handleSave = () => {
    onUpdateLabel(text);   
    onClose();             
  };

  return (
    <div className="w-80 h-full border-l p-6 bg-white relative">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onClose} className="text-xl font-light">{'←'}</button>
        <h3 className="text-lg font-semibold">Message</h3>
        <div />
      </div>

      <label className="text-sm text-gray-600 mb-1 block">Text</label>
      <textarea
        rows={5}
        className="w-full border p-2 text-sm rounded resize-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleSave}
        className=" top-4 right-4 bg-white text-blue-700 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 shadow-sm"
      >
        Save Changes
      </button>
    </div>
  );
}
