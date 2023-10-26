import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import editorContents from "./editorContents";
import MenuBar from "./MenuBar";
import {
  HypermediaKit,
  imageModal,
  youtubeModal,
  vimeoModal,
  soundCloudModal,
  twitterModal,
} from "@docs.plus/extension-hypermedia";

import * as Y from "yjs";
import Collaboration from "@tiptap/extension-collaboration";
import {
  Hyperlink,
  previewHyperlinkModal,
  setHyperlinkModal,
} from "@docs.plus/extension-hyperlink";

const ydoc = new Y.Doc();

// make sure import this arrow.css
import "tippy.js/dist/svg-arrow.css";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure(),
      Hyperlink.configure({
        hyperlinkOnPaste: false,
        openOnClick: true,
        modals: {
          previewHyperlink: previewHyperlinkModal,
          setHyperlink: setHyperlinkModal,
        },
      }),
      HypermediaKit.configure({
        Image: {
          modal: imageModal,
        },
        Youtube: {
          modal: youtubeModal,
        },
        Vimeo: {
          modal: vimeoModal,
        },
        SoundCloud: {
          modal: soundCloudModal,
        },
        Twitter: {
          modal: twitterModal,
        },
      }),

      TextAlign.configure({
        types: ["heading", "paragraph", "image"],
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Collaboration.configure({
        document: ydoc,
      }),
    ],
    content: editorContents,
  });

  return (
    <div className="w-[80rem] p-6 border rounded-md">
      <MenuBar editor={editor} />
      <div className="mt-4">
        <EditorContent editor={editor} id="editorContents" />
      </div>
    </div>
  );
};

export default Tiptap;
