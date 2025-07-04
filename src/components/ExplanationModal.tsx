import { Dialog } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  content: string;
  onClose: () => void;
}

export default function ExplanationModal({ isOpen, content, onClose }: Props) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50" />
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Panel className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
          <Dialog.Title className="text-lg font-semibold mb-2">Explanation</Dialog.Title>
          <p className="text-gray-800 whitespace-pre-wrap">{content}</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
